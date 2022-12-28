import dynamic from 'next/dynamic'
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
  const entry = useIntersectionObserver(myRef, { threshold: 0.9 })
  const isVisible = !!entry?.isIntersecting

  return (
    <>
      <Header isVisible={isVisible} />
      <main>
        <Home id="Home" fullname="Kayvin Ngueeping" job="Front-End Developer" />
        <ScrollWrapper>
          <div ref={myRef} />
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
