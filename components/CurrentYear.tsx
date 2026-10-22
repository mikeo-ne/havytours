"use client";

import { useEffect, useState } from "react";

/** Updated when the site is rebuilt — bump this if the copyright looks stale. */
const FALLBACK_YEAR = 2026;

/**
 * Renders the current year on the client so pages stay fully prerenderable.
 * `new Date()` is only evaluated after mount.
 */
export default function CurrentYear() {
  const [year, setYear] = useState(FALLBACK_YEAR);

  // The year can only be known on the client; the server renders the
  // build-time fallback so the page stays fully prerenderable.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setYear(new Date().getFullYear());
  }, []);

  return <>{year}</>;
}
