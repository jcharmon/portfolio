# Jordan Samson — portfolio

Built with [Astro](https://astro.build). Hosted on Vercel.

## Where things live

| What you want to change | Where it is |
| --- | --- |
| Home page words | `src/content/home.ts` |
| Project names and one-liners on the home page | `src/content/projects.ts` |
| Email, resume link, "Made in Dallas" | `src/content/site.ts` |
| OPM case study words | `src/content/opm.ts` |
| Home page tile pictures | `src/assets/home/` |
| OPM case study pictures | `src/assets/opm/` |
| Colors, fonts, sizes | `src/styles/tokens.css` |
| Your resume PDF | put it at `public/resume.pdf` |

## Swapping a picture

Replace the file in `src/assets/...` with a new one **with the exact same name**
(for example `src/assets/opm/team-1.jpg`). The site resizes and compresses it
for you. Export from Figma at 2x.

## Running it on your computer (optional)

```
npm install
npm run dev
```
Then open http://localhost:4321.
