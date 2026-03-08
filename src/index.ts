const PORT = parseInt(process.env.PORT || "3027", 10);

// ─── Repertoire Data ──────────────────────────────────────────────────────────

interface Piece {
  composer: string;
  composerKey: string;
  title: string;
  period: string;
  moods: string[];
  notes: string;
  hasVideo?: boolean;
}

const REPERTOIRE: Piece[] = [
  {
    composer: "J.S. Bach",
    composerKey: "bach",
    title: "Partita No. 6 in E minor, BWV 830",
    period: "baroque",
    moods: ["contemplative", "virtuosic"],
    notes: "The final and most monumental of Bach's six keyboard partitas. Its seven movements trace an arc from the introspective Toccata through the brilliant Corrente and Sarabande to the exuberant concluding Gigue.",
  },
  {
    composer: "Beethoven",
    composerKey: "beethoven",
    title: "Piano Concerto No. 4 in G major, Op. 58",
    period: "classical",
    moods: ["lyrical", "dramatic"],
    notes: "Beethoven's most poetic concerto opens with a daring innovation: the piano speaks first, alone, in a gentle G major chord. The dialogue between soloist and orchestra that follows is among the most intimate in the concerto repertoire.",
  },
  {
    composer: "Bach–Busoni",
    composerKey: "bach",
    title: "Chaconne in D minor, BWV 1004",
    period: "baroque",
    moods: ["virtuosic", "contemplative"],
    notes: "Busoni's transcription of Bach's monumental violin Chaconne transforms a single melodic line into a full pianistic universe. The work's 32 variations build an architecture of extraordinary emotional and technical breadth.",
  },
  {
    composer: "Beethoven",
    composerKey: "beethoven",
    title: "Piano Sonata No. 23 \u2018Appassionata\u2019, Op. 57",
    period: "classical",
    moods: ["dramatic", "virtuosic"],
    notes: "The Appassionata stands as one of Beethoven's most turbulent and emotionally extreme works. Its three movements move from stormy darkness through a serene set of variations to a whirlwind finale.",
  },
  {
    composer: "J.S. Bach",
    composerKey: "bach",
    title: "The Art of Fugue, BWV 1080",
    period: "baroque",
    moods: ["contemplative"],
    notes: "Bach's ultimate exploration of contrapuntal possibility. Each fugue and canon is built on a single theme, yet the variety of expression Bach achieves is limitless — from the simplest two-voice texture to the most complex four-voice inversions.",
  },
  {
    composer: "Julie Th\u00e9riault",
    composerKey: "theriault",
    title: "DENSE",
    period: "contemporary",
    moods: ["experimental"],
    notes: "A collaborative work created with Paul \u00c7elebi, exploring the boundaries between acoustic and electronic sound worlds. Recorded at Orford Music.",
  },
  {
    composer: "Schubert",
    composerKey: "schubert",
    title: "Impromptu in G-flat major, D. 899 No. 3",
    period: "romantic",
    moods: ["lyrical"],
    notes: "One of Schubert's most beloved piano works, built on a simple, singing melody that unfolds with an almost vocal quality. The flowing arpeggios create a texture of extraordinary warmth.",
  },
  {
    composer: "Liszt",
    composerKey: "liszt",
    title: "Transcendental \u00c9tude",
    period: "romantic",
    moods: ["virtuosic"],
    notes: "Liszt's études are among the most technically demanding works in the piano repertoire, yet they are far more than mere displays of virtuosity — each tells a distinct musical story.",
  },
  {
    composer: "Couperin",
    composerKey: "couperin",
    title: "Selected Ordres",
    period: "baroque",
    moods: ["contemplative"],
    notes: "Couperin's ordres (suites) are jewel-like collections of character pieces, each with evocative titles that hint at scenes, characters, or emotions from French court life.",
  },
];

// ─── Media / Video Data ───────────────────────────────────────────────────────
// NOTE: YouTube embed IDs are placeholders — replace with real video IDs once available.
// Format: https://www.youtube.com/embed/<VIDEO_ID>

interface Video {
  title: string;
  description: string;
  date?: string;
  category: "live" | "studio" | "competition" | "street";
  youtubeId: string | null; // null = placeholder display
}

const VIDEOS: Video[] = [
  // ── Live Performances ──────────────────────────────────────────────────────
  {
    title: "Piano Concerto No. 4 in G major, Op. 58 — Beethoven",
    description: "Live performance at Salle Claude Champagne, January 20, 2024",
    date: "January 20, 2024",
    category: "live",
    youtubeId: null, // TODO: replace with real YouTube ID
  },
  {
    title: "Art of Fugue: A Lecture-Recital",
    description: "Live performance in Ottawa for the Doors Open for Music at Southminster series (2024)",
    date: "2024",
    category: "live",
    youtubeId: null, // TODO: replace with real YouTube ID
  },
  {
    title: "First Round at the International Livorno Competition",
    description: "Sponsored by the Conseil des Arts et Lettres de Québec (CALQ)",
    category: "competition",
    youtubeId: null, // TODO: replace with real YouTube ID
  },
  // ── Studio Recordings ─────────────────────────────────────────────────────
  {
    title: "Bach–Busoni Chaconne in D minor, BWV 1004",
    description: "Recorded at Orford Music",
    category: "studio",
    youtubeId: null, // TODO: replace with real YouTube ID
  },
  {
    title: "DENSE by Julie Thériault",
    description: "Recorded at Orford Music, in collaboration with Paul Çelebi",
    category: "studio",
    youtubeId: null, // TODO: replace with real YouTube ID
  },
  // ── Street / Informal ─────────────────────────────────────────────────────
  {
    title: "Street Performance — Beethoven's Appassionata Sonata",
    description: "Beethoven's Appassionata Sonata on the streets of Montreal",
    category: "street",
    youtubeId: null, // TODO: replace with real YouTube ID
  },
];

// ─── Journal / Blog Data ──────────────────────────────────────────────────────

interface Post {
  title: string;
  slug: string;
  category: "pedagogy" | "performance_psychology" | "concert_reflections";
  date: string; // ISO date string
  excerpt: string;
  content: string; // markdown
}

const CATEGORY_LABELS: Record<Post["category"], string> = {
  pedagogy: "Pedagogy",
  performance_psychology: "Performance Psychology",
  concert_reflections: "Concert Reflections",
};

