"use client"

import { useEffect, useState } from "react"
import Header from "@/components/header"
import FloatingParticles from "@/components/floating-particles"
import Footer from "@/components/footer"
import { Palette, Eye, FileText, Sparkles, Target, Users, CheckCircle, Zap, TrendingUp, Award } from "lucide-react"

export default function BrandingPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const services = [
    {
      icon: Palette,
      title: "Brand Strategy",
      description: "Define your brand positioning and core messaging to stand out in the market",
      color: "from-neon-blue to-cyan-500",
      features: ["Market Research", "Competitor Analysis", "Brand Positioning", "Messaging Framework"]
    },
    {
      icon: Eye,
      title: "Visual Identity",
      description: "Create compelling logos, color palettes, typography, and design elements",
      color: "from-neon-purple to-pink-500",
      features: ["Logo Design", "Color Systems", "Typography", "Visual Elements"]
    },
    {
      icon: FileText,
      title: "Brand Guidelines",
      description: "Comprehensive documentation ensuring consistent brand application",
      color: "from-cyan-500 to-neon-blue",
      features: ["Style Guide", "Usage Rules", "Asset Library", "Best Practices"]
    },
    {
      icon: Sparkles,
      title: "Brand Activation",
      description: "Launch and establish your brand presence across all touchpoints",
      color: "from-purple-500 to-neon-purple",
      features: ["Launch Strategy", "Marketing Campaigns", "Digital Presence", "Brand Awareness"]
    }
  ]

  const deliverables = [
    { title: "Brand Strategy Document", desc: "Comprehensive brand positioning and messaging strategy" },
    { title: "Logo & Visual Identity", desc: "Complete logo system with variations and applications" },
    { title: "Brand Guidelines Manual", desc: "Detailed guide for brand usage and application" },
    { title: "Marketing Assets", desc: "Ready-to-use templates and brand assets" },
    { title: "Digital Brand Kit", desc: "Online brand resources and asset library" },
    { title: "Brand Activation Plan", desc: "Strategic roadmap for brand launch and growth" },
  ]

  const benefits = [
    { icon: Target, title: "Increased Recognition", desc: "Build a memorable brand that stands out" },
    { icon: TrendingUp, title: "Market Differentiation", desc: "Distinguish yourself from competitors" },
    { icon: Users, title: "Customer Trust", desc: "Establish credibility and build loyalty" },
    { icon: Zap, title: "Consistent Messaging", desc: "Ensure unified brand communication" },
  ]

  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <Header />
      <FloatingParticles />
      
      {/* Hero Section */}
      <div className="relative pt-32 pb-16 px-4 sm:px-6 md:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-neon-blue/10"></div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="px-4 py-2 rounded-full border border-neon-purple/50 bg-gradient-to-r from-neon-purple/10 to-pink-500/10 text-white text-sm font-montserrat shadow-[0_0_16px_rgba(139,92,246,0.5)]">
                Identity & Design
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 font-nos">
              <span className="inline-block relative">
                Branding Structure
                <span className="absolute -bottom-3 left-0 w-full h-1.5 bg-gradient-to-r from-neon-purple via-pink-500 to-neon-purple opacity-80"></span>
              </span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto font-montserrat leading-relaxed">
              Build a powerful and consistent brand identity that resonates with your audience and drives business success across all touchpoints
            </p>
          </div>
        </div>
      </div>

      {/* Intro Section */}
      <div className="relative py-16 px-4 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-10 md:p-12 mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-6 font-nos text-center">What is Branding Structure?</h2>
              <p className="text-white/80 text-lg leading-relaxed mb-4 font-montserrat">
                Branding Structure is the comprehensive framework that defines how your brand appears, communicates, and behaves across all platforms and touchpoints. It's more than just a logo—it's the strategic foundation that ensures consistency, recognition, and trust in every customer interaction.
              </p>
              <p className="text-white/70 leading-relaxed font-montserrat">
                Our branding structure service helps you establish a cohesive brand identity that reflects your core values, resonates with your target audience, and creates a memorable presence in the market. From initial strategy to final implementation, we guide you through every step of building a powerful brand that drives business growth.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="relative py-16 px-4 sm:px-6 md:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-transparent to-cyan-900/10"></div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4 font-nos">Our Branding Services</h2>
            <p className="text-white/70 max-w-2xl mx-auto font-montserrat">
              Comprehensive branding solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div
                  key={index}
                  className="group relative bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-10 hover:border-neon-purple/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(139,92,246,0.4)] overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-15 transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-start gap-6 mb-6">
                      <div className={`flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-xl`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-3 font-montserrat">{service.title}</h3>
                        <p className="text-white/70 leading-relaxed font-montserrat mb-4">{service.description}</p>
                      </div>
                    </div>
                    
                    <ul className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-white/60 font-montserrat">
                          <CheckCircle className="w-4 h-4 text-neon-purple flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Process Timeline */}
      <div className="relative py-16 px-4 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4 font-nos">Our Branding Process</h2>
            <p className="text-white/70 max-w-2xl mx-auto font-montserrat">
              A proven methodology that ensures brand success at every stage
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-blue via-neon-purple to-cyan-500 transform -translate-x-1/2 hidden md:block"></div>
            
            <div className="space-y-12">
              {[
                { 
                  step: "01", 
                  title: "Discovery & Research", 
                  desc: "Understanding your business, market, and target audience through comprehensive analysis and stakeholder interviews",
                  details: ["Market analysis", "Competitor research", "Stakeholder interviews", "Audience profiling"],
                  side: "left",
                  color: "neon-blue"
                },
                { 
                  step: "02", 
                  title: "Strategy Development", 
                  desc: "Creating comprehensive brand strategy and positioning that differentiates you in the market",
                  details: ["Brand positioning", "Value proposition", "Messaging framework", "Brand personality"],
                  side: "right",
                  color: "neon-purple"
                },
                { 
                  step: "03", 
                  title: "Design & Creation", 
                  desc: "Developing visual identity and brand elements that bring your strategy to life",
                  details: ["Logo design", "Color palette", "Typography", "Visual elements"],
                  side: "left",
                  color: "neon-blue"
                },
                { 
                  step: "04", 
                  title: "Implementation", 
                  desc: "Launching and establishing your brand presence across all channels and touchpoints",
                  details: ["Brand guidelines", "Asset creation", "Digital implementation", "Launch campaign"],
                  side: "right",
                  color: "neon-purple"
                }
              ].map((item, index) => {
                const borderColor = item.color === 'neon-blue' ? 'border-neon-blue/30' : 'border-neon-purple/30'
                const textColor = item.color === 'neon-blue' ? 'text-neon-blue' : 'text-neon-purple'
                const checkColor = item.color === 'neon-blue' ? 'text-neon-blue' : 'text-neon-purple'
                
                return (
                  <div key={index} className="relative">
                    {/* Mobile Layout */}
                    <div className="md:hidden">
                      <div className={`bg-black/40 backdrop-blur-sm border ${borderColor} rounded-xl p-8`}>
                        <div className={`${textColor} text-sm font-bold mb-3 font-montserrat`}>STEP {item.step}</div>
                        <h3 className="text-xl font-bold text-white mb-3 font-montserrat">{item.title}</h3>
                        <p className="text-white/70 text-sm mb-4 leading-relaxed font-montserrat">{item.desc}</p>
                        <ul className="space-y-2">
                          {item.details.map((detail, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-xs text-white/60 font-montserrat">
                              <CheckCircle className={`w-3 h-3 ${checkColor}`} />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Desktop Layout */}
                    <div className="hidden md:flex items-center gap-8">
                      {item.side === 'left' ? (
                        <>
                          <div className="flex-1 flex justify-end pr-4">
                            <div className={`bg-black/40 backdrop-blur-sm border ${borderColor} rounded-xl p-8 max-w-md`}>
                              <div className={`${textColor} text-sm font-bold mb-3 font-montserrat`}>STEP {item.step}</div>
                              <h3 className="text-xl font-bold text-white mb-3 font-montserrat">{item.title}</h3>
                              <p className="text-white/70 text-sm mb-4 leading-relaxed font-montserrat">{item.desc}</p>
                              <ul className="space-y-2">
                                {item.details.map((detail, idx) => (
                                  <li key={idx} className="flex items-center justify-end gap-2 text-xs text-white/60 font-montserrat">
                                    <CheckCircle className={`w-3 h-3 ${checkColor}`} />
                                    {detail}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple border-4 border-background flex items-center justify-center relative z-10">
                            <div className="w-3 h-3 rounded-full bg-white"></div>
                          </div>
                          <div className="flex-1 pl-4"></div>
                        </>
                      ) : (
                        <>
                          <div className="flex-1 pr-4"></div>
                          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple border-4 border-background flex items-center justify-center relative z-10">
                            <div className="w-3 h-3 rounded-full bg-white"></div>
                          </div>
                          <div className="flex-1 pl-4">
                            <div className={`bg-black/40 backdrop-blur-sm border ${borderColor} rounded-xl p-8 max-w-md`}>
                              <div className={`${textColor} text-sm font-bold mb-3 font-montserrat`}>STEP {item.step}</div>
                              <h3 className="text-xl font-bold text-white mb-3 font-montserrat">{item.title}</h3>
                              <p className="text-white/70 text-sm mb-4 leading-relaxed font-montserrat">{item.desc}</p>
                              <ul className="space-y-2">
                                {item.details.map((detail, idx) => (
                                  <li key={idx} className="flex items-center gap-2 text-xs text-white/60 font-montserrat">
                                    <CheckCircle className={`w-3 h-3 ${checkColor}`} />
                                    {detail}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Deliverables */}
      <div className="relative py-16 px-4 sm:px-6 md:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/10 via-purple-900/10 to-transparent"></div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4 font-nos">What You'll Receive</h2>
            <p className="text-white/70 max-w-2xl mx-auto font-montserrat">
              Comprehensive deliverables to build and maintain your brand
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliverables.map((item, idx) => (
              <div
                key={idx}
                className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2 font-montserrat">{item.title}</h4>
                    <p className="text-white/70 text-sm leading-relaxed font-montserrat">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="relative py-16 px-4 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4 font-nos">Why Invest in Branding?</h2>
            <p className="text-white/70 max-w-2xl mx-auto font-montserrat">
              The strategic advantages of a well-structured brand
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon
              return (
                <div
                  key={idx}
                  className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:border-purple-500/50 transition-all duration-300"
                >
                  <Icon className="w-10 h-10 text-neon-purple mx-auto mb-4" />
                  <h4 className="text-lg font-bold text-white mb-2 font-montserrat">{benefit.title}</h4>
                  <p className="text-white/70 text-sm leading-relaxed font-montserrat">{benefit.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="relative py-16 px-4 sm:px-6 md:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-transparent to-pink-900/10"></div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "200+", label: "Brands Created" },
              { number: "95%", label: "Client Satisfaction" },
              { number: "50+", label: "Industries Served" },
              { number: "10+", label: "Years Experience" },
            ].map((stat, idx) => (
              <div key={idx} className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:border-purple-500/50 transition-all duration-300">
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-pink-500 mb-2 font-nos">
                  {stat.number}
                </div>
                <div className="text-white/70 text-sm font-montserrat">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-16 px-4 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-br from-purple-900/30 via-pink-900/20 to-cyan-900/30 border border-purple-500/30 rounded-2xl p-10 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4 font-nos">Ready to Build Your Brand?</h2>
            <p className="text-white/80 text-lg mb-8 font-montserrat max-w-2xl mx-auto">
              Let's create a brand identity that reflects your values, resonates with your audience, and drives business success
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-neon-purple to-pink-500 text-white rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 font-semibold font-montserrat">
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
