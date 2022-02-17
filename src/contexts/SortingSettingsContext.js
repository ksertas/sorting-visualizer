import React, { createContext, useState } from 'react';

export const SortingSettingsContext = createContext(null);

export default function SortingSettingsProvider({children}) {
  const [sortingSpeed, setSortingSpeed] = useState(1);
  const [arrayLength, setArrayLength] = useState(50);
  const [invertBars, setInvertBars] = useState(false);

  const contextData = {
    sortingSpeed: sortingSpeed,
    setSortingSpeed: setSortingSpeed,
    arrayLength: arrayLength,
    setArrayLength: setArrayLength,
    invertBars: invertBars,
    setInvertBars: setInvertBars
  };
  
  
  return (
    <SortingSettingsContext.Provider value={contextData}>
      {children}
    </SortingSettingsContext.Provider>
  );
}
