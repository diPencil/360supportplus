"use client"

import { Sparkles, Target, HeartHandshake, Lightbulb, BarChart3, TrendingUp, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

function SectionWrapper({ id, title, subtitle, children, className }: { id: string; title: string; subtitle: string; children: React.ReactNode; className?: string }) {
  return (
    <section id={id} className={`relative w-full py-20 md:py-24 overflow-hidden ${className ?? ''}`}>
      {/* soft ambient glow per section */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[90vw] md:w-[70vw] h-48 blur-3xl opacity-25"
             style={{ background: "radial-gradient(closest-side, rgba(59,130,246,0.18), rgba(139,92,246,0.12) 40%, rgba(0,0,0,0) 70%)" }} />
      </div>

      <div className="mx-auto max-w-6xl px-4 relative z-10">
        <div className="text-center mb-8 md:mb-10">
          <h3 className="text-3xl md:text-4xl font-black tracking-tight font-nos">
            {title}
          </h3>
          <p className="mt-3 text-sm md:text-base text-white/75 font-montserrat max-w-3xl mx-auto">
            {subtitle}
          </p>
          <div className="mx-auto mt-4 h-[2px] w-24 md:w-32 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-blue rounded-full animate-pulse-glow" />
        </div>
        {children}
      </div>
    </section>
  )
}

export function MissionSection() {
  return (
    <SectionWrapper
      id="mission"
      title="Our Mission"
      subtitle="Focus on empowering businesses across MENA through strategy, execution, and intelligent systems."
      className="-mt-12 md:-mt-20 lg:-mt-24"
    >
      {/* Split layout like reference: text left, visual right */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12">
        {/* Left copy */}
        <div className="order-2 md:order-1">
          <h4 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-white font-montserrat leading-tight">
            We empower businesses
            <br className="hidden md:block" />
            across the MENA region
          </h4>
          <p className="mt-4 text-sm md:text-base text-white/75 font-montserrat max-w-xl">
            Entrust your growth to an integrated team where strategy meets execution and intelligent systems amplify performance.
          </p>
          <div className="mt-6 mission-cta">
            <a href="#target" className="button" role="button">
              <span className="fold" />
              <span className="points_wrapper">
                {Array.from({ length: 10 }).map((_, i) => (
                  <span key={i} className="point" />
                ))}
              </span>
              <span className="inner">
                <Sparkles className="icon" />
                Get a free consultation
              </span>
            </a>
          </div>
        </div>

        {/* Right visual - Uiverse 3D card style */}
        <div className="relative order-1 md:order-2 flex justify-center mission-card">
          <div className="container" aria-hidden="true">
            {/* 5x5 hover tracker grid for tilt */}
            <div className="canvas noselect">
              {Array.from({ length: 25 }).map((_, i) => (
                <div key={i} className={`tr-${i + 1}`} />
              ))}
            </div>
            <div className="tracker" />
            <div id="card">
              <div className="card-content">
                <div id="prompt"><img src="/logoicon.png" alt="Support Plus" className="opacity-90" /></div>
                <div className="title">MISSION</div>
                <div className="subtitle">Empowering businesses across MENA<span className="highlight"> with intelligence</span></div>

                {/* decorations */}
                <div className="glowing-elements">
                  <div className="glow-1" />
                  <div className="glow-2" />
                  <div className="glow-3" />
                </div>
                <div className="card-particles">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <span key={i} />
                  ))}
                </div>
                <div className="corner-elements">
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
                <div className="cyber-lines">
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
                <div className="card-glare" />
                <div className="scan-line" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        /* Mission CTA (scoped) */
        .mission-cta .button { --h-button:48px; --w-button:102px; --round:.75rem; cursor:pointer; position:relative; display:inline-flex; align-items:center; justify-content:center; overflow:hidden; transition:all .25s ease; background: radial-gradient(65.28% 65.28% at 50% 100%, rgba(223,113,255,.8) 0%, rgba(223,113,255,0) 100%), linear-gradient(0deg, #7a5af8, #7a5af8); border-radius: var(--round); border:none; outline:none; padding:12px 18px; }
        .mission-cta .button::before, .mission-cta .button::after { content:""; position:absolute; inset:var(--space); transition: all .5s ease-in-out; border-radius: calc(var(--round) - var(--space)); z-index:0; }
        .mission-cta .button::before { --space:1px; background: linear-gradient(177.95deg, rgba(255,255,255,.19) 0%, rgba(255,255,255,0) 100%); }
        .mission-cta .button::after { --space:2px; background: radial-gradient(65.28% 65.28% at 50% 100%, rgba(223,113,255,.8) 0%, rgba(223,113,255,0) 100%), linear-gradient(0deg, #7a5af8, #7a5af8); }
        .mission-cta .button:active { transform: scale(.95); }
        .mission-cta .fold { z-index:1; position:absolute; top:0; right:0; height:1rem; width:1rem; display:inline-block; transition: all .5s ease-in-out; background: radial-gradient(100% 75% at 55%, rgba(223,113,255,.8) 0%, rgba(223,113,255,0) 100%); box-shadow: 0 0 3px black; border-bottom-left-radius:.5rem; border-top-right-radius: var(--round); }
        .mission-cta .fold::after { content:""; position:absolute; top:0; right:0; width:150%; height:150%; transform: rotate(45deg) translateX(0%) translateY(-18px); background-color:#e8e8e8; pointer-events:none; }
        .mission-cta .button:hover .fold { margin-top:-1rem; margin-right:-1rem; }
        .mission-cta .points_wrapper { overflow:hidden; width:100%; height:100%; pointer-events:none; position:absolute; z-index:1; }
        .mission-cta .points_wrapper .point { bottom:-10px; position:absolute; animation: floating-points infinite ease-in-out; pointer-events:none; width:2px; height:2px; background-color:#fff; border-radius:9999px; }
        @keyframes floating-points { 0% { transform: translateY(0);} 85% { opacity:0;} 100% { transform: translateY(-55px); opacity:0; } }
        .mission-cta .points_wrapper .point:nth-child(1){ left:10%; opacity:1; animation-duration:2.35s; animation-delay:.2s; }
        .mission-cta .points_wrapper .point:nth-child(2){ left:30%; opacity:.7; animation-duration:2.5s; animation-delay:.5s; }
        .mission-cta .points_wrapper .point:nth-child(3){ left:25%; opacity:.8; animation-duration:2.2s; animation-delay:.1s; }
        .mission-cta .points_wrapper .point:nth-child(4){ left:44%; opacity:.6; animation-duration:2.05s; }
        .mission-cta .points_wrapper .point:nth-child(5){ left:50%; opacity:1; animation-duration:1.9s; }
        .mission-cta .points_wrapper .point:nth-child(6){ left:75%; opacity:.5; animation-duration:1.5s; animation-delay:1.5s; }
        .mission-cta .points_wrapper .point:nth-child(7){ left:88%; opacity:.9; animation-duration:2.2s; animation-delay:.2s; }
        .mission-cta .points_wrapper .point:nth-child(8){ left:58%; opacity:.8; animation-duration:2.25s; animation-delay:.2s; }
        .mission-cta .points_wrapper .point:nth-child(9){ left:98%; opacity:.6; animation-duration:2.6s; animation-delay:.1s; }
        .mission-cta .points_wrapper .point:nth-child(10){ left:65%; opacity:1; animation-duration:2.5s; animation-delay:.2s; }
        .mission-cta .inner { z-index:2; gap:6px; position:relative; width:100%; color:white; display:inline-flex; align-items:center; justify-content:center; font-size:16px; font-weight:600; line-height:1.5; transition: color .2s ease-in-out; }
        .mission-cta .inner .icon { width:18px; height:18px; transition: transform .25s ease, fill .1s linear; }
        .mission-cta .button:hover .inner .icon { animation: icon-wiggle .6s ease both; transform: translateY(-2px) scale(1.05); }
        @keyframes icon-wiggle { 0% { transform: translateY(0) rotate(0deg); } 30% { transform: translateY(-2px) rotate(-12deg); } 60% { transform: translateY(-2px) rotate(10deg); } 100% { transform: translateY(-2px) rotate(0deg); } }
        .mission-card .container { position: relative; width: 240px; height: 320px; transition: 200ms; }
        .mission-card .container:active { width: 232px; height: 312px; }
        @media (min-width: 768px) {
          .mission-card .container { width: 280px; height: 380px; }
          .mission-card .container:active { width: 272px; height: 372px; }
        }
        .mission-card #card { position: absolute; inset: 0; z-index: 0; display: flex; justify-content: center; align-items: center; border-radius: 20px; transition: 700ms; background: linear-gradient(45deg, #1a1a1a, #262626); border: 2px solid rgba(255, 255, 255, 0.1); overflow: hidden; box-shadow: 0 0 20px rgba(0,0,0,0.3), inset 0 0 20px rgba(0,0,0,0.2); }
        .mission-card .card-content { position: relative; width: 100%; height: 100%; }
        .mission-card #prompt { bottom: 70px; left: 50%; transform: translateX(-50%); z-index: 20; transition: 300ms ease-in-out; position: absolute; text-align: center; }
        @media (min-width: 768px) { .mission-card #prompt { bottom: 90px; } }
        .mission-card #prompt img { width: 300px; height: auto; filter: drop-shadow(0 0 10px rgba(255,255,255,0.25)); animation: logoFloat 4s ease-in-out infinite alternate; }
        @media (min-width: 768px) { .mission-card #prompt img { width: 380px; } }
        @keyframes logoFloat { 0% { transform: translateY(0px); } 100% { transform: translateY(-10px); } }
        /* removed spin for a simple, natural float */
        .mission-card .title { opacity: 0; transition: 300ms ease-in-out; position: absolute; font-size: 28px; font-weight: 800; letter-spacing: 4px; text-align: center; width: 100%; padding-top: 20px; background: linear-gradient(45deg, #00ffaa, #00a2ff); -webkit-background-clip: text; -webkit-text-fill-color: transparent; filter: drop-shadow(0 0 15px rgba(0,255,170,0.3)); text-shadow: 0 0 10px rgba(92,103,255,0.5), 0 0 20px rgba(92,103,255,0.3); }
        .mission-card .subtitle { position: absolute; bottom: 40px; width: 100%; text-align: center; font-size: 12px; letter-spacing: 2px; transform: translateY(30px); color: rgba(255,255,255,0.6); }
        .mission-card .highlight { margin-left: 5px; background: linear-gradient(90deg, #5c67ff, #ad51ff); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-weight: bold; }
        .mission-card .glowing-elements { position: absolute; inset: 0; pointer-events: none; }
        .mission-card .glow-1, .mission-card .glow-2, .mission-card .glow-3 { position: absolute; width: 100px; height: 100px; border-radius: 50%; background: radial-gradient(circle at center, rgba(0,255,170,0.3) 0%, rgba(0,255,170,0) 70%); filter: blur(15px); opacity: 0; transition: opacity .3s ease; }
        .mission-card .glow-1 { top: -20px; left: -20px; }
        .mission-card .glow-2 { top: 50%; right: -30px; transform: translateY(-50%); }
        .mission-card .glow-3 { bottom: -20px; left: 30%; }
        .mission-card .card-particles span { position: absolute; width: 3px; height: 3px; background: #00ffaa; border-radius: 50%; opacity: 0; transition: opacity .3s ease; }
        .mission-card .tracker:hover ~ #card .title { opacity: 1; transform: translateY(-10px); }
        .mission-card .tracker:hover ~ #card .glowing-elements div { opacity: 1; }
        .mission-card .tracker:hover ~ #card .card-particles span { animation: particleFloat 2s infinite; }
        @keyframes particleFloat { 0% { transform: translate(0,0); opacity: 0; } 50% { opacity: 1; } 100% { transform: translate(calc(var(--x,0) * 30px), calc(var(--y,0) * 30px)); opacity: 0; } }
        .mission-card .card-particles span:nth-child(1) { --x: 1; --y: -1; top: 40%; left: 20%; }
        .mission-card .card-particles span:nth-child(2) { --x: -1; --y: -1; top: 60%; right: 20%; }
        .mission-card .card-particles span:nth-child(3) { --x: .5; --y: 1; top: 20%; left: 40%; }
        .mission-card .card-particles span:nth-child(4) { --x: -.5; --y: 1; top: 80%; right: 40%; }
        .mission-card .card-particles span:nth-child(5) { --x: 1; --y: .5; top: 30%; left: 60%; }
        .mission-card .card-particles span:nth-child(6) { --x: -1; --y: .5; top: 70%; right: 60%; }
        .mission-card #card::before { content: ""; background: radial-gradient(circle at center, rgba(0,255,170,0.1) 0%, rgba(0,162,255,0.05) 50%, transparent 100%); filter: blur(20px); opacity: 0; width: 150%; height: 150%; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); transition: opacity .3s ease; }
        .mission-card .tracker:hover ~ #card::before { opacity: 1; }
        .mission-card .tracker { position: absolute; z-index: 200; width: 100%; height: 100%; }
        .mission-card .tracker:hover { cursor: pointer; }
        /* Keep logo visible on hover */
        .mission-card .tracker:hover ~ #card { transition: 300ms; filter: brightness(1.1); }
        .mission-card .container:hover #card::before { transition: 200ms; content: ""; opacity: 0.8; }
        .mission-card .canvas { perspective: 800px; inset: 0; z-index: 200; position: absolute; display: grid; grid-template-columns: repeat(5,1fr); grid-template-rows: repeat(5,1fr); grid-template-areas: "tr-1 tr-2 tr-3 tr-4 tr-5" "tr-6 tr-7 tr-8 tr-9 tr-10" "tr-11 tr-12 tr-13 tr-14 tr-15" "tr-16 tr-17 tr-18 tr-19 tr-20" "tr-21 tr-22 tr-23 tr-24 tr-25"; }
        ${Array.from({length:25}).map((_,i)=>`.mission-card .tr-${i+1}{ grid-area: tr-${i+1}; }`).join(' ')}
        .mission-card .tr-1:hover ~ #card { transition: 125ms ease-in-out; transform: rotateX(20deg) rotateY(-10deg) rotateZ(0deg); }
        .mission-card .tr-2:hover ~ #card { transition: 125ms ease-in-out; transform: rotateX(20deg) rotateY(-5deg) rotateZ(0deg); }
        .mission-card .tr-3:hover ~ #card { transition: 125ms ease-in-out; transform: rotateX(20deg) rotateY(0deg) rotateZ(0deg); }
        .mission-card .tr-4:hover ~ #card { transition: 125ms ease-in-out; transform: rotateX(20deg) rotateY(5deg) rotateZ(0deg); }
        .mission-card .tr-5:hover ~ #card { transition: 125ms ease-in-out; transform: rotateX(20deg) rotateY(10deg) rotateZ(0deg); }
        .mission-card .tr-6:hover ~ #card { transition: 125ms ease-in-out; transform: rotateX(10deg) rotateY(-10deg) rotateZ(0deg); }
        .mission-card .tr-7:hover ~ #card { transition: 125ms ease-in-out; transform: rotateX(10deg) rotateY(-5deg) rotateZ(0deg); }
        .mission-card .tr-8:hover ~ #card { transition: 125ms ease-in-out; transform: rotateX(10deg) rotateY(0deg) rotateZ(0deg); }
        .mission-card .tr-9:hover ~ #card { transition: 125ms ease-in-out; transform: rotateX(10deg) rotateY(5deg) rotateZ(0deg); }
        .mission-card .tr-10:hover ~ #card { transition: 125ms ease-in-out; transform: rotateX(10deg) rotateY(10deg) rotateZ(0deg); }
        .mission-card .tr-11:hover ~ #card { transition: 125ms ease-in-out; transform: rotateX(0deg) rotateY(-10deg) rotateZ(0deg); }
        .mission-card .tr-12:hover ~ #card { transition: 125ms ease-in-out; transform: rotateX(0deg) rotateY(-5deg) rotateZ(0deg); }
        .mission-card .tr-13:hover ~ #card { transition: 125ms ease-in-out; transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg); }
        .mission-card .tr-14:hover ~ #card { transition: 125ms ease-in-out; transform: rotateX(0deg) rotateY(5deg) rotateZ(0deg); }
        .mission-card .tr-15:hover ~ #card { transition: 125ms ease-in-out; transform: rotateX(0deg) rotateY(10deg) rotateZ(0deg); }
        .mission-card .tr-16:hover ~ #card { transition: 125ms ease-in-out; transform: rotateX(-10deg) rotateY(-10deg) rotateZ(0deg); }
        .mission-card .tr-17:hover ~ #card { transition: 125ms ease-in-out; transform: rotateX(-10deg) rotateY(-5deg) rotateZ(0deg); }
        .mission-card .tr-18:hover ~ #card { transition: 125ms ease-in-out; transform: rotateX(-10deg) rotateY(0deg) rotateZ(0deg); }
        .mission-card .tr-19:hover ~ #card { transition: 125ms ease-in-out; transform: rotateX(-10deg) rotateY(5deg) rotateZ(0deg); }
        .mission-card .tr-20:hover ~ #card { transition: 125ms ease-in-out; transform: rotateX(-10deg) rotateY(10deg) rotateZ(0deg); }
        .mission-card .tr-21:hover ~ #card { transition: 125ms ease-in-out; transform: rotateX(-20deg) rotateY(-10deg) rotateZ(0deg); }
        .mission-card .tr-22:hover ~ #card { transition: 125ms ease-in-out; transform: rotateX(-20deg) rotateY(-5deg) rotateZ(0deg); }
        .mission-card .tr-23:hover ~ #card { transition: 125ms ease-in-out; transform: rotateX(-20deg) rotateY(0deg) rotateZ(0deg); }
        .mission-card .tr-24:hover ~ #card { transition: 125ms ease-in-out; transform: rotateX(-20deg) rotateY(5deg) rotateZ(0deg); }
        .mission-card .tr-25:hover ~ #card { transition: 125ms ease-in-out; transform: rotateX(-20deg) rotateY(10deg) rotateZ(0deg); }
        .mission-card .noselect { -webkit-touch-callout: none; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; }
        .mission-card .card-glare { position: absolute; inset: 0; background: linear-gradient(125deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.05) 45%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.05) 55%, rgba(255,255,255,0) 100%); opacity: 0; transition: opacity 300ms; }
        .mission-card .cyber-lines span { position: absolute; background: linear-gradient(90deg, transparent, rgba(92,103,255,0.2), transparent); }
        .mission-card .cyber-lines span:nth-child(1) { top: 20%; left: 0; width: 100%; height: 1px; transform: scaleX(0); transform-origin: left; animation: lineGrow 3s linear infinite; }
        .mission-card .cyber-lines span:nth-child(2) { top: 40%; right: 0; width: 100%; height: 1px; transform: scaleX(0); transform-origin: right; animation: lineGrow 3s linear infinite 1s; }
        .mission-card .cyber-lines span:nth-child(3) { top: 60%; left: 0; width: 100%; height: 1px; transform: scaleX(0); transform-origin: left; animation: lineGrow 3s linear infinite 2s; }
        .mission-card .cyber-lines span:nth-child(4) { top: 80%; right: 0; width: 100%; height: 1px; transform: scaleX(0); transform-origin: right; animation: lineGrow 3s linear infinite 1.5s; }
        .mission-card .corner-elements span { position: absolute; width: 15px; height: 15px; border: 2px solid rgba(92,103,255,0.3); transition: all .3s ease; }
        .mission-card .corner-elements span:nth-child(1) { top: 10px; left: 10px; border-right: 0; border-bottom: 0; }
        .mission-card .corner-elements span:nth-child(2) { top: 10px; right: 10px; border-left: 0; border-bottom: 0; }
        .mission-card .corner-elements span:nth-child(3) { bottom: 10px; left: 10px; border-right: 0; border-top: 0; }
        .mission-card .corner-elements span:nth-child(4) { bottom: 10px; right: 10px; border-left: 0; border-top: 0; }
        .mission-card .scan-line { position: absolute; inset: 0; background: linear-gradient(to bottom, transparent, rgba(92,103,255,0.1), transparent); transform: translateY(-100%); animation: scanMove 2s linear infinite; }
        @keyframes lineGrow { 0% { transform: scaleX(0); opacity: 0; } 50% { transform: scaleX(1); opacity: 1; } 100% { transform: scaleX(0); opacity: 0; } }
        @keyframes scanMove { 0% { transform: translateY(-100%); } 100% { transform: translateY(100%); } }
        .mission-card #card:hover .card-glare { opacity: 1; }
        .mission-card #card:hover .corner-elements span { border-color: rgba(92,103,255,0.8); box-shadow: 0 0 10px rgba(92,103,255,0.5); }
      `}</style>
    </SectionWrapper>
  )
}

export function VisionSection() {
  return (
    <SectionWrapper
      id="vision"
      title="Our Vision"
      subtitle="To become the region’s leading force in 360° business enablement — where innovation and intelligence redefine growth."
      className="-mt-16 md:-mt-24 lg:-mt-28"
    >
      {/* Reference-style split layout: left copy, center visual, right stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 items-center -mt-6 md:-mt-8 lg:-mt-10 -mb-6 md:mb-0">
        {/* Left copy */}
        <div className="order-2 md:order-1">
          <div className="text-white/60 font-montserrat text-xs tracking-wider mb-3 flex items-center gap-2">
            <span className="inline-block w-3 h-[2px] bg-white/60 rounded" />
            OUR VISION
          </div>
          <h4 className="text-xl md:text-3xl lg:text-4xl font-black font-montserrat leading-[1.1] text-white">
            <span className="whitespace-nowrap">The most strategic</span>
            <br />
            <span className="whitespace-nowrap">growth trading <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-purple drop-shadow-[0_0_18px_rgba(139,92,246,0.35)]">center</span></span>
          </h4>
          <p className="mt-5 text-white/70 font-montserrat max-w-md">
            Buy into real execution: integrate, automate and scale with measurable outcomes across Finance, HR, Marketing and Operations.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a href="#" className="sp-button">
              <span className="sp-button__fold" />
              <span className="sp-button__points">
                {Array.from({ length: 10 }).map((_, i) => (
                  <span key={i} className="sp-button__point" />
                ))}
              </span>
              <span className="sp-button__inner">Start transformation</span>
            </a>
            <button className="w-10 h-10 rounded-full grid place-items-center bg-gradient-to-r from-neon-blue to-neon-purple text-white shadow-[0_0_18px_rgba(139,92,246,0.45)]">↗</button>
          </div>
        </div>

        {/* Center visual - replace with man.png */}
        <div className="order-1 md:order-2 flex justify-center -mb-4 md:mb-0">
          <div className="relative w-64 h-80 md:w-[24rem] md:h-[30rem]">
            <div className="absolute -inset-10 rounded-[32px] blur-3xl opacity-25" style={{ background: 'radial-gradient(closest-side, rgba(59,130,246,0.25), rgba(139,92,246,0.2), transparent 70%)' }} />
            <img src="/man.png" alt="Vision Visual" className="relative w-full h-full object-contain drop-shadow-[0_0_28px_rgba(139,92,246,0.35)] animate-[float_6s_ease-in-out_infinite]" />
          </div>
        </div>

        {/* Right stats */}
        <div className="order-3 md:order-3 text-white/80 font-montserrat space-y-6 md:pl-4">
          {[
            { value: '600+', label: 'Businesses enabled' },
            { value: '50+', label: 'Experts across domains' },
            { value: '99.9%', label: 'Service reliability (SLA)' },
            { value: '< 0.10%', label: 'Churn across retained clients' },
          ].map((s, i) => (
            <div key={i} className="flex flex-col">
              <div className="text-2xl md:text-3xl font-extrabold text-white">{s.value}</div>
              <div className="text-xs md:text-sm text-white/60 -mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes float { 0% { transform: translateY(0) } 50% { transform: translateY(-8px) } 100% { transform: translateY(0) } }
      `}</style>
    </SectionWrapper>
  )
}

export function ValueSection() {
  const items = [
    { icon: HeartHandshake, title: "Integrity", text: "Doing the right thing — always.", color: "blue" },
    { icon: Lightbulb, title: "Innovation", text: "Inventing better ways to grow.", color: "purple" },
    { icon: Sparkles, title: "Impact", text: "Results that matter and last.", color: "blue" },
  ]
  return (
    <SectionWrapper
      id="value"
      title="Our Core Values"
      subtitle="Integrity, Innovation, and Impact — the principles driving every project and partnership we build."
      className="-mt-16 md:-mt-28 lg:-mt-40"
    >
      {/* Reference-style: glass stacked cards with slight rotation */}
      <div className="values-glass container mx-auto max-w-5xl justify-center">
        {items.map(({ icon: Icon, title, text, color }, i) => (
          <div
            key={i}
            className={`glass ${color}`}
            style={{ ['--r' as any]: i === 0 ? -10 : i === 1 ? 0 : 10 }}
          >
            <div className="value-content">
              <div className="icon-wrap">
                <Icon className="h-10 w-10 text-white" />
              </div>
              <h6 className="value-title font-montserrat">{title}</h6>
              <p className="value-desc font-montserrat">{text}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 text-center text-white/70 font-montserrat max-w-3xl mx-auto">
        Results powered by integrity, creativity, and measurable impact.
      </div>
      
      <style>{`
        /* Scoped Uiverse glass cards */
        .values-glass.container { position: relative; display: flex; justify-content: center; align-items: center; }
        .values-glass .glass { position: relative; width: 190px; height: 220px; background: linear-gradient(#ffffff22, transparent); border: 1px solid rgba(255,255,255,0.1); box-shadow: 0 25px 25px rgba(0,0,0,0.25); display: flex; justify-content: center; align-items: center; transition: .5s; border-radius: 12px; margin: 0 -45px; backdrop-filter: blur(10px); transform: rotate(calc(var(--r) * 1deg)); overflow: hidden; }
        .values-glass .glass svg { font-size: 2.5em; fill: #fff; }
        .values-glass .glass .value-content { display:flex; flex-direction:column; align-items:center; text-align:center; gap:8px; padding:18px 14px 14px; width:100%; height:100%; justify-content:center; }
        .values-glass .glass .value-title { color:#fff; font-weight:700; font-size:14px; letter-spacing:.3px; }
        .values-glass .glass .value-desc { color:rgba(255,255,255,.75); font-size:12px; line-height:1.35; }
        .values-glass .glass .icon-wrap { width:56px; height:56px; display:grid; place-items:center; border-radius:12px; background: linear-gradient(135deg, rgba(59,130,246,.25), rgba(139,92,246,.18)); box-shadow: inset 0 0 24px rgba(255,255,255,.08), 0 0 24px rgba(139,92,246,.25); }

        /* brand color variations */
        .values-glass .glass.blue { box-shadow: 0 25px 25px rgba(0,0,0,0.25), 0 0 24px rgba(59,130,246,.35); border-color: rgba(59,130,246,.35); }
        .values-glass .glass.purple { box-shadow: 0 25px 25px rgba(0,0,0,0.25), 0 0 24px rgba(139,92,246,.35); border-color: rgba(139,92,246,.35); }
        .values-glass .glass.blue .icon-wrap { background: linear-gradient(135deg, rgba(59,130,246,.3), rgba(139,92,246,.18)); }
        .values-glass .glass.purple .icon-wrap { background: linear-gradient(135deg, rgba(139,92,246,.3), rgba(59,130,246,.18)); }
        .values-glass.container:hover .glass { transform: rotate(0deg); margin: 0 10px; }
        @media (max-width: 640px) { .values-glass .glass { margin: 0 6px; width: 150px; height: 180px; } }
      `}</style>
    </SectionWrapper>
  )
}

export function TargetSection() {
  return (
    <SectionWrapper
      id="target"
      title="Our Target"
      subtitle="To scale businesses sustainably through integrated technology and performance-driven strategies."
      className="-mt-10 py-12 md:py-24 md:-mt-16 lg:-mt-20"
    >
      {/* Reference-style layout: bullets left/right, platform center */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 items-center">
        {/* Left bullets */}
        <div className="order-2 md:order-1 space-y-5 text-white/85 font-montserrat">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-md grid place-items-center bg-gradient-to-br from-neon-blue/30 to-neon-purple/30 border border-white/10 text-white shadow-[0_0_18px_rgba(139,92,246,0.25)]">
              <Users className="w-4 h-4" />
            </div>
            <div>
              <p className="font-semibold">Leading social token in Farcaster</p>
              <p className="text-white/60 text-sm">Community-first reputation and reach.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-md grid place-items-center bg-gradient-to-br from-neon-blue/30 to-neon-purple/30 border border-white/10 text-white shadow-[0_0_18px_rgba(59,130,246,0.25)]">
              <HeartHandshake className="w-4 h-4" />
            </div>
            <div>
              <p className="font-semibold">Strong community support and airdrops</p>
              <p className="text-white/60 text-sm">Aligned incentives that compound growth.</p>
            </div>
          </div>
        </div>

        {/* Center platform - simple neon token and rings */}
        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            {/* ambient grid glow */}
            <div className="absolute -inset-8 rounded-3xl opacity-30 blur-2xl" style={{background:'radial-gradient(closest-side, rgba(59,130,246,0.25), rgba(139,92,246,0.18) 50%, transparent)'}} />

            {/* ring platform */}
            <div className="absolute left-1/2 -translate-x-1/2 bottom-6 w-56 h-56 rounded-full border border-neon-blue/40" />
            <div className="absolute left-1/2 -translate-x-1/2 bottom-10 w-44 h-44 rounded-full border border-neon-purple/35" />
            <div className="absolute left-1/2 -translate-x-1/2 bottom-14 w-32 h-32 rounded-full border border-neon-blue/25" />
            <div className="absolute left-1/2 -translate-x-1/2 bottom-8 w-64 h-8 rounded-full bg-neon-purple/25 blur-xl" />

            {/* SVG animated core */}
            <div className="absolute left-1/2 -translate-x-1/2 bottom-10">
              <div className="svg-frame">
                <svg style={{ ['--i' as any]: 0, ['--j' as any]: 0 }} viewBox="0 0 100 100">
                  <circle id="out1" cx="50" cy="50" r="46" stroke="#60a5fa" strokeWidth="1.5" />
                </svg>
                <svg style={{ ['--i' as any]: 1, ['--j' as any]: 1 }} viewBox="0 0 100 100">
                  <circle id="out2" cx="50" cy="50" r="36" stroke="#7c3aed" strokeWidth="1.2" />
                </svg>
                <svg style={{ ['--i' as any]: 2, ['--j' as any]: 2 }} viewBox="0 0 100 100">
                  <circle id="out3" cx="50" cy="50" r="28" stroke="#60a5fa" strokeWidth="1" />
                </svg>
                <svg style={{ ['--i' as any]: 3, ['--j' as any]: 3 }} viewBox="0 0 100 100">
                  <circle id="inner1" cx="50" cy="50" r="18" stroke="#a78bfa" strokeWidth="1" />
                </svg>
                <svg style={{ ['--i' as any]: 4, ['--j' as any]: 4 }} viewBox="0 0 100 100">
                  <g id="center">
                    <circle id="center1" cx="50" cy="50" r="6" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Right bullets */}
        <div className="order-3 md:order-3 space-y-5 text-white/85 font-montserrat">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-md grid place-items-center bg-gradient-to-br from-neon-blue/30 to-neon-purple/30 border border-white/10 text-white shadow-[0_0_18px_rgba(139,92,246,0.25)]">
              <BarChart3 className="w-4 h-4" />
            </div>
            <div>
              <p className="font-semibold">High trading volumes and engagement</p>
              <p className="text-white/60 text-sm">Active participation that sustains momentum.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-md grid place-items-center bg-gradient-to-br from-neon-blue/30 to-neon-purple/30 border border-white/10 text-white shadow-[0_0_18px_rgba(59,130,246,0.25)]">
              <TrendingUp className="w-4 h-4" />
            </div>
            <div>
              <p className="font-semibold">Promising long‑term potential</p>
              <p className="text-white/60 text-sm">Resilience and value despite volatility.</p>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes float { 0% { transform: translateY(0) } 50% { transform: translateY(-8px) } 100% { transform: translateY(0) } }
        /* Uiverse svg-frame animation (scoped) */
        .svg-frame { position: relative; width: 200px; height: 200px; transform-style: preserve-3d; display: flex; justify-content: center; align-items: center; }
        .svg-frame svg { position: absolute; transition: .5s; z-index: calc(1 - (0.2 * var(--j))); transform-origin: center; width: 240px; height: 240px; fill: none; }
        .svg-frame:hover svg { transform: rotate(-80deg) skew(30deg) translateX(calc(45px * var(--i))) translateY(calc(-35px * var(--i))); }
        .svg-frame svg #center { transition: .5s; transform-origin: center; }
        .svg-frame:hover svg #center { transform: rotate(-30deg) translateX(45px) translateY(-3px); }
        #out2 { animation: rotate16 7s ease-in-out infinite alternate; transform-origin: center; }
        #out3 { animation: rotate16 3s ease-in-out infinite alternate; transform-origin: center; }
        #inner3, #inner1 { animation: rotate16 4s ease-in-out infinite alternate; transform-origin: center; }
        #center1 { fill: #a78bfa; animation: rotate16 2s ease-in-out infinite alternate; transform-origin: center; }
        @keyframes rotate16 { to { transform: rotate(360deg); } }
        @media (min-width: 768px) { .svg-frame { width: 230px; height: 230px; } .svg-frame svg { width: 280px; height: 280px; } }
      `}</style>
    </SectionWrapper>
  )
}


