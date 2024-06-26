import { useState } from 'react';
import { CustomBackground } from './components/CustomBackground';
import { SplashScreen } from './components/SplashScreen';
import { LinksBar } from './components/LinksBar';
import { PageWrapper } from './components/PageWrapper';
import { About } from './components/pages/About';
import { Projects } from './components/pages/Projects';
import { Contact } from './components/pages/Contact';
import { FloatingIcons } from './components/FloatingIcons';
import { useBackgroundContext } from './backgrounds/BackgroundContext';

export const defaultTransition = 'transition-all duration-500';

export enum Screen {
  Splash = 'Splash',
  About = 'About',
  Projects = 'Projects',
  Contact = 'Contact',
}

const screensComponentMap = {
  [Screen.Splash]: <SplashScreen />,
  [Screen.About]: <About />,
  [Screen.Projects]: <Projects />,
  [Screen.Contact]: <Contact />,
}

export default function() {
  const [screen, setScreen] = useState<Screen>(Screen.Splash);
  const {zenMode} = useBackgroundContext()

  return (
    <div className='select-none bg-black text-pink-300 font-serif h-[100dvh] flex items-center justify-center flex-col'>
      <CustomBackground />
      {!zenMode && <div className='absolute bg-opacity-10 bg-black w-full h-full flex items-center justify-center flex-col'>
        <div className='flex items-center justify-center flex-1'>
          {Object.entries(screensComponentMap).map(([screenName, component]) => (
            <PageWrapper key={screenName} display={screen === screenName as Screen}>
              {component}
            </PageWrapper>
          ))}
        </div>
        <LinksBar screen={screen} setScreen={setScreen} />
      </div>}
        <FloatingIcons />
    </div>
  );
}
