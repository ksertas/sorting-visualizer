import React, { createContext, useEffect, useState } from 'react';
import { bubbleSort, insertionSort, runQuickSort, selectionSort } from '../algorithms/algorithms';

export const AlgorithmContext = createContext(null);

export default function AlgorithmProvider({children}) {
  const [selectedAlgorithm, setSelectedAlgorithm] = useState('Bubble sort');
  const availableAlgorithms = ['Bubble sort', 'Quicksort', 'Insertion sort', 'Selection sort'];
  const [isRunning, setRunning] = useState(false);

  const runSelectedAlgorithm = () => {
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
  };

  useEffect(() => {
    if (isRunning) {
      runSelectedAlgorithm();
      checkIfSortIsDone();
    }
  }, [isRunning]);
  
  const checkIfSortIsDone = () => {
    setInterval(() => {
      let divs = document.querySelectorAll('.bar');
      let isSorted = 0;
      for (let i = 0; i < divs.length; i++) {
        if (divs[i].classList.contains('sorted')) {
          isSorted++;
        }
      }
      if (isSorted === divs.length) {
        setRunning(false);
      }
    }, 1000);
  };

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
