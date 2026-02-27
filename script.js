const zhBtn = document.getElementById('btn-zh');
const enBtn = document.getElementById('btn-en');

function switchLang(lang) {
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  document.querySelectorAll('[data-zh]').forEach((element) => {
    const text = element.getAttribute(lang === 'zh' ? 'data-zh' : 'data-en');
    if (text) element.textContent = text;
  });

  zhBtn.classList.toggle('active', lang === 'zh');
  enBtn.classList.toggle('active', lang === 'en');
}

zhBtn.addEventListener('click', () => switchLang('zh'));
enBtn.addEventListener('click', () => switchLang('en'));
