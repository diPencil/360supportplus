"use client"

import { useEffect, useState } from "react"
import Header from "@/components/header"
import FloatingParticles from "@/components/floating-particles"
import Footer from "@/components/footer"
import { Globe, Languages, Shield, CheckCircle, Sparkles, TrendingUp, Target, Zap, Brain, Award, MapPin, BookOpen, Users } from "lucide-react"

export default function AIMENAModelPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const features = [
    {
      icon: Globe,
      title: "Regional Expertise",
      description: "Trained on MENA-specific data and business practices",
      fullDescription: "Our AI MENA Model has been extensively trained on regional business data, cultural contexts, and market dynamics specific to the Middle East and North Africa. This deep regional understanding ensures that the model provides contextually relevant and accurate responses.",
      color: "from-blue-500 to-cyan-500",
      borderColor: "border-blue-500/30",
      details: ["Regional business practices", "Market dynamics", "Cultural understanding", "Local regulations"]
    },
    {
      icon: Languages,
      title: "Multi-Language Support",
      description: "Advanced support for Arabic, English, and regional languages",
      fullDescription: "Seamlessly communicate in Arabic, English, and regional dialects with our advanced language processing. The model understands context, idioms, and business terminology in multiple languages.",
      color: "from-purple-500 to-pink-500",
      borderColor: "border-purple-500/30",
      details: ["Arabic language processing", "English support", "Regional dialects", "Contextual understanding"]
    },
    {
      icon: Shield,
      title: "Compliance Ready",
      description: "Built with regional regulations and standards in mind",
      fullDescription: "Designed to comply with regional data protection laws, banking regulations, and business standards. Ensure your AI implementations meet all regulatory requirements.",
      color: "from-cyan-500 to-blue-500",
      borderColor: "border-cyan-500/30",
      details: ["Data protection compliance", "Banking regulations", "Business standards", "Audit ready"]
    }
  ]

  const capabilities = [
    {
      icon: Brain,
      title: "Business Intelligence",
      desc: "Understand MENA business context and provide strategic insights",
      color: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/30"
    },
    {
      icon: BookOpen,
      title: "Document Analysis",
      desc: "Process Arabic and English documents with high accuracy",
      color: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/30"
    },
    {
      icon: Users,
      title: "Customer Service",
      desc: "Provide culturally-aware customer support in multiple languages",
      color: "from-cyan-500/20 to-blue-500/20",
      borderColor: "border-cyan-500/30"
    },
    {
      icon: MapPin,
      title: "Market Analysis",
      desc: "Analyze MENA market trends and opportunities",
      color: "from-pink-500/20 to-orange-500/20",
      borderColor: "border-pink-500/30"
    }
  ]

  const stats = [
    { number: "100M+", label: "Data Points", desc: "Trained on extensive regional data", icon: TrendingUp },
    { number: "20+", label: "Languages", desc: "Arabic dialects and English", icon: Languages },
    { number: "15+", label: "Countries", desc: "Covering MENA region", icon: MapPin },
    { number: "Enterprise", label: "Deployment Ready", desc: "Built for production workloads", icon: Award }
  ]

  const useCases = [
    {
      industry: "Financial Services",
      useCase: "Arabic-language financial document analysis and compliance reporting",
      benefit: "Faster review cycles and stronger consistency across compliance workflows"
    },
    {
      industry: "Healthcare",
      useCase: "Multilingual patient communication and medical record processing",
      benefit: "More consistent patient communication across languages and channels"
    },
    {
      industry: "Retail",
      useCase: "Arabic customer service chatbots and market trend analysis",
      benefit: "Clearer customer interactions through localized language support"
    },
    {
      industry: "Government",
      useCase: "Arabic document processing and regulatory compliance automation",
      benefit: "Lower manual overhead for recurring document and compliance tasks"
    }
  ]

  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <Header />
      <FloatingParticles />
      
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-4 sm:px-6 md:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/20 via-purple-900/20 to-pink-900/10"></div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="px-4 py-2 rounded-full border border-cyan-500/50 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-white text-sm font-montserrat shadow-[0_0_16px_rgba(6,182,212,0.5)]">
                MENA AI Model
              </span>
              <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs rounded-full font-bold font-montserrat animate-pulse">
                NEW
              </span>
            </div>
            <div className="flex items-center justify-center gap-3 mb-6">
              <Sparkles className="w-8 h-8 text-cyan-500" />
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white font-nos">
                AI MENA Model
              </h1>
              <Sparkles className="w-8 h-8 text-blue-500" />
            </div>
            <p className="text-gray-300 text-xl md:text-2xl max-w-3xl mx-auto font-montserrat leading-relaxed">
              Specialized AI model trained on Middle East and North Africa business context, cultural nuances, and regulatory environment
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, idx) => {
              const Icon = stat.icon
              return (
                <div key={idx} className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:border-cyan-500/50 transition-all duration-300 group">
                  <Icon className={`w-8 h-8 text-cyan-500 mx-auto mb-3 group-hover:scale-110 transition-transform`} />
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 mb-2 font-nos">
                    {stat.number}
                  </div>
                  <div className="text-lg font-bold text-white mb-1 font-montserrat">{stat.label}</div>
                  <div className="text-white/60 text-sm font-montserrat">{stat.desc}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Intro Section */}
      <div className="relative py-16 px-4 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-10 md:p-12 mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-6 font-nos text-center">Purpose-Built AI for MENA</h2>
              <p className="text-white/80 text-lg leading-relaxed mb-4 font-montserrat">
                The AI MENA Model represents a breakthrough in artificial intelligence, specifically designed to understand and navigate the unique business landscape of the Middle East and North Africa region. Unlike generic AI models, our MENA-specific model has been trained on vast datasets encompassing regional business practices, cultural nuances, regulatory frameworks, and linguistic patterns.
              </p>
              <p className="text-white/70 leading-relaxed font-montserrat">
                The model has been developed with input from regional specialists and implementation teams to improve cultural relevance and operational fit. Early pilots highlighted better handling of MENA business terminology, policy-sensitive workflows, and bilingual communication compared with generic baselines.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Key Features */}
      <div className="relative py-16 px-4 sm:px-6 md:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/10 via-blue-900/10 to-purple-900/10"></div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4 font-nos">Key Features</h2>
            <p className="text-white/70 max-w-2xl mx-auto font-montserrat">
              What makes the AI MENA Model unique
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className={`group relative bg-black/40 backdrop-blur-sm border ${feature.borderColor} rounded-2xl p-10 hover:border-opacity-60 transition-all duration-500 hover:shadow-[0_0_40px_rgba(6,182,212,0.4)]`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-15 transition-opacity duration-500 rounded-2xl`}></div>
                  
                  <div className="relative z-10">
                    <div className={`mb-6 w-20 h-20 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-xl mx-auto group-hover:scale-110 transition-transform`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-4 font-montserrat text-center">{feature.title}</h3>
                    <p className="text-white/70 leading-relaxed mb-6 font-montserrat text-center">{feature.description}</p>
                    
                    <div className="space-y-2">
                      <h4 className="text-sm text-white/50 font-montserrat uppercase tracking-wide mb-3">Includes:</h4>
                      {feature.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-white/70 font-montserrat">
                          <CheckCircle className={`w-4 h-4 bg-gradient-to-br ${feature.color} bg-clip-text text-transparent`} />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Capabilities */}
      <div className="relative py-16 px-4 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4 font-nos">What You Can Do</h2>
            <p className="text-white/70 max-w-2xl mx-auto font-montserrat">
              Powerful capabilities designed for MENA businesses
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {capabilities.map((capability, idx) => {
              const Icon = capability.icon
              return (
                <div
                  key={idx}
                  className={`group bg-gradient-to-br ${capability.color} backdrop-blur-sm border ${capability.borderColor} rounded-xl p-8 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] transition-all duration-300`}
                >
                  <Icon className="w-12 h-12 text-cyan-500 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3 font-montserrat">{capability.title}</h3>
                  <p className="text-white/80 leading-relaxed font-montserrat">{capability.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Use Cases */}
      <div className="relative py-16 px-4 sm:px-6 md:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 via-purple-900/10 to-transparent"></div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4 font-nos">Real-World Success Stories</h2>
            <p className="text-white/70 max-w-2xl mx-auto font-montserrat">
              How businesses are leveraging the AI MENA Model
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {useCases.map((case_, idx) => (
              <div
                key={idx}
                className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-white/60 font-montserrat uppercase tracking-wide">{case_.industry}</div>
                    <h4 className="text-lg font-bold text-white font-montserrat">{case_.useCase}</h4>
                  </div>
                </div>
                <p className="text-white/80 leading-relaxed font-montserrat mb-4">{case_.useCase}</p>
                <div className="flex items-center gap-2 text-cyan-400 text-sm font-montserrat">
                  <TrendingUp className="w-4 h-4" />
                  <span className="font-semibold">{case_.benefit}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Technical Details */}
      <div className="relative py-16 px-4 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="bg-gradient-to-br from-cyan-900/30 via-blue-900/20 to-purple-900/30 border border-cyan-500/30 rounded-2xl p-10 md:p-12">
            <h2 className="text-2xl font-bold text-white mb-6 font-nos text-center">Technical Excellence</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Training Data", desc: "100M+ data points from MENA region" },
                { title: "Model Architecture", desc: "Transformer-based architecture tuned for enterprise tasks" },
                { title: "Languages Supported", desc: "Arabic, English, and 20+ regional dialects" },
                { title: "Evaluation", desc: "Validated through regional pilot programs and QA review" },
                { title: "Response Time", desc: "Sub-second response times for real-time applications" },
                { title: "Compliance", desc: "Built-in compliance with regional regulations" }
              ].map((item, idx) => (
                <div key={idx} className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                  <h4 className="text-lg font-bold text-white mb-2 font-montserrat">{item.title}</h4>
                  <p className="text-white/70 text-sm font-montserrat">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="relative py-16 px-4 sm:px-6 md:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-cyan-900/10 to-blue-900/10"></div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4 font-nos">Why Choose AI MENA Model?</h2>
            <p className="text-white/70 max-w-2xl mx-auto font-montserrat">
              The strategic advantages of MENA-specific AI
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Zap, title: "40% More Efficient", desc: "Compared to generic AI models" },
              { icon: Target, title: "98% Accuracy", desc: "In regional business context" },
              { icon: Globe, title: "Cultural Awareness", desc: "Understands MENA business culture" },
              { icon: Shield, title: "Compliance Built-in", desc: "Meets regional regulations" }
            ].map((benefit, idx) => {
              const Icon = benefit.icon
              return (
                <div key={idx} className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:border-cyan-500/50 transition-all duration-300">
                  <Icon className="w-10 h-10 text-cyan-500 mx-auto mb-4" />
                  <h4 className="text-lg font-bold text-white mb-2 font-montserrat">{benefit.title}</h4>
                  <p className="text-white/70 text-sm font-montserrat">{benefit.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-16 px-4 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-br from-cyan-900/30 via-blue-900/20 to-purple-900/30 border border-cyan-500/30 rounded-2xl p-10 md:p-12 text-center">
            <Brain className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4 font-nos">Ready to Experience MENA-Specific AI?</h2>
            <p className="text-white/80 text-lg mb-8 font-montserrat max-w-2xl mx-auto">
              Discover how the AI MENA Model can transform your business operations with region-specific intelligence and cultural understanding
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 font-semibold font-montserrat">
                Get Started
              </button>
              <button className="px-8 py-4 border border-cyan-500/50 text-white rounded-lg hover:bg-cyan-500/10 transition-all duration-300 font-semibold font-montserrat">
                Request Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
