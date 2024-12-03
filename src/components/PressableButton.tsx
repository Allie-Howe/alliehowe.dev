import {useState, useCallback} from 'react'
import { pinks } from './ShuffleButton';
import { defaultTransition } from '../App';

interface PressableButtonProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
  icon: JSX.Element,
  className?: string,
}
export const PressableButton = ({icon, className, ...divProps}: PressableButtonProps) => {
  const [isDown, setIsDown] = useState(false);
  const toggleDown = useCallback(() => setIsDown(p => !p), []);

  return <div
    style={{
      backgroundColor: isDown ? pinks[1] : pinks[0],
      translate: isDown ? '0 1px' : '0 0'
    }}
    className={`${defaultTransition} ${className} aspect-square bg-pink-300 rounded-full flex items-center justify-center text-black transition-all duration-75 cursor-pointer` }
    onMouseDown={toggleDown}
    onMouseUp={toggleDown}
    onTouchStart={toggleDown}
    onTouchEnd={toggleDown}
    {...divProps}
>
  {icon}
</div>
}
