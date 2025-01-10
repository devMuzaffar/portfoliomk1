import DesktopNav from "./components/DesktopNav";
import MobileMenu from "./components/MobileMenu";
import MobileNav from "./components/MobileNav";
import NavbarProvider from "@/app/contexts/navbarContext";

const Navbar = () => {
  return (
    <NavbarProvider>
      <div className="fixed w-full z-50">
        {/* Desktop Nav */}
        <div className="hidden md:block">
          <DesktopNav />
        </div>

        {/* Tablet Mobile Nav */}
        <div className="block md:hidden">
          <MobileNav />
        </div>

        {/* Mobile Menu */}
        <div className="block md:hidden">
          <MobileMenu />
        </div>
      </div>
    </NavbarProvider>
  );
};

export default Navbar;
