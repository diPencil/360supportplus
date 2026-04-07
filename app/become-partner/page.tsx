"use client"

import { useEffect, useState } from "react"
import Header from "@/components/header"
import FloatingParticles from "@/components/floating-particles"
import Footer from "@/components/footer"
import { CheckCircle, Send } from "lucide-react"

export default function BecomePartnerPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const benefits = [
    "Access to exclusive resources and tools",
    "Dedicated support and training",
    "Competitive commission structure",
    "Joint marketing opportunities",
    "Priority product updates",
    "Custom partnership programs"
  ]

  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <Header />
      <FloatingParticles />
      
      <div className="relative pt-32 pb-20 px-4 sm:px-6 md:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-pink-900/10 to-transparent"></div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <span className="px-4 py-2 rounded-full border border-purple-500/50 bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-white text-sm font-montserrat shadow-[0_0_16px_rgba(139,92,246,0.5)]">
                Join Our Network
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 font-nos">
              <span className="inline-block relative">
                Become a Partner
                <span className="absolute -bottom-3 left-0 w-full h-1.5 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 opacity-80"></span>
              </span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto font-montserrat leading-relaxed">
              Join our partner network and grow your business together
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Benefits */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white mb-6 font-montserrat">Partner Benefits</h2>
              <div className="space-y-4">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mt-0.5">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-white/90 font-montserrat">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Application Form */}
            <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-6 font-montserrat">Apply to Become a Partner</h3>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Company Name"
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-purple-500 transition-colors font-montserrat"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Contact Email"
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-purple-500 transition-colors font-montserrat"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Tell us about your company"
                    rows={5}
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-purple-500 transition-colors resize-none font-montserrat"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 font-semibold font-montserrat flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
