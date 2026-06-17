# CIAO! Sicily — Kitchen Hub

A premium landing page and e-commerce storefront for **CIAO! Sicily**, an organic, single-origin, zero-blend, cold-pressed Sicilian Extra Virgin Olive Oil (EVOO) brand.

---

## 🚀 Tech Stack

- **Framework:** [TanStack Start](https://tanstack.com/router/v1/docs/start/overview) — Full-stack React framework with Type-Safe Routing, Server Functions, and Server-Side Rendering (SSR) powered by **Nitro**.
- **Routing:** [TanStack Router](https://tanstack.com/router) — Strict type safety for routes, loaders, and search parameters.
- **State & Caching:** [TanStack React Query](https://tanstack.com/query) — Syncing and caching asynchronous server state.
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) — Using the fast Rust-based compiler and inline CSS theme configuration.
- **Components:** Radix UI primitives (Accordion, Sheet, Tooltip, Dialog, etc.) styled with Tailwind CSS.
- **Languages:** TypeScript & React 19.

---

## 📁 Project Structure

```
ciao-sicily-kitchen/
├── src/
│   ├── assets/               # Local static images and brand assets
│   ├── components/
│   │   ├── sections/         # Modular layout sections (Header, Hero, Shop, FAQ, etc.)
│   │   └── ui/               # Reusable Radix UI & Shadcn component primitives
│   ├── hooks/                # Custom React hooks
│   ├── lib/
│   │   ├── api/
│   │   │   └── example.functions.ts   # Example TanStack Start Server Function
│   │   ├── config.server.ts           # Server-side environment checks
│   │   ├── error-capture.ts           # Global error intercepts for SSR recovery
│   │   ├── error-page.ts              # SSR fallback HTML template
│   │   └── utils.ts                   # Class name merger helper (cn)
│   ├── routes/
│   │   ├── __root.tsx        # App Shell, SEO headers, fonts and global stylesheet imports
│   │   └── index.tsx         # Main entry page, renders all section components
│   ├── routeTree.gen.ts      # Auto-generated routing tree
│   ├── router.tsx            # Router & React Query client bootstrapping
│   ├── server.ts             # SSR server entry point with error mitigation layers
│   ├── start.ts              # Client entry point with request middlewares
│   └── styles.css            # Custom layers, OKLCH variables, checker patterns, and keyframes
```

---

## 🎨 Design System & Styling

The design is custom-built to reflect a rustic yet high-end, premium food brand:
- **Color Space:** Utilizes **OKLCH** color codes in [styles.css](file:///Users/wisleyaguiar/Projetos/ciao-sicily-kitchen/src/styles.css) (Cream background, Charcoal foreground, Vibrant Red primary, Fresh Green secondary).
- **Rustic Accents:** Contains `.checker-band` conic Napolitano napkin patterns and `.ciao-script` brush text signatures rotated at `-3deg`.
- **Micro-Animations:** Includes slow floating seals (`animate-float`) and smooth olive oil drizzle keyframes.

---

## 📈 SEO & Optimization Highlights

- **Dynamic FAQ Schema:** The FAQ section in [FaqSection.tsx](file:///Users/wisleyaguiar/Projetos/ciao-sicily-kitchen/src/components/sections/FaqSection.tsx) automatically injects structured `FAQPage` JSON-LD data to help Google index questions and answers for rich SERP snippets.
- **Head Meta Configurations:** Set dynamic titles, descriptions, OpenGraph headers, and canonical links inside [index.tsx](file:///Users/wisleyaguiar/Projetos/ciao-sicily-kitchen/src/routes/index.tsx) and [__root.tsx](file:///Users/wisleyaguiar/Projetos/ciao-sicily-kitchen/src/routes/__root.tsx).
- **Fast SSR:** Fully server-side rendered, yielding excellent Core Web Vitals (LCP/INP) and immediate DOM visibility for search engine bots.

---

## 🛠️ Getting Started

### Prerequisites

You need **Node.js** and **npm** installed on your system.

### Installation

Clone the repository and install the dependencies:

```bash
npm install
```

### Development

Run the Vite development server locally:

```bash
npm run dev
```
By default, the server runs on [http://localhost:8080](http://localhost:8080).

### Build

Compile client and server environments for production:

```bash
npm run build
```

This compiles client-side outputs and assets to `dist/client` and SSR server modules to `dist/server`.
