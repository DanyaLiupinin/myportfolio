import './ProjectButton.css';

const ProjectButton = ({ activeProject, type }) => {

    const linkClickAnalitics = (e) => {
        if (e.target.textContent === 'GitHub') {
            window.ym(93918643, 'reachGoal', `${activeProject.analiticsName}Github`)
        } else {
            window.ym(93918643, 'reachGoal', `${activeProject.analiticsName}Website`)
        }
    }

    if (type === 'github') {

        return (
            <a className={`projectButton
        ${activeProject.github === 'no' ?
                    'projectButton_disabled' : ''
                }`}
                target="_blank"
                rel="noopener noreferrer"
                href={activeProject.github}
                disabled={false}
                onClick={linkClickAnalitics}
            >
                {`${activeProject.github === 'no' ? 'no github :(' : 'GitHub'}`}
            </a>
        )
    }

    if (type === 'browser') {

        return (
            <a className={`projectButton
            ${activeProject.browser === 'no' ?
                    'projectButton_disabled' : ''
                }`}
                target="_blank"
                rel="noopener noreferrer"
                href={activeProject.browser}
                onClick={linkClickAnalitics}
            >
                {`${activeProject.browser === 'no' ? activeProject.browserButton : 'Browser'}`}
            </a>
        )
    }

}

export default ProjectButton;