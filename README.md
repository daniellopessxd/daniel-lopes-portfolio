# Daniel Lopes — Portfolio Website

Static site. No build step, no dependencies — just HTML, CSS, and vanilla JS.

## Folder structure

```
/
├── index.html        ← the page itself
├── css/
│   └── style.css      ← all styling (colors, layout, animations)
├── js/
│   └── main.js         ← video/certification rendering + interactions
└── README.md           ← this file
```

## Before you publish — 3 things to edit in `js/main.js`

Open `js/main.js` and edit the top of the file:

1. **`VIDEO_URLS`** — paste your Cloudinary video URLs into `VIDEO_URL_1` through `VIDEO_URL_4`.
   Leave any of them as `""` and that project will show a clean "add your video" placeholder instead of breaking.

2. **`PROJECTS`** — edit each project's `title`, `desc`, `tag`, and the `practice` note.
   The `practice` line is the honest disclaimer that these are self-made practice edits, not commissioned client work — edit or remove it once you're showing real client projects.

3. **`CERTIFICATES`** — add an `image` URL and/or a `link` for each Adobe certificate badge.

Also update your real contact info directly in `index.html` (search for `YOUR_EMAIL@example.com`, `YOUR_HANDLE`).

## Publishing with GitHub Pages

1. Create a new repository on GitHub (e.g. `daniel-lopes-portfolio`). Public or private both work for Pages, but on a free plan the repo must be **public**.
2. Upload these three items — `index.html`, the `css` folder, and the `js` folder — to the root of that repository (drag-and-drop on the GitHub web UI works fine, or use git from the command line).
3. In the repository, go to **Settings → Pages**.
4. Under **Build and deployment → Source**, choose **Deploy from a branch**.
5. Under **Branch**, choose `main` (or `master`) and folder `/ (root)`, then click **Save**.
6. GitHub will give you a URL like `https://your-username.github.io/daniel-lopes-portfolio/` — it usually takes 1–2 minutes to go live after the first save.
7. Any time you push a change to the repo, the live site updates automatically within a minute or two.

No custom domain is required, but if you buy one later, GitHub Pages supports adding it under the same Settings → Pages screen.

## Notes

- All fonts load from Google Fonts (already linked in `index.html`) — no font files to manage.
- The site respects the visitor's light/dark system setting automatically; no toggle needed.
- Everything is responsive down to small mobile widths.
