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
        <section className="about" >
            <h2 className='name'>Danya Kovan</h2>
            {
                frontend ?
                    <h1 className='profession'>web developer</h1>
                    :
                    ''
            }
        </section>
    )
}

export default About