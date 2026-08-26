"use client";

// Imports
import AOS from "aos";
import "aos/dist/aos.css";
import { useCallback, useEffect, useRef, useState } from "react";
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

const MAX_LOADER_MS = 3000; // Safety fallback — never block longer than 3s
const FADE_DURATION_MS = 500; // Matches the CSS transition-opacity duration

export default function Home() {
  // State
  const [isLoading, setIsLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(true);
  const dismissedRef = useRef(false);

  // Shared dismiss logic — called by either particles ready or timeout
  const dismissLoader = useCallback(() => {
    if (dismissedRef.current) return;
    dismissedRef.current = true;

    // Start fade-out
    setIsLoading(false);
    // Remove overlay from DOM after fade completes
    setTimeout(() => setShowLoader(false), FADE_DURATION_MS);
  }, []);

  // Particles are ready — dismiss the loader
  const handleParticlesReady = useCallback(() => {
    dismissLoader();
  }, [dismissLoader]);

  useEffect(() => {
    AOS.init({ duration: 700, once: true });
    AOS.refresh();

    // Safety timeout: dismiss loader even if particles take too long
    const safetyTimer = setTimeout(dismissLoader, MAX_LOADER_MS);
    return () => clearTimeout(safetyTimer);
  }, [dismissLoader]);

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

      <ParticleEffect onReady={handleParticlesReady} />
      <Navbar />
      <main>
        <Hero />
        {/* <Services /> */}
        <Skills />
        <Projects />
        <Qualification />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
