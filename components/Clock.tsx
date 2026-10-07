"use client";

import { useEffect, useState } from "react";

/** Live Mumbai time. `dark` renders it as a plain eyebrow line for ink panels. */
export function Clock({ dark = false }: { dark?: boolean }) {
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
  if (dark) {
    return (
      <div className="eyebrow flex items-center gap-2 text-cream/60">
        <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
        Available for new projects · Mumbai
        <span className="opacity-40 mx-1">/</span>
        <span className="tabular-nums">IST {now}</span>
      </div>
    );
  }
  return (
    <span className="pill text-ink-soft">
      <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
      Available · Mumbai <span className="opacity-40 mx-1">/</span> IST {now}
    </span>
  );
}
