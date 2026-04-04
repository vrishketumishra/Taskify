import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting demo data seeding...');

  // Clear existing data (in reverse order of dependencies)
  console.log('🗑️  Clearing existing data...');
  await prisma.card.deleteMany();
  await prisma.list.deleteMany();
  await prisma.board.deleteMany();
  await prisma.auditLog.deleteMany();
  await prisma.orgLimit.deleteMany();
  await prisma.orgSubscription.deleteMany();

  console.log('✅ Database cleared');

  // Note: Organizations and Users are managed by Clerk, not in our database
  // This script assumes you have created organizations through the app
  // and will use placeholder orgIds that you should replace

  const ORG_IDS = [
    'org_placeholder_1', // Replace with actual org ID from Clerk
    'org_placeholder_2',
    'org_placeholder_3',
  ];

  console.log('\n⚠️  IMPORTANT: Update ORG_IDS with your actual Clerk organization IDs');
  console.log('   You can find these after creating organizations in the app\n');

  // Demo Boards Data
  const boardsData = [
    // Organization 1: Product Development
    {
      orgId: ORG_IDS[0],
      title: 'Sprint Planning',
      imageId: 'photo-1507003211169-0a1dd7228f2d',
      imageThumbUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      imageFullUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920',
      imageUserName: 'Travis Yewell',
      imageLinkHTML: '<a href="https://unsplash.com">Unsplash</a>',
    },
    {
      orgId: ORG_IDS[0],
      title: 'Bug Tracking',
      imageId: 'photo-1555949963-aa79dcee981c',
      imageThumbUrl: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400',
      imageFullUrl: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1920',
      imageUserName: 'Maximalfocus',
      imageLinkHTML: '<a href="https://unsplash.com">Unsplash</a>',
    },
    {
      orgId: ORG_IDS[0],
      title: 'Feature Requests',
      imageId: 'photo-1460925895917-afdab827c52f',
      imageThumbUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400',
      imageFullUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920',
      imageUserName: 'Christina wocintechchat',
      imageLinkHTML: '<a href="https://unsplash.com">Unsplash</a>',
    },

    // Organization 2: Marketing Team
    {
      orgId: ORG_IDS[1],
      title: 'Content Calendar',
      imageId: 'photo-1432888498266-38ffec3eaf0a',
      imageThumbUrl: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=400',
      imageFullUrl: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=1920',
      imageUserName: 'Hannah Busing',
      imageLinkHTML: '<a href="https://unsplash.com">Unsplash</a>',
    },
    {
      orgId: ORG_IDS[1],
      title: 'Campaign Launch',
      imageId: 'photo-1533750349088-cd871a92f312',
      imageThumbUrl: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=400',
      imageFullUrl: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=1920',
      imageUserName: 'Headway',
      imageLinkHTML: '<a href="https://unsplash.com">Unsplash</a>',
    },

    // Organization 3: Personal Tasks
    {
      orgId: ORG_IDS[2],
      title: 'Daily Tasks',
      imageId: 'photo-1484480974693-6ca0a78fb36b',
      imageThumbUrl: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400',
      imageFullUrl: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1920',
      imageUserName: 'Austin Distel',
      imageLinkHTML: '<a href="https://unsplash.com">Unsplash</a>',
    },
    {
      orgId: ORG_IDS[2],
      title: 'Learning Goals',
      imageId: 'photo-1516321318423-f06f85e504b3',
      imageThumbUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400',
      imageFullUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1920',
      imageUserName: 'Dmitry Ratushny',
      imageLinkHTML: '<a href="https://unsplash.com">Unsplash</a>',
    },
  ];

  console.log('📋 Creating boards...');
  const createdBoards = [];

  for (const boardData of boardsData) {
    const board = await prisma.board.create({
      data: boardData,
    });
    createdBoards.push(board);
    console.log(`  ✓ Created board: ${board.title}`);
  }

  // Demo Lists and Cards Data
  const listsAndCardsData = [
    // Sprint Planning Board
    {
      boardIndex: 0,
      lists: [
        {
          title: 'Backlog',
          order: 0,
          cards: [
            { title: 'User Authentication System', order: 0, description: 'Implement JWT-based auth with refresh tokens' },
            { title: 'Payment Integration', order: 1, description: 'Integrate Stripe for subscription payments' },
            { title: 'Email Notifications', order: 2, description: 'Set up email service for user notifications' },
          ],
        },
        {
          title: 'In Progress',
          order: 1,
          cards: [
            { title: 'Dashboard UI Redesign', order: 0, description: 'Modernize the dashboard with new design system' },
            { title: 'API Rate Limiting', order: 1, description: 'Implement rate limiting for API endpoints' },
          ],
        },
        {
          title: 'Code Review',
          order: 2,
          cards: [
            { title: 'Database Optimization', order: 0, description: 'Optimize slow queries and add indexes' },
          ],
        },
        {
          title: 'Testing',
          order: 3,
          cards: [
            { title: 'Unit Tests for Auth', order: 0, description: 'Write comprehensive tests for authentication flow' },
          ],
        },
        {
          title: 'Done',
          order: 4,
          cards: [
            { title: 'Project Setup', order: 0, description: 'Initial Next.js project configuration' },
            { title: 'Database Schema', order: 1, description: 'Design and implement Prisma schema' },
          ],
        },
      ],
    },

    // Bug Tracking Board
    {
      boardIndex: 1,
      lists: [
        {
          title: 'Reported',
          order: 0,
          cards: [
            { title: 'Login button not responsive on mobile', order: 0, description: 'Button overlaps with other elements on small screens' },
            { title: 'Image upload fails for large files', order: 1, description: 'Files > 5MB cause timeout errors' },
          ],
        },
        {
          title: 'Prioritized',
          order: 1,
          cards: [
            { title: 'Database connection pool exhaustion', order: 0, description: 'CRITICAL: App crashes under high load' },
          ],
        },
        {
          title: 'Fixing',
          order: 2,
          cards: [
            { title: 'Memory leak in card modal', order: 0, description: 'Modal components not being garbage collected' },
          ],
        },
        {
          title: 'Fixed',
          order: 3,
          cards: [
            { title: 'Typo in welcome email', order: 0, description: 'Fixed spelling error in template' },
          ],
        },
        {
          title: 'Verified',
          order: 4,
          cards: [
            { title: 'Slow page load on dashboard', order: 0, description: 'Optimized queries, reduced load time by 60%' },
          ],
        },
      ],
    },

    // Feature Requests Board
    {
      boardIndex: 2,
      lists: [
        {
          title: 'Ideas',
          order: 0,
          cards: [
            { title: 'Dark Mode Support', order: 0, description: 'Add theme toggle for dark/light mode' },
            { title: 'Mobile App', order: 1, description: 'Native iOS and Android apps' },
            { title: 'AI Task Suggestions', order: 2, description: 'Use AI to suggest task priorities' },
          ],
        },
        {
          title: 'Approved',
          order: 1,
          cards: [
            { title: 'Export to PDF', order: 0, description: 'Allow users to export boards as PDF reports' },
            { title: 'Team Chat Integration', order: 1, description: 'Integrate with Slack and Microsoft Teams' },
          ],
        },
        {
          title: 'In Development',
          order: 2,
          cards: [
            { title: 'Advanced Search', order: 0, description: 'Full-text search across all cards and boards' },
          ],
        },
        {
          title: 'Released',
          order: 3,
          cards: [
            { title: 'Keyboard Shortcuts', order: 0, description: 'Added shortcuts for common actions' },
          ],
        },
      ],
    },

    // Content Calendar Board
    {
      boardIndex: 3,
      lists: [
        {
          title: 'Ideas',
          order: 0,
          cards: [
            { title: 'Blog: AI Trends 2026', order: 0, description: 'Comprehensive guide to AI in productivity tools' },
            { title: 'Video Tutorial Series', order: 1, description: 'How-to videos for new features' },
          ],
        },
        {
          title: 'Writing',
          order: 1,
          cards: [
            { title: 'Case Study: TechStart Success', order: 0, description: 'Interview with CEO about productivity gains' },
          ],
        },
        {
          title: 'Review',
          order: 2,
          cards: [
            { title: 'Social Media Campaign Q2', order: 0, description: 'Plan for LinkedIn and Twitter campaigns' },
          ],
        },
        {
          title: 'Scheduled',
          order: 3,
          cards: [
            { title: 'Newsletter: March Edition', order: 0, description: 'Monthly product updates and tips' },
          ],
        },
        {
          title: 'Published',
          order: 4,
          cards: [
            { title: 'Product Launch Announcement', order: 0, description: 'Official launch blog post and press release' },
          ],
        },
      ],
    },

    // Campaign Launch Board
    {
      boardIndex: 4,
      lists: [
        {
          title: 'Planning',
          order: 0,
          cards: [
            { title: 'Define target audience', order: 0, description: 'Research and segment potential customers' },
            { title: 'Budget allocation', order: 1, description: 'Determine spend across channels' },
          ],
        },
        {
          title: 'Design',
          order: 1,
          cards: [
            { title: 'Landing page mockups', order: 0, description: 'Create 3 design variations for A/B testing' },
            { title: 'Email templates', order: 1, description: 'Design responsive email layouts' },
          ],
        },
        {
          title: 'Copywriting',
          order: 2,
          cards: [
            { title: 'Ad copy variants', order: 0, description: 'Write 5 different ad headlines and descriptions' },
          ],
        },
        {
          title: 'Launch',
          order: 3,
          cards: [],
        },
        {
          title: 'Analysis',
          order: 4,
          cards: [],
        },
      ],
    },

    // Daily Tasks Board
    {
      boardIndex: 5,
      lists: [
        {
          title: 'To Do',
          order: 0,
          cards: [
            { title: 'Review pull requests', order: 0, description: 'Check 3 pending PRs from team' },
            { title: 'Update documentation', order: 1, description: 'Add API endpoint documentation' },
            { title: 'Prepare sprint retrospective', order: 2, description: 'Gather metrics and feedback' },
          ],
        },
        {
          title: 'Doing',
          order: 1,
          cards: [
            { title: 'Team standup meeting', order: 0, description: 'Daily sync at 10 AM' },
          ],
        },
        {
          title: 'Done',
          order: 2,
          cards: [
            { title: 'Fix production bug', order: 0, description: 'Resolved login issue for enterprise users' },
            { title: 'Deploy v2.3.1', order: 1, description: 'Successfully deployed to production' },
          ],
        },
      ],
    },

    // Learning Goals Board
    {
      boardIndex: 6,
      lists: [
        {
          title: 'Want to Learn',
          order: 0,
          cards: [
            { title: 'GraphQL APIs', order: 0, description: 'Understand when to use GraphQL vs REST' },
            { title: 'Docker & Kubernetes', order: 1, description: 'Container orchestration for deployment' },
          ],
        },
        {
          title: 'Started',
          order: 1,
          cards: [
            { title: 'Next.js Server Actions', order: 0, description: 'Currently building features with server actions' },
          ],
        },
        {
          title: 'Practicing',
          order: 2,
          cards: [
            { title: 'TypeScript Advanced Types', order: 0, description: 'Working with generics and utility types' },
          ],
        },
        {
          title: 'Mastered',
          order: 3,
          cards: [
            { title: 'React Hooks', order: 0, description: 'Comfortable with custom hooks and optimization' },
            { title: 'Prisma ORM', order: 1, description: 'Can build complex queries and relations' },
          ],
        },
      ],
    },
  ];

  console.log('\n📝 Creating lists and cards...');

  for (const boardData of listsAndCardsData) {
    const board = createdBoards[boardData.boardIndex];
    console.log(`\n  Board: ${board.title}`);

    for (const listData of boardData.lists) {
      const list = await prisma.list.create({
        data: {
          title: listData.title,
          order: listData.order,
          boardId: board.id,
        },
      });
      console.log(`    ✓ List: ${list.title}`);

      for (const cardData of listData.cards) {
        await prisma.card.create({
          data: {
            title: cardData.title,
            order: cardData.order,
            description: cardData.description || null,
            listId: list.id,
          },
        });
      }
    }
  }

  console.log('\n✅ Demo data seeding completed successfully!');
  console.log(`\n📊 Summary:`);
  console.log(`   - Boards: ${createdBoards.length}`);
  console.log(`   - Lists: ${listsAndCardsData.reduce((acc, b) => acc + b.lists.length, 0)}`);
  console.log(`   - Cards: ${listsAndCardsData.reduce((acc, b) => acc + b.lists.reduce((lacc, l) => lacc + l.cards.length, 0), 0)}`);
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
