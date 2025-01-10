"use client";
import LeftBlock from "./components/LeftBlock";
import RightBlock from "./components/RightBlock";

const Hero = () => {
  return (
    <div className="desktop-px mobile-px h-screen flex flex-col-reverse relative justify-center items-center gap-16 pt-28 md:pt-6 sm:flex-row">
      {/* Left Texts */}
      <LeftBlock />

      {/* Right Image */}
      <RightBlock />
    </div>
  );
};

export default Hero;
