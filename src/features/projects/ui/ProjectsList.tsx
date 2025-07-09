import { ProjectsData } from "../data/project-data";
import ProjectCard from "./ProjectCard";

function ProjectsList() {
    return ( 
        <ul className="my-12 gap-5 md:gap-7 lg:gap-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {
                ProjectsData.map((project, index) => (
                    <ProjectCard {...project} key={index} />
                ))
            }
        </ul>
     );
}

export default ProjectsList;