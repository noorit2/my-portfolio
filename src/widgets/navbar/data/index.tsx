import { NavbarProps } from "../types";

export const NavbarData: NavbarProps = {
    logo : {
      title: "Nooreddin Emad",
      url:"/"
    },
    menu : [
      {
        title:"Home",
        url: "/",
      },
      {
        title: "About",
        url: "/About",
      },
      {
        title: "Projects",
        url: "/Projects",
      },
      {
        title:"Contact",
        url: "/Contact",
      }
  
    ],
    action : {
      contanct: { title: "Hire me", url: "/Contact" },
    },
  }