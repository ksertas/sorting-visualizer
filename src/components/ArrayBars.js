import React from 'react';
import { getRandomInt } from '../helper/randomInt';

let generatedDivs = [];
let range = 100;
for (let i = 1; i < range + 1; i++) {
  
  let style = {
    position: 'absolute',
    width: `${parseFloat(100 / range)}%`,
    height: `${getRandomInt(1, 100)}%`,
    left: `${100 / range * parseFloat(i - 1)}%`,
    bottom: 0
  };

  let heightWithoutPercentage = style.height.split('%')[0];
  let showHeight = (range <= 20) && (heightWithoutPercentage > 10);

  generatedDivs.push(<div key={i} style={style} className={`bg-red-400 border-[1px] border-red-500 absolute block text-white text-center ${showHeight ? 'text-[.75rem]' : 'text-[0px]'}`}>{heightWithoutPercentage}</div>);
}

export default function ArrayBars() {
  return (
    <div className='bg-container-dark w-10/12 h-[15rem] mx-auto mt-6 block relative'>
      {generatedDivs.map((div) => {
        return div;
      })}
    </div>
  );
}
