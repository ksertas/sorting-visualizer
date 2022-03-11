import { CircularProgress } from '@mui/material';
import React from 'react';

export default function OptionsLoaderOverlay() {
  return (
    <div className='bg-black text-white opacity-75 w-full h-full absolute top-0 left-0 flex justify-center items-center z-50'>
      <CircularProgress color='inherit' size={50} />
    </div>
  );
}
