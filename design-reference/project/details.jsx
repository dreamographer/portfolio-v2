// Detail pages — Projects list, Gallery, Blog index, Case study
// All mobile-portrait (390 wide). Reuse notebook primitives.

// Shared top bar for detail pages
function DetailHeader({ title, onBack = () => {} }) {
  return (
    <div style={{
      padding: '16px 18px 14px',
      borderBottom: `1.5px dashed ${NB.pencil}`,
      display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
      gap: 12,
    }}>
      <div style={{ flex: 1 }}>
        <HandLink onClick={(e) => { e.preventDefault(); onBack(); }}>
          <Hand size={18} color={NB.pencil}>← back to home</Hand>
        </HandLink>
        <Marker size={36} style={{ display: 'block', marginTop: 2 }}>{title}</Marker>
      </div>
      <Mono size={9} style={{ paddingBottom: 6 }}>ashwin.kv</Mono>
    </div>
  );
}

// ============ PROJECTS ============
function ProjectsPage({ onBack, onOpenProject = () => {} }) {
  const projects = [
    { id: 'lumen', title: 'Lumen Notes', tag: 'Web app · 2024', logo: NB.yellow,
      desc: 'A minimal notes editor with markdown + sync. My main side project.',
      stack: ['React', 'TS', 'IndexedDB', 'CRDT'] },
    { id: 'tide', title: 'Tide', tag: 'Library · 2023', logo: NB.pink,
      desc: 'A tiny state machine for React. ~1kb gzipped, full TS types.',
      stack: ['TypeScript', 'Rollup'] },
    { id: 'grain', title: 'grain.css', tag: 'CSS · 2023', logo: NB.blue,
      desc: 'One file, ambient noise textures for any element. Pure CSS.',
      stack: ['CSS', 'SVG'] },
    { id: 'kite', title: 'Kite', tag: 'CLI · 2022', logo: NB.green,
      desc: 'A small CLI to scaffold component folders the way I like them.',
      stack: ['Node', 'TS'] },
    { id: 'plume', title: 'Plume', tag: 'Web · 2022', logo: NB.yellow,
      desc: 'Pull-quote generator. Renders SVGs you can paste anywhere.',
      stack: ['SvelteKit'] },
    { id: 'foglight', title: 'Foglight', tag: 'Dev tool · 2021', logo: NB.pink,
      desc: 'Extension that highlights console errors in your editor.',
      stack: ['MV3', 'WebSocket'] },
  ];
  const rots = [-0.6, 0.5, -0.4, 0.6, -0.3, 0.4];
  return (
    <GridPaper size={22} style={{ width: 390, minHeight: 1200, overflow: 'hidden' }}>
      <DetailHeader title="Projects." onBack={onBack} />
      <div style={{ padding: '16px 18px 40px' }}>
        <Hand size={19} color={NB.inkSoft} style={{ display: 'block', marginBottom: 14 }}>
          Things I've built. Most are placeholders — drop your real work in.
        </Hand>
        <div style={{ display: 'grid', gap: 14 }}>
          {projects.map((p, i) => (
            <a key={p.id} href="#" onClick={(e) => { e.preventDefault(); onOpenProject(p.id); }}
              style={{
                textDecoration: 'none', color: 'inherit', display: 'block',
                position: 'relative', padding: '14px 14px',
                transform: `rotate(${rots[i]}deg)`,
                transition: 'transform .25s',
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'rotate(0deg) translateY(-2px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = `rotate(${rots[i]}deg)`}
            >
              <HandBox width={354} height={130} rounded
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} />
              <div style={{ position: 'relative', display: 'flex', gap: 12 }}>
                <ProjectLogo color={p.logo} letter={p.title[0]} size={56}
                  rot={i % 2 === 0 ? -4 : 4} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between',
                    alignItems: 'baseline', gap: 8 }}>
                    <Hand size={23} weight={600} style={{ lineHeight: 1.1 }}>{p.title}</Hand>
                    <Mono size={9}>{p.tag}</Mono>
                  </div>
                  <Hand size={16} color={NB.inkSoft} style={{ display: 'block', marginTop: 4, lineHeight: 1.3 }}>
                    {p.desc}
                  </Hand>
                  <div style={{ display: 'flex', gap: 4, marginTop: 6, flexWrap: 'wrap' }}>
                    {p.stack.map((s) => (
                      <span key={s} style={{
                        fontFamily: '"JetBrains Mono", monospace', fontSize: 9,
                        padding: '0 5px',
                        border: `1px solid ${NB.pencil}`, borderRadius: 3,
                        color: NB.pencil,
                      }}>{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </GridPaper>
  );
}

// Small placeholder "logo" — colored square with marker initial.
// Drop the real logo image in when ready.
function ProjectLogo({ color = NB.yellow, letter = '?', size = 56, rot = -3 }) {
  return (
    <div style={{
      flex: '0 0 auto',
      width: size, height: size,
      background: color,
      borderRadius: 8,
      transform: `rotate(${rot}deg)`,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      boxShadow: '0 2px 4px rgba(0,0,0,0.12), inset 0 -2px 4px rgba(0,0,0,0.06)',
      position: 'relative',
    }}>
      <span style={{
        fontFamily: '"Permanent Marker", cursive',
        fontSize: size * 0.55, color: NB.ink, lineHeight: 1,
      }}>{letter}</span>
    </div>
  );
}

// ============ GALLERY ============
function GalleryPage({ onBack }) {
  const items = Array.from({ length: 12 }).map((_, i) => ({
    id: i,
    h: [120, 160, 140, 180, 130, 150, 170, 140, 160, 130, 150, 140][i],
    rot: [-2, 1.5, -1, 2, -1.5, 1, -2.5, 0.8, -1.2, 1.8, -1, 2][i],
    label: `shot ${String(i + 1).padStart(2, '0')}`,
  }));
  return (
    <GridPaper size={22} style={{ width: 390, minHeight: 1500, overflow: 'hidden' }}>
      <DetailHeader title="Gallery." onBack={onBack} />
      <div style={{ padding: '16px 18px 40px' }}>
        <Hand size={19} color={NB.inkSoft} style={{ display: 'block', marginBottom: 14 }}>
          Photos, screenshots, sketches. A pinboard of stuff I like.
        </Hand>
        {/* Masonry-ish two columns */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          <div style={{ display: 'grid', gap: 12 }}>
            {items.filter((_, i) => i % 2 === 0).map((it) => (
              <PhotoCutout key={it.id} width="100%" height={it.h} rotate={it.rot}
                label={it.label} style={{ width: '100%' }} />
            ))}
          </div>
          <div style={{ display: 'grid', gap: 12, marginTop: 20 }}>
            {items.filter((_, i) => i % 2 === 1).map((it) => (
              <PhotoCutout key={it.id} width="100%" height={it.h} rotate={it.rot}
                label={it.label} style={{ width: '100%' }} />
            ))}
          </div>
        </div>
      </div>
    </GridPaper>
  );
}

// ============ BLOG ============
function BlogPage({ onBack }) {
  const posts = [
    { d: 'MAY 12, 2026', title: 'Why I rebuild my portfolio every year',
      tag: 'meta', read: '4 min' },
    { d: 'APR 03, 2026', title: 'A tiny pattern for animated layouts',
      tag: 'css', read: '7 min' },
    { d: 'FEB 18, 2026', title: 'On being a self-taught engineer in 2026',
      tag: 'career', read: '9 min' },
    { d: 'JAN 09, 2026', title: 'Notes on shipping calmly',
      tag: 'process', read: '5 min' },
    { d: 'DEC 02, 2025', title: 'Reading the React source for fun',
      tag: 'react', read: '11 min' },
    { d: 'OCT 17, 2025', title: 'A small case for monospace UIs',
      tag: 'design', read: '6 min' },
    { d: 'SEP 08, 2025', title: 'Things I keep relearning about CSS',
      tag: 'css', read: '8 min' },
    { d: 'JUL 22, 2025', title: 'My favorite kind of side project',
      tag: 'meta', read: '4 min' },
  ];
  return (
    <GridPaper size={22} style={{ width: 390, minHeight: 1800, overflow: 'hidden' }}>
      <DetailHeader title="Blog." onBack={onBack} />
      <div style={{ padding: '16px 18px 40px' }}>
        <Hand size={19} color={NB.inkSoft} style={{ display: 'block', marginBottom: 8 }}>
          Notes I write to myself, mostly. About code, design, and shipping.
        </Hand>
        <div style={{ display: 'flex', gap: 6, marginBottom: 18, flexWrap: 'wrap' }}>
          {['all', 'css', 'react', 'design', 'career', 'meta'].map((t, i) => (
            <span key={t} style={{
              fontFamily: '"Caveat", cursive', fontSize: 17,
              padding: '0 8px',
              background: i === 0 ? NB.yellow : 'transparent',
              border: i === 0 ? 'none' : `1.5px solid ${NB.pencil}`,
              borderRadius: 999,
              transform: `rotate(${[-1, 1, -0.5, 1, -1, 0.5][i]}deg)`,
            }}>#{t}</span>
          ))}
        </div>
        {posts.map((p, i) => (
          <div key={i}
            style={{
              padding: '12px 4px',
              borderBottom: i === posts.length - 1 ? 'none' : `1px dashed ${NB.pencil}`,
            }}>
            <div style={{ display: 'flex', gap: 12, alignItems: 'baseline' }}>
              <Mono size={9} style={{ flex: '0 0 76px' }}>{p.d}</Mono>
              <div style={{ flex: 1 }}>
                <HandLink>
                  <Hand size={20} weight={600}>{p.title}</Hand>
                </HandLink>
                <div style={{ marginTop: 2, display: 'flex', gap: 10 }}>
                  <Mono size={9}>#{p.tag}</Mono>
                  <Mono size={9} color={NB.pencil}>{p.read} read</Mono>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </GridPaper>
  );
}

// ============ CASE STUDY ============
function CaseStudyPage({ onBack, projectId = 'lumen' }) {
  return (
    <GridPaper size={22} style={{ width: 390, minHeight: 2200, overflow: 'hidden' }}>
      <DetailHeader title="Case Study." onBack={onBack} />
      <div style={{ padding: '18px 18px 40px' }}>
        <Mono size={9} color={NB.red} style={{ display: 'block', marginBottom: 4 }}>
          PROJECT · 2024
        </Mono>
        <Marker size={42} style={{ display: 'block' }}>Lumen Notes.</Marker>
        <Hand size={20} color={NB.inkSoft} style={{ display: 'block', marginTop: -2 }}>
          A minimal notes editor with markdown + sync.
        </Hand>

        {/* Hero placeholder image */}
        <div style={{ marginTop: 18, position: 'relative' }}>
          <PhotoCutout width="100%" height={200} rotate={-1.5}
            label="hero screenshot" style={{ width: '100%' }} />
        </div>

        {/* Meta row */}
        <div style={{
          marginTop: 22, padding: '12px 14px',
          background: NB.paper, border: `1.5px solid ${NB.ink}`,
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px 14px',
        }}>
          <MetaItem k="ROLE" v="Solo · design + code" />
          <MetaItem k="STACK" v="React · TS · CRDT" />
          <MetaItem k="TIME" v="6 months · ongoing" />
          <MetaItem k="STATUS" v="Live · users daily" />
        </div>

        {/* Overview */}
        <CSBlock label="overview" color={NB.yellow} rot={-2}>
          <Hand size={19}>
            I'd been searching for a notes app that didn't get in
            the way. Most are too heavy, too cloud, too "smart".
            I wanted something that felt like writing in a paper
            notebook, but synced across devices.
          </Hand>
        </CSBlock>

        {/* Problem */}
        <CSBlock label="the problem" color={NB.pink} rot={2}>
          <Hand size={19}>
            Existing apps have <Highlight>three problems</Highlight>: they're slow to
            open, they require accounts, and they distract you with formatting before
            you've written anything.
          </Hand>
        </CSBlock>

        {/* Approach */}
        <CSBlock label="approach" color={NB.blue} rot={-1.5}>
          <ol style={{ margin: 0, paddingLeft: 22 }}>
            <li><Hand size={19}>Local-first storage in IndexedDB.</Hand></li>
            <li><Hand size={19}>Optional sync via CRDTs.</Hand></li>
            <li><Hand size={19}>Markdown rendered live, no toolbar.</Hand></li>
            <li><Hand size={19}>Open in &lt; 200ms cold.</Hand></li>
          </ol>
        </CSBlock>

        {/* Gallery */}
        <div style={{ marginTop: 22 }}>
          <Marker size={22}>process shots</Marker>
          <HandUnderline width={120} style={{ marginTop: 0 }} />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginTop: 12 }}>
            {[ -1.5, 1, -2, 1.5 ].map((r, i) => (
              <PhotoCutout key={i} width="100%" height={110} rotate={r}
                label={`v.${i + 1}`} style={{ width: '100%' }} />
            ))}
          </div>
        </div>

        {/* Outcome */}
        <CSBlock label="outcome" color={NB.green} rot={1.5}>
          <Hand size={19}>
            Shipped in Feb 2024. ~2,800 weekly users. I use it
            myself every day, which was always the point.
          </Hand>
          <div style={{ marginTop: 8, display: 'flex', gap: 14 }}>
            <Stat n="2.8k" l="weekly users" />
            <Stat n="180ms" l="cold open" />
            <Stat n="100%" l="my notes" />
          </div>
        </CSBlock>

        {/* Footer / next */}
        <div style={{ marginTop: 30, display: 'flex', justifyContent: 'space-between',
          alignItems: 'center', padding: '14px 0',
          borderTop: `1.5px dashed ${NB.pencil}` }}>
          <HandLink onClick={(e) => { e.preventDefault(); onBack(); }}>
            <Hand size={19} color={NB.redInk}>← back</Hand>
          </HandLink>
          <HandLink href="#"><Hand size={19} color={NB.redInk}>next project →</Hand></HandLink>
        </div>
      </div>
    </GridPaper>
  );
}

function MetaItem({ k, v }) {
  return (
    <div>
      <Mono size={9}>{k}</Mono>
      <Hand size={17} style={{ display: 'block' }}>{v}</Hand>
    </div>
  );
}

function CSBlock({ label, color, rot, children }) {
  return (
    <div style={{ marginTop: 22 }}>
      <StickyNote color={color} rotate={rot}
        style={{ display: 'inline-block', padding: '2px 12px 6px' }}>
        <Marker size={22}>{label}</Marker>
      </StickyNote>
      <div style={{ marginTop: 10 }}>{children}</div>
    </div>
  );
}

function Stat({ n, l }) {
  return (
    <div>
      <Marker size={24} color={NB.redInk}>{n}</Marker>
      <Mono size={9} style={{ display: 'block' }}>{l}</Mono>
    </div>
  );
}

Object.assign(window, { ProjectsPage, GalleryPage, BlogPage, CaseStudyPage });
