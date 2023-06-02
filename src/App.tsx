import { useCallback, useState } from 'react';
import { CustomBackground } from './CustomBackground';
import ShuffleVariantIcon from 'mdi-react/ShuffleVariantIcon';
import { getCurrentBreakpoints } from './breakpointUtils';

export default function() {
  const [isRndDown, setIsRndDown] = useState(false);
  const toggleRndDown = useCallback(() => setIsRndDown(p => !p), []);
  const { lg } = getCurrentBreakpoints();
  const downColor = lg ? 'rgb(249 168 212)' : 'rgb(219 39 119)';

  return (
    <div className='h-screen bg-black text-pink-300'>
      <CustomBackground>
        <div className='flex items-center justify-center h-full'>
          <p className='text-9xl font-serif'>allie.</p>
        </div>
      </CustomBackground>
      {/* TODO: Custom glowing CSS shadow */}
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
    </div>
  );
}
