# 🧑‍💻 Myint Myat Thu – Portfolio Website

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

---

A responsive React portfolio showcasing my skills, projects, and certifications as a **Full-Stack Software Developer**, in English and Japanese.

---

## 🚀 Live Site

🔗 [kashoummt.github.io/my-portfolio](https://kashoummt.github.io/my-portfolio/)

---

## 🧩 Tech Stack

| Category | Technologies |
|-----------|--------------|
| **Frontend** | React 19 + TypeScript |
| **Routing** | React Router (`HashRouter`, so GitHub Pages needs no server rewrites) |
| **i18n** | i18next + react-i18next, browser language detection (English / 日本語) |
| **Contact form** | EmailJS |
| **Styling** | Custom CSS |
| **Build Tool** | Vite |
| **Deployment** | GitHub Pages (`gh-pages` branch) |

---

## 📂 Project Structure

```
index.html                 # Page title, description, Open Graph tags for link previews
public/
├── 404.html               # Redirects unknown paths back to the home page
├── my-profile.jpg         # Favicon and link-preview image
└── full-stack-software-developer*.pdf   # Resumes (English, Japanese)
src/
├── main.tsx               # Entry point: HashRouter + i18n
├── App.tsx                # Routes: / (Home), /blog (Blog)
├── layout/Layout.tsx      # Navbar + page + Footer
├── pages/
│   ├── Home.tsx           # Hero, Skill, About, Tools, History, Certification, Contact
│   └── Blog.tsx           # BlogContent, Contact
├── components/            # One component per section
├── i18n/
│   ├── index.ts           # i18next setup
│   ├── en/components/     # English text, one file per component
│   └── ja/components/     # Japanese text, one file per component
└── assets/
    ├── css/               # One stylesheet per section
    └── images/
```

All visible text lives in `src/i18n/{en,ja}/`. A text change is made in both languages.

---

## 🛠️ Installation & Setup

```bash
git clone https://github.com/KashouMMT/my-portfolio.git
cd my-portfolio
npm install
npm run dev
```

Build and preview the production build:

```bash
npm run build
npm run preview
```

Lint:

```bash
npm run lint
```

---

## 🌍 Deployment

`vite.config.ts` sets `base: '/my-portfolio/'` to match the GitHub Pages path.

```bash
npm run deploy     # builds, then publishes dist/ to the gh-pages branch
```

---

## 👤 Author

Myint Myat Thu

🌐 [LinkedIn](https://www.linkedin.com/in/myint-myat-thu-9aa850389/)
💻 [GitHub](https://github.com/KashouMMT)
✉️ [Email Me](mailto:mmyaatthum925@gmail.com)
