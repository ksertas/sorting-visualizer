import { Button } from '@mui/material';
import React, { useContext } from 'react';
import { AlgorithmContext } from '../contexts/AlgorithmContext';

export default function AlgorithmList() {
  const {selectedAlgorithm, setSelectedAlgorithm, availableAlgorithms} = useContext(AlgorithmContext);

  return (
    <ul>
      {availableAlgorithms.map((algorithmText, i) => {
        return <li key={i} onClick={()=> setSelectedAlgorithm(algorithmText)} className='py-2'><Button className='w-full' color='primary' {...(algorithmText === selectedAlgorithm ? {variant: 'contained'} : {variant: 'outlined'})}>{algorithmText}</Button></li>;
      })}
    </ul>
  );
}
