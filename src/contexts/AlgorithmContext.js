import React, { createContext, useState } from 'react';

export const AlgorithmContext = createContext(null);

export default function AlgorithmProvider({children}) {
  const [selectedAlgorithm, setSelectedAlgorithm] = useState('bubble sort');
  const availableAlgorithms = ['bubble sort', 'quick sort', 'merge sort', 'selection sort'];

  const contextData = {
    selectedAlgorithm: selectedAlgorithm,
    setSelectedAlgorithm: setSelectedAlgorithm,
    availableAlgorithms: availableAlgorithms
  };

  return (
    <AlgorithmContext.Provider value={contextData}>
      {children}
    </AlgorithmContext.Provider>
  );
}
