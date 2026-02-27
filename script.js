const zhBtn = document.getElementById('btn-zh');
const enBtn = document.getElementById('btn-en');
const summaryGrid = document.getElementById('summary-grid');
const sectionChips = document.getElementById('section-chips');
const pagesContainer = document.getElementById('pages-container');

let currentLang = 'zh_CN';
let dataStore = null;
let selectedSection = 'all';

const labels = {
  zh_CN: {
    summary: '抓取概览',
    columns: '栏目导航',
    content: '栏目内容',
    footer: '数据来源：东北大学教师主页（中/英文）',
    pages: '页面数',
    images: '图片数',
    tables: '含表格页面',
    sectionAll: '全部',
    text: '文字',
    table: '表格',
    image: '图片',
    source: '原文链接',
    none: '暂无内容'
  },
  en: {
    summary: 'Crawl Summary',
    columns: 'Column Navigation',
    content: 'Column Content',
    footer: 'Data source: Northeastern University faculty homepage (CN/EN)',
    pages: 'Pages',
    images: 'Images',
    tables: 'Pages With Tables',
    sectionAll: 'All',
    text: 'Text',
    table: 'Table',
    image: 'Image',
    source: 'Source URL',
    none: 'No content'
  }
};

function langKey() {
  return currentLang === 'zh_CN' ? 'zh_CN' : 'en';
}

function t(key) {
  return labels[langKey()][key] || key;
}

function sectionTitle(raw) {
  const map = {
    index: { zh_CN: '首页', en: 'Home' },
    zhym: { zh_CN: '科学/教学研究', en: 'Research/Teaching' },
    yjgk: { zh_CN: '研究概况', en: 'Research Overview' },
    zdylm: { zh_CN: '重点栏目', en: 'Featured Columns' },
    zlcg: { zh_CN: '论文成果/专利', en: 'Publications/Patents' },
    skxx: { zh_CN: '授课信息', en: 'Teaching Info' },
    jxcg: { zh_CN: '教学成果', en: 'Teaching Achievements' },
    img: { zh_CN: '教师风采', en: 'Gallery' },
    yjfx: { zh_CN: '研究方向', en: 'Research Focus' },
    more: { zh_CN: '更多', en: 'More' },
    misc: { zh_CN: '主页', en: 'Main Page' }
  };
  return (map[raw] && map[raw][langKey()]) || raw;
}

function buildSummary() {
  const pages = dataStore.pages.filter((item) => item.lang === currentLang);
  const imageCount = new Set(pages.flatMap((item) => item.images || [])).size;
  const tablePages = pages.filter((item) => (item.tables || []).length > 0).length;
  summaryGrid.innerHTML = `
    <article class="stat"><strong>${pages.length}</strong><span>${t('pages')}</span></article>
    <article class="stat"><strong>${imageCount}</strong><span>${t('images')}</span></article>
    <article class="stat"><strong>${tablePages}</strong><span>${t('tables')}</span></article>
  `;
}

function buildChips() {
  const pages = dataStore.pages.filter((item) => item.lang === currentLang);
  const sections = [...new Set(pages.map((item) => item.section || 'misc'))];
  const chipHtml = [
    `<button class="chip ${selectedSection === 'all' ? 'active' : ''}" data-section="all">${t('sectionAll')}</button>`
  ];

  sections.forEach((section) => {
    const activeClass = selectedSection === section ? 'active' : '';
    chipHtml.push(`<button class="chip ${activeClass}" data-section="${section}">${sectionTitle(section)}</button>`);
  });

  sectionChips.innerHTML = chipHtml.join('');
  sectionChips.querySelectorAll('button').forEach((btn) => {
    btn.addEventListener('click', () => {
      selectedSection = btn.getAttribute('data-section');
      buildChips();
      buildPages();
    });
  });
}

function renderTables(tables) {
  if (!tables || tables.length === 0) return '';
  return tables.map((table, idx) => {
    const rowsHtml = table.map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join('')}</tr>`).join('');
    return `<details><summary>${t('table')} ${idx + 1}</summary><table class="data-table"><tbody>${rowsHtml}</tbody></table></details>`;
  }).join('');
}

function renderImages(images) {
  if (!images || images.length === 0) return '';
  const shown = images.slice(0, 8);
  return `<div class="gallery">${shown.map((src) => {
    const local = dataStore.imageMap[src] || src;
    return `<a href="${src}" target="_blank" rel="noopener"><img src="${local}" alt="image" loading="lazy" /></a>`;
  }).join('')}</div>`;
}

function buildPages() {
  let pages = dataStore.pages.filter((item) => item.lang === currentLang);
  if (selectedSection !== 'all') {
    pages = pages.filter((item) => item.section === selectedSection);
  }

  if (pages.length === 0) {
    pagesContainer.innerHTML = `<p>${t('none')}</p>`;
    return;
  }

  pagesContainer.innerHTML = pages.map((page) => {
    const text = (page.text || '').slice(0, 900);
    return `
      <article class="page-card">
        <h3>${page.title || page.url}</h3>
        <p class="source-line"><a href="${page.url}" target="_blank" rel="noopener">${t('source')}</a> · ${sectionTitle(page.section || 'misc')}</p>
        <details open>
          <summary>${t('text')}</summary>
          <p>${text || t('none')}</p>
        </details>
        ${renderTables(page.tables || [])}
        <details>
          <summary>${t('image')} (${(page.images || []).length})</summary>
          ${renderImages(page.images || [])}
        </details>
      </article>
    `;
  }).join('');
}

function syncStaticText() {
  document.getElementById('summary-title').textContent = t('summary');
  document.getElementById('columns-title').textContent = t('columns');
  document.getElementById('content-title').textContent = t('content');
  document.getElementById('footer-text').textContent = t('footer');
}

function setLang(lang) {
  currentLang = lang;
  document.documentElement.lang = lang === 'zh_CN' ? 'zh-CN' : 'en';
  zhBtn.classList.toggle('active', lang === 'zh_CN');
  enBtn.classList.toggle('active', lang === 'en');
  selectedSection = 'all';
  syncStaticText();
  buildSummary();
  buildChips();
  buildPages();
}

async function init() {
  const resp = await fetch('data/site-data.json');
  dataStore = await resp.json();

  const meta = document.getElementById('meta-line');
  meta.textContent = `Generated: ${dataStore.generatedAt} | Source: ${dataStore.source}`;

  zhBtn.addEventListener('click', () => setLang('zh_CN'));
  enBtn.addEventListener('click', () => setLang('en'));
  setLang('zh_CN');
}

init().catch((error) => {
  pagesContainer.innerHTML = `<p>Load failed: ${error.message}</p>`;
});
