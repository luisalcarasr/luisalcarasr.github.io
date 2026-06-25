# luisalcaras.github.io

Personal portfolio website with a terminal/TUI aesthetic, built with [Astro](https://astro.build). Keyboard-first navigation, vim keybindings, and a typing animation that cycles through things I have shipped over the years.

**Live site:** [luisalcarasr.github.io](https://luisalcarasr.github.io)

## Stack

| Layer | Technology |
|---|---|
| Framework | [Astro](https://astro.build) 4 (static output) |
| Language | TypeScript |
| Styling | Scoped CSS + CSS variables (GitHub Dark Colorblind theme) |
| Typography | [IBM Plex Mono](https://fonts.google.com/specimen/IBM+Plex+Mono) |
| Runtime | Node.js 22 |
| Package manager | pnpm 11 |
| Hosting | GitHub Pages |
| CI/CD | GitHub Actions |

## Getting started

```bash
pnpm install
pnpm dev        # http://localhost:4321
pnpm build      # static output → dist/
pnpm preview    # serve dist/ locally
```

## Keyboard navigation

The site is designed to be used without a mouse.

| Key | Action |
|---|---|
| `h` / `l` | Switch tabs |
| `j` / `k` | Move between entries |
| `gg` | Jump to first entry |
| `G` | Jump to last entry |
| `Tab` | Navigate social links |

## Deployment

Every push to `main` triggers the GitHub Actions workflow (`.github/workflows/deploy.yml`), which builds the site with `pnpm build` and deploys the `dist/` directory to GitHub Pages automatically.

## License

[MIT](LICENSE)
