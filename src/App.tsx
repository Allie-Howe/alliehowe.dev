import { CustomBackground } from './CustomBackground';
import { ShuffleButton } from './ShuffleButton';
import { SplashScreen } from './SplashScreen';

export default function() {
  return (
    <div className='h-screen bg-black text-pink-300'>
      <CustomBackground>
        <SplashScreen />
      </CustomBackground>
      <ShuffleButton />
    </div>
  );
}
