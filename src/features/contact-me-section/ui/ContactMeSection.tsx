import { CustomLink } from "@/src/shared/ui";
import Breadcrumb from "@/src/widgets/navbar/ui/Breadcrumb";
import SectionTitle from "@/src/widgets/navbar/ui/SectionTitle";
import { Mail, MoveRight } from "lucide-react";

function ContactMeSection() {
    return ( <section className="custom-container">
        <Breadcrumb title="Let's Connect" />
        <SectionTitle topPart="Let's Work" bottomPart="Together" Component={"h3"} className="h3" />
        <div className="grid gap-4 text-center">
            <p className="max-w-[70ch] mx-auto">I&apos;m currently available for freelance projects. If you&apos;re interested in working together or have an exciting project in mind, let&apos;s have a conversation.</p>
            <div className="flex flex-wrap place-content-center gap-3 my-8">
                <CustomLink  Icon={Mail} iconSize="large" variant="filled" title="Get in touch" href="/Contact"/>
                <CustomLink  title="View My work" Icon={MoveRight} iconSize="large" href="/projects" />
            </div>
            <div className="grid grid-cols-2 gap-5 text-center">
                <div className="grid gap-2 glass-card p-6">
                    <span>
                        Email
                    </span>
                    <span className="select-all text-primary-text">
                        email@gmail.com
                    </span>
                </div>
                <div className="grid gap-2 glass-card p-6">
                    <span>
                        Current Location
                    </span>
                    <span className="text-primary-text">
                        Iraq, Baghdad
                    </span>
                </div>
            </div>
        </div>
    </section> );
}

export default ContactMeSection;