import ShuffleVariantIcon from 'mdi-react/ShuffleVariantIcon';
import { Dispatch, SetStateAction, useCallback, useState } from 'react';
import { getCurrentBreakpoints } from './breakpointUtils';
import { defaultTransition } from './App';
import { backgroundMap } from './CustomBackground';

export const pinks = [
  'rgb(249 168 212)',
  'rgb(219 39 119)',
  'rgb(255 0 102)',
];

interface ShuffleButtonProps {
  setBackgroundIndex: Dispatch<SetStateAction<number>>
}
export const ShuffleButton = ({ setBackgroundIndex }: ShuffleButtonProps) => {
  const [isRndDown, setIsRndDown] = useState(false);
  const toggleRndDown = useCallback(() => setIsRndDown(p => !p), []);
  const { lg } = getCurrentBreakpoints();
  const downColor = lg ? 'rgb(249 168 212)' : 'rgb(219 39 119)';

  // TODO: Custom glowing CSS shadow
  return (
      <div className={`${defaultTransition} h-20 w-20 bg-pink-300 lg:hover:bg-pink-400 rounded-full absolute right-5 top-5 flex items-center justify-center text-black transition-all` }>
        <ShuffleVariantIcon
          size='3em'
          className='transition-all'
          onClick={() => setBackgroundIndex(i => (i + 1) % backgroundMap.length)}
          onMouseDown={toggleRndDown}
          onMouseUp={toggleRndDown}
          onTouchStart={toggleRndDown}
          onTouchEnd={toggleRndDown}
          color={isRndDown ? downColor : undefined}
        />
      </div>
  )
};
