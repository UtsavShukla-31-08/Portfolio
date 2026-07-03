Portfolio (React + Vite)

A modern, high-end personal portfolio for a UI/UX & Frontend Developer.
Exact same design as the HTML version, rebuilt as a clean modular React app.

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server  (http://localhost:5173)
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

## 📁 Project Structure

```
portfolio-react/
├── index.html                  ← Vite entry (fonts, FA icons)
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx                ← React root mount
    ├── App.jsx                 ← Theme state, scroll-reveal, active-nav
    ├── index.css               ← All global styles (design tokens → responsive)
    └── components/
        ├── Cursor.jsx          ← Custom cursor (dot + lagging ring)
        ├── Loader.jsx          ← Full-screen ink-drop loader
        ├── Navbar.jsx          ← Fixed nav + hamburger + mobile menu
        ├── Hero.jsx            ← Hero with typewriter + magnetic buttons
        ├── About.jsx           ← Portrait, skill cards, animated bars
        ├── Projects.jsx        ← Asymmetric grid, mock UIs, filter tabs
        ├── Experience.jsx      ← Timeline + tech stack + education
        ├── Contact.jsx         ← Controlled form with loading/success states
        ├── Footer.jsx          ← Brand / copyright / links
        └── BackToTop.jsx       ← Scroll-triggered back-to-top button
```

## 🎨 Customisation

### Change name & branding

Search `Utsav Shukla` across `src/` and replace. The nav logo, hero, and footer
all use it.

### Change accent color

In `src/index.css` `:root` block:

```css
--gold: #c4922a;
--gold-light: #e8b84b;
```

### Add a real photo

In `Hero.jsx`, replace `<HeroIllustration />` inside `.hero__avatar` with:

```jsx
<img
  src="/your-photo.jpg"
  alt="Utsav Shukla"
  style={{ width: "100%", height: "100%", objectFit: "cover" }}
/>
```

Put the image in the `public/` folder.

### Update typewriter phrases

In `Hero.jsx`, edit the `WORDS` array.

### Update projects

In `Projects.jsx`, edit the `PROJECTS` array. Each item has:
`id`, `title`, `desc`, `tags`, `category`, `layout` (`featured`/`side`/`half`),
and accent color keys.

### Wire up the contact form

In `Contact.jsx`, replace the `setTimeout` block with a real API call:

```js
// Formspree example
const res = await fetch("https://formspree.io/f/YOUR_ID", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(form),
});
if (res.ok) setStatus("success");
else setStatus("error");
```

## 🌐 Deployment

| Platform             | Steps                                                     |
| -------------------- | --------------------------------------------------------- |
| **Netlify**          | `npm run build` → drag `dist/` folder to netlify.com/drop |
| **Vercel**           | `npx vercel` — auto-detects Vite                          |
| **GitHub Pages**     | Add `base` to `vite.config.js`, push, enable Pages        |
| **Cloudflare Pages** | Connect repo, build cmd: `npm run build`, output: `dist`  |

## 🛠️ Tech Stack

- React 18
- Vite 5
- Vanilla CSS (no Tailwind — full control via CSS custom properties)
- Font Awesome 6 (CDN)
- Google Fonts: Cormorant Garamond · Syne · DM Mono
