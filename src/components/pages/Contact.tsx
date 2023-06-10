import { ContentWrapper } from './ContentWrapper';
import mail from '../../../public/images/icons/email.svg';
import linkedIn from '../../../public/images/icons/linkedin.svg';
import github from '../../../public/images/icons/github.svg';
import instagram from '../../../public/images/icons/instagram.svg';

const EMAIL_ADDRESS = 'hello@alliehowe.dev'
const LINKEDIN_URL = 'allie-howe'
const GITHUB_URL = 'allie-howe'
const INSTAGRAM_URL = 'allie.on.the.web'

export const Contact = () => {
  // TODO: Make function to improve legibility
  // TODO: Links should open in new tab
  return (
    <ContentWrapper text='contact'>
      <div className='text-white font-sans flex flex-col gap-5'>
        <a href={`mailto:${EMAIL_ADDRESS}`} className='flex justify-center gap-2 items-center'>
          <img src={mail} className='invert w-10' />
          <p>{EMAIL_ADDRESS}</p>
        </a>
        <a href={`https://www.instagram.com/${INSTAGRAM_URL}`} className='flex justify-center gap-2 items-center'>
          <img src={instagram} className='invert w-10' />
          <p>{INSTAGRAM_URL}</p>
        </a>
        <a href={`https://www.linkedin.com/in/${LINKEDIN_URL}`} className='flex justify-center gap-2 items-center'>
          <img src={linkedIn} className='invert w-10' />
          <p>{LINKEDIN_URL}</p>
        </a>
        <a href={`https://www.github.com/${GITHUB_URL}`} className='flex justify-center gap-2 items-center'>
          <img src={github} className='invert w-10' />
          <p>{GITHUB_URL}</p>
        </a>
      </div>
    </ContentWrapper>
  );
};
