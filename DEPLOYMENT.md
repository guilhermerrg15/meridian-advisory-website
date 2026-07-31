# Deployment guide

## Prerequisites

- Node.js 20+ recommended
- npm
- A GitHub (or GitLab/Bitbucket) repository
- A Vercel account

## Local production verification

```bash
npm install
npm run lint
npm run test
npm run build
npm run start
```

Confirm routes:

- `/`
- `/about`
- `/services`
- `/case-studies`
- `/contact`
- `/privacy`
- unknown path → custom 404

## Deploy to Vercel

1. Push this repository to your remote.
2. In Vercel, choose **Add New Project** and import the repo.
3. Framework preset: **Next.js** (auto-detected).
4. Build command: `npm run build`
5. Output: Next.js default (no static-export required)
6. Install command: `npm install`
7. Environment variables: **none required** for the demo contact API.
8. Deploy.

After deploy, set `siteConfig.url` in `src/data/site.ts` to your production URL so canonical tags, Open Graph URLs, sitemap, and robots remain accurate. Redeploy after that change.

## Optional: connect email later

Add provider secrets in the Vercel project settings (for example `EMAIL_API_KEY`, `CONTACT_TO_EMAIL`), then update `src/app/api/contact/route.ts` to send mail after successful Zod validation. Keep the simulated success path behind a feature flag if you want local demos without credentials.

## Post-deploy checklist

- [ ] Home hero and sticky nav render on mobile and desktop
- [ ] Contact form validation errors appear for empty submit
- [ ] Successful demo submit returns a reference id
- [ ] `/sitemap.xml` and `/robots.txt` resolve
- [ ] Portfolio routes are reachable but not linked in primary nav
- [ ] No personal contact details appear in footer/contact copy

## Notes

- Playwright portfolio scripts are for local/CI asset generation; they are not required for Vercel runtime.
- `/portfolio-showcase` and `/portfolio-case-study` are disallowed in `robots.txt` and marked `noIndex`.
