'use client'
import {
  Sheet,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetContent,
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  CustomLink,
} from "@/src/shared/ui";
import { Mail, Menu } from "lucide-react";
import { MenuItem, NavbarProps } from "../types";
import SubMenuLink from "./SubMenuLink";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/src/shared/utils";
import dynamic from "next/dynamic";
const ThemeToggle = dynamic(() => import("../../../features/theme-toggle/ui/ThemeToggle"), {
  ssr: false,
});
function MobileNavbar({logo,action,menu}: NavbarProps) {
  const path = usePathname();
  return (
    <div className="block lg:hidden mobile">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href={logo.url} className="flex items-center gap-2">
          <span className="text-lg  font-semibold tracking-tighter text-primary-text">
            {logo.title}
          </span>
        </Link>
        <div className="flex gap-2 ">
        <ThemeToggle/>
        <Sheet>
          <SheetTrigger className="px-2 py-2 text-md text-primary-text rounded-[50%] bg-transparent border border-transparent hover:bg-surface-3/25 hover:border-white/25 hover:shadow-2xl">
              <Menu className="size-4 text-primary-text" />
          </SheetTrigger>
          <SheetContent className="overflow-y-auto  dark:border-border-2 border-neutral-100/50 bg-surface-1/50 backdrop-blur-2xl dark:bg-surface-3/25">
            <SheetHeader>
              <SheetTitle>
                <Link href={logo.url} className="flex items-center gap-2 text-primary-text">
                  {logo.title}
                </Link>
              </SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-6 p-4">
              <Accordion
                type="single"
                collapsible
                className="flex w-full flex-col gap-4"
                asChild
              >
                <ul>
                {menu.map((item) => renderMobileMenuItem(item,path))}
                </ul>
              </Accordion>

              <div className="flex flex-col gap-3">
                <CustomLink Icon={Mail} iconPosition="left" iconSize="medium" className="text-sm py-3 "  href={action.contanct.url} title={action.contanct.title}></CustomLink>
              </div>
            </div>
          </SheetContent>
        </Sheet>
        </div>
      </div>
    </div>
  );
}

const renderMobileMenuItem = (item: MenuItem,path:string) => {
  const isActive =
  path === item.url ||
  (item.items && item.items.some((subItem) => subItem.url === path));
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0">
        <AccordionTrigger className="text-md py-0 font-semibold hover:no-underline">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="mt-2">
          {item.items.map((subItem) => (
            <SubMenuLink key={subItem.title} item={subItem} />
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <li>
    <Link href={item.url} className={cn("text-md py-3  relative text-box-trim font-semibold w-full inline-block hover:scale-[102%] transition-all duration-200",
    )
    }>
         {isActive && (
        <div className="text-md font-semibold -left-2 -z-1  text-box-trim top-0  w-full py-3 glass-card text-transparent !absolute ">
          {item.title}
        </div>
      )}
      {item.title}
    </Link>
    </li>
  );
};

export default MobileNavbar;
