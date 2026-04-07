"use client"

import { useEffect, useState } from "react"
import Header from "@/components/header"
import FloatingParticles from "@/components/floating-particles"
import Footer from "@/components/footer"
import { Zap, CheckCircle, ArrowLeft, Settings, Target, Workflow, Rocket } from "lucide-react"
import Link from "next/link"

export default function AutomatedDecisionMakingPage() {
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
          <Link href="/ai-modules" className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-400 transition-colors mb-8 font-montserrat">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to AI Modules</span>
          </Link>

          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 mb-6 shadow-xl">
              <Zap className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 font-nos">
              Automated Decision Making
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto font-montserrat leading-relaxed">
              Intelligent workflow automation for seamless operations
            </p>
          </div>

          <div className="bg-black/40 backdrop-blur-sm border border-orange-500/30 rounded-2xl p-10 md:p-12 mb-16">
            <h2 className="text-2xl font-bold text-white mb-6 font-nos">Overview</h2>
            <p className="text-white/80 text-lg leading-relaxed mb-4 font-montserrat">
              Our Automated Decision Making Module enables intelligent automation across your business processes with AI-powered decision-making. Reduce manual intervention, improve accuracy, and accelerate business operations with automated workflows that learn and adapt.
            </p>
            <p className="text-white/70 leading-relaxed font-montserrat">
              From invoice processing to loan approvals, our automated decision-making solutions handle complex business logic while maintaining transparency and explainability.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center font-nos">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: Workflow,
                  title: "Workflow Automation",
                  desc: "Automate complex business processes with intelligent workflows that adapt to changing conditions.",
                  features: ["Process automation", "Conditional logic", "Exception handling", "Workflow orchestration"]
                },
                {
                  icon: Target,
                  title: "Smart Decisions",
                  desc: "Make intelligent decisions based on data analysis, rules, and machine learning models.",
                  features: ["Rule-based decisions", "ML-powered decisions", "Multi-criteria analysis", "Decision logging"]
                },
                {
                  icon: Settings,
                  title: "Process Optimization",
                  desc: "Continuously optimize processes by learning from outcomes and adjusting decision parameters.",
                  features: ["Performance monitoring", "Optimization algorithms", "A/B testing", "Continuous improvement"]
                },
                {
                  icon: Rocket,
                  title: "Real-time Processing",
                  desc: "Process decisions in real-time with minimal latency for time-sensitive operations.",
                  features: ["Real-time execution", "Low latency", "High throughput", "Scalable architecture"]
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
            <h2 className="text-2xl font-bold text-white mb-6 font-nos">Use Cases</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Invoice Processing", desc: "Automatically process invoices, validate data, and route for approval" },
                { title: "Loan Approval", desc: "Intelligent loan approval systems based on risk assessment and policies" },
                { title: "Fraud Detection", desc: "Real-time fraud detection and prevention using pattern recognition" },
                { title: "Resource Allocation", desc: "Automatically allocate resources based on demand and availability" }
              ].map((useCase, idx) => (
                <div key={idx} className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-white mb-2 font-montserrat">{useCase.title}</h4>
                  <p className="text-white/70 text-sm leading-relaxed font-montserrat">{useCase.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-900/30 via-amber-900/20 to-orange-900/30 border border-orange-500/30 rounded-2xl p-10 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4 font-nos">Ready to Automate Decisions?</h2>
            <p className="text-white/80 text-lg mb-8 font-montserrat max-w-2xl mx-auto">
              Transform your business operations with intelligent automated decision-making
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


