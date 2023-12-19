import { forwardRef, useEffect, useState } from 'react'

import './Projects.css'

import { motion } from "framer-motion"

import {projects} from '../../utils/constants'

import { Filters } from '../Filters/Filters'

const Projects = ({ projectsRef, onClickProject }) => {

    const [filters, setFilters] = useState([]);
    const [visibleProjects, setVisibleProjects] = useState(projects)

    const textAnimation = {
        hidden: {
            x: 100,
            y: 100,
            opacity: 0,
        },
        visible: custom => ({
            x: 0,
            y: 0,
            opacity: 1,
            transition: { delay: custom / 4 },
        }),
    }

    const clickProjectHandler = (project) => {
        onClickProject(project)
        window.ym(93918643,'reachGoal',`${project.analiticsName}ProjectClick`)
    }

    const onClickFilter = (clickedFilter) => {
        if (!filters.includes(clickedFilter)) {
            filters.length === 0 ?
            setFilters([clickedFilter]) :
            setFilters([...filters, clickedFilter]) 
            
        } else {
            const updatedFilters = filters.filter((item) => item !== clickedFilter)
            setFilters(updatedFilters)
        }
    }

    useEffect(() => {
                if (filters.length === 0) {
                    setVisibleProjects(projects) 
                    return
                };
                const filteredProjects = [];
                for (let i = 0; i < projects.length; i++) {
                    let match = true;
                    for (let f = 0; f < filters.length; f++) {
                        if (!projects[i].stack.map(s => s.toLowerCase()).includes(filters[f].toLowerCase())) {
                            match = false;
                            break
                        }
                    }
                    if (match) filteredProjects.push(projects[i]);
                }
                setVisibleProjects(filteredProjects)
            }, [filters])

    return (
        <motion.section
            ref={projectsRef}
            initial="hidden"
            whileInView='visible'
            viewport={{ amount: 0.1, once: true }}
            className='projects'
        >
            <h3 className='projects__title'>Projects</h3>

            <Filters
                onClickFilter={onClickFilter}
                filters={filters}
            />

            <div className='projects__projects'>
                { visibleProjects && visibleProjects?.length > 0 ?
                    visibleProjects.map((project) => {
                        return (
                            <div className='project'
                                variants={textAnimation}
                                custom={project.id}
                                onClick={() => clickProjectHandler(project)}
                                key={project.id}
                            >
                                <img className='project__image' src={project.icon} alt={`projects ${project.title}`}></img>
                                <div className='project__image-hover'></div>
                                <h3 className='project__title'>{project.title}</h3>
                            </div>
                        )
                    }) :
                    <div className='projects__not-found'>
                        <p>No projects found :c</p>
                    </div>
                }
            </div>
        </motion.section>
    )
}

export default forwardRef(Projects)