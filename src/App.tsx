import { useState } from 'react';
import { CustomBackground } from './CustomBackground';
import { ShuffleButton } from './ShuffleButton';
import { SplashScreen } from './SplashScreen';
import { LinksBar } from './LinksBar';
import { PageWrapper } from './PageWrapper';

export const defaultTransition = 'transition-all duration-500';

export enum Screen {
  Splash = 'Splash',
  About = 'About',
  Projects = 'Projects',
  Contact = 'Contact',
}

const screensComponentMap = {
  [Screen.Splash]: <SplashScreen />,
  [Screen.About]: <p>About</p>,
  [Screen.Projects]: <p>Projects</p>,
  [Screen.Contact]: <p>Contact</p>,
}

export default function() {
  const [screen, setScreen] = useState<Screen>(Screen.Splash);
  return (
    <div className='h-screen bg-black text-pink-300 font-serif'>
      <CustomBackground>
      <p>this site is a work in progress.</p>
      <p>see <a className='text-white' href='https://allie-howe.github.io/old-portfolio/'>here</a> for my old site.</p>
      <div className='flex items-center justify-center flex-1'>
        {Object.entries(screensComponentMap).map(([screenName, component]) => (
          <PageWrapper key={screenName} display={screen === screenName as Screen}>
            {component}
          </PageWrapper>
        ))}
      </div>
        <LinksBar screen={screen} setScreen={setScreen} />
      </CustomBackground>
      <ShuffleButton />
    </div>
  );
}
