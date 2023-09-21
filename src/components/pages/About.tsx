import { AnchorHTMLAttributes } from 'react';
import { ContentWrapper } from './ContentWrapper';
import { NowPlaying } from '../NowPlaying';
import Allie from '../../assets/allie.jpeg'
import { useBreakpoints } from '../../utils/breakpointUtils';

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode
}
export const NewTabLink = ({ href, className, children, ...rest }: LinkProps) => (
  <a className={`${className} text-pink-300`} href={href} target='_blank' rel='noreferrer' {...rest}>
    {children}
  </a>
);
export const About = () => {
  const {md} = useBreakpoints();
  return (
    <ContentWrapper text='about'>
      <div>
        <img className='md:float-right m-auto text-center rounded-lg mb-5' width={200} src={Allie} />
        {!md && <NowPlaying />}
        <div className='text-white font-sans flex flex-col gap-3'>
          <p>I'm Allie Howe, a Computer Science BSc (First Class, Hons.) graduate from the University of Lincoln, currently working for music tech startup <NewTabLink href='http://music.clicknclear.com/'>ClicknClear</NewTabLink> as a Fullstack Software Engineer.</p>
          <p>Besides this, I enjoy playing around with various technologies - from creative code using p5.js, to learning new frameworks such as Svelte, to improving my knowledge of React and more.</p>
          <p>You can see all of my open source projects, including this site itself, on my <NewTabLink href='https://github.com/allie-howe'>GitHub</NewTabLink>.</p>
        </div>
      </div>
      {md && <NowPlaying />}
    </ContentWrapper>
  );
};
