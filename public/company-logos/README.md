# Company logos

Drop your company logo assets here. They are referenced by `data/experience.ts`
and rendered by the `CompanyLogo` helper inside
`components/sections/experience.tsx`.

## Expected files

| File                            | Format | Notes                                  |
| ------------------------------- | ------ | -------------------------------------- |
| `public/company-logos/neutara.png`   | PNG    | Static PNG with transparent background |
| `public/company-logos/accenture.gif` | GIF    | Animated GIF — rendered via `<img>` so the animation plays |

## Fallback

If a file is missing, the Experience card falls back to a gradient tile
showing the first letter of the company name — so the UI never looks broken
while you're still collecting assets.

## Tips

- Keep logos **square-ish** and **~256×256** or larger — the container is
  `h-14 w-14` with `object-contain`, so anything with consistent padding
  will look good.
- PNGs should have a transparent background to blend with the dark and light
  themes.
