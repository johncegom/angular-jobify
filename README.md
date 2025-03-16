# Jobify

A modern job board platform connecting job seekers and employers in real-time.

![Jobify Banner](assets/images/banner.png)

## Overview

Jobify is a modern **Job Board Platform** built with **Angular** and **Firebase**, offering real-time job postings, authentication, and role-based access control (RBAC). The platform enables **job seekers** to explore and apply for jobs, while **employers** can post and manage job listings. **Admin users** oversee the system, ensuring a smooth and secure experience for all users.

## Features

### MVP Features

- User authentication with role-based access (Job Seekers, Employers)
- Job posting and management for employers
- Job browsing and application for job seekers
- Responsive design (mobile and desktop support)
- Basic search and filter functionality

### Planned Features

- Admin panel with moderation tools
- Advanced search and filtering options
- Resume management for job seekers
- Premium features and subscription model
- Analytics dashboard for employers and admins

## Tech Stack

- **Frontend:** Angular (Standalone Components, Angular Material, SCSS)
- **Backend & Database:** Firebase (Firestore, Authentication)

## Getting Started

### Prerequisites

- Node.js (v16+)
- Angular CLI (latest)
- Firebase CLI

### Installation

1. Clone the repository

```
git clone https://github.com/yourusername/jobify.git
cd jobify
```

2. Install dependencies

```
npm install
```

3. Set up Firebase

   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Enable Authentication and Firestore
   - Add your Firebase config to environment files

4. Run the development server

```
ng serve
```

5. Navigate to `http://localhost:4200/`

## Project Structure

```
src/
├── app/
│   ├── core/              # Core functionality
│   │   ├── models/        # Data models and interfaces
│   │   └── services/      # Core services (auth, etc.)
│   ├── features/          # Feature modules
│   │   ├── auth/          # Authentication feature
│   │   │   └── components/# Login, Register components
│   │   └── home/          # Home feature
│   ├── shared/            # Shared components
│   │   └── components/    # Reusable UI components
│   │       ├── footer/
│   │       ├── nav-bar/
│   │       └── not-found/
│   ├── app.component.*    # Root component
│   ├── app.config.ts      # App configuration
│   └── app.routes.ts      # Application routes
├── assets/                # Static assets
├── environments/          # Environment configurations
│   ├── environment.ts     # Development environment
│   └── environment.development.ts
└── styles/                # Global styles
```

## Environment Configuration

The application requires Firebase configuration in the environment files. Create a `src/environments/environment.ts` file with the following structure:

```typescript
export const environment = {
  production: false, // or true for production
  firebase: {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID",
  },
};
```

## Development Roadmap

The project is being developed in phases:

1. **Phase 1: MVP** (7-8 weeks)

   - Core authentication
   - Job posting and browsing
   - Basic application process
   - Responsive UI implementation

2. **Phase 2: Enhancements**

   - Admin functionality
   - Advanced search features
   - Resume management
   - UI/UX improvements

3. **Phase 3: Advanced Features**
   - Premium features
   - Analytics system
   - Integration expansions

## Contributing

This is a personal project but suggestions and feedback are welcome. Please feel free to open issues for bugs or feature requests.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

© 2025 Jobify. All rights reserved.
