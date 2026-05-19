---
order: 1
title: "Lumen Notes"
tag: "Web app · 2024"
year: "2024"
logoColor: "yellow"
summary: "A minimal notes editor with markdown + sync. My main side project — local-first, fast, almost no UI."
stack: ["React", "TS", "IndexedDB", "CRDT"]
featured: true
subtitle: "A minimal notes editor with markdown + sync."
caseStudy:
  role: "Solo · design + code"
  stackLabel: "React · TS · CRDT"
  time: "6 months · ongoing"
  status: "Live · users daily"
  overview: "I'd been searching for a notes app that didn't get in the way. Most are too heavy, too cloud, too 'smart'. I wanted something that felt like writing in a paper notebook, but synced across devices — and I figured I might as well build it."
  problem: "Existing apps have three problems: they're slow to open, they require accounts, and they distract you with formatting before you've written anything."
  approach:
    - "Local-first storage in IndexedDB."
    - "Optional sync via CRDTs — no account needed."
    - "Markdown rendered live, no toolbar."
    - "Open in < 200ms cold."
  outcome: "Shipped in Feb 2024. ~2,800 weekly users. I use it myself every day, which was always the point."
  stats:
    - { n: "2.8k", label: "weekly users" }
    - { n: "180ms", label: "cold open" }
    - { n: "100%", label: "my notes" }
  processShots: 4
---
