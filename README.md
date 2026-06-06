# StudyMind AI — MECH 106 Basic Mechanics

An AI-powered study assistant for **MECH 106 Basic Mechanics** at UENR, Sunyani, Ghana.

## Features
- 🧠 **AI Quiz Generator** — generates 25 custom MCQ questions from your documents
- 🃏 **AI Flashcards** — generates 20 study cards from your knowledge base
- 📝 **AI Summaries** — summaries, study guides, key terms, and practice questions
- 💬 **AI Tutor** — ask anything about course material
- 📚 **Document Library** — upload PDFs to expand the knowledge base
- 📈 **Progress Tracking** — quiz history, charts, and activity heatmap
- 📴 **Works Offline** — installable PWA with service worker caching

## Supported AI Providers
Paste any of these API keys in Settings — the provider is auto-detected:
| Key prefix | Provider |
|---|---|
| `sk-ant-...` | Claude (Anthropic) |
| `AIza...` | Gemini (Google) |
| `sk-proj-...` / `sk-...` | GPT-4o-mini (OpenAI) |

## Setup & Deployment

### Option A — GitHub Pages (recommended)
1. Fork or push this repo to GitHub
2. Go to **Settings → Pages → Source → GitHub Actions**
3. The workflow in `.github/workflows/deploy.yml` auto-deploys on every push to `main`
4. Your app will be live at `https://<username>.github.io/<repo-name>/`

### Option B — Run locally
```bash
# Just open index.html in a browser, or serve with any static server:
npx serve .
# or
python3 -m http.server 8080
```

## File Structure
```
studymind/
├── index.html          # App shell & all pages
├── manifest.json       # PWA manifest
├── sw.js               # Service worker (offline support)
├── css/
│   └── style.css       # All styles
├── js/
│   ├── data.js         # Pre-loaded PABLO content & defaults
│   ├── state.js        # Global state & KB management
│   ├── api.js          # AI provider router (Claude/Gemini/OpenAI)
│   ├── pdf.js          # PDF text extraction
│   ├── ui.js           # Navigation, toasts, overlays
│   ├── library.js      # Document upload & management
│   ├── quiz.js         # Quiz logic & AI generation
│   ├── flashcards.js   # Flashcard logic & AI generation
│   ├── summary.js      # Summary/guide/glossary generation
│   ├── chat.js         # AI Tutor chat
│   ├── settings.js     # Settings & profile
│   ├── progress.js     # Charts & progress tracking
│   ├── persistence.js  # localStorage save/load & boot
│   └── pwa.js          # Service worker registration & install prompt
└── icons/
    ├── icon-192.png
    └── icon-512.png
```

## Bug Fixes Applied
- **API key banner**: `saveApiKey()` now correctly reads the banner input first, then Settings input — not backwards
- **Key persistence**: `saveState()` now surfaces localStorage quota errors as a toast instead of silently losing the key
- **Masked key hint**: Settings page shows `Key saved: sk-ant-xxxx…` on load so users know a key is stored
- **Flashcard regeneration**: `S.fc.known` is explicitly reset before `doGenFC()` runs after deck completion
- **`checkApiKey()`**: Updates both the banner and the Settings hint element atomically after saving
