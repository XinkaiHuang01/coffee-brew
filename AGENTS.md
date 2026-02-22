# Coffee Brew - Agent Coding Guidelines

## Project Overview

- **Type**: Single-page webapp with Express.js backend
- **Stack**: Vanilla JavaScript (ES6+), Express, Notion API integration
- **Core**: Coffee brewing timer, recipe management, personal brew logs with optional Notion sync

---

## Commands

### Development
```bash
npm start        # Start server only (http://localhost:3001)
npm run dev      # Start server + live-reload frontend
```

### No test framework configured
- No unit/e2e tests exist
- Manual testing via browser

---

## Code Style

### Language
- JavaScript ES6+ (no TypeScript, no build step)
- Code in English (variable/function names), UI text in Chinese

### File Structure
```
/coffee-brew
├── index.html          # Main SPA HTML
├── server.js           # Express backend + API routes
├── js/
│   ├── app.js          # Main frontend logic (~2000+ lines)
│   └── notion-sync.js # Notion API client
├── css/
│   └── styles.css      # All styles
├── uploads/            # Uploaded images
├── .env                # Local env (NOT committed)
└── package.json
```

### JavaScript Patterns

**DO:**
- Use `const` / `let`, avoid `var`
- Use template literals: `` `Hello ${name}` ``
- Use arrow functions for callbacks
- Use `async/await` for async operations
- Check DOM elements exist before manipulating: `if (document.getElementById('x'))`
- Use semantic IDs: `id="timer-display"`, `id="form-dose"`

**DON'T:**
- No modules (no `import`/`export`)
- No classes (prototype-based or functional)
- No TypeScript
- No ESLint/Prettier config
- Avoid `document.querySelectorAll(...).forEach` without null check

### Naming Conventions
- Variables/functions: `camelCase` (`coffeeMethods`, `renderRecords`)
- Constants: `UPPER_SNAKE_CASE` (`CHART_COLORS`, `API_BASE`)
- DOM IDs: `kebab-case` (`recipe-card`, `timer-display`)
- File names: `kebab-case`

### HTML/DOM
- Use semantic HTML (`<nav>`, `<main>`, `<section>`)
- Inline event handlers acceptable: `onclick="showRecipePreview(...)"`
- CSS classes for styling, IDs for JavaScript targeting

### CSS
- CSS custom properties for theming (colors defined in `:root`)
- BEM-lite naming: `.recipe-card`, `.recipe-header`, `.recipe-title`
- Mobile-first responsive (media queries for tablet/desktop)

### Error Handling
- Use `try/catch` with async functions
- Console log errors: `console.error('Error:', e.message)`
- Show user feedback: `showToast('错误信息')`

### Backend (server.js)

**DO:**
- Use `async/await` for Notion API calls
- Return proper HTTP status codes
- Use environment variables for secrets

**DON'T:**
- Commit `.env` file
- Store API keys in code

---

## Key Features

### Brewing Methods
- 手冲 (Pour Over), 法压壶 (French Press), 爱乐压 (AeroPress)
- 聪明杯 (Clever Dripper), 冷萃 (Cold Brew), 虹吸壶 (Siphon)

### Timer
- Stage-based countdown with visual progress circle
- Audio notification on completion
- Auto-save to localStorage after brew

### Records
- Stored in localStorage (`coffee-records` key)
- Fields: date, method, coffee name, dose, water, temp, grind, rating, notes, image
- Optional sync to Notion database

### Notion Integration
- API endpoints: `/api/records`, `/api/records/:id`, `/api/health`
- Method/Grind/Roast mappings for Chinese ↔ English

---

## Important Notes

1. **No build process** - Edit JS/CSS directly, refresh browser
2. **localStorage** - All data persists in browser
3. **No authentication** - Notion API key stored in localStorage (per-user)
4. **Imgur fallback** - Images upload to Imgur, fallback to local `/uploads/`
5. **CORS** - Already configured for local development

---

## Common Tasks

### Add new brewing method
1. Add to `coffeeMethods` array in `js/app.js`
2. Add default stages in `defaultMethodStages`
3. Add to `METHOD_MAP` in `server.js` (for Notion sync)

### Add new field to records
1. Add to form in `index.html`
2. Handle in `saveRecord()` in `js/app.js`
3. Add to `recordToNotionProperties()` in `server.js` if Notion sync needed

### Modify timer stages
- Edit `manualStages` array or recipe stages in `js/app.js`
- Timer uses cumulative time calculation
