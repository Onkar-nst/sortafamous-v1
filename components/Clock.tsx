"use client";

import { useEffect, useState } from "react";

export function Clock() {
  const [now, setNow] = useState("--:--:--");
  useEffect(() => {
    const tick = () => {
      const d = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));
      setNow(d.toTimeString().slice(0, 8));
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <span className="pill text-ink-soft">
      <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
      Available — Mumbai <span className="opacity-40 mx-1">/</span> IST {now}
    </span>
  );
}
