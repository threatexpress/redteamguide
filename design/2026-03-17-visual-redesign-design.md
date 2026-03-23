# Visual Redesign — Design Specification

**Date**: 2026-03-17
**Status**: Approved
**Scope**: Full visual theme overhaul for redteam.guide (Docusaurus 3.9)

## Goals

- Modernize the site aesthetic with glass-card effects, backdrop blur, generous spacing
- Keep the existing gold/teal/dark color palette
- Replace PT Root UI and PragmataPro with Inter + JetBrains Mono
- Remove monospace heading treatment (uppercase, `/ ` prefix, `{ }` nav braces)
- Clean, readable, professional — not "hacker themed"

## Design Tokens

### Colors

| Token | Value | Usage |
|---|---|---|
| `--bg-base` | `#011214` | Page bg, navbar, footer |
| `--bg-surface` | `#06191c` | Sidebar, elevated panels |
| `--bg-card` | `rgba(6, 25, 28, 0.7)` | Glass-card backgrounds |
| `--bg-card-border` | `rgba(1, 181, 194, 0.15)` | Glass-card borders |
| `--accent-gold` | `#ffb800` | Primary accent, links, active states |
| `--accent-gold-hover` | `#f8bb00` | Gold hover |
| `--accent-teal` | `#01b5c2` | Secondary accent, hover text |
| `--accent-teal-bright` | `#0ae0f0` | Glow effects |
| `--text-primary` | `#e5e7eb` | Body text |
| `--text-muted` | `#89a8aa` | Secondary text |
| `--text-dim` | `#344647` | Tertiary text |
| `--border-subtle` | `#1a2e31` | Dividers |
| `--border-accent` | `#ffb800` | Accent borders |
| `--danger` | `#6d2121` | Danger admonitions |
| `--success` | `#006d24` | Success admonitions |
| `--info` | `#005aad` | Info admonitions |
| `--warning` | `#c59700` | Warning admonitions |

### Light Mode Colors

| Token | Value | Usage |
|---|---|---|
| `--bg-base` | `#f5f7f7` | Page bg |
| `--bg-surface` | `#ffffff` | Sidebar, elevated panels |
| `--bg-card` | `rgba(255, 255, 255, 0.8)` | Glass-card backgrounds |
| `--bg-card-border` | `rgba(1, 181, 194, 0.2)` | Glass-card borders |
| `--accent-gold` | `#b88a00` | Primary accent (darker for contrast on white) |
| `--accent-gold-hover` | `#a07800` | Gold hover |
| `--accent-teal` | `#018a93` | Secondary accent |
| `--accent-teal-bright` | `#01b5c2` | Interactive highlights |
| `--text-primary` | `#1a2024` | Body text |
| `--text-muted` | `#5a6b6d` | Secondary text |
| `--text-dim` | `#9aacae` | Tertiary text |
| `--border-subtle` | `#dce4e5` | Dividers |
| `--border-accent` | `#b88a00` | Accent borders |
| `--danger` | `#b83232` | Danger admonitions |
| `--success` | `#1a8a3e` | Success admonitions |
| `--info` | `#1a6fd0` | Info admonitions |
| `--warning` | `#9a7500` | Warning admonitions |

### Typography

- **Body**: Inter 400, 1.1rem, 1.7 line-height
- **Headings**: Inter 600, normal case
- **Nav/Sidebar**: Inter 400-500
- **Code**: JetBrains Mono 400 (blocks), 600 (inline badges)
- **Inline code**: Gold badge (#f8bb00 bg, #000 text, 8px radius)

### Glass-Card

```css
background: rgba(6, 25, 28, 0.7);
backdrop-filter: blur(12px);
border: 1px solid rgba(1, 181, 194, 0.15);
border-radius: 16px;
```

### Gradient Text (hero)

```css
background-image: linear-gradient(to right, #ffb800, #0ae0f0);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
```

## Components

See `visual-design-guide.html` for live rendered examples of all components:
navbar, sidebar, cards, code blocks, admonitions, buttons, footer, pagination, table of contents, blockquotes.

## Decisions

- **No monospace headings** — clean Inter throughout, monospace only for code
- **No `/ ` prefix or `{ }` braces** — removed decorative code-themed chrome
- **Glass-card as primary surface** — replaces flat backgrounds for elevated content
- **Gold remains primary accent** in dark mode, teal is secondary/interactive
- **Fonts via Google Fonts** — no self-hosting needed
