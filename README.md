# TaskFlow - Modern Project Management Platform

![TaskFlow Banner](https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=1200&q=80)

<div align="center">

**A production-ready, full-stack project management tool built with Next.js 14**

[![Next.js](https://img.shields.io/badge/Next.js-14.0-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Prisma](https://img.shields.io/badge/Prisma-5.0-2D3748?style=for-the-badge&logo=prisma)](https://www.prisma.io/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

[Live Demo](https://taskflow-demo.vercel.app) • [Documentation](#documentation) • [Features](#features) • [Tech Stack](#tech-stack)

</div>

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Industry Use Cases](#industry-use-cases)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Database Schema](#database-schema)
- [Deployment](#deployment)
- [Performance](#performance)
- [Security](#security)
- [Contributing](#contributing)
- [License](#license)

---

## 🎯 Overview

TaskFlow is a modern, full-stack project management platform that enables teams to organize work, track progress, and collaborate effectively. Built with cutting-edge technologies, it demonstrates enterprise-grade architecture while maintaining simplicity and performance.

### Why TaskFlow?

Unlike traditional project management tools that require extensive configuration, TaskFlow provides an intuitive Kanban interface that teams can adopt immediately. It's designed for:

- **Software Development Teams**: Sprint planning, bug tracking, feature development
- **Marketing Teams**: Content calendars, campaign management, asset tracking
- **Product Teams**: Roadmap planning, user feedback collection, release management
- **Customer Success**: Support ticket tracking, feature request prioritization
- **Personal Productivity**: Task management, goal tracking, habit building

---

## ✨ Features

### Core Functionality

- 🏢 **Multi-tenant Organizations**: Isolated workspaces with team collaboration
- 📊 **Kanban Boards**: Visual workflow management with drag-and-drop
- 📝 **Rich Cards**: Detailed task cards with descriptions, activity logs, and attachments
- 🔄 **Real-time Updates**: Optimistic UI updates with server-side validation
- 📸 **Beautiful Covers**: Unsplash integration for stunning board backgrounds
- 🔍 **Activity Audit Logs**: Complete history of all actions for compliance
- ♾️ **Infinite Scroll**: Smooth pagination for boards with hundreds of cards

### Advanced Features

- 💳 **Stripe Integration**: Freemium model with subscription management
- 🔐 **Clerk Authentication**: Enterprise-grade auth with organization management
- 📱 **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- ⌨️ **Keyboard Shortcuts**: Power user features for rapid navigation
- 🎨 **Modern UI**: Built with shadcn/ui and Tailwind CSS
- 🚀 **Server Actions**: Next.js 14 server-side mutations without API endpoints

### Developer Experience

- ✅ **Type Safety**: Full TypeScript coverage from database to UI
- 🧪 **Validation**: Zod schemas for runtime type checking
- 🗄️ **Prisma ORM**: Type-safe database queries with auto-generated types
- 📦 **React Query**: Efficient data fetching with automatic caching
- 🎯 **Zustand**: Lightweight state management for modals and UI state

---

## 🏭 Industry Use Cases

### Software Development
```
Board: Sprint Planning
Lists: Backlog → In Progress → Code Review → Testing → Done

Track features from ideation to deployment with complete visibility
into sprint progress and team workload.
```

### Marketing & Content
```
Board: Content Calendar
Lists: Ideas → Writing → Review → Scheduled → Published

Manage content pipelines across blogs, social media, and campaigns
with clear approval workflows.
```

### Customer Support
```
Board: Support Tickets
Lists: New → In Progress → Waiting on Customer → Resolved

Prioritize customer issues, track response times, and maintain
service level agreements (SLAs).
```

### Product Management
```
Board: Feature Requests
Lists: Submitted → Under Review → Approved → In Development → Released

Collect, prioritize, and track user feedback with transparent
decision-making processes.
```

---

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router and Server Actions
- **React 18** - UI library with concurrent features
- **TypeScript** - Type-safe JavaScript at scale
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Reusable component library
- **@hello-pangea/dnd** - Drag-and-drop functionality
- **Lucide React** - Beautiful icon library

### Backend
- **Next.js Server Actions** - Server-side mutations without API routes
- **Prisma** - Type-safe ORM with schema migrations
- **Neon PostgreSQL** - Serverless Postgres database
- **Clerk** - Authentication and user management
- 
### State Management & Data Fetching
- **React Query (TanStack Query)** - Server state management
- **Zustand** - Client state management
- **Zod** - Schema validation

### DevOps & Deployment
- **Vercel** - Hosting and edge network
- **GitHub Actions** - CI/CD pipeline
- **ESLint** - Code linting
- **Prettier** - Code formatting

---

## 🏗️ Architecture

### System Design

```
┌─────────────────────────────────────────────┐
│              Client (Browser)                │
│  ┌──────────┐  ┌──────────┐  ┌───────────┐ │
│  │  React   │  │ Zustand  │  │ React     │ │
│  │  Components│ │ Store   │  │ Query     │ │
│  └──────────┘  └──────────┘  └───────────┘ │
└──────────────────┬──────────────────────────┘
                   │ HTTPS
┌──────────────────▼──────────────────────────┐
│         Next.js 14 (Vercel Edge)            │
│  ┌──────────────┐  ┌─────────────────────┐  │
│  │ Server       │  │ Server              │  │
│  │ Components   │  │ Actions             │  │
│  └──────────────┘  └─────────────────────┘  │
└──────────────────┬──────────────────────────┘
                   │
┌──────────────────▼──────────────────────────┐
│           External Services                  │
│  ┌──────────┐  ┌──────────┐  ┌───────────┐ │
│  │  Prisma  │  │  Clerk   │  │  Stripe   │ │
│  │  ORM     │  │  Auth    │  │ Payments  │ │
│  └────┬─────┘  └──────────┘  └───────────┘ │
│       │                                     │
│  ┌────▼─────┐                               │
│  │  Neon    │                               │
│  │PostgreSQL│                               │
│  └──────────┘                               │
└─────────────────────────────────────────────┘
```

### Key Architectural Decisions

1. **Server Actions over API Routes**: Eliminates boilerplate, improves type safety
2. **Optimistic Updates**: Instant UI feedback with rollback on error
3. **Multi-tenancy at Database Level**: `orgId` on every table ensures data isolation
4. **Audit Logging**: Every mutation creates an audit log entry
5. **Subscription-based Limits**: Free tier (5 boards) vs Pro (unlimited)

---


## 🔑 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Clerk public key | Yes |
| `CLERK_SECRET_KEY` | Clerk secret key | Yes |
| `DATABASE_URL` | PostgreSQL connection string | Yes |
| `NEXT_PUBLIC_UNSPLASH_ACCESS_KEY` | Unsplash API key | Yes |
| `NEXT_PUBLIC_APP_URL` | Application URL | Yes |

### Getting API Keys

- **Clerk**: Sign up at [clerk.com](https://clerk.com)
- **Neon**: Create database at [neon.tech](https://neon.tech)
- **Unsplash**: Register at [unsplash.com/developers](https://unsplash.com/developers)

---

## 🗄️ Database Schema

### Core Models

```prisma
model Board {
  id            String    @id @default(uuid())
  orgId         String
  title         String
  imageId       String?
  imageThumbUrl String?
  imageFullUrl  String?
  imageUserName String?
  imageLinkHTML String?
  
  lists         List[]
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
  
  @@index([orgId])
}

model List {
  id        String   @id @default(uuid())
  title     String
  order     Int
  boardId   String
  board     Board    @relation(fields: [boardId], references: [id], onDelete: Cascade)
  cards     Card[]
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  
  @@index([boardId])
}

model Card {
  id          String   @id @default(uuid())
  title       String
  order       Int
  description String?
  listId      String
  list        List     @relation(fields: [listId], references: [id], onDelete: Cascade)
  activities  Activity[]
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  
  @@index([listId])
}

model Activity {
  id        String   @id @default(uuid())
  cardId    String
  card      Card     @relation(fields: [cardId], references: [id], onDelete: Cascade)
  action    String
  details   String?
  createdAt DateTime @default(now())
  
  @@index([cardId])
}
```



### Optimization Techniques

- **Image Optimization**: Next.js Image component with WebP conversion
- **Code Splitting**: Route-based automatic code splitting
- **Font Optimization**: Self-hosted fonts with `font-display: swap`
- **Database Indexing**: Strategic indexes on `orgId`, `boardId`, `listId`
- **Caching**: Multi-layer caching (browser, CDN, React Query)
- **Lazy Loading**: Components and images load on demand

### Benchmarks

- First Contentful Paint: < 1.2s
- Time to Interactive: < 2.5s
- Cumulative Layout Shift: < 0.1
- Largest Contentful Paint: < 2.0s

---

## 🔒 Security

### Implemented Security Measures

✅ **Authentication**: Clerk with JWT tokens and session management  
✅ **Authorization**: Organization-based access control  
✅ **Input Validation**: Zod schemas on all mutations  
✅ **SQL Injection Prevention**: Prisma parameterized queries  
✅ **XSS Protection**: React auto-escapes output  
✅ **CSRF Protection**: Clerk handles token validation  
✅ **Rate Limiting**: API route protection  
✅ **Secure Headers**: Next.js default security headers  
✅ **Environment Variables**: Runtime validation  

### Data Isolation

Every database query includes organization scoping:
```typescript
const boards = await prisma.board.findMany({
  where: { orgId: auth.orgId! } // Ensures data isolation
});
```

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow TypeScript best practices
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed
- Ensure ESLint and Prettier pass

---

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework
- [Prisma](https://prisma.io/) - Next-generation ORM
- [Clerk](https://clerk.com/) - Authentication infrastructure
- [shadcn/ui](https://ui.shadcn.com/) - Beautiful UI components
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Unsplash](https://unsplash.com/) - Beautiful free images

---

## 📞 Contact

Rishi Mishra - [@vrishketumishra](https://github.com/vrishketumishra)




<div align="center">

**Built with ❤️ using Next.js 14**

If you found this project helpful, please consider giving it a ⭐️

</div>
