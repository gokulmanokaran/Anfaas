"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col pt-20">
      <Navbar />

      {/* ── Map & Info Card Section ── */}
      <section className="relative h-[600px] w-full overflow-hidden bg-zinc-100 border-b border-zinc-200 mt-10 max-w-7xl mx-auto rounded-[3rem] shadow-2xl">
        {/* Actual Location Map */}
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3575.567087641215!2d50.2089035114784!3d26.30800441724128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49e8597fde50d3%3A0xe12c7d4be72c0898!2sAL%20AlShaikh%20Tower!5e0!3m2!1sen!2ssa!4v1714559800000!5m2!1sen!2ssa" 
          className="absolute inset-0 w-full h-full grayscale-[0.1] contrast-[1.05]"
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        />

        {/* Premium Floating Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute left-6 bottom-6 md:left-12 md:bottom-12 w-[340px] bg-white/90 backdrop-blur-xl rounded-[2.5rem] p-10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] border border-white/40 z-10"
        >
          <div className="space-y-10">
            {/* Headquarters */}
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-2xl bg-red-600 flex items-center justify-center shrink-0 shadow-lg shadow-red-200">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-black text-zinc-900 leading-tight">Headquarters</h3>
                <div className="mt-2 space-y-1">
                  <p className="text-sm font-bold text-zinc-500">ANFAAS AL AMAL</p>
                  <p className="text-sm text-zinc-400 leading-relaxed">8656+5HX, Al Bandariyah</p>
                  <p className="text-sm text-zinc-400 leading-relaxed">Al Khobar 34424, KSA</p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-2xl bg-zinc-900 flex items-center justify-center shrink-0 shadow-lg shadow-zinc-200">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-black text-zinc-900 leading-tight">Business Hours</h3>
                <div className="mt-2 space-y-1">
                  <p className="text-sm text-zinc-500 font-bold">Sun - Thu</p>
                  <p className="text-sm text-zinc-400">8:00 AM - 6:00 PM</p>
                  <p className="text-xs text-red-500 font-bold mt-1 uppercase tracking-wider">Fri - Sat: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Corner Accent */}
          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-red-600/10 to-transparent rounded-tr-[2.5rem] pointer-events-none" />
        </motion.div>
      </section>

      {/* Render the exact same dark design form */}
      <div className="flex-1 -mt-10">
        <CTASection />
      </div>

      <Footer />
    </main>
  );
}
