const PORT = parseInt(process.env.PORT || "3027", 10);

// ─── Layout ───────────────────────────────────────────────────────────────────

function layout(title: string, content: string, opts: { wide?: boolean } = {}): string {
  const maxWidth = opts.wide ? "1100px" : "860px";
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title} — Fiona Wu, Pianist</title>
  <style>
    /* ── Reset ── */
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    /* ── Tokens ── */
    :root {
      --bg:        #fafaf8;
      --ink:       #1a1a1a;
      --muted:     #8a8578;
      --rule:      #e0ddd6;
      --gold:      #b8a88a;
      --gold-dark: #9a8a72;
      --serif:     Georgia, 'Palatino Linotype', Palatino, serif;
      --sans:      'Helvetica Neue', Arial, sans-serif;
    }

    /* ── Base ── */
    html { font-size: 17px; scroll-behavior: smooth; }
    body {
      font-family: var(--serif);
      color: var(--ink);
      background: var(--bg);
      line-height: 1.75;
      -webkit-font-smoothing: antialiased;
    }

    /* ── Nav ── */
    .site-nav {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 0.25rem 1.25rem;
      padding: 1.25rem 2.5rem;
      border-bottom: 1px solid var(--rule);
      background: var(--bg);
    }
    .site-nav .brand {
      font-family: var(--serif);
      font-size: 1.25rem;
      font-style: italic;
      color: var(--ink);
      text-decoration: none;
      letter-spacing: 0.01em;
      margin-right: auto;
    }
    .site-nav a {
      font-family: var(--sans);
      font-size: 0.72rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--muted);
      text-decoration: none;
      padding-bottom: 2px;
      border-bottom: 1px solid transparent;
      transition: color 0.2s, border-color 0.2s;
    }
    .site-nav a:hover {
      color: var(--ink);
      border-bottom-color: var(--gold);
    }

    /* ── Main ── */
    main {
      max-width: ${maxWidth};
      margin: 0 auto;
      padding: 3.5rem 2rem 5rem;
    }

    /* ── Typography ── */
    h1 { font-size: 2.4rem; font-weight: normal; line-height: 1.2; letter-spacing: -0.01em; }
    h2 { font-size: 1.5rem; font-weight: normal; letter-spacing: 0.01em; margin-bottom: 1.25rem; }
    h3 { font-family: var(--sans); font-size: 0.72rem; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: var(--muted); margin-bottom: 0.75rem; }
    p { margin-bottom: 1.25rem; }
    p:last-child { margin-bottom: 0; }

    /* ── Links ── */
    a { color: var(--gold-dark); text-decoration: none; }
    a:hover { text-decoration: underline; }

    /* ── Pull-quote ── */
    .pull-quote {
      font-style: italic;
      font-size: 1.25rem;
      line-height: 1.6;
      color: var(--muted);
      text-align: center;
      padding: 2.5rem 2rem;
      border-top: 1px solid var(--rule);
      border-bottom: 1px solid var(--rule);
      margin: 3rem 0;
    }
    .pull-quote em { font-style: normal; color: var(--ink); }

    /* ── Press quote ── */
    .press-quote {
      border-left: 3px solid var(--gold);
      padding: 1.25rem 1.5rem;
      margin: 2rem 0;
      background: #f5f3ef;
      border-radius: 0 4px 4px 0;
    }
    .press-quote blockquote {
      font-style: italic;
      font-size: 1.05rem;
      line-height: 1.7;
      color: #3a3730;
      margin-bottom: 0.75rem;
    }
    .press-quote cite {
      font-family: var(--sans);
      font-size: 0.72rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--muted);
      font-style: normal;
    }

    /* ── Cards ── */
    .card-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.5rem;
      margin-top: 3rem;
    }
    .card {
      padding: 1.75rem 1.5rem;
      border: 1px solid var(--rule);
      border-radius: 4px;
      background: #fff;
    }
    .card h3 { margin-bottom: 0.5rem; }
    .card p { font-size: 0.95rem; color: var(--muted); margin-bottom: 1.25rem; }
    .card a.cta {
      font-family: var(--sans);
      font-size: 0.72rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--gold-dark);
      text-decoration: none;
      border-bottom: 1px solid var(--gold);
      padding-bottom: 1px;
    }
    .card a.cta:hover { color: var(--ink); border-color: var(--ink); }

    /* ── About layout ── */
    .about-grid {
      display: grid;
      grid-template-columns: 1fr 280px;
      gap: 4rem;
      align-items: start;
    }
    .bio-text p { font-size: 1.05rem; line-height: 1.85; }
    .bio-sidebar {
      border-left: 1px solid var(--rule);
      padding-left: 2rem;
    }
    .bio-sidebar .fact-block { margin-bottom: 2rem; }
    .bio-sidebar .fact-block h3 { margin-bottom: 0.5rem; }
    .bio-sidebar .fact-block p,
    .bio-sidebar .fact-block li {
      font-size: 0.92rem;
      color: var(--muted);
      line-height: 1.6;
    }
    .bio-sidebar ul { list-style: none; padding: 0; }
    .bio-sidebar ul li { margin-bottom: 0.25rem; }

    .featured-quote {
      margin-top: 3.5rem;
      padding: 2.5rem;
      background: #f0ede8;
      border-radius: 4px;
      text-align: center;
    }
    .featured-quote p {
      font-style: italic;
      font-size: 1.35rem;
      line-height: 1.55;
      color: var(--ink);
      margin: 0;
    }

    /* ── Hero ── */
    .hero {
      text-align: center;
      padding: 5rem 1rem 4rem;
      border-bottom: 1px solid var(--rule);
      margin-bottom: 3.5rem;
    }
    .hero h1 { font-size: 3.5rem; letter-spacing: -0.02em; margin-bottom: 0.6rem; }
    .hero .subtitle {
      font-family: var(--sans);
      font-size: 0.8rem;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--muted);
    }

    /* ── Footer ── */
    .site-footer {
      text-align: center;
      padding: 2.5rem 2rem;
      border-top: 1px solid var(--rule);
      font-family: var(--sans);
      font-size: 0.75rem;
      color: var(--muted);
      letter-spacing: 0.04em;
    }
    .site-footer .social-links {
      display: flex;
      justify-content: center;
      gap: 1.5rem;
      margin-bottom: 1rem;
    }
    .site-footer .social-links a {
      font-size: 0.72rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--muted);
      text-decoration: none;
      border-bottom: 1px solid transparent;
    }
    .site-footer .social-links a:hover {
      color: var(--ink);
      border-bottom-color: var(--gold);
    }

    /* ── Responsive ── */
    @media (max-width: 720px) {
      .site-nav { padding: 1rem 1.25rem; gap: 0.5rem 1rem; }
      .site-nav .brand { width: 100%; margin-right: 0; margin-bottom: 0.25rem; }
      main { padding: 2rem 1.25rem 3.5rem; }
      .hero h1 { font-size: 2.4rem; }
      .card-grid { grid-template-columns: 1fr; gap: 1rem; }
      .about-grid { grid-template-columns: 1fr; gap: 2.5rem; }
      .bio-sidebar { border-left: none; border-top: 1px solid var(--rule); padding-left: 0; padding-top: 1.5rem; }
    }
    @media (max-width: 480px) {
      html { font-size: 16px; }
      .hero { padding: 3rem 0.5rem 2.5rem; }
      .hero h1 { font-size: 2rem; }
    }
  </style>
