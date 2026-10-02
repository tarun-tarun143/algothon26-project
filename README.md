# ALGOTHON'26 Project

A clean, production-ready starter for **ALGOTHON'26** using Next.js, React, TypeScript and Tailwind CSS.

## Stack

- Next.js 15 App Router
- React 19
- TypeScript (strict mode)
- Tailwind CSS v4
- ESLint

## Folder structure

```text
algothon26-project/
├── .env.example
├── .gitignore
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── README.md
├── tsconfig.json
├── public/
│   └── (static assets go here)
└── src/
    ├── app/
    │   ├── api/
    │   │   └── health/
    │   │       └── route.ts
    │   ├── globals.css
    │   ├── layout.tsx
    │   └── page.tsx
    ├── components/
    │   └── status-card.tsx
    ├── hooks/
    │   └── use-project-status.ts
    ├── lib/
    │   └── env.ts
    └── types/
        └── index.ts
```

## Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Create environment file

Windows PowerShell:

```powershell
Copy-Item .env.example .env.local
```

macOS/Linux:

```bash
cp .env.example .env.local
```

### 3. Start development server

```bash
npm run dev
```

Open `http://localhost:3000`.

## Quality checks

```bash
npm run typecheck
npm run lint
npm run build
```

Run these before submission.

## Health endpoint

Open:

```text
http://localhost:3000/api/health
```

Expected JSON shape:

```json
{
  "ok": true,
  "service": "ALGOTHON'26 Project",
  "timestamp": "..."
}
```

## Hackathon implementation checklist

- [ ] Replace the starter page with the official challenge solution.
- [ ] Add your database/auth only after the case requirements are known.
- [ ] Add the actual application features.
- [ ] Test all primary user flows.
- [ ] Add loading, empty and error states.
- [ ] Remove unused code and packages.
- [ ] Add screenshots to the README.
- [ ] Add the live deployment URL.
- [ ] Add the GitHub repository URL.
- [ ] Run `npm run typecheck`, `npm run lint`, and `npm run build`.

## Environment rules

Never commit `.env.local` or any file containing real API keys, passwords, service-role keys or database credentials.

Keep `.env.example` updated with variable names only.

## Next steps

Once the official ALGOTHON'26 case file is available, convert this starter into the actual solution by replacing the homepage, adding the required domain models/API routes, and connecting the necessary backend services.
