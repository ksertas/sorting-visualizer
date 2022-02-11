import { Checkbox, FormControlLabel, FormGroup, Slider, Typography } from '@mui/material';
import React from 'react';
import { BsFillBarChartFill } from 'react-icons/bs';
import { GoSettings } from 'react-icons/go';

export default function MobileOptionsBar() {
  return (
    <div className='absolute bottom-8 w-screen lg:static lg:w-72 lg:mt-8 lg:ml-8'>
      <div>
        <div className='bg-container-dark rounded-sm min-h-24 w-10/12 mx-auto mb-4 px-8 py-4 lg:m-0 lg:w-full'>
          <h4 className='text-text-gray text-base font-bold pb-4'>SORTING OPTIONS</h4>
          <ul className='text-white text-xl'>
            <li className='py-2 flex flex-col justify-center items-start cursor-pointer'><span className=''>Sorting speed</span>
              <Slider aria-label='sorting speed'
                defaultValue={1}
                valueLabelDisplay="auto"
                step={0.25}
                marks
                min={0.25}
                max={1.75} />
            </li>
            <li className='py-2 flex flex-col justify-center items-start cursor-pointer'><span className=''>Array length</span>
              <Slider aria-label='array length'
                defaultValue={100}
                valueLabelDisplay="auto"
                step={1}
                min={5}
                max={200} />
            </li>
            <li className='py-2 ml-[-16px] flex flex-col justify-center items-start cursor-pointer'>
              <FormGroup>
                <FormControlLabel control={<Checkbox size='medium' />} label={<Typography fontSize={'20px'}>Invert bars</Typography>} labelPlacement='start' />
              </FormGroup>
            </li>
            <li className='py-2 ml-[-16px] flex flex-col justify-center items-start cursor-pointer'>
              <FormGroup>
                <FormControlLabel control={<Checkbox size='medium' />} label={<Typography fontSize={'20px'}>Show bar sizes</Typography>} labelPlacement='start' />
              </FormGroup>
            </li>
          </ul>
        </div>
      </div>
      <nav className='bg-slate-700 rounded-sm h-12 w-10/12 mx-auto lg:hidden '>
        <ul className='h-full flex justify-evenly items-center'>
          <li className='hover:bg-slate-800 rounded-sm px-2 py-2 flex items-center'><BsFillBarChartFill className='w-6 h-6 text-white active:text-gray-500' /></li>
          <li className='hover:bg-slate-800 rounded-sm px-2 py-2 flex items-center'><GoSettings className='w-6 h-6 text-white active:text-gray-500' /></li>
        </ul>
      </nav>
    </div>
  );
}
