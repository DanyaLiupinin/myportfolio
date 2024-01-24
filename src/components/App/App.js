import React from 'react'
import { useRef, useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'

import Header from '../Header/Header'
import About from '../About/About'
import Globe from "../Globe/Globe"
import Portfolio from '../Portfolio/Portfolio';
import Stack from '../Stack/Stack'
import Contacts from '../Contacts/Contacts'
import { Filters } from '../Filters/Filters'
import Main from '../Main/Main'
import ProjectPopup from '../ProjectPopup/ProjectPopup'

import { moviesFetch, mestoFetch } from '../../utils/fetch'

const App = () => {

  const [activeProject, setActiveProject] = useState({});

  const setActiveProjectHandler = (project) =>  {
    console.log(window.scrollY)
    console.log(project)
    
    setActiveProject(project)
  }

  useEffect(() => {
    moviesFetch()
    mestoFetch()
  }, [])

  console.log(activeProject)

  return (
    <div className='app'>
      <Routes>

        <Route path='/' element={<Main setActiveProject={setActiveProjectHandler} />} />
        <Route path='/:id' element={<ProjectPopup activeProject={activeProject} />} />

      </Routes>



    </div>
  )

}

export default App