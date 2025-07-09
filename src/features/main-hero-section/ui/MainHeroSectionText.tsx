import { CustomLink, DownloadLink } from "@/src/shared/ui";
import { Download, Mail, MoveRight, Phone } from "lucide-react";

function MainHeroSectionText() {
  return (
    <div className="flex flex-col min-h-5/6 justify-center">
      <h1 className="h1 mb-5 mt-auto !font-light">
        Nooreddin <br /> <span className="!font-semibold">Emad</span>
      </h1>
      <hr className="w-30"/>
      <p className="mt-10">
        a Frontend Developer who brings ideas to life. I craft responsive,
        modern web apps using React, TypeScript, Tailwind, and more. I turn
        complex problems into clean, user-focused solutions with performance,
        accessibility, and scalability in mind.
      </p>
      <div className="flex gap-3 mt-5">
        <CustomLink title="View my work" className="text-sm" Icon={MoveRight}   href={"/Contact"}/>
        <DownloadLink title="My Resume" variant="filled" className="text-sm" Icon={Download} href="/resume/Nooreddin-Emad-CV-Front-Dev.pdf" download={true} target="_blank"  />
      </div>
      <div className="mt-auto">
      <ul className="flex gap-3">
        <li>
           <DownloadLink title="" href="" className="p-2 border! md:border-2!" image={ {src:"/brands/github.svg", width:15, height:15, alt:"github"}}></DownloadLink>
           <span className="sr-only">github account</span> 
        </li>
        <li>
            <DownloadLink title="" href="" className=" p-2 border! md:border-2!" image={{ src: "/brands/linkedin.svg", width: 15, height: 15, alt: "linkedin" }}></DownloadLink>
            <span className="sr-only">linkedin account</span>
        </li>
        <li>
            <DownloadLink title="" className=" p-2 border! md:border-2!" Icon={Mail} href=""  />
            <span className="sr-only">Email</span>
        </li>
            <DownloadLink title="" className=" p-2 border! md:border-2!" Icon={Phone} href=""  />
            <span className="sr-only">Phone</span>
      </ul>
      </div>
    </div>
  );
}

export default MainHeroSectionText;
