import Card from './Card';
import Heading from '../shared/Heading';
const Projects = () => {
    return (
    <div className='projects-container gap-16 flex flex-col'>
        <Heading className="text-4xl self-center text-white" size='h1'>My Projects</Heading>
        <div className='grid sm:grid-cols-1 md:grid-cols-2'>
            <Card title='UPrintI (Next.js-GraphQL-TailwindCSS)' subtitle="Mom's Online Toy Store"/>
            <Card title='UPrintI (Next.js-GraphQL-TailwindCSS)' subtitle="Mom's Online Toy Store"/>
            <Card title='UPrintI (Next.js-GraphQL-TailwindCSS)' subtitle="Mom's Online Toy Store"/>
      </div>
      </div>
    )
}

export default Projects;