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
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    // Content is already mounted (rendered below). Init AOS now so every
    // data-aos element is registered before it can become visible, then
    // refresh so AOS measures positions against the final layout.
    AOS.init({ duration: 700, once: true });
    AOS.refresh();

    const fadeTimer = setTimeout(() => setIsLoading(false), 250);
    const removeTimer = setTimeout(() => setShowLoader(false), 750);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  return (
    <div
      className="animate bg-gray-100 dark:bg-primary-dark"
      suppressHydrationWarning
    >
      {/* Loader overlays the content and fades out — no DOM swap, so AOS
          never has to re-measure a freshly-mounted tree. */}
      {showLoader && (
        <div
          className={`fixed inset-0 z-50 bg-gray-100 dark:bg-primary-dark transition-opacity duration-500 ${
            isLoading ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        >
          <Loading />
        </div>
      )}

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
}
