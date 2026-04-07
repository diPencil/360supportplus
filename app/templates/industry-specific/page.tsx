"use client"

import { useEffect, useState } from "react"
import Header from "@/components/header"
import FloatingParticles from "@/components/floating-particles"
import Footer from "@/components/footer"
import { Sparkles, CheckCircle, ArrowLeft, Building2, Heart, ShoppingCart, Factory, Download, Eye } from "lucide-react"
import Link from "next/link"

export default function IndustrySpecificTemplatesPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const industryTemplates = [
    {
      industry: "Healthcare",
      icon: Heart,
      templates: [
        { title: "Patient Intake Form", downloads: "850", rating: 4.7 },
        { title: "Medical Record Template", downloads: "920", rating: 4.8 },
        { title: "Appointment Schedule", downloads: "780", rating: 4.6 }
      ]
    },
    {
      industry: "Financial Services",
      icon: Building2,
      templates: [
        { title: "Loan Application Form", downloads: "1.1K", rating: 4.8 },
        { title: "Compliance Report", downloads: "950", rating: 4.7 },
        { title: "Risk Assessment Form", downloads: "820", rating: 4.6 }
      ]
    },
    {
      industry: "Retail & E-commerce",
      icon: ShoppingCart,
      templates: [
        { title: "Product Catalog Template", downloads: "1.3K", rating: 4.9 },
        { title: "Inventory Management", downloads: "1.1K", rating: 4.8 },
        { title: "Customer Order Form", downloads: "980", rating: 4.7 }
      ]
    },
    {
      industry: "Manufacturing",
      icon: Factory,
      templates: [
        { title: "Quality Control Checklist", downloads: "890", rating: 4.7 },
        { title: "Production Report", downloads: "760", rating: 4.6 },
        { title: "Supply Chain Template", downloads: "840", rating: 4.8 }
      ]
    }
  ]

  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <Header />
      <FloatingParticles />
      
      <div className="relative pt-32 pb-20 px-4 sm:px-6 md:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-green-900/20 via-emerald-900/10 to-transparent"></div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <Link href="/templates" className="inline-flex items-center gap-2 text-green-500 hover:text-green-400 transition-colors mb-8 font-montserrat">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Templates</span>
          </Link>

          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 mb-6 shadow-xl">
              <Sparkles className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 font-nos">
              Industry-Specific Templates
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto font-montserrat leading-relaxed">
              Specialized templates tailored for specific industries across MENA region
            </p>
          </div>

          <div className="bg-black/40 backdrop-blur-sm border border-green-500/30 rounded-2xl p-10 md:p-12 mb-16">
            <h2 className="text-2xl font-bold text-white mb-6 font-nos">Overview</h2>
            <p className="text-white/80 text-lg leading-relaxed mb-4 font-montserrat">
              Our Industry-Specific Templates collection provides specialized templates designed for unique requirements of different industries across the MENA region. From healthcare forms to financial compliance documents, these templates are crafted by industry experts.
            </p>
            <p className="text-white/70 leading-relaxed font-montserrat">
              All templates comply with regional industry standards and regulations, ensuring your documentation meets all necessary requirements.
            </p>
          </div>

          <div className="space-y-8">
            {industryTemplates.map((industry, idx) => {
              const Icon = industry.icon
              return (
                <div key={idx} className="bg-black/40 backdrop-blur-sm border border-green-500/30 rounded-xl p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-white font-montserrat">{industry.industry}</h2>
                  </div>
                  <div className="grid md:grid-cols-3 gap-6">
                    {industry.templates.map((template, tIdx) => (
                      <div
                        key={tIdx}
                        className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-green-500/50 transition-all duration-300"
                      >
                        <h3 className="text-lg font-bold text-white mb-3 font-montserrat">{template.title}</h3>
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-2 text-white/60 text-sm font-montserrat">
                            <Download className="w-3 h-3" />
                            <span>{template.downloads}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <span className="text-yellow-500">★</span>
                            <span className="text-white/60 text-sm font-montserrat">{template.rating}</span>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <button className="flex-1 px-3 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold font-montserrat text-sm">
                            Download
                          </button>
                          <button className="px-3 py-2 border border-white/10 text-white rounded-lg hover:bg-white/10 transition-all duration-300 font-montserrat text-sm">
                            <Eye className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}


