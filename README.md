# Mental Healthcare Application

## Overview
This application is designed to support mental health professionals and their clients by providing tools and resources in an easy-to-navigate format. The project uses React, TypeScript, and Tailwind CSS for a responsive and accessible user experience.

## Project Structure

### `src/`
Contains all the source files for the application, organized into specific directories for components, utilities, services, and more.

#### `components/`
Components are split into UI components and feature-specific components, each with its own subdirectory for related components and their tests.

##### `ui/`
Each UI component has its own folder containing the component file and its test file.
```plaintext
src/
└── components/
    └── ui/
        ├── avatar/
        │   ├── Avatar.tsx
        │   └── Avatar.test.tsx
        ├── breadcrumb/
        │   ├── Breadcrumb.tsx
        │   └── Breadcrumb.test.tsx
        ├── button/
        │   ├── Button.tsx
        │   └── Button.test.tsx
        └── ... other components ...
```

##### `features/`
Feature-specific components, such as chat-related components, that are specific to particular application functionalities.

#### `routes/`
Organized into directories for each major feature, grouping related routes together for clarity and maintainability.
```plaintext
src/
└── routes/
    ├── dashboard/
    │   └── dashboard.tsx
    ├── settings/
    │   ├── settings.tsx
    │   ├── settings.index.tsx
    │   └── settings.receipts.tsx
    ├── activity/
    │   ├── activity.course.$courseId.tsx
    │   ├── activity.article.$articleId.tsx
    │   ├── activity.myactivity.$myactivityId.tsx
    │   └── activity.index.tsx
    ├── consultation/
    │   ├── consultation.$doctorId.tsx
    │   └── consultation.index.tsx
    ├── assessment/
    │   ├── assessment.$assessmentId.tsx
    │   └── assessment.index.tsx
```

#### `services/`
Houses the business logic and API interaction layers, essential for managing state and server communication.

#### `hooks/`
Contains custom React hooks that provide reusable stateful logic across different components.

#### `assets/`
Static resources such as images, icons, and stylesheets used throughout the application.

## Testing Strategy

Tests are integral to ensuring the reliability and security of the application, particularly important in the healthcare context. Each component has associated tests to verify its functionality, accessibility, and secure handling of data.

### Test Setup
- **Unit Tests**: We use Jest and React Testing Library to perform unit testing on each component, ensuring they function correctly in isolation.
- **Integration Tests**: These tests check the interaction between multiple components and services.
- **End-to-End Tests**: Conducted to ensure that the application flows are working as expected from start to finish.


## CI/CD with GitHub Actions

GitHub Actions is used to automate our continuous integration and deployment pipeline. Below is an outline of the workflow:

1. **Build**: On every commit to the main branch, build the application and run all unit and integration tests.
2. **Deploy**: If the build and tests are successful, deploy the application automatically to AWS.

## Setup Instructions

1. Install dependencies:
   ```bash
   npm install

   ```
2. Run the development server: 
```bash
  npm run dev
  ```
3. Build for production:
   ```bash
   npm run build
   ```