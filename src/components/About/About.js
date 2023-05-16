import { useEffect, useState } from "react"
import './About.css'

const About = () => {

    const [frontend, setFrontend] = useState(false)

    useEffect(() => {
        let i = document.querySelector('.name')
        setTimeout(() => {
            i.style.borderRight = 0
            setFrontend(true)
        }, 2500)
    }, [])

    return (
        <>
            <h2 className='name'>Danya Kovan</h2>
            {
                frontend ?
                    <h1 className='about'>web developer</h1>
                    :
                    ''
            }
        </>
    )
}

export default About