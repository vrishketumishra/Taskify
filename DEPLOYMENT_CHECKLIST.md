# Quick Deployment Checklist

## Before Deploying to Vercel

### ✅ Completed Setup
- [x] Prisma schema updated to PostgreSQL
- [x] Database schema pushed to Neon
- [x] Environment variables configured locally

### 📋 To Do Before Deployment

1. **Create GitHub Repository**
   - Go to github.com/new
   - Create repository: `trello-clone` (or your preferred name)
   - Don't initialize with README

2. **Push Code to GitHub**
   ```bash
   cd c:\Users\mishr\Downloads\nextjs-trello-clone-master\nextjs-trello-clone-master
   git init
   git add .
   git commit -m "Ready for Vercel deployment"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/trello-clone.git
   git push -u origin main
   ```

3. **Deploy to Vercel**
   - Go to vercel.com
   - Click "Add New Project"
   - Import your GitHub repo
   - Add environment variables (see below)
   - Click Deploy

4. **Environment Variables to Add in Vercel**
   
   Copy these exactly:
   ```
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_bGlrZWQtYm9hLTI0LmNsZXJrLmFjY291bnRzLmRldiQ
   CLERK_SECRET_KEY=sk_test_YjxtNWU0xOGRuOFY0fd4Q3lO5CXLMmGgeAz1VYjKRH
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/select-org
   NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/select-org
   DATABASE_URL=postgresql://neondb_owner:npg_FX8Q0hmczMWr@ep-bitter-shape-a1khbtmz-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require
   NEXT_PUBLIC_APP_URL=https://YOUR-VERCEL-URL.vercel.app
   ```

5. **Update Clerk Settings**
   - Go to dashboard.clerk.dev
   - Add your Vercel domain to allowed domains
   - Save changes

6. **Update APP_URL**
   - After deployment, copy your Vercel URL
   - Update NEXT_PUBLIC_APP_URL in Vercel environment variables
   - Redeploy

## Testing After Deployment

- [ ] Visit your Vercel URL
- [ ] Sign up with Clerk
- [ ] Create an organization
- [ ] Create a board
- [ ] Add lists and cards
- [ ] Test drag-and-drop
- [ ] Verify everything works!

## Common Issues & Solutions

**Issue:** Build fails
**Solution:** Check all environment variables are set correctly in Vercel

**Issue:** Database connection error
**Solution:** Verify DATABASE_URL is correct and Neon database is active

**Issue:** Clerk authentication doesn't work
**Solution:** Add Vercel domain to Clerk's allowed domains list

---

**Need help?** Check DEPLOYMENT_GUIDE.md for detailed instructions!
