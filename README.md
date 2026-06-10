# Personal Portfolio

Static personal portfolio — deployed on GitHub Pages.

## Before running Claude Code

1. **Fill in your content** → open `content.md` and replace every `[TO FILL]` with your real info
2. **Add your photo** → place it at `assets/img/photo.jpg`
3. **Add your CV** → place it at `assets/pdf/cv.pdf`

## Running Claude Code

```bash
cd perso_site
claude
```

Copy-paste the content of `PROMPT_INITIAL.md` into the session.

## File structure

```
perso_site/
├── index.html              ← home (created by Claude Code)
├── experience.html         ← (created by Claude Code)
├── works.html              ← (created by Claude Code)
├── education.html          ← (created by Claude Code)
├── interests.html          ← (created by Claude Code)
├── content.md              ← YOUR content (fill this first)
├── PROMPT_INITIAL.md       ← prompt to give Claude Code
├── CLAUDE.md               ← project rules for Claude Code
├── assets/
│   ├── css/style.css       ← (created by Claude Code)
│   ├── js/main.js          ← (created by Claude Code)
│   ├── img/photo.jpg       ← YOUR photo (place manually)
│   └── pdf/cv.pdf          ← YOUR CV (place manually)
└── .claude/
    ├── skills/new-section/ ← skill to add new pages later
    └── agents/             ← design review agent
```

## Deploy to GitHub Pages

```bash
git init
git add .
git commit -m "feat: init portfolio"
git remote add origin https://github.com/<your-username>/perso_site.git
git push -u origin main
```

Then on GitHub: **Settings → Pages → Source: `main` / `root`**

Your site will be live at: `https://<your-username>.github.io/perso_site`