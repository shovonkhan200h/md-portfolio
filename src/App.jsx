import React from 'react'
import Navbar from './Component/Navbar'
import { BackgroundLinesDemo } from './Component/ui/Banner/BannerComponent'
import AboutMe from './Component/AboutMe'
import Projects from './Component/Projects'


const App = () => {
  return (
    <div>
      <Navbar/>
      <BackgroundLinesDemo/>
      <AboutMe/>
      <Projects/>
    </div>
  )
}

export default App