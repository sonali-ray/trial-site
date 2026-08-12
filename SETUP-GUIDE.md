# Setup Guide — Get This Live in ~15 Minutes

This project is a small Next.js site. Follow these steps once, and you'll have the
exact same workflow for every future Next.js/Astro project.

---

## Part 1 — One-time setup (do this once, ever)

1. **Install Git**
   - Windows: download from https://git-scm.com/downloads and install with defaults.
   - Check it worked: open a terminal (Command Prompt / PowerPoint / Terminal) and run:
     ```
     git --version
     ```

2. **Create a GitHub account** (skip if you already have one)
   - https://github.com/signup

3. **Install Node.js** (needed to run/build the project locally)
   - https://nodejs.org — download the LTS version.
   - Check it worked:
     ```
     node --version
     npm --version
     ```

4. **Create a Vercel account**
   - https://vercel.com/signup
   - Choose "Continue with GitHub" — this links the two accounts and makes deployment automatic later.

---

## Part 2 — Get this project onto your computer

1. Unzip the `trial-site` folder somewhere you'll remember, e.g. `Desktop/trial-site`.
2. Open a terminal **inside that folder**.
   - Easiest way: on Windows, open the folder in File Explorer, click the address bar, type `cmd`, hit Enter.
3. Install the project's dependencies:
   ```
   npm install
   ```
4. Run it locally to see it in your browser:
   ```
   npm run dev
   ```
   Then open **http://localhost:3000** — you should see the page live on your own machine.
   Press `Ctrl+C` in the terminal to stop it.

---

## Part 3 — Push it to GitHub

Still inside the `trial-site` folder in your terminal:

```bash
git init
git add .
git commit -m "first commit"
```

What just happened: `git init` turns the folder into a Git project. `git add .` stages every
file. `git commit` saves a permanent snapshot with a message describing it.

Now create the remote home for it on GitHub:

1. Go to https://github.com/new
2. Repository name: `trial-site` (or anything you like)
3. Leave it **Public**, don't check any of the "initialize with" boxes
4. Click **Create repository**
5. GitHub will show you a page with commands under "…or push an existing repository from the command line." Copy those — they'll look like this (your username will be different):

```bash
git remote add origin https://github.com/YOUR-USERNAME/trial-site.git
git branch -M main
git push -u origin main
```

Run those in your terminal. It'll ask you to log in to GitHub the first time — follow the
prompt (usually opens a browser window to authorize).

Refresh the GitHub page — your files should now be there.

---

## Part 4 — Deploy it live with Vercel

1. Go to https://vercel.com/new
2. You'll see your GitHub repos listed. Find `trial-site` and click **Import**.
3. Vercel auto-detects it's a Next.js project — leave all settings as default.
4. Click **Deploy**.
5. Wait ~60 seconds. You'll get a live URL like `trial-site-yourname.vercel.app`.

That's it — the site is live on the internet.

---

## Part 5 — The workflow you'll repeat forever after

Any time you change a file and want the live site updated:

```bash
git add .
git commit -m "describe what you changed"
git push
```

Vercel is watching your GitHub repo. The moment you push, it automatically rebuilds and
redeploys — no manual upload, no FTP, nothing else to click.

---

## Part 6 — Connect your own domain (optional, once you're ready)

1. In your Vercel project → **Settings → Domains** → add your domain (e.g. `urlopenerpro.com`).
2. Vercel will show you a DNS record to add (usually an `A` record or `CNAME`).
3. Go to Namecheap → Domain List → Manage → Advanced DNS → add that record.
4. DNS changes can take a few minutes to a few hours to go live.

---

## Quick troubleshooting

- **`git: command not found`** → Git isn't installed, or you need to restart your terminal after installing.
- **`npm install` fails** → make sure you're inside the `trial-site` folder (check with `pwd` on Mac or `cd` on Windows with no args).
- **Push asks for a password and rejects it** → GitHub no longer accepts plain passwords over the command line. Let the browser-based login prompt handle it, or create a Personal Access Token at https://github.com/settings/tokens and use that as the password if asked.
- **Vercel build fails** → click on the failed deployment in Vercel, read the build log — it usually points to a missing dependency or a typo in a file.
