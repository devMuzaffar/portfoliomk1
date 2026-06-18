"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import {
  Contact,
  Footer,
  Hero,
  Navbar,
  Projects,
  Qualification,
  Skills
} from "./components";
import ParticleEffect from "./components/ui/ParticleEffect";
import Loading from "./loading";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
    });

    const timeoutId = setTimeout(() => setIsLoading(false), 250);

    return () => clearTimeout(timeoutId);
  }, []);

  const MainComponent = () => (
    <div>
      <ParticleEffect />

      <Navbar />
      <Hero />
      {/* <Services /> */}
      <Skills />
      <Projects />
      <Qualification />
      <Contact />
      <Footer />
    </div>
  );

  return (
    <div
      className="animate bg-gray-100 dark:bg-primary-dark"
      suppressHydrationWarning
    >
      {/* <MainComponent /> */}
      {isLoading ? <Loading /> : <MainComponent />}
    </div>
  );
}
