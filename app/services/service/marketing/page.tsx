"use client"

import { useEffect, useState } from "react"
import Header from "@/components/header"
import FloatingParticles from "@/components/floating-particles"
import Footer from "@/components/footer"
import { Target, CheckCircle, ArrowLeft, Megaphone, BarChart3, Users, Mail } from "lucide-react"
import Link from "next/link"

export default function MarketingServicePage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <Header />
      <FloatingParticles />
      
      <div className="relative pt-32 pb-20 px-4 sm:px-6 md:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-pink-900/20 via-rose-900/10 to-transparent"></div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <Link href="/services" className="inline-flex items-center gap-2 text-pink-500 hover:text-pink-400 transition-colors mb-8 font-montserrat">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Services</span>
          </Link>

          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-500 mb-6 shadow-xl">
              <Target className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 font-nos">
              Marketing Services
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto font-montserrat leading-relaxed">
              Digital marketing, analytics, and campaign management solutions to grow your business
            </p>
          </div>

          <div className="bg-black/40 backdrop-blur-sm border border-pink-500/30 rounded-2xl p-10 md:p-12 mb-16">
            <h2 className="text-2xl font-bold text-white mb-6 font-nos">Overview</h2>
            <p className="text-white/80 text-lg leading-relaxed mb-4 font-montserrat">
              Our Marketing Services provide comprehensive digital marketing solutions that help businesses reach their target audience, engage customers, and drive growth. From campaign management to analytics, we offer end-to-end marketing solutions.
            </p>
            <p className="text-white/70 leading-relaxed font-montserrat">
              Our solutions cover social media marketing, email campaigns, content marketing, SEO, PPC advertising, and marketing analytics.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center font-nos">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: Megaphone,
                  title: "Campaign Management",
                  desc: "Plan, execute, and manage multi-channel marketing campaigns with comprehensive campaign management tools.",
                  features: ["Campaign planning", "Multi-channel execution", "A/B testing", "Campaign optimization"]
                },
                {
                  icon: BarChart3,
                  title: "Marketing Analytics",
                  desc: "Track and analyze marketing performance with detailed analytics, ROI measurement, and insights dashboards.",
                  features: ["Performance tracking", "ROI analysis", "Conversion tracking", "Analytics dashboards"]
                },
                {
                  icon: Users,
                  title: "Audience Management",
                  desc: "Build and manage customer segments, create targeted campaigns, and personalize marketing messages.",
                  features: ["Customer segmentation", "Targeting", "Personalization", "Audience insights"]
                },
                {
                  icon: Mail,
                  title: "Email Marketing",
                  desc: "Create, send, and track email campaigns with advanced automation and personalization features.",
                  features: ["Email campaigns", "Automation", "Personalization", "Email analytics"]
                }
              ].map((feature, idx) => {
                const Icon = feature.icon
                return (
                  <div key={idx} className="bg-black/40 backdrop-blur-sm border border-pink-500/30 rounded-xl p-8 hover:border-rose-500/50 transition-all duration-300">
                    <Icon className="w-10 h-10 text-pink-500 mb-4" />
                    <h3 className="text-xl font-bold text-white mb-3 font-montserrat">{feature.title}</h3>
                    <p className="text-white/70 leading-relaxed mb-4 font-montserrat">{feature.desc}</p>
                    <ul className="space-y-2">
                      {feature.features.map((item, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-2 text-sm text-white/60 font-montserrat">
                          <CheckCircle className="w-4 h-4 text-pink-500 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="bg-gradient-to-br from-pink-900/30 to-rose-900/30 border border-pink-500/30 rounded-2xl p-10 md:p-12 mb-16">
            <h2 className="text-2xl font-bold text-white mb-6 font-nos">Benefits</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Increased ROI", desc: "Maximize marketing return on investment" },
                { title: "Better Targeting", desc: "Reach the right audience at the right time" },
                { title: "Data-Driven", desc: "Make decisions based on real data" },
                { title: "Automation", desc: "Save time with automated campaigns" },
                { title: "Multi-Channel", desc: "Reach customers across all channels" },
                { title: "Measurable Results", desc: "Track and measure marketing success" }
              ].map((benefit, idx) => (
                <div key={idx} className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-white mb-2 font-montserrat">{benefit.title}</h4>
                  <p className="text-white/70 text-sm leading-relaxed font-montserrat">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-pink-900/30 via-rose-900/20 to-pink-900/30 border border-pink-500/30 rounded-2xl p-10 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4 font-nos">Ready to Boost Your Marketing?</h2>
            <p className="text-white/80 text-lg mb-8 font-montserrat max-w-2xl mx-auto">
              Let's discuss how our marketing solutions can help you reach and engage your audience
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-lg hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-300 font-semibold font-montserrat">
                Get Started
              </button>
              <button className="px-8 py-3 border border-pink-500/50 text-white rounded-lg hover:bg-pink-500/10 transition-all duration-300 font-semibold font-montserrat">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}


