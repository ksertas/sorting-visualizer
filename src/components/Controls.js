import { Button } from '@mui/material';
import React, { useContext } from 'react';
import { AlgorithmContext } from '../contexts/AlgorithmContext';

export default function Controls() {

  const {setRunning} = useContext(AlgorithmContext);

  return (
    <div className='bg-container-dark w-24 mx-auto flex justify-center py-4 px-16 mt-48 lg:mt-0 lg:mx-0 lg:col-start-3 lg:col-span-1 lg:w-auto xl:col-start-3 xl:col-span-2'>
      <Button variant='contained' className='lg:w-24 lg:h-12 xl:w-32' onClick={() => setRunning(true)}>Run</Button>
    </div>
  );
}
