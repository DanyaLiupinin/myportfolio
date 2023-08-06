import './MultiProjectsPopup.css'
import '../ProjectPopup/ProjectPopup.css'

import closeButton from '../../images/close-button.svg'

const MultiProjectPopup = ({ activeProject, onCloseProject }) => {

    const linkClickHandler = (e, i) => {
        if (e.target.textContent === 'GitHub') {
            window.ym(93918643, 'reachGoal', `${activeProject.analiticsProjectsName[i]}Github`)
        } else {
            window.ym(93918643, 'reachGoal', `${activeProject.analiticsProjectsName[i]}Website`)
        }
    }

    return (
        activeProject !== null &&
        <>
            <div className='overlay'></div>
            <div className='projectPopup multiPopup'>
                <button className='projectPopup__close-button multiPopup__close-button' type='button' onClick={() => onCloseProject()}>
                    <img className='projectPopup__close-button-image' src={closeButton} alt='close button'></img>
                </button>
                {
                    activeProject.images &&
                    activeProject.images.map((projectImage, i) => {
                        return (
                            <div className='multiPopup__card' key={i}>
                                <div className='multiPopup__image-container'>
                                    <div className='multiPopup__card-hover'>
                                        <a className='projectPopup__button multiPopup__button' target="_blank" rel="noopener noreferrer" href={activeProject.github[i]} onClick={(e) => linkClickHandler(e, i)}>GitHub</a>
                                        <a className='projectPopup__button multiPopup__button' target="_blank" rel="noopener noreferrer" href={activeProject.browser[i]} onClick={(e) => linkClickHandler(e, i)}>Website</a>
                                    </div>
                                    <img src={projectImage} alt={activeProject.description[i]} className='multiPopup__card-image'></img>
                                </div>
                                <p className='multiPopup__card-title'>{activeProject.description[i]}</p>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default MultiProjectPopup