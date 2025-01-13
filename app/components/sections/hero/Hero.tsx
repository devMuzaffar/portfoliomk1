"use client";
import LeftBlock from "./components/LeftBlock";
import RightBlock from "./components/RightBlock";

const Hero = () => {
  return (
    <div
      id="hero"
      className="section-padding h-screen flex flex-col-reverse relative justify-between items-center gap-16 !pt-28 sm:pt-6 sm:flex-row"
    >
      {/* Left Texts */}
      <LeftBlock />

      {/* Right Image */}
      <RightBlock />
    </div>
  );
};

export default Hero;
