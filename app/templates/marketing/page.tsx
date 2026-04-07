"use client"

import { useEffect, useState } from "react"
import Header from "@/components/header"
import FloatingParticles from "@/components/floating-particles"
import Footer from "@/components/footer"
import { Target, CheckCircle, ArrowLeft, Mail, Calendar, BarChart3, Download, Eye } from "lucide-react"
import Link from "next/link"

export default function MarketingTemplatesPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const templates = [
    {
      title: "Email Campaign Template",
      description: "Professional email marketing campaign template with responsive design",
      category: "Email Marketing",
      downloads: "2.2K",
      rating: 4.9,
      featured: true
    },
    {
      title: "Social Media Content Calendar",
      description: "Monthly social media content planning and scheduling template",
      category: "Social Media",
      downloads: "1.9K",
      rating: 4.8,
      featured: true
    },
    {
      title: "Marketing Plan Template",
      description: "Strategic marketing plan template with goals and KPIs",
      category: "Strategy",
      downloads: "1.4K",
      rating: 4.7,
      featured: false
    },
    {
      title: "Landing Page Template",
      description: "High-converting landing page template for campaigns",
      category: "Web Design",
      downloads: "1.6K",
      rating: 4.8,
      featured: false
    },
    {
      title: "Marketing Analytics Dashboard",
      description: "Comprehensive marketing metrics and analytics template",
      category: "Analytics",
      downloads: "1.1K",
      rating: 4.6,
      featured: false
    },
    {
      title: "Press Release Template",
      description: "Professional press release template for announcements",
      category: "PR",
      downloads: "750",
      rating: 4.5,
      featured: false
    }
  ]

  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <Header />
      <FloatingParticles />
      
      <div className="relative pt-32 pb-20 px-4 sm:px-6 md:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-pink-900/20 via-rose-900/10 to-transparent"></div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <Link href="/templates" className="inline-flex items-center gap-2 text-pink-500 hover:text-pink-400 transition-colors mb-8 font-montserrat">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Templates</span>
          </Link>

          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-500 mb-6 shadow-xl">
              <Target className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 font-nos">
              Marketing Templates
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto font-montserrat leading-relaxed">
              Professional marketing templates for campaigns, content, social media, and analytics
            </p>
          </div>

          <div className="bg-black/40 backdrop-blur-sm border border-pink-500/30 rounded-2xl p-10 md:p-12 mb-16">
            <h2 className="text-2xl font-bold text-white mb-6 font-nos">Overview</h2>
            <p className="text-white/80 text-lg leading-relaxed mb-4 font-montserrat">
              Our Marketing Templates collection provides professionally designed templates for all your marketing needs. From email campaigns to social media content, these templates help you create compelling marketing materials efficiently and consistently.
            </p>
            <p className="text-white/70 leading-relaxed font-montserrat">
              All templates are fully customizable, optimized for MENA market preferences, and integrated with Support Plus Marketing services.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-8 font-nos">Available Templates</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {templates.map((template, idx) => (
                <div
                  key={idx}
                  className={`group bg-black/40 backdrop-blur-sm border ${template.featured ? 'border-rose-500/50' : 'border-white/10'} rounded-xl p-6 hover:border-rose-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(244,63,94,0.3)]`}
                >
                  {template.featured && (
                    <div className="mb-3">
                      <span className="px-2 py-1 rounded bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-montserrat">
                        Featured
                      </span>
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-white mb-2 font-montserrat group-hover:text-pink-400 transition-colors">
                    {template.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-4 font-montserrat">{template.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2 py-1 rounded bg-white/5 text-white/70 text-xs font-montserrat">
                      {template.category}
                    </span>
                    <div className="flex items-center gap-3 text-white/60 text-sm font-montserrat">
                      <div className="flex items-center gap-1">
                        <Download className="w-3 h-3" />
                        <span>{template.downloads}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-yellow-500">★</span>
                        <span>{template.rating}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="flex-1 px-4 py-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold font-montserrat text-sm">
                      Download
                    </button>
                    <button className="px-4 py-2 border border-white/10 text-white rounded-lg hover:bg-white/10 transition-all duration-300 font-montserrat text-sm">
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}


