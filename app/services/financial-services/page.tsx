"use client"

import { useEffect, useState } from "react"
import Header from "@/components/header"
import FloatingParticles from "@/components/floating-particles"
import Footer from "@/components/footer"
import { Building2, CheckCircle, ArrowLeft, Target, Shield, TrendingUp, Zap } from "lucide-react"
import Link from "next/link"

export default function FinancialServicesPage() {
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
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-cyan-900/10 to-transparent"></div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <Link href="/services" className="inline-flex items-center gap-2 text-cyan-500 hover:text-cyan-400 transition-colors mb-8 font-montserrat">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Services</span>
          </Link>

          {/* Hero */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 mb-6 shadow-xl">
              <Building2 className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 font-nos">
              Financial Services
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto font-montserrat leading-relaxed">
              Comprehensive solutions for banking, insurance, and investment firms across the MENA region
            </p>
          </div>

          {/* Overview */}
          <div className="bg-black/40 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-10 md:p-12 mb-16">
            <h2 className="text-2xl font-bold text-white mb-6 font-nos">Industry Overview</h2>
            <p className="text-white/80 text-lg leading-relaxed mb-4 font-montserrat">
              The financial services sector in the MENA region is experiencing rapid digital transformation, driven by evolving customer expectations, regulatory changes, and technological innovation. Support Plus provides comprehensive solutions that help financial institutions navigate these challenges while maintaining compliance and delivering exceptional customer experiences.
            </p>
            <p className="text-white/70 leading-relaxed font-montserrat">
              Our solutions are designed specifically for banking, insurance, investment management, fintech, and other financial service providers, ensuring they remain competitive in an increasingly digital marketplace.
            </p>
          </div>

          {/* Key Solutions */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center font-nos">Our Solutions</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: Shield,
                  title: "Regulatory Compliance",
                  desc: "Stay compliant with local and international financial regulations including Basel III, IFRS, and regional banking standards. Our compliance solutions ensure you meet all regulatory requirements while minimizing operational overhead.",
                  features: ["Automated compliance reporting", "Risk assessment tools", "Regulatory updates", "Audit trail management"]
                },
                {
                  icon: TrendingUp,
                  title: "Risk Management",
                  desc: "Advanced risk management solutions that help identify, assess, and mitigate financial risks. Protect your institution from credit, market, operational, and liquidity risks.",
                  features: ["Risk modeling", "Stress testing", "Early warning systems", "Risk dashboard"]
                },
                {
                  icon: Zap,
                  title: "Digital Banking",
                  desc: "Transform your banking operations with digital-first solutions. Enable customers to bank seamlessly across all channels with mobile banking, online platforms, and digital payment solutions.",
                  features: ["Mobile banking apps", "Online banking platforms", "Digital wallets", "Payment gateways"]
                },
                {
                  icon: Target,
                  title: "Payment Solutions",
                  desc: "Comprehensive payment processing solutions supporting multiple payment methods, currencies, and cross-border transactions. Enable seamless payment experiences for your customers.",
                  features: ["Payment processing", "Multi-currency support", "Cross-border payments", "Fraud detection"]
                }
              ].map((solution, idx) => {
                const Icon = solution.icon
                return (
                  <div key={idx} className="bg-black/40 backdrop-blur-sm border border-blue-500/30 rounded-xl p-8 hover:border-cyan-500/50 transition-all duration-300">
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

          {/* Challenges */}
          <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border border-blue-500/30 rounded-2xl p-10 md:p-12 mb-16">
            <h2 className="text-2xl font-bold text-white mb-6 font-nos">Addressing Key Challenges</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Regulatory Changes", desc: "Rapidly evolving regulations require constant adaptation and compliance monitoring." },
                { title: "Cybersecurity Threats", desc: "Financial institutions are prime targets for cyberattacks requiring robust security measures." },
                { title: "Digital Transformation", desc: "Legacy systems need modernization to meet digital-first customer expectations." },
                { title: "Customer Expectations", desc: "Customers demand seamless, personalized, and accessible financial services." }
              ].map((challenge, idx) => (
                <div key={idx} className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-white mb-2 font-montserrat">{challenge.title}</h4>
                  <p className="text-white/70 text-sm leading-relaxed font-montserrat">{challenge.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center font-nos">Why Choose Our Solutions?</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Compliance Ready", desc: "Built-in compliance with regional regulations" },
                { title: "Secure", desc: "Enterprise-grade security and data protection" },
                { title: "Scalable", desc: "Grow with your business needs" },
                { title: "Expert Support", desc: "Dedicated financial services specialists" }
              ].map((benefit, idx) => (
                <div key={idx} className="bg-black/40 backdrop-blur-sm border border-blue-500/30 rounded-xl p-6 text-center">
                  <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 mb-2 font-nos">
                    0{idx + 1}
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2 font-montserrat">{benefit.title}</h4>
                  <p className="text-white/70 text-sm font-montserrat">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-br from-blue-900/30 via-cyan-900/20 to-blue-900/30 border border-cyan-500/30 rounded-2xl p-10 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4 font-nos">Ready to Transform Your Financial Services?</h2>
            <p className="text-white/80 text-lg mb-8 font-montserrat max-w-2xl mx-auto">
              Let's discuss how our solutions can help your financial institution thrive in the digital age
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 font-semibold font-montserrat">
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


