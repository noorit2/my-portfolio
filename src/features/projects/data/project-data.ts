import { CustomImageProps } from "@/src/shared/types";

export type ProjectTechStackProps = {

    techStack: string[];
}

export interface ProjectDataProps {
    title: string;
    description: string;
    shortBrief: string;
    techStack: ProjectTechStackProps["techStack"];
    image: CustomImageProps;
    githubLink?: string;
    liveLink?: string;
    year: number;
}

export const ProjectsData:ProjectDataProps[]= [
    {
        title: "Project 1",
        description: "This is a brief description of Project 1.",
        shortBrief: "A brief overview of Project 1.",
        techStack:["JavaScript", "React", "Node.js"],
        image: {
            src: "/projects/APS.png",
            alt: "Project 1 Image",
        },
        githubLink:"something",
        liveLink: "https://example.com/project1",
        year: 2023
    },
    {
        title: "Project 1",
        description: "This is a brief description of Project 1.",
        shortBrief: "A brief overview of Project 1.",
        techStack:["JavaScript", "React", "Node.js"],
        image: {
            src: "/projects/APS.png",
            alt: "Project 1 Image",
        },
        githubLink:"something",
        liveLink: "https://example.com/project1",
        year: 2023
    },
    {
        title: "Project 1",
        description: "This is a brief description of Project 1.",
        shortBrief: "A brief overview of Project 1.",
        techStack:["JavaScript", "React", "Node.js"],
        image: {
            src: "/projects/APS.png",
            alt: "Project 1 Image",
        },
        githubLink:"something",
        liveLink: "https://example.com/project1",
        year: 2023
    }
]