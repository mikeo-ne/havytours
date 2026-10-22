"use client";

import { useCallback, useRef, useSyncExternalStore } from "react";

/**
 * Tracks whether the window has scrolled past `threshold`.
 *
 * Implemented with `useSyncExternalStore` so the value is read from the DOM at
 * subscribe/snapshot time instead of being pushed into state from inside an
 * effect — which avoids a cascade of renders on mount.
 */
export function useScrolled(threshold = 28) {
  const subscribe = useCallback((onChange: () => void) => {
    window.addEventListener("scroll", onChange, { passive: true });
    return () => window.removeEventListener("scroll", onChange);
  }, []);

  const getSnapshot = useCallback(() => window.scrollY > threshold, [threshold]);
  const getServerSnapshot = useCallback(() => false, []);

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

const SUPPORTS_IO = typeof IntersectionObserver !== "undefined";

/**
 * Reveals an element once it scrolls into view. Returns a ref to attach and
 * whether the element has been seen. Elements stay visible once revealed.
 */
export function useInView<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const seen = useRef(false);

  const subscribe = useCallback((onChange: () => void) => {
    const node = ref.current;
    if (!node || !SUPPORTS_IO) return () => {};

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            seen.current = true;
            onChange();
            observer.disconnect();
            return;
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // If IntersectionObserver is unavailable, show content immediately.
  const getSnapshot = useCallback(() => !SUPPORTS_IO || seen.current, []);
  const getServerSnapshot = useCallback(() => false, []);

  const visible = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return [ref, visible] as const;
}
