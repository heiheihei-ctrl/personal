# YY Studio — Portfolio

Bilingual (中文 / English) portfolio for **Yingyi Qian (YY)**, a full-stack developer focused on **Shopify storefronts, WordPress / WooCommerce builds, bug fixing and AI agent / MCP integrations**.

Live focus:

- Shopify case studies first (Formade, ZiraSpark, ArmorLite, Bluebox Japan, POSE, Carve)
- WordPress / WooCommerce positioned as a core service
- 23 real projects across e-commerce, web apps, mini programs and H5
- Full English version for international clients

## Stack

- React 19 + React Router 7
- Vite 6
- TailwindCSS (CDN)
- TypeScript

## Run locally

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

## Language switch

- The site follows the browser language by default.
- `?lang=en` forces English; `?lang=zh` forces Chinese.
- The navbar toggle stores the choice in `localStorage['yy-lang']`.

For Fiverr clients, share the English URL:

```text
https://your-domain.com/?lang=en
```

## Project structure

```text
App.tsx                  routes + layout
i18n.tsx                 UI strings, language provider, date/category helpers
en.ts                    English case studies
constants.tsx            project data (Chinese source)
projectSummaries.ts      Chinese summary / implementation data
types.ts                 shared types and enums
pages/                   Home, About, ProjectDetail
components/              Navbar, Footer, ProjectCard, Carousel, ImageModal
assets/                  screenshots (heavy PNGs converted to WebP)
```

To add a project, add an entry to `constants.tsx` + `projectSummaries.ts`, then its English version to `en.ts`.

## Contact

- Email: 19154916318@163.com
- WeChat QR code: `assets/wechat-qr.png`
