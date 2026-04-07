"use client"

import { useEffect, useState } from "react"
import Header from "@/components/header"
import FloatingParticles from "@/components/floating-particles"
import Footer from "@/components/footer"
import { ShoppingCart, CheckCircle, ArrowLeft, Package, BarChart3, Users, ShoppingBag } from "lucide-react"
import Link from "next/link"

export default function RetailEcommercePage() {
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
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-indigo-900/10 to-transparent"></div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <Link href="/services" className="inline-flex items-center gap-2 text-purple-500 hover:text-purple-400 transition-colors mb-8 font-montserrat">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Services</span>
          </Link>

          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-500 mb-6 shadow-xl">
              <ShoppingCart className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 font-nos">
              Retail & E-commerce
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto font-montserrat leading-relaxed">
              End-to-end solutions for online and offline retail operations across the MENA region
            </p>
          </div>

          <div className="bg-black/40 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-10 md:p-12 mb-16">
            <h2 className="text-2xl font-bold text-white mb-6 font-nos">Industry Overview</h2>
            <p className="text-white/80 text-lg leading-relaxed mb-4 font-montserrat">
              The retail and e-commerce sector in MENA is experiencing unprecedented growth, driven by digital adoption and changing consumer behaviors. Support Plus provides comprehensive solutions that enable retailers to succeed in both online and offline channels, creating seamless omnichannel experiences.
            </p>
            <p className="text-white/70 leading-relaxed font-montserrat">
              Our solutions serve traditional retailers, e-commerce platforms, marketplaces, and omnichannel retailers, helping them optimize operations, enhance customer experiences, and drive sales growth.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center font-nos">Our Solutions</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: Package,
                  title: "Inventory Management",
                  desc: "Advanced inventory management systems that optimize stock levels, reduce waste, and ensure product availability across all channels.",
                  features: ["Real-time tracking", "Multi-location support", "Automated reordering", "Stock alerts"]
                },
                {
                  icon: ShoppingBag,
                  title: "E-commerce Platforms",
                  desc: "Powerful e-commerce solutions that enable businesses to create, manage, and scale online stores with ease.",
                  features: ["Store builder", "Product catalog", "Shopping cart", "Checkout system"]
                },
                {
                  icon: BarChart3,
                  title: "Customer Analytics",
                  desc: "Comprehensive analytics and insights to understand customer behavior, optimize marketing, and drive sales.",
                  features: ["Customer insights", "Sales analytics", "Marketing analytics", "Performance dashboards"]
                },
                {
                  icon: Users,
                  title: "Omnichannel Solutions",
                  desc: "Unified solutions that seamlessly connect online and offline channels for consistent customer experiences.",
                  features: ["Channel integration", "Unified inventory", "Cross-channel fulfillment", "Customer journey"]
                }
              ].map((solution, idx) => {
                const Icon = solution.icon
                return (
                  <div key={idx} className="bg-black/40 backdrop-blur-sm border border-purple-500/30 rounded-xl p-8 hover:border-indigo-500/50 transition-all duration-300">
                    <Icon className="w-10 h-10 text-purple-500 mb-4" />
                    <h3 className="text-xl font-bold text-white mb-3 font-montserrat">{solution.title}</h3>
                    <p className="text-white/70 leading-relaxed mb-4 font-montserrat">{solution.desc}</p>
                    <ul className="space-y-2">
                      {solution.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-2 text-sm text-white/60 font-montserrat">
                          <CheckCircle className="w-4 h-4 text-purple-500 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-900/30 to-indigo-900/30 border border-purple-500/30 rounded-2xl p-10 md:p-12 mb-16">
            <h2 className="text-2xl font-bold text-white mb-6 font-nos">Addressing Key Challenges</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Market Competition", desc: "Stand out in a crowded marketplace with innovative solutions." },
                { title: "Supply Chain", desc: "Optimize supply chain operations for efficiency and reliability." },
                { title: "Customer Experience", desc: "Deliver exceptional experiences across all touchpoints." },
                { title: "Digital Transformation", desc: "Modernize operations to meet digital-first customer expectations." }
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
                { title: "Scalable", desc: "Grow with your business needs" },
                { title: "Omnichannel", desc: "Seamless multi-channel experiences" },
                { title: "Data-Driven", desc: "Powerful analytics and insights" },
                { title: "Customer-Focused", desc: "Designed to enhance customer experience" }
              ].map((benefit, idx) => (
                <div key={idx} className="bg-black/40 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6 text-center">
                  <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500 mb-2 font-nos">
                    0{idx + 1}
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2 font-montserrat">{benefit.title}</h4>
                  <p className="text-white/70 text-sm font-montserrat">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-900/30 via-indigo-900/20 to-purple-900/30 border border-purple-500/30 rounded-2xl p-10 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4 font-nos">Ready to Transform Your Retail Business?</h2>
            <p className="text-white/80 text-lg mb-8 font-montserrat max-w-2xl mx-auto">
              Let's discuss how our solutions can drive growth and improve customer experience
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 font-semibold font-montserrat">
                Get Started
              </button>
              <button className="px-8 py-3 border border-purple-500/50 text-white rounded-lg hover:bg-purple-500/10 transition-all duration-300 font-semibold font-montserrat">
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


