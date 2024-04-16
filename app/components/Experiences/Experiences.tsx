
import ExperienceCard from './ExperiencesCard';
import Heading from '../shared/Heading';
const Experiences = () => {
    return (
        <div id="work-experience1" className='flex flex-col gap-y-16 items-center md:items-center sm:items-end xs:items-end'>
            <Heading className="text-4xl self-center text-white sm:mb-0 lg:mb-1 md:mb-1 xs:mb-8" size='h1'>My Work Experience</Heading>
            <div className='experience-container flex justify-center'>
                <div className='timeline w-28 bg-backgroundWork flex flex-col items-center'>
                    <div className='line1 w-0.5 bg-gray-100 h-[12rem]'></div>
                     <ExperienceCard job='SDE Intern' company='Ovintiv (Encana)' date='Jan 2024 - Present'
                    bullet1='Developed activity dashboards with React.js, TypeScript, Zustand and React Query to expedite land processes'
                    bullet2='Implemented FastAPI endpoints to perform automated background processes using Redis and Celery tasks, leading to 60% decrease in manual work'
                    bullet3='Developing a prototype project to synchronize computed spatial data between PostgreSQL and ElasticSearch, automating dashboard updates and enabling side-by-side views'/>
                    <div className='line1 w-0.5 bg-gray-100 xl:h-96 h-96 xs:h-[39rem] md:h-72 lg:h-72 sm:h-96' ></div>
                    <div className='circle1 flex items-center justify-center rounded-full border-2 border-white h-28 w-full hover:bg-green'>
                         <ExperienceCard inverse={true} job='SWE Intern' company='Litespace' date='May - August 2023'
                    bullet1='Built 8+ reusables components utilizing TypeScript and React into Storybook and a Progressive Web App '
                    bullet2='Developed detailed design documentation for the migration of microservice domains, based on Nest.js, GraphQL,
                    AWS and MongoDB Atlas'/>
                    </div>
                    <div className='line1 w-0.5 bg-gray-100 h-96 xl:h-96 xs:h-[39rem] md:h-72 sm:h-96'></div>
                    <div className='circle1 flex justify-center items-center rounded-full border-2 border-white h-28 w-full hover:bg-green'>
                     <ExperienceCard job='Digital Content QA' company='University of Alberta' date = "June - August 2023" bullet1='Converted JavaScript modules to TypeScript, leveraging jQuery and AJAX for improved functionality and UX.'
                    bullet2='Refactored HTML and CSS code of more than 800+ web pages, while improving Accesibility and SEO' />
                    </div>
                    <div className='line1 w-0.5 bg-gray-100 h-[12rem]'></div>
                </div> 
            </div>
        </div>
    )
}

export default Experiences;
