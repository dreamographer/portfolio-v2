// Shared notebook primitives — grid paper, sticky notes, photo cutout,
// hand-drawn arrows/underlines/boxes, marker headings, highlight strokes.
// All components export to window so other Babel scripts can use them.

const NB = {
  paper: '#fbfaf5',
  ink: '#1a1a1a',
  inkSoft: '#2a2a2a',
  pencil: '#5a5a5a',
  grid: 'rgba(60, 90, 180, 0.085)',
  gridStrong: 'rgba(60, 90, 180, 0.14)',
  yellow: '#ffe45c',
  yellowDeep: '#ffd633',
  pink: '#ffc9d4',
  blue: '#bcdfff',
  green: '#c6efb0',
  red: 'oklch(0.58 0.19 25)',
  redInk: 'oklch(0.48 0.18 25)',
};

// ---------- Grid paper backdrop ----------
function GridPaper({ children, size = 22, strong = false, style = {} }) {
  const c = strong ? NB.gridStrong : NB.grid;
  return (
    <div
      style={{
        background: `
          linear-gradient(${c} 1px, transparent 1px) 0 0 / ${size}px ${size}px,
          linear-gradient(90deg, ${c} 1px, transparent 1px) 0 0 / ${size}px ${size}px,
          ${NB.paper}
        `,
        position: 'relative',
        ...style,
      }}>
      {children}
    </div>
  );
}

// ---------- Sticky note (tilted, with drop shadow) ----------
function StickyNote({
  children, color = NB.yellow, rotate = -2, style = {}, peel = true, inline = false,
}) {
  const cls = peel ? 'nb-sticky nb-sticky-peel' : 'nb-sticky';
  return (
    <span
      className={cls}
      style={{
        background: color,
        transform: `rotate(${rotate}deg)`,
        display: inline ? 'inline-block' : 'block',
        ...style,
      }}>
      <span className="nb-sticky-inner">{children}</span>
    </span>
  );
}

