"use client"

import { useEffect, useState } from "react"
import Header from "@/components/header"
import FloatingParticles from "@/components/floating-particles"
import Footer from "@/components/footer"
import { Brain, CheckCircle, ArrowLeft, TrendingUp, Target, BarChart3, Zap } from "lucide-react"
import Link from "next/link"

export default function MachineLearningPage() {
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
          <Link href="/ai-modules" className="inline-flex items-center gap-2 text-cyan-500 hover:text-cyan-400 transition-colors mb-8 font-montserrat">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to AI Modules</span>
          </Link>

          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 mb-6 shadow-xl">
              <Brain className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 font-nos">
              Machine Learning Module
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto font-montserrat leading-relaxed">
              Predictive analytics and pattern recognition for data-driven decisions
            </p>
          </div>

          <div className="bg-black/40 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-10 md:p-12 mb-16">
            <h2 className="text-2xl font-bold text-white mb-6 font-nos">Overview</h2>
            <p className="text-white/80 text-lg leading-relaxed mb-4 font-montserrat">
              Our Machine Learning Module leverages advanced algorithms to analyze complex datasets, identify patterns, and make accurate predictions that drive business growth. Trained on industry-specific data, our ML models deliver actionable insights tailored to your business needs.
            </p>
            <p className="text-white/70 leading-relaxed font-montserrat">
              From sales forecasting to customer behavior prediction, our Machine Learning solutions help you make informed decisions based on data rather than intuition.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center font-nos">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: TrendingUp,
                  title: "Predictive Models",
                  desc: "Build and deploy predictive models that forecast trends, identify opportunities, and anticipate challenges with high accuracy.",
                  features: ["Time series forecasting", "Regression analysis", "Classification models", "Model training"]
                },
                {
                  icon: BarChart3,
                  title: "Data Analysis",
                  desc: "Advanced data analysis capabilities that process large datasets, identify correlations, and extract meaningful insights.",
                  features: ["Statistical analysis", "Data preprocessing", "Feature engineering", "Data visualization"]
                },
                {
                  icon: Target,
                  title: "Pattern Recognition",
                  desc: "Automatically identify patterns and anomalies in your data to detect trends, outliers, and opportunities.",
                  features: ["Pattern detection", "Anomaly detection", "Cluster analysis", "Association rules"]
                },
                {
                  icon: Zap,
                  title: "Forecasting",
                  desc: "Accurate forecasting capabilities for sales, demand, financial trends, and other business metrics.",
                  features: ["Demand forecasting", "Sales prediction", "Financial forecasting", "Trend analysis"]
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
            <h2 className="text-2xl font-bold text-white mb-6 font-nos">Use Cases</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Sales Forecasting", desc: "Predict future sales based on historical data and market trends" },
                { title: "Customer Behavior", desc: "Analyze customer patterns to predict preferences and churn" },
                { title: "Risk Assessment", desc: "Evaluate risks and opportunities in financial and operational decisions" },
                { title: "Demand Planning", desc: "Forecast demand to optimize inventory and supply chain management" }
              ].map((useCase, idx) => (
                <div key={idx} className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-white mb-2 font-montserrat">{useCase.title}</h4>
                  <p className="text-white/70 text-sm leading-relaxed font-montserrat">{useCase.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-900/30 via-cyan-900/20 to-blue-900/30 border border-cyan-500/30 rounded-2xl p-10 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4 font-nos">Ready to Leverage Machine Learning?</h2>
            <p className="text-white/80 text-lg mb-8 font-montserrat max-w-2xl mx-auto">
              Transform your business with predictive analytics and data-driven insights
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


