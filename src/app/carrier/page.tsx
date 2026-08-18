import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Briefcase, ArrowRight, Users, TrendingUp, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers | ANFAAS AL AMAL – Join Our Team",
  description:
    "Explore career opportunities at ANFAAS AL AMAL. Join our team of industrial professionals and help power industrial excellence across the region.",
};

const perks = [
  { icon: TrendingUp, title: "Growth Opportunities", desc: "Fast-track your career with continuous learning and advancement." },
  { icon: Shield, title: "Competitive Benefits", desc: "Comprehensive health coverage, GOSI, and performance bonuses." },
  { icon: Users, title: "Collaborative Culture", desc: "Work alongside passionate experts in a diverse, driven environment." },
];

export default function CarrierPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 bg-zinc-950 overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-red-600 rounded-full blur-[130px]" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-zinc-600 rounded-full blur-[100px]" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-red-600/20 text-red-400 text-xs font-bold uppercase tracking-widest mb-6 border border-red-600/30">
            Careers
          </span>
          <h1 className="text-4xl sm:text-7xl font-black text-white mb-6 leading-tight">
            Build Your Career at <br />
            <span className="text-red-600">ANFAAS AL AMAL</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Join a team that powers industrial excellence across Saudi Arabia and the wider region. We value talent, drive, and ambition.
          </p>
        </div>
      </section>

      {/* Perks */}
      <section className="py-20 px-6 bg-zinc-50 border-b border-zinc-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {perks.map((perk, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl p-8 border border-zinc-100 shadow-sm hover:shadow-xl hover:border-red-100 transition-all duration-500 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center mb-5 group-hover:bg-red-600 transition-colors duration-300">
                  <perk.icon className="w-6 h-6 text-red-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-black text-zinc-900 mb-2 group-hover:text-red-600 transition-colors">{perk.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{perk.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* General Application Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-zinc-950 rounded-3xl p-10 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <div className="absolute top-[-30%] right-[-10%] w-[300px] h-[300px] bg-red-600 rounded-full blur-[80px]" />
            </div>
            <div className="relative z-10">
              <Briefcase className="w-10 h-10 text-red-500 mx-auto mb-4" />
              <h3 className="text-2xl font-black text-white mb-2">Want to join our team?</h3>
              <p className="text-zinc-400 text-sm mb-6 max-w-md mx-auto">
                While we don&apos;t have any specific openings at the moment, we&apos;re always looking for talented individuals. Send us your CV for future consideration.
              </p>
              <a
                href="mailto:info@anfaasarabia.com?subject=General Application"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-red-600 text-white text-sm font-bold shadow-[0_4px_16px_rgba(220,38,38,0.35)] hover:bg-red-700 hover:-translate-y-0.5 transition-all duration-200"
              >
                Send Your CV <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
