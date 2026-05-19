// Home (mobile) — "Classic notebook page" with hero + contact ported from
// the sticky-note variant. Mobile portrait, 390 wide.

function HomeA({ onNav = () => {} }) {
  return (
    <GridPaper size={22} style={{ width: 390, minHeight: 2420, overflow: 'hidden' }}>
      {/* Torn-paper top edge accent */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 4,
        background: 'repeating-linear-gradient(90deg, transparent 0 8px, rgba(0,0,0,0.04) 8px 10px)',
      }} />

      {/* --- Hero (sticky-note variant) --- */}
      <div style={{ padding: '32px 20px 0', position: 'relative' }}>
        <Mono size={9} style={{ display: 'block', marginBottom: 10 }}>// portfolio.2026 — ashwin.kv</Mono>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
          <div style={{ flex: 1 }}>
            <Marker size={44}>hi, I'm</Marker>
            <Marker size={58} color={NB.redInk} style={{ display: 'block', marginTop: -4 }}>Ashwin</Marker>
            <Hand size={22} style={{ display: 'block', marginTop: 4 }}>
              a <Highlight>senior frontend engineer</Highlight>,
            </Hand>
            <Hand size={22} style={{ display: 'block' }}>
              <Highlight color={NB.pink}>self-taught</Highlight> & building for the web.
            </Hand>
          </div>
          <div style={{ position: 'relative', marginTop: 4 }}>
            {/* Washi tape strips */}
            <div style={{
              position: 'absolute', top: -8, left: -10, width: 50, height: 16,
              background: 'rgba(255, 228, 92, 0.7)',
              transform: 'rotate(-22deg)', zIndex: 2,
              boxShadow: '0 1px 2px rgba(0,0,0,0.06)',
              backgroundImage: 'repeating-linear-gradient(90deg, transparent 0 4px, rgba(0,0,0,0.06) 4px 5px)',
            }} />
            <div style={{
              position: 'absolute', bottom: 18, right: -12, width: 50, height: 14,
              background: 'rgba(255, 201, 212, 0.75)',
              transform: 'rotate(16deg)', zIndex: 2,
              boxShadow: '0 1px 2px rgba(0,0,0,0.06)',
            }} />
            <PhotoCutout width={120} height={150} rotate={-4} label="your photo" />
          </div>
        </div>
        <div style={{ display: 'flex', gap: 8, marginTop: 16, flexWrap: 'wrap' }}>
          {['self-taught', 'curious', 'fast', 'kind', 'detail-obsessed'].map((t, i) => (
            <span key={t} style={{
              fontFamily: '"Caveat", cursive', fontSize: 17,
              padding: '1px 8px',
              border: `1.5px solid ${NB.ink}`,
              borderRadius: 999,
              transform: `rotate(${[-2, 1, -1, 2, -1.5][i]}deg)`,
              background: NB.paper,
            }}>· {t} ·</span>
          ))}
        </div>
      </div>

      {/* --- Bio --- */}
      <div style={{ padding: '34px 22px 0', position: 'relative' }}>
        <div style={{ display: 'inline-block', position: 'relative' }}>
          <StickyNote color={NB.yellow} rotate={-3} style={{ display: 'inline-block', padding: '4px 14px 8px' }}>
            <Marker size={26}>Personal Bio</Marker>
          </StickyNote>
        </div>
        <div style={{ marginTop: 14, padding: '0 4px' }}>
          <Hand size={20} color={NB.ink}>
            I write code for the web. I care about fast pages, calm
            interfaces, and details that make people smile. Mostly
            self-taught — the internet was my classroom.
          </Hand>
        </div>
        <HandUnderline width={120} style={{ marginTop: 12, marginLeft: 4 }} />
      </div>

      {/* --- Experience --- */}
      <Section title="Experience" rotate={2} top={28}>
        <ExpRow year="2023 / NOW" role="Senior Frontend Engineer" place="@ Placeholder Co."
          desc="Leading the design system & shipping the next-gen dashboard." />
        <ExpRow year="2021 / 2023" role="Frontend Engineer" place="@ Another Co."
          desc="Built customer-facing pages, A/B framework, and internal tooling." />
        <ExpRow year="2019 / 2021" role="Junior Developer" place="@ First Job"
          desc="Cut my teeth on HTML/CSS, jQuery → React. Many late-night fixes." />
      </Section>

      {/* --- Education --- */}
      <Section title="Education" rotate={-2} top={20}>
        <ExpRow year="2024" role="Self-taught" place="The internet"
          desc="freeCodeCamp, MDN, every YouTube tutorial there was." />
        <ExpRow year="2019" role="B.Sc. Computer Science" place="@ Some University"
          desc="GPA: 3.6 — placeholder; replace with your actual school." />
      </Section>

      {/* --- Skills --- */}
      <Section title="Good At" rotate={3} top={22}>
        <ul style={{ margin: 0, padding: '0 0 0 18px', listStyle: 'none' }}>
          {['React, Next.js, TypeScript', 'CSS, animation, motion',
            'Design systems & components', 'Performance & accessibility',
            'Node.js, REST, GraphQL', 'Talking to humans about code']
            .map((s, i) => (
              <li key={i} style={{ display: 'flex', gap: 8, marginBottom: 4 }}>
                <Doodle kind="check" size={16} color={NB.red} style={{ marginTop: 6, flexShrink: 0 }} />
                <Hand size={19}>{s}</Hand>
              </li>
            ))}
        </ul>
      </Section>

      {/* --- Featured projects --- */}
      <Section title="Featured Work" rotate={-1.5} top={24}>
        <ProjectCard title="Lumen Notes" tag="Web app · 2024"
          desc="A minimal notes editor with markdown + sync. My main side project." />
        <ProjectCard title="Tide" tag="Library · 2023"
          desc="Tiny state machine for React. ~1kb, full TS types." />
        <ProjectCard title="grain.css" tag="CSS · 2023"
          desc="One file, ambient noise textures for any element." />
        <div style={{ marginTop: 14, textAlign: 'right' }}>
          <HandLink onClick={(e) => { e.preventDefault(); onNav('projects'); }}>
            <Hand size={20} color={NB.redInk}>see all projects →</Hand>
          </HandLink>
        </div>
      </Section>

      {/* --- Gallery preview --- */}
      <Section title="Gallery" rotate={2} top={20}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 10, marginTop: 4 }}>
          {[ -2, 1.5, -1, 2.5 ].map((r, i) => (
            <PhotoCutout key={i} width="100%" height={110} rotate={r}
              label={`shot ${i + 1}`} style={{ width: '100%' }} />
          ))}
        </div>
        <div style={{ marginTop: 14, textAlign: 'right' }}>
          <HandLink onClick={(e) => { e.preventDefault(); onNav('gallery'); }}>
            <Hand size={20} color={NB.redInk}>open gallery →</Hand>
          </HandLink>
        </div>
      </Section>

      {/* --- Blog --- */}
      <Section title="Mini Blog" rotate={-3} top={22}>
        <BlogRow date="MAY 12" title="Why I rebuild my portfolio every year" />
        <BlogRow date="APR 03" title="A tiny pattern for animated layouts" />
        <BlogRow date="FEB 18" title="On being a self-taught engineer in 2026" />
        <BlogRow date="JAN 09" title="Notes on shipping calmly" />
        <div style={{ marginTop: 12, textAlign: 'right' }}>
          <HandLink onClick={(e) => { e.preventDefault(); onNav('blog'); }}>
            <Hand size={20} color={NB.redInk}>all posts →</Hand>
          </HandLink>
        </div>
      </Section>

      {/* --- Contact (sticky-note variant) --- */}
      <div style={{ padding: '36px 20px 40px', position: 'relative' }}>
        <Marker size={32}>Say hi.</Marker>
        <HandArrow direction="down-right" length={50}
          style={{ position: 'absolute', top: 32, left: 120, transform: 'rotate(-10deg)' }} />
        <div style={{ marginTop: 28, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          <ContactSticky color={NB.yellow} rot={-3} icon="✉" label="ashwin@placeholder.dev" />
          <ContactSticky color={NB.pink} rot={2} icon="GH" label="github.com/ashwinkv" />
          <ContactSticky color={NB.blue} rot={1.5} icon="in" label="linkedin/ashwinkv" />
          <ContactSticky color={NB.green} rot={-2} icon="𝕏" label="@ashwinkv" />
        </div>
        <div style={{ marginTop: 28, textAlign: 'center' }}>
          <Mono size={9}>thanks for scrolling ✦</Mono>
        </div>
      </div>
    </GridPaper>
  );
}

