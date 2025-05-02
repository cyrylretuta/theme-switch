# Theme Switcher App

A simple React application that allows users to toggle between light and dark themes using the Context API and a custom hook.

## Technologies Used

- React
- JavaScript (ES6+)
- Context API
- Custom Hooks
- CSS
- GitHub Pages for deployment

## Context API & Custom Hook Explanation

We created a `ThemeContext` to manage the theme state globally across components like Navbar, Content, and Footer. A custom hook `useTheme()` was used to encapsulate and simplify access to the context:

// context/themecontext.js
export const useTheme = () => useContext(ThemeContext);

## Run Locally
To run the project locally:

# 1. Clone the repository:

git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>

# 2. Install dependencies:

npm install

# 3. Start the app:

npm start

Visit http://localhost:3000 in your browser to view the app.

## Live Demo

[Live Demo](https://cyrylretuta.github.io/theme-switch/)
