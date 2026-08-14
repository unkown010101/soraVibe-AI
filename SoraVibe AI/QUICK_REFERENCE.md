# soravibe AI - Quick Reference Card

## 📁 Project Structure at a Glance

```
soravibe AI/
├── 📄 index.html          ← Main website
├── 🎨 styles.css          ← All styling
├── ⚙️  script.js          ← JavaScript logic
├── 📊 data/
│   └── comics.json        ← Comic database
├── 🔐 admin/
│   ├── index.html         ← CMS interface
│   └── config.yml         ← CMS configuration
├── 📦 assets/uploads/     ← Uploaded images
├── ⚙️  netlify.toml        ← Deployment config
├── 📖 README.md           ← Full documentation
├── 📋 SETUP_GUIDE.md      ← Deployment guide
└── 📄 .gitignore          ← Git ignore rules
```

---

## 🎨 Color Palette Quick Reference

| Element | Color | Hex Code |
|---------|-------|----------|
| Background | Dark Navy | `#15141f` |
| Cards | Dark Slate | `#201f31` |
| Primary Text | Light Gray | `#e0e0e0` |
| Secondary Text | Medium Gray | `#a0a0a0` |
| Border | Dark Blue | `#2a2a3e` |
| **Accent 1** | **Pink** | **`#ff2e93`** |
| **Accent 2** | **Magenta** | **`#c400ff`** |

---

## 🔧 Quick Customization Guide

### Change Main Colors
**File:** `styles.css`  
**Location:** Top of file `:root` section
```css
:root {
    --bg-dark: #15141f;        /* Background */
    --bg-card: #201f31;        /* Card bg */
    --accent-pink: #ff2e93;    /* Main accent */
    --accent-magenta: #c400ff; /* Secondary */
    /* ... more colors ... */
}
```

### Add a New Comic
**File:** `data/comics.json`  
**Copy this template:**
```json
{
  "title": "Comic Title",
  "author": "Author Name",
  "genre": "Action",
  "year": 2024,
  "description": "Short description...",
  "emoji": "💎",
  "spotlight": false,
  "trending": true,
  "isNew": false,
  "episodes": "26 Episodes",
  "status": "Ongoing",
  "rating": 4.5,
  "tags": ["tag1", "tag2"],
  "featured": false
}
```

### Change Logo
**File:** `index.html`  
**Line:** ~21
```html
<span class="logo-text">soravibe<span class="logo-accent">AI</span></span>
```

### Update Header Links
**File:** `index.html`  
**Lines:** ~44-51
```html
<a href="#" class="nav-link">Your Link</a>
```

### Modify Hero Banner Text
**File:** `index.html`  
**Search for:** `id="spotlightTitle"` and `id="spotlightSynopsis"`

### Change Font
**File:** `styles.css`  
**Line:** ~24
```css
body {
    font-family: 'Your Font', sans-serif; /* Change here */
}
```

---

## 🌐 Deployment URLs

| Service | URL |
|---------|-----|
| Main Site | `https://your-site.netlify.app` |
| Admin Panel | `https://your-site.netlify.app/admin/` |
| GitHub Repo | `https://github.com/YOUR-USERNAME/repo` |

---

## 🚀 Common Commands

### Git Workflow
```bash
# Add all changes
git add .

# Commit changes
git commit -m "Description of changes"

# Push to GitHub
git push

# Pull latest changes
git pull
```

### Test Locally
```bash
# Open in browser
open index.html

# Or start a local server
python -m http.server 8000
# Then visit: http://localhost:8000
```

---

## 📋 CMS Field Reference

