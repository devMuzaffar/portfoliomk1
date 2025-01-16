import { AnimatePresence, motion } from "framer-motion";
import { JSX } from "react";

interface motionCardProp {
  children?: React.ReactNode;
  className?: string;
  list: {
    img: string;
    title: string;
    githubLink: string;
    siteLink: string;
    icons: JSX.Element[];
  }[];
}

const MotionCard = ({ children, list, className }: motionCardProp) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={list?.length}
        className={className}
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 25, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default MotionCard;
