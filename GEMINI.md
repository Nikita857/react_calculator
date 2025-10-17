# GEMINI Project Analysis

## Project Overview

This project is a modern calculator application built with React, TypeScript, and Vite. It features a user interface styled with Material-UI, including a custom dark theme. The calculator supports standard and scientific modes, parentheses, and maintains a history of calculations.

- **Framework:** React 19
- **Language:** TypeScript
- **Build Tool:** Vite
- **UI Library:** Material-UI (MUI)
- **Styling:** CSS, Emotion, and a custom theme defined in `App.tsx`.
- **Core Logic:** The `math-expression-evaluator` library is used for evaluating mathematical expressions.

The application is structured with a clear separation of concerns, using React hooks for state management and logic (`useCalculator.ts`), and a component-based architecture for the UI (Display, Keypad, History).

## Key Files

-   `package.json`: Defines project metadata, dependencies (`react`, `vite`, `@mui/material`), and scripts for development, building, and linting.
-   `vite.config.ts`: Configuration file for the Vite build tool. It includes the React plugin (`@vitejs/plugin-react-swc`).
-   `tsconfig.json`: The root TypeScript configuration file, which references project-specific `tsconfig.app.json` and `tsconfig.node.json`.
-   `src/main.tsx`: The main entry point of the application, where the root React component (`App`) is rendered.
-   `src/App.tsx`: The root component of the application. It sets up the main layout, theme (Material-UI), and state management, and composes the different UI components like `Display`, `Keypad`, and `History`.
-   `src/hooks/useCalculator.ts`: A custom React hook that encapsulates the entire logic for the calculator, including handling input, performing calculations, and managing history.
-   `src/components/`: This directory contains the reusable React components that make up the UI, such as `Button`, `Display`, `Keypad`, and `History`.
-   `eslint.config.js`: Contains the ESLint configuration for code linting, ensuring code quality and consistency.

## Building and Running

The following scripts are available in `package.json` to manage the application lifecycle:

-   **`npm run dev`**: Starts the development server with Hot Module Replacement (HMR) for a live development experience.
-   **`npm run build`**: Compiles the TypeScript code and bundles the application for production using Vite.
-   **`npm run lint`**: Runs the ESLint linter to analyze the code for potential errors and style issues.
-   **`npm run preview`**: Starts a local server to preview the production build of the application.

## Development Conventions

-   **Component-Based Architecture:** The UI is built using a modular approach with reusable React components located in `src/components/`.
-   **TypeScript:** The project uses TypeScript for static typing, which helps in catching errors early and improving code quality.
-   **React Hooks:** State and side effects are managed using React Hooks, with custom hooks like `useCalculator` for complex logic.
-   **ESLint:** Code style and quality are enforced through ESLint, with configurations tailored for TypeScript and React.
-   **Styling:** The project uses Material-UI for its component library and theming capabilities. Custom styles are applied via CSS and Emotion.
