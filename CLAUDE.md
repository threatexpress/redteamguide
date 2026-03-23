# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Red teaming reference site and companion to the book "Red Team Development and Operations" (redteam.guide) by Joe Vest and James Tubberville. Built with Docusaurus 3, React 18, MDX v3, deployed to GitHub Pages.

## Commands

```bash
yarn install --frozen-lockfile  # Install dependencies (use frozen lockfile, matches CI)
yarn start                      # Dev server at localhost:3000
yarn build                      # Production build to ./build/
yarn serve                      # Serve production build locally
yarn clear                      # Clear Docusaurus cache (use when builds behave unexpectedly)
```

No test suite or linter scripts are configured. Prettier and Stylelint are installed as devDependencies but have no run scripts.

## Architecture

- **Docusaurus config**: `docusaurus.config.mjs` — ESM config with site metadata, navbar, footer, themes, Prism theme, structured data (JSON-LD), client redirects, GA4
- **Sidebar**: `sidebars.js` — auto-generated from `docs/` directory structure
- **Content**: `docs/` — Markdown/MDX files organized into subdirectories (Concepts, Planning, Exercises, threat-profiles, Templates, checklists). Subdirectory ordering controlled by `_category_.json` files with `generated-index` links
- **React source**: `src/pages/` (homepage, privacy, disclaimer), `src/components/`, `src/css/custom.css` (styles + design tokens), `src/blink/` (custom Prism syntax theme)
- **Static assets**: `static/img/` (logo, book cover, headshots), `static/files/` (PDFs), `static/templates/`
- **Blog**: `blog/` — Docusaurus blog posts in `YYYY-MM-DD-slug/index.md` folders with co-located images. Authors defined in `blog/authors.yml`. Sidebar shows all posts. RSS/Atom feeds enabled.
- **Search**: `@easyops-cn/docusaurus-search-local` — client-side search with Cmd/Ctrl+K, result highlighting on target pages
- **Redirects**: `@docusaurus/plugin-client-redirects` — client-side redirects for renamed URLs (e.g., `Threat Profiles` → `threat-profiles`, `mindset-challege` → `mindset-challenge`). Configured in `plugins` array in `docusaurus.config.mjs`
- **Diagrams**: Mermaid diagrams enabled via `@docusaurus/theme-mermaid` — use fenced `mermaid` code blocks in docs

## CI/CD

GitHub Actions workflow (`.github/workflows/deploy.yml`): on push/PR to `main`, installs with Yarn, builds, deploys `./build/` to `gh-pages` branch via `peaceiris/actions-gh-pages`. Requires Node 20+.

## Current Visual Design

Clean, modern design with restrained color usage. All styles in `src/css/custom.css`.

### Design Tokens

| Token              | Dark Mode   | Light Mode  | Usage                                    |
|--------------------|-------------|-------------|------------------------------------------|
| `--bg-base`        | `#011214`   | `#f5f7f7`   | Page background                          |
| `--bg-surface`     | `#06191c`   | `#ffffff`   | Surface/card background                  |
| `--bg-card`        | `rgba(6,25,28,0.7)` | `rgba(255,255,255,0.8)` | Glass-card surfaces |
| `--accent-gold`    | `#ffb800`   | `#b88a00`   | Primary accent — interactive elements only |
| `--accent-teal`    | `#01b5c2`   | `#018a93`   | Hover accents, secondary highlights      |
| `--text-primary`   | `#e5e7eb`   | `#1a2024`   | Body text                                |
| `--text-muted`     | `#89a8aa`   | `#5a6b6d`   | Secondary text                           |
| `--border-subtle`  | `#1a2e31`   | `#dce4e5`   | Section dividers, card borders           |
| `--border-accent`  | `#ffb800`   | `#b88a00`   | Active states, navbar border             |

**Color philosophy**: Gold reserved for interactive elements (links, buttons, hover states, the `.` in REDTEAM.GUIDE). Teal for secondary hover accents. Everything else neutral.

### Typography

