export default function Home() {
  return (
    <main className="wrap">
      <section className="hero">
        <p className="eyebrow">Yo Yo Honey Singh · Practice Build</p>
        <h1>
          This page is <em>live</em> because Git shipped it.
        </h1>
        <p className="sub">
          A minimal Next.js site, built to practice the exact loop you&apos;ll use for every
          real project from here on: write code, commit it, push it, watch it deploy itself.
        </p>

        <div className="stamp">
          <span className="dot" />
          Deployed via GitHub → Vercel
        </div>

        <div className="log">
          <p className="log-title">// deploy log</p>

          <div className="step">
            <div className="node">1</div>
            <div className="step-body">
              <code>git init &amp;&amp; git add . &amp;&amp; git commit -m &quot;first commit&quot;</code>
              <p>Turns this folder into a Git repository and saves a snapshot of every file.</p>
            </div>
          </div>

          <div className="step">
            <div className="node">2</div>
            <div className="step-body">
              <code>git push origin main</code>
              <p>Uploads that snapshot to GitHub — the code&apos;s permanent, shareable home.</p>
            </div>
          </div>

          <div className="step">
            <div className="node">3</div>
            <div className="step-body">
              <code>vercel.com → Import Project</code>
              <p>Vercel reads the GitHub repo, builds the site, and gives it a live URL.</p>
            </div>
          </div>

          <div className="step">
            <div className="node">4</div>
            <div className="step-body">
              <code>git push (again, anytime)</code>
              <p>Every future push rebuilds and redeploys automatically. No manual uploads.</p>
            </div>
          </div>
        </div>

        <div className="footer-note">
          <span>
            Built with <strong>Next.js</strong>
          </span>
          <span>Fonts: Fraunces &amp; Plus Jakarta Sans</span>
        </div>
      </section>
    </main>
  );
}
