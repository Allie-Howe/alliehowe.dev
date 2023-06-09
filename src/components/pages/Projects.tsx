import projects from '../../projects.json'
import { ContentWrapper } from './ContentWrapper';

export const Projects = () => {
  return (<>
    <ContentWrapper text='projects'>
      {projects.map((project, index) => {
        return (
          <div key={index} className='flex flex-col items-center justify-center flex-1'>
            <p className='text-xl'>{project.name}</p>
            <p className='font-sans text-white'>{project.description}</p>
          </div>
        )
      })}
    </ContentWrapper>
    </>);
};
