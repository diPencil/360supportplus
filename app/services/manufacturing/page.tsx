"use client"

import { useEffect, useState } from "react"
import Header from "@/components/header"
import FloatingParticles from "@/components/floating-particles"
import Footer from "@/components/footer"
import { Factory, CheckCircle, ArrowLeft, Cog, Package, TrendingUp, Settings } from "lucide-react"
import Link from "next/link"

export default function ManufacturingPage() {
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
              <Factory className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 font-nos">
              Manufacturing
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto font-montserrat leading-relaxed">
              Industrial automation and production optimization solutions for manufacturing operations
            </p>
          </div>

          <div className="bg-black/40 backdrop-blur-sm border border-orange-500/30 rounded-2xl p-10 md:p-12 mb-16">
            <h2 className="text-2xl font-bold text-white mb-6 font-nos">Industry Overview</h2>
            <p className="text-white/80 text-lg leading-relaxed mb-4 font-montserrat">
              The manufacturing sector in MENA is embracing Industry 4.0 technologies to improve efficiency, reduce costs, and enhance quality. Support Plus delivers comprehensive manufacturing solutions that integrate automation, IoT, and data analytics to transform production operations.
            </p>
            <p className="text-white/70 leading-relaxed font-montserrat">
              Our solutions serve automotive, food & beverage, textiles, electronics, and other manufacturing industries, helping them optimize production, maintain quality standards, and improve supply chain efficiency.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center font-nos">Our Solutions</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: Settings,
                  title: "Production Planning",
                  desc: "Advanced production planning and scheduling solutions that optimize production workflows, minimize downtime, and maximize efficiency.",
                  features: ["Production scheduling", "Resource optimization", "Capacity planning", "Workflow management"]
                },
                {
                  icon: Package,
                  title: "Quality Control",
                  desc: "Comprehensive quality management systems that ensure product quality, compliance with standards, and continuous improvement.",
                  features: ["Quality inspection", "Quality metrics", "Defect tracking", "Quality reporting"]
                },
                {
                  icon: Cog,
                  title: "Supply Chain",
                  desc: "Integrated supply chain management solutions for efficient procurement, inventory, and logistics operations.",
                  features: ["Procurement management", "Inventory control", "Logistics tracking", "Supplier management"]
                },
                {
                  icon: TrendingUp,
                  title: "IoT Integration",
                  desc: "Internet of Things integration for smart manufacturing, real-time monitoring, and predictive maintenance.",
                  features: ["IoT sensors", "Real-time monitoring", "Predictive maintenance", "Smart manufacturing"]
                }
              ].map((solution, idx) => {
                const Icon = solution.icon
                return (
                  <div key={idx} className="bg-black/40 backdrop-blur-sm border border-orange-500/30 rounded-xl p-8 hover:border-amber-500/50 transition-all duration-300">
                    <Icon className="w-10 h-10 text-orange-500 mb-4" />
                    <h3 className="text-xl font-bold text-white mb-3 font-montserrat">{solution.title}</h3>
                    <p className="text-white/70 leading-relaxed mb-4 font-montserrat">{solution.desc}</p>
                    <ul className="space-y-2">
                      {solution.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-2 text-sm text-white/60 font-montserrat">
                          <CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-900/30 to-amber-900/30 border border-orange-500/30 rounded-2xl p-10 md:p-12 mb-16">
            <h2 className="text-2xl font-bold text-white mb-6 font-nos">Addressing Key Challenges</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Production Efficiency", desc: "Optimize production processes to maximize output and minimize waste." },
                { title: "Quality Standards", desc: "Maintain consistent quality across all production lines and products." },
                { title: "Supply Chain Management", desc: "Streamline supply chain operations for efficiency and reliability." },
                { title: "Cost Optimization", desc: "Reduce operational costs while maintaining quality and efficiency." }
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
                { title: "Increased Efficiency", desc: "Optimize production processes" },
                { title: "Quality Assurance", desc: "Maintain high quality standards" },
                { title: "Cost Reduction", desc: "Reduce operational costs" },
                { title: "Smart Manufacturing", desc: "Leverage Industry 4.0 technologies" }
              ].map((benefit, idx) => (
                <div key={idx} className="bg-black/40 backdrop-blur-sm border border-orange-500/30 rounded-xl p-6 text-center">
                  <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500 mb-2 font-nos">
                    0{idx + 1}
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2 font-montserrat">{benefit.title}</h4>
                  <p className="text-white/70 text-sm font-montserrat">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-900/30 via-amber-900/20 to-orange-900/30 border border-orange-500/30 rounded-2xl p-10 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4 font-nos">Ready to Transform Your Manufacturing?</h2>
            <p className="text-white/80 text-lg mb-8 font-montserrat max-w-2xl mx-auto">
              Let's discuss how our manufacturing solutions can optimize your production operations
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


