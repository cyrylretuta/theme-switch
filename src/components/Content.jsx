import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Content = () => {
  const { theme } = useTheme();

  return (
    <div className={`content ${theme}`}>
    </div>
  );
};

export default Content;