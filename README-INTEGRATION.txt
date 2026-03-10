AraE site bundle — integration notes

1) Files to replace or add
- Replace existing root HTML pages with the versions in this bundle.
- Replace css/ with the CSS files in this bundle.
- Replace js/main.js with the version in this bundle.
- Add js/site-config.js.
- Add assets/placeholders/, assets/og/, icons/, favicon.ico.

2) Important
- If your current project really contains "sessions.thml", rename it to "sessions.html".
- If your current project really contains "components.ts" for CSS, rename it to "components.css" or replace it with css/components.css from this bundle.
- The language switch was intentionally removed from the visible UI. Keep your i18n files aside for later.

3) Launch-day activation
Edit js/site-config.js:
- launchMode: "live"
- buyUrl: your real checkout URL
- downloadUrl: your real installer URL
- priceLabel: your final price
- supportEmail / salesEmail
- companyName / companyAddress / companyId / vatNumber / publicationDirector

4) Replace placeholder images
Swap these files with your real assets, keeping the same names:
- assets/placeholders/hero-main.webp
- assets/placeholders/sessions.webp
- assets/placeholders/world.webp
- assets/placeholders/rules.webp
- assets/placeholders/gm.webp
- assets/og/og-home.png

5) Legal pages
privacy.html, mentions-legales.html, cgv.html and cookies.html are structured templates.
They must be completed and verified with your real business information before public launch.
