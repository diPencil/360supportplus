"use client"

import { useEffect, useState } from "react"
import Header from "@/components/header"
import FloatingParticles from "@/components/floating-particles"
import Footer from "@/components/footer"
import { MessageSquare, CheckCircle, ArrowLeft, Languages, Brain, FileText, Users } from "lucide-react"
import Link from "next/link"

export default function NaturalLanguageProcessingPage() {
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
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-pink-900/10 to-transparent"></div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <Link href="/ai-modules" className="inline-flex items-center gap-2 text-purple-500 hover:text-purple-400 transition-colors mb-8 font-montserrat">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to AI Modules</span>
          </Link>

          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 mb-6 shadow-xl">
              <MessageSquare className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 font-nos">
              Natural Language Processing
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto font-montserrat leading-relaxed">
              Advanced text analysis and understanding for intelligent communication
            </p>
          </div>

          <div className="bg-black/40 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-10 md:p-12 mb-16">
            <h2 className="text-2xl font-bold text-white mb-6 font-nos">Overview</h2>
            <p className="text-white/80 text-lg leading-relaxed mb-4 font-montserrat">
              Our Natural Language Processing Module transforms unstructured text data into actionable insights. From sentiment analysis to automated content generation, enable your business to understand and communicate more effectively across multiple languages and contexts.
            </p>
            <p className="text-white/70 leading-relaxed font-montserrat">
              Whether processing customer feedback, analyzing documents, or automating communication, our NLP solutions provide deep understanding of human language in business contexts.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center font-nos">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: Languages,
                  title: "Text Analysis",
                  desc: "Comprehensive text analysis including entity recognition, keyword extraction, and semantic understanding.",
                  features: ["Entity recognition", "Keyword extraction", "Semantic analysis", "Topic modeling"]
                },
                {
                  icon: Brain,
                  title: "Sentiment Analysis",
                  desc: "Analyze customer sentiment, opinions, and emotions from text data across multiple channels.",
                  features: ["Emotion detection", "Opinion mining", "Sentiment scoring", "Trend analysis"]
                },
                {
                  icon: FileText,
                  title: "Language Translation",
                  desc: "High-accuracy translation between multiple languages with context preservation.",
                  features: ["Multi-language support", "Context preservation", "Real-time translation", "Custom dictionaries"]
                },
                {
                  icon: Users,
                  title: "Chatbots & Virtual Assistants",
                  desc: "Build intelligent conversational interfaces that understand natural language and context.",
                  features: ["Intent recognition", "Context awareness", "Multi-turn conversations", "Personalization"]
                }
              ].map((feature, idx) => {
                const Icon = feature.icon
                return (
                  <div key={idx} className="bg-black/40 backdrop-blur-sm border border-purple-500/30 rounded-xl p-8 hover:border-pink-500/50 transition-all duration-300">
                    <Icon className="w-10 h-10 text-purple-500 mb-4" />
                    <h3 className="text-xl font-bold text-white mb-3 font-montserrat">{feature.title}</h3>
                    <p className="text-white/70 leading-relaxed mb-4 font-montserrat">{feature.desc}</p>
                    <ul className="space-y-2">
                      {feature.features.map((item, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-2 text-sm text-white/60 font-montserrat">
                          <CheckCircle className="w-4 h-4 text-purple-500 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/30 rounded-2xl p-10 md:p-12 mb-16">
            <h2 className="text-2xl font-bold text-white mb-6 font-nos">Use Cases</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Customer Support Automation", desc: "Automate customer service with intelligent chatbots that understand customer queries" },
                { title: "Social Media Monitoring", desc: "Monitor and analyze social media conversations to understand brand perception" },
                { title: "Document Analysis", desc: "Extract insights from contracts, reports, and business documents" },
                { title: "Multilingual Communication", desc: "Enable seamless communication across different languages and regions" }
              ].map((useCase, idx) => (
                <div key={idx} className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-white mb-2 font-montserrat">{useCase.title}</h4>
                  <p className="text-white/70 text-sm leading-relaxed font-montserrat">{useCase.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-900/30 via-pink-900/20 to-purple-900/30 border border-purple-500/30 rounded-2xl p-10 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4 font-nos">Ready to Unlock Language Intelligence?</h2>
            <p className="text-white/80 text-lg mb-8 font-montserrat max-w-2xl mx-auto">
              Transform how your business understands and communicates with advanced NLP capabilities
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 font-semibold font-montserrat">
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


