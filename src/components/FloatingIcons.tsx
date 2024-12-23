import FullscreenExitIcon from 'mdi-react/FullscreenExitIcon'
import FullscreenIcon from 'mdi-react/FullscreenIcon'
import { ShuffleButton } from './ShuffleButton'
import { useBackgroundContext } from '../backgrounds/BackgroundContext'

export const FloatingIcons = () => {
  const {zenMode, backgroundIndex} = useBackgroundContext();

  return <div className='absolute right-5 top-5'>
    <div className='flex flex-col items-end gap-4'>
      {!zenMode && <ShuffleButton />}
      {backgroundIndex !== 0 && <Toolbar />}
    </div>
  </div>
};

const Toolbar = () => {
  const {zenMode, setZenMode} = useBackgroundContext();

  return (
    <div className='flex flex-col gap-2 text-gray-300 bg-gray-600 bg-opacity-50 rounded-full p-2'>
      <div onClick={() => setZenMode(p => !p)}>
        {zenMode ? <FullscreenExitIcon /> :  <FullscreenIcon />}
      </div>
    </div>
  )
};
