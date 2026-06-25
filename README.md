# Liliana Fuentes — Realtor Website

A high-end, fully responsive one-page website for **Liliana Fuentes**, Realtor® with
Realty ONE Group. Built with plain HTML, CSS and JavaScript — no build step, no
dependencies. Just open `index.html` or upload the folder to any host.

---

## 📁 Structure

```
liliana-fuentes-realtor/
├── index.html                 ← the whole site
├── assets/
│   ├── css/styles.css         ← all styling
│   ├── js/main.js             ← menu, scroll reveals, contact form
│   ├── liliana-fuentes.vcf    ← "Save My Contact" card (auto-fills her info)
│   └── images/
│       └── liliana-profile.jpg
└── README.md
```

## 🖼️ Swap in the professional headshots (recommended)

The site currently uses Liliana's round profile photo everywhere. To use the
full studio headshots (the photos at the door), just drop them in and rename:

1. Save the **close-up smiling** headshot as:
   `assets/images/liliana-profile.jpg` (overwrite the existing one) — used for the
   hero portrait, the About section, and the favicon.

That's it — every spot updates automatically. For best results use a vertical
(portrait) crop roughly **4:5**; the layout fills and centers on her face.

## ✏️ Things to personalize

| What | Where |
|------|-------|
| Real client reviews | `index.html` → "Client Love" section (3 cards) |
| Seminar link / date | `index.html` → "ImPAKt Your Future" button (already linked to her Partiful) |
| Office address / city | currently "Goodyear / West Valley" — edit in footer if needed |
| Stats in hero | `index.html` → `.hero-stats` |

## 📬 Make the contact form deliver email

The form works out of the box with a **mailto fallback** (opens the visitor's
email app addressed to Liliana). To receive submissions silently in her inbox:

1. Create a free form at **https://formspree.io** using `liliana@lilianafuentes.com`.
2. Copy the form endpoint (looks like `https://formspree.io/f/abcwxyz`).
3. In `index.html`, find `action="https://formspree.io/f/yourFormID"` and replace
   `yourFormID` with the real ID.

Done — submissions now land in her email with inline success messaging.

## 🌐 Going live

Drag the folder into any of these (all free for a single site):

- **Netlify** (drag-and-drop at app.netlify.com/drop)
- **Vercel**, **Cloudflare Pages**, or **GitHub Pages**
- Or upload via FTP to any web host, then point her domain at it.

## ✅ Already wired up

- Click-to-call & click-to-text: `623-256-1563`
- Email link: `liliana@lilianafuentes.com`
- Instagram / Facebook / TikTok → `@lilianafuentesrealtor`
- Homebuyer seminar → her Partiful registration page
- "Save My Contact" vCard download
- Bilingual messaging (English + Español) throughout
- Mobile menu, sticky nav, scroll animations, floating call button
