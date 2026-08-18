"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, Search, Home, HelpCircle } from "lucide-react";

/* ── Floating particle ───────────────────────────────────── */
function Particle({ delay, x, size, duration }: { delay: number; x: number; size: number; duration: number }) {
  return (
    <motion.div
      className="absolute rounded-full bg-zinc-500/20"
      style={{ width: size, height: size, left: `${x}%`, bottom: "-20px" }}
      animate={{ y: [0, -700], opacity: [0, 0.4, 0] }}
      transition={{ duration, delay, repeat: Infinity, ease: "linear" }}
    />
  );
}

export default function NotFound() {
  const [mounted, setMounted] = useState(false);
  const [particles, setParticles] = useState<{ delay: number; x: number; size: number; duration: number }[]>([]);

  useEffect(() => {
    setMounted(true);
    const newParticles = Array.from({ length: 15 }, (_, i) => ({
      delay: i * 0.4,
      x: Math.random() * 100,
      size: 4 + Math.random() * 10,
      duration: 7 + Math.random() * 5,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <main className="min-h-screen bg-white overflow-x-hidden flex flex-col">
      <Navbar />

      {/* Background decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {mounted && particles.map((p, i) => (
          <Particle key={i} {...p} />
        ))}
        <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] rounded-full bg-zinc-50 blur-3xl opacity-50" />
        <div className="absolute bottom-1/4 -left-20 w-[500px] h-[500px] rounded-full bg-red-50 blur-3xl opacity-30" />
      </div>

      <div className="relative z-10 flex-1 flex items-center justify-center px-6 py-32">
        <div className="text-center max-w-2xl mx-auto">
          {/* Big 404 with animation */}
          <div className="relative mb-12">
            <motion.h1
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-[12rem] sm:text-[16rem] font-black text-zinc-100 leading-none select-none"
            >
              404
            </motion.h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col items-center"
              >
                <div className="w-20 h-20 rounded-3xl bg-zinc-900 flex items-center justify-center shadow-2xl mb-6">
                  <Search className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 tracking-tight">
                  Page <span className="text-red-600">Not Found</span>
                </h2>
              </motion.div>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-zinc-500 text-base sm:text-lg leading-relaxed mb-10 max-w-lg mx-auto"
          >
            The page you are looking for might have been removed, had its name changed,
            or is temporarily unavailable.
          </motion.p>

          {/* Action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-zinc-900 text-white font-bold text-sm hover:bg-zinc-800 transition-all duration-300 hover:-translate-y-0.5 shadow-xl"
            >
              <Home className="w-4 h-4" />
              Return Home
            </Link>
            <Link
              href="/under-development"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl border-2 border-zinc-100 bg-white text-zinc-700 font-bold text-sm hover:border-zinc-900 hover:text-zinc-900 transition-all duration-300 hover:-translate-y-0.5"
            >
              <HelpCircle className="w-4 h-4" />
              Help Center
            </Link>
          </motion.div>

          {/* Back link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-12"
          >
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 text-sm font-bold text-zinc-400 hover:text-red-600 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Go Back
            </button>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
