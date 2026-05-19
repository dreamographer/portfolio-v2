---
order: 6
title: "Foglight"
tag: "Dev tool · 2021"
year: "2021"
logoColor: "pink"
summary: "Extension that highlights console errors in your editor in real time."
stack: ["MV3", "WebSocket"]
featured: false
subtitle: "Extension that highlights console errors in your editor in real time."
caseStudy:
  role: "Solo · tooling"
  stackLabel: "Chrome MV3 · WebSocket"
  time: "2 months"
  status: "Archived · proof of concept"
  overview: "Debugging console errors meant alt-tabbing between the browser and the editor constantly. I wanted the error to surface directly in the file that caused it — underlined, with the message in a tooltip, without leaving VS Code."
  problem: "Browser DevTools and editor extensions live in separate processes with no standard bridge. Connecting them requires a local WebSocket relay and careful message passing to avoid race conditions."
  approach:
    - "Chrome MV3 extension captures console errors via content script."
    - "Local WebSocket server relays messages to the VS Code extension."
    - "Extension parses stack traces to resolve file + line numbers."
    - "Diagnostic decorations rendered with the VS Code Language API."
  outcome: "Proof of concept that worked reliably for React projects. Archived when better tooling (React DevTools overlay) covered the main use case. The WebSocket relay pattern was reused in a later internal tool."
  stats:
    - { n: "<50ms", label: "error relay" }
    - { n: "2", label: "extensions" }
    - { n: "1", label: "aha moments" }
  processShots: 4
---
