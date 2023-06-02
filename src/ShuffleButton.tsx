import ShuffleVariantIcon from 'mdi-react/ShuffleVariantIcon';
import { useCallback, useState } from 'react';
import { getCurrentBreakpoints } from './breakpointUtils';

export const pinks = [
  'rgb(249 168 212)',
  'rgb(219 39 119)',
  'rgb(255 0 102)',
];

export const ShuffleButton = () => {
  const [isRndDown, setIsRndDown] = useState(false);
  const toggleRndDown = useCallback(() => setIsRndDown(p => !p), []);
  const { lg } = getCurrentBreakpoints();
  const downColor = lg ? 'rgb(249 168 212)' : 'rgb(219 39 119)';

  // TODO: Custom glowing CSS shadow
  return (
      <div className='h-20 w-20 bg-pink-300 lg:hover:bg-pink-400 rounded-full absolute right-5 top-5 flex items-center justify-center text-black transition-all' >
        <ShuffleVariantIcon
          size='3em'
          className='transition-all select-none'
          onMouseDown={toggleRndDown}
          onMouseUp={toggleRndDown}
          onTouchStart={toggleRndDown}
          onTouchEnd={toggleRndDown}
          color={isRndDown ? downColor : undefined}
        />
      </div>
  )
};
