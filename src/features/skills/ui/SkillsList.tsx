import Image from "next/image";
import { SkillData } from "../data/skills-data";
function SkillsList({skills}:{skills:SkillData[]}) {
  return (
    <ul className="flex mx-auto w-fit place-content-center md:place-content-start  gap-6 flex-wrap">
        {
        skills.map((skill, index) => (
            <li key={index} className="grid items-center content-center border border-transparent group  gap-2 my-2 glass-card  hover:border-border-1! p-6 group min-w-32 ">
                <Image src={skill.image.src} width={24} height={24} alt={skill.image.alt} className="w-6 h-6 p-6 box-content bg-surface-3/50 rounded-lg max-w-fit  group-hover:scale-105 group-hover:bg-surface-3/30 transition-all duration-200 self-center justify-self-center" />
                <span className="text-sm text-center uppercase">{skill.title}</span>
            </li>
        ))
        }
    </ul>
  );
}

export default SkillsList;
