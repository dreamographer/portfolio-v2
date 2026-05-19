---
order: 3
title: "grain.css"
tag: "CSS · 2023"
year: "2023"
logoColor: "blue"
summary: "One file, ambient noise textures for any element. Pure CSS, no JS. Drop-in."
stack: ["CSS", "SVG"]
featured: true
subtitle: "One file, ambient noise textures for any element."
caseStudy:
  role: "Solo · design"
  stackLabel: "CSS · SVG"
  time: "2 weeks"
  status: "Published · open source"
  overview: "I love the texture of paper and physical media. Most CSS resets strip everything flat. I wanted a single stylesheet I could drop into any project to add a subtle grain layer — like linen behind digital UI."
  problem: "CSS noise techniques usually need a pre-generated PNG texture or a canvas element. That means an extra file, a JS dependency, or both. There had to be a pure-CSS way."
  approach:
    - "Use an inline SVG feTurbulence filter as a data URI background."
    - "Single CSS custom property controls grain intensity."
    - "Works on any element — card, body, image overlay."
    - "One stylesheet, no build step required."
  outcome: "Released Jan 2023. Starred by several CSS-focused newsletters. Ships in three design systems I know of."
  stats:
    - { n: "1", label: "file" }
    - { n: "0", label: "JS" }
    - { n: "2kb", label: "minified" }
  processShots: 4
---
