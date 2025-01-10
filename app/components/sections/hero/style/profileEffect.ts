const profileEffect = {
  initial: {
    borderRadius: "50%",
    boxShadow: "0 0 20px rgba(0, 0, 0, 0.2)",
    y: 0,
    x: 0,
  },
  animate: {
    borderRadius: ["50%", "45%", "50%"],
    boxShadow: [
      "0 0 20px rgba(59, 130, 246, 0.5)",
      "0 0 30px rgba(59, 130, 246, 0.7)",
      "0 0 20px rgba(59, 130, 246, 0.5)",
    ],
    background: [
      "linear-gradient(135deg, rgba(59, 130, 246, 1), rgba(37, 99, 235, 1))",
      "linear-gradient(135deg, rgba(37, 99, 235, 1), rgba(59, 130, 246, 1))",
      "linear-gradient(135deg, rgba(59, 130, 246, 1), rgba(37, 99, 235, 1))",
    ],
    y: 1,
    x: -1,
  },
  transition: {
    repeat: Infinity,
    repeatType: "reverse" as const,
    duration: 5,
    ease: "easeInOut",
  },
};

export default profileEffect;
