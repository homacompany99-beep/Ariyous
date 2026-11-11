
import './gloabal.css'
import Navbar from './components/Navbar'
import { navbarStrings } from './strings/navbar.config'
import Hero from './sections/Hero'
import Services from './sections/Services'
import Portfolio from './sections/Portfilo'
import AboutUs from './sections/AboutUs'
function App() {

  return (
    <>
      <Navbar {...navbarStrings} />
      <Hero />
      <Services />
      <Portfolio />
      <AboutUs />
    </>
  )
}

export default App
