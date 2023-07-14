import Card from './Card';
import Heading from '../shared/Heading';
import BajaBaja from '../../../public/bajabaja.png'
import SnakeGame from '../../../public/Snake.png'
import Fasterin from '../../../public/fasterin.png'
import Go from '../../../public/goo.png'
import SubeSube from '../../../public/subesube.png'
import UPrintI from '../../../public/UprintI.png'
import Challenge from '../../../public/Challenge.png'
const Projects = () => {
    return (
    <div id="projects" className='projects-container gap-16 flex flex-col'>
        <Heading className="text-4xl self-center text-white" size='h1'>My Projects</Heading>
        <div className='grid sm:grid-cols-1 md:grid-cols-2'>
            <Card picture={UPrintI} title='UPrintI (Next.js-GraphQL-TailwindCSS)' subtitle="Mom's Online Toy Store" hrefGH='https://github.com/Ccolina03/UprintI'/>
            <Card picture={BajaBaja} title='BajaBaja (React-Node.js-MongoDB-Express)' subtitle="Lima's true/false informal bus stops tracker" hrefGH='https://github.com/Ccolina03/BajaBajaBackEnd_v1'/>
            <Card picture={Go} title='SinFin (React-Golang-AWS CDK)' subtitle="Future PWA Idea" hrefGH='https://github.com/Ccolina03'/>
            <Card picture={SnakeGame} title='Snake Game (Python)' subtitle="Snake Game we all know ;)" hrefGH='https://github.com/Ccolina03/snakegame1'/>
            <Card picture={Challenge} title='Challenge (Redux-JavaScript)' subtitle="Redux app integrated with API + Search filter" hrefGH='https://github.com/Ccolina03/carlos_colina_launchpad-react-code-challenge'/>
            
            <Card picture={SubeSube} title='SubeSube (HTML-CSS-Bootstrap)' subtitle="We all have to start somewhere ;)" hrefGH='https://github.com/Ccolina03/subesube'/>
            <Card picture={Fasterin}title='Fasterin (Next.js-TypeScript)' subtitle="Old portfolio website" hrefGH='https://github.com/Ccolina03/fasterin'/>
      </div>
      </div>
    )
}

export default Projects;