// ---------- Highlighter swipe (under or behind text) ----------
function Highlight({ children, color = NB.yellow, height = '0.7em', y = '0.15em' }) {
  return (
    <span style={{
      backgroundImage: `linear-gradient(${color}, ${color})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: `0 ${y}`,
      backgroundSize: `100% ${height}`,
      padding: '0 2px',
    }}>{children}</span>
  );
}

// ---------- Hand-drawn underline (SVG, slightly wavy) ----------
function HandUnderline({ width = 120, color = NB.ink, strokeWidth = 2.5, style = {} }) {
  // Three slightly-different paths, randomly pick one per mount.
  const paths = [
    'M2,7 C30,4 60,9 90,5 C110,3 130,8 158,5',
    'M2,6 C25,9 55,3 85,7 C115,11 140,4 158,8',
    'M2,8 C35,5 65,11 95,6 C125,2 145,9 158,5',
  ];
  const p = paths[Math.floor(Math.random() * paths.length)];
  return (
    <svg viewBox="0 0 160 12" width={width} height={width * 12 / 160}
      style={{ display: 'block', overflow: 'visible', ...style }}>
      <path d={p} fill="none" stroke={color} strokeWidth={strokeWidth}
        strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ---------- Hand-drawn arrow ----------
function HandArrow({
  direction = 'down', length = 80, color = NB.ink, strokeWidth = 2.2,
  curve = 0.5, style = {},
}) {
  // direction: 'down','up','left','right','down-left','down-right','up-left','up-right'
  const w = 80, h = 80;
  // Stem curves, ends with arrowhead
  const arrows = {
    down: `M40,8 C${40 + curve * 30},30 ${40 - curve * 30},50 40,70 M30,60 L40,72 L50,60`,
    up: `M40,72 C${40 + curve * 30},50 ${40 - curve * 30},30 40,10 M30,20 L40,8 L50,20`,
    left: `M72,40 C50,${40 + curve * 30} 30,${40 - curve * 30} 10,40 M20,30 L8,40 L20,50`,
    right: `M8,40 C30,${40 + curve * 30} 50,${40 - curve * 30} 72,40 M60,30 L72,40 L60,50`,
    'down-right': `M10,10 C30,30 50,30 68,68 M58,60 L70,72 L60,58`,
    'down-left': `M70,10 C50,30 30,30 12,68 M22,60 L10,72 L20,58`,
    'up-right': `M10,70 C30,50 50,50 68,12 M58,22 L70,10 L60,12`,
    'up-left': `M70,70 C50,50 30,50 12,12 M22,12 L10,10 L20,22`,
  };
  return (
    <svg viewBox="0 0 80 80" width={length} height={length}
      style={{ display: 'block', overflow: 'visible', ...style }}>
      <path d={arrows[direction]} fill="none" stroke={color} strokeWidth={strokeWidth}
        strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ---------- Hand-drawn box / circle outline ----------
function HandBox({
  width = 200, height = 100, color = NB.ink, strokeWidth = 2,
  rounded = false, dashed = false, style = {},
}) {
  // Slight imperfections in the corners
  const r = rounded ? 12 : 0;
  const w = width, h = height;
  const path = rounded
    ? `M${r + 3},2 L${w - r - 2},3 Q${w - 1},4 ${w - 2},${r + 3} L${w - 3},${h - r - 2} Q${w - 2},${h - 1} ${w - r - 3},${h - 2} L${r + 2},${h - 3} Q1,${h - 2} 3,${h - r - 2} L2,${r + 3} Q3,2 ${r + 3},2 Z`
    : `M3,2 L${w - 2},3 L${w - 3},${h - 2} L2,${h - 3} Z`;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width={w} height={h}
      style={{ display: 'block', overflow: 'visible', ...style }}>
      <path d={path} fill="none" stroke={color} strokeWidth={strokeWidth}
        strokeLinecap="round" strokeLinejoin="round"
        strokeDasharray={dashed ? '6 4' : 'none'} />
    </svg>
  );
}

// ---------- Photo cutout (placeholder w/ white border) ----------
function PhotoCutout({
  width = 130, height = 170, rotate = -3, label = 'drop photo',
  style = {}, src = null,
}) {
  return (
    <div className="nb-photo" style={{
      width, height, transform: `rotate(${rotate}deg)`,
      ...style,
    }}>
      <div className="nb-photo-inner">
        {src ? (
          <img src={src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        ) : (
          <div className="nb-photo-placeholder">
            <svg viewBox="0 0 100 130" style={{ width: '60%', height: '60%', opacity: 0.45 }}>
              <circle cx="50" cy="42" r="20" fill="none" stroke={NB.pencil} strokeWidth="2" />
              <path d="M15,125 C15,90 35,80 50,80 C65,80 85,90 85,125" fill="none"
                stroke={NB.pencil} strokeWidth="2" strokeLinecap="round" />
            </svg>
            <span style={{
              fontFamily: 'JetBrains Mono, monospace', fontSize: 9,
              color: NB.pencil, marginTop: 6, letterSpacing: 0.5,
            }}>{label}</span>
          </div>
        )}
      </div>
    </div>
  );
}

// ---------- Marker heading (Permanent Marker) ----------
function Marker({ children, size = 48, color = NB.ink, style = {} }) {
  return (
    <span style={{
      fontFamily: '"Permanent Marker", cursive',
      fontSize: size, color, lineHeight: 1.05, letterSpacing: 0.5,
      display: 'inline-block', ...style,
    }}>{children}</span>
  );
}

// ---------- Neat handwriting (Caveat) ----------
function Hand({ children, size = 18, color = NB.ink, weight = 500, style = {} }) {
  return (
    <span style={{
      fontFamily: '"Caveat", cursive',
      fontSize: size, color, lineHeight: 1.35, fontWeight: weight,
      ...style,
    }}>{children}</span>
  );
}

// ---------- Mono label (small caps style) ----------
function Mono({ children, size = 10, color = NB.pencil, style = {} }) {
  return (
    <span style={{
      fontFamily: '"JetBrains Mono", ui-monospace, monospace',
      fontSize: size, color, letterSpacing: 1.5, textTransform: 'uppercase',
      ...style,
    }}>{children}</span>
  );
}

// ---------- Doodle: little star / asterisk / squiggle ----------
function Doodle({ kind = 'star', size = 18, color = NB.red, style = {} }) {
  const paths = {
    star: 'M12,2 L14,9 L21,9 L15,13 L17,20 L12,16 L7,20 L9,13 L3,9 L10,9 Z',
    asterisk: 'M12,3 L12,21 M4,7 L20,17 M4,17 L20,7',
    plus: 'M12,4 L12,20 M4,12 L20,12',
    spark: 'M12,2 L13,11 L22,12 L13,13 L12,22 L11,13 L2,12 L11,11 Z',
    check: 'M4,12 L10,18 L20,5',
    heart: 'M12,21 C-4,11 4,1 12,8 C20,1 28,11 12,21 Z',
    arrow: 'M4,12 L20,12 M14,6 L20,12 L14,18',
    squiggle: 'M2,12 C5,4 8,20 12,12 C16,4 19,20 22,12',
  };
  return (
    <svg viewBox="0 0 24 24" width={size} height={size}
      style={{ display: 'inline-block', overflow: 'visible', ...style }}>
      <path d={paths[kind]} fill={kind === 'star' || kind === 'spark' || kind === 'heart' ? color : 'none'}
        stroke={color} strokeWidth={kind === 'star' || kind === 'spark' || kind === 'heart' ? 1.5 : 2.2}
        strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ---------- Hand-drawn link (underline appears on hover) ----------
function HandLink({ children, href = '#', color = NB.ink, onClick, style = {} }) {
  return (
    <a href={href} onClick={onClick} className="nb-link" style={{ color, ...style }}>
      <span>{children}</span>
    </a>
  );
}

// ---------- Inject one-time styles for sticky peel, photo, link underline ----------
(function injectStyles() {
  if (typeof document === 'undefined' || document.getElementById('nb-styles')) return;
  const s = document.createElement('style');
  s.id = 'nb-styles';
  s.textContent = `
    .nb-sticky {
      position: relative;
      padding: 10px 14px 12px;
      box-shadow:
        0 1px 1px rgba(0,0,0,0.08),
        0 6px 14px -4px rgba(0,0,0,0.18),
        inset 0 -8px 14px -10px rgba(0,0,0,0.15);
      transition: transform .35s cubic-bezier(.2,.7,.3,1), box-shadow .35s;
      will-change: transform;
      transform-origin: top left;
    }
    .nb-sticky::before {
      content: '';
      position: absolute;
      top: 0; left: 50%;
      width: 26px; height: 6px;
      background: rgba(0,0,0,0.06);
      transform: translateX(-50%);
      border-radius: 0 0 4px 4px;
    }
    .nb-sticky-peel:hover {
      transform: rotate(0deg) translateY(-3px) scale(1.03) !important;
      box-shadow:
        0 2px 2px rgba(0,0,0,0.10),
        0 18px 28px -8px rgba(0,0,0,0.28),
        inset 0 -8px 14px -10px rgba(0,0,0,0.15);
    }
    .nb-sticky-peel:hover::after {
      content: '';
      position: absolute;
      bottom: -1px; right: -1px;
      width: 22px; height: 22px;
      background: linear-gradient(135deg, transparent 50%, rgba(0,0,0,0.08) 50%, rgba(0,0,0,0.18) 100%);
      transform: rotate(0deg);
      transition: all .25s;
    }
    .nb-sticky-inner { display: block; position: relative; z-index: 1; }

    .nb-photo {
      background: #fff;
      padding: 8px 8px 32px;
      box-shadow:
        0 1px 0 rgba(0,0,0,0.06),
        0 10px 22px -8px rgba(0,0,0,0.30),
        0 2px 4px rgba(0,0,0,0.05);
      transition: transform .3s cubic-bezier(.2,.7,.3,1);
    }
    .nb-photo:hover { transform: rotate(0deg) scale(1.02) !important; }
    .nb-photo-inner {
      width: 100%; height: 100%;
      background: repeating-linear-gradient(
        135deg, #ededea 0 6px, #f4f3ef 6px 12px
      );
      display: flex; align-items: center; justify-content: center;
      overflow: hidden;
    }
    .nb-photo-placeholder {
      display: flex; flex-direction: column; align-items: center; justify-content: center;
      height: 100%; width: 100%;
    }

    /* Hand-drawn underline that draws on hover */
    .nb-link {
      position: relative;
      text-decoration: none;
      display: inline-block;
    }
    .nb-link::after {
      content: '';
      position: absolute;
      left: -2px; right: -2px;
      bottom: -3px;
      height: 8px;
      background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 160 8' preserveAspectRatio='none'><path d='M2,5 C30,2 60,7 90,3 C110,1 130,6 158,3' fill='none' stroke='%231a1a1a' stroke-width='2' stroke-linecap='round'/></svg>");
      background-size: 100% 100%;
      background-repeat: no-repeat;
      transform: scaleX(0);
      transform-origin: left center;
      transition: transform .35s cubic-bezier(.65,0,.35,1);
    }
    .nb-link:hover::after { transform: scaleX(1); }

    /* Smooth scroll */
    html, .nb-scroll-root { scroll-behavior: smooth; }

    /* Page enter/exit transitions */
    .nb-page-enter { animation: nbPageIn .45s cubic-bezier(.2,.7,.3,1) both; }
    @keyframes nbPageIn {
      from { opacity: 0; transform: translateY(12px) rotate(-0.4deg); }
      to   { opacity: 1; transform: translateY(0) rotate(0); }
    }
  `;
  document.head.appendChild(s);
})();

Object.assign(window, {
  NB, GridPaper, StickyNote, Highlight, HandUnderline, HandArrow, HandBox,
  PhotoCutout, Marker, Hand, Mono, Doodle, HandLink,
});
