import projects from '../../projects.json'
import { NewTabLink } from './About';
import { ContentWrapper } from './ContentWrapper';

type Project = typeof projects[0];

export const Projects = () => {
  return (<>
    <ContentWrapper text='projects'>
      <div className='grid gap-14 grid-cols-1 md:grid-cols-2 flex-col'>
        {projects.map((project, index) => {
          return <Project key={index} project={project} />
        })}
      </div>
    </ContentWrapper>
    </>);
};

const Project = ({ project }: {project: Project}) => {
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
