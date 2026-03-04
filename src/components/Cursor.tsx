"use client";

import { useCursor } from "@/hooks/useCursor";

export function Cursor() {
  const { cursorRef } = useCursor();
  return <div ref={cursorRef} className="cursor" aria-hidden />;
}