"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { HashLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center">
        <motion.div
          className="dark:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src="/assets/liquid.gif"
            alt="Loading"
            width={272}
            height={204}
            priority
            unoptimized
          />
        </motion.div>
        <div className="hidden dark:block">
          <HashLoader className="dark:invert" size={72} />
        </div>
    </div>
  )
}

export default Loading
