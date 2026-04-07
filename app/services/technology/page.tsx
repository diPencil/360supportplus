"use client"

import { useEffect, useState } from "react"
import Header from "@/components/header"
import FloatingParticles from "@/components/floating-particles"
import Footer from "@/components/footer"
import { Cpu, CheckCircle, ArrowLeft, Cloud, Code, Brain, Server } from "lucide-react"
import Link from "next/link"

export default function TechnologyIndustryPage() {
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
              <Cpu className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 font-nos">
              Technology
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto font-montserrat leading-relaxed">
              Innovative solutions for software and technology companies across the MENA region
            </p>
          </div>

          <div className="bg-black/40 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-10 md:p-12 mb-16">
            <h2 className="text-2xl font-bold text-white mb-6 font-nos">Industry Overview</h2>
            <p className="text-white/80 text-lg leading-relaxed mb-4 font-montserrat">
              The technology sector in MENA is experiencing rapid growth, with increasing demand for software solutions, cloud services, and digital transformation. Support Plus provides comprehensive technology solutions that help tech companies innovate, scale, and compete in the global market.
            </p>
            <p className="text-white/70 leading-relaxed font-montserrat">
              Our solutions serve software companies, SaaS providers, IT services, fintech, and technology startups, enabling them to build, deploy, and scale innovative solutions.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center font-nos">Our Solutions</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: Cloud,
                  title: "Cloud Infrastructure",
                  desc: "Scalable cloud infrastructure solutions for deploying and managing applications and services in the cloud.",
                  features: ["Cloud deployment", "Infrastructure as code", "Auto-scaling", "Cloud optimization"]
                },
                {
                  icon: Code,
                  title: "DevOps",
                  desc: "DevOps practices and tools for continuous integration, deployment, and infrastructure automation.",
                  features: ["CI/CD pipelines", "Containerization", "Infrastructure automation", "Monitoring"]
                },
                {
                  icon: Brain,
                  title: "AI Integration",
                  desc: "Artificial intelligence and machine learning integration services for intelligent applications and automation.",
                  features: ["AI models", "Machine learning", "Natural language processing", "AI automation"]
                },
                {
                  icon: Server,
                  title: "Software Development",
                  desc: "Custom software development services for building scalable, secure, and innovative applications.",
                  features: ["Custom development", "API development", "Microservices", "Quality assurance"]
                }
              ].map((solution, idx) => {
                const Icon = solution.icon
                return (
                  <div key={idx} className="bg-black/40 backdrop-blur-sm border border-cyan-500/30 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300">
                    <Icon className="w-10 h-10 text-cyan-500 mb-4" />
                    <h3 className="text-xl font-bold text-white mb-3 font-montserrat">{solution.title}</h3>
                    <p className="text-white/70 leading-relaxed mb-4 font-montserrat">{solution.desc}</p>
                    <ul className="space-y-2">
                      {solution.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-2 text-sm text-white/60 font-montserrat">
                          <CheckCircle className="w-4 h-4 text-cyan-500 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 border border-cyan-500/30 rounded-2xl p-10 md:p-12 mb-16">
            <h2 className="text-2xl font-bold text-white mb-6 font-nos">Addressing Key Challenges</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Rapid Innovation", desc: "Keep pace with rapidly evolving technology and market demands." },
                { title: "Talent Acquisition", desc: "Attract and retain top technology talent in competitive market." },
                { title: "Scalability", desc: "Scale infrastructure and applications to meet growing demand." },
                { title: "Security", desc: "Protect applications and data from cybersecurity threats." }
              ].map((challenge, idx) => (
                <div key={idx} className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-white mb-2 font-montserrat">{challenge.title}</h4>
                  <p className="text-white/70 text-sm leading-relaxed font-montserrat">{challenge.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center font-nos">Why Choose Our Solutions?</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Innovation", desc: "Cutting-edge technology solutions" },
                { title: "Scalability", desc: "Scale with your business" },
                { title: "Expert Team", desc: "Access to tech experts" },
                { title: "Security First", desc: "Enterprise-grade security" }
              ].map((benefit, idx) => (
                <div key={idx} className="bg-black/40 backdrop-blur-sm border border-cyan-500/30 rounded-xl p-6 text-center">
                  <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 mb-2 font-nos">
                    0{idx + 1}
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2 font-montserrat">{benefit.title}</h4>
                  <p className="text-white/70 text-sm font-montserrat">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-900/30 via-blue-900/20 to-cyan-900/30 border border-cyan-500/30 rounded-2xl p-10 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4 font-nos">Ready to Accelerate Your Technology?</h2>
            <p className="text-white/80 text-lg mb-8 font-montserrat max-w-2xl mx-auto">
              Let's discuss how our technology solutions can help your company innovate and scale
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


