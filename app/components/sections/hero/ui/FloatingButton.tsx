import { motion } from "framer-motion";

interface motionProps {
  children?: React.ReactNode;
}

const FloatingButton = ({ children }: motionProps) => {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: 8 }}
      exit={{ y: 0 }}
      transition={{
        repeat: Infinity,
        repeatType: "reverse",
        duration: 3,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
};

export default FloatingButton;
