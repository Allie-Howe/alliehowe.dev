import { Fragment } from 'react';
import projects from '../../projects.json'
import { NewTabLink } from './About';
import { ContentWrapper } from './ContentWrapper';

type Project = typeof projects[0];

export const Projects = () => {
  return (<>
    <ContentWrapper text='projects'>
      <div className='grid gap-10 grid-cols-1 flex-col'>
        {projects.map((project, index) => {
          return (<Fragment key={index}>
          {!!index && <hr className='border-white opacity-40' />}
          <ProjectTwo project={project} />
          </Fragment>)
        })}
      </div>
    </ContentWrapper>
    </>);
};

const ProjectOne = ({ project }: {project: Project}) => {
  return (<div className='growOnHoverWrap flex flex-col justify-between min-h-[300px] rounded-3xl overflow-hidden text-black bg-[#f8f8ffee] hover:bg-[#f8f8ffcc] duration-500'>
    <div>
      <div className= 'growOnHoverItem duration-200'>
        {project.imgUrl.includes('webm')
          ? (
            <video autoPlay loop muted>
                <source src={`images/previews/${project.imgUrl}`} type='video/webm' />
            </video>
          )
          : <img src={`images/previews/${project.imgUrl}`} />
        }
      </div>
      <div className='flex flex-col gap-4 p-2'>
        <p className='text-2xl text-center'>{project.name}</p>
        <p className='font-sans'>{project.description}</p>
      </div>
    </div>
    <div>
      {project.buttons.map((button) => {
        return (
          <a className='text-black text-lg bg-pink-200 hover:bg-pink-300 duration-500 p-1 block text-center' href={button.url} target='_blank' rel='noreferrer'>
            {button.title}
          </a>
        )
      })}
    </div>
  </div>)
};

const ProjectTwo = ({ project }: {project: Project}) => {
  const sharedStyles = 'md:w-[400px] rounded-xl growOnHoverItem duration-200'
  return (<div className= 'flex flex-col md:flex-row gap-x-5 gap-y-2 growOnHoverWrap'>
    {project.imgUrl.includes('webm')
      ? (
        <video className={`${sharedStyles}`} autoPlay loop muted>
            <source src={`images/previews/${project.imgUrl}`} type='video/webm' />
        </video>
      )
      : <img className={`${sharedStyles}`} src={`images/previews/${project.imgUrl}`} />
    }
    <div className='flex flex-col gap-5 justify-between'>
      <div>
        <p className='text-2xl'>{project.name}</p>
        <p className='font-sans text-white'>{project.description}</p>
      </div>
      {project.buttons.map((button, index) => {
        return (
          <a key={index} className='text-black rounded-md text-lg bg-pink-300 hover:bg-pink-400 duration-500 p-1 block text-center' href={button.url} target='_blank' rel='noreferrer'>
            {button.title}
          </a>
        )
      })}
    </div>
  </div>)
}
