/* eslint-disable react/no-array-index-key */
"use client";

import { motion, useAnimationFrame } from "framer-motion";
import { useMemo, useRef, useState } from "react";

type Node = {
  id: number;
  label: string;
  x: number;
  y: number;
  size: number;
  role: "source" | "hub" | "signal";
};

const nodeLabels = [
  "Policy Matrix",
  "Research Vault",
  "CRM Streams",
  "Pricing Sheets",
  "Ops Wiki",
  "Market Intel",
  "Ticket Threads",
  "Product Specs",
  "Call Notes",
  "Deal Room",
  "Forecast Ledger",
  "Regulatory Hub"
];

const flowColors = [
  "rgba(94, 234, 212, 0.6)",
  "rgba(59, 130, 246, 0.6)",
  "rgba(14, 165, 233, 0.6)",
  "rgba(99, 102, 241, 0.6)"
];

type Particle = {
  angle: number;
  radius: number;
  speed: number;
  size: number;
};

export function IntelligenceCanvas() {
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const gradientRef = useRef<HTMLDivElement>(null);

  const nodes = useMemo<Node[]>(() => {
    return Array.from({ length: nodeLabels.length }).map((_, index) => {
      const angle = (index / nodeLabels.length) * Math.PI * 2;
      const radius = index % 3 === 0 ? 130 : index % 3 === 1 ? 190 : 230;
      return {
        id: index,
        label: nodeLabels[index],
        x: 240 + Math.cos(angle) * radius + (Math.random() - 0.5) * 20,
        y: 240 + Math.sin(angle) * (radius * 0.55) + (Math.random() - 0.5) * 30,
        size: index % 4 === 0 ? 18 : 12,
        role: index % 3 === 0 ? "hub" : index % 2 === 0 ? "source" : "signal"
      };
    });
  }, []);

  const particles = useMemo<Particle[]>(() => {
    return Array.from({ length: 80 }).map(() => ({
      angle: Math.random() * Math.PI * 2,
      radius: 60 + Math.random() * 220,
      speed: 0.003 + Math.random() * 0.005,
      size: 2 + Math.random() * 3
    }));
  }, []);

  useAnimationFrame((time) => {
    if (!gradientRef.current) return;
    const hue = (time / 80) % 360;
    gradientRef.current.style.background = `radial-gradient(circle at ${pointer.x * 100}%, ${
      pointer.y * 100
    }%, hsla(${hue}, 80%, 60%, 0.55), transparent 65%)`;
  });

  const center = { x: 240, y: 240 };

  return (
    <div
      className="relative flex h-[480px] w-[480px] items-center justify-center overflow-hidden rounded-[26px] bg-[#020711]/95"
      onPointerMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        setPointer({
          x: (event.clientX - rect.left) / rect.width,
          y: (event.clientY - rect.top) / rect.height
        });
      }}
      onPointerLeave={() => setPointer({ x: 0.5, y: 0.5 })}
    >
      <div className="absolute inset-0 opacity-40 mix-blend-screen">
        <svg width="100%" height="100%" viewBox="0 0 480 480">
          {nodes.map((node, nodeIndex) => {
            return nodes
              .slice(nodeIndex + 1)
              .filter((target) => Math.abs(target.id - node.id) % 3 !== 0)
              .map((target, index) => {
                const controlX = (node.x + target.x) / 2 + (Math.random() - 0.5) * 40;
                const controlY = (node.y + target.y) / 2 + (Math.random() - 0.5) * 40;
                const color = flowColors[(nodeIndex + index) % flowColors.length];
                return (
                  <path
                    key={`${node.id}-${target.id}`}
                    d={`M ${node.x},${node.y} Q ${controlX},${controlY} ${target.x},${target.y}`}
                    stroke={color}
                    strokeWidth={Math.random() * 1.5 + 0.6}
                    strokeLinecap="round"
                    strokeOpacity={0.35}
                    fill="none"
                  />
                );
              });
          })}
        </svg>
      </div>
      <motion.div
        ref={gradientRef}
        className="pointer-events-none absolute inset-0 rounded-[26px]"
        initial={{ opacity: 0.4 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6, repeat: Infinity, repeatType: "reverse" }}
      />
      <div className="absolute inset-6 rounded-[20px] border border-white/5 bg-black/40 backdrop-blur-3xl" />
      {particles.map((particle, index) => (
        <OrbitingParticle key={`particle-${index}`} particle={particle} center={center} />
      ))}
      <div className="relative z-20 flex h-56 w-56 flex-col items-center justify-center rounded-[28px] border border-white/20 bg-gradient-to-br from-blue-600/20 via-slate-900/90 to-emerald-500/20 text-center shadow-[0_0_60px_rgba(59,130,246,0.25)] backdrop-blur-xl">
        <span className="text-xs font-semibold uppercase tracking-[0.45em] text-sky-200">Neural Orchestration</span>
        <h3 className="mt-4 w-40 text-lg font-semibold text-white">Contextual Workflow Genome</h3>
        <p className="mt-3 px-6 text-xs text-slate-200/70">
          Live synthesis of structured + unstructured knowledge for agent-ready execution.
        </p>
        <div className="mt-5 flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-[0.7rem] font-medium text-sky-200">
          <span className="flex h-2 w-2 rounded-full bg-emerald-300" />
          Signals flowing · <span className="font-mono text-[0.7rem] text-emerald-200">12,408 / min</span>
        </div>
      </div>
      {nodes.map((node) => (
        <NodeBadge key={node.id} node={node} center={center} pointer={pointer} />
      ))}
      <motion.div
        className="absolute bottom-6 right-6 z-30 flex items-center gap-3 rounded-2xl border border-emerald-300/30 bg-emerald-500/10 px-4 py-3 text-left text-xs font-medium text-emerald-200 shadow-glow-sm backdrop-blur"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-400/30 text-emerald-100">
          ⚡️
        </span>
        <div>
          <p className="text-[0.65rem] uppercase tracking-[0.3em] text-emerald-100/80">Agent Actions</p>
          <p className="text-emerald-50">
            99.2% workflow accuracy <span className="text-emerald-200/80">|</span> 18m to production
          </p>
        </div>
      </motion.div>
    </div>
  );
}

