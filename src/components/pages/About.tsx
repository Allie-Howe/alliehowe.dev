import { AnchorHTMLAttributes } from 'react';
import { ContentWrapper } from './ContentWrapper';
import { NowPlaying } from '../NowPlaying';

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode
}
export const NewTabLink = ({ href, className, children, ...rest }: LinkProps) => (
  <a className={`${className} text-pink-300`} href={href} target='_blank' rel='noreferrer' {...rest}>
    {children}
  </a>
);
export const About = () => {
  return (
    <ContentWrapper text='about'>
      {/* TODO: Add picture */}
      <div className='text-white font-sans flex flex-col gap-3'>
        <p>I'm Allie Howe, a Computer Science BSc (First Class, Hons.) graduate from the University of Lincoln, currently working for music tech startup <NewTabLink href='http://music.clicknclear.com/'>ClicknClear</NewTabLink> as a Fullstack Software Engineer.</p>
        <p>Besides this, I enjoy playing around with various technologies - from creative code using p5.js, to learning new frameworks such as Svelte, to improving my knowledge of React and more.</p>
        <p>You can see all of my open source projects, including this site itself, on my <NewTabLink href='https://github.com/allie-howe'>GitHub</NewTabLink>.</p>
      </div>
      <NowPlaying />
    </ContentWrapper>
  );
};
