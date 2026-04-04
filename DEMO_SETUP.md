# 🚀 Demo Data Setup for Hackathon

This guide will help you quickly populate your Trello clone with impressive demo data.

## 📋 Prerequisites

1. Make sure you have signed up and created at least **3 organizations** in the app
2. Get your organization IDs from Clerk dashboard or browser URL

## 🔧 Step-by-Step Setup

### Step 1: Get Your Organization IDs

After creating organizations in the app, you can find the IDs:

**Method 1: From the URL**
- Navigate to an organization
- Look at the URL: `http://localhost:3000/organization/org_2abc123xyz`
- The part after `/organization/` is your org ID (e.g., `org_2abc123xyz`)

**Method 2: From Clerk Dashboard**
- Go to [dashboard.clerk.com](https://dashboard.clerk.com)
- Select your application
- Go to "Organizations"
- Copy the Organization IDs

### Step 2: Update the Seed Script

Open `seed-demo-data.ts` and update the ORG_IDS array (around line 17):

```typescript
const ORG_IDS = [
  'org_your_first_org_id_here',    // Product Development
  'org_your_second_org_id_here',   // Marketing Team
  'org_your_third_org_id_here',    // Personal Tasks
];
```

Replace the placeholder IDs with your actual organization IDs.

### Step 3: Run the Seed Script

```bash
npm run seed:demo
```

You should see output like:
```
🌱 Starting demo data seeding...
🗑️  Clearing existing data...
✅ Database cleared
📋 Creating boards...
  ✓ Created board: Sprint Planning
  ✓ Created board: Bug Tracking
  ...
📝 Creating lists and cards...

  Board: Sprint Planning
    ✓ List: Backlog
    ✓ List: In Progress
    ...

✅ Demo data seeding completed successfully!

📊 Summary:
   - Boards: 7
   - Lists: 25
   - Cards: 45
```

## 🎯 What Gets Created

### Organization 1: Product Development
- **Sprint Planning** board (5 lists, 10 cards)
- **Bug Tracking** board (5 lists, 6 cards)
- **Feature Requests** board (4 lists, 7 cards)

### Organization 2: Marketing Team
- **Content Calendar** board (5 lists, 5 cards)
- **Campaign Launch** board (5 lists, 4 cards)

### Organization 3: Personal Tasks
- **Daily Tasks** board (3 lists, 6 cards)
- **Learning Goals** board (4 lists, 5 cards)

**Total: 7 boards, 25+ lists, 40+ cards**

## 🎬 Demo Flow

Once seeded, here's your hackathon demo flow:

1. **Show Landing Page** - Professional appearance
2. **Sign In** - Demonstrate Clerk authentication
3. **Switch Organizations** - Show multi-tenancy
   - Product Development org
   - Marketing Team org
   - Personal Tasks org
4. **Demonstrate Features**:
   - Drag & drop cards between lists
   - Create new cards
   - Edit card descriptions
   - Use the **Search** feature (new!)
   - View activity logs
5. **Show Search** - Type keywords to find cards instantly
6. **Highlight Tech Stack** - Next.js 14, Prisma, MySQL, Clerk

## 💡 Pro Tips

- **Smooth Animations**: Cards now have hover effects and transitions
- **Search Feature**: Use it to quickly find cards - judges love this!
- **Activity Logs**: Every action is tracked - show the audit trail
- **Multiple Orgs**: Emphasize data isolation between organizations

## 🔄 Reset Demo Data

Want to start fresh? Just run the seed script again:

```bash
npm run seed:demo
```

It will clear all existing data and recreate everything.

## 🐛 Troubleshooting

**Error: Organization not found**
- Make sure you've created organizations in the app first
- Verify the org IDs match exactly

**Error: Database connection failed**
- Ensure MySQL is running
- Check your `.env` file has correct DATABASE_URL

**No cards appearing**
- Refresh the browser after seeding
- Make sure you're viewing the correct organization

---

Good luck with your hackathon! 🚀
