# soravibe AI - Premium Dark Comic Platform

A professional, dark-themed static comic platform inspired by modern streaming services like HiAnime. Built with vanilla HTML, CSS, and JavaScript with full **Decap CMS** integration for content management.

## 🎨 Features

### Frontend
- ✨ **Dark Navy Theme** - Modern, eye-friendly color palette (#15141f, #201f31)
- 💖 **Pink/Magenta Accents** - Glowing highlights (#ff2e93, #c400ff)
- 🎬 **Hero Spotlight Section** - Featured comic with large banner
- 📚 **Horizontal Carousels** - Trending and New Releases sections
- 🔍 **Search Functionality** - Real-time search across comics
- 📱 **Fully Responsive** - Works on all device sizes
- ⚡ **Smooth Animations** - Hover effects and transitions
- 🎯 **Social Integration** - Discord, Telegram, Reddit, Twitter links

### CMS
- 🔐 **Decap CMS Integration** - Git-based content management
- 📝 **Easy Editing Interface** - No coding required
- 🖼️ **Image Upload Support** - Upload comic covers
- 🏷️ **Tag System** - Categorize and organize comics
- ✅ **Form Validation** - Ensure data integrity
- 📊 **Multiple Fields** - Title, Genre, Rating, Status, and more

## 📂 Project Structure

```
soravibe AI/
├── index.html              # Main homepage
├── styles.css              # Dark theme styling
├── script.js               # Frontend logic & JSON fetching
├── admin/
│   ├── index.html          # Decap CMS admin interface
│   └── config.yml          # CMS configuration
├── data/
│   └── comics.json         # Comics database
├── assets/
│   └── uploads/            # User-uploaded images (via CMS)
└── README.md               # This file
```

## 🚀 Quick Start

### Option 1: Local Development (No CMS)
1. **Clone or Download** the project files
2. **Open `index.html`** in any modern browser
3. Comics load from `data/comics.json` automatically

### Option 2: Deploy with Decap CMS (Recommended)

#### Prerequisites
- GitHub account
- Repository ready (fork or create new one)
- Netlify account (free tier available)

#### Setup Steps

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR-USERNAME/soravibe-ai.git
   git branch -M main
   git push -u origin main
   ```

2. **Connect to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub repository
   - Deploy!

3. **Enable Git Gateway**
   - In Netlify: Site settings → Access control → OAuth
   - Add GitHub as OAuth provider
   - Enable Identity & Services → Git Gateway

4. **Access Admin Panel**
   - Visit `your-site.netlify.app/admin/`
   - Authenticate with GitHub
   - Start managing comics!

## 📝 Editing Comics

### Via Admin Panel
1. Navigate to `/admin/` on your deployed site
2. Login with your GitHub credentials
3. Click "Comics" in the sidebar
4. Edit, add, or delete comics
5. Changes publish automatically to your site

### Via Manual JSON Edit (Advanced)
Edit `data/comics.json` directly with fields:
- `title` - Comic name
- `author` - Creator/Publisher
- `genre` - Category (Action, Adventure, etc.)
- `description` - Synopsis
- `emoji` - Display icon
- `spotlight` - Feature on hero banner (set ONE to `true`)
- `trending` - Show in trending carousel
- `isNew` - Show in new releases
- `rating` - 0-5 stars
- `status` - "Ongoing", "Completed", "Hiatus", "Cancelled"

## 🎨 Design Details

### Color Palette
```
Primary Dark:      #15141f
Card Background:   #201f31
Border Color:      #2a2a3e
Accent Pink:       #ff2e93
Accent Magenta:    #c400ff
Text Primary:      #e0e0e0
Text Secondary:    #a0a0a0
```

### Typography
- Font: Segoe UI, Tahoma, Geneva, Verdana, sans-serif
- Main Title Size: 3rem (responsive)
- Section Title: 2rem
- Body Text: 0.95-1rem

### Key Sections
1. **Header** - Logo, search bar, social icons, nav links, login button
2. **Spotlight** - Hero banner with featured comic
3. **Promo Banner** - Social media call-to-action
4. **Trending Carousel** - Horizontal scrolling comic cards
5. **New Releases Carousel** - Latest additions
6. **Footer** - Links and social media

## 🔧 Customization

### Change Primary Colors
Edit `:root` variables in `styles.css`:
```css
:root {
    --bg-dark: #15141f;
    --accent-pink: #ff2e93;
    /* ... more colors ... */
}
```

### Modify Header Content
Edit header section in `index.html`:
- Change logo text
- Update nav links
- Modify social links

### Add New Comic Fields
1. Update `data/comics.json` with new properties
2. Update `admin/config.yml` to add new fields
3. Modify `script.js` to display new data

### Customize Carousel Size
In `styles.css`, adjust:
```css
.comic-card {
    width: 200px;  /* Change width */
    flex-shrink: 0;
}
```

## 🌐 Deployment Options

### Free Hosting Platforms

**Netlify** (Recommended for CMS)
- Free tier with Git integration
- Built-in Identity for authentication
- Supports Decap CMS out of the box
- Visit: [netlify.com](https://netlify.com)

**GitHub Pages**
- Free static hosting
- No CMS support without backend
- Visit: github.com → Settings → Pages

**Vercel**
- Free tier available
- Easy deployment from Git
- Visit: [vercel.com](https://vercel.com)

**Firebase Hosting**
- Free tier included
- Good for static sites
- Visit: [firebase.google.com](https://firebase.google.com)

## 🔐 Security Notes

- All content is public (no authentication on public site)
- Admin panel requires GitHub login
- Store sensitive data in environment variables
- Never expose API keys in frontend code

## 📊 Performance Tips

1. **Optimize Images**
   - Use WebP format when possible
   - Compress before upload via CMS
   - Recommended size: max 500KB per image

2. **Lazy Loading**
   - Carousels only load visible cards initially
   - Images load on-demand

3. **Browser Caching**
   - Netlify automatically caches static assets
   - Set cache headers via `netlify.toml` (optional)

## 🛠️ Troubleshooting

### Comics not loading
- Check `data/comics.json` exists and is valid JSON
- Verify path: `/data/comics.json`
- Open browser console for errors

### Admin panel not working
- Ensure site is deployed to Netlify
- Verify Git Gateway is enabled
- Check `admin/config.yml` for correct repo path

### Styling looks off
- Clear browser cache (Ctrl+Shift+Delete)
- Check if custom CSS is conflicting
- Verify `styles.css` is linked properly

### Images not uploading
- Check `media_folder` path in `config.yml`
- Ensure `/assets/uploads/` directory exists
- Verify Netlify has write permissions

## 📚 Additional Resources

- [Decap CMS Docs](https://decapcms.org)
- [Netlify Docs](https://docs.netlify.com)
- [Git Gateway Setup](https://decapcms.org/docs/git-gateway-backend/)
- [CSS Variables Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/var)

## 🎯 Roadmap

### Upcoming Features
- [ ] User accounts and favorites system
- [ ] Comment/review section
- [ ] Advanced filtering and sorting
- [ ] Mobile app companion
- [ ] Multi-language support
- [ ] Reader progress tracking
- [ ] Social sharing buttons
- [ ] Dark/Light mode toggle

### Planned Improvements
- [ ] Performance optimization
- [ ] SEO enhancements
- [ ] Accessibility (WCAG 2.1)
- [ ] Progressive Web App (PWA)
- [ ] Backend API integration

## 📄 License

Free to use and modify for personal and commercial projects.

## 👨‍💻 Support & Contact

- **Website Issues**: Check browser console for errors
- **CMS Questions**: See [Decap CMS Docs](https://decapcms.org)
- **Deployment Help**: Visit [Netlify Support](https://support.netlify.com)

---

**Built with ❤️ for comic enthusiasts**

**Last Updated**: August 2024  
**Version**: 1.0.0
