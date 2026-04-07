"use client"

import { useEffect, useState } from "react"
import Header from "@/components/header"
import FloatingParticles from "@/components/floating-particles"
import Footer from "@/components/footer"
import { Calendar } from "lucide-react"
import Link from "next/link"

export default function NewsPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const newsItems = [
    { 
      slug: "support-plus-launches-new-ai-mena-model",
      date: "2025-01-15", 
      title: "Support Plus Launches New AI MENA Model", 
      category: "Product" 
    },
    { 
      slug: "partnership-with-leading-tech-companies",
      date: "2025-01-10", 
      title: "Partnership with Leading Tech Companies", 
      category: "Partnerships" 
    },
    { 
      slug: "expanding-operations-across-mena-region",
      date: "2025-01-05", 
      title: "Expanding Operations Across MENA Region", 
      category: "Company" 
    },
    { 
      slug: "annual-report-highlights-growth",
      date: "2024-12-28", 
      title: "Annual Report Highlights Growth", 
      category: "Company" 
    },
    { 
      slug: "new-features-in-ai-modules-platform",
      date: "2024-12-20", 
      title: "New Features in AI Modules Platform", 
      category: "Product" 
    },
    { 
      slug: "client-success-stories-2024-recap",
      date: "2024-12-15", 
      title: "Client Success Stories: 2024 Recap", 
      category: "Success" 
    },
  ]

  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <Header />
      <FloatingParticles />
      
      <div className="relative pt-32 pb-20 px-4 sm:px-6 md:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 via-transparent to-purple-900/10"></div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <span className="px-4 py-2 rounded-full border border-blue-500/50 bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-white text-sm font-montserrat shadow-[0_0_16px_rgba(59,130,246,0.5)]">
                Latest Updates
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 font-nos">
              <span className="inline-block relative">
                News
                <span className="absolute -bottom-3 left-0 w-full h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 opacity-80"></span>
              </span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto font-montserrat leading-relaxed">
              Stay updated with the latest news, announcements, and developments
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsItems.map((item, index) => (
              <Link key={index} href={`/news/${item.slug}`}>
                <article className="group bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] cursor-pointer h-full">
                  <div className="flex items-center gap-2 text-xs text-white/50 mb-3 font-montserrat">
                    <Calendar className="w-4 h-4" />
                    <span>{item.date}</span>
                    <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-400 text-xs">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 font-montserrat group-hover:text-neon-blue transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed font-montserrat mb-4">
                    Read the full story and discover more about our latest developments and achievements.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-neon-blue font-montserrat">
                    <span>Read more</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
