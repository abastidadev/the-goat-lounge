# Netlify Deployment Guide - The Goat Lounge

## Overview
This guide provides step-by-step instructions for deploying "The Goat Lounge" Angular 20+ application to Netlify.

## ✅ Pre-Deployment Verification

### Build Configuration Status
- ✅ **angular.json**: Configured with production optimizations
  - Output path: `dist/the-goat-lounge/browser`
  - Output hashing: Enabled for cache busting
  - Build budgets: 500kB warning, 1MB error limit
  - Assets included: `public/` folder (images and i18n files)

- ✅ **netlify.toml**: Configured for SPA routing
  - Build command: `npm run build`
  - Publish directory: `dist/the-goat-lounge/browser`
  - Node.js version: 20
  - SPA redirects: All routes redirect to index.html

- ✅ **package.json**: Build script ready
  - Command: `npm run build`
  - Uses Angular CLI 20.0.0

### Local Build Verification
Before deploying, verify the production build works:

```powershell
# Build the application
npm run build

# Verify output directory
Get-ChildItem dist/the-goat-lounge/browser

# Check bundle sizes (should see in build output)
# Initial bundle: ~335kB raw, ~88kB compressed
# Contact page: ~51kB
# Menu page: ~39kB
# Home page: ~11kB
```

Expected output structure:
```
dist/the-goat-lounge/browser/
├── index.html
├── main-*.js
├── polyfills-*.js
├── styles-*.css
├── chunk-*.js (lazy-loaded routes)
├── assets/
│   └── images/
└── i18n/
    ├── en.json
    └── es.json
```

---

## 🚀 Deployment Methods

### Method 1: Git Integration (Recommended for Production)

This method automatically deploys when you push to your repository.

#### Step 1: Push Code to Git Repository

If not already done:

```powershell
# Initialize Git repository (if not already initialized)
git init

# Add files
git add .

# Commit with conventional commit format
git commit -m "chore(deploy): add Netlify configuration"

# Add remote repository (replace with your repository URL)
git remote add origin https://github.com/yourusername/the-goat-lounge.git

# Push to main branch
git push -u origin main
```

#### Step 2: Connect to Netlify

