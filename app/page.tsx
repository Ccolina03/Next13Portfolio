import Image from 'next/image'
import Experiences from './components/Experiences/Experiences'
import Projects from './components/Projects/Projects'
export default function Home() {
  return (
    <main>
      <Experiences/>
      <Projects/>
    </main>
  )
}
