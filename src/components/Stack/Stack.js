import { forwardRef } from 'react'
import './Stack.css'

import js from '../../images/js.svg'
import react from '../../images/react.svg'
import html from '../../images/html.svg'
import css from '../../images/css.png'
import redux from '../../images/redux.svg'
import sass from '../../images/sass.svg'
import three from '../../images/three.png'
import ts from '../../images/ts.svg'
import node from '../../images/node.svg'
import express from '../../images/express.png'
import mongo from '../../images/mongo.png'
import webpack from '../../images/webpack.svg'
import npm from '../../images/npm.svg'
import eslint from '../../images/eslint.svg'
import github from '../../images/github.svg'
import rest from '../../images/rest.png'
import figma from '../../images/figma.svg'
import photoshop from '../../images/photoshop.svg'

import { motion } from "framer-motion"

const Stack = ({ stackRef }) => {


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

        <div className='stack' ref={stackRef}>

            <h3 className='stack__title'>Stack</h3>

            <motion.div className='skills'
                initial="hidden"
                whileInView='visible'
                viewport={{ amount: 0.2, once: true }}
            >
                <motion.div className='skill'
                    variants={textAnimation}
                    custom={2}
                >
                    <div className='skill__wrapper'>
                        <img className='skill__image' src={js} alt='js'></img>

                    </div>
                    <div className='skill__name-container'>
                        <p className='skill__name'>javascript</p>
                    </div>

                </motion.div>

                <motion.div className='skill'
                    variants={textAnimation}
                    custom={3}
                >
                    <div className='skill__wrapper'>
                        <img className='skill__image' src={react} alt='js'></img>
                    </div>
                    <div className='skill__name-container'>
                        <p className='skill__name'>react</p>
                    </div>
                </motion.div>

                <motion.div className='skill'
                    variants={textAnimation}
                    custom={4}
                >
                    <div className='skill__wrapper'>
                        <img className='skill__image' src={html} alt='js'></img>
                    </div>
                    <div className='skill__name-container'>
                        <p className='skill__name'>html5</p>
                    </div>
                </motion.div>

                <motion.div className='skill'
                    variants={textAnimation}
                    custom={5}
                >
                    <div className='skill__wrapper'>
                        <img className='skill__image' src={css} alt='css3'></img>
                    </div>
                    <div className='skill__name-container'>
                        <p className='skill__name'>css3</p>
                    </div>
                </motion.div>

                <motion.div className='skill'
                    variants={textAnimation}
                    custom={6}
                >
                    <div className='skill__wrapper'>
                        <img className='skill__image' src={redux} alt='js'></img>
                    </div>
                    <div className='skill__name-container'>
                        <p className='skill__name'>redux</p>
                    </div>
                </motion.div>

                <motion.div className='skill'
                    variants={textAnimation}
                    custom={6}
                >
                    <div className='skill__wrapper'>
                        <img className='skill__image' src={sass} alt='js'></img>
                    </div>
                    <div className='skill__name-container'>
                        <p className='skill__name'>sass</p>
                    </div>
                </motion.div>

                <motion.div className='skill'
                    variants={textAnimation}
                    custom={6}
                >
                    <div className='skill__wrapper'>
                        <img className='skill__image skill__image_type_three' src={three} alt='js'></img>
                    </div>
                    <div className='skill__name-container'>
                        <p className='skill__name'>three js</p>
                    </div>
                </motion.div>

                <motion.div className='skill'
                    variants={textAnimation}
                    custom={6}
                >
                    <div className='skill__wrapper'>
                        <img className='skill__image' src={ts} alt='js'></img>
                    </div>
                    <div className='skill__name-container'>
                        <p className='skill__name'>typeScript</p>
                    </div>
                </motion.div>

                <motion.div className='skill'
                    variants={textAnimation}
                    custom={6}
                >
                    <div className='skill__wrapper'>
                        <img className='skill__image' src={rest} alt='express'></img>
                    </div>
                    <div className='skill__name-container'>
                        <p className='skill__name'>rest API</p>
                    </div>
                </motion.div>

                <motion.div className='skill'
                    variants={textAnimation}
                    custom={6}
                >
                    <div className='skill__wrapper'>
                        <img className='skill__image' src={node} alt='js'></img>
                    </div>
                    <div className='skill__name-container'>
                        <p className='skill__name'>node js</p>
                    </div>
                </motion.div>

                <motion.div className='skill'
                    variants={textAnimation}
                    custom={6}
                >
                    <div className='skill__wrapper'>
                        <img className='skill__image' src={express} alt='express'></img>
                    </div>
                    <div className='skill__name-container'>
                        <p className='skill__name'>express.js</p>
                    </div>
                </motion.div>

                <motion.div className='skill'
                    variants={textAnimation}
                    custom={6}
                >
                    <div className='skill__wrapper'>
                        <img className='skill__image' src={mongo} alt='express'></img>
                    </div>
                    <div className='skill__name-container'>
                        <p className='skill__name'>mongo DB</p>
                    </div>
                </motion.div>

                <motion.div className='skill'
                    variants={textAnimation}
                    custom={6}
                >
                    <div className='skill__wrapper'>
                        <img className='skill__image' src={webpack} alt='express'></img>
                    </div>
                    <div className='skill__name-container'>
                        <p className='skill__name'>webpack</p>
                    </div>
                </motion.div>

                <motion.div className='skill'
                    variants={textAnimation}
                    custom={6}
                >
                    <div className='skill__wrapper'>
                        <img className='skill__image' src={npm} alt='express'></img>
                    </div>
                    <div className='skill__name-container'>
                        <p className='skill__name'>npm</p>
                    </div>
                </motion.div>

                <motion.div className='skill'
                    variants={textAnimation}
                    custom={6}
                >
                    <div className='skill__wrapper'>
                        <img className='skill__image' src={eslint} alt='express'></img>
                    </div>
                    <div className='skill__name-container'>
                        <p className='skill__name'>linter</p>
                    </div>
                </motion.div>

                <motion.div className='skill'
                    variants={textAnimation}
                    custom={6}
                >
                    <div className='skill__wrapper'>
                        <img className='skill__image' src={figma} alt='figma'></img>
                    </div>
                    <div className='skill__name-container'>
                        <p className='skill__name'>figma</p>
                    </div>
                </motion.div>

                <motion.div className='skill'
                    variants={textAnimation}
                    custom={6}
                >
                    <div className='skill__wrapper'>
                        <img className='skill__image' src={photoshop} alt='figma'></img>
                    </div>
                    <div className='skill__name-container'>
                        <p className='skill__name'>photoshop</p>
                    </div>
                </motion.div>

                <motion.div className='skill'
                    variants={textAnimation}
                    custom={6}
                >
                    <div className='skill__wrapper'>
                        <img className='skill__image' src={github} alt='express'></img>
                    </div>
                    <div className='skill__name-container'>
                        <p className='skill__name'>github</p>
                    </div>
                </motion.div>




            </motion.div>

        </div>

    )
}

export default forwardRef(Stack)