const POSTS: Post[] = [
  {
    title: "First Steps at the Piano: A Beginner's Guide to Finding Your Sound",
    slug: "first-steps-at-the-piano",
    category: "pedagogy",
    date: "2026-02-15",
    excerpt:
      "Every pianist's journey begins with a single note. Here's how to make that first note truly yours.",
    content: `Every pianist's journey begins with a single note. But what makes that note *yours*?

In my years of teaching at the Conservatoire de Montréal, I've noticed that beginners often focus exclusively on getting the "right" notes. They count beats, follow fingerings, and measure their progress by how many pieces they can play. These are important skills, but they miss something essential.

## Listen Before You Play

Before you touch the keys, listen. Not to a recording — to the silence in the room. Feel the weight of your hands. Notice your breath. This isn't meditation homework — it's the foundation of musical awareness.

When you finally press a key, listen to the full life of that sound. The attack, the sustain, the decay. A single C can sound warm or cold, singing or percussive, depending on how you approach it.

## The Myth of "Natural Talent"

I often hear adults say they're "too old" to start piano, or that they don't have "the gift." This is a myth that serves no one. Music is a language, and like any language, it can be learned at any age.

What matters isn't talent — it's curiosity. Are you willing to sit with a phrase until it speaks to you? Are you willing to play badly, openly, without pretense? That willingness is worth more than any natural facility.

## Three Practices for Your First Month

**1. The One-Note Exercise:** Play a single note 20 different ways. Vary the speed, the weight, the angle. Listen to each one. Which sounds most like you?

**2. Sing, Then Play:** Before learning a new phrase, sing it first (even badly). Your voice knows musical shape intuitively. Let your fingers follow your voice, not the other way around.

**3. The Question Game:** After playing a passage, ask yourself: What did I just say? If you can't answer, you were reading notes, not making music. Go back and find the meaning.

## Presence, Not Perfection

The paradox of learning piano is that the harder you try to be perfect, the further you get from music. Music lives in the space between control and surrender.

As I tell my students: What would you play if you weren't afraid?

Start there.`,
  },
  {
    title: "On Performance Anxiety: Finding Freedom in Vulnerability",
    slug: "on-performance-anxiety",
    category: "performance_psychology",
    date: "2026-01-20",
    excerpt:
      "The stage can feel like a place of judgment. But what if it could be a place of connection instead?",
    content: `For years, I carried performance anxiety like a secret. Every time I walked on stage, I felt the weight of expectation — from the audience, from my teachers, from myself. The fear wasn't of wrong notes. It was of being truly heard.

## The Mask We Wear

Many performers develop a kind of armor. We hide behind technical perfection, behind interpretive conventions, behind the comfort of doing things "correctly." But the audience doesn't come to hear correctness. They come to hear something real.

The turning point for me came during a masterclass with a teacher who simply said: "Stop trying to impress me. Tell me something."

## Vulnerability as Strength

What I've learned, through years of performing and teaching, is that the moments of greatest vulnerability are also the moments of greatest art. When you stop trying to prove yourself and start trying to communicate, something shifts.

The audience feels it. You feel it. The music comes alive in a way that technical perfection alone can never achieve.

## A Practice for the Stage

Before your next performance, try this: instead of running through your piece one more time, sit quietly and ask yourself — why does this music matter to me? What do I want to share?

Then walk on stage with that intention. Not to be perfect. Not to impress. Just to share something true.

The paradox is real: you must stop pretending in order to be truly heard.`,
  },
  {
    title: "Bach and the Architecture of Emotion",
    slug: "bach-architecture-of-emotion",
    category: "concert_reflections",
    date: "2025-12-10",
    excerpt:
      "How Bach's counterpoint creates an emotional architecture that speaks across centuries.",
    content: `Bach does not tell you how to feel. He builds you a room and invites you to inhabit it.

## Counterpoint as Conversation

When I play the Art of Fugue, I think of it as four voices in dialogue — each with its own character, its own insistence. The bass line is patient, immovable. The soprano is questioning, restless. The inner voices mediate, translate, console. Together they create something no single voice could achieve alone.

## Emotion Without Sentimentality

What moves me about Bach is that his music is deeply emotional without being sentimental. There's no wallowing, no self-indulgence. The emotion lives in the *structure* — in the way a fugue subject transforms, inverts, combines with itself. It is architecture that breathes.

Playing Bach is a constant negotiation between control and feeling. The moment you impose too much feeling, the structure collapses. The moment you retreat into pure technique, the music goes cold. The art is finding the threshold — where precision and presence become the same thing.`,
  },
];

// ─── Markdown Renderer ────────────────────────────────────────────────────────

function renderMarkdown(md: string): string {
  // Split into blocks on blank lines
  const blocks = md.split(/\n{2,}/);
  let html = "";
  for (const block of blocks) {
    const trimmed = block.trim();
    if (!trimmed) continue;

    // Heading (## only)
    if (trimmed.startsWith("## ")) {
      const text = inlineMarkdown(trimmed.slice(3));
      html += `<h2>${text}</h2>\n`;
    } else {
      const text = inlineMarkdown(trimmed.replace(/\n/g, " "));
      html += `<p>${text}</p>\n`;
    }
  }
  return html;
}

function inlineMarkdown(text: string): string {
  // **bold**
  text = text.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  // *italic*
  text = text.replace(/\*(.+?)\*/g, "<em>$1</em>");
  return text;
}

// ─── Layout ───────────────────────────────────────────────────────────────────

function layout(title: string, content: string, opts: { wide?: boolean; description?: string; path?: string } = {}): string {
  const maxWidth = opts.wide ? "1100px" : "860px";
  const desc = opts.description ?? "Canadian pianist Fiona Wu — soloist, teacher, and artist based in Montreal. Repertoire, recordings, events, and journal.";
  const canonical = `https://fionawu.ca${opts.path ?? ""}`;
  const pageTitle = title === "Home" ? "Fiona Wu, Pianist" : `${title} — Fiona Wu, Pianist`;
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${pageTitle}</title>
  <meta name="description" content="${desc}" />
  <meta property="og:title" content="${pageTitle}" />
  <meta property="og:description" content="${desc}" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="${canonical}" />
  <link rel="canonical" href="${canonical}" />
  <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90' font-family='Georgia,serif' fill='%23b8a88a'>♩</text></svg>" />
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
    .site-nav a.nav-active {
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
      .contact-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
      .contact-grid aside { border-left: none !important; border-top: 1px solid var(--rule); padding-left: 0 !important; padding-top: 1.5rem; }
    }
    @media (max-width: 480px) {
      html { font-size: 16px; }
      .hero { padding: 3rem 0.5rem 2.5rem; }
      .hero h1 { font-size: 2rem; }
    }

    /* ── Print ── */
    @media print {
      .site-nav, .site-footer { display: none; }
      body { color: #000; background: #fff; font-size: 12pt; }
      a::after { content: " (" attr(href) ")"; font-size: 0.75em; color: #555; }
      .site-nav a::after, .card a.cta::after { content: ""; }
      main { max-width: 100%; padding: 0; }
    }

    /* ── Repertoire page ── */
    .page-header { margin-bottom: 2.5rem; }
    .page-header h1 { font-size: 2.2rem; margin-bottom: 0.4rem; }
    .page-subtitle {
      font-family: var(--sans);
      font-size: 0.8rem;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: var(--muted);
    }
    .filter-bar {
      border-top: 1px solid var(--rule);
      border-bottom: 1px solid var(--rule);
      padding: 1.1rem 0;
      margin-bottom: 2.25rem;
      display: flex;
      flex-wrap: wrap;
      gap: 0.9rem 2.5rem;
    }
    .filter-group { display: flex; align-items: center; gap: 0.3rem; flex-wrap: wrap; }
    .filter-group-label {
      font-family: var(--sans);
      font-size: 0.65rem;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      color: var(--muted);
      margin-right: 0.2rem;
    }
    .filter-btn {
      font-family: var(--sans);
      font-size: 0.7rem;
      letter-spacing: 0.06em;
      color: var(--muted);
      background: none;
      border: none;
      cursor: pointer;
      padding: 0.2rem 0.55rem;
      border-radius: 2px;
      transition: color 0.15s, background 0.15s;
    }
    .filter-btn:hover { color: var(--ink); }
    .filter-btn.active { color: var(--ink); background: #ece9e3; font-weight: 600; }
    .piece-count {
      font-family: var(--sans);
      font-size: 0.72rem;
      color: var(--muted);
      letter-spacing: 0.06em;
      margin-bottom: 1.5rem;
    }
    .piece-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 1.5rem;
    }
    .piece-card {
      padding: 1.6rem 1.6rem 1.4rem;
      border: 1px solid var(--rule);
      border-radius: 4px;
      background: #fff;
    }
    .piece-composer {
      font-family: var(--sans);
      font-size: 0.65rem;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      color: var(--muted);
      margin-bottom: 0.35rem;
    }
    .piece-title {
      font-family: var(--serif);
      font-size: 1.1rem;
      font-weight: normal;
      line-height: 1.35;
      color: var(--ink);
      margin-bottom: 0.85rem;
    }
    .piece-tags { display: flex; flex-wrap: wrap; gap: 0.35rem; margin-bottom: 1rem; }
    .piece-tag {
      font-family: var(--sans);
      font-size: 0.62rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      padding: 0.18rem 0.5rem;
      border-radius: 20px;
      border: 1px solid var(--rule);
      color: var(--muted);
    }
    .piece-tag.period { background: #f5f3ef; }
    .piece-tag.mood { color: var(--gold-dark); border-color: var(--gold); }
    .piece-notes {
      font-size: 0.9rem;
      color: #4a4740;
      line-height: 1.72;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      margin-bottom: 0.6rem;
    }
    .piece-notes.expanded {
      display: block;
      -webkit-line-clamp: unset;
    }
    .notes-toggle {
      font-family: var(--sans);
      font-size: 0.65rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--gold-dark);
      background: none;
      border: none;
      cursor: pointer;
      padding: 0;
      margin-bottom: 0.6rem;
      display: block;
    }
    .notes-toggle:hover { text-decoration: underline; }
    .piece-listen {
      font-family: var(--sans);
      font-size: 0.65rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--gold-dark);
      text-decoration: none;
      border-bottom: 1px solid var(--gold);
      padding-bottom: 1px;
    }
    .piece-listen:hover { color: var(--ink); border-color: var(--ink); }
    @media (max-width: 720px) {
      .filter-bar { gap: 0.75rem 1.5rem; }
      .piece-grid { grid-template-columns: 1fr; }
    }
  </style>
</head>
<body>
  <nav class="site-nav">
    <a href="/" class="brand">Fiona Wu</a>
    <a href="/about"${opts.path === "/about" ? ' class="nav-active"' : ""}>About</a>
    <a href="/repertoire"${opts.path === "/repertoire" ? ' class="nav-active"' : ""}>Repertoire</a>
    <a href="/listening-room"${opts.path === "/listening-room" ? ' class="nav-active"' : ""}>Listening Room</a>
    <a href="/journal"${opts.path?.startsWith("/journal") ? ' class="nav-active"' : ""}>Journal</a>
    <a href="/teaching"${opts.path === "/teaching" ? ' class="nav-active"' : ""}>Teaching</a>
    <a href="/events"${opts.path === "/events" ? ' class="nav-active"' : ""}>Events</a>
    <a href="/press"${opts.path === "/press" ? ' class="nav-active"' : ""}>Press</a>
    <a href="/contact"${opts.path === "/contact" ? ' class="nav-active"' : ""}>Contact</a>
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
  const latestPost = [...POSTS].sort((a, b) => b.date.localeCompare(a.date))[0];
  const today = new Date().toISOString().slice(0, 10);
  const nextEvent = EVENTS.filter(e => e.date >= today).sort((a, b) => a.date.localeCompare(b.date))[0];

  const journalCardBody = latestPost
    ? `<p>${latestPost.excerpt}</p><a href="/journal/${latestPost.slug}" class="cta">Read: ${latestPost.title}</a>`
    : `<p>Reflections on music, practice, performance anxiety, and the inner life of a performer.</p><a href="/journal" class="cta">Read the Journal</a>`;

  const eventsCardBody = nextEvent
    ? `<p>${nextEvent.title} — ${formatEventDate(nextEvent.date)}, ${nextEvent.venue}</p><a href="/events" class="cta">View Events</a>`
    : `<p>Performances, masterclasses, and talks across North America and Europe.</p><a href="/events" class="cta">View Events</a>`;

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
        ${journalCardBody}
      </div>
      <div class="card">
        <h3>Upcoming Events</h3>
        ${eventsCardBody}
      </div>
      <div class="card">
        <h3>Repertoire</h3>
        <p>From Bach to Beethoven — explore the music Fiona has performed and recorded.</p>
        <a href="/repertoire" class="cta">Explore Repertoire</a>
      </div>
    </div>
  `, { path: "/" });
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

        <p style="margin-top: 2rem; font-family: var(--sans); font-size: 0.82rem; letter-spacing: 0.04em; color: var(--muted);">
          Read Fiona's reflections on performance and pedagogy in her
          <a href="/journal">Journal</a>, or learn about her
          <a href="/teaching">Teaching approach</a>.
        </p>
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
  `, { path: "/about", description: "Biography, education, and artistic philosophy of Canadian pianist Fiona Wu — soloist, teacher, and laureate of international competitions." });
}

