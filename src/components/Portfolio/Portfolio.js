import { useState } from 'react'

import './Portfolio.css'

import Projects from '../Projects/Projects'
import ProjectPopup from '../ProjectPopup/ProjectPopup'
import MultiProjectPopup from '../MultiProjectsPopup/MultiProjectsPopup'

const Portfolio = ({ projectsRef, setActiveProject }) => {

  const [activeSinglePopup, setActiveSinglePopup] = useState(null)
  const [activeMultiPopup, setActiveMultiPopup] = useState(null)

  const onClickProject = (projectData) => {
    setActiveProject(projectData);
    //projectData.type === 'single' ?
      //setActiveSinglePopup(projectData) :
      //setActiveMultiPopup(projectData)
  }

  const onCloseProject = () => {
    setActiveSinglePopup(null)
    setActiveMultiPopup(null)
  }

  return (
    <section className='portfolio'>
      <Projects
        projectsRef={projectsRef}
        onClickProject={onClickProject}
      />
      <ProjectPopup
        activeProject={activeSinglePopup}
        onCloseProject={onCloseProject}
      />
      <MultiProjectPopup
        activeProject={activeMultiPopup}
        onCloseProject={onCloseProject}
      />
    </section>
  )
}

export default Portfolio