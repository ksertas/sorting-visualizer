import React, { useState } from 'react';
import { BsFillBarChartFill } from 'react-icons/bs';
import { GoSettings } from 'react-icons/go';
import AlgorithmList from './AlgorithmList';
import SortingOptionsList from './SortingOptionsList';

export default function MobileOptionsBar() {

  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuClick = (item) => {
    if (activeMenu === item) {
      setActiveMenu(null);
    } else {
      setActiveMenu(item);
    }
  };

  return (
    <div className={'absolute bottom-8 w-screen z-50 lg:static lg:w-auto lg:col-span-1 lg:mt-4 lg:ml-4'}>
      <div>
        <div className={`bg-container-dark ${activeMenu === 'ALGORITHMS' ? '' : 'hidden'} rounded-sm min-h-24 w-10/12 mx-auto mb-4 px-8 py-4 lg:block lg:m-0 lg:w-auto`}>
          <h4 className='text-text-gray text-base font-bold pb-4'>ALGORITHM</h4>
          <AlgorithmList />
        </div>
        <div className={`bg-container-dark ${activeMenu === 'SORTING OPTIONS' ? '' : 'hidden'} rounded-sm min-h-24 w-10/12 mx-auto mb-4 px-8 py-4 lg:block lg:m-0 lg:w-auto`}>
          <h4 className='text-text-gray text-base font-bold pb-4'>SORTING OPTIONS</h4>
          <SortingOptionsList />
        </div>
      </div>
      <nav className='bg-container-dark rounded-sm h-12 w-10/12 mx-auto lg:hidden'>
        <ul className='h-full flex justify-evenly items-center'>
          <li onClick={() => handleMenuClick('ALGORITHMS')} className='hover:bg-slate-700 rounded-sm px-2 py-2 flex items-center cursor-pointer'><BsFillBarChartFill className='w-6 h-6 text-white active:text-gray-500' /></li>
          <li onClick={() => handleMenuClick('SORTING OPTIONS')} className='hover:bg-slate-700 rounded-sm px-2 py-2 flex items-center cursor-pointer'><GoSettings className='w-6 h-6 text-white active:text-gray-500' /></li>
        </ul>
      </nav>
    </div>
  );
}
