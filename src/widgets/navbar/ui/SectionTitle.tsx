import { cn } from "@/src/shared/utils";

export interface SectionTitleProps {
    topPart: string;
    bottomPart: string;
    className?: string;
    Component?: React.ElementType;
    }

function SectionTitle({ topPart, bottomPart, className, Component = "h2" }: SectionTitleProps) {
    return (   <Component className={cn("h1 mb-5 mt-2 font-extralight! text-center",className)}>
        {topPart} <br /> <span className="font-semibold!">{bottomPart}</span>
      </Component> );
}

export default SectionTitle;