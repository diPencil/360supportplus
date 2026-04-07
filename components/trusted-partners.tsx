"use client"

import * as React from "react"

// Partner data - you can replace these with actual partner logos/names
const PARTNERS = [
  { id: 1, name: "Microsoft", color: "rgba(59, 130, 246, 0.3)" },
  { id: 2, name: "Oracle", color: "rgba(6, 182, 212, 0.3)" },
  { id: 3, name: "SAP", color: "rgba(139, 92, 246, 0.3)" },
  { id: 4, name: "Salesforce", color: "rgba(217, 70, 239, 0.3)" },
  { id: 5, name: "AWS", color: "rgba(236, 72, 153, 0.3)" },
  { id: 6, name: "Google Cloud", color: "rgba(34, 197, 94, 0.3)" },
  { id: 7, name: "IBM", color: "rgba(59, 130, 246, 0.3)" },
  { id: 8, name: "Adobe", color: "rgba(217, 70, 239, 0.3)" },
  { id: 9, name: "Cisco", color: "rgba(6, 182, 212, 0.3)" },
  { id: 10, name: "Dell", color: "rgba(139, 92, 246, 0.3)" },
]

const PARTNER_COLORS = [
  "rgba(59, 130, 246, 0.3)",
  "rgba(6, 182, 212, 0.3)",
  "rgba(139, 92, 246, 0.3)",
  "rgba(217, 70, 239, 0.3)",
  "rgba(236, 72, 153, 0.3)",
  "rgba(34, 197, 94, 0.3)",
  "rgba(59, 130, 246, 0.3)",
  "rgba(217, 70, 239, 0.3)",
  "rgba(6, 182, 212, 0.3)",
  "rgba(139, 92, 246, 0.3)",
]

