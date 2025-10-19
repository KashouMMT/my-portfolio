# 🧑‍💻 Myint Myat Thu – Portfolio Website

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

---

A modern, responsive React portfolio showcasing my skills, projects, and certifications as a **Junior Full-Stack Software Developer**.

---

## 🚀 Live Demo
🔗 [Visit My Portfolio](#)
---

## 🧩 Tech Stack

| Category | Technologies |
|-----------|--------------|
| **Frontend** | React + TypeScript, Bootstrap 5 |
| **Build Tool** | Vite |
| **Styling** | Bootstrap Utility Classes, Custom CSS |
| **Deployment** | GitHub Pages |

---

## 📂 Project Structure
```
src/
├── assets/
│ └── Passport_photo.jpg
├── components/
│ ├── AboutMe.tsx
│ ├── Certification.tsx
│ ├── ContactMe.tsx
│ ├── Footer.tsx
│ ├── Navbar.tsx
│ └── Projects.tsx
│ └── Skills.tsx
├── layout/
│ ├── App.tsx # Plan to make HomeLayout.tsx instead of using App.tsx as layout.
└── main.tsx
```
Each section is modular, reusable, and styled using Bootstrap classes for clarity and responsiveness.

---

## ✨ Features

- 📸 **Profile Section:** Displays introduction, photo, and quick contact links (LinkedIn, GitHub, Email). # Currently not linked yet.
- 💡 **About Me:** Overview of background, professional experience, and technical journey.  
- ⚙️ **Skills Section:** Highlight of programming languages, frameworks, tools, and platforms.  
- 🧱 **Projects Section:** List of major personal and professional projects with live demo & source links. # Currently not linked yet.
- 🎓 **Certifications:** Links to verified Coursera, Microsoft, Google, and IBM credentials. # Currently not linked yet.
- 📬 **Contact Me:** Semantic contact section using `<dl>` for accessibility and clean structure.  
- 🌗 **Responsive Design:** Optimized for desktop and mobile screens.  

---

## 🛠️ Installation & Setup

Clone the repository and install dependencies:

```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

---

## 🌍 Deployment

You can deploy this project easily using:

- GitHub Pages (recommended for portfolios)
- Vercel – Zero-config React deployment
- Netlify – Drag & drop or CLI deployment

Example (GitHub Pages):

```bash
npm run build
npm install gh-pages --save-dev
```

Add to package.json

```json
"homepage": "https://yourusername.github.io/portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

Deploy:

```bash
npm run deploy
```

---

## 👤 Author

Myint Myat THu
🌐 [LinkedIn](#)
💻 [Github](#)
✉️ [Email Me](#)

---

## 📄 License

This project is open-source under the MIT License.
