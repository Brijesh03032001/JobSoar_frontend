# Vercel Deployment Guide

## Prerequisites
- GitHub account with repository: https://github.com/Brijesh03032001/JobSoar_frontend
- Vercel account (sign up at https://vercel.com)
- Backend services deployed and accessible via public URLs

## Step 1: Push Latest Changes

```bash
cd frontend
git add .
git commit -m "Add Vercel configuration and production setup"
git push origin main
```

## Step 2: Import Project to Vercel

1. Go to https://vercel.com/new
2. Select **Import Git Repository**
3. Choose your GitHub account and select `JobSoar_frontend` repository
4. Vercel will auto-detect Next.js framework

## Step 3: Configure Project Settings

### Framework Preset
- **Framework**: Next.js (auto-detected)
- **Root Directory**: `./` (leave as is)
- **Build Command**: `npm run build` (default)
- **Output Directory**: `.next` (default)

### Node.js Version
- Set to **Node.js 20.x** (recommended for Next.js 16+)

## Step 4: Add Environment Variables

Go to **Project Settings → Environment Variables** and add:

```plaintext
NEXT_PUBLIC_API_URL=https://your-backend-domain.com
NEXT_PUBLIC_APP_URL=https://your-app-name.vercel.app

NEXT_PUBLIC_AUTH_SERVICE=https://your-backend-domain.com/auth
NEXT_PUBLIC_JOBS_SERVICE=https://your-backend-domain.com/jobs
NEXT_PUBLIC_APPLICATIONS_SERVICE=https://your-backend-domain.com/applications
NEXT_PUBLIC_AI_RESUME_SERVICE=https://your-backend-domain.com/ai-resume
NEXT_PUBLIC_AI_CAREER_SERVICE=https://your-backend-domain.com/ai-career
NEXT_PUBLIC_PAYMENTS_SERVICE=https://your-backend-domain.com/payments
NEXT_PUBLIC_NOTIFICATIONS_SERVICE=https://your-backend-domain.com/notifications
NEXT_PUBLIC_FILE_STORAGE_SERVICE=https://your-backend-domain.com/storage

NEXT_PUBLIC_RAZORPAY_KEY_ID=your-production-razorpay-key-id
```

**Important Notes:**
- Replace `your-backend-domain.com` with actual backend URL
- Replace `your-app-name` with your Vercel app domain
- Use production Razorpay key (not test key)
- Environment variables starting with `NEXT_PUBLIC_` are exposed to browser

## Step 5: Deploy

1. Click **Deploy** button
2. Vercel will build and deploy your application
3. Deployment typically takes 2-3 minutes
4. You'll get a production URL: `https://your-app.vercel.app`

## Step 6: Post-Deployment Configuration

### Custom Domain (Optional)
1. Go to **Project Settings → Domains**
2. Add your custom domain
3. Update DNS records as instructed by Vercel
4. Update `NEXT_PUBLIC_APP_URL` environment variable

### CORS Configuration
Ensure your backend services allow requests from your Vercel domain:
- Add Vercel domain to CORS allowed origins
- Update backend CORS middleware configuration

### Continuous Deployment
- Every push to `main` branch triggers automatic redeployment
- Configure different branches for staging/production if needed

## Troubleshooting

### Build Fails
- Check build logs in Vercel dashboard
- Verify all dependencies in `package.json`
- Ensure Node.js version compatibility

### API Connection Issues
- Verify environment variables are set correctly
- Check backend CORS settings
- Ensure backend services are publicly accessible
- Use browser DevTools Network tab to debug

### Environment Variable Not Working
- Variables must start with `NEXT_PUBLIC_` for client-side access
- Redeploy after changing environment variables
- Clear cache: `Deployments → ⋮ → Redeploy`

## Monitoring and Logs

- **Analytics**: Vercel provides built-in analytics
- **Logs**: Real-time function logs available in dashboard
- **Performance**: Check Core Web Vitals in Analytics tab

## Alternative Deployment Commands

### Deploy via Vercel CLI (Optional)
```bash
npm install -g vercel
cd frontend
vercel login
vercel --prod
```

This allows command-line deployment without GitHub integration.

---

**Need Help?**
- Vercel Documentation: https://vercel.com/docs
- Next.js Deployment: https://nextjs.org/docs/deployment