1. Go to [Netlify](https://app.netlify.com/)
2. Sign up or log in
3. Click **"Add new site"** > **"Import an existing project"**
4. Choose your Git provider (GitHub, GitLab, or Bitbucket)
5. Authorize Netlify to access your repositories
6. Select the `the-goat-lounge` repository

#### Step 3: Configure Build Settings

Netlify should auto-detect settings from `netlify.toml`, but verify:

- **Branch to deploy**: `main` (or your default branch)
- **Build command**: `npm run build` (from netlify.toml)
- **Publish directory**: `dist/the-goat-lounge/browser` (from netlify.toml)
- **Node version**: 20 (from netlify.toml)

Click **"Deploy site"**

#### Step 4: Monitor Deployment

- Watch the build log in real-time
- First deployment takes 2-4 minutes
- You'll get a random subdomain like `random-name-123456.netlify.app`

#### Step 5: Test Deployed Site

Once deployed, test all routes:
- ✅ Home: `https://your-site.netlify.app/`
- ✅ Menu: `https://your-site.netlify.app/menu`
- ✅ Contact: `https://your-site.netlify.app/contact`
- ✅ Spanish redirects: `/carta` → `/menu`, `/contacto` → `/contact`
- ✅ Direct URL access (paste URL in new tab)
- ✅ Browser refresh on any page
- ✅ Language switching (EN/ES)

#### Advantages
- ✅ Automatic deployments on git push
- ✅ Deploy previews for pull requests
- ✅ Branch previews (test before merging)
- ✅ Rollback to previous deployments
- ✅ Build logs and history

---

### Method 2: Netlify CLI (Recommended for Testing)

Deploy directly from your local machine using the command line.

#### Step 1: Install Netlify CLI

```powershell
# Install globally
npm install -g netlify-cli

# Verify installation
netlify --version
```

#### Step 2: Login to Netlify

```powershell
# Login (opens browser for authentication)
netlify login
```

#### Step 3: Initialize Site

```powershell
# Navigate to project directory
cd C:\Users\aleja\Desktop\Code\the-goat-lounge

# Initialize Netlify site
netlify init

# Follow prompts:
# - Create & configure a new site
# - Choose team/account
# - Enter site name (or leave blank for random name)
# - Build command: npm run build
# - Publish directory: dist/the-goat-lounge/browser
```

This creates a `.netlify` directory with site configuration.

#### Step 4: Deploy to Production

```powershell
# Build the application
npm run build

# Deploy to production
netlify deploy --prod

# Or deploy as draft first (test deployment)
netlify deploy
```

#### Step 5: Open Deployed Site

```powershell
# Open site in browser
netlify open:site
```

#### Advantages
- ✅ Quick testing without Git
- ✅ Draft deployments for testing
- ✅ Easy rollbacks: `netlify rollback`
- ✅ CI/CD friendly
- ✅ View deployment logs: `netlify watch`

---

### Method 3: Manual Deploy (Drag & Drop)

Simple manual deployment without CLI or Git.

#### Step 1: Build Locally

```powershell
# Build the application
npm run build
```

#### Step 2: Deploy to Netlify

1. Go to [Netlify Drop](https://app.netlify.com/drop)
2. Drag and drop the **entire** `dist/the-goat-lounge/browser` folder
3. Wait for deployment (1-2 minutes)
4. Get your site URL

#### Step 3: Manual Updates

For updates:
1. Rebuild: `npm run build`
2. Go to Netlify site dashboard
3. Click **"Deploys"** tab
4. Drag and drop the new `dist/the-goat-lounge/browser` folder

#### Advantages
- ✅ No CLI or Git setup required
- ✅ Fastest initial test
- ✅ Good for quick demos

#### Disadvantages
- ❌ Manual process for updates
- ❌ No automatic deployments
- ❌ No rollback history
- ❌ Not suitable for production workflow

---

## 🔧 Post-Deployment Configuration

### Custom Domain (Optional)

1. Go to site dashboard > **Domain settings**
2. Click **"Add custom domain"**
3. Enter your domain (e.g., `thegoatlounge.com`)
4. Follow DNS configuration instructions
5. SSL certificate is automatically provisioned

### Environment Variables (If Needed)

Currently, no environment variables are required. If you add backend API integration later:

1. Go to site dashboard > **Site settings** > **Environment variables**
2. Click **"Add a variable"**
3. Add key-value pairs
4. Redeploy for changes to take effect

### Netlify Features Available

- **Forms**: Convert contact form to Netlify Forms (no backend needed)
- **Analytics**: Enable visitor analytics
- **Branch deploys**: Deploy feature branches for testing
- **Deploy previews**: Automatic preview for PRs
- **Split testing**: A/B test different versions
- **Functions**: Add serverless functions if needed

---

## 🧪 Testing Checklist

After deployment, verify:

### Routing Tests
- [ ] Home page loads: `/`
- [ ] Menu page works: `/menu`
- [ ] Contact page works: `/contact`
- [ ] Spanish redirect works: `/carta` → `/menu`
- [ ] Spanish redirect works: `/contacto` → `/contact`
- [ ] 404 page shows for invalid routes: `/invalid-route`
- [ ] Direct URL access (paste URL in new browser tab)
- [ ] Browser refresh on any page doesn't cause 404
- [ ] Navigation between pages works smoothly

### Internationalization Tests
- [ ] English translations load correctly
- [ ] Spanish translations load correctly
- [ ] Language switcher works (if implemented)
- [ ] Translation files accessible: `/i18n/en.json`, `/i18n/es.json`

### Asset Loading Tests
- [ ] Images load correctly from `/assets/`
- [ ] Stylesheets load (check Tailwind classes work)
- [ ] No 404 errors in browser console
- [ ] Favicon loads (if configured)

### Performance Tests
- [ ] Initial page load < 3 seconds
- [ ] Lighthouse score > 90 (run in Chrome DevTools)
- [ ] Mobile responsive design works
- [ ] Dark mode works (if implemented)

### Browser Compatibility
- [ ] Chrome/Edge (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Mobile browsers (iOS Safari, Chrome Android)

---

## 🐛 Troubleshooting

### Issue: Routes Return 404 on Direct Access

**Symptom**: Navigating works, but direct URL access or refresh shows 404.

**Solution**:
1. Verify `netlify.toml` exists in project root
2. Check redirect rule is configured:
   ```toml
   [[redirects]]
     from = "/*"
     to = "/index.html"
     status = 200
     force = false
   ```
3. Ensure `force = false` (allows assets to load)
4. Redeploy after fixing

### Issue: Assets Not Loading (404 for images/i18n)

**Symptom**: Images or translation files return 404.

**Solution**:
1. Verify `public/` folder structure in source
2. Check `angular.json` assets configuration:
   ```json
   "assets": [
     {
       "glob": "**/*",
       "input": "public"
     }
   ]
   ```
3. Rebuild and redeploy: `npm run build`
4. Check paths in code are correct (no leading `/`)

### Issue: Build Fails on Netlify

**Symptom**: Build succeeds locally but fails on Netlify.

**Solutions**:
1. **Node version mismatch**: 
   - Check netlify.toml has `NODE_VERSION = "20"`
   - Or add `.nvmrc` file with: `20`

2. **Missing dependencies**:
   - Ensure all dependencies are in `package.json` (not just devDependencies)
   - Run `npm ci` locally to test clean install

3. **Build command error**:
   - Check Netlify build logs for specific error
   - Verify `npm run build` works locally
   - Check `angular.json` configuration

### Issue: Bundle Size Too Large

**Symptom**: Build exceeds budget limits or site is slow.

**Solutions**:
1. Analyze bundle size: `ng build --stats-json`
2. Use [webpack-bundle-analyzer](https://www.npmjs.com/package/webpack-bundle-analyzer)
3. Optimize imports (use specific imports instead of barrel exports)
4. Lazy load more routes
5. Review build budgets in `angular.json`

### Issue: Environment Variables Not Working

**Symptom**: Environment variables are undefined.

**Solutions**:
1. Add variables in Netlify UI: **Site settings** > **Environment variables**
2. Prefix with `NG_` for Angular to inject them
3. Redeploy after adding variables
4. Check build logs to see if variables are set

### Issue: Translation Files Not Loading

**Symptom**: App shows translation keys instead of text.

**Solutions**:
1. Verify files exist in build: `dist/the-goat-lounge/browser/i18n/`
2. Check `public/i18n/` folder has `en.json` and `es.json`
3. Verify Transloco configuration in Angular
4. Check browser network tab for 404 on i18n files
5. Ensure paths in Transloco loader are correct

### Issue: Slow Initial Load

**Symptom**: First page load takes too long.

**Solutions**:
1. Enable prerendering in `angular.json` (if applicable)
2. Optimize images (compress, use WebP format)
3. Review lazy-loaded chunks (should see in build output)
4. Enable Netlify's asset optimization (auto-enabled)
5. Check Lighthouse report for specific recommendations

---

## 📊 Build Information

Current build sizes (production):

```
Initial Bundle:           334.66 kB raw →  87.52 kB compressed
- Angular framework:      258.40 kB raw →  70.63 kB compressed
- Tailwind styles:         40.24 kB raw →   4.86 kB compressed
- Polyfills:               34.59 kB raw →  11.33 kB compressed
- Main app:                 1.44 kB raw → 699 bytes compressed

Lazy-Loaded Routes:
- Contact page:            51.08 kB raw →  11.40 kB compressed
- Menu page:               38.59 kB raw →   6.67 kB compressed
- Home page:               11.17 kB raw →   2.95 kB compressed
- Not Found page:           1.12 kB raw → 564 bytes compressed
```

**Status**: ✅ Within budget limits (< 1MB error threshold)

---

## 🔗 Useful Resources

- [Netlify SPA Documentation](https://docs.netlify.com/routing/redirects/rewrites-proxies/#history-pushstate-and-single-page-apps)
- [Netlify TOML Reference](https://docs.netlify.com/configure-builds/file-based-configuration/)
- [Angular CLI Deployment Guide](https://angular.dev/tools/cli/deployment)
- [Netlify CLI Documentation](https://docs.netlify.com/cli/get-started/)
- [Netlify Build Environment](https://docs.netlify.com/configure-builds/manage-dependencies/)

---

## 📞 Support

If you encounter issues:

1. Check Netlify build logs (available in dashboard)
2. Review browser console for errors
3. Test production build locally first
4. Check [Netlify Support Forums](https://answers.netlify.com/)
5. Consult [Angular Deployment Docs](https://angular.dev/tools/cli/deployment)

---

## 🎉 Quick Start Summary

**For first-time deployment:**

```powershell
# 1. Build the application
npm run build

# 2. Install Netlify CLI (if not installed)
npm install -g netlify-cli

# 3. Login
netlify login

# 4. Deploy
netlify deploy --prod
```

**Or use Git integration:**

```powershell
# 1. Commit changes
git add .
git commit -m "chore(deploy): add Netlify configuration"

# 2. Push to repository
git push origin main

# 3. Connect repository in Netlify UI
# (Go to app.netlify.com > Import project)
```

That's it! Your Angular application is now live on Netlify! 🚀
