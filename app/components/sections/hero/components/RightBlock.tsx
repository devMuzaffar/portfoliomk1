import { motion } from "framer-motion";
import profileEffect from "../style/profileEffect";

const RightBlock = () => {
  return (
    <div className="flex-1 hidden md:block">
        <div className="flex justify-center items-center">
          <motion.div
            className="bg-primary flex items-center justify-center w-64 h-64 md:w-[352px] md:h-[352px]"
            {...profileEffect}
          >
            <div className="bg-secondary rounded-full overflow-hidden w-56 h-56 md:w-80 md:h-80">
              <img
                className="w-56 md:w-80"
                src="/assets/profile.png"
                alt="Profile"
              />
            </div>
          </motion.div>
        </div>
      </div>
  )
}

export default RightBlock