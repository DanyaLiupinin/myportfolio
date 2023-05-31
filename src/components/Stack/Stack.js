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
            x: 0,
            y: 100,
            opacity: 0,
        },
        visible: custom => ({
            x: 0,
            y: 0,
            opacity: 1,
            transition: { delay: custom / 5 },
        }),
    }

    const skillsArray = [
        {
            title: 'java script',
            image: js,
        },
        {
            title: 'react.js',
            image: react,
        },
        {
            title: 'html5',
            image: html,
        },
        {
            title: 'css3',
            image: css,
        },
        {
            title: 'sass',
            image: sass,
        },
        {
            title: 'redux',
            image: redux,
        },
        {
            title: 'three js',
            image: three,
        },
        {
            title: 'type script',
            image: ts,
        },
        {
            title: 'rest api',
            image: rest,
        },
        {
            title: 'node js',
            image: node,
        },
        {
            title: 'express js',
            image: express,
        },
        {
            title: 'mongo js',
            image: mongo,
        },
        {
            title: 'webpack',
            image: webpack,
        },
        {
            title: 'npm',
            image: npm,
        },
        {
            title: 'linter',
            image: eslint,
        },
        {
            title: 'figma',
            image: figma,
        },
        {
            title: 'photo shop',
            image: photoshop,
        },
        {
            title: 'github',
            image: github,
        },
    ]

    return (
        <section className='stack'>
            <h3 className='stack__title' ref={stackRef}>Stack</h3>

            <motion.div className='skills'
                initial="hidden"
                whileInView='visible'
                viewport={{ amount: 0.1, once: true }}
            >
                {
                    skillsArray.map((skill, i) => {
                        return (
                            <motion.div className='skill'
                                variants={textAnimation}
                                custom={i / 3 + Math.random()}
                                key={skill.title}
                            >
                                <div className='skill__wrapper' style={{ 'before': '' }}>
                                    <img 
                                    className={`skill__image ${skill.title === 'three js' ? 'skill__image_type_three' : ''}`}
                                    src={skill.image} 
                                    alt={skill.title}></img>

                                </div>
                                <div className='skill__name-container'>
                                    <p className='skill__name'>{skill.title}</p>
                                </div>
                            </motion.div>
            )
                    })
                }
        </motion.div>
        </section >
    )
}

export default forwardRef(Stack)