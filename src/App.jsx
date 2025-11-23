import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './Components/Navigation.css'
import './Components/Hero.css'
import './Components/Sections/About.css'
import './Components/Sections/Section.css'
import Navigation from './Components/Navigation.jsx'
import Hero from './Components/Hero.jsx'
import About from './Components/Sections/About.jsx'
import Skills from './Components/Sections/Skills.jsx'
import Projects from './Components/Sections/Projects.jsx'
import Contacts from './Components/Sections/Contacts.jsx'


function App() {
  
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contacts />
    </>
  )
}

export default App