- **Body**: Inter (weights 400–700, Google Fonts) — `--font-sans`
- **Headings**: Plus Jakarta Sans (weights 500–700, Google Fonts) — `--font-heading`
- **Code**: JetBrains Mono (weights 400, 600, Google Fonts) — `--font-mono`
- **Inline code**: gold badge (yellow bg, black text)
- **Markdown body**: `font-size: 1.1rem`, `line-height: 1.7`

### Homepage Layout

Search-first landing page (`src/pages/index.js` + `src/pages/index.module.css`):

1. **Hero** — Solid white "REDTEAM.GUIDE" (Plus Jakarta Sans) with gold `.` as sole color accent. Reticle watermark (logo.png at 4% opacity) behind title. Subtitle + search bar triggers navbar search
2. **Curated Highlights** — 3 glass-card links: What is Red Teaming?, Red Team Checklist, Definitions
3. **Blog** — Link to `/blog` with description
4. **Book** — Horizontal glass-card: cover image, description, Paperback/Kindle/Audible links, YouTube overview link, About the Book link

### UI Patterns

- **Glass-card**: `.glass-card` utility — backdrop-blur, semi-transparent bg, subtle border, hover lift
- **Navbar**: Glass blur, gold bottom border, short labels (Guides, Definitions, Authors, Book, Blog), pill-highlight on hover/active
- **Sidebar**: Right-border highlight on active, uppercase category labels
- **Pagination**: Gold-bordered glass cards with teal glow on hover
- **Footer**: 4 columns (Docs, Community, More, Legal), gold top border

## SEO & Analytics

- **GA4**: Google Analytics 4 enabled via `@docusaurus/plugin-google-gtag` (measurement ID `G-S9YDP7R6HD`)
- **Schema markup**: JSON-LD structured data in `docusaurus.config.mjs` `headTags` (WebSite, Organization) and `src/pages/index.js` (Book). Validate at https://search.google.com/test/rich-results
- **Sitemap**: Auto-generated at `/sitemap.xml` by `@docusaurus/preset-classic`
- **robots.txt**: `static/robots.txt` — allows all crawlers, references sitemap
- **Meta tags**: Twitter Card and Open Graph tags configured in `themeConfig.metadata`

## Content Editing

- Add/edit Markdown or MDX files in `docs/`
- Use `_category_.json` to control sidebar position and labels for subdirectories
- Use `sidebar_position` (underscore, not hyphen) in doc frontmatter for ordering
- Include `description` and `keywords` in frontmatter for SEO
- Admonitions: `:::tip`, `:::note`, `:::info`, `:::warning`, `:::danger` with optional `[Custom Title]`
- Mermaid diagrams: use ` ```mermaid ` fenced code blocks for flowcharts, sequence diagrams, etc.
- Material Icons available via Google Fonts CSS (`<span class="material-icons">icon_name</span>`)
- Image sizing in MDX: `<img src="/img/file.png" alt="desc" width="200" />`
- `onBrokenLinks: 'throw'` and `onBrokenMarkdownLinks: 'throw'` — broken links fail the build

### Blog Posts

- Create new posts as `blog/YYYY-MM-DD-slug/index.md` with co-located images
- Required frontmatter: `title`, `authors` (from `blog/authors.yml`), `tags`, `slug`
- Add `<!-- truncate -->` after the first paragraph for blog list excerpts
- Authors: `joe`, `james`, `andrewchiles` (defined in `blog/authors.yml`)
- Images: place in the post folder and reference as `./filename.png`

## Pages

- `/` — Homepage (search-first landing page)
- `/docs/guides` — Red Team Guides index
- `/docs/about_the_book` — Book page with cover, purchase links, YouTube embed, author bios
- `/docs/about_the_authors` — Author page
- `/docs/definitions` — Red teaming definitions
- `/blog` — Blog with RSS/Atom feeds
- `/privacy` — Privacy policy (required for GA4 compliance)
- `/disclaimer` — Disclaimer for offensive security content
