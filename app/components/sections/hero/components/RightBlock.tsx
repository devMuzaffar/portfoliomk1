import { motion } from "framer-motion";
import Image from "next/image";
import profileEffect from "../style/profileEffect";

const RightBlock = () => {
  return (
    <div data-aos="fade-left" className="flex-1 hidden md:block">
      <div className="flex justify-center items-center">
        <motion.div
          className="bg-primary flex items-center justify-center w-64 h-64 md:w-[352px] md:h-[352px]"
          {...profileEffect}
        >
          <div className="bg-secondary rounded-full overflow-hidden w-56 h-56 md:w-80 md:h-80">
            <div className="overflow-hidden rounded-full relative inset-0 h-full w-56 md:w-80">
              <Image
                className="object-cover"
                fill
                sizes="(max-width: 768px) 224px, 320px"
                loading="eager"
                src="/assets/profile.png"
                alt="Profile"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RightBlock;
