import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Calendar, ChevronRight } from "lucide-react";
import Link from "next/link";

const newsItems = [
  {
    title: "ANFAAS AL AMAL Expands Operations to New Global Markets",
    date: "October 15, 2026",
    category: "Company News",
    excerpt: "We are thrilled to announce the opening of our new distribution centers to provide faster delivery times for our industrial partners globally.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Next-Gen CNC Lathe Machines Now Available",
    date: "September 28, 2026",
    category: "Product Launch",
    excerpt: "Discover our newly updated line of CNC machinery featuring advanced integration for unprecedented precision and automated workflow capabilities.",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Sustainability in Industrial Lubricants: A 2026 Outlook",
    date: "August 10, 2026",
    category: "Industry Insights",
    excerpt: "Learn how the latest advancements in eco-friendly industrial lubricants are helping factories reduce their carbon footprint without sacrificing performance.",
    image: "https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Traction Battery Maintenance Best Practices",
    date: "July 05, 2026",
    category: "Technical Guide",
    excerpt: "Maximize the lifespan of your industrial batteries with our comprehensive maintenance guide designed by our top technical engineering experts.",
    image: "/hero_battery.png",
  },
];

export default function NewsPage() {
  return (
    <main className="overflow-x-hidden pt-20">
      <Navbar />
      
      {/* Page Header */}
      <div className="bg-zinc-50 border-b border-zinc-100 py-16 lg:py-24 relative overflow-hidden">
        {/* Abstract Background Decoration */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at top right, #dc2626 0%, transparent 60%)' }} />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-sm font-semibold text-zinc-500 mb-6">
            <Link prefetch={true} href="/" className="hover:text-red-600 transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-red-600">News & Insights</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-zinc-900 tracking-tight mb-6">
            Latest <span className="text-red-600">News</span>
          </h1>
          <p className="text-lg text-zinc-600 max-w-2xl leading-relaxed">
            Stay updated with the latest industry insights, product announcements, and corporate news from ANFAAS AL AMAL.
          </p>
        </div>
      </div>

      {/* News Grid */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-x-8 gap-y-12">
            {newsItems.map((news, idx) => (
              <Link prefetch={true} key={idx} href="/under-development" className="group cursor-pointer flex flex-col h-full bg-white border border-zinc-100 rounded-3xl overflow-hidden hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-1">
                {/* Image Wrapper */}
                <div className="relative h-64 sm:h-80 overflow-hidden bg-zinc-100">
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-4 py-1.5 bg-white/90 backdrop-blur-md text-xs font-bold uppercase tracking-wider text-red-600 rounded-full shadow-sm">
                      {news.category}
                    </span>
                  </div>
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                {/* Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-zinc-400 text-sm font-medium mb-4">
                    <Calendar className="w-4 h-4" />
                    <span>{news.date}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-zinc-900 leading-snug mb-4 group-hover:text-red-600 transition-colors duration-300 line-clamp-2">
                    {news.title}
                  </h3>
                  
                  <p className="text-zinc-500 leading-relaxed mb-8 flex-grow line-clamp-3">
                    {news.excerpt}
                  </p>
                  
                  <div className="mt-auto">
                    <span className="inline-flex items-center gap-2 text-sm font-bold text-zinc-900 group-hover:text-red-600 transition-colors duration-300">
                      Read Full Article
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Load More Button */}
          <div className="mt-16 text-center">
            <Link prefetch={true} href="/under-development" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-zinc-50 text-zinc-900 font-bold text-sm border border-zinc-200 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-300">
              Load More News
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
