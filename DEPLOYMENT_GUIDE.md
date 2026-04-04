# Deploy Trello Clone to Vercel with Neon Database

## ✅ Prerequisites Completed
- [x] Database schema updated for PostgreSQL (Neon)
- [x] Schema pushed to Neon database
- [x] Environment variables configured

## 🚀 Step-by-Step Deployment

### Step 1: Push Code to GitHub

```bash
# Navigate to project directory
cd c:\Users\mishr\Downloads\nextjs-trello-clone-master\nextjs-trello-clone-master

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit changes
git commit -m "Update to PostgreSQL/Neon and prepare for Vercel deployment"

# Create a new repository on GitHub, then connect it:
git remote add origin https://github.com/YOUR_USERNAME/trello-clone.git
git branch -M main
git push -u origin main
```

**Note:** Replace `YOUR_USERNAME` with your actual GitHub username and create the repository first on GitHub.

### Step 2: Configure Environment Variables in Vercel

When deploying to Vercel, you'll need to add these environment variables:

#### Required Variables:
```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_bGlrZWQtYm9hLTI0LmNsZXJrLmFjY291bnRzLmRldiQ
CLERK_SECRET_KEY=sk_test_YjxtNWU0xOGRuOFY0fd4Q3lO5CXLMmGgeAz1VYjKRH
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/select-org
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/select-org

# Database (Neon PostgreSQL)
DATABASE_URL=postgresql://neondb_owner:npg_FX8Q0hmczMWr@ep-bitter-shape-a1khbtmz-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require

# App URL (update after deployment)
NEXT_PUBLIC_APP_URL=https://your-app-name.vercel.app
```

#### Optional Variables:
```env
# Unsplash API (for board cover images)
NEXT_PUBLIC_UNSPLASH_ACCESS_KEY=your_unsplash_key

# Stripe (for subscriptions)
STRIPE_API_KEY=your_stripe_key
STRIPE_WEBHOOK_SECRET=your_webhook_secret
```

### Step 3: Deploy to Vercel

#### Option A: Deploy via Vercel Dashboard (Recommended)

1. Go to [vercel.com](https://vercel.com) and sign up/login with GitHub
2. Click **"Add New Project"**
3. Import your GitHub repository
4. Vercel will auto-detect Next.js configuration
5. **Important:** Add all environment variables from Step 2
6. Click **"Deploy"**
7. Wait for build to complete (~2-3 minutes)
8. Your app is live! 🎉

#### Option B: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy from project directory
vercel

# Follow the prompts:
# - Set up and deploy? Y
# - Which scope? (select your account)
# - Link to existing project? N
# - Project name? trello-clone
# - Directory? ./
# - Override settings? N

# Add environment variables
vercel env add DATABASE_URL
vercel env add CLERK_SECRET_KEY
vercel env add NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
# ... add all other variables

# Deploy to production
vercel --prod
```

### Step 4: Update Clerk Settings

After deployment, update your Clerk application:

1. Go to [Clerk Dashboard](https://dashboard.clerk.dev)
2. Select your application
3. Go to **"Settings"** → **"Domains"**
4. Add your Vercel domain (e.g., `your-app.vercel.app`)
5. Update redirect URLs if needed
6. Save changes

### Step 5: Update NEXT_PUBLIC_APP_URL

After getting your Vercel URL:

1. Go to Vercel Dashboard → Your Project → **Settings** → **Environment Variables**
2. Update `NEXT_PUBLIC_APP_URL` to your actual Vercel URL
3. Redeploy: `vercel --prod` or trigger redeploy from dashboard

## 🔧 Post-Deployment Checklist

- [ ] Test user signup/login with Clerk
- [ ] Create an organization
- [ ] Create boards, lists, and cards
- [ ] Verify database operations work
- [ ] Test drag-and-drop functionality
- [ ] Check activity logs

## 🐛 Troubleshooting

### Build Fails
- Ensure all environment variables are set in Vercel
- Check that `DATABASE_URL` uses correct Neon connection string
- Verify Node.js version compatibility (Next.js 14 requires Node 18+)

### Database Connection Error
- Confirm `DATABASE_URL` is correctly formatted
- Check Neon database is active at [console.neon.tech](https://console.neon.tech)
- Ensure SSL mode is set to `require`

### Clerk Authentication Issues
- Add Vercel domain to Clerk allowed domains
- Verify publishable and secret keys are correct
- Check redirect URLs match your Vercel URL

### Prisma Client Generation Error
- Vercel automatically runs `postinstall` script
- Ensure `prisma generate` is in package.json scripts (already configured)

## 💡 Pro Tips

1. **Preview Deployments**: Every pull request gets a unique preview URL
2. **Environment Separation**: Consider separate Neon databases for dev/staging/prod
3. **Monitoring**: Use Vercel Analytics for performance insights
4. **Automatic Deploys**: Vercel automatically deploys on every push to main branch
5. **Custom Domain**: Add your own domain in Vercel Settings → Domains

## 🎯 Demo Ready!

Your Trello clone is now deployed and accessible worldwide! Share your Vercel URL with others to showcase your project.

**Example URL:** `https://trello-clone-yourname.vercel.app`

Good luck! 🚀
