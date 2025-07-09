import Image from "next/image";
import { ProjectDataProps } from "../data/project-data";
import ProjectTechStack from "./ProjectTechStack";
import { CustomLink, DownloadLink } from "@/src/shared/ui";
import { MoveRight, MoveUpRight } from "lucide-react";

function ProjectCard({
  title,
  image,
  shortBrief,
  techStack,
  githubLink,
  liveLink,
  year,
}: ProjectDataProps) {
  return (
    <li className="glass-card rounded-lg hover:border-border-2! dark:hover:border-border-1!  overflow-clip group">
        <div className="w-full h-44 relative group">
      <Image {...image} fill className="scale-[0.99] object-cover z-0 transition duration-500"/>
      <div className="w-full h-full z-1 mix-blend-color transition-all duration-200  bg-accent-1/50 group-hover:bg-transparent "/>
      </div>
      <div className="bg-surface-1/30 dark:bg-surface-4/50  px-4 py-6 grid gap-5">
        <span className="text-xs -mt-1.5">{year}</span>
        <h3 className="h5">{title}</h3>
        <p className="text-sm">{shortBrief}</p>
        <ProjectTechStack techStack={techStack} />
        <div className="flex justify-between">
        <CustomLink href={`/Projects/${title}`} iconSize="small" className="text-sm" Icon={MoveRight} title="View Details"></CustomLink>
        <ul className="flex ">
          {liveLink && (
            <li>
              <DownloadLink title="" Icon={MoveUpRight} href={liveLink} />
            </li>
          )}
          {githubLink && (
            <li>
              <DownloadLink
                title=""
                image={{
                  src: "/brands/github.svg",
                  width: 15,
                  height: 15,
                  alt: "github",
                }}
                href={githubLink}
              />
            </li>
          )}
        </ul></div>
      </div>
    </li>
  );
}

export default ProjectCard;
