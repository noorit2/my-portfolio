import SectionTitle from "@/src/widgets/navbar/ui/SectionTitle";
import ProjectsList from "./ProjectsList";
import Breadcrumb from "@/src/widgets/navbar/ui/Breadcrumb";
import { CustomLink } from "@/src/shared/ui";
import { MoveUpRight } from "lucide-react";

function ProjectsSection() {
    return ( <section className="custom-container">
        <Breadcrumb title="Featured Work" />
        <SectionTitle topPart="Selected" bottomPart="Projects" className="h3 text-center" />
        <ProjectsList />
        <div className="grid justify-center">
            <CustomLink href="/Projects" Icon={MoveUpRight} variant="filled" className="text-sm" title="View All Projects" />
        </div>
    </section> );
}

export default ProjectsSection;