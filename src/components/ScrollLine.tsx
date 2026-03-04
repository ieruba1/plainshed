"use client";

import { useEffect, useState } from "react";

export function ScrollLine() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const pct =
        (window.scrollY /
          (document.body.scrollHeight - window.innerHeight)) *
        100;
      setWidth(pct);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="scroll-line"
      style={{ width: `${width}%` }}
      aria-hidden
    />
  );
}