import React, { useContext } from 'react';
import { SortingSettingsContext } from '../contexts/SortingSettingsContext';
import { getRandomInt } from '../helper/randomInt';

export default function ArrayBars() {
  const {arrayLength, invertBars} = useContext(SortingSettingsContext);
  let generatedDivs = [];
  
  const generateNewArray = () => {
    for (let i = 1; i < arrayLength + 1; i++) {
      const generatedWidth = parseFloat(100 / arrayLength);
      const generatedHeight = getRandomInt(5, 100);
      
      let style = {
        position: 'absolute',
        width: `${generatedWidth}%`,
        height: `${generatedHeight}%`, 
        left: `${100 / arrayLength * parseFloat(i - 1)}%`,
        bottom: 0,
        backgroundColor: '#4295d6'
      };
    
      let showHeight = (arrayLength <= 20) && (generatedHeight > 10);
  
      generatedDivs.push(<div key={i} style={style} className={`bar border-[1px] border-black absolute block text-white text-center ${showHeight ? 'text-[.75rem]' : 'text-[0px]'}`}>{generatedHeight}</div>);
    }
  };

  generateNewArray();

  return (
    <div className={`bg-container-dark ${invertBars ? 'rotate-180' : ''} w-10/12 h-[15rem] mx-auto mt-6 block relative lg:my-auto lg:col-span-3 xl:col-span-4`}>
      {generatedDivs.map((div) => {
        return div;
      })}
    </div>
  );
}
