# Besi Works Website

A static website showcasing Besi Works' apps and games. Built with plain HTML, CSS, and JavaScript — no build tools, no framework, no dependencies.

## Preview locally

Just open `index.html` in a browser, or run a local server from the repo root:

```
python3 -m http.server
```

Then visit `http://localhost:8000`.

## Project structure

```
index.html            Homepage (hero, apps grid, about, contact)
apps/                  One detail page per app with a full write-up
css/styles.css         All site styles
js/apps-data.js        App list (edit this to add/update apps)
js/main.js             Renders app cards from apps-data.js
assets/                Icons and screenshots
```

## Adding a new app

1. Add an object to the `APPS` array in `js/apps-data.js` (copy an existing entry as a template).
2. Set `status: "live"` once you have a real Play Store / web URL, or leave it `"coming-soon"` as a placeholder.
3. Drop the app's icon and screenshots into `assets/images/apps/<slug>/`.
4. If the app needs a full write-up, copy `apps/spendstreak.html` to `apps/<slug>.html`, update its content, and point `detailPage` at it in `apps-data.js`.

The homepage automatically re-renders the apps grid from that data file — no other HTML needs to change.

## Deploying to GitHub Pages

1. Push this repo to GitHub.
2. In the repo settings, enable GitHub Pages and set the source to the branch/root you deployed.
3. The site will be served at `https://<username>.github.io/<repo-name>/`. All paths in this project are relative, so it works from a subpath automatically.
