import dynamic from 'next/dynamic'
import Head from 'next/head'
import { useRef } from 'react'
import { useIntersectionObserver } from 'usehooks-ts'

import Home from './Home'

import Footer from '../components/Footer'
import Header from '../components/Header'
import ScrollWrapper from '../components/ScrollWrapper'

const About = dynamic(() => import('./About'))
const Contact = dynamic(() => import('./Contact'))
const Skills = dynamic(() => import('./Skills'))
const Work = dynamic(() => import('./Work'))

const Layout = () => {
  const myRef = useRef<HTMLDivElement | null>(null)
  const entry = useIntersectionObserver(myRef, { threshold: 0.5 })
  const isVisible = !!entry?.isIntersecting

  return (
    <>
      <Head>
        <title>Kayvin Ngueeping - Développeur Front-End React</title>
        <meta
          name="description"
          content="Je suis développeur front-end depuis 2016. J'habite à Lille. Bienvenue sur mon site"
        />

        <meta
          property="og:title"
          content="Kayvin Ngueeping - Développeur Front-End React"
        />
        <meta
          property="og:description"
          content="Je suis développeur front-end depuis 2016. J'habite à Lille. Bienvenue sur mon site"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.kayvin.fr/" />
      </Head>
      <Header isVisible={isVisible} />
      <main>
        <Home id="Home" fullname="Kayvin Ngueeping" job="Front-End Developer" />
        <ScrollWrapper ref={myRef}>
          <About id="About" />
          <Skills id="Skills" />
          <Work id="Work" />
          <Contact id="Contact" />
        </ScrollWrapper>
      </main>
      <Footer />
    </>
  )
}

export default Layout
