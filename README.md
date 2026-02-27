# 齐林 | Lin Qi — 个人学术主页

> 🔗 **在线访问:** [https://qilin03-lab.github.io/qilin.github.io](https://qilin03-lab.github.io/qilin.github.io)

---

## 📂 项目结构

```
Hompage-QL/
├── index.html              ← 主页面（HTML + Tailwind CSS）
├── data.js                 ← ⭐ 所有内容数据（编辑此文件更新网站）
├── script.js               ← 渲染逻辑（一般不需要修改）
├── .gitignore              ← Git 忽略文件
├── .github/
│   └── workflows/
│       └── deploy.yml      ← GitHub Pages 自动部署配置
├── assets/
│   ├── images/             ← 个人照片等
│   │   └── profile.png     ← 个人头像
│   └── mirror/             ← 研究方向图片、实验室照片等
└── README.md               ← 本文件
```

---

## 🚀 快速开始：如何部署到 GitHub Pages

### 首次部署（已完成）

1. 在 GitHub 上创建仓库 `qilin03-lab/qilin.github.io`
2. 本地项目已关联远程仓库：`git remote add origin https://github.com/qilin03-lab/qilin.github.io.git`
3. **启用 GitHub Pages：**
   - 打开 https://github.com/qilin03-lab/qilin.github.io/settings/pages
   - **Source** 选择 → **GitHub Actions**（不是 "Deploy from a branch"）
   - 保存即可

4. 推送代码后，GitHub Actions 会自动部署：
   ```bash
   git add -A
   git commit -m "Initial homepage deployment"
   git push origin main
   ```

5. 等待 1-2 分钟后访问：https://qilin03-lab.github.io/qilin.github.io

---

## ✏️ 如何更新个人主页内容

### 核心原则：**只需编辑 `data.js` 文件**

所有网站内容都集中在 `data.js` 一个文件中，修改后提交推送即可自动更新。

### 更新步骤

#### 方法一：使用 VS Code（推荐）

1. **打开项目** → 用 VS Code 打开 `Hompage-QL` 文件夹
2. **编辑 `data.js`** → 找到要修改的部分进行编辑
3. **本地预览** → 双击 `index.html` 在浏览器中查看效果
4. **提交推送** → 在 VS Code 左侧"源代码管理"面板中：
   - 点击 `+` 暂存所有更改
   - 输入提交信息（如"更新论文列表"）
   - 点击 ✓ 提交
   - 点击 `...` → 推送（Push）

#### 方法二：命令行

```bash
# 1. 进入项目目录
cd Hompage-QL

# 2. 编辑 data.js（用任意编辑器）

# 3. 提交并推送
git add -A
git commit -m "更新内容描述"
git push origin main
```

推送后 1-2 分钟自动部署完成。

---

## 📋 `data.js` 各部分说明与编辑指南

### 1. 个人信息 (`personalInfo`)
```javascript
personalInfo: {
  name_zh: "齐林",        // 中文名
  name_en: "Lin Qi",      // 英文名
  title_zh: "副教授...",   // 中文职称
  title_en: "Associate...",// 英文职称
  email: "qilin@bmie.neu.edu.cn",
  // ... 其他联系信息
}
```

### 2. 个人简介 (`profile`)
```javascript
profile: {
  zh: ["第一段中文...", "第二段中文..."],  // 中文简介（数组，每项一段）
  en: ["First para...", "Second para..."]  // 英文简介
}
```

### 3. 添加新论文 (`publications`)
在 `publications` 数组的**最前面**添加新论文：
```javascript
publications: [
  // ← 在这里添加新论文
  {
    authors: "作者1, 作者2, <b>Lin Qi*</b>",  // 用 <b> 标记本人
    title: "论文标题",
    journal: "期刊名称",
    year: 2026,
    volume: "卷号",
    pages: "页码",
    doi: "10.xxxx/xxxxx",     // DOI（可选）
    tags: ["JCR Q1", "IF=6.0"],  // 标签（可选）
    type: "journal"           // "journal" 或 "conference"
  },
  // ... 已有论文
]
```

### 4. 添加新动态 (`news`)
```javascript
news: [
  // ← 在最前面添加
  { date: "2026.03", content_zh: "中文动态...", content_en: "English news..." },
  // ... 已有动态
]
```

### 5. 研究项目 (`projects`)
```javascript
projects: [
  {
    name_zh: "项目中文名",
    name_en: "Project English Name",
    id: "项目编号",
    funding: "金额",
    role_zh: "主持人",     // 或 "主要参与人"
    role_en: "PI",         // 或 "Co-PI"
    period: "2024-2027"
  },
]
```

### 6. 课程信息 (`teaching`)
```javascript
teaching: [
  {
    course_zh: "课程中文名",
    course_en: "Course English Name",
    semester_zh: "春学期",
    semester_en: "Spring",
    hours: 32,
    credits: 2.0
  },
]
```

### 7. 招生信息 (`recruitment`)
```javascript
recruitment: {
  zh: ["中文段落1", "中文段落2", ...],
  en: ["English para1", "English para2", ...]
}
```

### 8. 更换照片
- **头像**：替换 `assets/images/profile.png`
- **研究方向图片**：替换 `assets/mirror/` 中对应文件
- **实验室照片**：在 `labImages` 数组中添加/修改条目
- **教师风采**：在 `teacherGallery` 数组中添加/修改条目

---

## 🔧 常见操作速查

| 操作 | 编辑位置 |
|------|---------|
| 更新论文列表 | `data.js` → `publications` 数组 |
| 添加新闻动态 | `data.js` → `news` 数组 |
| 修改个人简介 | `data.js` → `profile` 对象 |
| 添加研究项目 | `data.js` → `projects` 数组 |
| 更换头像 | 替换 `assets/images/profile.png` |
| 修改招生信息 | `data.js` → `recruitment` 对象 |
| 添加实验室照片 | 放入 `assets/mirror/` + 修改 `labImages` |
| 添加教师风采 | 放入 `assets/mirror/` + 修改 `teacherGallery` |

---

## 🌐 技术栈

- **HTML5** — 单页面结构
- **Tailwind CSS** (CDN) — 响应式样式，无需构建
- **Vanilla JavaScript** — 零依赖，数据驱动渲染
- **GitHub Actions** — 自动部署到 GitHub Pages
- **中/英双语** — 一键切换，数据层支持

---

## 📝 注意事项

1. **不需要 Node.js、npm 或任何构建工具** — 直接编辑推送即可
2. `data.js` 是 JavaScript 文件，注意保持正确的 JSON 语法（逗号、引号等）
3. 本地预览：直接用浏览器打开 `index.html` 即可
4. 推送到 `main` 分支后自动部署，无需其他操作
5. 如需自定义域名，可在 GitHub Pages 设置中配置

---

Content © 2026 Lin Qi. Code released under the MIT License.
