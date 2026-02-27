$ErrorActionPreference = 'Stop'

$root = Get-Location
$dataDir = Join-Path $root 'data'
$imgDir = Join-Path $root 'assets\mirror'
New-Item -ItemType Directory -Path $dataDir -Force | Out-Null
New-Item -ItemType Directory -Path $imgDir -Force | Out-Null

function Normalize-Url([string]$base, [string]$raw) {
    if ([string]::IsNullOrWhiteSpace($raw)) { return $null }
    try {
        if ($raw.StartsWith('//')) { return "http:$raw" }
        if ($raw.StartsWith('http://') -or $raw.StartsWith('https://')) { return $raw }
        $u = [System.Uri]::new([System.Uri]::new($base), $raw)
        return $u.AbsoluteUri
    } catch {
        return $null
    }
}

function Get-Html([string]$url) {
    try {
        $wc = New-Object System.Net.WebClient
        $wc.Headers['User-Agent'] = 'Mozilla/5.0'
        $bytes = $wc.DownloadData($url)
    } catch {
        return $null
    }

    if (-not $bytes -or $bytes.Length -eq 0) { return $null }

    $probe = [System.Text.Encoding]::ASCII.GetString($bytes)
    $meta = [regex]::Match($probe, '(?is)charset\s*=\s*["'']?([A-Za-z0-9_\-]+)')
    $charset = if ($meta.Success) { $meta.Groups[1].Value } else { 'utf-8' }

    try {
        $enc = [System.Text.Encoding]::GetEncoding($charset)
    } catch {
        $enc = [System.Text.Encoding]::UTF8
    }

    return $enc.GetString($bytes)
}

function Strip-Html([string]$html) {
    if ([string]::IsNullOrWhiteSpace($html)) { return '' }
    $text = $html -replace '(?is)<script.*?</script>', ' '
    $text = $text -replace '(?is)<style.*?</style>', ' '
    $text = $text -replace '(?is)<[^>]+>', ' '
    $text = [System.Net.WebUtility]::HtmlDecode($text)
    $text = $text -replace '\s+', ' '
    return $text.Trim()
}

function Parse-Tables([string]$html) {
    $tables = @()
    $tMatches = [regex]::Matches($html, '(?is)<table[^>]*>.*?</table>')
    foreach ($t in $tMatches) {
        $rows = @()
        $rMatches = [regex]::Matches($t.Value, '(?is)<tr[^>]*>.*?</tr>')
        foreach ($r in $rMatches) {
            $cells = @()
            $cMatches = [regex]::Matches($r.Value, '(?is)<t[dh][^>]*>(.*?)</t[dh]>')
            foreach ($c in $cMatches) {
                $cellText = Strip-Html $c.Groups[1].Value
                if ($cellText) { $cells += $cellText }
            }
            if ($cells.Count -gt 0) { $rows += ,$cells }
        }
        if ($rows.Count -gt 0) { $tables += ,$rows }
    }
    return $tables
}

