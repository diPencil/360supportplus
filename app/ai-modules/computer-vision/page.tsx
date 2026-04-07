"use client"

import { useEffect, useState } from "react"
import Header from "@/components/header"
import FloatingParticles from "@/components/floating-particles"
import Footer from "@/components/footer"
import { Eye, CheckCircle, ArrowLeft, Camera, Search, Scan, Shield } from "lucide-react"
import Link from "next/link"

export default function ComputerVisionPage() {
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
          <Link href="/ai-modules" className="inline-flex items-center gap-2 text-cyan-500 hover:text-cyan-400 transition-colors mb-8 font-montserrat">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to AI Modules</span>
          </Link>

          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 mb-6 shadow-xl">
              <Eye className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 font-nos">
              Computer Vision Module
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto font-montserrat leading-relaxed">
              Image recognition and visual analytics for enhanced insights
            </p>
          </div>

          <div className="bg-black/40 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-10 md:p-12 mb-16">
            <h2 className="text-2xl font-bold text-white mb-6 font-nos">Overview</h2>
            <p className="text-white/80 text-lg leading-relaxed mb-4 font-montserrat">
              Our Computer Vision Module extracts valuable information from images and videos using advanced visual recognition technology. Automate visual inspections, enable quality control, and gain insights from visual data across your operations.
            </p>
            <p className="text-white/70 leading-relaxed font-montserrat">
              From manufacturing quality control to retail analytics, our computer vision solutions process visual data with reliable performance and practical response times.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center font-nos">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: Camera,
                  title: "Image Recognition",
                  desc: "Identify and classify objects, scenes, and patterns in images with high accuracy.",
                  features: ["Object classification", "Scene understanding", "Pattern recognition", "Custom models"]
                },
                {
                  icon: Search,
                  title: "Object Detection",
                  desc: "Detect and locate multiple objects within images and video streams in real-time.",
                  features: ["Multi-object detection", "Real-time processing", "Bounding box detection", "Tracking"]
                },
                {
                  icon: Scan,
                  title: "Visual Analytics",
                  desc: "Extract insights and metrics from visual data to inform business decisions.",
                  features: ["Visual insights", "Metric extraction", "Trend analysis", "Reporting"]
                },
                {
                  icon: Shield,
                  title: "Quality Control",
                  desc: "Automated quality inspection and defect detection for manufacturing and production.",
                  features: ["Defect detection", "Quality scoring", "Automated inspection", "Alert systems"]
                }
              ].map((feature, idx) => {
                const Icon = feature.icon
                return (
                  <div key={idx} className="bg-black/40 backdrop-blur-sm border border-cyan-500/30 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300">
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

          <div className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 border border-cyan-500/30 rounded-2xl p-10 md:p-12 mb-16">
            <h2 className="text-2xl font-bold text-white mb-6 font-nos">Use Cases</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Quality Inspection", desc: "Automated quality control in manufacturing and production lines" },
                { title: "Security Monitoring", desc: "Intelligent surveillance and threat detection systems" },
                { title: "Medical Imaging", desc: "Analysis of medical images for diagnosis and treatment planning" },
                { title: "Retail Analytics", desc: "Customer behavior analysis and inventory management through visual data" }
              ].map((useCase, idx) => (
                <div key={idx} className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-white mb-2 font-montserrat">{useCase.title}</h4>
                  <p className="text-white/70 text-sm leading-relaxed font-montserrat">{useCase.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-900/30 via-blue-900/20 to-cyan-900/30 border border-cyan-500/30 rounded-2xl p-10 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4 font-nos">Ready to See the Future?</h2>
            <p className="text-white/80 text-lg mb-8 font-montserrat max-w-2xl mx-auto">
              Unlock insights from visual data with advanced computer vision technology
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


