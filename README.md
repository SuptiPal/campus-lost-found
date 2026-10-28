# RUET Campus Lost & Found — MERN Project

## Run (Windows PowerShell)
1. Start MongoDB Windows service. Connect Compass to `mongodb://127.0.0.1:27017`.
2. In `server`: `npm install`; `Copy-Item .env.example .env`; set a unique `JWT_SECRET`; `npm run dev`.
3. In `client`: `npm install`; `npm run dev`. Open the Vite Local URL (5173 or 5174).
4. Register using an address ending in `@ruet.ac.bd` and a password of at least 8 characters.

**Note:** This is a classroom demo: restricting the email suffix is NOT email ownership verification. For real deployment, add verification emails, rate limiting, proper access controls, image storage and a managed secret. No seeded accounts are provided.

## Modules
Registration/login, browse/search/filter, post items, my listings, submit claims, review claims by item owner.

## Testing
`cd server` then `npm test` and `npm run test:coverage`. Existing lab tests may need updating for newly protected endpoints. Record actual test output; do not claim tests pass without running them.

## Assignment
Includes Factory, Adapter and Strategy patterns, PlantUML source under `docs`, and GitHub Actions workflow. Real PR reviews, merge-conflict evidence, CI run and screenshots must be performed in your GitHub repository.
