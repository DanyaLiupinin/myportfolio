import { Link } from 'react-router-dom'

import closeButton from '../../images/close-button.svg'

import Overlay from '../Overlay/Overlay'
import CloseButton from '../CloseButton/CloseButton'

import './MarathonProjectPopup.css'
import '../ProjectPopup/ProjectPopup.css'

const MarathonProjectPopup = ({ activeProject }) => {

    const linkClickHandler = (e, i) => {
        if (e.target.textContent === 'GitHub') {
            window.ym(93918643, 'reachGoal', `${activeProject.analiticsProjectsName[i]}Github`)
        } else {
            window.ym(93918643, 'reachGoal', `${activeProject.analiticsProjectsName[i]}Website`)
        }
    }

    return (
        activeProject &&
        <>
            <Overlay />
            <div className='projectPopup marathonPopup'>
                <CloseButton
                    className='marathonPopup__close-button'
                />
                {
                    activeProject.images &&
                    activeProject.images.map((projectImage, i) => {
                        return (
                            <div className='marathonPopup__card' key={i}>
                                <div className='marathonPopup__image-container'>
                                    <div className='marathonPopup__card-hover'>
                                        <a className='projectPopup__button marathonPopup__button' target="_blank" rel="noopener noreferrer" href={activeProject.github[i]} onClick={(e) => linkClickHandler(e, i)}>GitHub</a>
                                        <a className='projectPopup__button marathonPopup__button' target="_blank" rel="noopener noreferrer" href={activeProject.browser[i]} onClick={(e) => linkClickHandler(e, i)}>Website</a>
                                    </div>
                                    <img src={projectImage} alt={activeProject.description[i]} className='marathonPopup__card-image'></img>
                                </div>
                                <p className='marathonPopup__card-title'>{activeProject.description[i]}</p>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default MarathonProjectPopup;