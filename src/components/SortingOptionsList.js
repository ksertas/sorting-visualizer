import { Checkbox, FormControlLabel, FormGroup, Slider, Typography } from '@mui/material';
import React, { useContext, useEffect } from 'react';
import { SortingSettingsContext } from '../contexts/SortingSettingsContext';

export default function SortingOptionsList() {
  const {sortingSpeed, setSortingSpeed, arrayLength, setArrayLength, invertBars, setInvertBars} = useContext(SortingSettingsContext);

  useEffect(() => {
    setInvertBars(localStorage.getItem('invert') === 'true');
  }, []);

  const handleInvert = (e) => {
    localStorage.setItem('invert', e.target.checked);
    setInvertBars(e.target.checked);
  };

  return (
    <ul className='text-white text-xl'>
      {/* <li className='text-black-100 dark:text-white-100 py-2 flex flex-col justify-center items-start cursor-pointer'><span className=''>Sorting speed</span>
        <Slider aria-label='sorting speed'
          value={sortingSpeed ?? 1}
          onChange={(e) => setSortingSpeed(e.target.value)}
          valueLabelDisplay="auto"
          step={0.25}
          marks
          min={0.25}
          max={1.75} />
      </li> */}
      <li className='text-black-100 dark:text-white-100 py-2 flex flex-col justify-center items-start cursor-pointer'><span className=''>Array length</span>
        <Slider aria-label='arrayLength length'
          value={arrayLength ?? 50}
          onChange={(e) => setArrayLength(e.target.value)}
          valueLabelDisplay="auto"
          step={1}
          min={5}
          max={100} />
      </li>
      <li className='text-black-100 dark:text-white-100 py-2 ml-[-16px] flex flex-col justify-center items-start cursor-pointer'>
        <FormGroup>
          <FormControlLabel control={<Checkbox 
            checked={invertBars ?? false}
            onChange={(e) => handleInvert(e)}
            size='medium'
          />} 
          label={<Typography fontSize={'20px'}>Invert bars</Typography>} labelPlacement='start' />
        </FormGroup>
      </li>
    </ul>
  );
}
