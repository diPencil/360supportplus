"use client"

import * as React from "react"
import Image from "next/image"

type Hub = {
  id: string
  name: string
  country: string
  angle: number // degrees from top
  radius: number // distance from center (varying)
  animationDelay: number // for staggered animations
}

const MENA_HUBS: Hub[] = [
  { id: "riyadh", name: "Riyadh", country: "KSA", angle: 0, radius: 145, animationDelay: 0 },
  { id: "dubai", name: "Dubai", country: "UAE", angle: 38, radius: 150, animationDelay: 0.1 },
  { id: "kuwait", name: "Kuwait", country: "Kuwait", angle: 75, radius: 142, animationDelay: 0.2 },
  { id: "cairo", name: "Cairo", country: "Egypt", angle: 118, radius: 148, animationDelay: 0.3 },
  { id: "doha", name: "Doha", country: "Qatar", angle: 165, radius: 145, animationDelay: 0.4 },
  { id: "muscat", name: "Muscat", country: "Oman", angle: 205, radius: 150, animationDelay: 0.5 },
  { id: "manama", name: "Manama", country: "Bahrain", angle: 248, radius: 143, animationDelay: 0.6 },
  { id: "amman", name: "Amman", country: "Jordan", angle: 290, radius: 147, animationDelay: 0.7 },
  { id: "casablanca", name: "Casablanca", country: "Morocco", angle: 328, radius: 145, animationDelay: 0.8 },
]