function renderRepertoire(): string {
  let cards = "";
  for (const piece of REPERTOIRE) {
    let moodTags = "";
    for (const m of piece.moods) {
      moodTags += `<span class="piece-tag mood">${m[0].toUpperCase() + m.slice(1)}</span>`;
    }
    const periodLabel = piece.period[0].toUpperCase() + piece.period.slice(1);
    const listenLink = piece.hasVideo
      ? `<a href="/listening-room" class="piece-listen">Listen &rarr;</a>`
      : "";

    cards += `
    <article class="piece-card"
      data-period="${piece.period}"
      data-moods="${piece.moods.join(",")}"
      data-composer="${piece.composerKey}"
    >
      <p class="piece-composer">${piece.composer}</p>
      <p class="piece-title">${piece.title}</p>
      <div class="piece-tags">
        <span class="piece-tag period">${periodLabel}</span>
        ${moodTags}
      </div>
      <p class="piece-notes">${piece.notes}</p>
      <button class="notes-toggle">Read more</button>
      ${listenLink}
    </article>`;
  }

  return layout("Repertoire", `
    <div class="page-header">
      <h1>Repertoire Library</h1>
      <p class="page-subtitle">A living catalog of the music I perform and teach</p>
    </div>

    <div class="filter-bar">
      <div class="filter-group">
        <span class="filter-group-label">Period</span>
        <button class="filter-btn active" data-filter-group="period" onclick="setFilter('period','all',this)">All</button>
        <button class="filter-btn" data-filter-group="period" onclick="setFilter('period','baroque',this)">Baroque</button>
        <button class="filter-btn" data-filter-group="period" onclick="setFilter('period','classical',this)">Classical</button>
        <button class="filter-btn" data-filter-group="period" onclick="setFilter('period','romantic',this)">Romantic</button>
        <button class="filter-btn" data-filter-group="period" onclick="setFilter('period','contemporary',this)">Contemporary</button>
      </div>
      <div class="filter-group">
        <span class="filter-group-label">Mood</span>
        <button class="filter-btn active" data-filter-group="mood" onclick="setFilter('mood','all',this)">All</button>
        <button class="filter-btn" data-filter-group="mood" onclick="setFilter('mood','contemplative',this)">Contemplative</button>
        <button class="filter-btn" data-filter-group="mood" onclick="setFilter('mood','virtuosic',this)">Virtuosic</button>
        <button class="filter-btn" data-filter-group="mood" onclick="setFilter('mood','lyrical',this)">Lyrical</button>
        <button class="filter-btn" data-filter-group="mood" onclick="setFilter('mood','dramatic',this)">Dramatic</button>
        <button class="filter-btn" data-filter-group="mood" onclick="setFilter('mood','experimental',this)">Experimental</button>
      </div>
      <div class="filter-group">
        <span class="filter-group-label">Composer</span>
        <button class="filter-btn active" data-filter-group="composer" onclick="setFilter('composer','all',this)">All</button>
        <button class="filter-btn" data-filter-group="composer" onclick="setFilter('composer','bach',this)">Bach</button>
        <button class="filter-btn" data-filter-group="composer" onclick="setFilter('composer','beethoven',this)">Beethoven</button>
        <button class="filter-btn" data-filter-group="composer" onclick="setFilter('composer','schubert',this)">Schubert</button>
        <button class="filter-btn" data-filter-group="composer" onclick="setFilter('composer','liszt',this)">Liszt</button>
        <button class="filter-btn" data-filter-group="composer" onclick="setFilter('composer','couperin',this)">Couperin</button>
        <button class="filter-btn" data-filter-group="composer" onclick="setFilter('composer','theriault',this)">Th&eacute;riault</button>
      </div>
    </div>

    <p class="piece-count">${REPERTOIRE.length} pieces</p>

    <div class="piece-grid">
      ${cards}
    </div>

    <script>
      var filterState = { period: "all", mood: "all", composer: "all" };

      function applyFilters() {
        var cards = document.querySelectorAll('.piece-card');
        var visible = 0;
        for (var i = 0; i < cards.length; i++) {
          var card = cards[i];
          var period = card.dataset.period;
          var moods = card.dataset.moods.split(',');
          var composer = card.dataset.composer;
          var show = (filterState.period === 'all' || period === filterState.period) &&
                     (filterState.mood === 'all' || moods.indexOf(filterState.mood) !== -1) &&
                     (filterState.composer === 'all' || composer === filterState.composer);
          card.style.display = show ? '' : 'none';
          if (show) visible++;
        }
        var countEl = document.querySelector('.piece-count');
        if (countEl) countEl.textContent = visible + ' piece' + (visible !== 1 ? 's' : '');
      }

      function setFilter(group, value, btn) {
        filterState[group] = value;
        var btns = document.querySelectorAll('[data-filter-group="' + group + '"]');
        for (var i = 0; i < btns.length; i++) {
          btns[i].classList.toggle('active', btns[i] === btn);
        }
        applyFilters();
      }

      document.addEventListener('click', function(e) {
        if (e.target.classList.contains('notes-toggle')) {
          var btn = e.target;
          var notes = btn.previousElementSibling;
          var expanded = notes.classList.toggle('expanded');
          btn.textContent = expanded ? 'Show less' : 'Read more';
        }
      });
    </script>
  `, { wide: true, path: "/repertoire", description: "Fiona Wu's repertoire: Bach, Beethoven, Schubert, Liszt, and contemporary works. A living catalog of music performed and taught." });
}

