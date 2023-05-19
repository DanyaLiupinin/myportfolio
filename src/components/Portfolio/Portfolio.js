import { useState } from 'react'

import './Portfolio.css'

import Projects from '../Projects/Projects'
import ProjectPopup from '../ProjectPopup/ProjectPopup'

const Portfolio = ({projectsRef}) => {

  const [activeProject, setActiveProject] = useState(null)

  const onClickProject = (projectData) => {
    setActiveProject(projectData)
  }

    return (
        <div className='portfolio'>
          <Projects
            projectsRef={projectsRef}
            onClickProject={onClickProject}
          />
          <ProjectPopup
            activeProject={activeProject}
          />
        </div>
    )
}

export default Portfolio