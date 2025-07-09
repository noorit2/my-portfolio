import SectionTitle from "@/src/widgets/navbar/ui/SectionTitle";
import SkillsTabs from "./SkillsTabs";
import Breadcrumb from "@/src/widgets/navbar/ui/Breadcrumb";

function SkillsSection() {
    return ( <section className="custom-container">
        <Breadcrumb title="Skills" />
        <SectionTitle topPart="Skills &" bottomPart="Technologies" className="h3 text-center" />
        <SkillsTabs/>
    </section> );
}

export default SkillsSection;