"use client"

import { useEffect, useState } from "react"
import Header from "@/components/header"
import FloatingParticles from "@/components/floating-particles"
import Footer from "@/components/footer"
import { FileText, Layers, Zap, Sparkles, Briefcase, Users, Target, BarChart3, Building2, Heart, ShoppingCart, Factory, Cpu, GraduationCap, ArrowRight, CheckCircle, Star, Download, Eye } from "lucide-react"
import Link from "next/link"

export default function TemplatesPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const templateCategories = [
    {
      icon: Briefcase,
      title: "Finance Templates",
      slug: "finance",
      description: "Comprehensive financial management templates for accounting, invoicing, and reporting",
      color: "from-blue-500 to-cyan-500",
      borderColor: "border-blue-500/30",
      count: 25,
      templates: ["Invoice Template", "Financial Report", "Budget Planner", "Expense Tracker"]
    },
    {
      icon: Users,
      title: "HR Templates",
      slug: "hr",
      description: "Human resources templates for recruitment, onboarding, performance, and employee management",
      color: "from-purple-500 to-pink-500",
      borderColor: "border-purple-500/30",
      count: 18,
      templates: ["Job Description", "Performance Review", "Employee Onboarding", "Leave Request"]
    },
    {
      icon: Target,
      title: "Marketing Templates",
      slug: "marketing",
      description: "Marketing campaign templates, email templates, social media content, and analytics dashboards",
      color: "from-pink-500 to-rose-500",
      borderColor: "border-pink-500/30",
      count: 32,
      templates: ["Email Campaign", "Social Media Post", "Marketing Plan", "Content Calendar"]
    },
    {
      icon: BarChart3,
      title: "Analytics Templates",
      slug: "analytics",
      description: "Business intelligence dashboards, reports, and data visualization templates",
      color: "from-cyan-500 to-blue-500",
      borderColor: "border-cyan-500/30",
      count: 15,
      templates: ["Sales Dashboard", "KPI Report", "Analytics Dashboard", "Performance Metrics"]
    },
    {
      icon: Building2,
      title: "Business Operations",
      slug: "business-operations",
      description: "Operational templates for workflows, processes, and business management",
      color: "from-orange-500 to-amber-500",
      borderColor: "border-orange-500/30",
      count: 22,
      templates: ["Project Plan", "Workflow Template", "Business Plan", "Process Document"]
    },
    {
      icon: Sparkles,
      title: "Industry-Specific",
      slug: "industry-specific",
      description: "Specialized templates tailored for specific industries across MENA region",
      color: "from-green-500 to-emerald-500",
      borderColor: "border-green-500/30",
      count: 40,
      templates: ["Healthcare Forms", "Financial Compliance", "Retail Inventory", "Education Curriculum"]
    }
  ]

  const featuredTemplates = [
    {
      title: "Financial Dashboard Template",
      category: "Finance",
      description: "Comprehensive financial dashboard with real-time metrics, charts, and reporting",
      downloads: "1.2K",
      rating: 4.9,
      icon: BarChart3,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Employee Onboarding Kit",
      category: "HR",
      description: "Complete onboarding template package for new employee integration",
      downloads: "890",
      rating: 4.8,
      icon: Users,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Marketing Campaign Planner",
      category: "Marketing",
      description: "Strategic marketing campaign planning template with timelines and metrics",
      downloads: "1.5K",
      rating: 4.9,
      icon: Target,
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "Business Intelligence Dashboard",
      category: "Analytics",
      description: "Advanced BI dashboard template with multiple data visualization options",
      downloads: "980",
      rating: 4.7,
      icon: BarChart3,
      color: "from-cyan-500 to-blue-500"
    }
  ]

  const stats = [
    { number: "150+", label: "Templates Available", icon: FileText },
    { number: "50K+", label: "Downloads", icon: Download },
    { number: "4.8", label: "Average Rating", icon: Star },
    { number: "100+", label: "Industries Served", icon: Building2 }
  ]

  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <Header />
      <FloatingParticles />
      
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-4 sm:px-6 md:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/10"></div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="px-4 py-2 rounded-full border border-neon-blue/50 bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 text-white text-sm font-montserrat shadow-[0_0_16px_rgba(59,130,246,0.5)]">
                Pre-built Solutions
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 font-nos">
              <span className="inline-block relative">
                Our Templates
                <span className="absolute -bottom-3 left-0 w-full h-1.5 bg-gradient-to-r from-neon-blue via-neon-purple to-cyan-500 opacity-80"></span>
              </span>
            </h1>
            <p className="text-gray-300 text-xl md:text-2xl max-w-3xl mx-auto font-montserrat leading-relaxed">
              Accelerate your business operations with our comprehensive collection of professional, ready-to-use templates
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, idx) => {
              const Icon = stat.icon
              return (
                <div key={idx} className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:border-neon-blue/50 transition-all duration-300 group">
                  <Icon className="w-8 h-8 text-neon-blue mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple mb-2 font-nos">
                    {stat.number}
                  </div>
                  <div className="text-white/70 text-sm font-montserrat">{stat.label}</div>
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
              <h2 className="text-2xl font-bold text-white mb-6 font-nos text-center">Why Use Our Templates?</h2>
              <p className="text-white/80 text-lg leading-relaxed mb-4 font-montserrat">
                Our template library provides professionally designed, customizable solutions that help you streamline operations, maintain consistency, and save valuable time. Each template is crafted by industry experts and optimized for MENA business requirements.
              </p>
              <p className="text-white/70 leading-relaxed font-montserrat">
                From financial reports to marketing campaigns, HR documentation to analytics dashboards, our templates cover every aspect of business operations. All templates are fully customizable, regularly updated, and designed to integrate seamlessly with Support Plus solutions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Template Categories */}
      <div className="relative py-16 px-4 sm:px-6 md:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 via-purple-900/10 to-cyan-900/10"></div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4 font-nos">Template Categories</h2>
            <p className="text-white/70 max-w-2xl mx-auto font-montserrat">
              Browse templates by category and find the perfect solution for your needs
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {templateCategories.map((category, idx) => {
              const Icon = category.icon
              return (
                <Link key={idx} href={`/templates/${category.slug}`}>
                  <div className={`group relative bg-black/40 backdrop-blur-sm border ${category.borderColor} rounded-2xl p-8 hover:border-opacity-60 transition-all duration-500 hover:shadow-[0_0_40px_rgba(59,130,246,0.4)] overflow-hidden cursor-pointer h-full`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-15 transition-opacity duration-500`}></div>
                    
                    <div className="relative z-10">
                      <div className={`mb-6 w-16 h-16 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-bold text-white font-montserrat">{category.title}</h3>
                        <span className="px-3 py-1 rounded-full bg-white/10 text-white/70 text-xs font-montserrat">
                          {category.count}
                        </span>
                      </div>
                      
                      <p className="text-white/70 text-sm mb-6 leading-relaxed font-montserrat">{category.description}</p>
                      
                      <div className="space-y-2 mb-6">
                        {category.templates.map((template, tIdx) => (
                          <div key={tIdx} className="flex items-center gap-2 text-sm text-white/60 font-montserrat">
                            <CheckCircle className="w-3 h-3 text-neon-blue" />
                            <span>{template}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center gap-2 text-sm text-neon-blue font-montserrat group-hover:translate-x-1 transition-transform">
                        <span>Explore Templates</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>

      {/* Featured Templates */}
      <div className="relative py-16 px-4 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <Star className="w-6 h-6 text-yellow-500" />
              <h2 className="text-3xl font-bold text-white font-nos">Featured Templates</h2>
            </div>
            <p className="text-white/70 max-w-2xl mx-auto font-montserrat">
              Most popular and highly-rated templates
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {featuredTemplates.map((template, idx) => {
              const Icon = template.icon
              return (
                <div
                  key={idx}
                  className="group bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-neon-blue/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${template.color} flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-1 rounded bg-white/5 text-white/60 text-xs font-montserrat">{template.category}</span>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                          <span className="text-white/80 text-sm font-montserrat">{template.rating}</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2 font-montserrat group-hover:text-neon-blue transition-colors">
                        {template.title}
                      </h3>
                      <p className="text-white/70 text-sm leading-relaxed font-montserrat mb-4">{template.description}</p>
                      <div className="flex items-center gap-4 text-sm text-white/60 font-montserrat">
                        <div className="flex items-center gap-1">
                          <Download className="w-4 h-4" />
                          <span>{template.downloads} downloads</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3 pt-4 border-t border-white/10">
                    <button className="flex-1 px-4 py-2 bg-gradient-to-r from-neon-blue to-neon-purple text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold font-montserrat text-sm">
                      Download
                    </button>
                    <button className="px-4 py-2 border border-white/10 text-white rounded-lg hover:bg-white/10 transition-all duration-300 font-montserrat text-sm flex items-center gap-2">
                      <Eye className="w-4 h-4" />
                      Preview
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="relative py-16 px-4 sm:px-6 md:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-blue-900/10 to-cyan-900/10"></div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4 font-nos">Why Choose Our Templates?</h2>
            <p className="text-white/70 max-w-2xl mx-auto font-montserrat">
              The advantages of using Support Plus templates
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Zap, title: "Save Time", desc: "Start immediately with ready-to-use templates" },
              { icon: Star, title: "Professional Design", desc: "Crafted by expert designers" },
              { icon: CheckCircle, title: "Fully Customizable", desc: "Adapt templates to your needs" },
              { icon: Layers, title: "Regular Updates", desc: "Templates updated with latest best practices" }
            ].map((benefit, idx) => {
              const Icon = benefit.icon
              return (
                <div key={idx} className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:border-neon-blue/50 transition-all duration-300">
                  <Icon className="w-10 h-10 text-neon-blue mx-auto mb-4" />
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
          <div className="bg-gradient-to-br from-blue-900/30 via-purple-900/20 to-cyan-900/30 border border-neon-blue/30 rounded-2xl p-10 md:p-12 text-center">
            <Sparkles className="w-16 h-16 text-neon-blue mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4 font-nos">Ready to Accelerate Your Business?</h2>
            <p className="text-white/80 text-lg mb-8 font-montserrat max-w-2xl mx-auto">
              Browse our extensive template library and find the perfect solution to streamline your operations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple text-white rounded-lg hover:shadow-lg hover:shadow-neon-blue/50 transition-all duration-300 font-semibold font-montserrat">
                Browse All Templates
              </button>
              <button className="px-8 py-4 border border-neon-blue/50 text-white rounded-lg hover:bg-neon-blue/10 transition-all duration-300 font-semibold font-montserrat">
                Request Custom Template
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
