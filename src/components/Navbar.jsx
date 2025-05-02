import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="toggle-wrapper">
      <button onClick={toggleTheme} className="theme-toggle-btn">
        🌓
      </button>
    </div>
  );
};

export default Navbar;