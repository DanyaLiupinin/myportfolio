import './Portfolio.css'

import Projects from '../Projects/Projects'

const Portfolio = ({projectsRef}) => {

    return (
        <div>
          <Projects
            projectsRef={projectsRef}
          />
        </div>
    )
}

export default Portfolio