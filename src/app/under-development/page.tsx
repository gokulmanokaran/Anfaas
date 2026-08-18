"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, Code2, Cpu, Wrench, Zap } from "lucide-react";

/* ── Floating particle ───────────────────────────────────── */
function Particle({ delay, x, size, duration }: { delay: number; x: number; size: number; duration: number }) {
  return (
    <motion.div
      className="absolute rounded-full bg-red-500/20"
      style={{ width: size, height: size, left: `${x}%`, bottom: "-20px" }}
      animate={{ y: [0, -700], opacity: [0, 0.6, 0] }}
      transition={{ duration, delay, repeat: Infinity, ease: "linear" }}
    />
  );
}

/* ── Orbiting icon ───────────────────────────────────────── */
function OrbitIcon({
  icon: Icon,
  radius,
  duration,
  startAngle,
  color,
}: {
  icon: React.ElementType;
  radius: number;
  duration: number;
  startAngle: number;
  color: string;
}) {
  return (
    <motion.div
      className="absolute flex items-center justify-center rounded-2xl w-12 h-12 shadow-xl"
      style={{
        background: color,
        top: "50%",
        left: "50%",
        marginTop: -24,
        marginLeft: -24,
      }}
      animate={{
        x: Array.from({ length: 61 }, (_, i) =>
          Math.cos(((startAngle + i * 6) * Math.PI) / 180) * radius
        ),
        y: Array.from({ length: 61 }, (_, i) =>
          Math.sin(((startAngle + i * 6) * Math.PI) / 180) * radius
        ),
      }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
    >
      <Icon className="w-5 h-5 text-white" />
    </motion.div>
  );
}

/* ── Progress bar ────────────────────────────────────────── */
function ProgressBar() {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => setWidth(72), 600);
    return () => clearTimeout(t);
  }, []);
  return (
    <div className="w-full max-w-xs mx-auto bg-zinc-800 rounded-full h-1.5 overflow-hidden">
      <motion.div
        className="h-full rounded-full bg-gradient-to-r from-red-600 to-orange-400"
        initial={{ width: 0 }}
        animate={{ width: `${width}%` }}
        transition={{ duration: 1.8, ease: "easeOut", delay: 0.8 }}
      />
    </div>
  );
}

export default function UnderDevelopmentPage() {
  const [mounted, setMounted] = useState(false);
  const [particles, setParticles] = useState<{ delay: number; x: number; size: number; duration: number }[]>([]);

  useEffect(() => {
    setMounted(true);
    const newParticles = Array.from({ length: 18 }, (_, i) => ({
      delay: i * 0.35,
      x: Math.random() * 100,
      size: 6 + Math.random() * 14,
      duration: 6 + Math.random() * 4,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <main className="min-h-screen bg-zinc-950 overflow-x-hidden flex flex-col">
      <Navbar />

      {/* Particle background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {mounted && particles.map((p, i) => (
          <Particle key={i} {...p} />
        ))}
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Radial glow center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-red-600/5 blur-3xl" />
      </div>

      <div className="relative z-10 flex-1 flex items-center justify-center px-6 py-24">
        <div className="text-center max-w-2xl mx-auto">

          {/* Orbit animation */}
          <div className="relative w-40 h-40 mx-auto mb-12">
            {/* Center hub */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute inset-4 rounded-full border-2 border-dashed border-zinc-700"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              className="absolute inset-8 rounded-full border border-red-900/40"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{ scale: [1, 1.12, 1] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center shadow-[0_0_40px_rgba(220,38,38,0.4)]"
              >
                <Wrench className="w-7 h-7 text-white" />
              </motion.div>
            </div>

            {/* Orbiting icons */}
            <OrbitIcon icon={Code2} radius={58} duration={4} startAngle={0}   color="#1e293b" />
            <OrbitIcon icon={Cpu}   radius={58} duration={4} startAngle={120} color="#1e293b" />
            <OrbitIcon icon={Zap}   radius={58} duration={4} startAngle={240} color="#7c3aed" />
          </div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600/10 border border-red-600/20 mb-6"
          >
            <motion.span
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.4, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-red-500"
            />
            <span className="text-red-400 text-xs font-bold uppercase tracking-widest">
              Under Development
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.1] mb-5"
          >
            We&apos;re{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
              Building
            </span>{" "}
            This
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-zinc-400 text-base sm:text-lg leading-relaxed mb-10 max-w-lg mx-auto"
          >
            This page is currently under development. Our team is working hard to bring it to life.
            Come back soon — it&apos;ll be worth the wait.
          </motion.p>

          {/* Progress */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mb-3"
          >
            <ProgressBar />
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="text-zinc-600 text-xs font-medium mb-10"
          >
            72% complete
          </motion.p>

          {/* Action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl bg-white text-zinc-900 font-bold text-sm hover:bg-zinc-100 transition-all duration-300 hover:-translate-y-0.5 shadow-xl"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl bg-red-600 text-white font-bold text-sm hover:bg-red-700 transition-all duration-300 hover:-translate-y-0.5 shadow-[0_8px_24px_rgba(220,38,38,0.35)]"
            >
              Contact Us
            </Link>
          </motion.div>

          {/* Animated dots */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex items-center justify-center gap-1.5 mt-14"
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 1.2, delay: i * 0.2, repeat: Infinity, ease: "easeInOut" }}
                className="w-2 h-2 rounded-full bg-zinc-700"
              />
            ))}
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
