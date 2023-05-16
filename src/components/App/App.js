import React from 'react'
import { useRef, useEffect, useState } from 'react'
import './App.css'


import About from '../About/About'
import Globe from "../Globe/Globe"
import Portfolio from '../Portfolio/Portfolio';
import Stack from '../Stack/Stack'

const App = () => {

  return (
    <div className='app'>

      <About />
      <Globe />
      <Portfolio />
      <Stack />

    </div>
  )

}

export default App