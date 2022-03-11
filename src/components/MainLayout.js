import React from 'react';
import ArrayBars from './ArrayBars';
import Controls from './Controls';
import OptionsBar from './OptionsBar';

export default function MainLayout() {
  return (
    <div className='w-full lg:grid lg:grid-cols-4 xl:grid-cols-5'>
      <OptionsBar />
      <ArrayBars />
      <Controls />
    </div>
  );
}
