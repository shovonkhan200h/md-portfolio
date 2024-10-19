import React from 'react'
import Navbar from './Component/Navbar'
import { BackgroundLinesDemo } from './Component/ui/Banner/BannerComponent'
import AboutMe from './Component/AboutMe'
import Projects from './Component/Projects'
import Contact from './Component/Contact'
import Scroll from './Component/Scroll'



const App = () => {
  return (
    <div>
      <Scroll/>
      <Navbar/>
      <BackgroundLinesDemo/>
      <AboutMe/>
      <Projects/>
      <Contact/>
         
    </div>
  )
}

export default App