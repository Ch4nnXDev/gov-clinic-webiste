# Sexual Health Centre — Anuradhapura

A production-oriented healthcare website and content management system developed for the **Sexual Health Centre at Teaching Hospital, Anuradhapura, Sri Lanka**.

The platform provides a public-facing website for patients and visitors while giving authorized clinic staff a dedicated CMS for managing website content without requiring developer intervention.

---

## Overview

The Sexual Health Centre website was designed to solve a practical problem: healthcare staff needed a reliable way to publish and maintain important clinic information while keeping the public website accessible, structured, and easy to navigate.

The system consists of two primary parts:

* **Public Website** — Provides visitors with information about the centre, services, resources, announcements, and other healthcare-related content.
* **Content Management System (CMS)** — Allows authorized staff to manage website content through an administrative interface.

Rather than hard-coding every page and piece of content, the application uses a backend API and PostgreSQL database to make the website content dynamic.

### Key Goals

* Provide accessible and structured healthcare information.
* Allow non-technical staff to manage website content.
* Separate the frontend presentation layer from backend business logic.
* Provide a maintainable API-driven architecture.
* Store content persistently in PostgreSQL.
* Deploy the application using modern cloud infrastructure.
* Build the system with production maintainability in mind.

---

## Architecture

The application follows a separated frontend/backend architecture.

```text
                    ┌─────────────────────────┐
                    │       Public Users      │
                    │   Patients / Visitors   │
                    └────────────┬────────────┘
                                 │
                                 ▼
                    ┌─────────────────────────┐
                    │      Next.js Frontend   │
                    │     Public Website      │
                    └────────────┬────────────┘
                                 │
                                 │ REST API
                                 ▼
                    ┌─────────────────────────┐
                    │    Node.js + Express    │
                    │       Backend API       │
                    └────────────┬────────────┘
                                 │
                                 ▼
                    ┌─────────────────────────┐
                    │       PostgreSQL        │
                    │        Database         │
                    └─────────────────────────┘


                    ┌─────────────────────────┐
                    │      Clinic Staff       │
                    │   Authorized Users      │
                    └────────────┬────────────┘
                                 │
                                 ▼
                    ┌─────────────────────────┐
                    │       CMS Interface     │
                    │        Next.js          │
                    └────────────┬────────────┘
                                 │
                                 │ REST API
                                 ▼
                    ┌─────────────────────────┐
                    │    Node.js + Express    │
                    │       Backend API       │
                    └────────────┬────────────┘
                                 │
                                 ▼
                    ┌─────────────────────────┐
                    │       PostgreSQL        │
                    └─────────────────────────┘
```

This separation allows the frontend and backend to evolve independently and keeps database access and business logic away from the client.

---

## Technology Stack

### Frontend

* **Next.js**
* React
* JavaScript / TypeScript
* Responsive UI
* API-driven dynamic content

### Backend

* **Node.js**
* **Express.js**
* RESTful API architecture
* Authentication and authorization
* Server-side validation
* Centralized error handling

### Database

* **PostgreSQL**
* Relational data modelling
* Persistent content storage
* Structured relationships between entities

### Deployment

* **Vercel** — Frontend deployment
* **Render** — Backend/API deployment
* PostgreSQL — Production database

---

# Core Features

## 1. Public Healthcare Website

The public website provides visitors with access to important information about the Sexual Health Centre.

Content can include:

* Centre information
* Available services
* Clinic information
* Healthcare resources
* Announcements
* Educational material
* Contact information
* Documents and downloadable resources

The frontend consumes content through the backend API instead of relying entirely on static hard-coded pages.

---

## 2. Content Management System

A dedicated CMS allows authorized staff to manage website content.

Staff can update content without needing to:

1. Modify source code
2. Create a pull request
3. Wait for a developer
4. Deploy a new version of the application

This makes the platform significantly more practical for a real organization.

The CMS is designed around the principle:

```text
Staff → CMS → API → Database → Public Website
```

When content is updated through the CMS, the public website can retrieve the updated information through the API.

---

## 3. API-Driven Architecture

The frontend communicates with the backend through HTTP APIs.

Example architecture:

```text
Next.js
   │
   │ HTTP Request
   ▼
Express API
   │
   │ Database Query
   ▼
PostgreSQL
```

This provides a clean separation between:

* UI logic
* API logic
* Business logic
* Data persistence

It also makes the backend reusable if another client, mobile application, or administrative interface needs to consume the same data in the future.

---

# Backend Architecture

The backend follows a modular Express architecture.

A simplified structure is:

```text
backend/
│
├── controllers/
│
├── routes/
│
├── models/
│
├── middleware/
│
├── services/
│
├── config/
│
└── server.js
```

### Routes

Responsible for defining API endpoints.

```text
HTTP Request
      │
      ▼
   Route
      │
      ▼
 Controller
```

### Controllers

Controllers handle HTTP-level concerns and coordinate application operations.

They receive requests, invoke the required services, and return responses.

### Services

Business logic can be separated from HTTP-specific code.

This prevents controllers from becoming large blocks of application logic and makes functionality easier to test and maintain.

### Middleware

Middleware is used for cross-cutting concerns such as:

* Authentication
* Authorization
* Request processing
* Validation
* Error handling

---

# Database Design

PostgreSQL is used as the persistent data layer.

