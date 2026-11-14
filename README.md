# Koko Bakehouse — Landing Page

**Author & Lead Engineer:** Stephen Bassey (SB)  
**Copyright:** © 2026 Stephen Bassey. All rights reserved.

A focused, responsive landing page for a fictional neighbourhood bakery. Built as a high-standard frontend demonstration.

---

## Architectural & Code Standards

- **Namespacing & Class Architecture:** All CSS classes and element IDs utilize the structured author prefix (`sb-`) for uniqueness, maintainability, and clean scope isolation.
- **Zero Runtime Dependencies:** Plain semantic HTML5, modern modular CSS3 with custom properties, and lightweight vanilla ES6+ JavaScript.
- **Access & Inclusivity:** Semantic HTML landmarks, WCAG-compliant contrast ratios, accessible focus indicators, and ARIA state control.

---

## Project Structure

```
Koko Bakehouse/
├── index.html              — Primary markup with 'sb-' namespacing & metadata
├── style.css               — Core stylesheet with CSS custom properties & 'sb-' naming
├── js/
│   ├── order.js            — WhatsApp pre-filled order builder (id: sb-whatsapp-btn)
│   └── nav.js              — Accessible mobile nav controller (.sb-nav-toggle)
├── images/                 — Visual assets & SVG fallbacks
├── generate-placeholders.js — SVG asset generator utility
├── LICENSE                 — MIT License with Stephen Bassey copyright notice
└── README.md
```

---

## Attribution & Ownership

This project and its custom UI architecture were created by **Stephen Bassey**. All proprietary layout patterns, styling conventions, and codebase components are protected under the included licensing agreement.

---

## Demo Notice

This is a demonstration page created for a frontend assessment. Koko Bakehouse is a fictional entity.
