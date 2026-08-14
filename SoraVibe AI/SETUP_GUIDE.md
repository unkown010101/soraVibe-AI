# soravibe AI - Setup & Deployment Guide

Complete guide for setting up and deploying your dark-themed comic platform with Decap CMS integration.

## 🎯 Quick Start (Development)

### Step 1: Download Files
- Extract all files to your project folder
- Ensure you have these files:
  - `index.html`
  - `styles.css`
  - `script.js`
  - `data/comics.json`
  - `admin/index.html`
  - `admin/config.yml`

### Step 2: Test Locally
1. Open `index.html` in any modern browser
2. The site should load with sample comics from `data/comics.json`
3. Try searching and carousel navigation

### Step 3: Customize
- Edit `data/comics.json` to add your own comics
- Modify colors in `styles.css` `:root` section
- Update text in `index.html`

---

## 🚀 Full Deployment with Decap CMS

### Prerequisites
✅ GitHub account (free at github.com)  
✅ Netlify account (free tier available)  
✅ Terminal/Command Line access  

### Step 1: Prepare Your Repository

#### Option A: Create New Repository
```bash
# Navigate to your project directory
cd path/to/soravibe-ai

# Initialize git
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: soravibe AI platform"

# Create new repo on GitHub (github.com/new)
# Then connect:
git remote add origin https://github.com/YOUR-USERNAME/soravibe-ai.git
git branch -M main
git push -u origin main
```

#### Option B: Fork Existing Repository
1. Visit the soravibe AI GitHub repo
2. Click "Fork" button
3. Clone your fork locally:
   ```bash
   git clone https://github.com/YOUR-USERNAME/soravibe-ai.git
   cd soravibe-ai
   ```

### Step 2: Update Configuration

Edit `admin/config.yml` - Line 2-3:
```yaml
backend:
  name: git-gateway
  branch: main
  repo: YOUR-USERNAME/soravibe-ai  # ← Change this
```

Replace `YOUR-USERNAME` with your actual GitHub username.

### Step 3: Deploy to Netlify

