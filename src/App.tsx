import { useState } from 'react';
import { CustomBackground } from './CustomBackground';
import { ShuffleButton } from './ShuffleButton';
import { SplashScreen } from './SplashScreen';
import { LinksBar } from './LinksBar';
import { PageWrapper } from './PageWrapper';

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
      <div className='flex items-center justify-center flex-1'>
        <SplashScreen show={screen === Screen.Splash} />
        <PageWrapper display={screen === Screen.About}><p>About</p></PageWrapper>
        <PageWrapper display={screen === Screen.Projects}><p>Projects</p></PageWrapper>
        <PageWrapper display={screen === Screen.Contact}><p>Contact</p></PageWrapper>
      </div>
        <LinksBar screen={screen} setScreen={setScreen} />
      </CustomBackground>
      <ShuffleButton />
    </div>
  );
}