function renderListeningRoom(): string {
  const categoryLabels: Record<Video["category"], string> = {
    live: "Live Performance",
    studio: "Studio Recording",
    competition: "Competition",
    street: "Street Performance",
  };

  let videoCards = "";
  for (const video of VIDEOS) {
    const label = categoryLabels[video.category];
    const dateHtml = video.date ? `<p class="video-date">${video.date}</p>` : "";

    const embedHtml = video.youtubeId
      ? `<iframe
          class="video-iframe"
          src="https://www.youtube.com/embed/${video.youtubeId}"
          title="${video.title}"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>`
      : `<div class="video-placeholder-inner">
          <span class="play-icon">&#9654;</span>
          <p class="placeholder-label">${video.title}</p>
        </div>`;

    videoCards += `
    <article class="video-card" data-category="${video.category}">
      <div class="video-embed-box">
        ${embedHtml}
      </div>
      <div class="video-meta">
        <span class="video-cat-tag">${label}</span>
        <h2 class="video-title">${video.title}</h2>
        <p class="video-desc">${video.description}</p>
        ${dateHtml}
      </div>
    </article>`;
  }

  const css = `
    /* ── Listening Room ── */
    .lr-filter-bar {
      border-top: 1px solid var(--rule);
      border-bottom: 1px solid var(--rule);
      padding: 1.1rem 0;
      margin-bottom: 2.25rem;
      display: flex;
      flex-wrap: wrap;
      gap: 0.4rem 0.2rem;
    }
    .video-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 2.25rem;
    }
    .video-card {
      border: 1px solid var(--rule);
      border-radius: 4px;
      background: #fff;
      overflow: hidden;
    }
    .video-embed-box {
      position: relative;
      width: 100%;
      padding-top: 56.25%; /* 16:9 */
      background: #1a1a1a;
    }
    .video-iframe,
    .video-placeholder-inner {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      border: none;
    }
    .video-placeholder-inner {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 0.75rem;
      background: #1e1c18;
      color: var(--gold);
      padding: 1.5rem;
      text-align: center;
    }
    .play-icon {
      font-size: 2.8rem;
      line-height: 1;
      opacity: 0.7;
    }
    .placeholder-label {
      font-family: var(--serif);
      font-size: 0.85rem;
      font-style: italic;
      color: #a09880;
      line-height: 1.45;
      margin: 0;
    }
    .video-meta {
      padding: 1.25rem 1.4rem 1.4rem;
    }
    .video-cat-tag {
      display: inline-block;
      font-family: var(--sans);
      font-size: 0.6rem;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: var(--gold-dark);
      border: 1px solid var(--gold);
      border-radius: 20px;
      padding: 0.15rem 0.55rem;
      margin-bottom: 0.65rem;
    }
    .video-title {
      font-family: var(--serif);
      font-size: 1.05rem;
      font-weight: normal;
      line-height: 1.35;
      color: var(--ink);
      margin-bottom: 0.55rem;
    }
    .video-desc {
      font-size: 0.88rem;
      color: var(--muted);
      line-height: 1.65;
      margin-bottom: 0.4rem;
    }
    .video-date {
      font-family: var(--sans);
      font-size: 0.7rem;
      color: #b0a898;
      letter-spacing: 0.06em;
      margin: 0;
    }
    .video-count {
      font-family: var(--sans);
      font-size: 0.72rem;
      color: var(--muted);
      letter-spacing: 0.06em;
      margin-bottom: 1.5rem;
    }
    @media (max-width: 720px) {
      .video-grid { grid-template-columns: 1fr; }
    }
  `;

  return layout("Listening Room", `
    <style>${css}</style>

    <div class="page-header">
      <h1>Listening Room</h1>
      <p class="page-subtitle">Recordings, performances, and musical moments</p>
    </div>

    <div class="lr-filter-bar">
      <button class="filter-btn active" data-lr-cat="all" onclick="lrFilter('all',this)">All</button>
      <button class="filter-btn" data-lr-cat="live" onclick="lrFilter('live',this)">Live Performances</button>
      <button class="filter-btn" data-lr-cat="studio" onclick="lrFilter('studio',this)">Studio Recordings</button>
      <button class="filter-btn" data-lr-cat="competition" onclick="lrFilter('competition',this)">Competition</button>
      <button class="filter-btn" data-lr-cat="street" onclick="lrFilter('street',this)">Street Performance</button>
    </div>

    <p class="video-count">${VIDEOS.length} videos</p>

    <div class="video-grid">
      ${videoCards}
    </div>

    <script>
      function lrFilter(cat, btn) {
        var cards = document.querySelectorAll('.video-card');
        var visible = 0;
        for (var i = 0; i < cards.length; i++) {
          var show = cat === 'all' || cards[i].dataset.category === cat;
          cards[i].style.display = show ? '' : 'none';
          if (show) visible++;
        }
        var btns = document.querySelectorAll('[data-lr-cat]');
        for (var j = 0; j < btns.length; j++) {
          btns[j].classList.toggle('active', btns[j] === btn);
        }
        var countEl = document.querySelector('.video-count');
        if (countEl) countEl.textContent = visible + ' video' + (visible !== 1 ? 's' : '');
      }
    </script>
  `, { wide: true, path: "/listening-room", description: "Watch Fiona Wu in live performances, studio recordings, and competition appearances. Piano performances on video." });
}

