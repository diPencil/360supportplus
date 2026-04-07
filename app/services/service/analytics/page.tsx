"use client"

import { useEffect, useState } from "react"
import Header from "@/components/header"
import FloatingParticles from "@/components/floating-particles"
import Footer from "@/components/footer"
import { BarChart3, CheckCircle, ArrowLeft, TrendingUp, PieChart, Target, Zap } from "lucide-react"
import Link from "next/link"

export default function AnalyticsServicePage() {
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
        <div className="absolute inset-0 bg-gradient-to-b from-green-900/20 via-emerald-900/10 to-transparent"></div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <Link href="/services" className="inline-flex items-center gap-2 text-green-500 hover:text-green-400 transition-colors mb-8 font-montserrat">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Services</span>
          </Link>

          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 mb-6 shadow-xl">
              <BarChart3 className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 font-nos">
              Analytics Services
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto font-montserrat leading-relaxed">
              Business intelligence, data analytics, and insights solutions for data-driven decisions
            </p>
          </div>

          <div className="bg-black/40 backdrop-blur-sm border border-green-500/30 rounded-2xl p-10 md:p-12 mb-16">
            <h2 className="text-2xl font-bold text-white mb-6 font-nos">Overview</h2>
            <p className="text-white/80 text-lg leading-relaxed mb-4 font-montserrat">
              Our Analytics Services provide comprehensive business intelligence and data analytics solutions that help businesses transform data into actionable insights. From data collection to visualization, we offer end-to-end analytics solutions.
            </p>
            <p className="text-white/70 leading-relaxed font-montserrat">
              Our solutions include data warehousing, business intelligence, predictive analytics, reporting dashboards, and data visualization.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center font-nos">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: TrendingUp,
                  title: "Business Intelligence",
                  desc: "Comprehensive BI solutions that transform raw data into actionable business insights and strategic recommendations.",
                  features: ["Data visualization", "Interactive dashboards", "KPI tracking", "Business insights"]
                },
                {
                  icon: PieChart,
                  title: "Data Analytics",
                  desc: "Advanced analytics solutions including predictive analytics, statistical analysis, and data mining for deep insights.",
                  features: ["Predictive analytics", "Statistical analysis", "Data mining", "Pattern recognition"]
                },
                {
                  icon: Target,
                  title: "Performance Dashboards",
                  desc: "Real-time performance dashboards that track key metrics, KPIs, and business performance indicators.",
                  features: ["Real-time metrics", "KPI dashboards", "Performance tracking", "Custom reports"]
                },
                {
                  icon: Zap,
                  title: "Data Integration",
                  desc: "Seamless data integration from multiple sources, ensuring unified analytics across all business systems.",
                  features: ["Data integration", "ETL processes", "Data quality", "Unified analytics"]
                }
              ].map((feature, idx) => {
                const Icon = feature.icon
                return (
                  <div key={idx} className="bg-black/40 backdrop-blur-sm border border-green-500/30 rounded-xl p-8 hover:border-emerald-500/50 transition-all duration-300">
                    <Icon className="w-10 h-10 text-green-500 mb-4" />
                    <h3 className="text-xl font-bold text-white mb-3 font-montserrat">{feature.title}</h3>
                    <p className="text-white/70 leading-relaxed mb-4 font-montserrat">{feature.desc}</p>
                    <ul className="space-y-2">
                      {feature.features.map((item, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-2 text-sm text-white/60 font-montserrat">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 border border-green-500/30 rounded-2xl p-10 md:p-12 mb-16">
            <h2 className="text-2xl font-bold text-white mb-6 font-nos">Benefits</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Data-Driven Decisions", desc: "Make informed decisions based on data" },
                { title: "Real-Time Insights", desc: "Access insights in real-time" },
                { title: "Competitive Advantage", desc: "Gain competitive edge with analytics" },
                { title: "Efficiency", desc: "Optimize operations with insights" },
                { title: "Predictive Power", desc: "Forecast trends and outcomes" },
                { title: "Visualization", desc: "Understand data through visuals" }
              ].map((benefit, idx) => (
                <div key={idx} className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-white mb-2 font-montserrat">{benefit.title}</h4>
                  <p className="text-white/70 text-sm leading-relaxed font-montserrat">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-900/30 via-emerald-900/20 to-green-900/30 border border-green-500/30 rounded-2xl p-10 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4 font-nos">Ready to Unlock Your Data Potential?</h2>
            <p className="text-white/80 text-lg mb-8 font-montserrat max-w-2xl mx-auto">
              Let's discuss how our analytics solutions can transform your business intelligence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300 font-semibold font-montserrat">
                Get Started
              </button>
              <button className="px-8 py-3 border border-green-500/50 text-white rounded-lg hover:bg-green-500/10 transition-all duration-300 font-semibold font-montserrat">
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


