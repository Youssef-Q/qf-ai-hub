# QF AI Hub: concept landing page

Static site. No build step, no dependencies.

## Open in VS Code
1. Unzip the folder and open it in VS Code (File > Open Folder).
2. Install the "Live Server" extension, right-click `index.html`, choose "Open with Live Server".
   You can also double-click `index.html` to open it in a browser.

## Files
- `index.html`: page structure and content
- `styles.css`: design tokens at the top (colors, fonts), then components
- `script.js`: logo fallback and the copy-address button
- `assets/`: put the official logo here as `qf-logo.png`

## Logo
The page expects `assets/qf-logo.png` (dark green, about 69x42 px in the header, 52x32 px in the footer).
Until it exists, a dashed "QF logo" placeholder is shown. Ask Qatar Foundation for the official SVG and
brand guidelines rather than copying the PNG from another site. If you get an SVG, save it as
`assets/qf-logo.svg` and change the two `src` paths in `index.html`.

## Design system
Colors, Outfit (headings, 800 for section titles) and Inter (body) follow the qfaihub.com style notes.
One deviation: small uppercase labels use a slightly deeper green (`--green-ink: #00704B`) because
`#009966` on near-white is below the recommended contrast for small text. Change it back in `:root` if
you want an exact match.

## Content
Text is based on the Qatar Foundation announcement on the LSE Global Forum for AI and the Social
Sciences site (16 September 2026). The page is an unofficial concept and says so in the top banner.
