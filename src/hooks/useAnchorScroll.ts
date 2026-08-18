import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Handles reliable anchor-link scroll after client-side route changes.
 * On mount / pathname change, checks if window.location.hash exists and
 * scrolls to that element — with a small delay to let the page render.
 */
export function useAnchorScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;

    // Retry up to 10 times (50ms apart) to find the element after render
    let attempts = 0;
    const maxAttempts = 10;

    const tryScroll = () => {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else if (attempts < maxAttempts) {
        attempts++;
        setTimeout(tryScroll, 50);
      }
    };

    // Small initial delay to let Next.js finish rendering
    setTimeout(tryScroll, 80);
  }, [pathname]);
}
