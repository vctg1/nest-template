# GitHub Copilot Instructions — Recipe API (NestJS + Prisma)

## Critical Rules
- NEVER create `.md` files
- NEVER suggest README.md or documentation files
- All documentation must be written as code comments
- Only generate TypeScript files
- This is a backend API, not frontend code

---

## Project Context
This API powers a premium recipe application for a culinary influencer named **Patricio Carvalho**.

The API is responsible for managing:
- Recipes
- Ingredients
- Steps
- Videos
- Categories
- Favorites
- Users (future-ready)

The system must be scalable, maintainable, and production-ready.

---

## Tech Stack
- NestJS
- TypeScript (strict)
- Prisma ORM
- PostgreSQL
- REST API
- Zod or class-validator for validation

---

## Architecture Rules
- Follow **NestJS best practices**
- Use a **modular architecture**
- Separate concerns clearly:
  - Controller → HTTP layer
  - Service → Business logic
  - Repository/Prisma → Data access
- Avoid placing business logic inside controllers
- Prefer dependency injection everywhere

---

## General Coding Rules
- Always use TypeScript
- Never use `any`
- Use async/await (never raw promises)
- Prefer explicit return types
- Handle errors explicitly
- Write clean, readable, and predictable code

---

## Prisma Rules
- Use Prisma Client via a dedicated PrismaService
- Never access Prisma directly outside the service layer
- Prefer transactions when writing multiple related records
- Use proper relations and indexes
- Avoid N+1 queries
- Keep Prisma schema normalized and clean

---

## Validation
- Validate all incoming data
- Never trust client input
- Use DTOs for every request
- Prefer Zod or class-validator consistently (do not mix randomly)
- Return meaningful validation errors

---

## API Design
- Use RESTful conventions
- Use clear and predictable routes
- Prefer plural resource names
- Use HTTP status codes correctly
- Keep endpoints focused and single-responsibility

Example:
- GET /recipes
- GET /recipes/:id
- POST /recipes
- PUT /recipes/:id
- DELETE /recipes/:id

---

## Recipes Domain Rules
A recipe should support:
- Title
- Description
- Video URL or reference
- Ingredients (with quantity and unit)
- Steps (ordered)
- Preparation time
- Difficulty level
- Category
- CreatedAt / UpdatedAt

Design the data model to support **video-first experiences**.

---

## Error Handling
- Use NestJS HttpExceptions
- Never leak internal errors
- Return user-friendly error messages
- Log unexpected errors properly

---

## Performance
- Optimize database queries
- Use pagination for list endpoints
- Avoid over-fetching data
- Prefer selecting only necessary fields

---

## Security
- Validate and sanitize inputs
- Prepare for authentication (JWT-ready)
- Avoid exposing sensitive fields
- Never trust request params blindly

---

## Code Organization
- Group files by module (recipes, ingredients, categories, etc.)
- Avoid god-services
- Keep files small and focused
- Prefer clarity over abstraction

---

## Naming Conventions
- Files: kebab-case
- Classes: PascalCase
- Variables and functions: camelCase
- DTOs: Suffix with `Dto`
- Services: Suffix with `Service`
- Controllers: Suffix with `Controller`

---

## What to Avoid
- Creating markdown files
- Fat controllers
- Business logic inside controllers
- Overengineering
- Tight coupling between modules

---

## Mindset
This API supports a **public brand and a consumer product**.

Code should be:
- Predictable
- Easy to reason about
- Safe to evolve
- Production-ready

When in doubt, prioritize **clarity, correctness, and maintainability**.