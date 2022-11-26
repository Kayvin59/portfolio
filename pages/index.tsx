import About from './About/About'
import Contact from './Contact/Contact'
import Home from './Home/Home'
import Work from './Work/Work'

import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Home id="Home" fullname="Kayvin Ngueeping" job="Front-End Developer" />
        <About id="About" />
        <Work id="Work" />
        <Contact id="Contact" />
      </main>
      <Footer />
    </>
  )
}

export default Layout