function ContactSticky({ color, rot, icon, label }) {
  return (
    <StickyNote color={color} rotate={rot} style={{ padding: '10px 12px 12px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{
          fontFamily: '"Caveat", cursive', fontSize: 18, fontWeight: 700,
          width: 24, height: 24, borderRadius: '50%',
          background: 'rgba(0,0,0,0.08)',
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        }}>{icon}</span>
        <Hand size={17}>{label}</Hand>
      </div>
    </StickyNote>
  );
}

// ---------- Section wrapper (sticky-note title + content) ----------
function Section({ title, children, rotate = -2, top = 24, color = NB.yellow }) {
  return (
    <div style={{ padding: `${top}px 22px 0`, position: 'relative' }}>
      <div style={{ display: 'inline-block', position: 'relative' }}>
        <StickyNote color={color} rotate={rotate}
          style={{ display: 'inline-block', padding: '4px 14px 8px' }}>
          <Marker size={26}>{title}</Marker>
        </StickyNote>
      </div>
      <div style={{ marginTop: 14 }}>{children}</div>
    </div>
  );
}

function ExpRow({ year, role, place, desc }) {
  return (
    <div style={{ display: 'flex', gap: 12, marginBottom: 14, padding: '0 4px' }}>
      <div style={{ flex: '0 0 64px', paddingTop: 2 }}>
        <Mono size={9}>{year}</Mono>
      </div>
      <div style={{ flex: 1 }}>
        <Hand size={20} weight={600} style={{ display: 'block', lineHeight: 1.2 }}>{role}</Hand>
        <Hand size={17} color={NB.pencil} style={{ display: 'block', marginTop: -2 }}>{place}</Hand>
        <Hand size={17} color={NB.inkSoft} style={{ display: 'block', marginTop: 2 }}>{desc}</Hand>
      </div>
    </div>
  );
}

function ProjectCard({ title, tag, desc }) {
  return (
    <div style={{ position: 'relative', padding: '10px 12px 12px 14px', marginBottom: 12 }}>
      <HandBox width={344} height={84} rounded
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} />
      <div style={{ position: 'relative' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
          <Hand size={22} weight={600}>{title}</Hand>
          <Mono size={9}>{tag}</Mono>
        </div>
        <Hand size={17} color={NB.inkSoft} style={{ display: 'block', marginTop: 2 }}>{desc}</Hand>
      </div>
    </div>
  );
}

function BlogRow({ date, title }) {
  return (
    <div style={{ display: 'flex', gap: 10, padding: '6px 4px',
      borderBottom: `1px dashed ${NB.pencil}`, alignItems: 'baseline' }}>
      <Mono size={9} style={{ flex: '0 0 50px' }}>{date}</Mono>
      <HandLink style={{ flex: 1 }}>
        <Hand size={19}>{title}</Hand>
      </HandLink>
    </div>
  );
}

Object.assign(window, { HomeA });
