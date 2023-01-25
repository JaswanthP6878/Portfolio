import ProjectCard from "./ProjectCard";
import { ProjectContent } from "./contentData";


function Projects() {
    const renderedProjects = ProjectContent.map((project, index) => {
        return  <ProjectCard key = {index} content = {project}/>
    })
    return (
        <div className="mt-3 flex flex-col md:flex-row md:flex-wrap md:justify-around">
            {renderedProjects}
        </div>
    )
}

export default Projects;