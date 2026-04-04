# Vercel Deployment Guide for Trello Clone

## 📋 Pre-Deployment Checklist

### 1. Cloud Database Setup (PlanetScale)

1. Go to [planetscale.com](https://planetscale.com)
2. Sign up with GitHub
3. Create database: `trello-clone`
4. Click "Connect" → Select "Prisma"
5. Copy the connection string

### 2. Environment Variables for Vercel

You'll need to add these in Vercel dashboard:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/select-org
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/select-org

DATABASE_URL=mysql://xxxx@xxxx.psdb.cloud/trello-clone?sslaccept=strict

NEXT_PUBLIC_UNSPLASH_ACCESS_KEY=your_key (optional)

STRIPE_API_KEY=sk_test_... (optional)
STRIPE_WEBHOOK_SECRET=whsec_... (optional)

NEXT_PUBLIC_APP_URL=https://your-app.vercel.app
```

### 3. Clerk Production Settings

In Clerk Dashboard:
1. Go to your application
2. Navigate to "Domains" or "Settings"
3. Add your Vercel domain (e.g., `your-app.vercel.app`)
4. Update redirect URLs if needed

---

## 🚀 Deployment Steps

### Step 1: Push to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Trello clone ready for deployment"

# Create repository on GitHub, then:
git remote add origin https://github.com/yourusername/trello-clone.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Click "Add New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js settings
6. **Add Environment Variables** (copy from Step 2 above)
7. Click "Deploy"
8. Wait for build (~2-3 minutes)
9. Your app is live! 🎉

### Step 3: Push Database Schema

After deployment, you need to push the schema to PlanetScale:

```bash
# In your local project
npx prisma db push
```

Or use PlanetScale's web console to run migrations.

---

## 🔧 Post-Deployment

### Test Your Live App

1. Visit your Vercel URL
2. Sign up with Clerk
3. Create an organization
4. Verify everything works

### Optional: Custom Domain

In Vercel dashboard:
1. Go to "Settings" → "Domains"
2. Add your custom domain
3. Follow DNS configuration instructions

---

## 🐛 Troubleshooting

### Build Fails
- Check environment variables are set correctly
- Ensure DATABASE_URL uses `sslaccept=strict` for PlanetScale
- Verify all dependencies are in package.json

### Database Connection Error
- Confirm DATABASE_URL is correct
- Check PlanetScale database is active
- Ensure SSL is enabled in connection string

### Clerk Authentication Issues
- Add Vercel domain to Clerk allowed domains
- Verify redirect URLs match your Vercel URL
- Check API keys are correct

---

## 💡 Pro Tips

1. **Use Preview Deployments**: Every PR gets a preview URL
2. **Environment Separation**: Use different DB for production
3. **Monitoring**: Check Vercel Analytics for performance
4. **Backup**: Export data from PlanetScale regularly

---

## 🎯 For Hackathon Demo

If deploying takes too long:
- ✅ Keep using localhost for the demo
- ✅ Deploy after the hackathon
- ✅ Share localhost demo via screen sharing

Vercel deployment is great for:
- Sharing with judges remotely
- Portfolio showcase
- Real-world testing

Good luck! 🚀
