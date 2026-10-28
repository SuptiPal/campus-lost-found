# Evidence checklist
1. `cd server && npm install && npm test && npm run test:coverage`; capture passing test and coverage output.
2. Demonstrate a real failed test by temporarily changing `expect(x.status).toBe('open')` to `toBe('closed')` in `tests/patterns.test.js`; run tests and screenshot failure; restore test and rerun. Clearly describe this as an intentionally introduced test defect, not an application defect.
3. For genuine application bug demo, temporarily change `status:'open'` to `status:'resolved'` in itemFactory.js; rerun tests (factory test fails); screenshot; restore and rerun.
4. Push repository, create branches and PRs with real changes and reviews. Screenshot accepted PR and revised PR.
5. Make conflicting README edits in two branches; merge first, attempt second, resolve conflict markers, commit, screenshot history.
6. Screenshot passing GitHub Actions workflow after committing server/package-lock.json.
7. Record dates, challenges, resource links, and personal reflection; never claim evidence not performed.
