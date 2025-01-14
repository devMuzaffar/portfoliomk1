import NavbarProvider from "@/app/contexts/navbarContext";
import Nav from "./components/Nav";
import Menu from "./components/Menu";

const Navbar = () => {
  return (
    <NavbarProvider>
      <div className="fixed w-full z-50">
        {/* Navbar */}
        <Nav />

        {/* Menu */}
        <Menu />
        
      </div>
    </NavbarProvider>
  );
};

export default Navbar;
