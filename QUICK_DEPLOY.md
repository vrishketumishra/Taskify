# ⚡ Quick Deploy - 5 Minutes to Live!

## 🎯 Environment Variables for Vercel

Copy ALL of these into Vercel when deploying:

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_bGlrZWQtYm9hLTI0LmNsZXJrLmFjY291bnRzLmRldiQ
CLERK_SECRET_KEY=sk_test_YjxtNWU0xOGRuOFY0fd4Q3lO5CXLMmGgeAz1VYjKRH
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/select-org
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/select-org
DATABASE_URL=postgresql://neondb_owner:npg_FX8Q0hmczMWr@ep-bitter-shape-a1khbtmz-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require
NEXT_PUBLIC_APP_URL=https://your-app.vercel.app
```

## 📝 Git Commands (Run These First)

```bash
cd c:\Users\mishr\Downloads\nextjs-trello-clone-master\nextjs-trello-clone-master
git init
git add .
git commit -m "Ready for deployment"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/trello-clone.git
git push -u origin main
```

**⚠️ Replace YOUR_USERNAME with your GitHub username!**

## 🚀 Deploy Steps

1. **Push code to GitHub** (commands above)
2. **Go to vercel.com** → Add New Project → Import repo
3. **Add environment variables** (copy from above)
4. **Click Deploy** → Wait 2-3 minutes
5. **Update Clerk** → Add Vercel domain to allowed domains
6. **Update NEXT_PUBLIC_APP_URL** → Replace with your actual Vercel URL
7. **Redeploy** → Done! 🎉

## 🔗 After Deployment

- Update `NEXT_PUBLIC_APP_URL` in Vercel with your real URL
- Add your Vercel domain to Clerk dashboard
- Test the app!

---

**That's it! Your Trello clone will be live and accessible worldwide!** 🌍✨
