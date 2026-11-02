# Personal Portfolio — Project Rules

## Context
Static portfolio site (HTML/CSS/JS) deployed on GitHub Pages.
Final URL: https://lkperrin.github.io (repo: lkperrin/lkperrin.github.io)

## Stack
- Semantic HTML5
- Vanilla CSS (no framework)
- Vanilla JS (no bundler, no framework)
- No npm dependencies
- No build step — files are served directly

## File Structure
```
perso_site/
├── index.html              ← home page (photo, name, intro, 4 nav buttons)
├── experience.html         ← professional experience page
├── works.html              ← works & publications page
├── education.html          ← education & degrees page
├── interests.html          ← interests & hobbies page
├── assets/
│   ├── css/
│   │   └── style.css       ← shared stylesheet for all pages
│   ├── js/
│   │   └── main.js
│   ├── img/
│   │   └── photo.jpg       ← profile photo (place manually)
│   └── pdf/
│       └── cv.pdf          ← CV file (place manually)
├── .claude/
├── CLAUDE.md
└── README.md
```

## Code Conventions
- Indentation: 2 spaces
- CSS: BEM naming (.section__title, .card--active)
- JS: ES6+, no var, prefer const/let
- Images: webp or jpg, max 500KB each
- Commits: format "feat: ...", "fix: ...", "style: ..."

## Design
- Style: classic & professional
- Palette: sober, max 3 main colors + neutrals, defined as CSS variables in :root
- Typography: readable, serious (Inter, Lato, or elegant serif from Google Fonts)
- Responsive: mobile-first, breakpoints at 768px and 1200px
- No excessive animations — sobriety first
- Accessibility: semantic tags, alt on images, WCAG AA contrast

## Site Architecture

### index.html — Home page
- Header with profile photo, full name, professional title, short bio (2-3 lines)
- 4 large navigation buttons arranged in a 2x2 grid:
  - Experience
  - Works & Publications
  - Education & Degrees
  - Interests & Hobbies
- Footer with 3 icon buttons:
  - LinkedIn → opens in new tab
  - GitHub → opens in new tab
  - CV → opens assets/pdf/cv.pdf in new tab
- All links and URLs come from content.md

### experience.html
- Timeline of professional experiences, most recent first
- Each entry: job title, company, period, description, skills/tech used
- Back button to index.html

### works.html
- Grid or list of publications, projects, research works
- Each entry: title, date, description, link if available
- Back button to index.html

### education.html
- List of degrees and certifications, most recent first
- Each entry: degree name, institution, year, honors if any
- Back button to index.html

### interests.html
- Grid of 4-6 interest cards with icon (emoji or inline SVG) and short description
- Back button to index.html

## Content
- All real content (names, dates, descriptions, URLs) is in `content.md`
- Never invent content — always refer to `content.md`
- If info is missing in `content.md`, leave a visible placeholder: `[TO FILL]`

## GitHub Pages Deployment
- The `main` branch is deployed automatically
- Everything at root — no `docs/` subfolder
- Never commit sensitive files (.env, API keys, etc.)

## What We Do NOT Do
- No framework (React, Vue, Angular)
- No CSS framework (Bootstrap, Tailwind)
- No JS bundler (webpack, vite)
- No backend, no database
- Do not modify CLAUDE.md without asking for confirmation
- Do not commit without me validating the visual result first
- Do not invent content — use only what is in content.md