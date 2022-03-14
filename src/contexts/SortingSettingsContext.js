import React, { createContext, useEffect, useState } from 'react';

export const SortingSettingsContext = createContext(null);

export default function SortingSettingsProvider({children}) {
  const [sortingSpeed, setSortingSpeed] = useState(1);
  const [arrayLength, setArrayLength] = useState(localStorage.getItem('length') ? parseInt(localStorage.getItem('length')) : 50);
  const [invertBars, setInvertBars] = useState(false);

  const contextData = {
    sortingSpeed: sortingSpeed,
    setSortingSpeed: setSortingSpeed,
    arrayLength: arrayLength,
    setArrayLength: setArrayLength,
    invertBars: invertBars,
    setInvertBars: setInvertBars
  };

  useEffect(() => {
    resetBackgroundColors();
  }, [arrayLength]);
  
  const resetBackgroundColors = () => {
    let divs = document.querySelectorAll('.bar');
    for (let i = 0; i < divs.length; i++) {
      divs[i].style.backgroundColor = '#4295d6';
    }
  };
  
  
  return (
    <SortingSettingsContext.Provider value={contextData}>
      {children}
    </SortingSettingsContext.Provider>
  );
}
