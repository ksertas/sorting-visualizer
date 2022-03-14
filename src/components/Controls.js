import { Button } from '@mui/material';
import React, { useContext } from 'react';
import { AlgorithmContext } from '../contexts/AlgorithmContext';
import { SortingSettingsContext } from '../contexts/SortingSettingsContext';

export default function Controls() {

  const {arrayLength, setArrayLength} = useContext(SortingSettingsContext);
  const {isRunning, setRunning, isFinished} = useContext(AlgorithmContext);

  if (arrayLength !== 0) {
    localStorage.setItem('length', arrayLength);
  }
  
  const runAgain = () => {
    setArrayLength(0);
    setTimeout(() => {
      setArrayLength(parseInt(localStorage.getItem('length')));
      setRunning(true);
    }, 0);
  };

  const stopSort = () => {
    setArrayLength(0);
    setTimeout(() => {
      setArrayLength(parseInt(localStorage.getItem('length')));
      setRunning(false);
    }, 0);
  };

  return (
    <div className='bg-white-100 dark:bg-container-dark w-24 rounded-sm mx-auto flex justify-center py-4 px-16 mt-24 lg:mt-0 lg:mx-0 lg:col-start-3 lg:col-span-1 lg:w-auto xl:col-start-3 xl:col-span-2'>
      { !isRunning && isFinished ? 
        <Button variant='contained' className='lg:w-24 lg:h-12 xl:w-32' onClick={() => runAgain()}>Run again</Button> :
        !isRunning ?
          <Button variant='contained' className='lg:w-24 lg:h-12 xl:w-32' onClick={() => setRunning(true)}>Run</Button> :
          <Button variant='contained' color='error' className='lg:w-24 lg:h-12 xl:w-32' onClick={() => stopSort()}>Stop</Button>}
    </div>
  );
}