The relational database was selected because the system contains structured entities and relationships that benefit from relational modelling.

A simplified data flow is:

```text
CMS
 │
 ▼
REST API
 │
 ▼
Business Logic
 │
 ▼
PostgreSQL
 │
 ▼
Stored Content
 │
 ▼
Public API
 │
 ▼
Next.js Website
```

Using a database allows website content to remain independent from the application's source code.

---

# Authentication & Authorization

The CMS is intended for authorized staff rather than unrestricted public access.

The system therefore separates:

```text
Public User
    │
    └── Read public content


Authorized Staff
    │
    ├── Read content
    ├── Create content
    ├── Update content
    └── Manage CMS resources
```

Authentication protects administrative functionality while authorization determines which operations an authenticated user can perform.

This prevents administrative endpoints from being exposed as publicly writable APIs.

---

# Security Considerations

Because this project handles a healthcare organization's public-facing information, security and maintainability were considered throughout the architecture.

Key considerations include:

* Authentication for administrative functionality
* Authorization for protected operations
* Server-side validation
* Separation of frontend and backend responsibilities
* Environment variables for sensitive configuration
* Database credentials kept outside source control
* Controlled API access
* Centralized error handling
* Protection of administrative endpoints

Sensitive configuration should be supplied through environment variables rather than committed to Git.

Example:

```env
DATABASE_URL=...
JWT_SECRET=...
API_URL=...
```

The actual production values should never be committed to the repository.

---

# Error Handling

The backend uses centralized error-handling principles so that API errors can be handled consistently.

Instead of every controller implementing its own response format, errors can be passed to centralized middleware.

Conceptually:

```text
Request
   │
   ▼
Route
   │
   ▼
Controller
   │
   ├── Success ──► Response
   │
   └── Error ────► Error Middleware
                         │
                         ▼
                    HTTP Response
```

This makes the API easier to maintain and provides a consistent interface for frontend clients.

---

# Frontend Architecture

The Next.js application is responsible for:

* Rendering the public website
* Displaying dynamic API content
* Handling navigation
* Providing responsive interfaces
* Providing CMS interfaces where applicable
* Communicating with the backend API

The frontend does not directly communicate with PostgreSQL.

Instead:

```text
Browser
   │
   ▼
Next.js
   │
   ▼
Express API
   │
   ▼
PostgreSQL
```

This prevents database credentials and database operations from being exposed to the client.

---

# Deployment Architecture

The production deployment separates the frontend and backend.

```text
                  Internet
                     │
          ┌──────────┴──────────┐
          │                     │
          ▼                     ▼
      Vercel                  Render
          │                     │
          ▼                     ▼
      Next.js              Express API
                                │
                                ▼
                           PostgreSQL
```

### Frontend — Vercel

The Next.js application is deployed through Vercel.

Benefits include:

* Automated deployments
* Git-based deployment workflow
* CDN-backed delivery
* Environment variable management
* Next.js integration

### Backend — Render

The Express API runs independently from the frontend.

This allows the API to be deployed and scaled separately from the presentation layer.

---

# Development Workflow

The project follows a Git-based development workflow.

```text
Developer
    │
    ▼
Local Development
    │
    ▼
Git Commit
    │
    ▼
GitHub
    │
    ▼
Deployment Platform
    │
    ├── Vercel → Frontend
    │
    └── Render → Backend
```

This provides a clear separation between development, source control, and deployment.

---

# Project Structure

A simplified repository structure:

```text
gov-clinic-webiste/
│
├── frontend/
│   ├── app/
│   ├── components/
│   ├── lib/
│   └── ...
│
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── services/
│   ├── middleware/
│   ├── models/
│   └── ...
│
├── README.md
└── ...
```

The exact structure may evolve as the project develops.

---

# Engineering Challenges

## Dynamic Content Management

One of the main challenges was designing the website so that content could be updated without modifying the frontend source code.

The solution was to introduce a CMS backed by an API and database.

```text
Hard-coded Website

Developer → Code Change → Git → Deployment
```

was replaced with:

```text
CMS User → API → Database → Website
```

This significantly reduces the dependency on developers for routine content updates.

---

## Frontend / Backend Separation

Another architectural consideration was keeping the frontend independent from database operations.

Rather than:

```text
Next.js → PostgreSQL
```

the system uses:

```text
Next.js → Express API → PostgreSQL
```

This provides a clear backend boundary and makes the system easier to extend.

---

## Production Deployment

The application also required coordinating multiple deployment environments.

The production architecture separates:

* Frontend hosting
* Backend hosting
* Database infrastructure
* Environment configuration

This provides a more realistic architecture than running the entire application as a single local process.

---

# What This Project Demonstrates

From an engineering perspective, this project demonstrates experience with:

### Full-Stack Development

Building both the client-facing application and backend API.

### REST API Development

Designing HTTP endpoints for communication between the frontend, CMS, and backend.

### Database Engineering

Designing and integrating a PostgreSQL relational database.

### Authentication & Authorization

Protecting administrative functionality from unauthorized access.

### Software Architecture

Separating presentation, API, business logic, and persistence layers.

### Cloud Deployment

Deploying independent frontend and backend services.

### Production-Oriented Development

Building software for an actual organizational use case rather than only a tutorial or academic demonstration.

### CMS Architecture

Creating a system that allows non-developers to manage application content.

---

# Running Locally

## Pr
