"use client"

import { useEffect, useState } from "react"
import Header from "@/components/header"
import FloatingParticles from "@/components/floating-particles"
import Footer from "@/components/footer"
import { Calendar, ArrowLeft, Tag } from "lucide-react"
import Link from "next/link"

export default function NewsDetailPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const article = {
    title: "Support Plus Launches New AI MENA Model",
    date: "2025-01-15",
    category: "Product",
    author: "Support Plus Team",
    tags: ["AI", "MENA", "Innovation", "Technology"],
    content: [
      "Support Plus has launched the AI MENA Model, a regional model designed for organizations that need Arabic and English support in real business workflows.",
      "The release focuses on practical use cases such as document handling, customer communications, and policy-aware assistance for internal teams.",
      "In this first phase, clients can use the model through existing Support Plus modules without changing their current process structure.",
      "The product team built the model with regional terminology libraries and implementation feedback collected from pilot projects across different sectors.",
      "Current rollout priorities include onboarding quality, model governance, and clear escalation paths for sensitive requests.",
      "Additional capabilities will be introduced through scheduled updates as implementation feedback is validated."
    ]
  }

  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <Header />
      <FloatingParticles />
      
      <div className="relative pt-32 pb-20 px-4 sm:px-6 md:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 via-transparent to-purple-900/10"></div>
        
        <div className="container mx-auto max-w-4xl relative z-10">
          <Link href="/news" className="inline-flex items-center gap-2 text-neon-blue hover:text-neon-purple transition-colors mb-8 font-montserrat">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to News</span>
          </Link>

          <article className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12">
            <div className="flex flex-wrap items-center gap-4 text-sm text-white/60 mb-6 font-montserrat">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{article.date}</span>
              </div>
              <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs">
                {article.category}
              </span>
              <span>By {article.author}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 font-nos">
              {article.title}
            </h1>

            <div className="flex flex-wrap gap-2 mb-8">
              {article.tags.map((tag, idx) => (
                <span key={idx} className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-montserrat">
                  <Tag className="w-3 h-3" />
                  {tag}
                </span>
              ))}
            </div>

            <div className="prose prose-invert max-w-none">
              {article.content.map((paragraph, idx) => (
                <p key={idx} className="text-white/80 leading-relaxed mb-6 text-base font-montserrat">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-white/10">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="text-white/60 text-sm font-montserrat">
                  Share this article
                </div>
                <div className="flex gap-3">
                  <button className="px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-lg text-blue-400 hover:bg-blue-500/20 transition-colors text-sm font-montserrat">
                    Share
                  </button>
                  <Link 
                    href="/news"
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white hover:bg-white/10 transition-colors text-sm font-montserrat"
                  >
                    More News
                  </Link>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>

      <Footer />
    </main>
  )
}


