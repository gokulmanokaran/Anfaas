"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "./FadeIn";
import { ArrowRight, Mail, Phone, CheckCircle2, Loader2 } from "lucide-react";
import Link from "next/link";
import emailjs from "@emailjs/browser";

export default function CTASection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsLoading(true);

    // Create a FormData object from the form
    const formData = new FormData(formRef.current);

    // Extract values for template parameters
    const templateParams = {
      from_name: formData.get("from_name"),
      from_email: formData.get("from_email"),
      from_mobile: formData.get("from_mobile"),
      message: formData.get("message"),
      initial: "ANFAAS", // You can customize this
    };

    console.log("Sending Email with params:", templateParams);

    try {
      const SERVICE_ID = "service_ipl1gc9";
      const TEMPLATE_ID = "template_zpx7eis";
      const PUBLIC_KEY = "7EiUdGj-MT0TktAB1";

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );

      console.log("Email sent successfully!");
      setIsSubmitted(true);
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Something went wrong. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <div className="relative rounded-3xl overflow-hidden bg-zinc-900 p-12 md:p-20 shadow-[0_32px_80px_rgba(0,0,0,0.2)]">
            {/* Background decorations */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, #DC2626 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />
              <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-gradient-to-br from-red-600/20 to-red-900/10 blur-3xl" />
              <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-gradient-to-tr from-red-600/10 to-red-900/5 blur-3xl" />
            </div>

            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              {/* Left text */}
              <div className="space-y-6">
                <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-red-500 mb-2">
                  Let&apos;s Work Together
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight">
                  Ready to Power
                  <br />
                  <span className="text-red-500">Your Operations?</span>
                </h2>
                <p className="text-zinc-400 leading-relaxed text-base max-w-sm">
                  Join 500+ global enterprises that trust ANFAAS AL AMAL for their
                  critical industrial operations.
                </p>

                {/* Contact details */}
                <div className="space-y-3 pt-2">
                  <a
                    href="mailto:info@anfaasarabia.com"
                    className="flex items-center gap-3 text-zinc-300 hover:text-red-400 transition-colors duration-200 group"
                  >
                    <Mail className="w-5 h-5 text-red-500" />
                    <span className="text-sm font-medium">info@anfaasarabia.com</span>
                  </a>
                  <a
                    href="tel:+966549186135"
                    className="flex items-center gap-3 text-zinc-300 hover:text-red-400 transition-colors duration-200"
                  >
                    <Phone className="w-5 h-5 text-red-500" />
                    <span className="text-sm font-medium">+966 549186135</span>
                  </a>
                </div>
              </div>

              {/* Right: CTA card */}
              <div className="relative min-h-[400px] flex items-center justify-center">
                <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                    <motion.form
                      key="form"
                      ref={formRef}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      onSubmit={handleSubmit}
                      className="w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 space-y-6"
                    >
                      <div className="space-y-2">
                        <p className="text-white font-semibold text-lg">
                          Enquire Now
                        </p>
                        <p className="text-zinc-400 text-sm leading-relaxed">
                          Tell us about your requirements and we&apos;ll connect
                          you within 24 hours.
                        </p>
                      </div>

                      {/* Form Fields */}
                      <div className="space-y-3">
                        <input
                          required
                          name="from_name"
                          type="text"
                          placeholder="Company Name"
                          className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-red-500 transition-colors duration-200"
                        />
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <input
                            required
                            name="from_email"
                            type="email"
                            placeholder="Your Email"
                            className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-red-500 transition-colors duration-200"
                          />
                          <input
                            required
                            name="from_mobile"
                            type="tel"
                            placeholder="Mobile Number"
                            className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-red-500 transition-colors duration-200"
                          />
                        </div>
                        <textarea
                          required
                          name="message"
                          rows={3}
                          placeholder="Tell us about your requirements..."
                          className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-red-500 transition-colors duration-200 resize-none"
                        />
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        disabled={isLoading}
                        type="submit"
                        className="w-full inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-red-600 text-white font-semibold text-sm shadow-[0_4px_20px_rgba(220,38,38,0.35)] hover:shadow-[0_6px_30px_rgba(220,38,38,0.5)] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {isLoading ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <ArrowRight className="w-4 h-4" />
                          </>
                        )}
                      </motion.button>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-12 text-center space-y-6"
                    >
                      <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", damping: 12, stiffness: 200, delay: 0.2 }}
                        >
                          <CheckCircle2 className="w-10 h-10 text-green-500" />
                        </motion.div>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                        <p className="text-zinc-400 text-base leading-relaxed">
                          Thank you for reaching out. Our team will contact you <span className="text-red-500 font-bold">very soon</span>.
                        </p>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsSubmitted(false)}
                        className="text-sm font-semibold text-zinc-400 hover:text-white transition-colors"
                      >
                        Send another message
                      </motion.button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
