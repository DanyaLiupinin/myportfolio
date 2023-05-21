import React from 'react'
import { useRef, useEffect, useState } from 'react'
import './App.css'

import Header from '../Header/Header'
import About from '../About/About'
import Globe from "../Globe/Globe"
import Portfolio from '../Portfolio/Portfolio';
import Stack from '../Stack/Stack'

const App = () => {

  const projectsRef = useRef(null)
  const stackRef = useRef(null)
  const contactRef = useRef(null)

  const refs = {
    projectsRef, stackRef, contactRef
  }

  return (
    <div className='app'>
      
      <Header
        refs={refs}
      />
      <div className='main' >
      <About />
      <Globe />
      </div>
      <Portfolio
        projectsRef={projectsRef}
      />
      <Stack 
        stackRef={stackRef}
      />

    </div>
  )

}

export default App