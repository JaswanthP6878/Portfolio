import ProgressBar from './ProgressBar'
import { Fragment } from 'react'

function SkillsCard ({ name, skills }) {
   
    const renderedSkills = skills.map((data) => {
        return (
            <Fragment key = {data.name}>
                <ProgressBar data = {data} />
             </Fragment>   
        )
    })
    return (
        <div className = "mt-4 rounded-md border-solid border-2 border-gray-100 p-2 md:basis-5/12">
             <h3 className = "text-xl mb-3">{name}</h3>
             {renderedSkills}
        </div>
    )
}

export default SkillsCard;