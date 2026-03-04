"use client";

import { useEffect, useRef, useCallback } from "react";

export function useCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  const setHover = useCallback((on: boolean) => {
    cursorRef.current?.classList.toggle("hover", on);
  }, []);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const onMove = (e: MouseEvent) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    };
    const onDown = () => cursor.classList.add("click");
    const onUp = () => cursor.classList.remove("click");

    const onClickSplash = (e: MouseEvent) => {
      const dot = document.createElement("div");
      dot.className = "ink-dot";
      dot.style.left = e.clientX + "px";
      dot.style.top = e.clientY + "px";
      document.body.appendChild(dot);
      setTimeout(() => dot.remove(), 700);
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("mouseup", onUp);
    document.addEventListener("click", onClickSplash);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("mouseup", onUp);
      document.removeEventListener("click", onClickSplash);
    };
  }, []);

  return { cursorRef, setHover };
}