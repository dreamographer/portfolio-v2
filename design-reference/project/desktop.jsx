// Desktop versions — 1280 wide. Notebook aesthetic, wider grid, multi-column.
// Components: DesktopHome, DesktopProjects, DesktopGallery, DesktopBlog,
// DesktopCaseStudy.

const DW = 1280; // desktop width

// ============ DESKTOP HOME ============
function DesktopHome({ onNav = () => {} }) {
  return (
    <GridPaper size={26} style={{ width: DW, minHeight: 2300, overflow: 'hidden' }}>
      {/* Torn paper top */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 4,
        background: 'repeating-linear-gradient(90deg, transparent 0 8px, rgba(0,0,0,0.04) 8px 10px)',
      }} />

      {/* Top nav */}
      <div style={{
        padding: '20px 60px 0',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      }}>
        <Mono size={11}>// portfolio.2026 — ashwin.kv</Mono>
        <div style={{ display: 'flex', gap: 24 }}>
          {[
            ['work', 'projects'],
            ['gallery', 'gallery'],
            ['writing', 'blog'],
            ['contact', '#contact'],
          ].map(([t, key]) => (
            <HandLink key={t} onClick={(e) => { e.preventDefault(); if (key !== '#contact') onNav(key); }}>
              <Hand size={22}>{t}</Hand>
            </HandLink>
          ))}
        </div>
      </div>

      {/* --- HERO --- */}
      <div style={{ padding: '32px 60px 0', position: 'relative' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 40, alignItems: 'flex-start' }}>
          {/* Left */}
          <div>
            <Marker size={72}>hi, I'm</Marker>
            <Marker size={132} color={NB.redInk} style={{ display: 'block', marginTop: -10, lineHeight: 1 }}>
              Ashwin.
            </Marker>
            <Hand size={36} style={{ display: 'block', marginTop: 14 }}>
              a <Highlight height="0.65em">senior frontend engineer</Highlight>,
            </Hand>
            <Hand size={36} style={{ display: 'block', marginTop: 0 }}>
              <Highlight color={NB.pink} height="0.65em">self-taught</Highlight> & building for the web.
            </Hand>

            <div style={{ display: 'flex', gap: 10, marginTop: 22, flexWrap: 'wrap', maxWidth: 540 }}>
              {['self-taught', 'curious', 'fast', 'kind', 'detail-obsessed', 'react', 'typescript'].map((t, i) => (
                <span key={t} style={{
                  fontFamily: '"Caveat", cursive', fontSize: 22,
                  padding: '2px 14px',
                  border: `1.8px solid ${NB.ink}`,
                  borderRadius: 999,
                  transform: `rotate(${[-2, 1, -1, 2, -1.5, 0.8, -0.6][i]}deg)`,
                  background: NB.paper,
                }}>· {t} ·</span>
              ))}
            </div>

            <div style={{ marginTop: 26, display: 'flex', gap: 12, alignItems: 'center' }}>
              <Mono size={10}>STATUS</Mono>
              <Hand size={22}>· <Highlight color={NB.green}>open to work</Highlight></Hand>
              <span style={{
                width: 10, height: 10, borderRadius: '50%', background: '#3eb058',
                boxShadow: '0 0 0 4px rgba(62,176,88,0.18)', marginLeft: 4,
              }} />
            </div>
          </div>

          {/* Right — photo with washi tape + floating doodles */}
          <div style={{ position: 'relative', paddingTop: 24, paddingLeft: 40 }}>
            <div style={{ position: 'relative', width: 280 }}>
              <div style={{
                position: 'absolute', top: -16, left: -22, width: 110, height: 26,
                background: 'rgba(255, 228, 92, 0.75)',
                transform: 'rotate(-18deg)', zIndex: 2,
                boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
                backgroundImage: 'repeating-linear-gradient(90deg, transparent 0 5px, rgba(0,0,0,0.06) 5px 6px)',
              }} />
              <div style={{
                position: 'absolute', bottom: 30, right: -28, width: 110, height: 22,
                background: 'rgba(255, 201, 212, 0.78)',
                transform: 'rotate(14deg)', zIndex: 2,
                boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
              }} />
              <PhotoCutout width={280} height={340} rotate={-3} label="your photo" />
            </div>

            {/* doodle arrow + caption */}
            <div style={{ position: 'absolute', top: 280, right: 50, transform: 'rotate(-8deg)' }}>
              <HandArrow direction="up-left" length={80} />
            </div>
            <div style={{ position: 'absolute', top: 340, right: 0, width: 180, transform: 'rotate(4deg)' }}>
              <Hand size={22} color={NB.inkSoft}>that's me, says hi</Hand>
            </div>
          </div>
        </div>
      </div>

      {/* --- BIO --- */}
      <div style={{ padding: '70px 60px 0', position: 'relative' }}>
        <DSection title="Personal Bio" rotate={-3}>
          <div style={{ maxWidth: 820 }}>
            <Hand size={26} color={NB.ink}>
              I write code for the web. I care about fast pages, calm interfaces, and details that make
              people smile. Mostly self-taught — the internet was my classroom, curiosity is my main
              skill, and I've shipped a few things I'm proud of since.
            </Hand>
          </div>
        </DSection>
      </div>

      {/* --- EXPERIENCE + EDUCATION/SKILLS (2 columns) --- */}
      <div style={{ padding: '36px 60px 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 60 }}>
          {/* Experience */}
          <div>
            <DSection title="Experience" rotate={2}>
              <DExpRow year="2023 / NOW" role="Senior Frontend Engineer" place="@ Placeholder Co."
                desc="Leading the design system & shipping the next-gen dashboard." />
              <DExpRow year="2021 / 2023" role="Frontend Engineer" place="@ Another Co."
                desc="Built customer-facing pages, A/B framework, and internal tooling." />
              <DExpRow year="2019 / 2021" role="Junior Developer" place="@ First Job"
                desc="Cut my teeth on HTML/CSS, jQuery → React. Many late-night fixes." />
            </DSection>
          </div>

          {/* Education + Good at */}
          <div>
            <DSection title="Education" rotate={-2}>
              <DExpRow year="2024" role="Self-taught" place="The internet"
                desc="freeCodeCamp, MDN, every YouTube tutorial." />
              <DExpRow year="2019" role="B.Sc. Computer Science" place="@ Some University"
                desc="GPA: 3.6 — placeholder." />
            </DSection>

            <div style={{ marginTop: 32 }}>
              <DSection title="Good At" rotate={3}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4px 18px' }}>
                  {['React / Next.js', 'TypeScript', 'CSS & motion',
                    'Design systems', 'Node.js', 'GraphQL',
                    'a11y & perf', 'Tooling']
                    .map((s) => (
                      <div key={s} style={{ display: 'flex', gap: 8, alignItems: 'baseline' }}>
                        <Doodle kind="check" size={16} color={NB.red} style={{ flexShrink: 0 }} />
                        <Hand size={22}>{s}</Hand>
                      </div>
                    ))}
                </div>
              </DSection>
            </div>
          </div>
        </div>
      </div>

      {/* --- FEATURED WORK --- */}
      <div style={{ padding: '60px 60px 0' }}>
        <DSection title="Featured Work" rotate={-1.5} />
        <div style={{
          marginTop: 22, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20,
        }}>
          <DProjectCard title="Lumen Notes" tag="Web app · 2024"
            desc="A minimal notes editor with markdown + sync. My main side project — what I use every day." />
          <DProjectCard title="Tide" tag="Library · 2023"
            desc="Tiny state machine for React. ~1kb gzipped with full TS types. Used in production." />
          <DProjectCard title="grain.css" tag="CSS · 2023"
            desc="One file, ambient noise textures for any element. Pure CSS, no JS. Drop-in." />
        </div>
        <div style={{ marginTop: 18, textAlign: 'right' }}>
          <HandLink onClick={(e) => { e.preventDefault(); onNav('projects'); }}>
            <Hand size={24} color={NB.redInk}>see all projects →</Hand>
          </HandLink>
        </div>
      </div>

      {/* --- GALLERY PREVIEW --- */}
      <div style={{ padding: '60px 60px 0' }}>
        <DSection title="Gallery" rotate={2} />
        <div style={{
          marginTop: 22, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18,
        }}>
          {[ -2, 1.5, -1, 2 ].map((r, i) => (
            <PhotoCutout key={i} width="100%" height={200} rotate={r}
              label={`shot ${i + 1}`} style={{ width: '100%' }} />
          ))}
        </div>
        <div style={{ marginTop: 18, textAlign: 'right' }}>
          <HandLink onClick={(e) => { e.preventDefault(); onNav('gallery'); }}>
            <Hand size={24} color={NB.redInk}>open gallery →</Hand>
          </HandLink>
        </div>
      </div>

      {/* --- BLOG --- */}
      <div style={{ padding: '60px 60px 0' }}>
        <DSection title="Mini Blog" rotate={-3} />
        <div style={{
          marginTop: 22, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4px 60px',
        }}>
          {[
            ['MAY 12', 'Why I rebuild my portfolio every year'],
            ['APR 03', 'A tiny pattern for animated layouts'],
            ['FEB 18', 'On being a self-taught engineer in 2026'],
            ['JAN 09', 'Notes on shipping calmly'],
          ].map(([d, t]) => (
            <div key={t} style={{
              display: 'flex', gap: 14, padding: '10px 0',
              borderBottom: `1px dashed ${NB.pencil}`, alignItems: 'baseline',
            }}>
              <Mono size={10} style={{ flex: '0 0 56px' }}>{d}</Mono>
              <HandLink style={{ flex: 1 }}><Hand size={23}>{t}</Hand></HandLink>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 16, textAlign: 'right' }}>
          <HandLink onClick={(e) => { e.preventDefault(); onNav('blog'); }}>
            <Hand size={24} color={NB.redInk}>all posts →</Hand>
          </HandLink>
        </div>
      </div>

      {/* --- CONTACT --- */}
      <div id="contact" style={{ padding: '70px 60px 50px', position: 'relative' }}>
        <Marker size={48}>Say hi.</Marker>
        <HandArrow direction="down-right" length={64}
          style={{ position: 'absolute', top: 76, left: 240, transform: 'rotate(-10deg)' }} />
        <Hand size={26} color={NB.inkSoft} style={{ display: 'block', marginTop: 4 }}>
          I'm always up for a chat about code, the web, or weird projects.
        </Hand>
        <div style={{ marginTop: 30, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
          <DContactSticky color={NB.yellow} rot={-3} icon="✉" label="ashwin@placeholder.dev" sub="email" />
          <DContactSticky color={NB.pink} rot={2} icon="GH" label="github.com/ashwinkv" sub="code" />
          <DContactSticky color={NB.blue} rot={1.5} icon="in" label="linkedin/ashwinkv" sub="work" />
          <DContactSticky color={NB.green} rot={-2} icon="𝕏" label="@ashwinkv" sub="thoughts" />
        </div>

        <div style={{
          marginTop: 40, paddingTop: 20, borderTop: `1.5px dashed ${NB.pencil}`,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        }}>
          <Mono size={10} color={NB.pencil}>© 2026 ashwin kv — built by hand, scribbled with love.</Mono>
          <Hand size={22} color={NB.pencil}>— end of page ✦</Hand>
        </div>
      </div>
    </GridPaper>
  );
}

// ---------- Desktop helpers ----------
function DSection({ title, children, rotate = -2 }) {
  return (
    <div>
      <div style={{ display: 'inline-block' }}>
        <StickyNote color={NB.yellow} rotate={rotate}
          style={{ display: 'inline-block', padding: '6px 18px 10px' }}>
          <Marker size={34}>{title}</Marker>
        </StickyNote>
      </div>
      {children && <div style={{ marginTop: 22 }}>{children}</div>}
    </div>
  );
}

function DExpRow({ year, role, place, desc }) {
  return (
    <div style={{ display: 'flex', gap: 18, marginBottom: 18 }}>
      <div style={{ flex: '0 0 90px', paddingTop: 4 }}>
        <Mono size={10}>{year}</Mono>
      </div>
      <div style={{ flex: 1 }}>
        <Hand size={26} weight={600} style={{ display: 'block', lineHeight: 1.2 }}>{role}</Hand>
        <Hand size={22} color={NB.pencil} style={{ display: 'block', marginTop: -2 }}>{place}</Hand>
        <Hand size={22} color={NB.inkSoft} style={{ display: 'block', marginTop: 2 }}>{desc}</Hand>
      </div>
    </div>
  );
}

function DProjectCard({ title, tag, desc }) {
  return (
    <div style={{
      position: 'relative', padding: '20px 22px 22px', minHeight: 150,
      transition: 'transform .25s',
    }}
      onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px) rotate(-0.4deg)'}
      onMouseLeave={(e) => e.currentTarget.style.transform = ''}
    >
      <HandBox width={380} height={156} rounded
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} />
      <div style={{ position: 'relative' }}>
        <Mono size={10}>{tag}</Mono>
        <Hand size={32} weight={600} style={{ display: 'block', marginTop: 2 }}>{title}</Hand>
        <Hand size={22} color={NB.inkSoft} style={{ display: 'block', marginTop: 4 }}>{desc}</Hand>
      </div>
    </div>
  );
}

function DContactSticky({ color, rot, icon, label, sub }) {
  return (
    <StickyNote color={color} rotate={rot} style={{ padding: '14px 16px 18px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <span style={{
          fontFamily: '"Caveat", cursive', fontSize: 22, fontWeight: 700,
          width: 34, height: 34, borderRadius: '50%',
          background: 'rgba(0,0,0,0.08)',
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        }}>{icon}</span>
        <div>
          <Mono size={9}>{sub}</Mono>
          <Hand size={20} style={{ display: 'block' }}>{label}</Hand>
        </div>
      </div>
    </StickyNote>
  );
}

// ============ DESKTOP PROJECTS ============
function DesktopProjects({ onBack, onOpenProject = () => {} }) {
  const projects = [
    { id: 'lumen', title: 'Lumen Notes', tag: 'Web app · 2024', logo: NB.yellow,
      desc: 'A minimal notes editor with markdown + sync. My main side project — local-first, fast, almost no UI.',
      stack: ['React', 'TS', 'IndexedDB', 'CRDT'] },
    { id: 'tide', title: 'Tide', tag: 'Library · 2023', logo: NB.pink,
      desc: 'A tiny state machine for React, ~1kb gzipped with full TS types.',
      stack: ['TypeScript', 'Rollup'] },
    { id: 'grain', title: 'grain.css', tag: 'CSS · 2023', logo: NB.blue,
      desc: 'One file, ambient noise textures for any element. Drop-in.',
      stack: ['CSS', 'SVG'] },
    { id: 'kite', title: 'Kite', tag: 'CLI · 2022', logo: NB.green,
      desc: 'A small CLI to scaffold component folders the way I like them.',
      stack: ['Node', 'TS'] },
    { id: 'plume', title: 'Plume', tag: 'Web · 2022', logo: NB.yellow,
      desc: 'Pull-quote generator. Renders SVGs you can paste anywhere.',
      stack: ['SvelteKit', 'SVG'] },
    { id: 'foglight', title: 'Foglight', tag: 'Dev tool · 2021', logo: NB.pink,
      desc: 'Extension that highlights console errors in your editor in real time.',
      stack: ['MV3', 'WebSocket'] },
  ];
  const rots = [-0.5, 0.4, -0.3, 0.5, -0.4, 0.3];
  return (
    <GridPaper size={26} style={{ width: DW, minHeight: 950, overflow: 'hidden' }}>
      <DDetailHeader title="Projects." onBack={onBack} />
      <div style={{ padding: '24px 60px 60px' }}>
        <Hand size={24} color={NB.inkSoft} style={{ display: 'block', marginBottom: 22 }}>
          Things I've built. Most are placeholders — drop your real work in.
        </Hand>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {projects.map((p, i) => (
            <a key={p.id} href="#" onClick={(e) => { e.preventDefault(); onOpenProject(p.id); }}
              style={{
                textDecoration: 'none', color: 'inherit', display: 'block',
                position: 'relative', padding: '20px 22px 22px',
                transform: `rotate(${rots[i]}deg)`,
                transition: 'transform .25s',
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'rotate(0deg) translateY(-3px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = `rotate(${rots[i]}deg)`}
            >
              <HandBox width={372} height={206} rounded
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} />
              <div style={{ position: 'relative' }}>
                <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
                  <DProjectLogo color={p.logo} letter={p.title[0]} size={56}
                    rot={i % 2 === 0 ? -4 : 4} />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <Mono size={10}>{p.tag}</Mono>
                    <Hand size={28} weight={600} style={{ display: 'block', lineHeight: 1.1, marginTop: 0 }}>
                      {p.title}
                    </Hand>
                  </div>
                </div>
                <Hand size={20} color={NB.inkSoft} style={{ display: 'block', marginTop: 10 }}>
                  {p.desc}
                </Hand>
                <div style={{ display: 'flex', gap: 6, marginTop: 10, flexWrap: 'wrap' }}>
                  {p.stack.map((s) => (
                    <span key={s} style={{
                      fontFamily: '"JetBrains Mono", monospace', fontSize: 10,
                      padding: '1px 7px',
                      border: `1px solid ${NB.pencil}`, borderRadius: 3,
                      color: NB.pencil,
                    }}>{s}</span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </GridPaper>
  );
}

function DProjectLogo({ color = NB.yellow, letter = '?', size = 56, rot = -4 }) {
  return (
    <div style={{
      flex: '0 0 auto',
      width: size, height: size,
      background: color, borderRadius: 10,
      transform: `rotate(${rot}deg)`,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      boxShadow: '0 2px 5px rgba(0,0,0,0.14), inset 0 -2px 5px rgba(0,0,0,0.07)',
    }}>
      <span style={{
        fontFamily: '"Permanent Marker", cursive',
        fontSize: size * 0.55, color: NB.ink, lineHeight: 1,
      }}>{letter}</span>
    </div>
  );
}

// ============ DESKTOP GALLERY ============
function DesktopGallery({ onBack }) {
  const items = Array.from({ length: 16 }).map((_, i) => ({
    id: i,
    h: [160, 220, 180, 240, 170, 200, 230, 190, 210, 170, 200, 180, 220, 180, 200, 170][i],
    rot: [-2, 1.5, -1, 2, -1.5, 1, -2.5, 0.8, -1.2, 1.8, -1, 2, -0.8, 1.4, -1.8, 1.2][i],
    label: `shot ${String(i + 1).padStart(2, '0')}`,
  }));
  // 4 columns
  const cols = [[], [], [], []];
  items.forEach((it, i) => cols[i % 4].push(it));
  return (
    <GridPaper size={26} style={{ width: DW, minHeight: 1400, overflow: 'hidden' }}>
      <DDetailHeader title="Gallery." onBack={onBack} />
      <div style={{ padding: '20px 60px 60px' }}>
        <Hand size={24} color={NB.inkSoft} style={{ display: 'block', marginBottom: 22 }}>
          Photos, screenshots, sketches. A pinboard of stuff I like.
        </Hand>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18 }}>
          {cols.map((col, ci) => (
            <div key={ci} style={{ display: 'grid', gap: 18, marginTop: ci % 2 === 0 ? 0 : 22 }}>
              {col.map((it) => (
                <PhotoCutout key={it.id} width="100%" height={it.h} rotate={it.rot}
                  label={it.label} style={{ width: '100%' }} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </GridPaper>
  );
}

// ============ DESKTOP BLOG ============
function DesktopBlog({ onBack }) {
  const posts = [
    { d: 'MAY 12, 2026', title: 'Why I rebuild my portfolio every year',
      tag: 'meta', read: '4 min', excerpt: 'Every year my taste shifts a little, and the old portfolio stops feeling like me. Rebuilding is part design exercise, part journaling — here\'s how I think about it.' },
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
  const [featured, ...rest] = posts;
  return (
    <GridPaper size={26} style={{ width: DW, minHeight: 1400, overflow: 'hidden' }}>
      <DDetailHeader title="Blog." onBack={onBack} />
      <div style={{ padding: '20px 60px 60px' }}>
        <Hand size={24} color={NB.inkSoft} style={{ display: 'block', marginBottom: 8 }}>
          Notes I write to myself, mostly. About code, design, and shipping.
        </Hand>
        <div style={{ display: 'flex', gap: 10, marginBottom: 24, flexWrap: 'wrap' }}>
          {['all', 'css', 'react', 'design', 'career', 'meta', 'process'].map((t, i) => (
            <span key={t} style={{
              fontFamily: '"Caveat", cursive', fontSize: 22,
              padding: '1px 12px',
              background: i === 0 ? NB.yellow : 'transparent',
              border: i === 0 ? 'none' : `1.5px solid ${NB.pencil}`,
              borderRadius: 999,
              transform: `rotate(${[-1, 1, -0.5, 1, -1, 0.5, -0.8][i]}deg)`,
            }}>#{t}</span>
          ))}
        </div>

        {/* Featured post */}
        <div style={{ position: 'relative', padding: '24px 28px 28px', marginBottom: 30 }}>
          <HandBox width={1160} height={196} rounded strokeWidth={2.4}
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} />
          <div style={{ position: 'relative' }}>
            <div style={{ display: 'flex', gap: 10, alignItems: 'baseline' }}>
              <StickyNote color={NB.yellow} rotate={-3} style={{ display: 'inline-block', padding: '0 8px' }}>
                <Hand size={18} weight={700}>★ latest</Hand>
              </StickyNote>
              <Mono size={10}>{featured.d}</Mono>
              <Mono size={10}>#{featured.tag}</Mono>
              <Mono size={10} color={NB.pencil}>{featured.read} read</Mono>
            </div>
            <HandLink>
              <Hand size={36} weight={600} style={{ display: 'block', marginTop: 6 }}>{featured.title}</Hand>
            </HandLink>
            <Hand size={22} color={NB.inkSoft} style={{ display: 'block', marginTop: 6, maxWidth: 900 }}>
              {featured.excerpt}
            </Hand>
          </div>
        </div>

        {/* Rest — 2 columns */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: 60 }}>
          {rest.map((p, i) => (
            <div key={i} style={{
              padding: '14px 4px',
              borderBottom: `1px dashed ${NB.pencil}`,
            }}>
              <div style={{ display: 'flex', gap: 14, alignItems: 'baseline' }}>
                <Mono size={10} style={{ flex: '0 0 88px' }}>{p.d}</Mono>
                <div style={{ flex: 1 }}>
                  <HandLink><Hand size={24} weight={600}>{p.title}</Hand></HandLink>
                  <div style={{ marginTop: 2, display: 'flex', gap: 10 }}>
                    <Mono size={10}>#{p.tag}</Mono>
                    <Mono size={10} color={NB.pencil}>{p.read} read</Mono>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </GridPaper>
  );
}

// ============ DESKTOP CASE STUDY ============
function DesktopCaseStudy({ onBack, projectId = 'lumen' }) {
  return (
    <GridPaper size={26} style={{ width: DW, minHeight: 1800, overflow: 'hidden' }}>
      <DDetailHeader title="Case Study." onBack={onBack} />
      <div style={{ padding: '24px 60px 60px' }}>
        {/* Title block */}
        <Mono size={10} color={NB.red} style={{ display: 'block', marginBottom: 6 }}>
          PROJECT · 2024
        </Mono>
        <Marker size={84} style={{ display: 'block', lineHeight: 1 }}>Lumen Notes.</Marker>
        <Hand size={30} color={NB.inkSoft} style={{ display: 'block', marginTop: 4 }}>
          A minimal notes editor with markdown + sync.
        </Hand>

        {/* Hero image */}
        <div style={{ marginTop: 24 }}>
          <PhotoCutout width="100%" height={380} rotate={-1}
            label="hero screenshot" style={{ width: '100%' }} />
        </div>

        {/* Meta strip */}
        <div style={{
          marginTop: 28, padding: '16px 22px',
          border: `1.8px solid ${NB.ink}`,
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14,
        }}>
          <DMeta k="ROLE" v="Solo · design + code" />
          <DMeta k="STACK" v="React · TS · CRDT" />
          <DMeta k="TIME" v="6 months · ongoing" />
          <DMeta k="STATUS" v="Live · users daily" />
        </div>

        {/* Two-col content blocks */}
        <div style={{ marginTop: 36 }}>
          <DCSRow label="overview" color={NB.yellow} rot={-2}>
            I'd been searching for a notes app that didn't get in the way. Most are too heavy,
            too cloud, too "smart". I wanted something that felt like writing in a paper notebook,
            but synced across devices — and I figured I might as well build it.
          </DCSRow>

          <DCSRow label="the problem" color={NB.pink} rot={2}>
            Existing apps have <Highlight>three problems</Highlight>: they're slow to open, they
            require accounts, and they distract you with formatting before you've written anything.
          </DCSRow>

          <DCSRow label="approach" color={NB.blue} rot={-1.5}>
            <ol style={{ margin: 0, paddingLeft: 28 }}>
              <li><Hand size={24}>Local-first storage in IndexedDB.</Hand></li>
              <li><Hand size={24}>Optional sync via CRDTs — no account needed.</Hand></li>
              <li><Hand size={24}>Markdown rendered live, no toolbar.</Hand></li>
              <li><Hand size={24}>Open in &lt; 200ms cold.</Hand></li>
            </ol>
          </DCSRow>

          {/* Process gallery */}
          <div style={{ marginTop: 36 }}>
            <Marker size={28}>process shots</Marker>
            <HandUnderline width={140} style={{ marginTop: 2 }} />
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18, marginTop: 16,
            }}>
              {[ -1.5, 1, -2, 1.5 ].map((r, i) => (
                <PhotoCutout key={i} width="100%" height={200} rotate={r}
                  label={`v.${i + 1}`} style={{ width: '100%' }} />
              ))}
            </div>
          </div>

          <DCSRow label="outcome" color={NB.green} rot={1.5}>
            Shipped in Feb 2024. ~2,800 weekly users. I use it myself every day, which was always the point.
            <div style={{ marginTop: 14, display: 'flex', gap: 28 }}>
              <DStat n="2.8k" l="weekly users" />
              <DStat n="180ms" l="cold open" />
              <DStat n="100%" l="my notes" />
            </div>
          </DCSRow>
        </div>

        <div style={{
          marginTop: 40, paddingTop: 20, borderTop: `1.5px dashed ${NB.pencil}`,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        }}>
          <HandLink onClick={(e) => { e.preventDefault(); onBack(); }}>
            <Hand size={24} color={NB.redInk}>← back to projects</Hand>
          </HandLink>
          <HandLink href="#"><Hand size={24} color={NB.redInk}>next project →</Hand></HandLink>
        </div>
      </div>
    </GridPaper>
  );
}

// ---------- Desktop detail helpers ----------
function DDetailHeader({ title, onBack = () => {} }) {
  return (
    <div style={{
      padding: '20px 60px 16px',
      borderBottom: `1.8px dashed ${NB.pencil}`,
      display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
    }}>
      <div>
        <HandLink onClick={(e) => { e.preventDefault(); onBack(); }}>
          <Hand size={22} color={NB.pencil}>← back to home</Hand>
        </HandLink>
        <Marker size={60} style={{ display: 'block', marginTop: 2 }}>{title}</Marker>
      </div>
      <Mono size={11} style={{ paddingBottom: 10 }}>ashwin.kv / portfolio.2026</Mono>
    </div>
  );
}

function DMeta({ k, v }) {
  return (
    <div>
      <Mono size={10}>{k}</Mono>
      <Hand size={22} style={{ display: 'block' }}>{v}</Hand>
    </div>
  );
}

function DCSRow({ label, color, rot, children }) {
  return (
    <div style={{ marginTop: 32, display: 'grid', gridTemplateColumns: '220px 1fr', gap: 30, alignItems: 'flex-start' }}>
      <div>
        <StickyNote color={color} rotate={rot} style={{ display: 'inline-block', padding: '4px 16px 8px' }}>
          <Marker size={28}>{label}</Marker>
        </StickyNote>
      </div>
      <div style={{ paddingTop: 6, maxWidth: 880 }}>
        <Hand size={24} color={NB.ink}>{children}</Hand>
      </div>
    </div>
  );
}

function DStat({ n, l }) {
  return (
    <div>
      <Marker size={36} color={NB.redInk}>{n}</Marker>
      <Mono size={10} style={{ display: 'block' }}>{l}</Mono>
    </div>
  );
}

Object.assign(window, { DesktopHome, DesktopProjects, DesktopGallery, DesktopBlog, DesktopCaseStudy });
