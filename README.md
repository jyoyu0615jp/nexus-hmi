## Live Demo

- Live Demo: https://nexus-hmi.vercel.app/
- GitHub Repository: https://github.com/jyoyu0615jp/nexus-hmi

The application is deployed on Vercel and can be accessed directly from the link above.

# NEXUS // HMI

An automotive HMI project operations dashboard built with React and TypeScript.

NEXUS // HMI is a portfolio project designed to simulate an internal project management platform for automotive HMI development teams. It centralizes project progress, vehicle information, team assignments, schedules, documents, notifications, and project-related insights in a single interface.

## Overview

Automotive HMI projects often involve multiple clients, vehicle models, designers, engineers, project managers, schedules, and deliverables.

NEXUS // HMI explores how these workflows can be organized into a modern internal dashboard with a clear information architecture and reusable frontend components.

The application is designed around a simple relationship:

**Client → Vehicle Model → HMI Project → Team / Schedule / Documents**

## Features

### Dashboard

Provides a high-level overview of current project activity, including:

* Total projects
* Active projects
* Completed projects
* Average progress
* Recent projects

### Project Management

Browse and manage HMI projects with:

* Keyword search
* Status filtering
* Project progress
* Delivery timeline
* Client and vehicle information
* Assigned project members
* Project detail pages

A project creation form is also included to demonstrate an input workflow for creating new project data.

### Client & Vehicle Management

Projects are structured around automotive clients and vehicle models.

Users can navigate through:

**Clients → Vehicle Models → Related Project Information**

This demonstrates relational data handling across multiple views.

### Team Management

Team members can be searched and filtered by:

* Name
* Role
* Department
* Availability

Individual member pages display their current project assignments and workload.

### Schedule

A calendar-based schedule view provides visibility into:

* Design reviews
* Meetings
* Milestones
* Deliveries

Schedule events are connected to their corresponding project pages.

### Documents

Project documents are organized using the following hierarchy:

**Client → Vehicle Model → Documents**

The interface includes document metadata and a preview modal to simulate an internal document management workflow.

### Notifications

The notification center provides simulated project updates such as:

* Delivery risks
* Design review completion
* Project updates
* Team assignment changes

Notifications link directly to the relevant project.

### AI Assistant

The application includes an AI assistant interface for project-related support.

Current demo capabilities include:

* Project summaries
* Delivery risk analysis
* Team member suggestions
* Weekly project reports

The current implementation uses local project data and rule-based intent handling to simulate an AI-assisted workflow.

The architecture is designed so that the response layer can later be replaced with an LLM/API-based implementation.

### Settings

Users can configure:

* Light / Dark theme
* Display language preference
* Project notifications
* Delivery risk notifications
* AI Assistant visibility

Settings are persisted locally in the browser.

## Tech Stack

* React
* TypeScript
* Vite
* React Router
* Lucide React
* CSS
* Local Storage
* Oxlint

## Architecture

The project uses a feature-based frontend structure:

```text
src/
├── components/
│   ├── common/
│   └── layout/
│
├── features/
│   ├── ai/
│   ├── clients/
│   ├── dashboard/
│   ├── documents/
│   ├── notifications/
│   ├── projects/
│   ├── schedule/
│   ├── settings/
│   ├── team/
│   └── vehicles/
│
├── pages/
├── router/
├── styles/
└── assets/
```

Each feature contains its own components, data, types, styles, and supporting utilities where appropriate.

This structure keeps domain-specific logic separated while allowing shared UI components to be reused throughout the application.

## Application Routes

```text
/
├── /projects
│   ├── /projects/new
│   └── /projects/:projectId
│
├── /clients
│   ├── /clients/:clientId
│   └── /clients/:clientId/vehicles/:vehicleModelId
│
├── /team
│   └── /team/:memberId
│
├── /schedule
│
├── /documents
│   ├── /documents/:clientId
│   └── /documents/:clientId/vehicles/:vehicleModelId
│
└── /settings
```

## Design Approach

The UI was designed as an internal enterprise application rather than a consumer-facing website.

The design focuses on:

* Clear information hierarchy
* Reusable UI components
* Responsive layouts
* Desktop and mobile usability
* Light and dark themes
* Consistent design tokens
* Accessible interactive elements
* Project-oriented navigation

## Responsive Design

The application supports both desktop and mobile layouts.

Desktop navigation uses a sidebar-based workspace, while the mobile interface adapts navigation and dashboard components for smaller screens.

## Data

This portfolio version uses local mock data for:

* Clients
* Vehicle models
* Projects
* Team members
* Project assignments
* Schedule events
* Documents
* Notifications

No confidential or production project data is included.

## AI Integration Roadmap

The current AI Assistant is implemented as a frontend simulation.

A future version could introduce:

```text
React Frontend
      ↓
Backend API
      ↓
LLM
      ↓
Project Context / Retrieval
      ↓
Generated Response
```

Potential future capabilities include:

* Natural-language project queries
* Cross-project risk analysis
* Resource allocation recommendations
* Schedule conflict detection
* Automatic weekly reporting
* Project document retrieval
* Context-aware project assistance

## Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Run lint checks:

```bash
npm run lint
```

## Build Status

Production build and lint checks have been verified successfully.

```text
Build: PASS
Lint: 0 warnings / 0 errors
```

## Project Purpose

This project was created as a frontend engineering portfolio project demonstrating:

* React application architecture
* TypeScript development
* Component-based UI design
* Data-driven interfaces
* Routing and detail views
* Responsive design
* State management
* Project management workflows
* AI-oriented product concepts

It also reflects practical knowledge of automotive HMI development workflows and cross-functional project operations.

## Disclaimer

NEXUS // HMI is a fictional portfolio application.

Company names, vehicle names, project information, team members, schedules, documents, and other data shown in the application are used solely for demonstration purposes and do not represent actual confidential project information.
