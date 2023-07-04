import '../../globals.css'
import Card from './Card';
import {FC, ReactNode} from 'react'

export interface ProjectItemProps {
  title: string,
  subtitle:ReactNode,
  hrefYT?:ReactNode,
  hrefGH?:ReactNode,
}

const ProjectItem:FC<ProjectItemProps> = (
  title = "",
  subtitle,
  hrefYT,
  hrefGH,
) => {
    return (
  < div className="px-10 pb-24">'
    <div className='flex flex-row w-full '>
            <Card title={title} subtitle={subtitle}/>
    </div>
    </div>

    )
}

export default ProjectItem;