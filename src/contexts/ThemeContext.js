import React, { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext(null);

export default function ThemeProvider({children}) {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (localStorage.getItem('darkMode') === 'dark') {
      enableDarkMode();
    } else {
      disableDarkMode();
    }
  }, []);

  function enableDarkMode() {
    setTheme('dark');
    localStorage.setItem('darkMode', 'dark');
    document.documentElement.classList.add('dark');
  }

  function disableDarkMode() {
    setTheme(null);
    localStorage.setItem('darkMode', null);
    document.documentElement.classList.remove('dark');
  }
  
  const contextData = {
    theme: theme,
    enableDarkMode: enableDarkMode,
    disableDarkMode: disableDarkMode
  };

  return (
    <ThemeContext.Provider value={contextData}>
      {children}
    </ThemeContext.Provider>
  );
}
