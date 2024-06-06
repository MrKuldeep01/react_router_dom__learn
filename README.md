
# React.js Learning react router dom from "CHAI AUR CODE" on youtube. ▶

## Table of Contents
1. [Introduction](#introduction)
2. [Setup and Configuration](#setup-and-configuration)
3. [Tailwind CSS Configuration](#tailwind-css-configuration)
4. [React Router DOM](#react-router-dom)
   - [RouterProvider and Router Creation](#routerprovider-and-router-creation)
   - [useParams Hook](#useparams-hook)
   - [createBrowserRouter](#createbrowserrouter)
   - [createRouterFromElements](#createrouterfromelements)
   - [Path and Element](#path-and-element)
   - [Loader](#loader)
   - [Route Nesting](#route-nesting)
   - [Handling Dynamic Parameters](#handling-dynamic-parameters)
5. [Fetching API Data and Displaying Fetched Data](#fetching-api-data-and-displaying-fetched-data)
6. [Navigation Components](#navigation-components)
   - [Link](#link)
   - [NavLink](#navlink)

## Introduction
This README file documents my learning journey with React.js, covering Tailwind CSS configuration, React Router DOM fundamentals, API data fetching, and navigation components like `Link` and `NavLink`.

## Setup and Configuration
1. **Node.js and npm**: Ensure you have Node.js and npm installed.
2. **Create React App**: Initialize your project with Create React App.
   ```bash
   npx create-react-app my-app
   cd my-app
   ```

## Tailwind CSS Configuration
Tailwind CSS is a utility-first CSS framework for rapidly building custom designs. Here's how to configure it with your React app:
1. Install Tailwind CSS via npm.
   ```bash
   npm install tailwindcss
   ```
2. Create a Tailwind configuration file.
   ```bash
   npx tailwindcss init
   ```
3. Add Tailwind to your CSS file (usually `src/index.css`).
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```
4. Update your `tailwind.config.js` to include paths to all your template files.

## React Router DOM
React Router DOM is a collection of navigational components that compose declaratively with your application.

### RouterProvider and Router Creation
`RouterProvider` is the top-level component that provides the routing context to your app.
```jsx
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  // Define your routes here
]);

function App() {
  return (
    <RouterProvider router={router}>
      {/* Your app components */}
    </RouterProvider>
  );
}
```

### useParams Hook
The `useParams` hook returns an object of key-value pairs of the dynamic params from the current URL.
```jsx
import { useParams } from 'react-router-dom';

function UserProfile() {
  const { userId } = useParams();
  return <div>User ID: {userId}</div>;
}
```

### createBrowserRouter
`createBrowserRouter` is used to create a router with browser history.
```jsx
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "about",
    element: <AboutPage />,
  },
]);
```

### createRouterFromElements
`createRouterFromElements` is an alternative to define routes using JSX.
```jsx
import { createRouterFromElements, Route } from 'react-router-dom';

const router = createRouterFromElements(
  <Route path="/" element={<App />}>
    <Route path="about" element={<AboutPage />} />
  </Route>
);
```

### Path and Element
The `path` defines the route URL, and `element` specifies the component to render.
```jsx
<Route path="/contact" element={<ContactPage />} />
```

### Loader
Loaders allow you to fetch data before rendering a route.
```jsx
const router = createBrowserRouter([
  {
    path: "/users",
    element: <UsersPage />,
    loader: async () => {
      const response = await fetch("/api/users");
      return response.json();
    },
  },
]);
```

### Route Nesting
Route nesting enables complex UIs with nested layouts.
```jsx
<Route path="/dashboard" element={<Dashboard />}>
  <Route path="stats" element={<Stats />} />
  <Route path="settings" element={<Settings />} />
</Route>
```

### Handling Dynamic Parameters
Dynamic parameters are handled with `:param` syntax in the path.
```jsx
<Route path="/user/:userId" element={<UserProfile />} />
```

## Fetching API Data and Displaying Fetched Data
Fetching data from APIs and displaying it within components is a common task.
```jsx
import { useEffect, useState } from 'react';

function DataFetchingComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api/data')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <div>
      {data ? (
        <div>{JSON.stringify(data)}</div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
```

## Navigation Components
### Link
`Link` is used to navigate to different routes in the application.
```jsx
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}
```

### NavLink
`NavLink` is similar to `Link` but allows you to apply active styles.
```jsx
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <NavLink to="/" activeClassName="active">Home</NavLink>
      <NavLink to="/about" activeClassName="active">About</NavLink>
    </nav>
  );
}
```

This README covers the fundamental aspects of configuring and using React.js with Tailwind CSS, React Router DOM, and API data fetching. Happy coding!👨‍💻🚀