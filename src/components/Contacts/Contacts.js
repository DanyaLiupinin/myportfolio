import { forwardRef } from 'react'
import './Contacts.css'

import { motion } from "framer-motion"

import Contact from '../Contact/Contact'

import linkedin from '../../images/linkedin.svg'
import mail from '../../images/mail.svg'
import github from '../../images/github-contact.svg'
import telegram from '../../images/telegram.svg'
import cv from '../../images/cvvv.svg'

const contacts = [
    {
        title: 'email',
        image: mail,
        text: 'mr.kovan_2002 @mail.ru',
        link: 'mailto:mr.kovan_2002@mail.ru'
    },
    {
        title: 'telegram',
        image: telegram,
        text: 'r_b_n_m',
        link: 'https://t.me/r_b_n_m'
    },
    {
        title: 'linkedin',
        image: linkedin,
        text: 'Danya Kovan',
        link: 'https://www.linkedin.com/in/danyakovan/',
    },
    {
        title: 'github',
        image: github,
        text: 'Danya Liupinin',
        link: 'https://github.com/DanyaLiupinin'
    },
    {
        title: 'cv',
        image: cv,
        text: 'cv',
        link: 'https://drive.google.com/drive/folders/1AP71G_ESdxo4NRML5MtvK3zOQNltPBLM?usp=sharing'
    }
]

const Contacts = ({ contactRef }) => {

    return (
        <motion.section className='contacts'
            initial="hidden"
            whileInView='visible'
            viewport={{ amount: 0.1, once: true }}
        >
            <h3 className='contacts__title' ref={contactRef}>Contact me</h3>

            <div className='contact-container'>

                {
                    contacts &&
                    contacts.map((contact, i) => {
                        return (
                            <Contact
                                key={contact.title}
                                title={contact.title}
                                image={contact.image}
                                text={contact.text}
                                link={contact.link}
                                custom={i}
                            />
                        )
                    })
                }
            </div>
        </motion.section>
    )
}

export default forwardRef(Contacts)