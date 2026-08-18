"use client";

/**
 * template.tsx — re-mounts on EVERY route change (unlike layout.tsx which persists).
 * This fixes the Framer Motion "white screen" bug on browser back/forward:
 * when layout persists, initial={{ opacity: 0 }} stays stuck invisible.
 * With template, components re-mount → animations re-run correctly.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