#### Method 1: Netlify UI (Easiest)
1. Go to [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect to GitHub
4. Select your repository
5. Keep default build settings (they're already in `netlify.toml`)
6. Click "Deploy site"
7. Wait for deployment to complete (takes 1-2 minutes)

#### Method 2: CLI Deployment
```bash
# Install Netlify CLI (requires Node.js)
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod

# Follow the prompts and wait for completion
```

### Step 4: Enable Authentication

**In Netlify Dashboard:**

1. Go to your site settings
2. **Build & Deploy** → **Authentication** → **GitHub**
3. Click "Enable GitHub" (or use existing app)
4. Authorize Netlify to access your repository

**Enable Identity & Services:**

1. Go to **Site settings**
2. **Access control** → **OAuth providers**
3. Make sure GitHub is listed
4. Enable **Identity** → **Git Gateway**

### Step 5: Access Your Admin Panel

1. Your site URL: `https://your-site-name.netlify.app`
2. Admin panel: `https://your-site-name.netlify.app/admin/`
3. Click "Login with Netlify Identity"
4. Authenticate with GitHub
5. Start managing comics!

---

## 📊 Managing Comics via CMS

### Adding a New Comic

1. Go to `/admin/` on your site
2. Login with GitHub
3. Click "Comics" → "Comic List"
4. Click "Add Entry" button
5. Fill in the form:
   - **Title**: Comic name
   - **Author**: Creator/Publisher
   - **Genre**: Select category
   - **Year**: Release year (default: 2024)
   - **Synopsis**: Short description
   - **Cover Image**: Upload image (optional)
   - **Emoji Icon**: Pick an emoji
   - **Spotlight Item**: Check to feature on hero
   - **Trending**: Check to show in trending carousel
   - **New Release**: Check for new releases section
   - **Episodes**: Number of chapters
   - **Status**: Ongoing/Completed/etc
   - **Rating**: 0-5 stars
   - **Tags**: Add keywords
6. Click "Save" button
7. Changes publish automatically!

### Editing Existing Comic

1. Click "Comics" → "Comic List"
2. Select a comic to edit
3. Modify any fields
4. Click "Save"
5. Changes go live immediately

### Deleting a Comic

1. Open the comic entry
2. Click "Delete entry" button (top right)
3. Confirm deletion
4. Changes apply instantly

### Spotlight Comic

- Only ONE comic should have `Spotlight: true`
- This comic displays in the large hero banner
- Carousel arrows let users browse other spotlight options

---

## 🎨 Customizing After Deployment

### Update Colors

1. Edit `styles.css` locally
2. Change `:root` variables
3. Save and push to GitHub:
   ```bash
   git add styles.css
   git commit -m "Update color palette"
   git push
   ```
4. Netlify auto-deploys in 1-2 minutes

### Update Site Text

1. Edit `index.html` locally
2. Modify header, sections, footer text
3. Push to GitHub
4. Auto-deployed by Netlify

### Add New Sections

1. Edit `index.html` to add new section
2. Add corresponding CSS to `styles.css`
3. Add JavaScript logic to `script.js`
4. Push changes
5. Test on live site

---

## 🐛 Troubleshooting

### Issue: Comics not loading
**Solution:**
- Check browser console (F12) for errors
- Verify `data/comics.json` path is correct
- Ensure JSON syntax is valid (use [jsonlint.com](https://jsonlint.com))

### Issue: Admin panel shows 404
**Solution:**
- Ensure `netlify.toml` is in project root
- Verify Git Gateway is enabled in Netlify
- Try clearing browser cache
- Check that `/admin/` folder exists

### Issue: Can't login to CMS
**Solution:**
- Verify GitHub authentication is enabled
- Check that `config.yml` repo path is correct
- Ensure your GitHub account has push access
- Try logging out and back in

### Issue: Images uploaded but not visible
**Solution:**
- Check `/assets/uploads/` folder exists
- Verify `media_folder` path in `config.yml`
- Ensure Netlify has write permissions (usually automatic)
- Check image file size (recommend < 500KB)

### Issue: Changes not showing on site
**Solution:**
- Wait 1-2 minutes for auto-deployment
- Check Netlify deploy status (builds page)
- Clear browser cache (Ctrl+Shift+Delete)
- Hard refresh (Ctrl+F5)

---

## 📈 Performance Optimization

### Optimize Images Before Upload
- Use free tools: [TinyPNG](https://tinypng.com), [Pixlr](https://pixlr.com)
- Recommended format: WebP or optimized JPEG
- Max size: 500KB per image
- Dimensions: 600x800 pixels ideal

### Enable Caching
Already configured in `netlify.toml`:
- Static files: 1 hour cache
- Assets: 1 year cache (immutable)

### Monitor Performance
- Netlify provides analytics
- Check "Analytics" tab in Netlify dashboard
- Monitor page load times

---

## 🔐 Security Best Practices

1. **Never share credentials** in code
2. **Use GitHub token** instead of password
3. **Enable two-factor auth** on GitHub
4. **Review commit history** regularly
5. **Keep dependencies updated**
6. **Use environment variables** for secrets (if needed)

---

## 📚 Additional Resources

- **Decap CMS**: https://decapcms.org
- **Netlify Docs**: https://docs.netlify.com
- **Git Gateway**: https://decapcms.org/docs/git-gateway-backend/
- **Netlify Identity**: https://docs.netlify.com/auth/overview/
- **Web.dev Guide**: https://web.dev

---

## 🆘 Getting Help

### Common Questions

**Q: Can I use a different hosting provider?**  
A: Yes! Any static hosting works (GitHub Pages, Vercel, etc). CMS requires Netlify or Heroku backend.

**Q: Do I need to know coding?**  
A: No! You can manage comics entirely via the CMS interface. Customization requires HTML/CSS knowledge.

**Q: Is this free?**  
A: Yes! Free tier includes: Netlify hosting, Decap CMS, GitHub storage.

**Q: Can I change the theme colors?**  
A: Yes! Edit `:root` in `styles.css` with your preferred colors.

**Q: How many comics can I add?**  
A: Unlimited! Performance depends on browser, but 1000+ comics work fine.

---

## ✅ Deployment Checklist

Before going live:

- [ ] Updated `config.yml` with your GitHub username
- [ ] GitHub repository created and pushed
- [ ] Netlify site created and deployed
- [ ] Git Gateway enabled in Netlify
- [ ] Admin panel accessible at `/admin/`
- [ ] Can login with GitHub credentials
- [ ] Can add/edit comics via CMS
- [ ] Site looks good on mobile
- [ ] All links working correctly
- [ ] Social media links updated
- [ ] Contact information updated
- [ ] Domain connected (optional)

---

**You're all set! 🎉 Start building your soravibe AI platform!**

For issues, check [GitHub Issues](https://github.com/decaporg/decap-cms/issues) or [Netlify Support](https://support.netlify.com).
