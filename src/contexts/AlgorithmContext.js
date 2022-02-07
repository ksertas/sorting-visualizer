import React, { createContext, useState } from 'react';

export const AlgorithmContext = createContext(null);

export default function AlgorithmProvider({children}) {
  const [algorithm, setAlgorithm] = useState('bubbleSort');

  const contextData = {
    algorithm: algorithm,
    setAlgorithm: setAlgorithm
  };

  return (
    <AlgorithmContext.Provider value={contextData}>
      {children}
    </AlgorithmContext.Provider>
  );
}
