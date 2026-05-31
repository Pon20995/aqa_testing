# AQA Testing Project 2024

A comprehensive Automation QA project demonstrating JavaScript fundamentals, advanced concepts, and testing frameworks.

## 📋 Project Overview

This project is an educational repository created during a course at Hillel IT School. It contains examples of JavaScript code, including:

- **Core JavaScript Concepts**: Functions, objects, arrays, async/await, conditions, loops, OOP principles, and more
- **Testing Frameworks**: Cypress-based end-to-end testing with custom reporting
- **Code Quality Tools**: ESLint, Prettier, and Husky for maintaining code standards

## 🏗️ Project Structure

```
├── lesson4-12/              # Individual lesson directories with JS examples
├── cypress/                 # E2E test specifications
├── cypress.config.js        # Cypress configuration
├── package.json             # Project dependencies and scripts
├── .eslintrc.cjs           # ESLint configuration
├── .prettierrc              # Prettier formatting rules
└── .husky/                  # Git hooks configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Pon20995/aqa_testing.git

# Install dependencies
npm install
```

### Available Scripts

```bash
# Run ESLint to check code quality
npm run lint

# Run Cypress tests in headed mode (with browser visible)
npm run cy:run:headed -- spec/path/to/spec.cy.js

# Run Cypress tests in headless mode (no browser UI)
npm run cy:run:headless -- spec/path/to/spec.cy.js
```

## 📚 Topics Covered

The project includes practical examples and tests for:

- **Fundamentals**: Variables, data types, operators
- **Functions**: Function declarations, arrow functions, closures
- **Arrays**: Array methods, manipulation, iteration
- **Objects**: Object literals, properties, methods
- **Advanced JS**: Async/await, promises, callbacks
- **OOP**: Classes, inheritance, encapsulation
- **Testing**: E2E testing with Cypress, test reporting
- **Code Quality**: Linting with ESLint, formatting with Prettier

## 🧪 Testing

The project uses **Cypress** for end-to-end testing with the **Mochawesome** reporter for beautiful HTML test reports.

### Running Tests

```bash
# Run all tests in headless mode
npm run cy:run:headless

# Run specific test file in headed mode
npm run cy:run:headed -- cypress/e2e/example.cy.js

# Run with custom environment URL
ENV_URL=https://example.com npm run cy:run:headed -- cypress/e2e/example.cy.js
```

## 🛠️ Development Tools

- **ESLint**: Static code analysis to identify problematic patterns
- **Prettier**: Code formatter for consistent style
- **Husky**: Git hooks to run linting before commits
- **Cypress**: Modern end-to-end testing framework
- **Jest**: JavaScript testing framework
- **Chalk**: Terminal string styling

## 📝 Code Style & Linting

This project follows the **Airbnb JavaScript Style Guide** enforced by ESLint.

```bash
# Check code quality
npm run lint

# The linting runs automatically on pre-commit via Husky
```

## 👨‍💻 Author

**Vladyslav Sofronov**

## 📄 License

ISC

## 🔗 Links

- **Repository**: [github.com/Pon20995/aqa_testing](https://github.com/Pon20995/aqa_testing)
- **Issues**: [Report bugs or suggest features](https://github.com/Pon20995/aqa_testing/issues)

## 🎓 Course Information

This project was created as part of the Automation QA course at **Hillel IT School** in 2024.

---

**Happy Testing! 🚀**
