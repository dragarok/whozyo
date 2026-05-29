"use client";

import { useEffect, useState } from "react";

const WORDS = [
  "mechanic",
  "doctor",
  "plumber",
  "electrician",
  "tailor",
  "barber",
  "tutor",
  "lawyer",
];

const TYPE_MS = 80;
const DELETE_MS = 40;
const HOLD_MS = 1600;

export function RotatingWord() {
  const [wordIdx, setWordIdx] = useState(0);
  const [chars, setChars] = useState("");
  const [phase, setPhase] = useState<"typing" | "holding" | "deleting">("typing");

  useEffect(() => {
    const word = WORDS[wordIdx];
    let t: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (chars.length < word.length) {
        t = setTimeout(() => setChars(word.slice(0, chars.length + 1)), TYPE_MS);
      } else {
        t = setTimeout(() => setPhase("holding"), 0);
      }
    } else if (phase === "holding") {
      t = setTimeout(() => setPhase("deleting"), HOLD_MS);
    } else {
      if (chars.length > 0) {
        t = setTimeout(() => setChars(chars.slice(0, -1)), DELETE_MS);
      } else {
        setWordIdx((i) => (i + 1) % WORDS.length);
        setPhase("typing");
      }
    }
    return () => clearTimeout(t);
  }, [chars, phase, wordIdx]);

  return (
    <span
      aria-live="polite"
      className="relative inline-block text-[color:var(--color-indigo-soft)]"
    >
      <em className="swash">{chars}</em>
      <span className="caret h-[0.85em]" aria-hidden />
      <span className="text-[color:var(--color-ink)]">?</span>
    </span>
  );
}
