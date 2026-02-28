# AGENTS.md — Developer Guide

**Project:** Lin Qi Academic Homepage  
**Type:** Static Website (HTML + JS + Tailwind CSS)  
**Last Updated:** 2026-02

---

## Overview

Simple static academic homepage with data-driven content via `data.js`. No build system required—just HTML, vanilla JavaScript, and Tailwind CSS via CDN.

---

## Commands

### Preview Locally
```bash
# Open index.html directly in browser (no server needed)
# Double-click index.html or use a simple HTTP server:
npx serve .
# Then visit http://localhost:3000
```

### Deploy
```bash
# Push to main branch — GitHub Actions auto-deploys
git add -A
git commit -m "Update content"
git push origin main
```

**No lint/test commands** — this is a static site with no build step.

---

## Code Style

### JavaScript (data.js, script.js)

| Rule | Standard |
|------|----------|
| **Variables** | `const` for everything, camelCase |
| **Objects** | Use `window.PROFILE = { ... }` for global data |
| **Bilingual** | Use `_zh` / `_en` suffixes: `name_zh`, `name_en` |
| **Arrays** | Add new items at TOP of arrays (newest first) |
| **HTML in strings** | Use template literals with backticks |
| **Author names** | Mark corresponding author: `<b>Lin Qi*</b>` |

### HTML (index.html)

| Rule | Standard |
|------|----------|
| **Framework** | Tailwind CSS via CDN — no custom CSS unless necessary |
| **Responsive** | Mobile-first, use `md:`, `lg:` prefixes |
| **Accessibility** | Include `alt` tags, semantic HTML |
| **CDN** | Use `https://cdn.tailwindcss.com` |

### Git

| Rule | Standard |
|------|----------|
| **Branch** | `main` only |
| **Commits** | Descriptive Chinese or English messages |
| **Ignored** | `node_modules/`, `.DS_Store`, `Thumbs.db` |

---

## File Structure

```
Hompage-QL/
├── index.html          # Main page (single-page app)
├── data.js             # ⭐ ALL CONTENT DATA — edit this file
├── script.js           # Rendering logic (rarely need to modify)
├── assets/
│   ├── images/        # profile.png, etc.
│   └── mirror/        # research images, lab photos
├── .github/
│   └── workflows/
│       └── deploy.yml # Auto-deploy on push to main
└── README.md
```

---

## How to Update Content

### 1. Edit data.js

All content lives in `data.js`. No need to touch HTML.

```javascript
// Example: Add new paper
publications: [
  {
    authors: "Author1, <b>Lin Qi*</b>",
    title: "Paper Title",
    journal: "IEEE JBHI",
    year: 2026,
    doi: "10.1109/xxx",
    type: "journal"  // or "conference"
  },
  // ... existing papers
]
```

### 2. Add Images

1. Put images in `assets/images/` or `assets/mirror/`
2. Reference in `data.js`:
   - Avatar: `assets/images/profile.png`
   - Research: `assets/mirror/img_xxxx.png`

### 3. Preview & Deploy

```bash
# Preview: open index.html in browser
# Deploy: git push → GitHub Actions runs automatically
```

---

## Common Patterns

### Bilingual Fields
```javascript
// Always provide both _zh and _en versions
{
  name_zh: "齐林",
  name_en: "Lin Qi",
  title_zh: "教授",
  title_en: "Professor"
}
```

### Publication Author Format
```javascript
// Corresponding author marked with *
authors: "Zhang San, <b>Lin Qi*</b>, Li Si"

// First author (undergraduate)
authors: "Wang Wu, Lin Qi*, et al."
```

### News Items (newest first)
```javascript
news: [
  { date: "2026.02", content_zh: "新消息", content_en: "New update" },
  // ... older news
]
```

---

## Key Sections in data.js

| Section | Field | Description |
|---------|-------|-------------|
| Personal Info | `personalInfo` | Name, title, email, phone |
| Bio | `profile.zh`, `profile.en` | Biography paragraphs |
| Education | `education[]` | Degrees, schools |
| Research | `researchAreas[]` | Research directions |
| Publications | `publications[]` | Papers (newest first) |
| Projects | `projects[]` | Funded projects |
| Patents | `patents[]` | Invention patents |
| Teaching | `teaching[]` | Courses |
| Recruitment | `recruitment.zh`, `recruitment.en` | Enrollment info |
| Lab Images | `labImages[]` | Lab photos |
| Gallery | `teacherGallery[]` | Teacher photos |

---

## Gotchas

1. **JSON syntax** — `data.js` is JavaScript object literal; mind commas
2. **Image paths** — Use relative paths from project root
3. **DOI links** — Auto-converted to `https://doi.org/xxx`
4. **No build** — Changes appear after browser refresh
5. **Deploy time** — ~1-2 minutes after push

---

## No-Nos

- Do NOT add build tools (webpack, vite, etc.)
- Do NOT change the GitHub Actions workflow
- Do NOT modify the CDN URLs unless necessary
- Do NOT delete existing image files referenced in data.js
