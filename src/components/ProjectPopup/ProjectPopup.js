import { Link } from 'react-router-dom';

import ImageCarousel from '../ImageCarousel/ImageCarousel';
import Overlay from '../Overlay/Overlay';
import CloseButton from '../CloseButton/CloseButton';
import ProjectSkills from '../ProjectSkills/ProjectSkills';
import ProjectButton from '../ProjectButton/ProjectButton';

import './ProjectPopup.css'

const ProjectPopup = ({ activeProject }) => {

    return (
        activeProject &&
        <>
            <Overlay />
            <div className='projectPopup'>

                <CloseButton />
                <ImageCarousel
                    images={activeProject.images}
                />

                <div className='projectPopup__info'>
                    <h3 className='projectPopup__title'>{activeProject.title}</h3>
                    <p className='projectPopup__description'>{activeProject.description}</p>

                    <ProjectSkills skills={activeProject.stack} />

                    <div className='projectPopup__buttons'>
                        <ProjectButton
                            activeProject={activeProject}
                            type='github'
                        />
                        <ProjectButton
                            activeProject={activeProject}
                            type='browser'
                        />
                    </div>
                </div>
            </div>
        </>

    )
}

export default ProjectPopup