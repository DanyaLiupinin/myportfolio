import { Link } from 'react-router-dom'
import './Contact.css'

import { motion } from "framer-motion"

const Contact = ({ image, text, title, link, custom }) => {

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
            transition: { delay: custom / 6 },
        }),
    }

    return (
        <motion.div
            variants={textAnimation}
            custom={custom}
            className='contact'
        >
            <a className='contact__link' href={link} target="_blank" rel="noreferrer">
                <img className='contact__image' alt={title} src={image}></img>
                <p className='contact__title'>{title}</p>
                <p className='contact__text'>{text}</p>
            </a>
        </motion.div>
    )
}

export default Contact