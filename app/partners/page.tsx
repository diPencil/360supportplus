"use client"

import { useEffect, useState } from "react"
import Header from "@/components/header"
import FloatingParticles from "@/components/floating-particles"
import Footer from "@/components/footer"

export default function PartnersPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const partnerCategories = [
    { name: "Technology Partners", count: 25, color: "from-blue-500 to-cyan-500" },
    { name: "Strategic Alliances", count: 18, color: "from-purple-500 to-pink-500" },
    { name: "Industry Leaders", count: 32, color: "from-cyan-500 to-blue-500" },
    { name: "Solution Providers", count: 15, color: "from-pink-500 to-purple-500" },
  ]

  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <Header />
      <FloatingParticles />
      
      <div className="relative pt-32 pb-20 px-4 sm:px-6 md:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-transparent to-blue-900/10"></div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <span className="px-4 py-2 rounded-full border border-purple-500/50 bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-white text-sm font-montserrat shadow-[0_0_16px_rgba(139,92,246,0.5)]">
                Our Network
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 font-nos">
              <span className="inline-block relative">
                Partners
                <span className="absolute -bottom-3 left-0 w-full h-1.5 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 opacity-80"></span>
              </span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto font-montserrat leading-relaxed">
              We collaborate with industry leaders to deliver exceptional value and innovative solutions
            </p>
          </div>

          {/* Partner Categories */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {partnerCategories.map((category, idx) => (
              <div
                key={idx}
                className={`bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]`}
              >
                <div className={`text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${category.color} mb-2 font-nos`}>
                  {category.count}+
                </div>
                <div className="text-white/70 text-sm font-montserrat">{category.name}</div>
              </div>
            ))}
          </div>

          {/* Partner Grid Placeholder */}
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div
                key={item}
                className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-8 flex items-center justify-center min-h-[150px] hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.2)]"
              >
                <div className="text-white/30 text-center">
                  <div className="text-2xl font-bold mb-2">Partner {item}</div>
                  <div className="text-xs">Logo Placeholder</div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <div className="inline-block bg-black/40 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 max-w-2xl">
              <h2 className="text-2xl font-bold text-white mb-4 font-montserrat">Become a Partner</h2>
              <p className="text-white/70 mb-6 font-montserrat">
                Join our network and grow your business together
              </p>
              <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 font-semibold font-montserrat">
                Partner with Us
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
