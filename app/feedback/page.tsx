"use client"

import { useEffect, useState } from "react"
import Header from "@/components/header"
import FloatingParticles from "@/components/floating-particles"
import Footer from "@/components/footer"
import { Send, MessageSquare, Bug, Lightbulb, Star } from "lucide-react"

export default function FeedbackPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const categories = [
    { icon: Lightbulb, label: "General Feedback", value: "general" },
    { icon: Star, label: "Feature Request", value: "feature" },
    { icon: Bug, label: "Bug Report", value: "bug" },
    { icon: MessageSquare, label: "Improvement Suggestion", value: "improvement" },
  ]

  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <Header />
      <FloatingParticles />
      
      <div className="relative pt-32 pb-20 px-4 sm:px-6 md:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/10 via-purple-900/10 to-transparent"></div>
        
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <span className="px-4 py-2 rounded-full border border-indigo-500/50 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 text-white text-sm font-montserrat shadow-[0_0_16px_rgba(99,102,241,0.5)]">
                Your Voice Matters
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 font-nos">
              <span className="inline-block relative">
                Feedback & Suggestions
                <span className="absolute -bottom-3 left-0 w-full h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 opacity-80"></span>
              </span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto font-montserrat leading-relaxed">
              We value your input and would love to hear from you
            </p>
          </div>

          {/* Intro */}
          <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-10 md:p-12 mb-12">
            <p className="text-lg text-white/90 leading-relaxed font-montserrat text-center">
              Your feedback helps us improve our services and create better experiences for all our users. Share your thoughts, suggestions, or report any issues you've encountered.
            </p>
          </div>
          
          {/* Feedback Form */}
          <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <form className="space-y-6">
              <div>
                <label className="block text-white mb-2 text-sm font-semibold font-montserrat">Category</label>
                <div className="grid grid-cols-2 gap-3">
                  {categories.map((cat) => {
                    const Icon = cat.icon
                    return (
                      <label key={cat.value} className="cursor-pointer">
                        <input type="radio" name="category" value={cat.value} className="hidden peer" />
                        <div className="flex items-center gap-3 p-4 bg-black/50 border border-white/10 rounded-lg peer-checked:border-indigo-500 peer-checked:bg-indigo-500/10 hover:border-indigo-500/50 transition-all font-montserrat">
                          <Icon className="w-5 h-5 text-white/60 peer-checked:text-indigo-400" />
                          <span className="text-sm text-white/90">{cat.label}</span>
                        </div>
                      </label>
                    )
                  })}
                </div>
              </div>
              
              <div>
                <input
                  type="text"
                  placeholder="Your Name (Optional)"
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-indigo-500 transition-colors font-montserrat"
                />
              </div>
              
              <div>
                <input
                  type="email"
                  placeholder="Your Email (Optional)"
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-indigo-500 transition-colors font-montserrat"
                />
              </div>
              
              <div>
                <textarea
                  placeholder="Your Feedback or Suggestion"
                  rows={6}
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-indigo-500 transition-colors resize-none font-montserrat"
                />
              </div>
              
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg hover:shadow-lg hover:shadow-indigo-500/50 transition-all duration-300 font-semibold font-montserrat flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Submit Feedback
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
