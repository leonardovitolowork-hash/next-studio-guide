# Next Studio Guide

An independent, visual study companion for **Cakewalk Next** (not Sonar or the older Cakewalk by BandLab). Open the Learning Path to go from a new session to an exported song, or jump straight into the map, sound lab, cheat sheets and local Q&A.

## Run or publish

- No packages, build step, account, keys or app server. For full offline/install behavior, run `python -m http.server 8000 --directory docs`, then open `http://localhost:8000`.
- GitHub Pages: **Settings → Pages → Deploy from a branch → main → /docs → Save**. Confirm the deployment succeeds and open the URL displayed by GitHub. The app uses relative assets and hash routes to work under a repo subpath.
- Install on supported browsers. Core assets are cached after successful initial load; external links still need internet. Progress and platform settings stay in this browser. The demo does not access hardware or the DAW. The Q&A matches questions to curated notes; it does not generate or send questions to a server.

## Content database

`docs/library.js` contains structured lessons, sources, shortcuts and map hotspots (no database server needed). A lesson includes a stable ID, category, query terms, where-to-click path, procedure, verification, practice activity and source references. Source links and lesson text should be reviewed against the current Next build; the bundled curriculum is not a mirror of the full vendor manual. To release app updates, bump the service worker cache name when changing the cached shell.

## Test

`node --test tests/smoke.cjs` checks knowledge base references, routing targets, shortcut integrity, example Q&A and safe fallbacks. `QA.md` lists browser, Pages and hardware acceptance tests. Source material is linked, not republished. No official assets or logo are used. Product names remain the property of their owners.
