import React, { useContext } from 'react';
import { SortingSettingsContext } from '../contexts/SortingSettingsContext';
import { getRandomInt } from '../helper/randomInt';


export default function ArrayBars() {
  const {arrayLength, invertBars} = useContext(SortingSettingsContext);
  
  let generatedDivs = [];
  for (let i = 1; i < arrayLength + 1; i++) {
    
    let style = {
      position: 'absolute',
      width: `${parseFloat(100 / arrayLength)}%`,
      height: `${getRandomInt(1, 100)}%`,
      left: `${100 / arrayLength * parseFloat(i - 1)}%`,
      bottom: 0
    };
  
    let heightWithoutPercentage = style.height.split('%')[0];
    let showHeight = (arrayLength <= 20) && (heightWithoutPercentage > 10);
  
    generatedDivs.push(<div key={i} style={style} className={`bg-red-400 border-[1px] border-red-500 absolute block text-white text-center ${showHeight ? 'text-[.75rem]' : 'text-[0px]'}`}>{heightWithoutPercentage}</div>);
  }

  return (
    <div className={`bg-container-dark ${invertBars ? 'rotate-180' : ''} w-10/12 h-[15rem] mx-auto mt-6 block relative lg:my-auto lg:col-span-3 xl:col-span-4`}>
      {generatedDivs.map((div) => {
        return div;
      })}
    </div>
  );
}
