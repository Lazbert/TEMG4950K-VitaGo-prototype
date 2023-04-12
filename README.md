# TEMG4950K-VitaGo-prototype

## Table of Contents

1. [Getting Started](#intro)
2. [Prototype](#proto)
3. [File Structure](#files)
4. [About React](#react)
5. [About Typescript](#ts)

---

## Getting Started <a name="intro"></a>

### Welcome to the repository for the frontend of VitaGo.

> If you are here for **playing with the prototype**:

- You can clone the repository, <code>cd frontend</code> and type <code>yarn dev</code> or <code>npm dev</code> in the terminal. This should open the index page on a website. Note that the prototype is designed under the screen size of **393 x 852** so it is advised to adjust your screen accordingly

> If you are here for **development**:

- You should first install the following VSCode extensions for syncing with GitHub:

  1. Git Graph
  2. GitHub Pull Requests and Issues

- Install package manager **yarn** with <code>npm install --global yarn</code> (if you prefer, you can ignore this step and continue with npm)

- <code>cd frontend</code> and type **yarn** in terminal to install the required packages

---

## Prototype <a name="proto"></a>

When the website opens up, you should see this page:
<br/>
<img src="frontend/public/images/index_page.png" width="955" height="510">
<br/>
You can toggle different stages of subscription with the panel on the right. Upon changing the stage, the display on the left will respond accordingly. In most of the cases, you can interact with the app by first clicking the VitaGo icon. The rest should be (and needs to be) quite straightforward for the user.

Have fun.

---

## File Structure <a name="files"></a>

Since we don't have a backend for the prototype, everything is in the frontend folder. The primary ones are explained below:

```
\---frontend
    |   .gitignore (specify what files should not be committed to GitHub)
    |   custom.d.ts (A file to declare a type that enables me to import .svg files as React components)
    |   index.html
    |   package.json (a list of packages used in the project)
    |   postcss.config.cjs
    |   tailwind.config.js (for configuring tailwindcss and aliases)
    |   tsconfig.json
    |   tsconfig.node.json
    |   vite.config.ts  (config for Vite, a tool to build web apps quickly. Much faster than create-react-app)
    |   yarn.lock (record of packages, no need to touch it manually)
    |
    └─src
        │  App.css
        │  App.tsx
        │  index.css
        │  main.tsx (typical entry point of the app)
        │  Routes.tsx (for page routing because React by itself is meant for single-page apps)
        │  vite-env.d.ts
        │
        ├─assets (for storing the icons (.svg) / images (.png) you used)
        ├─components (React components, see part (4) for more)
        ├─layouts
        └─pages
```

---

## About React <a name="react"></a>

---

## About Typescript <a name="ts"></a>
