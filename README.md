# EHSO'S BURGER — In‑Store (Netlify)

Deploy instructions

- Connect this repository to Netlify and select the `main` branch.
- Build command: `npm run build`
- Publish directory: `.next`
- Netlify plugin: `@netlify/plugin-nextjs` is included in `devDependencies` to enable full Next.js support.

Run locally

```bash
npm install
npm run dev
# open http://localhost:3001
```

Notes

- If your account uses 2FA, provide a Personal Access Token (PAT) when Netlify requests GitHub access.
- You can set the Node version in Netlify site settings or add an `engines` field in `package.json`.
