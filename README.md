
**Dependencies:**

**1. axios (v^1.3.4 or later):**

- **Purpose:** A popular promise-based HTTP client for browser and Node.js environments. It simplifies making asynchronous HTTP requests from your React application to backend APIs or other web services.
- **Installation:**
  ```bash
  npm install axios
  ```
  or
  ```bash
  yarn add axios
  ```

**2. moment.js (v^2.29.4 or later):**

- **Purpose:** A powerful library for working with dates and times in JavaScript. It provides a rich set of features for parsing, formatting, manipulating, and displaying dates.
- **Installation:**
  ```bash
  npm install moment
  ```
  or
  ```bash
  yarn add moment
  ```

**3. normalize.css (v^8.0.1 or later):**

- **Purpose:** A CSS reset stylesheet that aims to normalize styles across different browsers, providing a consistent baseline for your React application's CSS. It addresses common inconsistencies in box-sizing, margins, padding, fonts, and more.
- **Installation:**
  - **Option 1: Download:** Download the `normalize.css` file from [https://necolas.github.io/normalize.css/](https://necolas.github.io/normalize.css/) and include it in your main CSS file or import it using a CSS preprocessor like Sass/Less.
  - **Option 2: Package Manager:** While not strictly necessary to install with a package manager, you can include it in your `package.json` dependencies:
    ```json
    {
      "dependencies": {
        "normalize.css": "^8.0.1"
      }
    }
    ```

**4. React (v^18.2.0 or later):**

- **Purpose:** The core JavaScript library for building user interfaces with a declarative, component-based approach. It allows you to create reusable UI components that manage their own state and behavior.
- **Installation:** We recommend using `create-react-app` to set up a new React project, which includes React, react-dom, and other essential tools:
  ```bash
  npx create-react-app my-app
  ```
  This creates a new project directory `my-app` with React and tools pre-configured.

**5. react-dom (v^18.2.0 or later):**

- **Purpose:** Companion library to React, responsible for rendering React components to a web page's DOM (Document Object Model). It facilitates the interaction between React's virtual DOM and the browser's real DOM.
- **Installation:** Installed automatically when you install React using `create-react-app`.

**6. react-icons (v^4.8.0 or later):**

- **Purpose:** Provides a collection of SVG icons for use within your React components. It saves you from managing icons manually and offers a wide range of icons across various categories.
- **Installation:**
  ```bash
  npm install react-icons
  ```
  or
  ```bash
  yarn add react-icons
  ```

**7. react-redux (v^8.0.5 or later):**

- **Purpose:** Binds React applications to Redux, a predictable state management library. It allows you to manage your application's state in a centralized manner and connect React components to the Redux store.
- **Installation:**
  ```bash
  npm install react-redux
  ```
  or
  ```bash
  yarn add react-redux
  ```

**8. react-router-dom (v^6.8.2 or later):**

- **Purpose:** Official routing library for React applications. It allows you to declaratively handle navigation between different views (components) within your app, with features like URL parsing, history management, and component rendering based on the URL.
- **Installation:**
  ```bash
  npm install react-router-dom
  ```
  or
  ```bash
  yarn add react-router-dom
  ```

**9. react-scripts (v5.0.1 or later):**

- **Purpose:** Usually part of `create-react-app`. It's a set of scripts that provide a development environment with hot reloading, bundling, and


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