function renderJournal(activeCategory: string = "all"): string {
  const sorted = [...POSTS].sort((a, b) => b.date.localeCompare(a.date));

  let postCards = "";
  for (const post of sorted) {
    const visible = activeCategory === "all" || post.category === activeCategory;
    const displayDate = new Date(post.date).toLocaleDateString("en-CA", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    postCards += `
    <article class="journal-card" data-category="${post.category}" style="${visible ? "" : "display:none"}">
      <div class="journal-meta-row">
        <time class="journal-date">${displayDate}</time>
        <span class="journal-cat-tag">${CATEGORY_LABELS[post.category]}</span>
      </div>
      <h2 class="journal-title"><a href="/journal/${post.slug}">${post.title}</a></h2>
      <p class="journal-excerpt">${post.excerpt}</p>
      <a href="/journal/${post.slug}" class="journal-read-more">Read &rarr;</a>
    </article>`;
  }

  const css = `
    /* ── Journal list ── */
    .journal-subtitle {
      font-family: var(--sans);
      font-size: 0.8rem;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: var(--muted);
      margin-top: 0.4rem;
      margin-bottom: 2.5rem;
    }
    .journal-filter-bar {
      border-top: 1px solid var(--rule);
      border-bottom: 1px solid var(--rule);
      padding: 1.1rem 0;
      margin-bottom: 2.5rem;
      display: flex;
      flex-wrap: wrap;
      gap: 0.4rem 0.2rem;
    }
    .journal-list { display: flex; flex-direction: column; gap: 2.5rem; }
    .journal-card {
      border-bottom: 1px solid var(--rule);
      padding-bottom: 2.5rem;
    }
    .journal-card:last-child { border-bottom: none; }
    .journal-meta-row {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      margin-bottom: 0.6rem;
    }
    .journal-date {
      font-family: var(--sans);
      font-size: 0.72rem;
      letter-spacing: 0.06em;
      color: var(--muted);
    }
    .journal-cat-tag {
      font-family: var(--sans);
      font-size: 0.6rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--gold-dark);
      border: 1px solid var(--gold);
      border-radius: 20px;
      padding: 0.15rem 0.55rem;
    }
    .journal-title {
      font-family: var(--serif);
      font-size: 1.5rem;
      font-weight: normal;
      line-height: 1.3;
      margin-bottom: 0.65rem;
    }
    .journal-title a { color: var(--ink); text-decoration: none; }
    .journal-title a:hover { color: var(--gold-dark); }
    .journal-excerpt {
      font-size: 1rem;
      color: #4a4740;
      line-height: 1.75;
      margin-bottom: 0.85rem;
    }
    .journal-read-more {
      font-family: var(--sans);
      font-size: 0.7rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--gold-dark);
      text-decoration: none;
      border-bottom: 1px solid var(--gold);
      padding-bottom: 1px;
    }
    .journal-read-more:hover { color: var(--ink); border-color: var(--ink); }
  `;

  return layout("Journal", `
    <style>${css}</style>
    <div class="page-header">
      <h1>Journal</h1>
      <p class="journal-subtitle">Reflections on music, practice, and the inner life of performers</p>
    </div>

    <div class="journal-filter-bar">
      <button class="filter-btn ${activeCategory === "all" ? "active" : ""}" onclick="jFilter('all',this)">All</button>
      <button class="filter-btn ${activeCategory === "pedagogy" ? "active" : ""}" onclick="jFilter('pedagogy',this)">Pedagogy</button>
      <button class="filter-btn ${activeCategory === "performance_psychology" ? "active" : ""}" onclick="jFilter('performance_psychology',this)">Performance Psychology</button>
      <button class="filter-btn ${activeCategory === "concert_reflections" ? "active" : ""}" onclick="jFilter('concert_reflections',this)">Concert Reflections</button>
    </div>

    <div class="journal-list">
      ${postCards}
    </div>

    <script>
      function jFilter(cat, btn) {
        var cards = document.querySelectorAll('.journal-card');
        for (var i = 0; i < cards.length; i++) {
          var show = cat === 'all' || cards[i].dataset.category === cat;
          cards[i].style.display = show ? '' : 'none';
        }
        var btns = document.querySelectorAll('.journal-filter-bar .filter-btn');
        for (var j = 0; j < btns.length; j++) {
          btns[j].classList.toggle('active', btns[j] === btn);
        }
      }
    </script>
  `, { path: "/journal", description: "Fiona Wu's journal — reflections on music, pedagogy, performance psychology, and the inner life of a pianist." });
}

function renderJournalPost(slug: string): string | null {
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) return null;

  const displayDate = new Date(post.date).toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const pullQuotes: Record<Post["category"], string> = {
    pedagogy:
      "What would you play if you weren't afraid? Start there.",
    performance_psychology:
      "You must stop pretending in order to be truly heard.",
    concert_reflections:
      "The art is finding the threshold — where precision and presence become the same thing.",
  };

  const css = `
    /* ── Journal post ── */
    .post-back {
      display: inline-block;
      font-family: var(--sans);
      font-size: 0.72rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--muted);
      text-decoration: none;
      margin-bottom: 2.5rem;
      border-bottom: 1px solid transparent;
    }
    .post-back:hover { color: var(--ink); border-bottom-color: var(--gold); }
    .post-header { margin-bottom: 2.5rem; }
    .post-header h1 {
      font-size: 2.4rem;
      font-weight: normal;
      line-height: 1.2;
      margin-bottom: 0.75rem;
      letter-spacing: -0.01em;
    }
    .post-meta-row {
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }
    .post-date {
      font-family: var(--sans);
      font-size: 0.72rem;
      letter-spacing: 0.06em;
      color: var(--muted);
    }
    .post-cat-tag {
      font-family: var(--sans);
      font-size: 0.6rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--gold-dark);
      border: 1px solid var(--gold);
      border-radius: 20px;
      padding: 0.15rem 0.55rem;
    }
    .post-divider {
      border: none;
      border-top: 1px solid var(--rule);
      margin: 2rem 0 2.5rem;
    }
    .post-body { max-width: 680px; }
    .post-body p { font-size: 1.05rem; line-height: 1.85; margin-bottom: 1.5rem; }
    .post-body h2 {
      font-size: 1.3rem;
      font-weight: normal;
      letter-spacing: 0.01em;
      margin-top: 2.5rem;
      margin-bottom: 0.85rem;
      color: var(--ink);
    }
    .post-body strong { font-weight: 600; }
    .post-body em { font-style: italic; }
  `;

  return layout(post.title, `
    <style>${css}</style>
    <a href="/journal" class="post-back">&larr; Back to Journal</a>

    <div class="post-header">
      <h1>${post.title}</h1>
      <div class="post-meta-row">
        <time class="post-date">${displayDate}</time>
        <span class="post-cat-tag">${CATEGORY_LABELS[post.category]}</span>
      </div>
    </div>

    <hr class="post-divider" />

    <div class="post-body">
      ${renderMarkdown(post.content)}
    </div>

    <div class="pull-quote">
      <em>"${pullQuotes[post.category]}"</em>
    </div>
  `, { path: `/journal/${post.slug}`, description: post.excerpt });
}

// ─── Testimonials Data ────────────────────────────────────────────────────────

interface Testimonial {
  name: string;
  role: string;
  text: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Anne-Sophie Van Royen",
    role: "Private student",
    text: "I am very fortunate to be one of Fiona's students. Not only is she a fabulous pianist, but her talents also extend far beyond the stage. She possesses profound musical knowledge, and thanks to her, I have gained valuable insights into harmonic progression and analysis, despite not having studied musical theory at a high level. As a teacher with exceptional pedagogical skills, she has an uncanny ability to select pieces that offer musical challenges to my adult mind, guiding me into repertoires I both enjoy and that push me beyond my comfort zone. We have tackled a diverse range of pieces, including works by Liszt, Schubert, and Couperin. Fiona taught me the importance of rigor in approaching each piece and how to impart expression and musicality. She is a truly exceptional teacher and an inspiration, thanks to her talent and unmatched teaching skills.",
  },
  {
    name: "Emmanuelle Granger",
    role: "Undergraduate student, Université de Montréal",
    text: "Fiona a été ma professeure pour trois sessions à l'université. Grâce à son aide et à ses encouragements, mon interprétation musicale d'aujourd'hui est méconnaissable comparativement à mes débuts à ses côtés. Depuis mon Cégep, je n'ai jamais vécu une amélioration aussi exponentielle à l'intérieur d'une session qu'avec Fiona. Avec ses conseils, j'ai reçu les meilleures notes en piano que j'aurais pu imaginer et j'ai regagné confiance en mon jeu. Elle est aussi une personne captivante et une pianiste inspirante. Je suis très reconnaissante d'avoir eu la chance d'avoir été son élève pour ces trois sessions. Merci beaucoup pour tout Fiona!",
  },
  {
    name: "Norman Kong",
    role: "Private student",
    text: "I am so lucky to have been one of Fiona's students for the past few years. It goes without saying she is a superb pianist; while her technical skill is formidable, what strikes me most is her musical maturity and the unique perspectives she brings to music. Many pianists can hit the right notes, but Fiona truly plays the music. I am fortunate that as her student, I get to learn not only about music, but about life. Good teachers teach you about the art but great teachers go beyond that. Fiona is a friend, a mentor and a role model. Thank you Fiona!",
  },
];

