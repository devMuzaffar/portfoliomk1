import { TypeAnimation } from "react-type-animation";
import HeroButton from "./HeroButton";
import { socialIcons, subTitle } from "@/app/list/hero";
import { LuDownload, LuMouse, LuSend } from "react-icons/lu";
import { LuArrowDown } from "react-icons/lu";
import Link from "next/link";
import FloatingButton from "../ui/FloatingButton";

const LeftBlock = () => {
  return (
    <div data-aos="fade-right" className="flex-1 flex flex-col justify-top items-center sm:justify-center">
      <div className="flex flex-col gap-4 relative">
        {/* Greet Text */}
        <div className="text-lg sm:text-2xl text-gray-600 dark:text-gray-200">
          <p>Peace Be upon you !</p>
        </div>

        {/* Name */}
        <div className="text-5xl sm:text-6xl font-bold">
          <h1>
            I&apos;m <span className="text-primary">Muzaffar</span>
          </h1>
        </div>

        {/* Subtitle */}
        <div>
          <TypeAnimation
            className="text-lg text-gray-700 dark:text-gray-300 sm:text-xl"
            sequence={subTitle}
            repeat={Infinity}
          />
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-4 py-2 sm:flex-row md:gap-2">
          <a href="mailto:muzaffarhassan64@gmail.com">
            <HeroButton className="bg-primary hover:bg-primary/60 w-full md:w-auto">
              Contact Me <LuSend size={18} />
            </HeroButton>
          </a>
          <a href="/assets/resume.pdf" target="_blank">
            <HeroButton className="bg-secondary hover:bg-secondary/60 w-full md:w-auto">
              Download CV <LuDownload size={18} />
            </HeroButton>
          </a>
        </div>

        {/* Social Media Buttons */}
        <div className="px-2 flex gap-4 text-xl text-gray-800 dark:text-white">
          {socialIcons.map(({ icon, link }, index) => (
            <a
              key={index}
              className="animate cursor-pointer hover:-translate-y-1"
              href={link}
              target="_blank"
            >
              {icon}
            </a>
          ))}
        </div>

        {/* Scroll Down button */}
        <Link href="#services">
          <FloatingButton>
            <div className="w-fit absolute right-0 -bottom-10 animate flex gap-2 items-center">
              <LuMouse className="text-primary" size={32} />
              <p className="text-sm font-medium">Scroll Down</p>
              <LuArrowDown className="text-primary" size={18} />
            </div>
          </FloatingButton>
        </Link>
      </div>
    </div>
  );
};

export default LeftBlock;
