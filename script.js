/**
 * script.js — Rendering logic for Lin Qi's academic homepage.
 * Reads data from window.PROFILE (loaded via data.js).
 * Supports CN/EN bilingual toggle, top navigation bar,
 * mobile dropdown menu, scroll spy, publication filter,
 * teacher gallery, and dynamic section rendering.
 */

(function () {
  'use strict';

  const P = window.PROFILE;
  let lang = localStorage.getItem('lang') || 'zh';   // 'zh' | 'en'

  /* ─── Helpers ─── */
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
  const k = (key) => key + (lang === 'zh' ? '_zh' : '_en');

  /* ─── Language switching ─── */
  function setLang(l) {
    lang = l;
    localStorage.setItem('lang', l);
    document.documentElement.lang = l === 'zh' ? 'zh-CN' : 'en';

    // Update all [data-zh] / [data-en] elements
    $$('[data-zh]').forEach(el => {
      el.textContent = el.getAttribute(l === 'zh' ? 'data-zh' : 'data-en');
    });

    // Highlight active lang button
    $$('.lang-toggle').forEach(btn => {
      btn.classList.toggle('active-lang', btn.dataset.lang === l);
    });

    // Re-render data-driven sections
    renderHero();
    renderBio();
    renderEducation();
    renderNews();
    renderResearchAreas();
    renderProjects();
    renderPatents();
    renderPublications();
    renderTeaching();
    renderRecruitment();
    renderLab();
    renderTeacherGallery();
  }

  /* ─── Hero ─── */
  function renderHero() {
    $('#hero-name').textContent = P.personalInfo[k('name')];
    $('#hero-title').textContent = P.personalInfo[k('title')];
    $('#hero-dept').textContent = P.personalInfo[k('dept')].replace('，', ' · ').replace(', ', ' · ');
  }

  /* ─── Bio ─── */
  function renderBio() {
    const paras = lang === 'zh' ? P.profile.zh : P.profile.en;
    $('#bio-text').innerHTML = paras.map(p => `<p>${p}</p>`).join('');
  }

  /* ─── Education ─── */
  function renderEducation() {
    const el = $('#edu-list');
    el.innerHTML = P.education.map(e => `
      <div class="relative">
        <span class="timeline-dot"></span>
        <p class="font-medium text-slate-800 text-sm">${e[k('school')]}</p>
        <p class="text-xs text-slate-500">${e[k('major')]} · ${e[k('degree')]}</p>
      </div>
    `).join('');
  }

  /* ─── News ─── */
  function renderNews() {
    const el = $('#news-list');
    el.innerHTML = P.news.map(n => `
      <div class="flex gap-3 items-start">
        <span class="shrink-0 text-xs font-mono text-brand-600 bg-brand-50 rounded-md px-2 py-0.5 mt-0.5">${n.date}</span>
        <p class="text-sm text-slate-600">${n[k('content')]}</p>
      </div>
    `).join('');
  }

  /* ─── Research Areas ─── */
  function renderResearchAreas() {
    const el = $('#research-areas');
    el.innerHTML = P.researchAreas.map(r => `
      <div class="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
        <img src="${r.image}" alt="" class="w-full h-40 object-cover" loading="lazy" />
        <div class="p-4">
          <h4 class="font-semibold text-sm text-slate-800">${r[k('title')]}</h4>
          <p class="text-xs text-slate-500 mt-1">${r[k('desc')]}</p>
        </div>
      </div>
    `).join('');
  }

  /* ─── Projects ─── */
  function renderProjects() {
    const el = $('#projects-list');
    el.innerHTML = P.projects.map((p, i) => `
      <div class="flex gap-3 items-start text-sm">
        <span class="shrink-0 w-6 h-6 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center text-xs font-semibold mt-0.5">${i + 1}</span>
        <div>
          <p class="text-slate-700">${p[k('name')]}</p>
          <p class="text-xs text-slate-400 mt-0.5">
            ${p.id ? p.id + ' · ' : ''}${p.funding} · ${p[k('role')]}${p.period ? ' · ' + p.period : ''}
          </p>
        </div>
      </div>
    `).join('');
  }

  /* ─── Patents ─── */
  function renderPatents() {
    const el = $('#patents-list');
    el.innerHTML = P.patents.map(p => `
      <div class="text-sm flex gap-2 items-start">
        <span class="shrink-0 mt-1">
          ${p.status === 'granted'
            ? '<svg class="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>'
            : '<svg class="w-4 h-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>'}
        </span>
        <div>
          <p class="text-slate-700">${p.title}</p>
          <p class="text-xs text-slate-400">${p.inventors} · ${p.number}</p>
        </div>
      </div>
    `).join('');
  }

  /* ─── Publications ─── */
  let currentFilter = 'all';

  function renderPublications(filter) {
    if (filter) currentFilter = filter;
    const list = P.publications.filter(
      p => currentFilter === 'all' || p.type === currentFilter
    );

    // Group by year
    const grouped = {};
    list.forEach(p => {
      (grouped[p.year] = grouped[p.year] || []).push(p);
    });

    const years = Object.keys(grouped).sort((a, b) => b - a);

    const el = $('#pub-list');
    el.innerHTML = years.map(year => `
      <div>
        <h4 class="text-base font-bold text-brand-600 mb-3 sticky top-16 bg-slate-50 py-1 z-10">${year}</h4>
        <div class="space-y-3">
          ${grouped[year].map(p => {
            const doiLink = p.doi
              ? ` <a href="https://doi.org/${p.doi}" target="_blank" rel="noopener" class="text-brand-500 hover:underline">[DOI]</a>`
              : '';
            const badges = (p.tags || []).map(t => {
              const color = t.startsWith('JCR Q1') ? 'bg-emerald-100 text-emerald-700'
                : t.startsWith('JCR Q2') ? 'bg-blue-100 text-blue-700'
                : t.startsWith('JCR Q3') ? 'bg-amber-100 text-amber-700'
                : t === 'EI' ? 'bg-purple-100 text-purple-700'
                : t.startsWith('IF') ? 'bg-slate-100 text-slate-600'
                : 'bg-slate-100 text-slate-600';
              return `<span class="badge ${color}">${t}</span>`;
            }).join(' ');

            return `
              <div class="pub-item text-sm leading-relaxed">
                <p class="text-slate-600">
                  ${p.authors}. "${p.title}."
                  <em class="text-slate-800">${p.journal}</em>${p.volume ? ', ' + p.volume : ''}${p.pages ? ': ' + p.pages : ''}, ${p.year}.${doiLink}
                </p>
                ${badges ? `<div class="mt-1 flex flex-wrap gap-1">${badges}</div>` : ''}
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `).join('');

    // Update count
    const countLabel = lang === 'zh' ? `共 ${list.length} 篇` : `${list.length} papers`;
    $('#pub-count').textContent = countLabel;

    // Update filter button labels
    $$('.pub-filter').forEach(btn => {
      const txt = btn.getAttribute(lang === 'zh' ? 'data-zh' : 'data-en');
      if (txt) btn.textContent = txt;
    });
  }

  /* ─── Teaching ─── */
  function renderTeaching() {
    const el = $('#teaching-tbody');
    el.innerHTML = P.teaching.map(c => `
      <tr class="hover:bg-slate-50 transition-colors">
        <td class="px-6 py-3 font-medium text-slate-700">${c[k('course')]}</td>
        <td class="px-6 py-3 text-slate-500">${c[k('semester')]}</td>
        <td class="px-6 py-3 text-center text-slate-500">${c.hours}</td>
        <td class="px-6 py-3 text-center text-slate-500">${c.credits}</td>
      </tr>
    `).join('');
  }

  /* ─── Recruitment ─── */
  function renderRecruitment() {
    const paras = lang === 'zh' ? P.recruitment.zh : P.recruitment.en;
    $('#recruit-text').innerHTML = paras.map((p, i) => {
      if (i === 0) return `<p class="font-semibold text-brand-600 text-base">${p}</p>`;
      if (i === paras.length - 1) return `<p class="font-semibold text-brand-600 bg-brand-50 rounded-lg p-3">${p}</p>`;
      return `<p>${p}</p>`;
    }).join('');
  }

  /* ─── Lab Gallery ─── */
  function renderLab() {
    const el = $('#lab-gallery');
    el.innerHTML = P.labImages.map(img => `
      <div class="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
        <img src="${img.src}" alt="${img[k('caption')]}" class="w-full h-48 object-cover" loading="lazy" />
        <p class="text-xs text-slate-500 text-center py-2">${img[k('caption')]}</p>
      </div>
    `).join('');
  }

  /* ─── Teacher Gallery ─── */
  function renderTeacherGallery() {
    const el = $('#teacher-gallery');
    if (!P.teacherGallery || P.teacherGallery.length === 0) {
      el.innerHTML = `<p class="text-sm text-slate-400 col-span-full">${lang === 'zh' ? '暂无内容' : 'No content yet'}</p>`;
      return;
    }
    el.innerHTML = P.teacherGallery.map(img => `
      <div class="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
        <img src="${img.src}" alt="${img[k('caption')]}" class="w-full h-48 object-cover" loading="lazy" />
        <div class="p-3">
          <p class="text-sm font-medium text-slate-700">${img[k('caption')]}</p>
          ${img[k('desc')] ? `<p class="text-xs text-slate-400 mt-1">${img[k('desc')]}</p>` : ''}
        </div>
      </div>
    `).join('');
  }

  /* ─── Mobile Menu ─── */
  function setupMobileMenu() {
    const hamburger = $('#hamburger');
    const dropdown = $('#mobile-dropdown');

    hamburger.addEventListener('click', () => {
      dropdown.classList.toggle('open');
    });

    // Close menu when a link is clicked
    $$('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', () => {
        dropdown.classList.remove('open');
      });
    });
  }

  /* ─── Scroll Spy (IntersectionObserver) for Top Nav ─── */
  function setupScrollSpy() {
    const sections = $$('section[id]');
    const desktopLinks = $$('.nav-link-top');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          desktopLinks.forEach(l => l.classList.remove('active'));
          const active = $(`a.nav-link-top[href="#${entry.target.id}"]`);
          if (active) active.classList.add('active');
        }
      });
    }, { rootMargin: '-20% 0px -70% 0px' });

    sections.forEach(s => observer.observe(s));
  }

  /* ─── Scroll-to-top Button ─── */
  function setupScrollTop() {
    const btn = $('#scrollTop');
    window.addEventListener('scroll', () => {
      const show = window.scrollY > 400;
      btn.classList.toggle('opacity-0', !show);
      btn.classList.toggle('pointer-events-none', !show);
    });
    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ─── Publication Filter ─── */
  function setupPubFilter() {
    $$('.pub-filter').forEach(btn => {
      btn.addEventListener('click', () => {
        $$('.pub-filter').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderPublications(btn.dataset.filter);
      });
    });
  }

  /* ─── Language Button Wiring ─── */
  function setupLangButtons() {
    $$('.lang-toggle').forEach(btn => {
      btn.addEventListener('click', () => setLang(btn.dataset.lang));
    });
  }

  /* ─── Init ─── */
  function init() {
    setupMobileMenu();
    setupLangButtons();
    setupScrollSpy();
    setupScrollTop();
    setupPubFilter();
    setLang(lang);   // Initial render
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
