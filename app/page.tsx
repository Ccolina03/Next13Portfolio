import Image from 'next/image'
import Experiences from './components/Experiences/Experiences'
import Projects from './components/Projects/Projects'
export default function Home() {
  return (
    <main className='flex flex-col gap-y-16  w-full space-y-10 bg-backgroundWork'>
      <Experiences/>
      <Projects/>
    </main>
  )
}
