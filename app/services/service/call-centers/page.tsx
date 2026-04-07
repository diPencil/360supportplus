"use client"

import { useEffect, useState } from "react"
import Header from "@/components/header"
import FloatingParticles from "@/components/floating-particles"
import Footer from "@/components/footer"
import { Zap, CheckCircle, ArrowLeft, Phone, Headphones, MessageSquare, Clock } from "lucide-react"
import Link from "next/link"

export default function CallCentersServicePage() {
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
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/20 via-blue-900/10 to-transparent"></div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <Link href="/services" className="inline-flex items-center gap-2 text-cyan-500 hover:text-cyan-400 transition-colors mb-8 font-montserrat">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Services</span>
          </Link>

          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 mb-6 shadow-xl">
              <Zap className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 font-nos">
              Call Centers Services
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto font-montserrat leading-relaxed">
              Customer service automation and call center optimization solutions
            </p>
          </div>

          <div className="bg-black/40 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-10 md:p-12 mb-16">
            <h2 className="text-2xl font-bold text-white mb-6 font-nos">Overview</h2>
            <p className="text-white/80 text-lg leading-relaxed mb-4 font-montserrat">
              Our Call Centers Services provide comprehensive customer service solutions that help businesses deliver exceptional customer experiences. From call routing to customer relationship management, we offer end-to-end call center solutions.
            </p>
            <p className="text-white/70 leading-relaxed font-montserrat">
              Our solutions include call management, IVR systems, CRM integration, live chat, ticketing systems, and performance analytics.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center font-nos">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: Phone,
                  title: "Call Management",
                  desc: "Intelligent call routing, queue management, and call distribution systems for efficient call handling.",
                  features: ["Call routing", "Queue management", "Call distribution", "Call recording"]
                },
                {
                  icon: Headphones,
                  title: "Customer Support",
                  desc: "Multi-channel customer support including phone, email, chat, and social media integration.",
                  features: ["Multi-channel support", "Ticket management", "Customer history", "Support automation"]
                },
                {
                  icon: MessageSquare,
                  title: "Live Chat & Messaging",
                  desc: "Real-time customer engagement through live chat, messaging, and chatbot solutions.",
                  features: ["Live chat", "Chatbot integration", "Message routing", "Chat analytics"]
                },
                {
                  icon: Clock,
                  title: "Performance Analytics",
                  desc: "Track and analyze call center performance with detailed metrics, reports, and insights.",
                  features: ["Performance metrics", "Agent analytics", "Customer satisfaction", "Efficiency reports"]
                }
              ].map((feature, idx) => {
                const Icon = feature.icon
                return (
                  <div key={idx} className="bg-black/40 backdrop-blur-sm border border-cyan-500/30 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300">
                    <Icon className="w-10 h-10 text-cyan-500 mb-4" />
                    <h3 className="text-xl font-bold text-white mb-3 font-montserrat">{feature.title}</h3>
                    <p className="text-white/70 leading-relaxed mb-4 font-montserrat">{feature.desc}</p>
                    <ul className="space-y-2">
                      {feature.features.map((item, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-2 text-sm text-white/60 font-montserrat">
                          <CheckCircle className="w-4 h-4 text-cyan-500 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 border border-cyan-500/30 rounded-2xl p-10 md:p-12 mb-16">
            <h2 className="text-2xl font-bold text-white mb-6 font-nos">Benefits</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Improved Efficiency", desc: "Optimize call center operations" },
                { title: "Better Service", desc: "Deliver exceptional customer experiences" },
                { title: "Cost Reduction", desc: "Reduce operational costs" },
                { title: "Scalability", desc: "Scale with your business needs" },
                { title: "Analytics", desc: "Data-driven performance insights" },
                { title: "Automation", desc: "Automate repetitive tasks" }
              ].map((benefit, idx) => (
                <div key={idx} className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-white mb-2 font-montserrat">{benefit.title}</h4>
                  <p className="text-white/70 text-sm leading-relaxed font-montserrat">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-900/30 via-blue-900/20 to-cyan-900/30 border border-cyan-500/30 rounded-2xl p-10 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4 font-nos">Ready to Optimize Your Call Center?</h2>
            <p className="text-white/80 text-lg mb-8 font-montserrat max-w-2xl mx-auto">
              Let's discuss how our call center solutions can improve customer service and efficiency
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 font-semibold font-montserrat">
                Get Started
              </button>
              <button className="px-8 py-3 border border-cyan-500/50 text-white rounded-lg hover:bg-cyan-500/10 transition-all duration-300 font-semibold font-montserrat">
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


