"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { Clock } from "./Clock";

function Logo() {
  return (
    <a href="#" className="text-xl md:text-2xl serif tracking-tight">
      Sorta <span className="serif-italic">Famous</span><sup className="text-[0.55em] ml-0.5">®</sup>
    </a>
  );
}

export function Nav() {
  const { scrollYProgress, scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 40));

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      {/* scroll progress bar */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="absolute top-0 inset-x-0 h-0.5 bg-accent origin-left"
      />
      <div
        className={`transition-colors duration-500 ${
          scrolled ? "bg-cream/80 backdrop-blur-md border-b border-border" : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-[1480px] px-6 py-4 grid grid-cols-[1fr_auto_1fr] items-center">
          <Logo />
          <div className="hidden md:block justify-self-center">
            <Clock />
          </div>
          <div className="justify-self-end flex items-center gap-3">
            <nav className="hidden lg:flex items-center gap-6 text-sm text-ink-soft mr-2">
              <a href="#services" className="hover:text-ink transition">Services</a>
              <a href="#about" className="hover:text-ink transition">About</a>
              <a href="#process" className="hover:text-ink transition">How it works</a>
              <a href="#contact" className="hover:text-ink transition">Contact</a>
            </nav>
            <a href="#contact" className="hidden sm:inline-flex items-center gap-2 rounded-full bg-ink text-cream px-5 py-2.5 text-sm hover:opacity-90 transition">
              Get Started
            </a>
            <button aria-label="Menu" className="h-10 w-10 grid place-items-center rounded-full bg-ink text-cream lg:hidden">
              <span className="block w-4 space-y-1">
                <span className="block h-px bg-cream" />
                <span className="block h-px bg-cream" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
