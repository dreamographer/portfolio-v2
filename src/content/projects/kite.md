---
order: 4
title: "Kite"
tag: "CLI · 2022"
year: "2022"
logoColor: "green"
summary: "A small CLI to scaffold component folders the way I like them."
stack: ["Node", "TS"]
featured: false
subtitle: "A small CLI to scaffold component folders the way I like them."
caseStudy:
  role: "Solo · tooling"
  stackLabel: "Node · TypeScript"
  time: "1 month"
  status: "Personal use · open source"
  overview: "Every project starts the same way for me: create a component folder, add an index file, a styles file, a test file, and a stories file. After doing this hundreds of times I wrote a two-command scaffold tool."
  problem: "Code generation tools like Plop and Hygen are powerful but require config files and templates to maintain. I wanted something opinionated with zero config — just run `kite Button` and get a ready-to-use component folder."
  approach:
    - "Parse a single component name argument."
    - "Detect project stack (React/Vue/Svelte) from package.json."
    - "Write files from embedded templates — no template directory needed."
    - "Print a summary of created files on success."
  outcome: "Used on every project since. Saves ~3 minutes of boilerplate per component. A handful of colleagues have adopted it too."
  stats:
    - { n: "3min", label: "saved/component" }
    - { n: "0", label: "config files" }
    - { n: "5", label: "file types" }
  processShots: 4
---