function Crawl-Lang([string]$startUrl, [string]$langToken, [int]$maxPages) {
    $queue = New-Object System.Collections.Queue
    $queue.Enqueue($startUrl)
    $visited = New-Object 'System.Collections.Generic.HashSet[string]'
    $pages = @()
    $imageSet = New-Object 'System.Collections.Generic.HashSet[string]'

    while ($queue.Count -gt 0 -and $pages.Count -lt $maxPages) {
        $url = [string]$queue.Dequeue()
        if (-not $url) { continue }
        if ($visited.Contains($url)) { continue }
        $null = $visited.Add($url)

        $html = Get-Html $url
        if (-not $html) {
            continue
        }

        $titleMatch = [regex]::Match($html, '(?is)<title[^>]*>(.*?)</title>')
        $title = if ($titleMatch.Success) { Strip-Html $titleMatch.Groups[1].Value } else { $url }

        $links = @()
        $aMatches = [regex]::Matches($html, '(?is)<a[^>]+href=["''][^"'']+["'']')
        foreach ($a in $aMatches) {
            $hrefMatch = [regex]::Match($a.Value, '(?is)href=["'']([^"'']+)["'']')
            if (-not $hrefMatch.Success) { continue }
            $abs = Normalize-Url $url $hrefMatch.Groups[1].Value
            if (-not $abs) { continue }
            if ($abs -notmatch '^https?://faculty\.neu\.edu\.cn/') { continue }
            if ($abs -notmatch "/qilin/$langToken/") { continue }
            $links += $abs
            if (-not $visited.Contains($abs)) { $queue.Enqueue($abs) }
        }

        $images = @()
        $imgMatches = [regex]::Matches($html, '(?is)<img[^>]+src=["'']([^"'']+)["'']')
        foreach ($m in $imgMatches) {
            $absImg = Normalize-Url $url $m.Groups[1].Value
            if (-not $absImg) { continue }
            $images += $absImg
            $null = $imageSet.Add($absImg)
        }

        $plainText = Strip-Html $html
        if ($plainText.Length -gt 6000) {
            $plainText = $plainText.Substring(0, 6000)
        }

        $segment = 'misc'
        $segMatch = [regex]::Match($url, "/qilin/$langToken/([^/?#]+)/")
        if ($segMatch.Success) { $segment = $segMatch.Groups[1].Value }

        $pages += [PSCustomObject]@{
            lang = $langToken
            section = $segment
            url = $url
            title = $title
            text = $plainText
            tables = @(Parse-Tables $html)
            images = @($images | Select-Object -Unique)
            links = @($links | Select-Object -Unique)
        }
    }

    return [PSCustomObject]@{
        pages = @($pages)
        images = @($imageSet)
    }
}

function Download-Images([array]$urls, [string]$targetDir, [int]$maxImages) {
    $map = @{}
    $i = 0
    foreach ($u in ($urls | Select-Object -Unique)) {
        if ($i -ge $maxImages) { break }
        try {
            $uriObj = [System.Uri]$u
            $ext = [System.IO.Path]::GetExtension($uriObj.AbsolutePath)
            if ([string]::IsNullOrWhiteSpace($ext)) { $ext = '.bin' }
            if ($ext.Length -gt 6) { $ext = '.bin' }
            $name = ('img_{0:D4}{1}' -f $i, $ext)
            $dest = Join-Path $targetDir $name
            Invoke-WebRequest -Uri $u -OutFile $dest -UseBasicParsing -TimeoutSec 30
            $map[$u] = "assets/mirror/$name"
            $i++
        } catch {
            continue
        }
    }
    return $map
}

$zhStart = 'http://faculty.neu.edu.cn/qilin/zh_CN/index.htm'
$enStart = 'http://faculty.neu.edu.cn/qilin/en/index.htm'

$zh = Crawl-Lang -startUrl $zhStart -langToken 'zh_CN' -maxPages 80
$en = Crawl-Lang -startUrl $enStart -langToken 'en' -maxPages 80

$allImages = @($zh.images + $en.images) | Select-Object -Unique
$imageMap = Download-Images -urls $allImages -targetDir $imgDir -maxImages 160

$siteData = [PSCustomObject]@{
    generatedAt = (Get-Date).ToString('s')
    source = 'http://faculty.neu.edu.cn/qilin/zh_CN/index.htm'
    pages = @($zh.pages + $en.pages)
    imageMap = $imageMap
    summary = [PSCustomObject]@{
        zhPages = $zh.pages.Count
        enPages = $en.pages.Count
        imagesDownloaded = $imageMap.Keys.Count
    }
}

$json = $siteData | ConvertTo-Json -Depth 12
Set-Content -Path (Join-Path $dataDir 'site-data.json') -Value $json -Encoding UTF8
Write-Host "Done. zh=$($zh.pages.Count) en=$($en.pages.Count) images=$($imageMap.Keys.Count)"
