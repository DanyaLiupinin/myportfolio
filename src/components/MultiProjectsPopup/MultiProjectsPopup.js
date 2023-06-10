import './MultiProjectsPopup.css'
import '../ProjectPopup/ProjectPopup.css'


import closeButton from '../../images/close-button.svg'

import one from '../../images/apex.png'
import two from '../../images/todo.png'
import three from '../../images/anderson.png'
import four from '../../images/snake.png'
import five from '../../images/cat.png'

const MultiProjectPopup = ({ activeProject, onCloseProject }) => {
    return (
        activeProject !== null &&
        <>
            <div className='overlay'></div>

            <div className='projectPopup multiPopup'>

                <button className='projectPopup__close-button multiPopup__close-button' type='button' onClick={() => onCloseProject()}>
                    <img className='projectPopup__close-button-image' src={closeButton} alt='close button'></img>
                </button>

                <div className='multiPopup__card'>
                    <div className='multiPopup__image-container'>
                        <div className='multiPopup__card-hover'>

                            <a className='projectPopup__button multiPopup__button' target="_blank" rel="noopener noreferrer" href={'google.com'}>Website</a>
                            <a className='projectPopup__button multiPopup__button' target="_blank" rel="noopener noreferrer" href={'google.com'}>Website</a>


                        </div>
                        <img src={one} alt='#' className='multiPopup__card-image'></img>
                    </div>
                    <p className='multiPopup__card-title'>Spectacular image popup</p>
                </div>

                <div className='multiPopup__card'>
                    <div className='multiPopup__image-container'>
                        <div className='multiPopup__card-hover'>

                            <a className='projectPopup__button multiPopup__button' target="_blank" rel="noopener noreferrer" href={'google.com'}>Website</a>
                            <a className='projectPopup__button multiPopup__button' target="_blank" rel="noopener noreferrer" href={'google.com'}>Website</a>


                        </div>
                        <img src={two} alt='#' className='multiPopup__card-image'></img>
                    </div>
                    <p className='multiPopup__card-title'>Kanban board</p>
                </div>

                <div className='multiPopup__card'>
                    <div className='multiPopup__image-container'>
                        <div className='multiPopup__card-hover'>

                            <a className='projectPopup__button multiPopup__button' target="_blank" rel="noopener noreferrer" href={'google.com'}>Website</a>
                            <a className='projectPopup__button multiPopup__button' target="_blank" rel="noopener noreferrer" href={'google.com'}>Website</a>


                        </div>
                        <img src={three} alt='#' className='multiPopup__card-image'></img>
                    </div>
                    <p className='multiPopup__card-title'>Beautiful image slider</p>
                </div>

                <div className='multiPopup__card'>
                    <div className='multiPopup__image-container'>
                        <div className='multiPopup__card-hover'>

                            <a className='projectPopup__button multiPopup__button' target="_blank" rel="noopener noreferrer" href={'google.com'}>Website</a>
                            <a className='projectPopup__button multiPopup__button' target="_blank" rel="noopener noreferrer" href={'google.com'}>Website</a>


                        </div>
                        <img src={four} alt='#' className='multiPopup__card-image'></img>
                    </div>
                    <p className='multiPopup__card-title'>Mini game without rules :D</p>
                </div>

                <div className='multiPopup__card'>
                    <div className='multiPopup__image-container'>
                        <div className='multiPopup__card-hover'>

                            <a className='projectPopup__button multiPopup__button' target="_blank" rel="noopener noreferrer" href={'google.com'}>Website</a>
                            <a className='projectPopup__button multiPopup__button' target="_blank" rel="noopener noreferrer" href={'google.com'}>Website</a>

                        </div>
                        <img src={five} alt='#' className='multiPopup__card-image'></img>
                    </div>
                    <p className='multiPopup__card-title'>Mini game 'catch the cat'</p>
                </div>

            </div>
        </>
    )
}

export default MultiProjectPopup