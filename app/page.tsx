"use client";
import {
  Skills,
  Hero,
  Navbar,
  Footer,
  Qualification,
  Contact,
  Services,
  Projects,
} from "./components";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Loading from "./loading";
import ParticleEffect from "./components/ui/ParticleEffect";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 800,
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
      <Services />
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
