import { Metadata } from 'next'
import dynamic from 'next/dynamic'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Home from '@/components/Home'

const About = dynamic(() => import('@/components/About'))
const Contact = dynamic(() => import('@/components/Contact'))
const Skills = dynamic(() => import('@/components/Skills'))
const Work = dynamic(() => import('@/components/Work'))

export const metadata: Metadata = {
  title: 'Kayvin Ngueeping - Développeur Front-End React',
  description:
    "Je suis développeur front-end depuis 2016. J'habite à Lille. Bienvenue sur mon site",
  openGraph: {
    title: 'Kayvin Ngueeping - Développeur Front-End React',
    description:
      "Je suis développeur front-end depuis 2016. J'habite à Lille. Bienvenue sur mon site",
    url: 'https://www.kayvin.fr/',
    siteName: 'Kayvin Ngueeping - Développeur Front-End React',
    /*     images: [
      {
        url: 'https://nextjs.org/og.png',
        width: 800,
        height: 600
      },
      {
        url: 'https://nextjs.org/og-alt.png',
        width: 1800,
        height: 1600,
        alt: 'My custom alt'
      }
    ], */
    locale: 'fr_FR',
    type: 'website'
  }
}

const Page = () => {
  const isVisible = true // Define the 'isVisible' variable

  return (
    <>
      <Header isVisible={isVisible} />
      <main>
        <Home id="Home" fullname="Kayvin Ngueeping" job="Front-End Developer" />
        <About id="About" />
        <Skills id="Skills" />
        <Work id="Work" />
        <Contact id="Contact" />
      </main>
      <Footer />
    </>
  )
}
export default Page // Export the arrow function component
