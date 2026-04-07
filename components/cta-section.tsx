"use client"

import * as React from "react"
import { Sparkles } from "lucide-react"

export default function CTASection() {
  return (
    <section className="relative w-full -mt-8 md:-mt-12 py-20 md:py-32 overflow-hidden bg-gradient-to-b from-[#0a0a20] via-[#050510] to-[#0a0806]">
      {/* Background Effects - Reference Style */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large Curved Glow - Left Side */}
        <div className="absolute left-0 top-0 w-[600px] h-[800px] md:w-[800px] md:h-[1000px] -translate-x-1/3 -translate-y-1/4 cta-glow-shape cta-glow-left" />
        
        {/* Large Curved Glow - Right Side */}
        <div className="absolute right-0 bottom-0 w-[500px] h-[700px] md:w-[700px] md:h-[900px] translate-x-1/3 translate-y-1/4 cta-glow-shape cta-glow-right" />
        
        {/* Central Glow Behind Content */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vh] blur-3xl opacity-30" 
          style={{ 
            background: "radial-gradient(circle, rgba(59,130,246,0.4) 0%, rgba(139,92,246,0.3) 40%, transparent 70%)" 
          }} 
        />
      </div>

      <div className="mx-auto max-w-4xl px-4 relative z-10">
        <div className="text-center">
          {/* Main Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight font-nos text-white mb-6 md:mb-8 relative z-10">
            Your next big idea's just one prompt away.
          </h2>

          {/* Feature List */}
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 mb-8 md:mb-12">
            {[
              "Unlimited Projects",
              "No credit card required",
              "Publish for free",
              "120+ free credits"
            ].map((feature, index) => (
              <div 
                key={index}
                className="px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-white/70 text-sm md:text-base font-montserrat"
              >
                {feature}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="cta-button-wrapper">
            <a href="#" className="cta-button" role="button">
              <span className="cta-fold" />
              <span className="cta-points_wrapper">
                {Array.from({ length: 10 }).map((_, i) => (
                  <span key={i} className="cta-point" />
                ))}
              </span>
              <span className="cta-inner">
                <Sparkles className="cta-icon" />
                Get Started
              </span>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .cta-glow-shape {
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.4;
          will-change: transform;
        }

        .cta-glow-left {
          background: radial-gradient(circle, rgba(200, 220, 255, 0.6) 0%, rgba(150, 180, 255, 0.4) 30%, rgba(100, 140, 255, 0.2) 60%, transparent 100%);
          animation: cta-float-left 8s ease-in-out infinite;
        }

        .cta-glow-right {
          background: radial-gradient(circle, rgba(180, 200, 255, 0.5) 0%, rgba(120, 160, 255, 0.3) 30%, rgba(80, 120, 200, 0.15) 60%, transparent 100%);
          animation: cta-float-right 10s ease-in-out infinite;
        }

        @keyframes cta-float-left {
          0%, 100% {
            transform: translate(-33%, -25%) scale(1);
            opacity: 0.4;
          }
          50% {
            transform: translate(-30%, -20%) scale(1.1);
            opacity: 0.5;
          }
        }

        @keyframes cta-float-right {
          0%, 100% {
            transform: translate(33%, 25%) scale(1);
            opacity: 0.3;
          }
          50% {
            transform: translate(30%, 30%) scale(1.1);
            opacity: 0.4;
          }
        }

        /* CTA Button - Mission Style */
        .cta-button-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .cta-button {
          --h-button: 48px;
          --w-button: 102px;
          --round: 0.75rem;
          cursor: pointer;
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          transition: all 0.25s ease;
          background: radial-gradient(65.28% 65.28% at 50% 100%, rgba(223,113,255,.8) 0%, rgba(223,113,255,0) 100%), linear-gradient(0deg, #7a5af8, #7a5af8);
          border-radius: var(--round);
          border: none;
          outline: none;
          padding: 12px 24px;
          text-decoration: none;
        }

        .cta-button::before,
        .cta-button::after {
          content: "";
          position: absolute;
          inset: var(--space);
          transition: all 0.5s ease-in-out;
          border-radius: calc(var(--round) - var(--space));
          z-index: 0;
        }

        .cta-button::before {
          --space: 1px;
          background: linear-gradient(177.95deg, rgba(255,255,255,.19) 0%, rgba(255,255,255,0) 100%);
        }

        .cta-button::after {
          --space: 2px;
          background: radial-gradient(65.28% 65.28% at 50% 100%, rgba(223,113,255,.8) 0%, rgba(223,113,255,0) 100%), linear-gradient(0deg, #7a5af8, #7a5af8);
        }

        .cta-button:active {
          transform: scale(0.95);
        }

        .cta-fold {
          z-index: 1;
          position: absolute;
          top: 0;
          right: 0;
          height: 1rem;
          width: 1rem;
          display: inline-block;
          transition: all 0.5s ease-in-out;
          background: radial-gradient(100% 75% at 55%, rgba(223,113,255,.8) 0%, rgba(223,113,255,0) 100%);
          box-shadow: 0 0 3px black;
          border-bottom-left-radius: 0.5rem;
          border-top-right-radius: var(--round);
        }

        .cta-fold::after {
          content: "";
          position: absolute;
          top: 0;
          right: 0;
          width: 150%;
          height: 150%;
          transform: rotate(45deg) translateX(0%) translateY(-18px);
          background-color: #e8e8e8;
          pointer-events: none;
        }

        .cta-button:hover .cta-fold {
          margin-top: -1rem;
          margin-right: -1rem;
        }

        .cta-points_wrapper {
          overflow: hidden;
          width: 100%;
          height: 100%;
          pointer-events: none;
          position: absolute;
          z-index: 1;
        }

        .cta-point {
          bottom: -10px;
          position: absolute;
          animation: cta-floating-points infinite ease-in-out;
          pointer-events: none;
          width: 2px;
          height: 2px;
          background-color: #fff;
          border-radius: 9999px;
        }

        @keyframes cta-floating-points {
          0% { transform: translateY(0); }
          85% { opacity: 0; }
          100% { transform: translateY(-55px); opacity: 0; }
        }

        .cta-point:nth-child(1) { left: 10%; opacity: 1; animation-duration: 2.35s; animation-delay: 0.2s; }
        .cta-point:nth-child(2) { left: 30%; opacity: 0.7; animation-duration: 2.5s; animation-delay: 0.5s; }
        .cta-point:nth-child(3) { left: 25%; opacity: 0.8; animation-duration: 2.2s; animation-delay: 0.1s; }
        .cta-point:nth-child(4) { left: 44%; opacity: 0.6; animation-duration: 2.05s; }
        .cta-point:nth-child(5) { left: 50%; opacity: 1; animation-duration: 1.9s; }
        .cta-point:nth-child(6) { left: 75%; opacity: 0.5; animation-duration: 1.5s; animation-delay: 1.5s; }
        .cta-point:nth-child(7) { left: 88%; opacity: 0.9; animation-duration: 2.2s; animation-delay: 0.2s; }
        .cta-point:nth-child(8) { left: 58%; opacity: 0.8; animation-duration: 2.25s; animation-delay: 0.2s; }
        .cta-point:nth-child(9) { left: 98%; opacity: 0.6; animation-duration: 2.6s; animation-delay: 0.1s; }
        .cta-point:nth-child(10) { left: 65%; opacity: 1; animation-duration: 2.5s; animation-delay: 0.2s; }

        .cta-inner {
          z-index: 2;
          gap: 6px;
          position: relative;
          width: 100%;
          color: white;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          font-weight: 600;
          line-height: 1.5;
          transition: color 0.2s ease-in-out;
          font-family: 'Montserrat', sans-serif;
        }

        .cta-icon {
          width: 18px;
          height: 18px;
          transition: transform 0.25s ease, fill 0.1s linear;
        }

        .cta-button:hover .cta-icon {
          animation: cta-icon-wiggle 0.6s ease both;
          transform: translateY(-2px) scale(1.05);
        }

        @keyframes cta-icon-wiggle {
          0% { transform: translateY(0) rotate(0deg); }
          30% { transform: translateY(-2px) rotate(-12deg); }
          60% { transform: translateY(-2px) rotate(10deg); }
          100% { transform: translateY(-2px) rotate(0deg); }
        }

        @media (min-width: 768px) {
          .cta-button {
            padding: 14px 28px;
          }
          .cta-inner {
            font-size: 18px;
          }
        }
      `}</style>
    </section>
  )
}

