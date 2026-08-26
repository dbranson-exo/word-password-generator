# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Running the App

This is a pure static web app — no build step required. Open `index.html` directly in a browser, or serve it with any static file server:

```bash
npx serve .
# or
python3 -m http.server
```

## Architecture

This repo contains only the browser-based GUI for the password generator:

- **[index.html](index.html)** — UI layout with options panel (word count, separator, capitalization, digits, symbols, placement, entropy toggle) and results panel.
- **[words.js](words.js)** — The 4,600+ word dictionary as a single global `const commonWords` array. Load this before `script.js`.
- **[script.js](script.js)** — All password generation logic runs entirely in the browser. Contains `PasswordGenerator` (word selection, entropy calculation) and `PasswordGUI` (DOM event handling). Depends on `commonWords` from `words.js`.
- **[style.css](style.css)** — App-specific styles only. Base design tokens (`--primary-color`, `--surface`, `--radius`, `--shadow-*`, etc.) are loaded from an external shared stylesheet at `https://dbranson-exo.github.io/shared.css`. Do not redefine those variables here.

## External Dependencies

Two external scripts/styles are loaded from `https://dbranson-exo.github.io/`:
- `shared.css` — shared design system (CSS variables, resets, base components)
- `nav.js` — shared navigation component injected at runtime

These are not versioned in this repo. Changes to them will affect this app automatically.

## Password Generation Logic

The generator in `script.js` uses `crypto.getRandomValues()` for cryptographically secure randomness. Words are selected without replacement from the inline dictionary. Digits and symbols can be appended to the end or inserted between words based on the `placement` option. Entropy is calculated and displayed per password with color-coded indicators (low/medium/high/very-high thresholds).
