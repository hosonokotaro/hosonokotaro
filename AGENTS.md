# Agent Notes

## Communication

- Communicate with the user in Japanese. Repository documentation and code comments may remain in English unless the task specifies otherwise.

## Toolchain and commands

- Use Node `24.21.0` (`.node-version`) and npm; use `npm ci` for a clean install because `package-lock.json` is committed.
- `npm start` runs the Webpack dev server on port 3000 with history-API fallback and hot reload.
- `npm run build` creates the production site in `build/`; the build cleans that directory and copies all of `public/` into it.
- Run `npm run type-check` and `npm test -- --runInBand` for verification. Run one test file with `npx jest src/components/Section.test.tsx --runInBand`.
- `npm run lint` includes `--fix`, and `npm run prettier-format` includes `--write`; both intentionally modify source. Use `npx eslint './**/*.{ts,tsx}'` or `npx prettier --config .prettierrc './**/*.{ts,tsx}' --check` when validation must not edit files.

## Application boundaries

- This is a React 17 single-page site. The render entrypoint is `src/index.tsx`; `App` owns the global shell and `src/components/RoutingAnimation.tsx` is the route table for `/`, `/work`, and `/contact`.
- Keep `React` in scope in JSX files: TypeScript uses the classic `jsx: react` transform.
- Import aliases are deliberately shared across TypeScript, Webpack, and Jest: `~/...` maps to `src/...`, and `@/...` maps to `src/components/...`.
- Browser-served images and static files belong in `public/` and are referenced with root-relative paths such as `/images/...`; the production site is the generated `build/` directory, and because routing uses `BrowserRouter`, `vercel.json` rewrites unknown paths to `index.html` on Vercel.
- ESLint requires simple-import-sort ordering and treats Prettier violations as errors. Jest uses `ts-jest`, Testing Library DOM matchers, and a setup that stubs `window.scroll`/`scrollTo`.