export default function MenaReach() {
  const [hoveredHub, setHoveredHub] = React.useState<string | null>(null)

  // Calculate position based on angle and radius
  const getHubPosition = (angle: number, radius: number) => {
    const radian = (angle * Math.PI) / 180
    const x = Math.sin(radian) * radius
    const y = -Math.cos(radian) * radius // Negative because top is 0
    return {
      left: `calc(50% + ${x}px)`,
      top: `calc(50% + ${y}px)`,
      transform: 'translate(-50%, -50%)'
    }
  }

  return (
    <section className="relative w-full pt-8 md:pt-12 pb-24 md:pb-32 overflow-hidden bg-gradient-to-b from-[#050510] via-[#0a0a15] to-[#050510]">
      <div className="mx-auto max-w-7xl px-4 relative z-10">
        {/* Header */}
        <div className="text-center -mb-4 md:-mb-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight font-nos text-white mb-1">
            MENA 360° Reach
          </h2>
          <p className="text-base md:text-lg text-white/60 font-montserrat max-w-2xl mx-auto">
            Connecting businesses across the Middle East and North Africa
          </p>
          <div className="mx-auto mt-0.5 h-[2px] w-32 md:w-40 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full animate-pulse" />
        </div>

        {/* Main Content: Left Text | Center Shape | Right Text */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center min-h-[500px]">
          {/* Left Content */}
          <div className="lg:col-span-1 space-y-6 order-2 lg:order-1">
            <div className="space-y-4">
              <h3 className="text-xl md:text-2xl font-bold text-white font-montserrat">
                Strategic Presence
              </h3>
              <p className="text-white/70 font-montserrat text-sm md:text-base leading-relaxed">
                Our comprehensive network spans across key markets in the MENA region, ensuring seamless connectivity and localized expertise.
              </p>
            </div>
            
            <div className="pt-4 border-t border-white/10">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0 animate-pulse" />
                  <div>
                    <p className="text-white font-semibold text-sm">Regional Coverage</p>
                    <p className="text-white/60 text-xs font-montserrat">9 strategic hubs across MENA</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0 animate-pulse" style={{ animationDelay: '0.2s' }} />
                  <div>
                    <p className="text-white font-semibold text-sm">Local Expertise</p>
                    <p className="text-white/60 text-xs font-montserrat">Deep understanding of regional markets</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0 animate-pulse" style={{ animationDelay: '0.4s' }} />
                  <div>
                    <p className="text-white font-semibold text-sm">Network Integration</p>
                    <p className="text-white/60 text-xs font-montserrat">Seamless cross-border operations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Center Shape */}
          <div className="lg:col-span-1 relative min-h-[500px] flex items-center justify-center order-1 lg:order-2">
            <div className="relative">
              <div className="relative p-10 border-2 border-dashed rounded-full border-gray-400/50">
                {/* Central Hub Button */}
                <button className="group logo-circle-button relative w-[200px] h-[200px] overflow-hidden rounded-full bg-neutral-900 shadow-sm shadow-sky-500 outline outline-slate-400 -outline-offset-8 cursor-pointer transition-all duration-500">
                  {/* Before glow effect */}
                  <div className="logo-glow-before absolute w-20 h-20 bg-sky-400 rounded-full blur-xl top-12 right-12 pointer-events-none opacity-60 group-hover:opacity-100 transition-all duration-500" />
                  
                  {/* After glow effect */}
                  <div className="logo-glow-after absolute w-24 h-24 bg-sky-700 rounded-full blur-xl bottom-12 right-12 pointer-events-none opacity-60 group-hover:opacity-100 transition-all duration-500" />
                  
                  <div className="relative z-10 w-full h-full flex items-center justify-center p-3 rounded-full">
                    <Image
                      src="/logoicon.png"
                      alt="Support Plus Logo"
                      width={120}
                      height={120}
                      className="object-contain w-full h-full z-10"
                    />
                  </div>
                </button>

                {/* Location Hub Buttons Around Circle */}
                {MENA_HUBS.map((hub) => {
                  const position = getHubPosition(hub.angle, hub.radius)
                  return (
                    <button
                      key={hub.id}
                      className="absolute rounded-full cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-110 transition-all duration-500 group hub-button"
                      style={{
                        ...position,
                        animationDelay: `${hub.animationDelay}s`,
                      }}
                      onMouseEnter={() => setHoveredHub(hub.id)}
                      onMouseLeave={() => setHoveredHub(null)}
                    >
                      {/* Outer glow ring */}
                      <div className="absolute inset-0 rounded-full border border-cyan-400/30 hub-glow" />
                      
                      <span className="relative block w-[40px] h-[40px] transition-all duration-500 rounded-full bg-white/10 backdrop-blur-sm p-1 border border-cyan-400/30 z-10 hub-inner">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-full h-full text-cyan-400">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                        
                        {/* Inner pulsing dot */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-cyan-400 hub-pulse" />
                      </span>
                      
                      {/* Hub Label on Hover */}
                      {hoveredHub === hub.id && (
                        <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 bg-black/90 backdrop-blur-md border border-cyan-400/40 rounded-lg px-3 py-1.5 whitespace-nowrap z-50 animate-fade-in">
                          <p className="text-white font-semibold text-xs">{hub.name}</p>
                          <p className="text-cyan-300/70 text-[10px]">{hub.country}</p>
                          <div className="absolute left-1/2 -translate-x-1/2 -top-1 w-2 h-2 bg-black/90 border-t border-l border-cyan-400/40 rotate-45" />
                        </div>
                      )}
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-1 space-y-6 order-3">
            <div className="space-y-4">
              <h3 className="text-xl md:text-2xl font-bold text-white font-montserrat">
                Connected Network
              </h3>
              <p className="text-white/70 font-montserrat text-sm md:text-base leading-relaxed">
                From the Gulf to North Africa, our interconnected hubs enable rapid deployment, cultural alignment, and strategic business enablement across diverse markets.
              </p>
            </div>
            
            <div className="pt-4 border-t border-white/10">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0 animate-pulse" style={{ animationDelay: '0.1s' }} />
                  <div>
                    <p className="text-white font-semibold text-sm">Business Enablement</p>
                    <p className="text-white/60 text-xs font-montserrat">Comprehensive support infrastructure</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0 animate-pulse" style={{ animationDelay: '0.3s' }} />
                  <div>
                    <p className="text-white font-semibold text-sm">Market Access</p>
                    <p className="text-white/60 text-xs font-montserrat">Unlock opportunities across MENA</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0 animate-pulse" style={{ animationDelay: '0.5s' }} />
                  <div>
                    <p className="text-white font-semibold text-sm">Scalable Growth</p>
                    <p className="text-white/60 text-xs font-montserrat">Expand your footprint with confidence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translate(-50%, -5px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translate(-50%, 0) scale(1);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.2s ease-out forwards;
        }
        
        /* Hub Floating Animation */
        @keyframes hub-float {
          0%, 100% {
            transform: translate(-50%, -50%) translateY(0px);
          }
          50% {
            transform: translate(-50%, -50%) translateY(-8px);
          }
        }
        .hub-button {
          animation: hub-float 3s ease-in-out infinite;
        }
        
        /* Hub Pulse/Scale Animation */
        @keyframes hub-pulse-scale {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }
        .hub-button .hub-inner {
          animation: hub-pulse-scale 2s ease-in-out infinite;
        }
        
        /* Glow Pulse Animation */
        @keyframes hub-glow-pulse {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.15);
          }
        }
        .hub-glow {
          animation: hub-glow-pulse 2s ease-in-out infinite;
          pointer-events: none;
        }
        
        /* Inner Pulse Animation */
        @keyframes hub-pulse {
          0%, 100% {
            opacity: 0.8;
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1.3);
          }
        }
        .hub-pulse {
          animation: hub-pulse 1.5s ease-in-out infinite;
        }
        
        /* Hover Scale Animation */
        .hub-button:hover .hub-inner {
          transform: scale(1.15);
          box-shadow: 0 0 20px rgba(6, 182, 212, 0.5);
        }
        .hub-button:hover .hub-glow {
          opacity: 0.8;
          transform: scale(1.25);
        }
        
        /* Logo Circle Button Styles */
        .logo-circle-button {
          transition: all 0.5s ease;
        }
        .logo-circle-button:hover {
          transform: rotate(12deg);
        }
        .logo-glow-before {
          transition: all 0.5s ease;
        }
        .logo-circle-button:hover .logo-glow-before {
          transform: translateY(48px) translateX(-128px);
        }
        .logo-glow-after {
          transition: all 0.5s ease;
        }
        .logo-circle-button:hover .logo-glow-after {
          transform: translateX(96px);
        }
      `}</style>
    </section>
  )
}
