"use client"

import { useEffect, useState } from "react"
import Header from "@/components/header"
import FloatingParticles from "@/components/floating-particles"
import Footer from "@/components/footer"
import { BookOpen, User, CreditCard, Wrench, Code, AlertCircle, Brain, Globe, MessageSquare, Briefcase, Users, Target, BarChart3, Search, FileText, Video, Phone, Mail, CheckCircle, ArrowRight, X } from "lucide-react"
import Link from "next/link"

interface SearchResult {
  id: string
  title: string
  description: string
  category: string
  url: string
  type: string
  keywords: string[]
}

export default function HelpPage() {
  const [mounted, setMounted] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<SearchResult[]>([])
  const [showResults, setShowResults] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Searchable content database
  const searchableContent: SearchResult[] = [
    // Getting Started
    { id: "1", title: "Welcome to Support Plus", description: "Introduction to Support Plus platform and services", category: "Getting Started", url: "/help/getting-started", type: "Guide", keywords: ["welcome", "introduction", "getting started", "overview", "basics"] },
    { id: "2", title: "Setting up your account", description: "Step-by-step guide to create and configure your Support Plus account", category: "Getting Started", url: "/help/account-setup", type: "Tutorial", keywords: ["account", "setup", "configuration", "create account", "sign up"] },
    { id: "3", title: "First steps guide", description: "Essential first steps after signing up for Support Plus", category: "Getting Started", url: "/help/first-steps", type: "Guide", keywords: ["first steps", "beginner", "tutorial", "getting started"] },
    
    // Finance Services
    { id: "4", title: "Finance Services Guide", description: "Complete guide to Finance services including accounting, billing, and financial reporting", category: "Services & Solutions", url: "/services/service/finance", type: "Documentation", keywords: ["finance", "accounting", "billing", "financial", "money", "invoice", "payment"] },
    { id: "5", title: "Invoice Management", description: "How to create, manage, and track invoices using Support Plus", category: "Services & Solutions", url: "/help/invoice-management", type: "Tutorial", keywords: ["invoice", "billing", "payment", "create invoice"] },
    { id: "6", title: "Financial Reporting", description: "Generate and customize financial reports and analytics", category: "Services & Solutions", url: "/help/financial-reporting", type: "Guide", keywords: ["report", "financial", "analytics", "dashboard", "financial data"] },
    
    // HR Services
    { id: "7", title: "HR Management Setup", description: "Setup and configure HR management solutions for your organization", category: "Services & Solutions", url: "/services/service/hr", type: "Documentation", keywords: ["hr", "human resources", "employee", "staff", "recruitment", "onboarding"] },
    { id: "8", title: "Employee Management", description: "Manage employees, attendance, and performance reviews", category: "Services & Solutions", url: "/help/employee-management", type: "Guide", keywords: ["employee", "staff", "management", "attendance", "performance"] },
    { id: "9", title: "Recruitment Process", description: "Complete guide to recruitment and hiring workflows", category: "Services & Solutions", url: "/help/recruitment", type: "Tutorial", keywords: ["recruitment", "hiring", "job", "candidates", "interview"] },
    
    // Marketing Services
    { id: "10", title: "Marketing Automation", description: "Setup automated marketing campaigns and workflows", category: "Services & Solutions", url: "/services/service/marketing", type: "Documentation", keywords: ["marketing", "campaign", "automation", "email", "social media", "advertising"] },
    { id: "11", title: "Email Campaign Setup", description: "Create and send professional email marketing campaigns", category: "Services & Solutions", url: "/help/email-campaigns", type: "Tutorial", keywords: ["email", "campaign", "marketing", "newsletter", "email marketing"] },
    
    // Call Centers
    { id: "12", title: "Call Center Configuration", description: "Configure and optimize your call center operations", category: "Services & Solutions", url: "/services/service/call-centers", type: "Documentation", keywords: ["call center", "customer service", "support", "phone", "calls", "contact center"] },
    { id: "13", title: "Customer Support Setup", description: "Setup multi-channel customer support system", category: "Services & Solutions", url: "/help/customer-support", type: "Guide", keywords: ["customer", "support", "help desk", "ticket", "service"] },
    
    // Technology Services
    { id: "14", title: "Technology Services", description: "IT infrastructure, cloud services, and technical solutions", category: "Services & Solutions", url: "/services/service/technology", type: "Documentation", keywords: ["technology", "it", "cloud", "infrastructure", "software", "technical"] },
    
    // Analytics
    { id: "15", title: "Analytics Dashboard", description: "Setup and customize business analytics dashboards", category: "Services & Solutions", url: "/services/service/analytics", type: "Guide", keywords: ["analytics", "dashboard", "report", "data", "metrics", "insights"] },
    
    // AI Modules
    { id: "16", title: "Machine Learning Basics", description: "Introduction to Machine Learning module and how to use it", category: "AI Modules", url: "/ai-modules/machine-learning", type: "Documentation", keywords: ["machine learning", "ml", "ai", "artificial intelligence", "prediction", "data analysis"] },
    { id: "17", title: "NLP Implementation", description: "How to implement Natural Language Processing in your workflows", category: "AI Modules", url: "/ai-modules/natural-language-processing", type: "Tutorial", keywords: ["nlp", "natural language", "text", "language processing", "chatbot", "sentiment"] },
    { id: "18", title: "Computer Vision Setup", description: "Configure Computer Vision for image recognition and analysis", category: "AI Modules", url: "/ai-modules/computer-vision", type: "Guide", keywords: ["computer vision", "image", "recognition", "visual", "photo", "picture"] },
    { id: "19", title: "Automated Decision Making", description: "Setup AI-powered automated decision workflows", category: "AI Modules", url: "/ai-modules/automated-decision-making", type: "Documentation", keywords: ["automation", "decision", "workflow", "ai decision", "automated"] },
    
    // AI MENA Model
    { id: "20", title: "Getting Started with AI MENA", description: "Introduction to AI MENA Model and regional AI solutions", category: "AI MENA Model", url: "/ai-mena-model", type: "Guide", keywords: ["ai mena", "mena model", "regional ai", "arabic ai", "middle east", "north africa"] },
    { id: "21", title: "Language Support", description: "Multi-language support including Arabic, English, and regional dialects", category: "AI MENA Model", url: "/help/mena-language", type: "Documentation", keywords: ["language", "arabic", "english", "multilingual", "translation", "dialects"] },
    { id: "22", title: "Regional Compliance", description: "Compliance with MENA regulations and standards", category: "AI MENA Model", url: "/help/mena-compliance", type: "Guide", keywords: ["compliance", "regulation", "legal", "mena", "regional", "standards"] },
    
    // Technical Support
    { id: "23", title: "Common Issues", description: "Solutions to frequently encountered problems and issues", category: "Technical Support", url: "/help/common-issues", type: "Troubleshooting", keywords: ["problem", "issue", "error", "bug", "troubleshoot", "fix", "help"] },
    { id: "24", title: "API Integration", description: "How to integrate Support Plus APIs with your systems", category: "Technical Support", url: "/help/api-integration", type: "Technical", keywords: ["api", "integration", "developer", "code", "programming", "connect"] },
    { id: "25", title: "System Requirements", description: "Minimum system requirements for Support Plus services", category: "Technical Support", url: "/help/system-requirements", type: "Technical", keywords: ["system", "requirements", "specifications", "hardware", "software"] },
    
    // Account & Billing
    { id: "26", title: "Account Settings", description: "Manage your account preferences and settings", category: "Account & Billing", url: "/help/account-settings", type: "Guide", keywords: ["account", "settings", "profile", "preferences", "configuration"] },
    { id: "27", title: "Billing & Payments", description: "Manage subscriptions, payments, and billing information", category: "Account & Billing", url: "/help/billing", type: "Documentation", keywords: ["billing", "payment", "subscription", "invoice", "pricing", "plan"] },
    { id: "28", title: "Subscription Management", description: "Upgrade, downgrade, or cancel your subscription", category: "Account & Billing", url: "/help/subscription", type: "Guide", keywords: ["subscription", "plan", "upgrade", "downgrade", "cancel"] },
    
    // Industry Solutions
    { id: "29", title: "Financial Services Solutions", description: "Solutions for banking, insurance, and financial institutions", category: "Services & Solutions", url: "/services/financial-services", type: "Documentation", keywords: ["financial services", "banking", "insurance", "finance industry"] },
    { id: "30", title: "Healthcare Solutions", description: "Healthcare and medical institution solutions", category: "Services & Solutions", url: "/services/healthcare", type: "Documentation", keywords: ["healthcare", "medical", "hospital", "health", "patient"] },
    { id: "31", title: "Retail Solutions", description: "E-commerce and retail business solutions", category: "Services & Solutions", url: "/services/retail-and-e-commerce", type: "Documentation", keywords: ["retail", "e-commerce", "shopping", "store", "commerce"] },
    { id: "32", title: "Manufacturing Solutions", description: "Industrial and manufacturing operation solutions", category: "Services & Solutions", url: "/services/manufacturing", type: "Documentation", keywords: ["manufacturing", "production", "factory", "industrial"] },
    
    // Templates
    { id: "33", title: "Finance Templates", description: "Financial management and accounting templates", category: "Templates", url: "/templates/finance", type: "Template", keywords: ["template", "finance", "financial", "invoice template", "report template"] },
    { id: "34", title: "HR Templates", description: "Human resources and employee management templates", category: "Templates", url: "/templates/hr", type: "Template", keywords: ["template", "hr", "human resources", "employee template"] },
    { id: "35", title: "Marketing Templates", description: "Marketing campaign and content templates", category: "Templates", url: "/templates/marketing", type: "Template", keywords: ["template", "marketing", "campaign", "content template"] },
    
    // General
    { id: "36", title: "Contact Support", description: "How to contact Support Plus support team", category: "Support", url: "/help/contact", type: "Support", keywords: ["contact", "support", "help", "assistance", "customer service"] },
    { id: "37", title: "Platform Overview", description: "Complete overview of Support Plus platform features", category: "Getting Started", url: "/help/platform-overview", type: "Guide", keywords: ["platform", "overview", "features", "capabilities", "what is support plus"] },
  ]

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    
    if (query.trim().length === 0) {
      setSearchResults([])
      setShowResults(false)
      return
    }

    const lowerQuery = query.toLowerCase().trim()
    const queryWords = lowerQuery.split(/\s+/)

    const results = searchableContent
      .map(item => {
        const titleMatch = item.title.toLowerCase().includes(lowerQuery)
        const descMatch = item.description.toLowerCase().includes(lowerQuery)
        const keywordMatches = item.keywords.filter(kw => 
          queryWords.some(word => kw.toLowerCase().includes(word) || word.includes(kw.toLowerCase()))
        ).length

        let score = 0
        if (titleMatch) score += 10
        if (descMatch) score += 5
        score += keywordMatches * 3

        return { ...item, score }
      })
      .filter(item => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 10)

    setSearchResults(results)
    setShowResults(results.length > 0)
  }

  if (!mounted) return null

  const helpCategories = [
    {
      icon: BookOpen,
      title: "Getting Started",
      desc: "Learn how to get started with Support Plus solutions",
      color: "from-green-500 to-emerald-500",
      borderColor: "border-green-500/30",
      articles: ["Welcome to Support Plus", "Setting up your account", "First steps guide", "Platform overview"]
    },
    {
      icon: Briefcase,
      title: "Services & Solutions",
      desc: "Documentation for Finance, HR, Marketing, Call Centers, and more",
      color: "from-blue-500 to-cyan-500",
      borderColor: "border-blue-500/30",
      articles: ["Finance Services Guide", "HR Management Setup", "Marketing Automation", "Call Center Configuration"]
    },
    {
      icon: Brain,
      title: "AI Modules",
      desc: "Learn about Machine Learning, NLP, Computer Vision, and more",
      color: "from-purple-500 to-pink-500",
      borderColor: "border-purple-500/30",
      articles: ["Machine Learning Basics", "NLP Implementation", "Computer Vision Setup", "AI MENA Model Guide"]
    },
    {
      icon: Globe,
      title: "AI MENA Model",
      desc: "Specialized AI model for Middle East and North Africa region",
      color: "from-cyan-500 to-blue-500",
      borderColor: "border-cyan-500/30",
      articles: ["Getting Started with AI MENA", "Language Support", "Regional Compliance", "Best Practices"]
    },
    {
      icon: Wrench,
      title: "Technical Support",
      desc: "Troubleshooting, integrations, and technical assistance",
      color: "from-orange-500 to-amber-500",
      borderColor: "border-orange-500/30",
      articles: ["Common Issues", "API Integration", "System Requirements", "Performance Optimization"]
    },
    {
      icon: User,
      title: "Account & Billing",
      desc: "Manage your account, subscription, and payment settings",
      color: "from-pink-500 to-rose-500",
      borderColor: "border-pink-500/30",
      articles: ["Account Settings", "Billing & Payments", "Subscription Management", "Invoicing"]
    }
  ]

  const faqs = [
    {
      question: "What is Support Plus?",
      answer: "Support Plus is a comprehensive 360° business enablement platform that integrates Finance, HR, Marketing, Call Centers, and Technology solutions. We provide specialized services for businesses across the MENA region, powered by advanced AI technology."
    },
    {
      question: "How do I get started with Support Plus services?",
      answer: "Getting started is easy! Simply create an account, choose the services you need (Finance, HR, Marketing, Call Centers, or Technology), and our team will guide you through the setup process. We offer comprehensive onboarding and support."
    },
    {
      question: "What is the AI MENA Model?",
      answer: "The AI MENA Model is a specialized artificial intelligence system trained specifically on Middle East and North Africa business data, cultural context, and regional regulations. It provides 98% accuracy in regional business understanding."
    },
    {
      question: "Do you support Arabic language?",
      answer: "Yes! Our AI MENA Model and all our services fully support Arabic, English, and regional dialects. We provide multi-language support for all business operations."
    },
    {
      question: "What industries do you serve?",
      answer: "We serve multiple industries across MENA including Financial Services, Healthcare, Retail & E-commerce, Manufacturing, Technology, and Education. Our solutions are customizable for any sector."
    },
    {
      question: "How do I integrate Support Plus with my existing systems?",
      answer: "We provide robust APIs and integration tools for seamless connectivity with your existing systems. Our technical team offers comprehensive documentation and dedicated support for integrations."
    },
    {
      question: "Is my data secure and compliant?",
      answer: "Absolutely! We maintain strict compliance with regional data protection regulations, banking standards, and international security protocols. Your data is encrypted and stored securely."
    },
    {
      question: "What support channels are available?",
      answer: "We offer multiple support channels including email support, live chat, phone support, comprehensive documentation, and video tutorials. Premium plans include dedicated account management."
    }
  ]

  const quickLinks = [
    { icon: FileText, title: "Documentation", desc: "Complete guides and references", link: "#" },
    { icon: Video, title: "Video Tutorials", desc: "Step-by-step video guides", link: "#" },
    { icon: MessageSquare, title: "Community Forum", desc: "Connect with other users", link: "/community" },
    { icon: Code, title: "API Reference", desc: "Developer documentation", link: "#" }
  ]

  const supportOptions = [
    { icon: Mail, title: "Email Support", desc: "support@supportplusco.com", time: "Response within 24 hours" },
    { icon: MessageSquare, title: "Live Chat", desc: "Available 24/7", time: "Instant response" },
    { icon: Phone, title: "Phone Support", desc: "+971 XX XXX XXXX", time: "Business hours" },
    { icon: BookOpen, title: "Knowledge Base", desc: "Self-service resources", time: "Always available" }
  ]

  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <Header />
      <FloatingParticles />
      
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-4 sm:px-6 md:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-blue-900/20 to-purple-900/10"></div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="px-4 py-2 rounded-full border border-green-500/50 bg-gradient-to-r from-green-500/10 to-emerald-500/10 text-white text-sm font-montserrat shadow-[0_0_16px_rgba(34,197,94,0.5)]">
                Support & Help
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 font-nos">
              <span className="inline-block relative">
                Help Center
                <span className="absolute -bottom-3 left-0 w-full h-1.5 bg-gradient-to-r from-green-500 via-emerald-500 to-blue-500 opacity-80"></span>
              </span>
            </h1>
            <p className="text-gray-300 text-xl md:text-2xl max-w-3xl mx-auto font-montserrat leading-relaxed">
              Find answers to your questions and get the support you need for Support Plus solutions
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-16 relative">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50" />
              <input
                type="text"
                placeholder="Search for help articles, guides, or FAQs..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                onFocus={() => searchQuery && searchResults.length > 0 && setShowResults(true)}
                className="w-full pl-12 pr-12 py-4 bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-green-500/50 transition-all font-montserrat"
              />
              {searchQuery && (
                <button
                  onClick={() => {
                    setSearchQuery("")
                    setSearchResults([])
                    setShowResults(false)
                  }}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/50 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Search Results Dropdown */}
            {showResults && searchResults.length > 0 && (
              <div className="absolute top-full mt-2 w-full bg-black/95 backdrop-blur-lg border border-white/10 rounded-xl shadow-2xl z-50 max-h-96 overflow-y-auto">
                <div className="p-4 border-b border-white/10">
                  <div className="text-sm text-white/70 font-montserrat">
                    Found {searchResults.length} result{searchResults.length !== 1 ? 's' : ''}
                  </div>
                </div>
                <div className="divide-y divide-white/10">
                  {searchResults.map((result) => (
                    <Link
                      key={result.id}
                      href={result.url}
                      onClick={() => {
                        setShowResults(false)
                        setSearchQuery("")
                      }}
                      className="block p-4 hover:bg-white/5 transition-colors group"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500/20 to-blue-500/20 border border-white/10 flex items-center justify-center flex-shrink-0">
                          <FileText className="w-5 h-5 text-green-400" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="text-white font-semibold font-montserrat group-hover:text-green-400 transition-colors">
                              {result.title}
                            </h4>
                            <span className="px-2 py-0.5 rounded bg-white/5 text-white/60 text-xs font-montserrat">
                              {result.type}
                            </span>
                          </div>
                          <p className="text-white/70 text-sm font-montserrat line-clamp-1">{result.description}</p>
                          <div className="flex items-center gap-2 mt-2">
                            <span className="text-white/50 text-xs font-montserrat">{result.category}</span>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-white/50 group-hover:text-green-400 transition-colors flex-shrink-0" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {showResults && searchResults.length === 0 && searchQuery.trim().length > 0 && (
              <div className="absolute top-full mt-2 w-full bg-black/95 backdrop-blur-lg border border-white/10 rounded-xl shadow-2xl z-50 p-6 text-center">
                <div className="text-white/70 font-montserrat">
                  No results found for "{searchQuery}"
                </div>
                <div className="text-white/50 text-sm font-montserrat mt-2">
                  Try different keywords or contact support
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Help Categories */}
      <div className="relative py-16 px-4 sm:px-6 md:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-green-900/10 via-blue-900/10 to-transparent"></div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4 font-nos">Browse by Category</h2>
            <p className="text-white/70 max-w-2xl mx-auto font-montserrat">
              Find help articles organized by topic
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {helpCategories.map((category, idx) => {
              const Icon = category.icon
              return (
                <div
                  key={idx}
                  className={`group bg-black/40 backdrop-blur-sm border ${category.borderColor} rounded-xl p-8 hover:border-opacity-60 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,197,94,0.3)] cursor-pointer`}
                >
                  <div className={`mb-6 w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 font-montserrat">{category.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed font-montserrat mb-4">{category.desc}</p>
                  
                  <div className="space-y-2 mb-4">
                    {category.articles.slice(0, 3).map((article, aIdx) => (
                      <div key={aIdx} className="flex items-center gap-2 text-sm text-white/60 font-montserrat">
                        <CheckCircle className="w-3 h-3 text-green-500" />
                        <span>{article}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-sm text-green-400 font-montserrat group-hover:translate-x-1 transition-transform">
                    <span>View All</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="relative py-16 px-4 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4 font-nos">Quick Links</h2>
            <p className="text-white/70 max-w-2xl mx-auto font-montserrat">
              Popular resources and helpful links
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, idx) => {
              const Icon = link.icon
              return (
                <a
                  key={idx}
                  href={link.link}
                  className="group bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,197,94,0.3)]"
                >
                  <Icon className="w-10 h-10 text-green-500 mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="text-lg font-bold text-white mb-2 font-montserrat">{link.title}</h4>
                  <p className="text-white/70 text-sm font-montserrat">{link.desc}</p>
                </a>
              )
            })}
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div className="relative py-16 px-4 sm:px-6 md:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 via-purple-900/10 to-transparent"></div>
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4 font-nos">Frequently Asked Questions</h2>
            <p className="text-white/70 max-w-2xl mx-auto font-montserrat">
              Common questions about Support Plus services and solutions
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300"
              >
                <h4 className="text-lg font-bold text-white mb-3 font-montserrat">{faq.question}</h4>
                <p className="text-white/70 leading-relaxed font-montserrat">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Support Options */}
      <div className="relative py-16 px-4 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4 font-nos">Get in Touch</h2>
            <p className="text-white/70 max-w-2xl mx-auto font-montserrat">
              Multiple ways to reach our support team
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportOptions.map((option, idx) => {
              const Icon = option.icon
              return (
                <div
                  key={idx}
                  className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:border-green-500/50 transition-all duration-300"
                >
                  <Icon className="w-10 h-10 text-green-500 mx-auto mb-4" />
                  <h4 className="text-lg font-bold text-white mb-2 font-montserrat">{option.title}</h4>
                  <p className="text-white/80 mb-2 font-montserrat">{option.desc}</p>
                  <p className="text-white/60 text-sm font-montserrat">{option.time}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-16 px-4 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-br from-green-900/30 via-blue-900/20 to-purple-900/30 border border-green-500/30 rounded-2xl p-10 md:p-12 text-center">
            <AlertCircle className="w-16 h-16 text-green-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4 font-nos">Still Need Help?</h2>
            <p className="text-white/80 text-lg mb-8 font-montserrat max-w-2xl mx-auto">
              Can't find what you're looking for? Our support team is here to help you with any questions or issues.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300 font-semibold font-montserrat">
                Contact Support
              </button>
              <button className="px-8 py-4 border border-green-500/50 text-white rounded-lg hover:bg-green-500/10 transition-all duration-300 font-semibold font-montserrat">
                View Documentation
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
