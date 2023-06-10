import { ContentWrapper } from './ContentWrapper';
import mailIcon from '../../../public/images/icons/email.svg';
import liIcon from '../../../public/images/icons/linkedin.svg';
import ghIcon from '../../../public/images/icons/github.svg';
import instaIcon from '../../../public/images/icons/instagram.svg';
import { NewTabLink } from './About';

interface Info {
  url: string
  username: string
  logo: string
}
const infoArr: Info[] = [
  {
    url: 'mailto:',
    username: 'hello@alliehowe.dev',
    logo: mailIcon
  },
  {
    url: 'https://www.instagram.com/',
    username: 'allie.on.the.web',
    logo: instaIcon
  },
  {
    url: 'https://www.github.com/',
    username: 'allie-howe',
    logo: ghIcon
  },
  {
    url: 'https://www.linkedin.com/in/',
    username: 'allie-howe',
    logo: liIcon
  },
]

export const Contact = () => {
  return (
    <ContentWrapper text='contact'>
      <div className='font-sans flex flex-col gap-5'>
        {infoArr.map(({logo, url, username}) => (
          <NewTabLink href={`${url}${username}`} className='flex justify-center gap-2 items-center text-white'>
            <img src={logo} className='invert w-10' />
            <p>{username}</p>
          </NewTabLink>
        ))}
      </div>
    </ContentWrapper>
  );
};
