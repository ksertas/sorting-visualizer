import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { ReactComponent as Logo } from '../assets/img/healthicons_medium-bars.svg';
import ToggleDarkMode from './ToggleDarkMode';

export default function Navbar() {
  return (
    <header>
      <nav className='bg-primary-dark text-white w-screen flex justify-between px-4 py-4 items-center flex-wrap'>
        <div className=''>
          <a href='/' className='flex items-center gap-4 text-lg'><Logo className='w-6 h-6' /> Sorting Visualizer</a>
        </div>
        <div className='flex gap-6'>
          <a href='https://github.com/ksertas/sorting-visualizer' target='_blank' rel="noreferrer" className='flex items-center gap-2 lg:hidden'><AiFillGithub className='w-5 h-5' /></a>
          <a href='https://github.com/ksertas/sorting-visualizer' target='_blank' rel="noreferrer" className='items-center gap-2 hidden lg:flex'><AiFillGithub className='w-5 h-5' />Github</a>
          <ToggleDarkMode />
        </div>
      </nav>
    </header>
  );
}
