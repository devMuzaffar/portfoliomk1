import { NavbarContext } from "@/app/contexts/navbarContext";
import { Classic } from "@theme-toggles/react";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useContext } from "react";

// Wrapper to fix @theme-toggles/react type incompatibility with React 19
// (React 19 removed onPointerEnterCapture/onPointerLeaveCapture from DOMAttributes)
const ClassicToggle = Classic as unknown as React.FC<{
  title?: string;
  toggled?: boolean;
  toggle?: React.Dispatch<React.SetStateAction<boolean>>;
  className?: string;
  duration?: number;
  onToggle?: () => void;
  placeholder?: string;
}>;

const ToggleThemeButton: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const { isToggled, setIsToggled, isMobileMenu } = useContext(NavbarContext);

  const toggleTheme = () => {
    return theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <AnimatePresence>
      {!isMobileMenu && (
        <motion.div
          initial={{ opacity: 0, rotate: 0 }}
          animate={{ opacity: 1, rotate: -360 }}
          exit={{ opacity: 0, rotate: 360 }}
          transition={{ duration: 0.1, ease: "linear" }}
          className="flex items-center h-full justify-center"
        >
          <ClassicToggle
            title=""
            toggled={isToggled}
            toggle={setIsToggled}
            className="text-2xl md:text-3xl"
            duration={750}
            onToggle={() => toggleTheme()}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ToggleThemeButton;