| Field | Type | Required | Purpose |
|-------|------|----------|---------|
| Title | String | ✅ | Comic name |
| Author | String | ✅ | Creator |
| Genre | Select | ✅ | Category |
| Year | Number | ✅ | Release year |
| Synopsis | Text | ✅ | Description |
| Cover Image | Image | ❌ | Poster/cover |
| Emoji | String | ✅ | Display icon |
| Spotlight | Boolean | ✅ | Featured? |
| Trending | Boolean | ✅ | In trending? |
| New Release | Boolean | ✅ | New? |
| Episodes | String | ❌ | Chapter count |
| Status | Select | ❌ | Current status |
| Rating | Number | ❌ | Star rating |
| Tags | List | ❌ | Keywords |

---

## 🔍 Search & Navigation

### Website Structure
```
Homepage (index.html)
├── Header (Logo, Search, Nav)
├── Spotlight Section (Featured comic)
├── Promo Banner (Social links)
├── Trending Carousel (Comics)
├── New Releases Carousel (Comics)
└── Footer (Links, Social)

Admin Panel (admin/index.html)
├── Login
├── Collections
├── Comics Editor
└── Settings
```

### Key CSS Classes
```css
.header              /* Top bar */
.spotlight-section   /* Hero banner */
.promo-banner        /* Social strip */
.trending-section    /* Trending carousel */
.comic-card          /* Comic card item */
.footer              /* Bottom section */
```

### Key HTML IDs
```html
id="spotlightTitle"     <!-- Hero title -->
id="spotlightSynopsis"  <!-- Hero description -->
id="trendingCarousel"   <!-- Trending list -->
id="newReleasesCarousel"<!-- New releases list -->
id="searchInput"        <!-- Search box -->
```

---

## 🐛 Quick Fixes

### Issue: Site looks broken
**Fix:** Clear browser cache (Ctrl+Shift+Delete) → F5

### Issue: Comics not loading
**Fix:** Check `data/comics.json` is valid JSON

### Issue: Admin panel 404
**Fix:** Ensure site is deployed to Netlify

### Issue: Styling weird
**Fix:** Hard refresh (Ctrl+F5)

### Issue: Changes not showing
**Fix:** Wait 2 mins for auto-deploy

---

## 📱 Responsive Breakpoints

| Device | Width | CSS |
|--------|-------|-----|
| Desktop | >1024px | Full layout |
| Tablet | 768-1024px | Adjusted grid |
| Mobile | <768px | Single column |

**Media queries in styles.css:** Lines 850-1050

---

## 🔒 Important Notes

⚠️ **Never commit:**
- `.env` files with secrets
- Node modules
- Build artifacts
- API keys or passwords

✅ **Always commit:**
- `.gitignore`
- `netlify.toml`
- `admin/config.yml`
- `data/comics.json`
- All source files

---

## 📞 Support Quick Links

| Issue | Resource |
|-------|----------|
| CMS Help | [decapcms.org](https://decapcms.org) |
| Netlify Help | [docs.netlify.com](https://docs.netlify.com) |
| Git Issues | [github.com/git/git/issues](https://github.com/git/git) |
| CSS Reference | [mdn.io/css](https://developer.mozilla.org/en-US/docs/Web/CSS) |
| JavaScript | [mdn.io/js](https://developer.mozilla.org/en-US/docs/Web/JavaScript) |

---

## ⏱️ Development Timeline

| Task | Time |
|------|------|
| Local setup | 5 mins |
| Create GitHub repo | 5 mins |
| Deploy to Netlify | 5 mins |
| Setup CMS auth | 10 mins |
| Add first comic | 2 mins |
| Customize theme | 20 mins |
| Total | ~47 mins |

---

## 🎯 Next Steps After Setup

1. ✅ Deploy to Netlify
2. ✅ Enable Git Gateway
3. ✅ Access admin panel
4. ✅ Add/edit comics via CMS
5. ✅ Customize colors & text
6. ✅ Connect custom domain (optional)
7. ✅ Setup email notifications (optional)
8. ✅ Enable analytics (optional)

---

**Last Updated:** August 2024  
**Version:** 1.0  
**Tested On:** Chrome, Firefox, Safari, Edge
