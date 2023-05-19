import './ProjectPopup.css'

import { NavLink } from 'react-router-dom'

import ImageCarousel from '../ImageCarousel/ImageCarousel'

const ProjectPopup = ({ activeProject }) => {
    

    return (
        activeProject !== null &&
        <div className='projectPopup'>
            <ImageCarousel
                images={activeProject.images}
            />
            <div className='projectPopup__info'>
                <h3 className='projectPopup__title'>{activeProject.title}</h3>
                <p className='projectPopup__description'>{activeProject.description}</p>

                <p className='projectPopup__skills'>stack:  
                {
                    activeProject.stack.map((skill, i) => {
                        return (
                            <p className='projectPopup__skill' key={i}>{skill},</p>
                        )
                    })
                }
                </p>
                <div className='projectPopup__buttons'>
                <a className='projectPopup__button' target="_blank" rel="noopener noreferrer" href={activeProject.github}>GitHub</a>
                <a className='projectPopup__button' target="_blank" rel="noopener noreferrer" href={activeProject.browser}>Website</a>
            </div>
            </div>
            
        </div>

    )
}

export default ProjectPopup