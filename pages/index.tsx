import { useRef } from 'react'
import { useIntersectionObserver } from 'usehooks-ts'

import About from './About/About'
import Contact from './Contact/Contact'
import Home from './Home/Home'
import Skills from './Skills/Skills'
import Work from './Work/Work'

import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import ScrollWrapper from '../components/ScrollWrapper/ScrollWrapper'

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
