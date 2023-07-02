
import ExperienceCard from './ExperiencesCard';
import Heading from '../Heading';
const Experiences = () => {
    return (
        <div className='flex flex-col items-center gap-16 md:items-center sm:items-end xs:items-end'>
            <Heading className="text-4xl self-center text-white" size='h1'>My Work Experience</Heading>
            <div className='experience-container flex justify-center'>
                <div className='timeline w-28 bg-backgroundWork flex flex-col items-center'>
                    <div className='line1 w-0.5 bg-gray-100 h-36'></div>
                    <ExperienceCard job='SWE Intern' company='Litespace' bullet1='Front-end development' />
                    <div className='line1 w-0.5 bg-gray-100 h-96'></div>
                    <div className='circle1 flex items-center justify-center rounded-full border-2 border-white h-28 w-full hover:bg-green'>
                    <ExperienceCard inverse={true} job='SWE Intern' company='Litespace' bullet1='Front-end development' />
                    </div>
                    <div className='line1 w-0.5 bg-gray-100 h-96'></div>
                    <div className='circle1 flex justify-center items-center rounded-full border-2 border-white h-28 w-full hover:bg-green'>
                    <ExperienceCard job='SWE Intern' company='Litespace' bullet1='Front-end development' />
                    </div>
                    <div className='line1 w-0.5 bg-gray-100 h-36'></div>
                </div> 
            </div>
        </div>
    )
}

export default Experiences;
