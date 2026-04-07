"use client"

import { useEffect, useState } from "react"
import Header from "@/components/header"
import FloatingParticles from "@/components/floating-particles"
import Footer from "@/components/footer"
import { Brain, MessageSquare, Eye, Zap, CheckCircle, TrendingUp, Target, Sparkles, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function AIModulesPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const modules = [
    {
      icon: Brain,
      title: "Machine Learning",
      slug: "machine-learning",
      description: "Predictive analytics and pattern recognition for data-driven decisions",
      fullDescription: "Leverage the power of machine learning to analyze complex datasets, identify patterns, and make accurate predictions that drive business growth. Our ML models are trained on industry-specific data to deliver actionable insights.",
      color: "from-blue-500 to-cyan-500",
      borderColor: "border-blue-500/30",
      features: ["Predictive Models", "Data Analysis", "Pattern Recognition", "Anomaly Detection", "Forecasting"],
      useCases: ["Sales forecasting", "Customer behavior prediction", "Risk assessment", "Demand planning"]
    },
    {
      icon: MessageSquare,
      title: "Natural Language Processing",
      slug: "natural-language-processing",
      description: "Advanced text analysis and understanding for intelligent communication",
      fullDescription: "Transform unstructured text data into actionable insights with our NLP solutions. From sentiment analysis to automated content generation, enable your business to understand and communicate more effectively.",
      color: "from-purple-500 to-pink-500",
      borderColor: "border-purple-500/30",
      features: ["Text Analysis", "Sentiment Analysis", "Language Translation", "Chatbots", "Content Generation"],
      useCases: ["Customer support automation", "Social media monitoring", "Document analysis", "Multilingual communication"]
    },
    {
      icon: Eye,
      title: "Computer Vision",
      slug: "computer-vision",
      description: "Image recognition and visual analytics for enhanced insights",
      fullDescription: "Extract valuable information from images and videos using advanced computer vision technology. Automate visual inspections, enable quality control, and gain insights from visual data across your operations.",
      color: "from-cyan-500 to-blue-500",
      borderColor: "border-cyan-500/30",
      features: ["Image Recognition", "Object Detection", "Visual Analytics", "Quality Control", "Facial Recognition"],
      useCases: ["Quality inspection", "Security monitoring", "Medical imaging", "Retail analytics"]
    },
    {
      icon: Zap,
      title: "Automated Decision Making",
      slug: "automated-decision-making",
      description: "Intelligent workflow automation for seamless operations",
      fullDescription: "Enable intelligent automation across your business processes with AI-powered decision-making. Reduce manual intervention, improve accuracy, and accelerate business operations with automated workflows.",
      color: "from-orange-500 to-amber-500",
      borderColor: "border-orange-500/30",
      features: ["Workflow Automation", "Smart Decisions", "Process Optimization", "Rule Engine", "Real-time Processing"],
      useCases: ["Invoice processing", "Loan approval", "Fraud detection", "Resource allocation"]
    }
  ]

  const benefits = [
    { icon: TrendingUp, title: "Increased Efficiency", desc: "Automate repetitive tasks and processes" },
    { icon: Target, title: "Better Decisions", desc: "Data-driven insights for strategic planning" },
    { icon: Zap, title: "Cost Reduction", desc: "Reduce operational costs through automation" },
    { icon: Sparkles, title: "Innovation", desc: "Stay ahead with cutting-edge AI technology" }
  ]

  const stats = [
    { number: "95%", label: "Accuracy Rate", desc: "ML model accuracy" },
    { number: "80%", label: "Time Savings", desc: "Automation efficiency" },
    { number: "500+", label: "Deployments", desc: "Active implementations" },
    { number: "24/7", label: "Availability", desc: "Continuous operation" }
  ]

  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <Header />
      <FloatingParticles />
      
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-4 sm:px-6 md:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-cyan-900/20 to-pink-900/10"></div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="px-4 py-2 rounded-full border border-purple-500/50 bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-white text-sm font-montserrat shadow-[0_0_16px_rgba(139,92,246,0.5)]">
                AI Technology
              </span>
              <span className="px-3 py-1 bg-gradient-to-r from-orange-500 to-pink-500 text-white text-xs rounded-full font-bold font-montserrat">
                BETA
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 font-nos">
              <span className="inline-block relative">
                AI Modules
                <span className="absolute -bottom-3 left-0 w-full h-1.5 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 opacity-80"></span>
              </span>
            </h1>
            <p className="text-gray-300 text-xl md:text-2xl max-w-3xl mx-auto font-montserrat leading-relaxed">
              Cutting-edge artificial intelligence modules designed to automate processes, enhance decision-making, and drive innovation across your business
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:border-purple-500/50 transition-all duration-300">
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-2 font-nos">
                  {stat.number}
                </div>
                <div className="text-lg font-bold text-white mb-1 font-montserrat">{stat.label}</div>
                <div className="text-white/60 text-sm font-montserrat">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Intro Section */}
      <div className="relative py-16 px-4 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-10 md:p-12 mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-6 font-nos text-center">What Are AI Modules?</h2>
              <p className="text-white/80 text-lg leading-relaxed mb-4 font-montserrat">
                AI Modules are pre-built, customizable artificial intelligence components that can be seamlessly integrated into your business operations. Each module is designed to solve specific business challenges using cutting-edge AI technology, from machine learning to natural language processing.
              </p>
              <p className="text-white/70 leading-relaxed font-montserrat">
                Our AI Modules are powered by advanced algorithms trained on industry-specific data, ensuring high accuracy and relevance. Whether you need predictive analytics, intelligent automation, or advanced data processing, our modules can transform how your business operates.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* AI Modules Grid */}
      <div className="relative py-16 px-4 sm:px-6 md:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-cyan-900/10 to-transparent"></div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4 font-nos">Our AI Modules</h2>
            <p className="text-white/70 max-w-2xl mx-auto font-montserrat">
              Explore our comprehensive suite of AI-powered modules
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {modules.map((module, index) => {
              const Icon = module.icon
              return (
                <div
                  key={index}
                  className={`group relative bg-black/40 backdrop-blur-sm border ${module.borderColor} rounded-2xl p-10 hover:border-opacity-60 transition-all duration-500 hover:shadow-[0_0_40px_rgba(139,92,246,0.4)] overflow-hidden`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${module.color} opacity-0 group-hover:opacity-15 transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10">
                    <div className={`mb-6 w-16 h-16 rounded-xl bg-gradient-to-br ${module.color} flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4 font-montserrat">{module.title}</h3>
                    <p className="text-white/70 mb-6 leading-relaxed font-montserrat">{module.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-sm text-white/50 font-montserrat uppercase tracking-wide mb-3">Key Features:</h4>
                      <ul className="space-y-2 mb-6">
                        {module.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-white/70 font-montserrat">
                            <CheckCircle className={`w-4 h-4 text-transparent bg-clip-text bg-gradient-to-r ${module.color}`} />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm text-white/50 font-montserrat uppercase tracking-wide mb-3">Use Cases:</h4>
                      <div className="flex flex-wrap gap-2">
                        {module.useCases.map((useCase, idx) => (
                          <span key={idx} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-montserrat">
                            {useCase}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link href={`/ai-modules/${module.slug}`}>
                      <button className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 font-semibold font-montserrat group">
                        Learn More
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="relative py-16 px-4 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4 font-nos">Why Choose AI Modules?</h2>
            <p className="text-white/70 max-w-2xl mx-auto font-montserrat">
              The strategic advantages of AI-powered solutions
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon
              return (
                <div key={idx} className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:border-purple-500/50 transition-all duration-300">
                  <Icon className="w-10 h-10 text-purple-500 mx-auto mb-4" />
                  <h4 className="text-lg font-bold text-white mb-2 font-montserrat">{benefit.title}</h4>
                  <p className="text-white/70 text-sm leading-relaxed font-montserrat">{benefit.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Integration Section */}
      <div className="relative py-16 px-4 sm:px-6 md:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/10 via-purple-900/10 to-transparent"></div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="bg-gradient-to-br from-purple-900/30 via-cyan-900/20 to-pink-900/30 border border-purple-500/30 rounded-2xl p-10 md:p-12">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-6 font-nos text-center">Easy Integration</h2>
              <p className="text-white/80 text-lg leading-relaxed mb-6 font-montserrat text-center">
                Our AI Modules are designed for seamless integration into your existing systems. With robust APIs, comprehensive documentation, and dedicated support, you can start leveraging AI in your business in no time.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { title: "API Integration", desc: "RESTful APIs for easy integration" },
                  { title: "Documentation", desc: "Comprehensive guides and tutorials" },
                  { title: "Support", desc: "24/7 technical support available" }
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
      </div>

      {/* CTA Section */}
      <div className="relative py-16 px-4 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-br from-purple-900/30 via-pink-900/20 to-cyan-900/30 border border-purple-500/30 rounded-2xl p-10 md:p-12 text-center">
            <Sparkles className="w-16 h-16 text-purple-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4 font-nos">Ready to Transform with AI?</h2>
            <p className="text-white/80 text-lg mb-8 font-montserrat max-w-2xl mx-auto">
              Experience the power of artificial intelligence in your business operations. Start your AI journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 font-semibold font-montserrat">
                Get Started
              </button>
              <button className="px-8 py-4 border border-purple-500/50 text-white rounded-lg hover:bg-purple-500/10 transition-all duration-300 font-semibold font-montserrat">
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
