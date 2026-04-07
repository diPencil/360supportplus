"use client"

import { useEffect, useState } from "react"
import Header from "@/components/header"
import FloatingParticles from "@/components/floating-particles"
import Footer from "@/components/footer"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function ContactPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "info@supportplus.com",
      color: "from-neon-blue to-cyan-500",
      link: "mailto:info@supportplus.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+971 XX XXX XXXX",
      color: "from-neon-purple to-pink-500",
      link: "tel:+971XXXXXXXX"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Dubai, UAE",
      color: "from-cyan-500 to-neon-blue",
      link: "#"
    }
  ]

  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <Header />
      <FloatingParticles />
      
      <div className="relative pt-32 pb-20 px-4 sm:px-6 md:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/10 via-transparent to-purple-900/10"></div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <span className="px-4 py-2 rounded-full border border-cyan-500/50 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-white text-sm font-montserrat shadow-[0_0_16px_rgba(6,182,212,0.5)]">
                Get in Touch
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 font-nos">
              <span className="inline-block relative">
                Contact Us
                <span className="absolute -bottom-3 left-0 w-full h-1.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 opacity-80"></span>
              </span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto font-montserrat leading-relaxed">
              Ready to transform your business? Reach out and let's discuss how we can help you achieve your goals
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Methods */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white mb-6 font-montserrat">Contact Information</h2>
              
              {contactMethods.map((method, idx) => {
                const Icon = method.icon
                return (
                  <a
                    key={idx}
                    href={method.link}
                    className="group block bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-neon-blue/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <div className="text-white/60 text-sm font-montserrat mb-1">{method.title}</div>
                        <div className="text-white font-semibold font-montserrat">{method.value}</div>
                      </div>
                    </div>
                  </a>
                )
              })}
            </div>
            
            {/* Contact Form */}
            <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6 font-montserrat">Send us a Message</h2>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-neon-blue transition-colors font-montserrat"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-neon-blue transition-colors font-montserrat"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows={6}
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-neon-blue transition-colors resize-none font-montserrat"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-neon-blue to-neon-purple text-white rounded-lg hover:shadow-lg hover:shadow-neon-blue/50 transition-all duration-300 font-semibold font-montserrat flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
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
