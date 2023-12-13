import { forwardRef, useState } from 'react'

import './Projects.css'

import { motion } from "framer-motion"

import projects from '../../utils/constants'

import { Filters } from '../Filters/Filters'

const Projects = ({ projectsRef, onClickProject }) => {

    const [filters, setFilters] = useState([]);

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
        console.log(clickedFilter)
        if (!filters.includes(filters)) {
            filters.length === 0 ?
            setFilters([clickedFilter]) :
            setFilters([...filters, clickedFilter]) 
        } else {
            const updatedFilters = filters.filter((item) => item !== clickedFilter)
            setFilters(updatedFilters)
        }

    }

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
                {
                    projects.map((project) => {
                        return (
                            <motion.div className='project'
                                variants={textAnimation}
                                custom={project.id}
                                onClick={() => clickProjectHandler(project)}
                                key={project.id}
                            >
                                <img className='project__image' src={project.icon} alt={`projects ${project.title}`}></img>
                                <div className='project__image-hover'></div>
                                <h3 className='project__title'>{project.title}</h3>
                            </motion.div>
                        )
                    })
                }
            </div>
        </motion.section>
    )
}

export default forwardRef(Projects)