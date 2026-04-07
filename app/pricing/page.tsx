"use client"

import { useEffect, useState } from "react"
import Header from "@/components/header"
import FloatingParticles from "@/components/floating-particles"
import Footer from "@/components/footer"
import { Check } from "lucide-react"

export default function PricingPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const plans = [
    {
      name: "Starter",
      price: "$99",
      period: "/month",
      color: "from-blue-500 to-cyan-500",
      borderColor: "border-blue-500/30",
      popular: false,
      features: ["Up to 5 Projects", "Basic Support", "Standard Templates", "Community Access"]
    },
    {
      name: "Professional",
      price: "$299",
      period: "/month",
      color: "from-purple-500 to-pink-500",
      borderColor: "border-purple-500/30",
      popular: true,
      features: ["Unlimited Projects", "Priority Support", "All Templates", "Advanced Features", "Custom Integrations"]
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      color: "from-cyan-500 to-blue-500",
      borderColor: "border-cyan-500/30",
      popular: false,
      features: ["Everything in Professional", "Dedicated Account Manager", "Custom Solutions", "24/7 Support", "SLA Guarantee"]
    },
  ]

  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <Header />
      <FloatingParticles />
      
      <div className="relative pt-32 pb-20 px-4 sm:px-6 md:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 via-purple-900/10 to-transparent"></div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <span className="px-4 py-2 rounded-full border border-blue-500/50 bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-white text-sm font-montserrat shadow-[0_0_16px_rgba(59,130,246,0.5)]">
                Choose Your Plan
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 font-nos">
              <span className="inline-block relative">
                Pricing
                <span className="absolute -bottom-3 left-0 w-full h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 opacity-80"></span>
              </span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto font-montserrat leading-relaxed">
              Choose the plan that fits your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, idx) => (
              <div
                key={idx}
                className={`group relative bg-black/40 backdrop-blur-sm border ${plan.borderColor} rounded-2xl p-8 transition-all duration-500 hover:shadow-[0_0_40px_rgba(59,130,246,0.4)] ${plan.popular ? 'scale-105 border-purple-500/50' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold rounded-full font-montserrat">
                    MOST POPULAR
                  </div>
                )}
                
                <div className={`absolute inset-0 bg-gradient-to-br ${plan.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}></div>
                
                <div className="relative z-10">
                  <h3 className={`text-2xl font-bold mb-2 font-montserrat bg-gradient-to-r ${plan.color} bg-clip-text text-transparent`}>
                    {plan.name}
                  </h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white font-nos">{plan.price}</span>
                    <span className="text-white/60 text-lg font-montserrat">{plan.period}</span>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-3 text-white/70 font-montserrat">
                        <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${plan.color} flex items-center justify-center flex-shrink-0`}>
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full px-6 py-3 bg-gradient-to-r ${plan.color} text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold font-montserrat`}>
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
