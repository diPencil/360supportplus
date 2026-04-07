"use client"

import { useEffect, useState } from "react"
import Header from "@/components/header"
import FloatingParticles from "@/components/floating-particles"
import Footer from "@/components/footer"
import { Building2, Heart, ShoppingCart, Factory, Cpu, GraduationCap, Target, Zap, TrendingUp, Award, CheckCircle, Users, Briefcase, BarChart3 } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const industries = [
    { 
      icon: Building2, 
      title: "Financial Services", 
      desc: "Comprehensive solutions for banking, insurance, and investment firms",
      color: "from-blue-500 to-cyan-500", 
      borderColor: "border-blue-500/30",
      features: ["Regulatory Compliance", "Risk Management", "Digital Banking", "Payment Solutions"],
      challenges: ["Regulatory changes", "Cybersecurity threats", "Digital transformation", "Customer expectations"]
    },
    { 
      icon: Heart, 
      title: "Healthcare", 
      desc: "Technology solutions for medical institutions and healthcare providers",
      color: "from-pink-500 to-rose-500", 
      borderColor: "border-pink-500/30",
      features: ["Patient Management", "Telemedicine", "Medical Records", "Billing Systems"],
      challenges: ["Patient data privacy", "System interoperability", "Cost efficiency", "Quality care"]
    },
    { 
      icon: ShoppingCart, 
      title: "Retail & E-commerce", 
      desc: "End-to-end solutions for online and offline retail operations",
      color: "from-purple-500 to-indigo-500", 
      borderColor: "border-purple-500/30",
      features: ["Inventory Management", "E-commerce Platforms", "Customer Analytics", "Omnichannel Solutions"],
      challenges: ["Market competition", "Supply chain", "Customer experience", "Digital transformation"]
    },
    { 
      icon: Factory, 
      title: "Manufacturing", 
      desc: "Industrial automation and production optimization solutions",
      color: "from-orange-500 to-amber-500", 
      borderColor: "border-orange-500/30",
      features: ["Production Planning", "Quality Control", "Supply Chain", "IoT Integration"],
      challenges: ["Production efficiency", "Quality standards", "Supply chain management", "Cost optimization"]
    },
    { 
      icon: Cpu, 
      title: "Technology", 
      desc: "Innovative solutions for software and technology companies",
      color: "from-cyan-500 to-blue-500", 
      borderColor: "border-cyan-500/30",
      features: ["Cloud Infrastructure", "DevOps", "AI Integration", "Software Development"],
      challenges: ["Rapid innovation", "Talent acquisition", "Scalability", "Security"]
    },
    { 
      icon: GraduationCap, 
      title: "Education", 
      desc: "Digital solutions for schools, universities, and training centers",
      color: "from-green-500 to-emerald-500", 
      borderColor: "border-green-500/30",
      features: ["Learning Management", "Student Information Systems", "Online Learning", "Administrative Tools"],
      challenges: ["Remote learning", "Student engagement", "Resource management", "Accessibility"]
    },
  ]

  const services = [
    { icon: Briefcase, title: "Finance", desc: "Financial management, accounting, and compliance solutions", color: "from-blue-500 to-cyan-500" },
    { icon: Users, title: "HR", desc: "Human resources management and talent development", color: "from-purple-500 to-pink-500" },
    { icon: Target, title: "Marketing", desc: "Digital marketing, analytics, and campaign management", color: "from-pink-500 to-rose-500" },
    { icon: Zap, title: "Call Centers", desc: "Customer service automation and call center optimization", color: "from-cyan-500 to-blue-500" },
    { icon: Cpu, title: "Technology", desc: "IT infrastructure, software development, and tech consulting", color: "from-orange-500 to-amber-500" },
    { icon: BarChart3, title: "Analytics", desc: "Business intelligence, data analytics, and insights", color: "from-green-500 to-emerald-500" },
  ]

  const benefits = [
    { icon: TrendingUp, title: "Increased Efficiency", desc: "Streamline operations and reduce costs" },
    { icon: Award, title: "Industry Expertise", desc: "Deep understanding of your sector's needs" },
    { icon: Target, title: "Customized Solutions", desc: "Tailored to your specific requirements" },
    { icon: Zap, title: "Faster Implementation", desc: "Rapid deployment and time-to-value" },
  ]

  const successMetrics = [
    { number: "50+", label: "Industries Served", desc: "Across MENA region" },
    { number: "1000+", label: "Successful Projects", desc: "Completed successfully" },
    { number: "Long-term", label: "Client Partnerships", desc: "Built on recurring delivery" },
    { number: "Regional", label: "Delivery Coverage", desc: "On-ground and remote teams" },
  ]

  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <Header />
      <FloatingParticles />
      
      {/* Hero Section */}
      <div className="relative pt-32 pb-16 px-4 sm:px-6 md:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-transparent to-purple-900/20"></div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="px-4 py-2 rounded-full border border-cyan-500/50 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-white text-sm font-montserrat shadow-[0_0_16px_rgba(6,182,212,0.5)]">
                Industry Expertise
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 font-nos">
              <span className="inline-block relative">
                Services Industries
                <span className="absolute -bottom-3 left-0 w-full h-1.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 opacity-80"></span>
              </span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto font-montserrat leading-relaxed">
              Specialized solutions tailored to your industry's unique challenges and opportunities across the MENA region
            </p>
          </div>
        </div>
      </div>

      {/* Intro Section */}
      <div className="relative py-16 px-4 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-10 md:p-12 mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-6 font-nos text-center">Industry-Focused Solutions</h2>
              <p className="text-white/80 text-lg leading-relaxed mb-4 font-montserrat">
                At Support Plus, we understand that each industry has unique challenges, regulations, and requirements. Our Services Industries division delivers specialized solutions that address the specific needs of your sector while leveraging our comprehensive suite of business enablement services.
              </p>
              <p className="text-white/70 leading-relaxed font-montserrat">
                Whether you're in financial services, healthcare, retail, manufacturing, technology, or education, we combine deep industry expertise with cutting-edge technology to deliver solutions that drive measurable results. Our approach ensures compliance, efficiency, and growth tailored to your industry's ecosystem.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Industries Grid */}
      <div className="relative py-16 px-4 sm:px-6 md:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/10 via-transparent to-purple-900/10"></div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4 font-nos">Industries We Serve</h2>
            <p className="text-white/70 max-w-2xl mx-auto font-montserrat">
              Comprehensive solutions for diverse sectors across the MENA region
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {industries.map((industry, idx) => {
              const Icon = industry.icon
              const slug = industry.title.toLowerCase().replace(/\s+/g, '-').replace('&', 'and')
              return (
                <Link key={idx} href={`/services/${slug}`}>
                  <div className={`group relative bg-black/40 backdrop-blur-sm border ${industry.borderColor} rounded-2xl p-8 hover:border-opacity-60 transition-all duration-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:scale-[1.02] overflow-hidden cursor-pointer h-full`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                    
                    <div className="relative z-10">
                      <div className={`mb-6 w-16 h-16 rounded-xl bg-gradient-to-br ${industry.color} flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      
                      <h3 className={`text-xl font-bold mb-3 font-montserrat bg-gradient-to-r ${industry.color} bg-clip-text text-transparent`}>
                        {industry.title}
                      </h3>
                      <p className="text-white/70 text-sm leading-relaxed mb-6 font-montserrat">
                        {industry.desc}
                      </p>

                      <div className="space-y-3 mb-6">
                        <div className="text-xs text-white/50 font-montserrat uppercase tracking-wide mb-2">Key Solutions:</div>
                        {industry.features.map((feature, fIdx) => (
                          <div key={fIdx} className="flex items-center gap-2 text-sm text-white/70 font-montserrat">
                            <CheckCircle className="w-4 h-4 text-cyan-500 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center gap-2 text-sm text-cyan-500 font-montserrat group-hover:translate-x-1 transition-transform">
                        <span>Learn more</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>

      {/* Services Offered */}
      <div className="relative py-16 px-4 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4 font-nos">Our Service Offerings</h2>
            <p className="text-white/70 max-w-2xl mx-auto font-montserrat">
              Comprehensive business enablement services across all industries
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {services.map((service, idx) => {
              const Icon = service.icon
              const slug = service.title.toLowerCase().replace(/\s+/g, '-')
              return (
                <Link key={idx} href={`/services/service/${slug}`}>
                  <div className="group bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] cursor-pointer h-full">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-4`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2 font-montserrat">{service.title}</h4>
                    <p className="text-white/70 text-sm leading-relaxed mb-4 font-montserrat">{service.desc}</p>
                    <div className="flex items-center gap-2 text-sm text-cyan-500 font-montserrat group-hover:translate-x-1 transition-transform">
                      <span>Learn more</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>

      {/* Our Approach */}
      <div className="relative py-16 px-4 sm:px-6 md:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-cyan-900/10 to-transparent"></div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4 font-nos">Our Approach</h2>
            <p className="text-white/70 max-w-2xl mx-auto font-montserrat">
              How we deliver industry-specific solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Industry Analysis", desc: "Deep research into your sector's unique needs" },
              { step: "02", title: "Solution Design", desc: "Customized solutions for your challenges" },
              { step: "03", title: "Implementation", desc: "Rapid deployment with minimal disruption" },
              { step: "04", title: "Optimization", desc: "Continuous improvement and support" },
            ].map((item, idx) => (
              <div key={idx} className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 text-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold font-nos">{item.step}</span>
                </div>
                <h4 className="text-lg font-bold text-white mb-2 font-montserrat">{item.title}</h4>
                <p className="text-white/70 text-sm leading-relaxed font-montserrat">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="relative py-16 px-4 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4 font-nos">Why Choose Industry-Specific Solutions?</h2>
            <p className="text-white/70 max-w-2xl mx-auto font-montserrat">
              The strategic advantages of specialized industry solutions
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon
              return (
                <div
                  key={idx}
                  className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:border-cyan-500/50 transition-all duration-300"
                >
                  <Icon className="w-10 h-10 text-cyan-500 mx-auto mb-4" />
                  <h4 className="text-lg font-bold text-white mb-2 font-montserrat">{benefit.title}</h4>
                  <p className="text-white/70 text-sm leading-relaxed font-montserrat">{benefit.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Success Metrics */}
      <div className="relative py-16 px-4 sm:px-6 md:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/10 via-purple-900/10 to-transparent"></div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4 font-nos">Proven Results</h2>
            <p className="text-white/70 max-w-2xl mx-auto font-montserrat">
              Our track record speaks for itself
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {successMetrics.map((metric, idx) => (
              <div key={idx} className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-8 text-center hover:border-cyan-500/50 transition-all duration-300">
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500 mb-2 font-nos">
                  {metric.number}
                </div>
                <div className="text-xl font-bold text-white mb-1 font-montserrat">{metric.label}</div>
                <div className="text-white/60 text-sm font-montserrat">{metric.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Use Cases */}
      <div className="relative py-16 px-4 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4 font-nos">Industry Use Cases</h2>
            <p className="text-white/70 max-w-2xl mx-auto font-montserrat">
              Real-world applications across different sectors
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                industry: "Financial Services",
                useCase: "Digital Banking Transformation",
                desc: "Helped a regional bank modernize digital channels and improve the consistency of core customer journeys.",
                color: "from-blue-500/20 to-cyan-500/20",
                borderColor: "border-blue-500/30"
              },
              {
                industry: "Healthcare",
                useCase: "Electronic Health Records System",
                desc: "Rolled out a unified EHR workflow across multiple facilities to simplify record access and day-to-day administration.",
                color: "from-pink-500/20 to-rose-500/20",
                borderColor: "border-pink-500/30"
              },
              {
                industry: "Retail",
                useCase: "Omnichannel Retail Platform",
                desc: "Built an integrated platform linking online and in-store operations for smoother inventory and customer experience management.",
                color: "from-purple-500/20 to-indigo-500/20",
                borderColor: "border-purple-500/30"
              },
              {
                industry: "Manufacturing",
                useCase: "Smart Factory Implementation",
                desc: "Implemented IoT monitoring and automation layers to improve visibility, planning, and production control.",
                color: "from-orange-500/20 to-amber-500/20",
                borderColor: "border-orange-500/30"
              }
            ].map((case_, idx) => (
              <div
                key={idx}
                className={`bg-gradient-to-br ${case_.color} backdrop-blur-sm border ${case_.borderColor} rounded-xl p-8 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all duration-300`}
              >
                <div className="text-sm text-white/60 mb-2 font-montserrat uppercase tracking-wide">{case_.industry}</div>
                <h4 className="text-xl font-bold text-white mb-3 font-montserrat">{case_.useCase}</h4>
                <p className="text-white/80 leading-relaxed font-montserrat">{case_.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-16 px-4 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-br from-cyan-900/30 via-purple-900/20 to-blue-900/30 border border-cyan-500/30 rounded-2xl p-10 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4 font-nos">Ready to Transform Your Industry?</h2>
            <p className="text-white/80 text-lg mb-8 font-montserrat max-w-2xl mx-auto">
              Let's discuss how our industry-specific solutions can drive growth and efficiency in your sector
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