export default function TrustedPartners() {
  return (
    <section className="relative w-full pt-8 md:pt-12 pb-20 md:pb-24 overflow-hidden bg-gradient-to-b from-[#050510] via-[#0a0a15] to-[#050510]">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="text-center -mb-10 md:-mb-12">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tight font-nos text-white">
            Trusted Partners
          </h3>
          <div className="mx-auto mt-0 h-[2px] w-24 md:w-32 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-blue rounded-full animate-pulse" />
        </div>

        {/* Layout: Carousel Left | Text Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center -mt-10 md:-mt-12">
          {/* 3D Carousel - Left */}
          <div className="order-2 lg:order-1 flex items-center justify-center min-h-[400px] md:min-h-[500px] lg:min-h-[550px] overflow-hidden">
            <div className="card-3d">
              {PARTNERS.map((partner, index) => (
                <div 
                  key={partner.id}
                  className="partner-card-3d"
                  style={{
                    animationDelay: `${-index * 2}s`,
                  }}
                >
                  <div 
                    className="w-full h-full rounded-lg bg-gradient-to-br from-white/5 via-black/40 to-black/80 backdrop-blur-sm border border-white/20 flex items-center justify-center relative"
                    style={{
                      boxShadow: `inset 0 0 15px ${PARTNER_COLORS[index]}, 0 4px 15px ${PARTNER_COLORS[index]}30`,
                    }}
                  >
                    {/* Partner name */}
                    <p className="relative z-10 text-sm md:text-base font-semibold text-white/80 font-montserrat text-center px-4 break-words">
                      {partner.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Text Content - Right */}
          <div className="order-1 lg:order-2 space-y-6">
            <div className="space-y-4">
              <h4 className="text-xl md:text-2xl font-bold text-white font-montserrat">
                Strategic Alliances
              </h4>
              <p className="text-white/70 font-montserrat text-sm md:text-base leading-relaxed">
                We collaborate with industry-leading technology partners to deliver comprehensive solutions that drive innovation and growth. Our trusted partnerships enable us to provide cutting-edge services and seamless integrations across the MENA region.
              </p>
            </div>
            
            <div className="pt-4 border-t border-white/10">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0 animate-pulse" />
                  <div>
                    <p className="text-white font-semibold text-sm">Technology Integration</p>
                    <p className="text-white/60 text-xs font-montserrat">Seamless platform connectivity</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0 animate-pulse" style={{ animationDelay: '0.2s' }} />
                  <div>
                    <p className="text-white font-semibold text-sm">Certified Expertise</p>
                    <p className="text-white/60 text-xs font-montserrat">Certified partner status across platforms</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0 animate-pulse" style={{ animationDelay: '0.4s' }} />
                  <div>
                    <p className="text-white font-semibold text-sm">Joint Solutions</p>
                    <p className="text-white/60 text-xs font-montserrat">Co-developed enterprise solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background glow effect */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] md:w-[60vw] h-96 blur-3xl opacity-10" style={{ background: "radial-gradient(closest-side, rgba(59,130,246,0.15), rgba(139,92,246,0.08) 40%, rgba(0,0,0,0) 70%)" }} />
      </div>

      <style>{`
        @keyframes autoRun3d {
          from {
            transform: perspective(800px) rotateY(-360deg);
          }
          to {
            transform: perspective(800px) rotateY(0deg);
          }
        }

        @keyframes animateBrightness {
          10% {
            filter: brightness(1);
          }
          50% {
            filter: brightness(0.4);
          }
          90% {
            filter: brightness(1);
          }
        }

        .card-3d {
          position: relative;
          width: 100%;
          max-width: 650px;
          height: 420px;
          transform-style: preserve-3d;
          transform: perspective(800px);
          animation: autoRun3d 20s linear infinite;
          will-change: transform;
        }

        .partner-card-3d {
          position: absolute;
          width: 170px;
          height: 230px;
          top: 50%;
          left: 50%;
          transform-origin: center center;
          animation: animateBrightness 20s linear infinite;
          transition-duration: 200ms;
          will-change: transform, filter;
          backface-visibility: hidden;
        }

        .card-3d:hover {
          animation-play-state: paused !important;
        }

        .card-3d:hover .partner-card-3d {
          animation-play-state: paused !important;
        }

        .partner-card-3d:nth-child(1) {
          transform: translate(-50%, -50%) rotateY(0deg) translateZ(220px);
          animation-delay: -0s;
        }

        .partner-card-3d:nth-child(2) {
          transform: translate(-50%, -50%) rotateY(36deg) translateZ(220px);
          animation-delay: -2s;
        }

        .partner-card-3d:nth-child(3) {
          transform: translate(-50%, -50%) rotateY(72deg) translateZ(220px);
          animation-delay: -4s;
        }

        .partner-card-3d:nth-child(4) {
          transform: translate(-50%, -50%) rotateY(108deg) translateZ(220px);
          animation-delay: -6s;
        }

        .partner-card-3d:nth-child(5) {
          transform: translate(-50%, -50%) rotateY(144deg) translateZ(220px);
          animation-delay: -8s;
        }

        .partner-card-3d:nth-child(6) {
          transform: translate(-50%, -50%) rotateY(180deg) translateZ(220px);
          animation-delay: -10s;
        }

        .partner-card-3d:nth-child(7) {
          transform: translate(-50%, -50%) rotateY(216deg) translateZ(220px);
          animation-delay: -12s;
        }

        .partner-card-3d:nth-child(8) {
          transform: translate(-50%, -50%) rotateY(252deg) translateZ(220px);
          animation-delay: -14s;
        }

        .partner-card-3d:nth-child(9) {
          transform: translate(-50%, -50%) rotateY(288deg) translateZ(220px);
          animation-delay: -16s;
        }

        .partner-card-3d:nth-child(10) {
          transform: translate(-50%, -50%) rotateY(324deg) translateZ(220px);
          animation-delay: -18s;
        }

        @media (min-width: 1024px) {
          .card-3d {
            max-width: 700px;
            height: 480px;
          }
          
          .partner-card-3d {
            width: 180px;
            height: 240px;
          }
        }

        @media (max-width: 768px) {
          .card-3d {
            max-width: 420px;
            height: 320px;
          }
          
          .partner-card-3d {
            width: 130px;
            height: 170px;
          }
        }
      `}</style>
    </section>
  )
}
