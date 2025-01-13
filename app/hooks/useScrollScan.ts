"use client";
import { useEffect, useState } from "react"

// Hook that Scans Scroll window on Background and returns boolean value if certain value went true

const useScrollScan = () => {

    const [isScroll, setIsScroll] = useState(false);

    const handleScroll = (e: Event) => {
        console.log(e);
    }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  
    return () => {
        window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return isScroll;
  
}

export default useScrollScan