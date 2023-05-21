import { forwardRef } from 'react'

import './Projects.css'

import { motion } from "framer-motion"

import projects from '../../utils/constants'

import mesto from '../../images/mesto.png'


const Projects = ({ projectsRef, onClickProject }) => {


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
            transition: { delay: custom * 0.1 },
        }),
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

            <div className='projects__projects'>

                {
                    projects.map((project) => {
                        return (
                            <motion.div className='project'
                                variants={textAnimation}
                                custom={project.id}
                                onClick={() => onClickProject(project)}
                                key={project.id}
                            >
                                <img className='project__image' src={project.images[0]} alt={`projects ${project.title}`}></img>
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