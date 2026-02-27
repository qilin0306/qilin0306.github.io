# 齐林 | Lin Qi — Academic Homepage

> Minimalist single-page academic homepage built with **Tailwind CSS**.
> Bilingual (中文 / English) · Responsive · GitHub Pages auto-deploy.

🔗 **Live site:** <https://qilin03-lab.github.io/qilin.github.io>

---

## ✨ Features

| Feature | Details |
|---------|---------|
| **Tailwind CSS** | CDN-only, zero build step |
| **Bilingual** | CN / EN toggle with localStorage |
| **Responsive** | Sidebar collapses to hamburger on mobile |
| **Publication filter** | All / Journal / Conference tabs |
| **GitHub Actions** | Auto-deploy on push to `main` |
| **Single data file** | Edit `data.js` to update everything |

---

## 📂 Project Structure

```
├── index.html            ← page layout (rarely needs editing)
├── data.js               ← ★ ALL your academic data lives here
├── script.js             ← rendering logic
├── assets/
│   ├── images/           ← profile photo, icons
│   └── mirror/           ← downloaded images from faculty page
├── .github/
│   └── workflows/
│       └── deploy.yml    ← GitHub Pages CI/CD
└── README.md
```

---

## 🛠 How to Update Your Homepage

### 1. Edit `data.js`

Open `data.js` in any text editor and update the relevant section:

| Section | What to change |
|---------|---------------|
| `personalInfo` | Name, title, email, phone |
| `profile` | Biography paragraphs (zh + en) |
| `education` | Degree list |
| `researchAreas` | Research directions with images |
| `news` | Latest updates (add new items at the top) |
| `publications` | Papers — add new entries at the top of the year block |
| `patents` | Patents |
| `projects` | Funded projects |
| `teaching` | Course list |
| `recruitment` | Enrollment info |
| `labImages` | Lab gallery photos |

### 2. Preview locally

Just double-click `index.html` — no server needed (uses `file://` protocol).

For a dev server (optional):
```bash
# Python
python -m http.server 8000

# or Node
npx serve .
```

### 3. Push to deploy

```bash
git add .
git commit -m "update: add new publication"
git push
```

GitHub Actions will auto-deploy to Pages within ~1 minute.

---

## ⚙️ First-time Setup (GitHub Pages)

1. Go to **Settings → Pages** in your repo.
2. Under **Build and deployment → Source**, select **GitHub Actions**.
3. Push any commit to `main` — the workflow will handle the rest.

---

## 📄 License

Content © 2026 Lin Qi. Code released under the MIT License.
