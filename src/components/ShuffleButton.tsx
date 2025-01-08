import ShuffleVariantIcon from 'mdi-react/ShuffleVariantIcon';
import { Dispatch, SetStateAction, useCallback, useState } from 'react';
import { defaultTransition } from '../App';
import { backgroundMap } from './CustomBackground';
import { useBackgroundContext } from '../backgrounds/BackgroundContext';

export const pinks = [
  '#f9a8d5', // Hex version of Tailwind color
  '#d98db6',
  ];

export const ShuffleButton = () => {
  const {setBackgroundIndex} = useBackgroundContext();

  const [isDown, setIsDown] = useState(false);
  const toggleDown = useCallback(() => setIsDown(p => !p), []);
  const [glowing, setGlowing] = useState('glowing');

  return (
      <div
        style={{
          backgroundColor: isDown ? pinks[1] : pinks[0],
          translate: isDown ? '0 1px' : '0 0'
        }}
        className={`${defaultTransition} ${glowing} h-20 w-20 bg-pink-300 rounded-full flex items-center justify-center text-black transition-all duration-75 cursor-pointer` }
        onClick={() => {
          setBackgroundIndex(i => (i + 1) % backgroundMap.length)
          setGlowing('');
        }}
        onMouseDown={toggleDown}
        onMouseUp={toggleDown}
        onTouchStart={toggleDown}
        onTouchEnd={toggleDown}
      >
        <ShuffleVariantIcon size='3em'/>
      </div>
  )
};
