import React, { createContext, useEffect, useState } from 'react';
import { bubbleSort, insertionSort, runQuickSort, selectionSort } from '../algorithms/algorithms';

export const AlgorithmContext = createContext(null);

export default function AlgorithmProvider({children}) {
  const [selectedAlgorithm, setSelectedAlgorithm] = useState('Bubble sort');
  const availableAlgorithms = ['Bubble sort', 'Quicksort', 'Insertion sort', 'Selection sort'];
  const [isRunning, setRunning] = useState(false);

  const runSelectedAlgorithm = () => {
    if (isRunning) {
      switch (selectedAlgorithm) {
      case 'Bubble sort':
        bubbleSort();
        break;
      case 'Quicksort':
        runQuickSort();
        break;
      case 'Insertion sort':
        insertionSort();
        break;
      case 'Selection sort':
        selectionSort();
        break;
    
      default:
        break;
      }
    }
  };

  useEffect(() => {
    runSelectedAlgorithm();
  }, [isRunning]);
  

  const contextData = {
    selectedAlgorithm: selectedAlgorithm,
    setSelectedAlgorithm: setSelectedAlgorithm,
    availableAlgorithms: availableAlgorithms,
    isRunning: isRunning,
    setRunning: setRunning
  };

  return (
    <AlgorithmContext.Provider value={contextData}>
      {children}
    </AlgorithmContext.Provider>
  );
}
