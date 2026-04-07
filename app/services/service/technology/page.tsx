"use client"

import { useEffect, useState } from "react"
import Header from "@/components/header"
import FloatingParticles from "@/components/floating-particles"
import Footer from "@/components/footer"
import { Cpu, CheckCircle, ArrowLeft, Cloud, Code, Server, Shield } from "lucide-react"
import Link from "next/link"

export default function TechnologyServicePage() {
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
        <div className="absolute inset-0 bg-gradient-to-b from-orange-900/20 via-amber-900/10 to-transparent"></div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <Link href="/services" className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-400 transition-colors mb-8 font-montserrat">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Services</span>
          </Link>

          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 mb-6 shadow-xl">
              <Cpu className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 font-nos">
              Technology Services
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto font-montserrat leading-relaxed">
              IT infrastructure, software development, and tech consulting solutions
            </p>
          </div>

          <div className="bg-black/40 backdrop-blur-sm border border-orange-500/30 rounded-2xl p-10 md:p-12 mb-16">
            <h2 className="text-2xl font-bold text-white mb-6 font-nos">Overview</h2>
            <p className="text-white/80 text-lg leading-relaxed mb-4 font-montserrat">
              Our Technology Services provide comprehensive IT solutions that help businesses modernize their technology infrastructure, develop custom software, and leverage cutting-edge technologies. From cloud migration to AI integration, we offer end-to-end tech solutions.
            </p>
            <p className="text-white/70 leading-relaxed font-montserrat">
              Our solutions include cloud infrastructure, software development, DevOps, cybersecurity, system integration, and technology consulting.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center font-nos">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: Cloud,
                  title: "Cloud Infrastructure",
                  desc: "Cloud migration, management, and optimization services for scalable and reliable infrastructure.",
                  features: ["Cloud migration", "Infrastructure management", "Scalability", "Cost optimization"]
                },
                {
                  icon: Code,
                  title: "Software Development",
                  desc: "Custom software development, application modernization, and API development services.",
                  features: ["Custom development", "App modernization", "API development", "Quality assurance"]
                },
                {
                  icon: Server,
                  title: "DevOps & Automation",
                  desc: "DevOps implementation, CI/CD pipelines, and infrastructure automation for efficient deployments.",
                  features: ["CI/CD pipelines", "Infrastructure automation", "Monitoring", "Performance optimization"]
                },
                {
                  icon: Shield,
                  title: "Cybersecurity",
                  desc: "Comprehensive security solutions including threat detection, data protection, and compliance.",
                  features: ["Threat detection", "Data protection", "Security audits", "Compliance"]
                }
              ].map((feature, idx) => {
                const Icon = feature.icon
                return (
                  <div key={idx} className="bg-black/40 backdrop-blur-sm border border-orange-500/30 rounded-xl p-8 hover:border-amber-500/50 transition-all duration-300">
                    <Icon className="w-10 h-10 text-orange-500 mb-4" />
                    <h3 className="text-xl font-bold text-white mb-3 font-montserrat">{feature.title}</h3>
                    <p className="text-white/70 leading-relaxed mb-4 font-montserrat">{feature.desc}</p>
                    <ul className="space-y-2">
                      {feature.features.map((item, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-2 text-sm text-white/60 font-montserrat">
                          <CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-900/30 to-amber-900/30 border border-orange-500/30 rounded-2xl p-10 md:p-12 mb-16">
            <h2 className="text-2xl font-bold text-white mb-6 font-nos">Benefits</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Modern Infrastructure", desc: "Upgrade to modern, scalable infrastructure" },
                { title: "Custom Solutions", desc: "Build solutions tailored to your needs" },
                { title: "Security", desc: "Enterprise-grade security and protection" },
                { title: "Scalability", desc: "Scale with your business growth" },
                { title: "Expert Support", desc: "Access to technology experts" },
                { title: "Innovation", desc: "Leverage cutting-edge technologies" }
              ].map((benefit, idx) => (
                <div key={idx} className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-white mb-2 font-montserrat">{benefit.title}</h4>
                  <p className="text-white/70 text-sm leading-relaxed font-montserrat">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-900/30 via-amber-900/20 to-orange-900/30 border border-orange-500/30 rounded-2xl p-10 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4 font-nos">Ready to Modernize Your Technology?</h2>
            <p className="text-white/80 text-lg mb-8 font-montserrat max-w-2xl mx-auto">
              Let's discuss how our technology solutions can transform your IT infrastructure
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-lg hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300 font-semibold font-montserrat">
                Get Started
              </button>
              <button className="px-8 py-3 border border-orange-500/50 text-white rounded-lg hover:bg-orange-500/10 transition-all duration-300 font-semibold font-montserrat">
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


