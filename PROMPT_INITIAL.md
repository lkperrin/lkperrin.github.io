# Initial Prompt — copy-paste this into Claude Code

---

First read `CLAUDE.md` to understand the project rules, then read `content.md` for all the content.

Build my complete portfolio site in static HTML/CSS/JS, ready to deploy on GitHub Pages.

## Files to create

### `index.html` — Home page
A clean, professional home page with:
- A centered header section: profile photo (`assets/img/photo.jpg`), full name, professional title, short bio
- Below that, **4 large navigation buttons in a 2×2 grid**, each linking to a separate page:
  - **Experience** → experience.html
  - **Works & Publications** → works.html
  - **Education & Degrees** → education.html
  - **Interests & Hobbies** → interests.html
- A footer with **3 icon buttons**:
  - **LinkedIn** icon → opens LinkedIn URL from content.md in a new tab
  - **GitHub** icon → opens GitHub URL from content.md in a new tab
  - **CV** button → opens `assets/pdf/cv.pdf` in a new tab

### `experience.html`
- Vertical timeline, most recent first
- Each entry: job title, company, period, description, skills used
- "← Back" button returning to index.html

### `works.html`
- Grid or clean list of publications/projects
- Each entry: title, date, type, description, link if available
- "← Back" button returning to index.html

### `education.html`
- Clean list of degrees and certifications, most recent first
- Each entry: degree, institution, year, honors if any
- "← Back" button returning to index.html

### `interests.html`
- Grid of 4-6 cards with emoji icon and short description
- "← Back" button returning to index.html

### `assets/css/style.css`
- Vanilla CSS, mobile-first
- CSS variables in `:root` for all colors and typography
- Classic and professional style — sober, readable
- All 5 pages share this one stylesheet
- Fully responsive: mobile (< 768px), tablet, desktop

### `assets/js/main.js`
- Any small interactions needed (hover effects, smooth transitions)
- No external libraries

## Important constraints
- No framework, no CDN (Google Fonts allowed)
- All content from `content.md` only — missing info gets a visible `[TO FILL]` placeholder
- Do NOT commit anything — show me the result first and wait for my approval
- If unsure about a design choice, give me 2 short options and wait before implementing

## Start by
1. Confirm you have read `CLAUDE.md` and `content.md`
2. Give me a short plan: color palette, typography choice, layout of the home page
3. Wait for my approval before writing any code