# Architecturio

A modern React + TypeScript application built with Vite.

## 🚀 Features

- **Modern Tech Stack**: Built with React 18, TypeScript, SCSS, and Vite for optimal development experience
- **Error Boundaries**: Graceful error handling throughout the application
- **Type Safety**: Full TypeScript integration with strict type checking
- **Performance Optimized**: Implements React best practices for optimal performance
- **Responsive Design**: Mobile-first approach with modern UI/UX principles
- **Testing Setup**: Comprehensive testing infrastructure

## 🛠️ Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: TailwindCSS & SCSS
- **State Management**: React Context API & Core React Hooks
- **Routing**: React Router
- **Linting**: ESLint with React-specific rules
- **Testing**: Jest and React Testing Library

## 📦 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone [repository-url]

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5000`

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run test` - Run tests
- `npm run lint` - Run linting

### Project Structure

```
src/
├── components/     # Reusable components
├── pages/          # Page components
├── utils/          # Utility functions
├── data/           # Needed data
├── styles/         # SCSS styles
└── App.tsx         # Root component
```

### Code Style

The project uses ESLint with TypeScript-aware rules. Key configurations include:

- Type-aware linting with `tseslint.configs.recommendedTypeChecked`
- React-specific rules with `eslint-plugin-react-x` and `eslint-plugin-react-dom`
- Strict type checking enabled

```js
// Example ESLint configuration
export default tseslint.config({
  extends: [
    ...tseslint.configs.recommendedTypeChecked,
    ...tseslint.configs.strictTypeChecked,
  ],
  plugins: {
    "react-x": reactX,
    "react-dom": reactDom,
  },
});
```

## 🧪 Testing

The project includes a comprehensive testing setup with Jest and React Testing Library. Key testing principles:

- Unit tests for utility functions
- Component tests with React Testing Library
- Integration tests for key user flows

## 🔒 Error Handling

The application implements a robust error handling strategy:

- Global Error Boundary for catching React rendering errors
- Component-level error boundaries for isolated error handling
- Custom error handling hooks for API calls

## 🎯 Performance Optimization

- Code splitting with React.lazy()
- Efficient state management
- Memoization where beneficial

## 📱 Responsive Design

The application follows a mobile-first approach with responsive breakpoints:

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px