function NodeBadge({
  node,
  center,
  pointer
}: {
  node: Node;
  center: { x: number; y: number };
  pointer: { x: number; y: number };
}) {
  const distanceX = node.x - center.x;
  const distanceY = node.y - center.y;
  const transformX = distanceX * 0.04 * (pointer.x - 0.5);
  const transformY = distanceY * 0.04 * (pointer.y - 0.5);

  return (
    <motion.div
      className="absolute z-30 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
      style={{ left: node.x, top: node.y }}
      initial={{ opacity: 0, scale: 0.8, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.7, delay: node.id * 0.03, ease: "easeOut" }}
    >
      <motion.div
        className="flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.7rem] font-medium text-slate-200 shadow-lg backdrop-blur"
        animate={{
          x: transformX,
          y: transformY
        }}
        transition={{ type: "spring", stiffness: 40, damping: 12 }}
      >
        <span
          className={`mr-2 h-2 w-2 rounded-full ${
            node.role === "hub" ? "bg-blue-300" : node.role === "signal" ? "bg-sky-300" : "bg-emerald-300"
          }`}
        />
        {node.label}
      </motion.div>
      <motion.div
        className="mt-2 h-2 w-2 rounded-full bg-white/50 shadow-[0_0_20px_rgba(125,211,252,0.5)]"
        animate={{ opacity: [0.4, 1, 0.4], scale: [0.8, 1.2, 0.8] }}
        transition={{ duration: 2 + node.id * 0.05, repeat: Infinity }}
      />
    </motion.div>
  );
}

function OrbitingParticle({ particle, center }: { particle: Particle; center: { x: number; y: number } }) {
  const ref = useRef<HTMLDivElement>(null);

  useAnimationFrame(() => {
    if (!ref.current) return;
    particle.angle += particle.speed;
    const x = center.x + Math.cos(particle.angle) * particle.radius;
    const y = center.y + Math.sin(particle.angle) * particle.radius * 0.62;
    ref.current.style.transform = `translate3d(${x - particle.size / 2}px, ${y - particle.size / 2}px, 0)`;
  });

  return (
    <div
      ref={ref}
      className="pointer-events-none absolute z-10 rounded-full bg-white"
      style={{
        width: particle.size,
        height: particle.size,
        boxShadow: "0 0 18px rgba(94, 234, 212, 0.48)"
      }}
    />
  );
}
