"use client";

import type { CSSProperties } from "react";

/** point + tangent angle on a quadratic bezier */
function quad(t: number, p0: number[], p1: number[], p2: number[]) {
  const mt = 1 - t;
  const x = mt * mt * p0[0] + 2 * mt * t * p1[0] + t * t * p2[0];
  const y = mt * mt * p0[1] + 2 * mt * t * p1[1] + t * t * p2[1];
  const tx = 2 * mt * (p1[0] - p0[0]) + 2 * t * (p2[0] - p1[0]);
  const ty = 2 * mt * (p1[1] - p0[1]) + 2 * t * (p2[1] - p1[1]);
  return { x, y, ang: (Math.atan2(ty, tx) * 180) / Math.PI };
}

const LEAF = "M0 0 C 12 -10 32 -10 42 0 C 32 10 12 10 0 0 Z";

/**
 * A hand-generated laurel / olive branch. Leaves are placed along a bezier
 * stem so it reads as a real botanical sprig. Sage green so it stays legible
 * on both the cream and the black background of the manifesto.
 */
export function BotanicalBranch({
  className = "",
  style,
}: {
  className?: string;
  style?: CSSProperties;
}) {
  const p0 = [116, 340];
  const p1 = [14, 176];
  const p2 = [98, 12];
  const N = 8;
  const nodes = Array.from({ length: N }, (_, i) => quad((i + 1) / (N + 1), p0, p1, p2));

  return (
    <svg
      viewBox="0 0 140 350"
      className={className}
      style={style}
      fill="none"
      aria-hidden="true"
    >
      {/* stem */}
      <path
        d={`M${p0[0]} ${p0[1]} Q ${p1[0]} ${p1[1]} ${p2[0]} ${p2[1]}`}
        stroke="#6f8054"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      {nodes.map((n, i) => {
        const grow = 0.5 + 0.6 * (i / (N - 1)); // smaller toward the base
        const fill = i % 2 === 0 ? "#87996f" : "#75885c";
        return (
          <g key={i}>
            {[-54, 54].map((off, j) => (
              <g
                key={j}
                transform={`translate(${n.x} ${n.y}) rotate(${n.ang + off}) scale(${grow})`}
              >
                <path d={LEAF} fill={fill} fillOpacity="0.95" />
                <path d="M4 0 L 38 0" stroke="#586a44" strokeWidth="1" strokeOpacity="0.7" />
              </g>
            ))}
            {/* a couple of small olives */}
            {i % 3 === 1 && (
              <circle cx={n.x + 4} cy={n.y} r={3.4} fill="#9aa982" />
            )}
          </g>
        );
      })}
      {/* tip leaf */}
      <g transform={`translate(${p2[0]} ${p2[1]}) rotate(${nodes[N - 1].ang}) scale(0.7)`}>
        <path d={LEAF} fill="#8ea075" />
      </g>
    </svg>
  );
}
