# Sexual Health Centre — Anuradhapura

A production-oriented healthcare website developed for the **Sexual Health Centre at Teaching Hospital, Anuradhapura, Sri Lanka**.

The platform provides patients and visitors with information about the centre, services, clinic resources, and sexual health education. Website content is managed through **Contentful**, allowing authorized staff to update articles and other content without modifying the application code.

## Overview

The application uses **Next.js as a full-stack framework** with **Contentful as a headless CMS/BaaS**.

The project initially used a custom backend and PostgreSQL database. This was replaced with Contentful to reduce long-term backend and database maintenance while providing a dedicated content management platform.

```text
Clinic Staff
     │
     ▼
 Contentful
     │
     │ Content API
     ▼
  Next.js
     │
     ▼
Public Website
```

## Key Features

* Responsive healthcare website
* Content managed through Contentful
* Dynamic article management
* Next.js App Router
* Dynamic article routes using `[slug]`
* Contentful Rich Text support
* Contentful image/asset management
* Server-side Contentful data fetching
* Responsive image optimization with `next/image`
* Structured and reusable content access functions
* Production deployment through Vercel

## Technology Stack

### Frontend

* Next.js
* React
* TypeScript
* Tailwind CSS
* Next.js App Router

### Content & Infrastructure

* Contentful Headless CMS
* Contentful Content Delivery API
* Contentful Assets
* Vercel

## Dynamic Articles

Articles are managed entirely through Contentful and rendered dynamically by Next.js.

```text
/knowledge-center/[slug]
```

For example:

```text
/knowledge-center/understanding-sexual-health-what-everyone-should-know
```

The route retrieves the corresponding Contentful entry and renders the article without requiring a separate frontend page for every article.

## Project Structure

```text
src/
├── app/
│   ├── knowledge-center/
│   │   ├── page.tsx
│   │   └── [slug]/
│   │       └── page.tsx
│   ├── services/
│   └── ...
│
├── components/
├── hooks/
│   ├── getArticle.ts
│   └── getArticles.ts
│
├── lib/
│   └── contentfulClient.ts
│
└── types/
    └── article.ts
```

## Environment Variables

Create `.env.local`:

```env
CONTENTFUL_SPACE_ID=your_space_id
CONTENTFUL_ACCESS_TOKEN=your_contentful_access_token
```

Never commit these credentials to source control.

## Running Locally

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:3000
```

## Deployment

The Next.js application is deployed through **Vercel**, while Contentful provides the managed CMS and content infrastructure.

## What This Project Demonstrates

* Full-stack Next.js development
* Headless CMS integration
* Dynamic routing
* Server-side data fetching
* Content modelling
* Responsive frontend development
* Cloud deployment
* Real-world healthcare application development
* Architectural decision-making focused on long-term maintainability
