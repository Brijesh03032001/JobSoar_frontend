# Vercel Deployment Guide - Standalone Frontend

## Overview
This guide deploys **only the landing page** to Vercel for showcasing the UI/UX. No backend required!

## Prerequisites
- GitHub account with repository: https://github.com/Brijesh03032001/JobSoar_frontend
- Vercel account (sign up at https://vercel.com - free tier is perfect)

## Quick Deploy (3 Steps)

### Step 1: Import to Vercel

1. Go to **https://vercel.com/new**
2. Click **Import Git Repository**
3. Select your GitHub account and choose `JobSoar_frontend`
4. Vercel auto-detects Next.js ✓

### Step 2: Configure (Use Defaults)

**Framework Preset:**
- Framework: Next.js (auto-detected)
- Root Directory: `./` (keep default)
- Build Command: `npm run build` (keep default)
- Output Directory: `.next` (keep default)

**Node.js Version:** 20.x (recommended for Next.js 16+)

**Environment Variables:** **Skip this - not needed for landing page!**

### Step 3: Deploy

1. Click **Deploy** button
2. Wait 2-3 minutes while Vercel builds your app
3. Get your live URL: `https://your-app.vercel.app`
4. **Done!** Share the link with anyone 🎉

## Post-Deployment

### Custom Domain (Optional)
1. Go to **Project Settings → Domains**
2. Add your custom domain (e.g., `jobsoar.com`)
3. Follow Vercel's DNS setup instructions
4. Your site will be live on your custom domain

### Continuous Deployment
- Every push to `main` branch → auto-redeployment
- View deployment history in Vercel dashboard
- Rollback to previous deployments with one click

## Troubleshooting

### Build Fails
- Check **Build Logs** in Vercel dashboard
- Verify all dependencies in `package.json` are correct
- Ensure Node.js version is 18.x or higher

### Page Doesn't Load
- Clear browser cache (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)
- Check Vercel **Function Logs** for errors
- Redeploy: `Deployments → ⋮ → Redeploy`

### CSS/Styling Issues
- Mantine UI styles may take a moment to load first time
- Check browser console for errors
- Ensure all `@mantine` packages are installed

## Adding Backend Later

When your backend is ready:

1. Go to **Project Settings → Environment Variables**
2. Add backend URLs:
   ```
   NEXT_PUBLIC_API_URL=https://your-backend.com
   NEXT_PUBLIC_AUTH_SERVICE=https://your-backend.com/auth
   ```
3. Redeploy to apply changes

## Monitoring

- **Analytics**: Built-in traffic and performance metrics
- **Speed Insights**: Core Web Vitals monitoring
- **Logs**: Real-time function logs (errors, requests)

## Alternative: Deploy via CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy (from frontend directory)
cd frontend
vercel --prod
```

---

**Live in 3 minutes!** Your landing page showcase will be accessible worldwide.

**Need Help?**
- Vercel Docs: https://vercel.com/docs
- Next.js Deployment: https://nextjs.org/docs/deployment
