import './ProjectSkills.css';

const ProjectSkills = ({ skills }) => {

console.log(skills)

    return (
        <div className='projectPopup__skills'>
            <p className='projectPopup__skill'>Stack:</p>
            {
                skills?.map((skill, i) => {
                    return (
                        <p className='projectPopup__skill' key={i}>{skill},</p>
                    )
                })
            }
        </div>
    )
}

export default ProjectSkills;