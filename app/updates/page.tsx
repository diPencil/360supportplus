"use client"

import { useEffect, useState } from "react"
import Header from "@/components/header"
import FloatingParticles from "@/components/floating-particles"
import Footer from "@/components/footer"
import { Sparkles } from "lucide-react"

export default function UpdatesPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const updates = [
    { version: "3.0", date: "2025-01-15", title: "Major Platform Update", features: ["New AI Features", "Improved UI", "Enhanced Performance"] },
    { version: "2.5", date: "2024-12-20", title: "Performance Improvements", features: ["Faster Load Times", "Better Security", "New Integrations"] },
    { version: "2.0", date: "2024-11-10", title: "New Features Release", features: ["Dashboard Redesign", "Advanced Analytics", "Mobile App"] },
    { version: "1.5", date: "2024-10-05", title: "Security Enhancements", features: ["Enhanced Encryption", "Two-Factor Auth", "Better Privacy"] },
  ]

  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <Header />
      <FloatingParticles />
      
      <div className="relative pt-32 pb-20 px-4 sm:px-6 md:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-900/10 via-transparent to-orange-900/10"></div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <span className="px-4 py-2 rounded-full border border-amber-500/50 bg-gradient-to-r from-amber-500/10 to-orange-500/10 text-white text-sm font-montserrat shadow-[0_0_16px_rgba(245,158,11,0.5)]">
                Product Updates
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 font-nos">
              <span className="inline-block relative">
                Updates
                <span className="absolute -bottom-3 left-0 w-full h-1.5 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 opacity-80"></span>
              </span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto font-montserrat leading-relaxed">
              Latest product updates and feature releases
            </p>
          </div>

          <div className="space-y-6">
            {updates.map((update, idx) => (
              <div
                key={idx}
                className="group bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-amber-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(245,158,11,0.3)]"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
                        <Sparkles className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-amber-400 text-sm font-bold font-montserrat">v{update.version}</div>
                        <div className="text-white/60 text-xs font-montserrat">{update.date}</div>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 font-montserrat">{update.title}</h3>
                  </div>
                </div>
                <p className="text-white/70 mb-4 font-montserrat">
                  New features and improvements have been released to enhance your experience.
                </p>
                <ul className="flex flex-wrap gap-2">
                  {update.features.map((feature, fIdx) => (
                    <li
                      key={fIdx}
                      className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-montserrat"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
