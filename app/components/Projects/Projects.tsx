import ProjectItem from './ProjectItem'
import Heading from '../shared/Heading';
const Projects = () => {
    return (
    <div className='projects-container gap-16 flex flex-col'>
        <Heading className="text-4xl self-center text-white" size='h1'>My Projects</Heading>
        <div className='grid sm:grid-cols-1 md:grid-cols-2'>
            <ProjectItem/>
            <ProjectItem/>
            <ProjectItem/>
      </div>
      </div>
    )
}

export default Projects;