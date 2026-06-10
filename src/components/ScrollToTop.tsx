"use client";

import { useState, useEffect } from "react";
import { ArrowUpIcon } from "./Icons";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setVisible(window.scrollY > 500);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <button
      id="scroll-to-top"
      onClick={scrollToTop}
      aria-label="Kembali ke atas"
      className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 cursor-pointer hover:scale-110 active:scale-95"
      style={{
        backgroundColor: "var(--accent-neon)",
        color: "#12261e",
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
        transform: visible ? "translateY(0)" : "translateY(16px)",
      }}
    >
      <ArrowUpIcon size={20} strokeWidth={2.5} />
    </button>
  );
}
