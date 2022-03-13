import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import ToggleDarkMode from './ToggleDarkMode';

export default function Navbar() {
  return (
    <header>
      <nav className='bg-white-80 dark:bg-black-80 text-black-100 dark:text-white-100 w-screen flex justify-between px-4 py-4 items-center flex-wrap md:px-12 lg:px-16'>
        <div className=''>
          <a href='/' className='flex items-center gap-4 text-lg'>Sorting Visualizer</a>
        </div>
        <div className='flex gap-6'>
          <a href='https://github.com/ksertas/sorting-visualizer' target='_blank' rel="noreferrer" className='flex items-center gap-2 md:hidden'><AiFillGithub className='w-5 h-5' /></a>
          <a href='https://github.com/ksertas/sorting-visualizer' target='_blank' rel="noreferrer" className='items-center gap-2 hidden md:flex'><AiFillGithub className='w-5 h-5' />Github</a>
          <ToggleDarkMode />
        </div>
      </nav>
    </header>
  );
}
