---
order: 2
title: "Tide"
tag: "Library · 2023"
year: "2023"
logoColor: "pink"
summary: "Tiny state machine for React. ~1kb gzipped with full TS types. Used in production."
stack: ["TypeScript", "Rollup"]
featured: true
subtitle: "A tiny state machine for React, ~1kb gzipped with full TS types."
caseStudy:
  role: "Solo · design + code"
  stackLabel: "TypeScript · Rollup"
  time: "3 months"
  status: "Published · npm"
  overview: "I kept writing the same reducer patterns across projects — a simple states array, a transitions map, a current-state atom. Eventually I extracted it into a 60-line library that does exactly that and nothing else."
  problem: "XState is powerful but heavy for simple UI flows like multi-step forms or toggle menus. I wanted something that could be understood in two minutes and dropped in without a bundler cost."
  approach:
    - "Model state as a plain string union."
    - "Transitions declared as a record — no DSL, just an object."
    - "React hook that triggers a re-render only on state change."
    - "Zero runtime dependencies; types as the entire API surface."
  outcome: "Published to npm in Oct 2023. Used in three production apps. Bundle footprint is 980 bytes gzipped."
  stats:
    - { n: "980b", label: "gzipped" }
    - { n: "0", label: "dependencies" }
    - { n: "3", label: "prod apps" }
  processShots: 4
---
