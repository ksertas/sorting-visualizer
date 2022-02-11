import { Button } from '@mui/material';
import React, { useState } from 'react';

const algorithms = ['bubble sort', 'quick sort', 'merge sort', 'selection sort'];


export default function AlgorithmList() {
  const [algo, setAlgo] = useState('bubble sort');

  return (
    <ul className='text-white text-xl'>
      {algorithms.map((algorithm, i) => {
        return <li key={i} onClick={()=> setAlgo(algorithm)} className='py-2 flex items-center group cursor-pointer focus:bg-white'><Button className='w-full' {...(algorithm === algo ? {variant: 'contained'} : {variant: 'outlined'})}>{algorithm}</Button></li>;
      })}
    </ul>
  );
}
