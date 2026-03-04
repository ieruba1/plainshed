"use client";

import { useState } from "react";

const MESSAGES = [
  "隠しメッセージ\nテスト",
  "これは不要",
];

export function EasterEgg() {
  const [clicks, setClicks] = useState(0);
  const [show, setShow] = useState(false);

  const handleClick = () => {
    const next = clicks + 1;
    setClicks(next);
    setShow(true);
    setTimeout(() => setShow(false), 3500);
  };

  const message = clicks >= 3 ? MESSAGES[1] : MESSAGES[0];

  return (
    <>
      <button
        className="easter-egg"
        onClick={handleClick}
        aria-label="Easter egg"
      >
        ◈
      </button>
      <div className={`egg-message ${show ? "show" : ""}`}>
        {message.split("\n").map((line, i) => (
          <span key={i}>
            {line}
            {i < message.split("\n").length - 1 && <br />}
          </span>
        ))}
      </div>
    </>
  );
}