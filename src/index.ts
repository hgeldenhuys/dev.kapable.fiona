const PORT = parseInt(process.env.PORT || "3027", 10);

// ─── Layout ───────────────────────────────────────────────────────────────────

function layout(title: string, content: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title} — Fiona Wu, Pianist</title>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: Georgia, 'Times New Roman', serif; color: #1a1a1a; background: #fafaf8; }
    nav { display: flex; gap: 1.5rem; padding: 1.5rem 2rem; border-bottom: 1px solid #e0ddd8; flex-wrap: wrap; align-items: center; }
    nav a { text-decoration: none; color: #555; font-size: 0.85rem; letter-spacing: 0.08em; text-transform: uppercase; }
    nav a:hover { color: #1a1a1a; }
    nav .brand { font-size: 1.1rem; font-style: italic; text-transform: none; letter-spacing: 0; color: #1a1a1a; margin-right: auto; }
    main { max-width: 900px; margin: 0 auto; padding: 3rem 2rem; }
    h1 { font-size: 2rem; font-weight: normal; margin-bottom: 1rem; }
    footer { text-align: center; padding: 2rem; font-size: 0.8rem; color: #999; border-top: 1px solid #e0ddd8; margin-top: 4rem; }
  </style>
</head>
<body>
  <nav>
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
  <footer>© ${new Date().getFullYear()} Fiona Wu. All rights reserved.</footer>
</body>
</html>`;
}

// ─── Page stubs ───────────────────────────────────────────────────────────────

function renderHome(): string {
  return layout("Home", `
    <h1>Fiona Wu</h1>
    <p style="font-size:1.2rem; color:#555; margin-top:0.5rem;">Pianist · Teacher · Artist</p>
    <p style="margin-top:2rem; max-width:600px; line-height:1.8;">
      Coming soon — an intimate space for music, reflection, and discovery.
    </p>
  `);
}

function renderAbout(): string {
  return layout("About", `
    <h1>About</h1>
    <p>Fiona Wu's story and biography.</p>
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
