"use client";
import { useAnchorScroll } from "@/hooks/useAnchorScroll";

/** Thin client wrapper — mounts the anchor-scroll hook for the whole app. */
export function AnchorScrollProvider() {
  useAnchorScroll();
  return null;
}
