
export interface SkillData {
    title: string;
    type: "language" | "frontend" | "backend";
    image: {
        src: string;
        alt: string;
    };
}


export const skillsData: SkillData[] = [
    {
        title:"JavaScript",
        type:"language",
        image:{
            src:"/skills/javascript.svg",
            alt:"JavaScript",
        }
    },
    {
        title:"TypeScript",
        type:"language",
        image:{
            src:"/skills/typescript.svg",
            alt:"TypeScript",
        }
    },
    {
        title:"C++",
        type:"language",
        image:{
            src:"/skills/cplusplus.svg",
            alt:"C++",
        }
    },
    {
        title:"React",
        type:"frontend",
        image:{
            src:"/skills/react.svg",
            alt:"React",
        }
    },
    {
        title:"Next.js",
        type:"frontend",
        image:{
            src:"/skills/nextdotjs.svg",
            alt:"Next.js",
        }
    },
    {
        title:"Tailwind CSS",
        type:"frontend",
        image:{
            src:"/skills/tailwindcss.svg",
            alt:"Tailwind CSS",
        }
    },
    {
        title:"HTML5",
        type:"language",
        image:{
            src:"/skills/html5.svg",
            alt:"HTML5",
        }
    },
    {
        title:"CSS3",
        type:"language",
        image:{
            src:"/skills/css.svg",
            alt:"CSS3",
        }
    },
    {
            title:"React Router",
            type:"frontend",
            image:{
                src:"/skills/reactrouter.svg",
                alt:"React Router",
            }
    },
    {
        title:"Material UI",
        type: "frontend",
        image: {
            src: "/skills/mui.svg",
            alt: "Material UI",
        }
    },
    {
        title:"Tanstack Query",
        type: "frontend",
        image: {
            src: "/skills/reactquery.svg",
            alt: "Tanstack Query",
        }
    },
    {
        title: "Redux",
        type: "frontend",
        image: {
            src: "/skills/redux.svg",
            alt: "Redux",
        }
    },
    {
        title:"Node.js",
        type:"backend",
        image:{
            src:"/skills/nodedotjs.svg",
            alt:"Node.js",
        }
    }
    ,
    {
        title:"Express.js",
        type:"backend",
        image:{
            src:"/skills/express.svg",
            alt:"Express.js",
        }
    },
    {
        title:"Postgres",
        type:"backend",
        image:{
            src:"/skills/postgresql.svg",
            alt:"Postgres",
        }
    },


]