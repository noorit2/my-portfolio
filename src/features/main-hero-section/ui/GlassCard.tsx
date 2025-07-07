'use client'
import React from "react";

export interface GlassIconsItem {
  icon: React.ReactElement;
  color: string;
  label: string;
  customClass?: string;
}

export interface GlassIconsProps {
  items: GlassIconsItem[];
  className?: string;
}



const GlassIcons: React.FC<GlassIconsProps> = ({ items, className }) => {


  return (
    <div
      className={`grid gap-[5em]  mx-auto py-[3em] overflow-visible ${
        className || ""
      }`}
    >
      {items.map((item, index) => (
        <button
          key={index}
          type="button"
          aria-label={item.label}
          className={`relative bg-transparent outline-none w-[8em] h-[8em] sm:w-[10em] sm:h-[10em]  md:w-[11em] md:h-[11em] lg:w-[14em] lg:h-[14em]  max-w-full max-h-full [perspective:24em] [transform-style:preserve-3d] [-webkit-tap-highlight-color:transparent] group ${
            item.customClass || ""
          }`}
        >
          <span
            className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(hsl(var(--primary-800)),transparent)] dark:bg-[linear-gradient(hsl(var(--primary-400)),transparent)]   rounded-lg block transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.83,0,0.17,1)] origin-[100%_100%] rotate-[15deg] group-hover:[transform:rotate(20deg)_translate3d(-0.5em,-0.5em,0.5em)]"
        
          ></span>

          <span
            className="!absolute top-0 left-0 p-5 w-full h-full glass-card rounded-lg bg-[hsla(0,0%,100%,0.15)] transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.83,0,0.17,1)] origin-[80%_50%] flex backdrop-blur-[0.75em] [-webkit-backdrop-filter:blur(0.75em)] transform group-hover:[transform:translateZ(2em)]"

          >
            <span
              className="m-auto w-full h-full rounded-lg overflow-clip relative flex items-center justify-center"
              aria-hidden="true"
            >
              {item.icon}
            </span>
          </span>

          <span className="absolute top-full mt-1.5 left-0 right-0 text-center whitespace-nowrap leading-[2] text-base opacity-0 transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.83,0,0.17,1)] translate-y-0 group-hover:opacity-100 group-hover:[transform:translateY(20%)]">
            {item.label}
          </span>
        </button>
      ))}
    </div>
  );
};

export default GlassIcons;
