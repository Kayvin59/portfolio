import Contact from '@/components/Contact'
import Landing from '@/components/Landing'
import Skills from '@/components/Skills'
import Work from '@/components/Work'

export default function Home() {
  return (
    <div className="space-y-20 md:space-y-32">
      <Landing />
      <Skills />
      <Work />
      <Contact />
    </div>
  )
}
