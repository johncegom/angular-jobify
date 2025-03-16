# Jobify Project - Copilot Instructions

## General Guidelines

- Follow Angular 19 best practices and patterns
- Write clean, maintainable, and well-documented code
- Ensure code is properly typed with TypeScript
- In TypeScript always use underscore prefix for private field names (e.g., `private _userState`)
- Focus on implementing the user stories described in the project documentation

## Architecture & Structure

- Use standalone components architecture
- Follow feature-based organization
- Create reusable, single-responsibility components
- Implement lazy loading for feature modules
- Use reactive programming patterns with RxJS and Angular Signals

## Firebase Implementation

- Follow Firebase best practices for Angular integration
- Implement proper error handling for all Firebase operations
- Store user data in Firestore with appropriate security rules
- Use `inject()` for Firebase services instead of constructor injection

## Authentication

- Implement clean separation between Firebase Authentication and application user data
- Use guards for protected routes and content
- Implement role-based access control for different user types (job seekers, employers, admins)
- Handle authentication state reactively

## Form Implementations

- Use reactive forms with proper validation
- Create reusable form components where applicable
- Implement appropriate error messages and validation feedback
- Handle form submission with loading states

## UI Guidelines

- Use Angular Material components with consistent styling
- Ensure responsive design for all components
- Implement proper loading states and error handling in the UI
- Follow accessibility best practices

## Performance Considerations

- Implement OnPush change detection strategy
- Use trackBy with ngFor directives
- Optimize rendering and re-rendering of components
- Follow proper subscription management practices

## Component Coding Style

When generating components:

- Place presentational logic in the template
- Keep business logic in the component class
- Use Angular signals for local state management
- Follow consistent naming conventions

## Service Coding Style

When generating services:

- Create proper interfaces for data models
- Implement comprehensive error handling
- Return Observables for asynchronous operations
- Use proper RxJS operators for data transformation

## Testing Suggestions

When generating or modifying code, suggest appropriate test cases that would verify:

- Component rendering
- Service functionality
- User interactions
- Edge cases and error states