</head>
<body>
  <nav class="site-nav">
    <a href="/" class="brand">Fiona Wu</a>
    <a href="/about">About</a>
    <a href="/repertoire">Repertoire</a>
    <a href="/listening-room">Listening Room</a>
    <a href="/journal">Journal</a>
    <a href="/teaching">Teaching</a>
    <a href="/events">Events</a>
    <a href="/press">Press</a>
    <a href="/contact">Contact</a>
  </nav>
  <main>${content}</main>
  <footer class="site-footer">
    <div class="social-links">
      <a href="https://www.instagram.com/fionawupianist/" target="_blank" rel="noopener">Instagram</a>
      <a href="https://www.facebook.com/fionawupianist/" target="_blank" rel="noopener">Facebook</a>
      <a href="https://www.youtube.com/@fionawupianist" target="_blank" rel="noopener">YouTube</a>
    </div>
    <p>© ${new Date().getFullYear()} Fiona Wu. All rights reserved.</p>
  </footer>
</body>
</html>`;
}

// ─── Pages ────────────────────────────────────────────────────────────────────

function renderHome(): string {
  return layout("Home", `
    <section class="hero">
      <h1>Fiona Wu</h1>
      <p class="subtitle">Pianist &middot; Teacher &middot; Artist</p>
    </section>

    <div class="press-quote">
      <blockquote>
        "…complete mastery of contrapuntal detail in the Partita No. 6 in E minor, BWV 830…
        intense immersion in the Toccata, Sarabande and Gigue…"
      </blockquote>
      <cite>— New York Concert Review</cite>
    </div>

    <div class="pull-quote">
      <em>"What would you play if you weren't afraid?"</em>
    </div>

    <div class="card-grid">
      <div class="card">
        <h3>Latest from the Journal</h3>
        <p>Reflections on music, practice, performance anxiety, and the inner life of a performer.</p>
        <a href="/journal" class="cta">Read the Journal</a>
      </div>
      <div class="card">
        <h3>Upcoming Events</h3>
        <p>Performances, masterclasses, and talks across North America and Europe.</p>
        <a href="/events" class="cta">View Events</a>
      </div>
      <div class="card">
        <h3>Repertoire</h3>
        <p>From Bach to Beethoven — explore the music Fiona has performed and recorded.</p>
        <a href="/repertoire" class="cta">Explore Repertoire</a>
      </div>
    </div>
  `);
}

function renderAbout(): string {
  return layout("About", `
    <h2>Biography</h2>

    <div class="about-grid">
      <div class="bio-text">
        <p>Canadian pianist Fiona Wu is a soloist, collaborator, and teacher whose artistry and
        philosophy is rooted in a simple belief: the most powerful performance comes from stripping
        away pretense and playing from the essence of who you are.</p>

        <p>Known for her highly sensitive and expressive playing, Fiona has been praised for her
        "complete mastery of contrapuntal detail" and "intense immersion" (New York Concert Review).
        A laureate of the Rosalyn Tureck International Bach Competition and winner of Le Prix
        Guy-Soucie and Le Prix Monik Grenier at the Concours Prix d'Europe, her performance of
        Beethoven's Fourth Piano Concerto also earned her third prize at the Concours de concerto
        de l'OUM.</p>

        <p>As a soloist, chamber musician, and collaborative artist, Fiona has performed across
        North America and Europe, and has played in masterclasses for Robert Levin, Benedetto Lupo,
        and Kevin Kenner, among others. Her work has been supported by the Conseil des arts et des
        lettres du Québec (CALQ) and the AIDA Fund (Jeunesses Musicales).</p>

        <p>She is equally passionate about the inner life of performers — drawing on her own journey
        of overcoming performance anxiety, she gives talks and masterclasses on cultivating
        authenticity and courage on stage, helping musicians find freedom in vulnerability.</p>

        <p>A Toronto native now rooted in Montreal, Fiona speaks English, French, Mandarin, and
        Russian — a linguistic range that reflects her belief that music, at its best, transcends
        borders. She holds a doctorate from the Université de Montréal, where she studied with
        Jimmy Brière, Jean Saulnier, and Henry Kramer, and currently serves on faculty at the
        Conservatoire de musique et d'art dramatique de Montréal.</p>

        <p>Fiona often asks her students: <em>What would you play if you weren't afraid?</em> It's
        a question she continues to ask herself — because she believes the paradox of great
        performance is that you must stop pretending in order to be truly heard.</p>
      </div>

      <aside class="bio-sidebar">
        <div class="fact-block">
          <h3>Languages</h3>
          <ul>
            <li>English</li>
            <li>French</li>
            <li>Mandarin</li>
            <li>Russian</li>
          </ul>
        </div>
        <div class="fact-block">
          <h3>Education</h3>
          <p>Doctorate, Université de Montréal</p>
          <p>Studies with Jimmy Brière, Jean Saulnier, and Henry Kramer</p>
        </div>
        <div class="fact-block">
          <h3>Faculty Position</h3>
          <p>Conservatoire de musique et d'art dramatique de Montréal</p>
        </div>
        <div class="fact-block">
          <h3>Competitions</h3>
          <ul>
            <li>Rosalyn Tureck International Bach Competition — Laureate</li>
            <li>Concours Prix d'Europe — Le Prix Guy-Soucie &amp; Le Prix Monik Grenier</li>
            <li>Concours de concerto de l'OUM — Third Prize</li>
          </ul>
        </div>
      </aside>
    </div>

    <div class="featured-quote">
      <p>"True performance isn't pretense — it's presence."</p>
    </div>
  `);
}

function renderRepertoire(): string {
  return layout("Repertoire", `
    <h1>Repertoire Library</h1>
    <p>Explore Fiona's recorded and performed repertoire.</p>
  `);
}

function renderListeningRoom(): string {
  return layout("Listening Room", `
    <h1>Listening Room</h1>
    <p>Videos and recordings.</p>
  `);
}

function renderJournal(): string {
  return layout("Journal", `
    <h1>Journal</h1>
    <p>Reflections on music, practice, and teaching.</p>
  `);
}

function renderJournalPost(slug: string): string {
  return layout("Journal Post", `
    <h1>Post: ${slug}</h1>
    <p>Article content loading from Kapable Data API.</p>
  `);
}

function renderTeaching(): string {
  return layout("Teaching", `
    <h1>Teaching</h1>
    <p>Fiona's approach to teaching and lessons.</p>
  `);
}

function renderEvents(): string {
  return layout("Events", `
    <h1>Events</h1>
    <p>Upcoming performances and concerts.</p>
  `);
}

function renderPress(): string {
  return layout("Press", `
    <h1>Press</h1>
    <p>Reviews, quotes, and media coverage.</p>
  `);
}

function renderContact(): string {
  return layout("Contact", `
    <h1>Contact</h1>
    <p>Get in touch for performances, teaching inquiries, or press.</p>
  `);
}

// ─── Server ───────────────────────────────────────────────────────────────────

Bun.serve({
  port: PORT,
  async fetch(req) {
    const url = new URL(req.url);
    const { pathname } = url;

    if (pathname === "/health") {
      return new Response(JSON.stringify({ status: "ok", service: "fiona" }), {
        headers: { "Content-Type": "application/json" },
      });
    }

    const html = (() => {
      if (pathname === "/") return renderHome();
      if (pathname === "/about") return renderAbout();
      if (pathname === "/repertoire") return renderRepertoire();
      if (pathname === "/listening-room") return renderListeningRoom();
      if (pathname === "/journal") return renderJournal();
      if (pathname.startsWith("/journal/")) {
        const slug = pathname.slice("/journal/".length);
        return renderJournalPost(slug);
      }
      if (pathname === "/teaching") return renderTeaching();
      if (pathname === "/events") return renderEvents();
      if (pathname === "/press") return renderPress();
      if (pathname === "/contact") return renderContact();
      return null;
    })();

    if (html === null) {
      return new Response(
        layout("404 Not Found", "<h1>Page Not Found</h1><p><a href='/'>Return home</a></p>"),
        { status: 404, headers: { "Content-Type": "text/html; charset=utf-8" } }
      );
    }

    return new Response(html, {
      headers: { "Content-Type": "text/html; charset=utf-8" },
    });
  },
});

console.log(`Fiona Wu site running on http://localhost:${PORT}`);
