import React from 'react';
import { BsFillBarChartFill } from 'react-icons/bs';
import { GoSettings } from 'react-icons/go';

export default function MobileOptionsBar() {
  return (
    <div className='absolute bottom-8 w-screen lg:hidden'>
      <nav className='bg-slate-700 rounded-sm h-12 w-10/12 mx-auto '>
        <ul className='h-full flex justify-evenly items-center'>
          <li className='hover:bg-slate-800 rounded-sm px-2 py-2 flex items-center'><BsFillBarChartFill className='w-6 h-6 text-white active:text-gray-500' /></li>
          <li className='hover:bg-slate-800 rounded-sm px-2 py-2 flex items-center'><GoSettings className='w-6 h-6 text-white active:text-gray-500' /></li>
        </ul>
      </nav>
    </div>
  );
}