function renderTeaching(): string {
  let testimonialHtml = "";
  for (const t of TESTIMONIALS) {
    testimonialHtml += `
    <div class="press-quote" style="margin-bottom: 2rem;">
      <blockquote>"${t.text}"</blockquote>
      <cite>— ${t.name}, ${t.role}</cite>
    </div>`;
  }

  return layout("Teaching", `
    <section style="margin-bottom: 4rem;">
      <h1>Teaching</h1>
      <p class="pull-quote" style="text-align:left; padding: 1.5rem 0; border-top: none; margin-top: 1rem; margin-bottom: 2rem; font-size: 1.15rem;">
        Finding your voice at the piano
      </p>
      <p>
        Fiona believes in teaching the whole musician, not just technique. Her approach is shaped
        by her own journey — overcoming performance anxiety, finding artistic courage, and learning
        to inhabit music rather than merely execute it. In her studio, technical rigour and
        expressive freedom are not opposites; they are companions.
      </p>
      <p>
        Students are encouraged to be vulnerable, to take interpretive risks, and to discover what
        only they can bring to a piece. The best lessons happen not when a student plays perfectly,
        but when they play honestly.
      </p>
      <p>
        Fiona is a faculty member at the <strong>Conservatoire de musique et d'art dramatique
        de Montréal</strong>. She welcomes students of all levels for private lessons, including
        sessions conducted online.
      </p>
    </section>

    <section style="margin-bottom: 4rem;">
      <h3>What Students Say</h3>
      ${testimonialHtml}
    </section>

    <section>
      <h2>Interested in Lessons?</h2>
      <p style="margin-bottom: 2rem; color: var(--muted); font-family: var(--sans); font-size: 0.88rem; letter-spacing: 0.03em;">
        Fill out the form below and Fiona will be in touch to discuss availability and fit.
      </p>
      <form method="POST" action="/api/inquiry" style="display: flex; flex-direction: column; gap: 1.25rem; max-width: 560px;">
        <div style="display: flex; flex-direction: column; gap: 0.4rem;">
          <label for="name" style="font-family: var(--sans); font-size: 0.72rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--muted);">Name</label>
          <input type="text" id="name" name="name" required
            style="padding: 0.7rem 0.9rem; border: 1px solid var(--rule); background: #fff; font-family: var(--serif); font-size: 0.95rem; color: var(--ink); border-radius: 2px; outline: none;"
          />
        </div>
        <div style="display: flex; flex-direction: column; gap: 0.4rem;">
          <label for="email" style="font-family: var(--sans); font-size: 0.72rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--muted);">Email</label>
          <input type="email" id="email" name="email" required
            style="padding: 0.7rem 0.9rem; border: 1px solid var(--rule); background: #fff; font-family: var(--serif); font-size: 0.95rem; color: var(--ink); border-radius: 2px; outline: none;"
          />
        </div>
        <div style="display: flex; flex-direction: column; gap: 0.4rem;">
          <label for="level" style="font-family: var(--sans); font-size: 0.72rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--muted);">Level</label>
          <select id="level" name="level"
            style="padding: 0.7rem 0.9rem; border: 1px solid var(--rule); background: #fff; font-family: var(--serif); font-size: 0.95rem; color: var(--ink); border-radius: 2px; outline: none; appearance: none; cursor: pointer;"
          >
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
            <option value="Professional">Professional</option>
          </select>
        </div>
        <div style="display: flex; flex-direction: column; gap: 0.4rem;">
          <label for="message" style="font-family: var(--sans); font-size: 0.72rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--muted);">Message</label>
          <textarea id="message" name="message" required rows="5"
            style="padding: 0.7rem 0.9rem; border: 1px solid var(--rule); background: #fff; font-family: var(--serif); font-size: 0.95rem; color: var(--ink); border-radius: 2px; outline: none; resize: vertical;"
          ></textarea>
        </div>
        <div>
          <button type="submit"
            style="padding: 0.75rem 2rem; background: var(--ink); color: var(--bg); font-family: var(--sans); font-size: 0.72rem; letter-spacing: 0.14em; text-transform: uppercase; border: none; border-radius: 2px; cursor: pointer;"
          >Send Inquiry</button>
        </div>
      </form>
    </section>
  `, { path: "/teaching", description: "Piano lessons with Fiona Wu — private instruction for all levels at the Conservatoire de Montréal, and online worldwide." });
}

// ─── Events Data ──────────────────────────────────────────────────────────────

interface PerformanceEvent {
  title: string;
  date: string; // ISO 8601: YYYY-MM-DD
  venue: string;
  city: string;
  program: string;
  description?: string;
}

const EVENTS: PerformanceEvent[] = [
  {
    title: "Bach and the Inner Voice: A Recital",
    date: "2026-05-15",
    venue: "Salle Bourgie",
    city: "Montreal, QC",
    program: "J.S. Bach — Partita No. 6 in E minor, BWV 830\nJ.S. Bach/F. Busoni — Chaconne in D minor, BWV 1004\nF. Schubert — Impromptu in G-flat major, D. 899 No. 3",
    description: "An evening exploring Bach's extraordinary emotional architecture, bookended by Schubert's singing lyricism.",
  },
  {
    title: "Beethoven Piano Concerto No. 4 with OUM",
    date: "2024-01-20",
    venue: "Salle Claude Champagne",
    city: "Montreal, QC",
    program: "L. van Beethoven — Piano Concerto No. 4 in G major, Op. 58\nWith the Orchestre de l'Université de Montréal",
  },
  {
    title: "Art of Fugue: A Lecture-Recital",
    date: "2024-03-15",
    venue: "Southminster United Church",
    city: "Ottawa, ON",
    program: "J.S. Bach — The Art of Fugue, BWV 1080\nDoors Open for Music at Southminster series",
  },
  {
    title: "International Livorno Piano Competition",
    date: "2023-10-31",
    venue: "Teatro Goldoni",
    city: "Livorno, Italy",
    program: "Competition repertoire\nSponsored by CALQ",
  },
  {
    title: "DENSE — New Music Premiere",
    date: "2023-09-20",
    venue: "Orford Music",
    city: "Orford, QC",
    program: "Julie Thériault — DENSE\nIn collaboration with Paul Çelebi",
  },
];

function formatEventDate(isoDate: string): string {
  const d = new Date(isoDate + "T12:00:00Z"); // noon UTC avoids timezone drift
  return d.toLocaleDateString("en-CA", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });
}

function formatEventDateShort(isoDate: string): string {
  const d = new Date(isoDate + "T12:00:00Z");
  return d.toLocaleDateString("en-CA", { year: "numeric", month: "short", day: "numeric", timeZone: "UTC" });
}

function renderEvents(): string {
  const today = new Date().toISOString().slice(0, 10);
  const upcoming = EVENTS.filter(e => e.date >= today).sort((a, b) => a.date.localeCompare(b.date));
  const past = EVENTS.filter(e => e.date < today).sort((a, b) => b.date.localeCompare(a.date));

  let upcomingHtml = "";
  if (upcoming.length > 0) {
    let cards = "";
    for (const ev of upcoming) {
      const programLines = ev.program.split("\n").map(l => `<span style="display:block;">${l}</span>`).join("");
      cards += `
      <div style="background: #f9f7f4; border: 1px solid var(--rule); border-left: 3px solid var(--ink); padding: 2rem 2.25rem; margin-bottom: 2rem;">
        <div style="font-family: var(--sans); font-size: 0.72rem; letter-spacing: 0.14em; text-transform: uppercase; color: var(--muted); margin-bottom: 0.6rem;">
          ${formatEventDate(ev.date)}
        </div>
        <h2 style="margin: 0 0 0.4rem; font-size: 1.45rem; line-height: 1.25;">${ev.title}</h2>
        <div style="font-family: var(--sans); font-size: 0.82rem; color: var(--muted); margin-bottom: 1.25rem; letter-spacing: 0.04em;">
          ${ev.venue} &mdash; ${ev.city}
        </div>
        <div style="font-family: var(--serif); font-size: 0.92rem; color: var(--ink); opacity: 0.75; line-height: 1.7; margin-bottom: ${ev.description ? "1rem" : "0"};">
          ${programLines}
        </div>
        ${ev.description ? `<p style="font-style: italic; font-family: var(--serif); font-size: 0.92rem; color: var(--muted); margin: 0; line-height: 1.65;">"${ev.description}"</p>` : ""}
      </div>`;
    }
    upcomingHtml = `
    <section style="margin-bottom: 4rem;">
      <h2 style="margin-bottom: 1.5rem;">Upcoming</h2>
      ${cards}
    </section>`;
  }

  let pastHtml = "";
  if (past.length > 0) {
    let rows = "";
    for (const ev of past) {
      const programLines = ev.program.split("\n").map(l => `<span style="display:block;">${l}</span>`).join("");
      rows += `
      <div style="display: flex; gap: 2rem; padding: 1.5rem 0 1.5rem 1.5rem; border-left: 1px solid var(--rule); position: relative;">
        <div style="position: absolute; left: -4px; top: 1.9rem; width: 7px; height: 7px; border-radius: 50%; background: var(--rule);"></div>
        <div style="min-width: 110px; flex-shrink: 0; font-family: var(--sans); font-size: 0.72rem; letter-spacing: 0.08em; text-transform: uppercase; color: var(--muted); padding-top: 0.15rem; line-height: 1.5;">
          ${formatEventDateShort(ev.date)}
        </div>
        <div style="flex: 1;">
          <div style="font-family: var(--serif); font-size: 1.05rem; font-weight: 500; margin-bottom: 0.25rem;">${ev.title}</div>
          <div style="font-family: var(--sans); font-size: 0.78rem; color: var(--muted); margin-bottom: 0.6rem; letter-spacing: 0.03em;">${ev.venue} &mdash; ${ev.city}</div>
          <div style="font-family: var(--serif); font-size: 0.88rem; color: var(--ink); opacity: 0.65; line-height: 1.65;">${programLines}</div>
        </div>
      </div>`;
    }
    pastHtml = `
    <section>
      <h2 style="margin-bottom: 1.75rem;">Past Performances</h2>
      <div style="margin-left: 0.25rem;">
        ${rows}
      </div>
    </section>`;
  }

  const emptyHtml = upcoming.length === 0 && past.length === 0
    ? `<p style="color: var(--muted); font-family: var(--sans); font-size: 0.88rem;">No events listed at this time.</p>`
    : "";

  return layout("Events", `
    <h1 style="margin-bottom: 0.5rem;">Events</h1>
    <p class="pull-quote" style="text-align:left; padding: 1.5rem 0; border-top: none; margin-top: 1rem; margin-bottom: 3rem; font-size: 1.1rem; color: var(--muted);">
      Performances, competitions, and premieres
    </p>
    ${emptyHtml}
    ${upcomingHtml}
    ${pastHtml}
  `, { path: "/events", description: "Upcoming and past performances, competitions, and lecture-recitals by pianist Fiona Wu." });
}

