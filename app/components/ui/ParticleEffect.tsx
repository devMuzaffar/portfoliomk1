"use client";

import {
  MoveDirection,
  OutMode,
  type ISourceOptions,
} from "@tsparticles/engine";
import Particles, {
  ParticlesProvider,
  type ParticlesPluginRegistrar,
} from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

const MOBILE_BREAKPOINT = 768;

const getIsMobile = () =>
  typeof window !== "undefined" ? window.innerWidth <= MOBILE_BREAKPOINT : false;

const initParticles: ParticlesPluginRegistrar = async (engine) => {
  await loadSlim(engine);
};

interface ParticleEffectProps {
  onReady?: () => void;
}

const ParticleEffect = ({ onReady }: ParticleEffectProps) => {
  const [isMobile, setIsMobile] = useState<boolean>(getIsMobile);
  const readyFired = useRef(false);

  const handleParticlesLoaded = useCallback(() => {
    if (!readyFired.current && onReady) {
      readyFired.current = true;
      onReady();
    }
  }, [onReady]);

  useEffect(() => {
    // Mobile Resize value
    let resizeTimeout: ReturnType<typeof setTimeout>;

    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(
        () => setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT),
        100
      );
    };

    window.addEventListener("resize", handleResize);
    return () => {
      clearTimeout(resizeTimeout);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const options: ISourceOptions = useMemo(() => {
    // Color for particles
    const particlesColor = ["#3b82f6", "#60a5fa", "#1e40af"];

    return {
      fpsLimit: 60,
      hdr: false,
      interactivity: {
        events: {
          onHover: {
            enable: false,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 100,
            duration: 0.4,
          },
          grab: {
            distance: 400,
            line_linked: {
              opacity: 1,
            },
          },
        },
      },
      particles: {
        paint: {
          color: {
            value: particlesColor,
          },
        },
        links: {
          color: {
            value: particlesColor,
          },
          distance: 180,
          enable: true,
          opacity: 0.35,
          width: 1,
        },
        collisions: {
          enable: true,
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: {
            default: OutMode.bounce,
          },
          random: true,
          speed: 1,
          straight: false,
        },
        number: {
          value: isMobile ? 40 : 80,
          density: {
            enable: false,
            area: isMobile ? 400 : 800,
          },
        },
        opacity: {
          value: 0.25,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    };
  }, [isMobile]);

  return (
    <ParticlesProvider init={initParticles}>
      <Particles
        id="tsparticles"
        options={options}
        particlesLoaded={handleParticlesLoaded}
      />
    </ParticlesProvider>
  );
};

export default ParticleEffect;
