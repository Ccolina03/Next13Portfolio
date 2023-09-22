import Card from './Card';
import Heading from '../shared/Heading';
import BajaBaja from '../../../public/bajabaja.png'
import SnakeGame from '../../../public/Snake.png'
import Fasterin from '../../../public/fasterin.png'
import Go from '../../../public/goo.png'
import SubeSube from '../../../public/subesube.png'
import UPrintI from '../../../public/UprintI.png'
import Challenge from '../../../public/Challenge.png'
import TaskKeepr from '../../../public/Screenshot 2023-09-21 232335.png'

const Projects = () => {
    return (
    <div id="projects" className='projects-container gap-16 flex flex-col'>
        <Heading className="text-4xl self-center text-white" size='h1'>My Projects</Heading>
        <div className='grid sm:grid-cols-1 md:grid-cols-2'>
            <a href='https://uprint-i-ccolina03.vercel.app/' target="_blank" rel="noopener">
            <Card picture={UPrintI} title='UPrintI (Next.js-GraphQL-TailwindCSS)' subtitle="Mom's Online Toy Store" hrefGH='https://github.com/Ccolina03/UprintI' hrefYT='https://www.youtube.com/watch?v=TVz4vjbxoVA'/>
            </a>
            <a href='https://github.com/Ccolina03/TaskKeepr' target="_blank" rel="noopener">
            <Card picture={TaskKeepr} title='TaskKeepr' subtitle="Hack the North - MS Chatbot Calendar Scheduler Webapp" hrefGH='https://devpost.com/software/taskkeepr' hrefYT='https://github.com/Ccolina03/TaskKeepr'/>
            </a>
            <a href='https://bajabaja.web.app/' target="_blank" rel="noopener">
            <Card picture={BajaBaja} title='BajaBaja (React-Node.js-MongoDB-Express)' subtitle="Lima's true/false informal bus stops tracker" hrefGH='https://github.com/Ccolina03/BajaBajaBackEnd_v1' hrefYT='https://youtu.be/SgcVEeWLTMw'/>
            </a>
            <a href='https://github.com/Ccolina03/sinFin' target="_blank" rel="noopener">
            <Card picture={Go} title='SinFin (Nest.js-Go-EKS-Docker-Express-GraphQL)' subtitle="Future PWA Idea" hrefGH='https://github.com/Ccolina03' hrefYT='https://www.onlygfx.com/wp-content/uploads/2018/04/4-coming-soon-stamp-cover.png'/>
            </a>
            <a href='https://ccolina03.github.io/carlos_colina_launchpad-react-code-challenge/' target="_blank" rel="noopener">
            <Card picture={Challenge} title='Challenge (Redux-JavaScript)' subtitle="Redux app integrated with API + Search filter" hrefGH='https://github.com/Ccolina03/carlos_colina_launchpad-react-code-challenge'hrefYT='https://youtu.be/-xbvDp44gTY'/>
            </a>
            <a href='https://github.com/Ccolina03/snakegame1' target="_blank" rel="noopener">
    
            <Card picture={SnakeGame} title='Snake Game (Python)' subtitle="Snake Game we all know ;)" hrefGH='https://github.com/Ccolina03/snakegame1' hrefYT='https://www.onlygfx.com/wp-content/uploads/2018/04/4-coming-soon-stamp-cover.png'/>
            </a>
            <a href='https://ccolina03.github.io/subesube/' target="_blank" rel="noopener">
            <Card picture={SubeSube} title='SubeSube (HTML-CSS-Bootstrap)' subtitle="We all have to start somewhere ;)" hrefGH='https://github.com/Ccolina03/subesube' hrefYT='https://youtu.be/Xl8l5XntZXY'/>
            </a>
             <a href='https://fasterin-mmb7-ccolina03.vercel.app/' target="_blank" rel="noopener">
            <Card picture={Fasterin}title='Fasterin (Next.js-TypeScript)' subtitle="Old portfolio website" hrefGH='https://github.com/Ccolina03/fasterin' hrefYT='https://www.youtube.com/watch?v=T2FTeeBfxsg'/>
            </a>
      </div>
      </div>
    )
}

export default Projects;