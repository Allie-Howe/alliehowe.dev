import { useState } from 'react';
import { CustomBackground } from './CustomBackground';
import { ShuffleButton } from './ShuffleButton';
import { SplashScreen } from './SplashScreen';
import { LinksBar } from './LinksBar';

export enum Screen {
  Splash,
  About,
  Projects,
  Contact,
}

export default function() {
  const [screen, setScreen] = useState<Screen>(Screen.Splash);
  return (
    <div className='h-screen bg-black text-pink-300 font-serif'>
      <CustomBackground>
        <SplashScreen show={screen === Screen.Splash} />
        <LinksBar screen={screen} setScreen={setScreen} />
      </CustomBackground>
      <ShuffleButton />
    </div>
  );
}
