# Deekshith - Portfolio & Interactive Resume Website

A modern, responsive, and unique portfolio website built with clean HTML5, CSS3, and modern JavaScript.

## 🚀 Features

- **Unique & Simple Design**: Clean typography, glassmorphism elements, neon accents, and responsive layout across mobile, tablet, and desktop screens.
- **Interactive Developer Console / Terminal**: Visitors and recruiters can type commands (`about`, `skills`, `projects`, `education`, `contact`, `download`, `clear`) or click shortcut buttons.
- **Dynamic Typewriter Headline**: Cycling through key roles (*MCA Student @ PIM*, *Aspiring Software Developer*, *Android & Web Developer*, *Problem Solver*).
- **One-Click Copy & Toast Notifications**: Click on email or phone chips to copy instantly to clipboard.
- **Dark / Light Theme Toggle**: Seamlessly switches between a sleek cyber-dark mode and a crisp high-contrast light mode with user preference persistence (`localStorage`).
- **Project Deep-Dive Modals**: Detailed popups highlighting problem statements, features, and tech stacks for **Campus Bites** and **RESQLINE**.
- **Interactive Skills Matrix**: Filter skills by category (Programming Languages, Web Stack, Databases, Core/Cloud).
- **Direct Resume PDF Download**: Integrates directly with `resume.pdf` for one-click downloading.
- **No External Framework Dependencies**: Built with pure vanilla standards — fast loading, zero build steps, and offline-compatible with inline SVGs.

---

## 📁 Project Structure

```
c:\portfolio\
├── index.html                               # Semantic, accessible HTML5 structure
├── style.css                                # Custom design system, dark/light themes, animations
├── script.js                                # Typewriter, terminal, modal, copy toast, and filter logic
├── resume.pdf                               # Clean linkable PDF resume
├── Deekshith_FlowCV_Resume_2026-10-29 (2).pdf # Original FlowCV PDF source
└── README.md                                # Project documentation & instructions
```

---

## 💻 How to View & Run Locally

### Option 1: Direct Browser Opening (Zero Setup)
Simply double-click `index.html` in Windows Explorer or open it directly in Google Chrome, Microsoft Edge, or Mozilla Firefox.

### Option 2: Using Python (Local Web Server)
In PowerShell or Terminal inside `C:\portfolio`:
```powershell
python -m http.server 8000
```
Then visit: [http://localhost:8000](http://localhost:8000)

### Option 3: Using Node.js / npx serve
```powershell
npx serve .
```

---

## 🌐 How to Deploy for Free (GitHub Pages)
1. Initialize a git repository and commit your files:
   ```powershell
   git init
   git add .
   git commit -m "Initial portfolio commit"
   ```
2. Create a new repository on GitHub (e.g., `deekshith-portfolio` or `<your-username>.github.io`).
3. Push your code to GitHub:
   ```powershell
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git branch -M main
   git push -u origin main
   ```
4. On GitHub, navigate to **Settings** > **Pages** > select branch `main` and root `/` > Click **Save**.
5. Your website will be live at `https://<your-username>.github.io/<repo-name>/` within minutes!
