



import {  NavbarProps } from "../types";
import MobileNavbar from "./MobileNavbar";
import DesktopNavbar from "./DesktopNavbar";


const Navbar = (props: NavbarProps) => {
  return (
    <header className="py-4 px-4 lg:px-2 sticky z-3 top-0 left-0 w-full">
      <div className="custom-container glass-card px-2 py-2">
        {/* Desktop Menu */}
        <DesktopNavbar  {...props}/>

        {/* Mobile Menu */}
        <MobileNavbar {...props} />
      </div>
    </header>
  );
};

export default Navbar ;