function renderPress(): string {
  const inputStyle = `padding: 0.7rem 0.9rem; border: 1px solid var(--rule); background: #fff; font-family: var(--serif); font-size: 0.95rem; color: var(--ink); border-radius: 2px; outline: none; width: 100%;`;

  return layout("Press", `
    <div class="page-header">
      <h1>Press</h1>
    </div>

    <!-- ── Press Quotes ── -->
    <section style="margin-bottom: 4rem;">
      <div class="press-quote">
        <blockquote>
          "…complete mastery of contrapuntal detail in the Partita No. 6 in E minor, BWV 830…
          intense immersion in the Toccata, Sarabande and Gigue…"
        </blockquote>
        <cite>— New York Concert Review</cite>
      </div>

      <div class="press-quote">
        <blockquote>
          "A pianist of remarkable sensitivity and intellectual depth."
        </blockquote>
        <cite>— Montreal Gazette</cite>
      </div>

      <div class="press-quote">
        <blockquote>
          "Wu's lecture-recital brought Bach to life with clarity and passion."
        </blockquote>
        <cite>— Ottawa Citizen</cite>
      </div>
    </section>

    <!-- ── Press Kit ── -->
    <section style="margin-bottom: 4rem;">
      <h2>Press Kit</h2>
      <p style="font-family: var(--sans); font-size: 0.82rem; letter-spacing: 0.06em; color: var(--muted); margin-bottom: 2.5rem;">
        Materials for press, presenters, and event organizers
      </p>

      <div style="margin-bottom: 2.5rem; padding: 2rem 2.25rem; border: 1px solid var(--rule); background: #f9f7f4; border-radius: 4px;">
        <h3 style="margin-bottom: 1rem;">Short Bio</h3>
        <p style="font-size: 1.02rem; line-height: 1.8;">
          Canadian pianist Fiona Wu is a soloist, collaborator, and teacher known for her sensitive
          and expressive playing. She holds a doctorate from the Université de Montréal and serves
          on faculty at the Conservatoire de musique et d'art dramatique de Montréal.
        </p>
      </div>

      <div style="margin-bottom: 2.5rem; padding: 2rem 2.25rem; border: 1px solid var(--rule); background: #f9f7f4; border-radius: 4px;">
        <h3 style="margin-bottom: 1rem;">Long Bio</h3>
        <p style="font-size: 0.95rem; color: var(--muted); font-family: var(--sans); font-size: 0.8rem; letter-spacing: 0.04em;">
          Full biography available on the <a href="/about">About page</a>.
        </p>
      </div>

      <p style="font-family: var(--sans); font-size: 0.82rem; color: var(--muted); font-style: italic; letter-spacing: 0.03em;">
        For high-resolution headshots, please <a href="/contact">contact Fiona directly</a>.
      </p>
    </section>

    <!-- ── Competitions & Awards ── -->
    <section style="margin-bottom: 4rem;">
      <h2>Competitions &amp; Awards</h2>
      <ul style="list-style: none; padding: 0; margin-top: 1.5rem;">
        <li style="padding: 1.25rem 0; border-bottom: 1px solid var(--rule); display: flex; align-items: baseline; gap: 1rem;">
          <span style="flex-shrink: 0; width: 8px; height: 8px; border-radius: 50%; background: var(--gold); display: inline-block; margin-top: 0.35rem; align-self: start;"></span>
          <div>
            <div style="font-family: var(--serif); font-size: 1.05rem; color: var(--ink); margin-bottom: 0.2rem;">Rosalyn Tureck International Bach Competition</div>
            <div style="font-family: var(--sans); font-size: 0.75rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--gold-dark);">Laureate</div>
          </div>
        </li>
        <li style="padding: 1.25rem 0; border-bottom: 1px solid var(--rule); display: flex; align-items: baseline; gap: 1rem;">
          <span style="flex-shrink: 0; width: 8px; height: 8px; border-radius: 50%; background: var(--gold); display: inline-block; margin-top: 0.35rem; align-self: start;"></span>
          <div>
            <div style="font-family: var(--serif); font-size: 1.05rem; color: var(--ink); margin-bottom: 0.2rem;">Concours Prix d'Europe</div>
            <div style="font-family: var(--sans); font-size: 0.75rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--gold-dark);">Le Prix Guy-Soucie &amp; Le Prix Monik Grenier</div>
          </div>
        </li>
        <li style="padding: 1.25rem 0; border-bottom: 1px solid var(--rule); display: flex; align-items: baseline; gap: 1rem;">
          <span style="flex-shrink: 0; width: 8px; height: 8px; border-radius: 50%; background: var(--gold); display: inline-block; margin-top: 0.35rem; align-self: start;"></span>
          <div>
            <div style="font-family: var(--serif); font-size: 1.05rem; color: var(--ink); margin-bottom: 0.2rem;">Concours de concerto de l'OUM</div>
            <div style="font-family: var(--sans); font-size: 0.75rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--gold-dark);">Third Prize — Beethoven Piano Concerto No. 4</div>
          </div>
        </li>
      </ul>
    </section>
  `, { path: "/press", description: "Press materials, reviews, and awards for Canadian pianist Fiona Wu — bios, quotes, and competition history." });
}

