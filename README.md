# qilin.github.io

自动抓取东北大学教师主页 `http://faculty.neu.edu.cn/qilin/zh_CN/index.htm`（中文/英文）并生成可发布到 GitHub Pages 的静态站点。

## 目录

- `crawl_site.ps1`：抓取整站栏目页面，提取文字/图片/表格，生成 `data/site-data.json`
- `assets/mirror/`：抓取到的图片本地镜像
- `index.html` + `script.js` + `styles.css`：前端展示页

## 更新数据

在仓库根目录执行：

```powershell
.\crawl_site.ps1
```

执行后提交并推送到 `main`，即可通过 `https://qilin.github.io` 访问最新页面。