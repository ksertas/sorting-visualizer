import React, { useContext } from 'react';
import { BsMoonFill, BsSunFill } from 'react-icons/bs';
import { ThemeContext } from '../contexts/ThemeContext';

export default function ToggleDarkMode() {
  const {theme, enableDarkMode, disableDarkMode} = useContext(ThemeContext);

  return (
    <button onClick={theme === 'dark' ? disableDarkMode : enableDarkMode} className='text-white'>{theme === 'dark' ? <BsSunFill /> : <BsMoonFill />}</button>
  );
}
