import { Dispatch, SetStateAction } from 'react'
import FullscreenExitIcon from 'mdi-react/FullscreenExitIcon'
import FullscreenIcon from 'mdi-react/FullscreenIcon'
import { ShuffleButton } from './ShuffleButton'
import { MdiReactIconProps } from 'mdi-react'

interface FloatingIconsProps {
  setBackgroundIndex: Dispatch<SetStateAction<number>>
  zenMode: boolean
  setZenMode: Dispatch<SetStateAction<boolean>>
}
export const FloatingIcons = ({setBackgroundIndex, setZenMode, zenMode}: FloatingIconsProps) => {
  return <div className='absolute right-5 top-5'>
    <div className='flex flex-col items-end gap-4'>
      {!zenMode && <ShuffleButton setBackgroundIndex={setBackgroundIndex} />}
      <div className='flex flex-col gap-2 text-gray-300 bg-gray-600 bg-opacity-50 rounded-full p-2'>
        <div onClick={() => setZenMode(p => !p)}>
          {zenMode ? <FullscreenExitIcon /> :  <FullscreenIcon />}
        </div>
      </div>
    </div>
  </div>
};
