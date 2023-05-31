import * as React from "react";
import { Link } from "react-router-dom";
import { useEffect } from 'react'
import './Header.css'

const Header = ({refs}) => {

    return (
        <header className='header'>
            <div className='header__container'>
                <button 
                onClick={() => refs.projectsRef.current.scrollIntoView({ block: 'start', behavior: "smooth" })} className="header__link">Projects</button>
                <button 
                 onClick={() => refs.stackRef.current.scrollIntoView({ block: 'start', behavior: "smooth" })} className="header__link">Stack</button>
                <button
                 onClick={() => refs.contactRef.current.scrollIntoView({ block: 'start', behavior: "smooth" })} 
                className="header__link">Contact</button>
            </div>
        </header>
    )
}

export default Header