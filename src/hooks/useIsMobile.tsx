// hooks/useIsMobile.ts
"use client";

import { useEffect, useState } from "react";

export function useIsMobile () {
  const [isMobile, setIsMobile] = useState<boolean>(() => {
    // --- Server-side execution ---
    if (typeof window === "undefined") {
      // Detect from user-agent header (Next.js automatically provides this on server)
      const ua = require("next/headers").headers().get("user-agent") || "";
      return /mobile|android|iphone|ipad|ipod/i.test(ua);
    }

    // --- Client-side execution (initial render) ---
    return window.innerWidth < 768;
  });

  useEffect(() => {
    // --- Runs only in browser ---
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Check once and listen for resizes
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
}
