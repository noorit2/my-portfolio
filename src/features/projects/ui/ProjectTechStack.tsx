import { ProjectTechStackProps } from "../data/project-data";

function ProjectTechStack({techStack}:ProjectTechStackProps) {
    return ( <ul className="flex gap-1">
        {techStack.slice(0,3).map((tech, index) => (
            <li key={index} className=" glass-card px-2 py-1 text-xs">
                {tech}
            </li>
        ))}
        {techStack.length > 3 &&  <li key="showMore">
            <span className="glass-card px-2 py-1 text-sm">+{techStack.length - 3}</span>
        </li>}
    </ul> );
}

export default ProjectTechStack;