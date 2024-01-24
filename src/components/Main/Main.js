import Header from '../Header/Header'
import About from '../About/About'
import Globe from "../Globe/Globe"
import Portfolio from '../Portfolio/Portfolio';
import Stack from '../Stack/Stack'
import Contacts from '../Contacts/Contacts'
import { Filters } from '../Filters/Filters'
import { useRef } from 'react';

const Main = ({setActiveProject}) => {

    const projectsRef = useRef(null)
    const stackRef = useRef(null)
    const contactRef = useRef(null)
  
    const refs = {
      projectsRef, stackRef, contactRef
    }

    return (
        <>
            <Header
                refs={refs}
            />
            <div className='main' >
                <About />
                <Globe />
            </div>
            <Portfolio
            setActiveProject={setActiveProject}
                projectsRef={projectsRef}
            />
            <Stack
                stackRef={stackRef}
            />
            <Contacts
                contactRef={contactRef}
            />
        </>
    )
}

export default Main;