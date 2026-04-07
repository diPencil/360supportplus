"use client"

import { useEffect, useState } from "react"
import Header from "@/components/header"
import FloatingParticles from "@/components/floating-particles"
import Footer from "@/components/footer"
import { Target, Eye, Award, Users, Globe, Rocket, Brain, Zap, Shield, TrendingUp, CheckCircle, Star, Building2, Cpu, MessageSquare, BarChart3 } from "lucide-react"

export default function LearnMorePage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const values = [
    { icon: Target, title: "Excellence", desc: "Commitment to delivering exceptional quality in every project", color: "from-blue-500 to-cyan-500" },
    { icon: Brain, title: "Innovation", desc: "Constantly pushing boundaries with cutting-edge solutions", color: "from-purple-500 to-pink-500" },
    { icon: Shield, title: "Integrity", desc: "Transparent, honest, and ethical in all our dealings", color: "from-green-500 to-emerald-500" },
    { icon: Users, title: "Client-Centric", desc: "Your success is our success - we're here for you", color: "from-amber-500 to-orange-500" },
  ]

  const services = [
    { icon: Building2, title: "Finance", desc: "Comprehensive financial management and accounting solutions", color: "from-blue-600 to-cyan-600" },
    { icon: Users, title: "HR Management", desc: "Human resources systems and talent management", color: "from-purple-600 to-pink-600" },
    { icon: TrendingUp, title: "Marketing", desc: "Digital marketing strategies and campaign management", color: "from-green-600 to-emerald-600" },
    { icon: MessageSquare, title: "Call Centers", desc: "Customer service and support center solutions", color: "from-amber-600 to-orange-600" },
    { icon: Cpu, title: "Technology", desc: "IT infrastructure and software development services", color: "from-cyan-600 to-blue-600" },
    { icon: BarChart3, title: "Analytics", desc: "Business intelligence and data analytics platforms", color: "from-pink-600 to-purple-600" },
  ]

  const approachSteps = [
    { step: "01", title: "Discovery", desc: "Deep understanding of your business, challenges, and goals", icon: Eye },
    { step: "02", title: "Strategy", desc: "Customized strategy aligned with your objectives", icon: Brain },
    { step: "03", title: "Implementation", desc: "Expert execution with agile methodology", icon: Rocket },
    { step: "04", title: "Optimization", desc: "Continuous improvement and performance enhancement", icon: TrendingUp },
  ]

  const timeline = [
    { year: "2015", title: "Foundation", desc: "Support Plus was established with a vision to transform business operations across MENA" },
    { year: "2018", title: "Expansion", desc: "Extended services to include AI and technology solutions" },
    { year: "2020", title: "Innovation", desc: "Launched AI Modules platform for business automation" },
    { year: "2023", title: "MENA Focus", desc: "Introduced specialized AI MENA Model for regional business needs" },
    { year: "2025", title: "Leading", desc: "Recognized as a leader in 360° business enablement across the region" },
  ]

  const stats = [
    { number: "10+", label: "Years of Excellence", icon: Award },
    { number: "500+", label: "Clients Served", icon: Users },
    { number: "1000+", label: "Projects Delivered", icon: Rocket },
    { number: "98%", label: "Client Satisfaction", icon: Star },
    { number: "15+", label: "Countries Covered", icon: Globe },
    { number: "50+", label: "Team Experts", icon: Brain },
  ]

  const whyChooseUs = [
    { title: "360° Solutions", desc: "Comprehensive business enablement covering all aspects of your operations", icon: Globe },
    { title: "MENA Expertise", desc: "Deep understanding of regional business culture and requirements", icon: Building2 },
    { title: "AI-Powered", desc: "Cutting-edge artificial intelligence for automation and optimization", icon: Brain },
    { title: "Proven Track Record", desc: "Success stories across diverse industries and business sizes", icon: Award },
    { title: "Dedicated Support", desc: "24/7 support and continuous improvement for your success", icon: MessageSquare },
    { title: "Scalable Solutions", desc: "Grow with confidence - solutions that scale with your business", icon: TrendingUp },
  ]

  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <Header />
      <FloatingParticles />
      
      {/* Hero Section */}
      <div className="relative pt-32 pb-16 px-4 sm:px-6 md:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/20 via-neon-purple/10 to-cyan-500/20"></div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="px-4 py-2 rounded-full border border-neon-blue/50 bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 text-white text-sm font-montserrat shadow-[0_0_16px_rgba(59,130,246,0.5)]">
                360° Business Enablement
              </span>
            </div>
            <h1 className="mb-6">
              <div className="flex flex-col items-center">
                <span className="text-xl sm:text-2xl md:text-3xl font-montserrat text-white/90 mb-2">Learn More About</span>
                <span className="relative inline-block">
                  <span className="text-3xl sm:text-4xl md:text-5xl font-bold font-nos bg-gradient-to-r from-neon-blue via-neon-purple to-neon-blue bg-clip-text text-transparent">
                    Support Plus
                  </span>
                  <span className="absolute -bottom-3 left-0 w-full h-1.5 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-blue opacity-80"></span>
                </span>
              </div>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-4xl mx-auto font-montserrat leading-relaxed">
              Empowering businesses across the Middle East and North Africa through innovative technology, strategic intelligence, and comprehensive solutions that drive measurable growth and operational excellence.
            </p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="relative py-16 px-4 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-10 md:p-12 mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6 font-nos">Who We Are</h2>
                <p className="text-white/80 text-lg leading-relaxed mb-4 font-montserrat">
                  Support Plus is a leading provider of comprehensive business enablement solutions, dedicated to transforming organizations across the MENA region through innovative technology and strategic intelligence.
                </p>
                <p className="text-white/70 leading-relaxed mb-4 font-montserrat">
                  Founded with a vision to bridge the gap between strategy and execution, we deliver 360° business enablement services that integrate Finance, HR, Marketing, Call Centers, and Technology to create seamless, efficient, and profitable operations.
                </p>
                <p className="text-white/70 leading-relaxed font-montserrat">
                  Our team of experts brings together decades of combined experience, deep industry knowledge, and cutting-edge technological expertise to help businesses achieve their goals and thrive in today's competitive landscape.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[{ icon: Globe, label: "MENA Region", value: "15+ Countries" }, 
                  { icon: Building2, label: "Industries", value: "50+ Sectors" },
                  { icon: Users, label: "Clients", value: "500+ Companies" },
                  { icon: Award, label: "Excellence", value: "10+ Years" }].map((stat, idx) => {
                  const Icon = stat.icon
                  return (
                    <div key={idx} className="bg-black/50 border border-white/10 rounded-xl p-6 text-center hover:border-neon-blue/50 transition-all">
                      <Icon className="w-8 h-8 text-neon-blue mx-auto mb-3" />
                      <div className="text-white font-bold text-lg mb-1 font-montserrat">{stat.value}</div>
                      <div className="text-white/60 text-sm font-montserrat">{stat.label}</div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="relative py-16 px-4 sm:px-6 md:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 via-purple-900/10 to-transparent"></div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-black/40 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-10 hover:border-blue-500/50 transition-all duration-300">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 font-nos">Our Mission</h3>
              <p className="text-white/80 leading-relaxed font-montserrat mb-4">
                To empower businesses across the MENA region with cutting-edge solutions that drive growth, enhance operational excellence, and enable sustainable competitive advantages.
              </p>
              <p className="text-white/70 leading-relaxed font-montserrat">
                We are committed to delivering measurable results through practical technology, strategic insights, and consistent client support.
              </p>
            </div>
            
            <div className="bg-black/40 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-10 hover:border-purple-500/50 transition-all duration-300">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 font-nos">Our Vision</h3>
              <p className="text-white/80 leading-relaxed font-montserrat mb-4">
                To become the trusted partner of choice for businesses seeking transformation through technology and intelligence across the Middle East and North Africa.
              </p>
              <p className="text-white/70 leading-relaxed font-montserrat">
                We envision a future where every business in MENA has access to world-class solutions that enable them to compete globally while maintaining their regional identity and values.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="relative py-16 px-4 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4 font-nos">Our Core Values</h2>
            <p className="text-white/70 max-w-2xl mx-auto font-montserrat">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => {
              const Icon = value.icon
              return (
                <div key={idx} className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-neon-blue/50 transition-all duration-300 text-center">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center mx-auto mb-4`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3 font-montserrat">{value.title}</h4>
                  <p className="text-white/70 text-sm leading-relaxed font-montserrat">{value.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* What We Do */}
      <div className="relative py-16 px-4 sm:px-6 md:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/10 via-blue-900/10 to-purple-900/10"></div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4 font-nos">What We Do</h2>
            <p className="text-white/70 max-w-2xl mx-auto font-montserrat">
              Comprehensive 360° business enablement services covering all aspects of your operations
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => {
              const Icon = service.icon
              return (
                <div key={idx} className="group bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-neon-blue/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2 font-montserrat">{service.title}</h4>
                  <p className="text-white/70 text-sm leading-relaxed font-montserrat">{service.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Our Approach */}
      <div className="relative py-16 px-4 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4 font-nos">Our Approach</h2>
            <p className="text-white/70 max-w-2xl mx-auto font-montserrat">
              A proven methodology that ensures success at every stage
            </p>
          </div>
          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-blue via-neon-purple to-cyan-500 transform -translate-x-1/2"></div>
            <div className="grid lg:grid-cols-2 gap-8">
              {approachSteps.map((item, idx) => {
                const Icon = item.icon
                return (
                  <div key={idx} className={`flex gap-6 ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                    <div className="flex-shrink-0 hidden lg:block">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple border-4 border-background flex items-center justify-center relative z-10">
                        <div className="w-3 h-3 rounded-full bg-white"></div>
                      </div>
                    </div>
                    <div className={`flex-1 ${idx % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                      <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                        <div className="flex items-center gap-3 mb-3 lg:justify-end">
                          <div className={`w-10 h-10 rounded-lg bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center lg:hidden`}>
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <div className="text-neon-blue text-sm font-bold font-montserrat">STEP {item.step}</div>
                            <h4 className="text-xl font-bold text-white font-montserrat">{item.title}</h4>
                          </div>
                        </div>
                        <p className="text-white/70 text-sm leading-relaxed font-montserrat">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="relative py-16 px-4 sm:px-6 md:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-blue-900/10 to-cyan-900/10"></div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4 font-nos">Why Choose Support Plus</h2>
            <p className="text-white/70 max-w-2xl mx-auto font-montserrat">
              What sets us apart in the business enablement landscape
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, idx) => {
              const Icon = item.icon
              return (
                <div key={idx} className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-neon-purple/50 transition-all duration-300">
                  <Icon className="w-8 h-8 text-neon-purple mb-4" />
                  <h4 className="text-lg font-bold text-white mb-2 font-montserrat">{item.title}</h4>
                  <p className="text-white/70 text-sm leading-relaxed font-montserrat">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="relative py-16 px-4 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4 font-nos">Our Impact in Numbers</h2>
            <p className="text-white/70 max-w-2xl mx-auto font-montserrat">
              Measurable results that speak for themselves
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {stats.map((stat, idx) => {
              const Icon = stat.icon
              return (
                <div key={idx} className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-8 text-center hover:border-neon-blue/50 transition-all duration-300">
                  <Icon className="w-10 h-10 text-neon-blue mx-auto mb-4" />
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple mb-2 font-nos">
                    {stat.number}
                  </div>
                  <div className="text-white/70 font-montserrat">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Our Journey */}
      <div className="relative py-16 px-4 sm:px-6 md:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-900/10 via-orange-900/10 to-transparent"></div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4 font-nos">Our Journey</h2>
            <p className="text-white/70 max-w-2xl mx-auto font-montserrat">
              A decade of growth, innovation, and excellence
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-500 via-orange-500 to-amber-500 transform md:-translate-x-1/2"></div>
            <div className="space-y-8">
              {timeline.map((item, idx) => (
                <div key={idx} className={`flex gap-6 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="flex-1 md:w-1/2">
                    <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                      <div className="text-amber-400 text-sm font-bold mb-2 font-montserrat">{item.year}</div>
                      <h4 className="text-xl font-bold text-white mb-2 font-montserrat">{item.title}</h4>
                      <p className="text-white/70 text-sm leading-relaxed font-montserrat">{item.desc}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex flex-shrink-0 w-1/2"></div>
                  <div className="flex-shrink-0 absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 border-4 border-background"></div>
                  <div className="flex-1 md:w-1/2 hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* MENA Focus */}
      <div className="relative py-16 px-4 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="bg-black/40 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-10 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center mb-6">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-6 font-nos">MENA Region Expertise</h3>
                <p className="text-white/80 text-lg leading-relaxed mb-4 font-montserrat">
                  Our deep understanding of the Middle East and North Africa region sets us apart. We understand the unique business culture, regulatory environment, and market dynamics that define success in MENA.
                </p>
                <p className="text-white/70 leading-relaxed mb-6 font-montserrat">
                  From our specialized AI MENA Model trained on regional data, to our multi-language support and compliance-ready solutions, every aspect of our service is tailored to help businesses thrive in this vibrant and growing market.
                </p>
                <div className="flex flex-wrap gap-3">
                  {["Arabic Support", "Local Compliance", "Regional Expertise", "Cultural Understanding"].map((tag, idx) => (
                    <span key={idx} className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-montserrat">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Countries", value: "15+", color: "from-cyan-500 to-blue-500" },
                  { label: "Languages", value: "20+", color: "from-blue-500 to-purple-500" },
                  { label: "Local Partners", value: "100+", color: "from-purple-500 to-pink-500" },
                  { label: "Regional Projects", value: "500+", color: "from-pink-500 to-cyan-500" },
                ].map((stat, idx) => (
                  <div key={idx} className={`bg-gradient-to-br ${stat.color} rounded-xl p-6 text-center`}>
                    <div className="text-3xl font-bold text-white mb-1 font-nos">{stat.value}</div>
                    <div className="text-white/90 text-sm font-montserrat">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Technology & Innovation */}
      <div className="relative py-16 px-4 sm:px-6 md:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-pink-900/10 to-transparent"></div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4 font-nos">Technology & Innovation</h2>
            <p className="text-white/70 max-w-2xl mx-auto font-montserrat">
              Cutting-edge solutions powered by artificial intelligence
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-black/40 backdrop-blur-sm border border-purple-500/30 rounded-xl p-8">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-6">
                <Brain className="w-7 h-7 text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-4 font-montserrat">AI Modules</h4>
              <p className="text-white/70 leading-relaxed mb-4 font-montserrat">
                Our comprehensive AI Modules platform offers machine learning, natural language processing, computer vision, and automated decision-making capabilities.
              </p>
              <ul className="space-y-2">
                {["Predictive Analytics", "Intelligent Automation", "Data Processing", "Smart Insights"].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-white/70 text-sm font-montserrat">
                    <CheckCircle className="w-4 h-4 text-purple-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-black/40 backdrop-blur-sm border border-cyan-500/30 rounded-xl p-8">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center mb-6">
                <Globe className="w-7 h-7 text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-4 font-montserrat">AI MENA Model</h4>
              <p className="text-white/70 leading-relaxed mb-4 font-montserrat">
                Our specialized AI model is trained on MENA-specific business data, cultural nuances, and regulatory requirements for strong regional relevance.
              </p>
              <ul className="space-y-2">
                {["Regional Data Training", "Multi-Language Support", "Compliance Ready", "Cultural Awareness"].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-white/70 text-sm font-montserrat">
                    <CheckCircle className="w-4 h-4 text-cyan-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-16 px-4 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-br from-neon-blue/20 via-neon-purple/20 to-cyan-500/20 border border-neon-blue/30 rounded-2xl p-10 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4 font-nos">Ready to Transform Your Business?</h2>
            <p className="text-white/80 text-lg mb-8 font-montserrat max-w-2xl mx-auto">
              Join hundreds of successful businesses across MENA that trust Support Plus for their transformation journey
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-neon-blue to-neon-purple text-white rounded-lg hover:shadow-lg hover:shadow-neon-blue/50 transition-all duration-300 font-semibold font-montserrat">
                Get Started Today
              </button>
              <button className="px-8 py-3 border border-neon-blue/50 text-white rounded-lg hover:bg-neon-blue/10 transition-all duration-300 font-semibold font-montserrat">
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
