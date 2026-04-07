"use client"

import { useEffect, useState } from "react"
import Header from "@/components/header"
import FloatingParticles from "@/components/floating-particles"
import Footer from "@/components/footer"
import { Briefcase, CheckCircle, ArrowLeft, DollarSign, FileText, TrendingUp, Shield } from "lucide-react"
import Link from "next/link"

export default function FinanceServicePage() {
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

          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 mb-6 shadow-xl">
              <Briefcase className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 font-nos">
              Finance Services
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto font-montserrat leading-relaxed">
              Financial management, accounting, and compliance solutions for businesses of all sizes
            </p>
          </div>

          <div className="bg-black/40 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-10 md:p-12 mb-16">
            <h2 className="text-2xl font-bold text-white mb-6 font-nos">Overview</h2>
            <p className="text-white/80 text-lg leading-relaxed mb-4 font-montserrat">
              Our Finance Services provide comprehensive financial management solutions that help businesses streamline accounting operations, ensure regulatory compliance, and make data-driven financial decisions. From bookkeeping to financial reporting, we offer end-to-end finance solutions.
            </p>
            <p className="text-white/70 leading-relaxed font-montserrat">
              Whether you're a startup or an established enterprise, our finance solutions scale with your business and adapt to your industry's specific requirements.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center font-nos">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: DollarSign,
                  title: "Accounting Management",
                  desc: "Comprehensive accounting solutions including general ledger, accounts payable/receivable, and financial transactions management.",
                  features: ["General ledger", "Accounts payable", "Accounts receivable", "Transaction tracking"]
                },
                {
                  icon: FileText,
                  title: "Financial Reporting",
                  desc: "Automated financial reporting with real-time dashboards, profit & loss statements, balance sheets, and cash flow reports.",
                  features: ["P&L statements", "Balance sheets", "Cash flow reports", "Financial dashboards"]
                },
                {
                  icon: Shield,
                  title: "Compliance & Audit",
                  desc: "Ensure compliance with financial regulations and prepare for audits with comprehensive compliance management tools.",
                  features: ["Regulatory compliance", "Audit preparation", "Tax management", "Documentation"]
                },
                {
                  icon: TrendingUp,
                  title: "Financial Analytics",
                  desc: "Advanced analytics and insights to understand financial performance, identify trends, and make informed decisions.",
                  features: ["Performance analytics", "Trend analysis", "Budget forecasting", "Financial insights"]
                }
              ].map((feature, idx) => {
                const Icon = feature.icon
                return (
                  <div key={idx} className="bg-black/40 backdrop-blur-sm border border-blue-500/30 rounded-xl p-8 hover:border-cyan-500/50 transition-all duration-300">
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

          <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border border-blue-500/30 rounded-2xl p-10 md:p-12 mb-16">
            <h2 className="text-2xl font-bold text-white mb-6 font-nos">Benefits</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Improved Accuracy", desc: "Reduce errors with automated processes" },
                { title: "Time Savings", desc: "Streamline financial operations" },
                { title: "Better Decisions", desc: "Data-driven financial insights" },
                { title: "Compliance Ready", desc: "Stay compliant with regulations" },
                { title: "Real-time Visibility", desc: "Monitor finances in real-time" },
                { title: "Scalable", desc: "Grow with your business" }
              ].map((benefit, idx) => (
                <div key={idx} className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-white mb-2 font-montserrat">{benefit.title}</h4>
                  <p className="text-white/70 text-sm leading-relaxed font-montserrat">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-900/30 via-cyan-900/20 to-blue-900/30 border border-cyan-500/30 rounded-2xl p-10 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4 font-nos">Ready to Optimize Your Finance Operations?</h2>
            <p className="text-white/80 text-lg mb-8 font-montserrat max-w-2xl mx-auto">
              Let's discuss how our finance solutions can streamline your financial management
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


