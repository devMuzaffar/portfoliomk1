import NavbarProvider from "@/app/contexts/navbarContext";
import Menu from "./components/Menu";
import Nav from "./components/Nav";

const Navbar = () => {
  return (
    <NavbarProvider>
      <header data-aos="fade-down" className="fixed w-full z-10">
        {/* Navbar */}
        <Nav />

        {/* Menu */}
        <Menu />
      </header>
    </NavbarProvider>
  );
};

export default Navbar;
