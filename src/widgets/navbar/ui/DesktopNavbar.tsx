"use client";
import { MenuItem, NavbarProps } from "../types";
import {
  CustomLink,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/src/shared/ui";
import SubMenuLink from "./SubMenuLink";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail } from "lucide-react";
import dynamic from "next/dynamic";

const ThemeToggle = dynamic(() => import("../../../features/theme-toggle/ui/ThemeToggle"), {
  ssr: false,
});

const DesktopNavbar = ({ logo, action, menu }: NavbarProps) => {
  const path = usePathname();
  const isLinkActive = (url: string) => {
    return path === url;
  };
  const activeLinkIndex = menu.findIndex((item) => {
    if (item.items) {
      if (item.url === path) return true;
      return item.items.some((subItem) => isLinkActive(subItem.url));
    }
    return isLinkActive(item.url);
  });
  console.log(activeLinkIndex, "activeLinkIndex");

  return (
    <nav className="hidden justify-between lg:flex relative">
      <div className="flex items-center">
        {/* Logo */}
        <Link href={logo.url} className="flex items-center gap-2">
          <span className="text-lg text-primary-text font-semibold tracking-tighter">
            {logo.title}
          </span>
        </Link>
        <div className="flex items-center ml-6 relative">
          <NavigationMenu>
            <NavigationMenuList>
              {menu.map((item) => renderMenuItem(item, path))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <CustomLink iconSize="medium" Icon={Mail} iconPosition="left" title={action.contanct.title} href={action.contanct.url} className="text-sm"></CustomLink>
        <ThemeToggle/>
      </div>
    </nav>
  );
};

const renderMenuItem = (item: MenuItem, path: string) => {
  const isActive =
    path === item.url ||
    (item.items && item.items.some((subItem) => subItem.url === path));
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title} >
        <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
        <NavigationMenuContent className="bg-popover text-popover-foreground">
          {item.items.map((subItem) => (
            <NavigationMenuLink asChild key={subItem.title} className="w-80">
              <SubMenuLink item={subItem} />
            </NavigationMenuLink>
          ))}
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem key={item.title} className="relative">
      {isActive && (
        <div className="text-sm -z-1 font-medium top-0.5 px-4 py-2 glass-card text-transparent !absolute">
          {item.title}
        </div>
      )}
      <NavigationMenuLink
        href={item.url}
        className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium  hover:scale-105 transition-all duration-200 ease-in-out"
      >
        <Link href={item.url}>{item.title}</Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

export default DesktopNavbar;