function renderContact(): string {
  const inputStyle = `padding: 0.7rem 0.9rem; border: 1px solid var(--rule); background: #fff; font-family: var(--serif); font-size: 0.95rem; color: var(--ink); border-radius: 2px; outline: none; width: 100%;`;
  const labelStyle = `font-family: var(--sans); font-size: 0.72rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--muted);`;

  return layout("Contact", `
    <div class="page-header">
      <h1>Contact</h1>
      <p class="page-subtitle">For inquiries about performances, collaborations, lessons, or press</p>
    </div>

    <div class="contact-grid" style="display: grid; grid-template-columns: 1fr 280px; gap: 5rem; align-items: start; margin-top: 2.5rem;">

      <!-- ── Contact form ── -->
      <section>
        <form method="POST" action="/api/contact" style="display: flex; flex-direction: column; gap: 1.25rem; max-width: 560px;">
          <div style="display: flex; flex-direction: column; gap: 0.4rem;">
            <label for="name" style="${labelStyle}">Name</label>
            <input type="text" id="name" name="name" required style="${inputStyle}" />
          </div>
          <div style="display: flex; flex-direction: column; gap: 0.4rem;">
            <label for="email" style="${labelStyle}">Email</label>
            <input type="email" id="email" name="email" required style="${inputStyle}" />
          </div>
          <div style="display: flex; flex-direction: column; gap: 0.4rem;">
            <label for="subject" style="${labelStyle}">Subject</label>
            <select id="subject" name="subject" style="${inputStyle} appearance: none; cursor: pointer;">
              <option value="General Inquiry">General Inquiry</option>
              <option value="Performance/Booking">Performance / Booking</option>
              <option value="Collaboration">Collaboration</option>
              <option value="Press/Media">Press / Media</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div style="display: flex; flex-direction: column; gap: 0.4rem;">
            <label for="message" style="${labelStyle}">Message</label>
            <textarea id="message" name="message" required rows="6"
              style="${inputStyle} resize: vertical;"
            ></textarea>
          </div>
          <div>
            <button type="submit"
              style="padding: 0.75rem 2rem; background: var(--ink); color: var(--bg); font-family: var(--sans); font-size: 0.72rem; letter-spacing: 0.14em; text-transform: uppercase; border: none; border-radius: 2px; cursor: pointer;"
            >Send Message</button>
          </div>
        </form>
      </section>

      <!-- ── Sidebar ── -->
      <aside style="border-left: 1px solid var(--rule); padding-left: 2.5rem;">
        <div style="margin-bottom: 2.5rem;">
          <h3 style="margin-bottom: 1rem;">Online</h3>
          <div style="display: flex; flex-direction: column; gap: 0.75rem;">
            <a href="https://www.instagram.com/fionawupianist/" target="_blank" rel="noopener"
               style="font-family: var(--sans); font-size: 0.82rem; color: var(--ink); text-decoration: none; display: flex; align-items: center; gap: 0.5rem;">
              <span style="font-size: 1rem;">&#128247;</span> @fionawu.bach
            </a>
            <a href="https://www.facebook.com/fionawupianist/" target="_blank" rel="noopener"
               style="font-family: var(--sans); font-size: 0.82rem; color: var(--ink); text-decoration: none; display: flex; align-items: center; gap: 0.5rem;">
              <span style="font-size: 1rem;">&#128100;</span> fionawu.bach
            </a>
            <a href="https://www.youtube.com/@fionawupianist" target="_blank" rel="noopener"
               style="font-family: var(--sans); font-size: 0.82rem; color: var(--ink); text-decoration: none; display: flex; align-items: center; gap: 0.5rem;">
              <span style="font-size: 1rem;">&#9654;</span> @FionaWuBach
            </a>
          </div>
        </div>

        <div>
          <h3 style="margin-bottom: 0.75rem;">Location</h3>
          <p style="font-family: var(--sans); font-size: 0.85rem; color: var(--muted); line-height: 1.7;">
            Based in Montreal, QC<br />
            Available for performances<br />
            and teaching worldwide
          </p>
        </div>
      </aside>
    </div>

  `, { path: "/contact", description: "Contact Fiona Wu for performance bookings, collaborations, press inquiries, or private piano lessons." });
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

    // ── POST /api/inquiry ──────────────────────────────────────────────────
    if (pathname === "/api/inquiry" && req.method === "POST") {
      const body = await req.text();
      const params = new URLSearchParams(body);
      const name = params.get("name") ?? "";
      const email = params.get("email") ?? "";
      const level = params.get("level") ?? "";
      const message = params.get("message") ?? "";

      console.log("[inquiry]", { name, email, level, message });

      const thankyou = layout("Thank You", `
        <div style="text-align: center; padding: 4rem 0;">
          <h1 style="font-size: 2rem; margin-bottom: 1.25rem;">Thank you, ${name}.</h1>
          <p style="color: var(--muted); font-size: 1.05rem; margin-bottom: 2.5rem;">
            Your inquiry has been received. Fiona will be in touch soon.
          </p>
          <a href="/teaching" style="font-family: var(--sans); font-size: 0.72rem; letter-spacing: 0.14em; text-transform: uppercase; color: var(--gold-dark); border-bottom: 1px solid var(--gold);">← Back to Teaching</a>
        </div>
      `);
      return new Response(thankyou, {
        headers: { "Content-Type": "text/html; charset=utf-8" },
      });
    }

    // ── POST /api/contact ──────────────────────────────────────────────────
    if (pathname === "/api/contact" && req.method === "POST") {
      const body = await req.text();
      const params = new URLSearchParams(body);
      const name = params.get("name") ?? "";
      const email = params.get("email") ?? "";
      const subject = params.get("subject") ?? "";
      const message = params.get("message") ?? "";

      console.log("[contact]", { name, email, subject, message });

      // Optional Resend email — skip gracefully if API key is not configured
      const resendKey = process.env.RESEND_API_KEY;
      if (resendKey) {
        try {
          const res = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
              Authorization: `Bearer ${resendKey}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              from: "Fiona Wu Site <noreply@kapable.dev>",
              to: ["fiona@example.com"],
              subject: `[Fiona Wu Site] ${subject}: ${name}`,
              text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
            }),
          });
          if (!res.ok) {
            console.error("[contact] Resend error:", res.status, await res.text());
          } else {
            console.log("[contact] Email sent via Resend");
          }
        } catch (err) {
          console.error("[contact] Resend fetch failed:", err);
        }
      } else {
        console.log("[contact] RESEND_API_KEY not set — email not sent");
      }

      const thankyou = layout("Message Sent", `
        <div style="text-align: center; padding: 4rem 0;">
          <h1 style="font-size: 2rem; margin-bottom: 1.25rem;">Thank you, ${name}.</h1>
          <p style="color: var(--muted); font-size: 1.05rem; margin-bottom: 2.5rem;">
            Your message has been received. Fiona will be in touch soon.
          </p>
          <a href="/contact" style="font-family: var(--sans); font-size: 0.72rem; letter-spacing: 0.14em; text-transform: uppercase; color: var(--gold-dark); border-bottom: 1px solid var(--gold);">← Back to Contact</a>
        </div>
      `);
      return new Response(thankyou, {
        headers: { "Content-Type": "text/html; charset=utf-8" },
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
        return renderJournalPost(slug); // returns null if not found → 404
      }
      if (pathname === "/teaching") return renderTeaching();
      if (pathname === "/events") return renderEvents();
      if (pathname === "/press") return renderPress();
      if (pathname === "/contact") return renderContact();
      return null;
    })();

    if (html === null) {
      const notFound = layout("Page Not Found", `
        <div style="text-align: center; padding: 5rem 1rem 4rem;">
          <p style="font-family: var(--sans); font-size: 0.72rem; letter-spacing: 0.18em; text-transform: uppercase; color: var(--muted); margin-bottom: 1.5rem;">404</p>
          <h1 style="font-size: 2.4rem; font-weight: normal; margin-bottom: 1rem; letter-spacing: -0.01em;">The rest is silence.</h1>
          <p style="color: var(--muted); font-size: 1.05rem; max-width: 400px; margin: 0 auto 2.5rem; line-height: 1.7;">
            This page doesn't exist — but music is waiting elsewhere.
          </p>
          <div style="display: flex; justify-content: center; gap: 2rem; flex-wrap: wrap; font-family: var(--sans); font-size: 0.72rem; letter-spacing: 0.12em; text-transform: uppercase;">
            <a href="/" style="color: var(--gold-dark); border-bottom: 1px solid var(--gold); padding-bottom: 1px; text-decoration: none;">Home</a>
            <a href="/about" style="color: var(--gold-dark); border-bottom: 1px solid var(--gold); padding-bottom: 1px; text-decoration: none;">About</a>
            <a href="/journal" style="color: var(--gold-dark); border-bottom: 1px solid var(--gold); padding-bottom: 1px; text-decoration: none;">Journal</a>
          </div>
        </div>
      `);
      return new Response(notFound, { status: 404, headers: { "Content-Type": "text/html; charset=utf-8" } });
    }

    return new Response(html, {
      headers: { "Content-Type": "text/html; charset=utf-8" },
    });
  },
});

console.log(`Fiona Wu site running on http://localhost:${PORT}`);
