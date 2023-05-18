import { forwardRef } from 'react'

import './Projects.css'

import { motion } from "framer-motion"

import mesto from '../../images/mesto.png'


const Projects = ({projectsRef}) => {


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
            viewport={{ amount: 0.2, once: true }}
            className='projects'
        >

            <motion.div className='project'
                variants={textAnimation}
                custom={2}
            >
                <img className='project__image' src={mesto} alt='...'></img>
                <div className='project__image-hover'></div>
                <h3 className='project__title'>mesto</h3>
            </motion.div>

            <motion.div className='project'
                variants={textAnimation}
                custom={4}
            >
                <img className='project__image' src={mesto} alt='...'></img>
                <div className='project__image-hover'></div>
                <h3 className='project__title'>mesto</h3>
            </motion.div>

            <motion.div className='project'
                variants={textAnimation}
                custom={6}
            >
                <img className='project__image' src={mesto} alt='...'></img>
                <div className='project__image-hover'></div>
                <h3 className='project__title'>mesto</h3>
            </motion.div>

            <motion.div className='project'
                variants={textAnimation}
                custom={8}
            >
                <img className='project__image' src={mesto} alt='...'></img>
                <div className='project__image-hover'></div>
                <h3 className='project__title'>mesto</h3>
            </motion.div>

            <motion.div className='project'
                variants={textAnimation}
                custom={2}
            >
                <img className='project__image' src={mesto} alt='...'></img>
                <div className='project__image-hover'></div>
                <h3 className='project__title'>mesto</h3>
            </motion.div>

            <motion.div className='project'
                variants={textAnimation}
                custom={4}
            >
                <img className='project__image' src={mesto} alt='...'></img>
                <div className='project__image-hover'></div>
                <h3 className='project__title'>mesto</h3>
            </motion.div>

            <motion.div className='project'
                variants={textAnimation}
                custom={6}
            >
                <img className='project__image' src={mesto} alt='...'></img>
                <div className='project__image-hover'></div>
                <h3 className='project__title'>mesto</h3>
            </motion.div>

            <motion.div className='project'
                variants={textAnimation}
                custom={8}
            >
                <img className='project__image' src={mesto} alt='...'></img>
                <div className='project__image-hover'></div>
                <h3 className='project__title'>mesto</h3>
            </motion.div>


        </motion.section>

    )
}

export default forwardRef (Projects)