import "@theme-toggles/react/css/Classic.css";
import { NavbarContext } from "@/app/contexts/navbarContext";
import { AnimatePresence, motion } from "framer-motion";
import { useContext } from "react";
import { HiMenuAlt3, HiOutlineX } from "react-icons/hi";

const ToggleMenuButton = () => {
  const { isMobileMenu, setIsMobileMenu } = useContext(NavbarContext);

  const toggleMenu = () => {
    setIsMobileMenu(!isMobileMenu);
  };

  return (
    <AnimatePresence mode="wait">
      {isMobileMenu ? (
        <motion.div
          key="close-button"
          initial={{ rotate: 0 }}
          animate={{ rotate: -360 }}
          exit={{ rotate: 360 }}
          transition={{ duration: 0.3, ease: "linear" }}
        >
          <HiOutlineX
            className="cursor-pointer text-2xl md:text-3xl"
            onClick={() => toggleMenu()}
          />
        </motion.div>
      ) : (
        <motion.div
          key="menu-button"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.1, ease: "linear" }}
        >
          <HiMenuAlt3
            className="cursor-pointer text-2xl md:text-3xl"
            onClick={() => toggleMenu()}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ToggleMenuButton;
