import ProjectPopup from "../ProjectPopup/ProjectPopup";
import MarathonProjectPopup from "../MarathonProjectPopup/MarathonProjectPopup";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { projects } from '../../utils/constants';


const DisplayProject = () => {

    const [currentProject, setCurrentProject] = useState(null);

    const { name: projectName } = useParams();
    console.log(projectName)

    useEffect(() => {
        if (projectName) {
            const project = projects.find(proj => proj.analiticsName === projectName)
            setCurrentProject(project)
        }
    }, [projectName])
    

    if (!currentProject) {
        return (
            <div>We didnt find this project :c</div>
        )
    }

    if (currentProject.type === 'default') {
        return (
            <ProjectPopup activeProject={currentProject} />
        )
    }

    
    if (currentProject.type === 'marathon') {
        return (
            <MarathonProjectPopup activeProject={currentProject} />
        )
    }

}

export default DisplayProject;