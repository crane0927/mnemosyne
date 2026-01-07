# Repository Guidelines

## Project Structure & Module Organization
- `src/` contains the React + TypeScript app.
  - `src/main.tsx` bootstraps the app, `src/App.tsx` holds the main UI.
  - `src/components/` houses reusable UI components.
  - `src/utils/` and `src/types.ts` contain shared helpers and types.
- `index.html` is the Vite entry HTML.
- `dist/` is the production build output (generated).

## Build, Test, and Development Commands
- `npm install` installs dependencies.
- `npm run dev` starts the Vite dev server for local development.
- `npm run build` runs type-checking (`tsc`) and produces a production build in `dist/`.
- `npm run preview` serves the built app locally for verification.
- `npm run lint` runs ESLint on `.ts`/`.tsx` files.

## Coding Style & Naming Conventions
- Language: TypeScript + React.
- Indentation: 2 spaces (follow existing files).
- File naming: components and utilities use `PascalCase`/`camelCase` consistent with current files (e.g., `App.tsx`, `types.ts`).
- Linting: ESLint with `@typescript-eslint` and `react-hooks`; keep warnings clean before committing.

## Testing Guidelines
- No test framework or test files are present yet.
- If you add tests, mirror standard naming like `*.test.tsx` and document how to run them in this file.

## Commit & Pull Request Guidelines
- Git history is minimal; the latest commit uses a Conventional Commit-style prefix (`feat:`). Follow that pattern if possible.
- PRs should include a brief summary, steps to test, and screenshots or GIFs for UI changes (especially editor/preview/PDF export flows).

## Configuration Tips
- TypeScript config lives in `tsconfig.json` and `tsconfig.node.json`.
- Vite configuration is in `vite.config.ts`.
