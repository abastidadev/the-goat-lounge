# Netlify Deployment - Quick Start Checklist

## ✅ Pre-Deployment Verification

All configuration files are ready:

- ✅ **netlify.toml** - Netlify configuration (build command, publish directory, SPA redirects)
- ✅ **public/_redirects** - Backup SPA routing configuration
- ✅ **.nvmrc** - Node.js version specification (v20)
- ✅ **angular.json** - Production build optimizations configured
- ✅ **Local build tested** - Bundle size: ~335kB → 88kB compressed (within budget)

## 🚀 Deploy Now - Choose Your Method

### Option 1: Netlify CLI (Fastest)
```powershell
npm install -g netlify-cli
netlify login
netlify deploy --prod
```

### Option 2: Git Integration (Best for Production)
1. Push code to GitHub/GitLab/Bitbucket
2. Go to [app.netlify.com](https://app.netlify.com)
3. Click "Import an existing project"
4. Select your repository
5. Deploy (auto-detects configuration)

### Option 3: Drag & Drop
1. Build: `npm run build`
2. Go to [app. netlify.com/drop](https://app.netlify.com/drop)
3. Drag `dist/the-goat-lounge/browser` folder

## 🧪 Post-Deployment Testing

Test these URLs after deployment:
- [ ] Home: `https://your-site.netlify.app/`
- [ ] Menu: `https://your-site.netlify.app/menu`
- [ ] Contact: `https://your-site.netlify.app/contact`
- [ ] Spanish redirects: `/carta` and `/contacto`
- [ ] Direct URL access (paste in new tab)
- [ ] Browser refresh on any page
- [ ] Language switcher (EN/ES)
- [ ] Images load correctly
- [ ] No console errors

## 📖 Full Documentation

See **DEPLOYMENT.md** for:
- Detailed step-by-step instructions
- Troubleshooting guide
- Post-deployment configuration
- Custom domain setup
- Performance optimization tips

## 🎯 Build Output Details

**Location**: `dist/the-goat-lounge/browser/`

**Includes**:
- index.html (SPA entry point)
- Optimized JavaScript bundles
- Tailwind CSS (compressed)
- Lazy-loaded route chunks
- Assets (images)
- Translation files (en.json, es.json)
- _redirects (SPA routing)

**Bundle Sizes**:
- Initial: 87.52 kB (compressed)
- Contact page: 11.40 kB
- Menu page: 6.67 kB
- Home page: 2.95 kB

Status: ✅ Within Angular budget limits

## 🔧 Configuration Summary

**Build Command**: `npm run build`  
**Publish Directory**: `dist/the-goat-lounge/browser`  
**Node Version**: 20  
**Framework**: Angular 20+ (standalone components)  
**Styling**: Tailwind CSS  
**i18n**: Transloco (EN + ES)  
**Routing**: Angular Router with SPA redirects  

## 🐛 Quick Troubleshooting

**Routes return 404?**  
→ netlify.toml and _redirects are configured. Redeploy if needed.

**Assets not loading?**  
→ Rebuild: `npm run build` and check browser console.

**Build fails on Netlify?**  
→ Check build logs. Node version set to 20 in netlify.toml.

**Need help?**  
→ See **DEPLOYMENT.md** for detailed troubleshooting.

---

## 🚀 Ready to Deploy!

All configuration is complete. Choose a deployment method above and deploy now.

After deployment, remember to:
1. Test all routes
2. Verify translations work
3. Check mobile responsiveness
4. Optional: Set up custom domain in Netlify dashboard
