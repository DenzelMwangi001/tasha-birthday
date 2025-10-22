# Natasha's Birthday Site — Ready to Deploy

This is a simple, elegant static website made for Natasha's birthday. It uses plain HTML/CSS/JavaScript (no Tailwind). The design is calm, classic and intended to be live briefly (e.g., 24 hours).

## Files included
- `index.html` — Home page with headline.
- `wishes.html` — "My Wishes in Her New Year".
- `love.html` — "The Things I Love Her For".
- `virtues.html` — "Her Virtues".
- `styles.css` — All styling (pure CSS).
- `script.js` — Autoplay attempt & simple UI behavior.
- `assets/` — folder for assets. **Audio not included**.

## Important: Audio / Autoplay
Modern browsers often **block autoplay with sound**. The site attempts to autoplay the file `assets/snoopy-chill.mp3` on load. Because I cannot include copyrighted audio, please add the audio file yourself to `assets/snoopy-chill.mp3` if you want the jazz to play automatically. If autoplay is blocked, the page will show a centered button to let the visitor start the music manually.

## Deploy quickly (3 easy ways)
### 1) Vercel (recommended)
1. Sign up / sign in to https://vercel.com
2. Create a new project, import from the GitHub repo (or drag-and-drop the folder).
3. Deploy — Vercel will host it globally. Copy the URL and share it.

### 2) Netlify (simple drag-and-drop)
1. Sign in to https://app.netlify.com
2. Drag the contents of this folder (the files and `assets/`) to "Sites" > "Create a new site from drag & drop".
3. Netlify publishes instantly with a random URL you can share.

### 3) Static file host (GitHub Pages)
1. Push this folder to a GitHub repository.
2. Enable GitHub Pages from the repository's settings (use `main` branch / `/root`).
3. Access the site at `https://<your-username>.github.io/<repo>`.

## To run for 24 hours then remove
Deploy as above, then delete the site from Vercel/Netlify or unpublish the GitHub Pages repo after 24 hours.

## Customizations
- Replace the copy on each page with your personal messages.
- Add `assets/snoopy-chill.mp3` for the jazz. (Or change the `audio` src to a hosted mp3.)
- Replace fonts or colors inside `styles.css` if you'd like other old-money palettes.

## Need me to deploy it for you?
I can produce a GitHub-ready repo or create the site deployed on Netlify/Vercel if you'd like — tell me which and provide the minimal access or your GitHub account name and I'll give exact instructions. (I cannot deploy to your accounts without credentials.)

---
Made with care — Happy birthday, Tasha.
