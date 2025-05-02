import React from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Content from './components/Content';
import './index.css';

// This component applies the theme class to the top-level wrapper
const ThemedApp = () => {
  const { theme } = useTheme();

  return (
    <div className={`app-container ${theme}`}>
      <Navbar />
      <Content />
      <Footer />
    </div>
  );
};

const App = () => (
  <ThemeProvider>
    <ThemedApp />
  </ThemeProvider>
);

export default App;