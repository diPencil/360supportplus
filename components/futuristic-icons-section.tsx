"use client"

import { useEffect, useRef } from "react"
import { Cpu, Rocket, Zap, Infinity, CircuitBoard, Atom, Brain, Sparkles } from "lucide-react"

const ICONS = [
  { id: "cpu", Icon: Cpu, label: "AI Compute" },
  { id: "rocket", Icon: Rocket, label: "Launch" },
  { id: "zap", Icon: Zap, label: "Energy" },
  { id: "infinity", Icon: Infinity, label: "Scale" },
  { id: "circuit", Icon: CircuitBoard, label: "Systems" },
  { id: "atom", Icon: Atom, label: "Quantum" },
  { id: "brain", Icon: Brain, label: "Intelligence" },
  { id: "sparkles", Icon: Sparkles, label: "Innovation" },
]

export default function FuturisticIconsSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number | null>(null)
  const mousePosRef = useRef({ x: 0, y: 0 })
  const currentPosRef = useRef({ x: 0, y: 0 })
  const iconRefsRef = useRef<(HTMLDivElement | null)[]>([])
  const isMobileRef = useRef(false)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    isMobileRef.current = window.matchMedia('(max-width: 767px)').matches || window.matchMedia('(pointer: coarse)').matches

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2
      mousePosRef.current = { x, y }
    }

    const handleMouseLeave = () => {
      mousePosRef.current = { x: 0, y: 0 }
    }

    const animate = () => {
      const ease = 0.15
      const { x: targetX, y: targetY } = mousePosRef.current
      currentPosRef.current.x += (targetX - currentPosRef.current.x) * ease
      currentPosRef.current.y += (targetY - currentPosRef.current.y) * ease

      const maxShift = 8
      const tx = isMobileRef.current ? 0 : currentPosRef.current.x * maxShift
      const ty = isMobileRef.current ? 0 : currentPosRef.current.y * maxShift * 0.5

      const track = container.querySelector('.marquee-track') as HTMLElement
      if (track) {
        const trackEl = track as any
        if (!trackEl._marqueeStartTime) {
          trackEl._marqueeStartTime = Date.now()
        }
        const elapsed = Date.now() - trackEl._marqueeStartTime
        const marqueeDuration = 18000
        const marqueeProgress = (elapsed % marqueeDuration) / marqueeDuration
        const trackWidth = track.scrollWidth
        const marqueeX = -marqueeProgress * (trackWidth * 0.5)
        track.style.transform = `translate3d(${marqueeX + tx * 0.5}px, ${ty * 0.5}px, 0)`
      }

      iconRefsRef.current.forEach((iconEl, idx) => {
        if (!iconEl) return
        const floatOffset = Math.sin((Date.now() * 0.001 + idx * 0.15) * 2) * 5
        if (isMobileRef.current) {
          iconEl.style.transform = `translate3d(0px, ${floatOffset}px, 0) translateZ(0)`
        } else {
          iconEl.style.transform = `translate3d(${tx * 0.3}px, ${ty * 0.3 + floatOffset}px, 0) translateZ(0)`
        }
      })

      rafRef.current = requestAnimationFrame(animate)
    }

    if (!isMobileRef.current) {
      container.addEventListener('mousemove', handleMouseMove)
      container.addEventListener('mouseleave', handleMouseLeave)
    }
    rafRef.current = requestAnimationFrame(animate)

    return () => {
      if (!isMobileRef.current) {
        container.removeEventListener('mousemove', handleMouseMove)
        container.removeEventListener('mouseleave', handleMouseLeave)
      }
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <section className="relative w-full pt-4 pb-24 md:py-28 bg-transparent overflow-hidden">
      <div ref={containerRef} className="relative mx-auto max-w-6xl px-4">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] md:w-[80vw] aspect-square rounded-full blur-3xl"
               style={{ background: "radial-gradient(closest-side, rgba(59,130,246,0.20), rgba(139,92,246,0.10) 40%, rgba(0,0,0,0) 70%)" }} />
        </div>

        <div className="text-center mb-4 md:mb-6">
          <h2 className="text-2xl md:text-4xl font-black tracking-tight" style={{ fontFamily: 'NOS' }}>
            EXPERIENCE THE FUTURE
          </h2>
          <p className="text-sm md:text-base text-muted-foreground mt-2" style={{ fontFamily: 'Montserrat' }}>
            Pioneering the future of business innovation
          </p>
        </div>

        <div className="relative overflow-hidden mt-2 md:mt-4 py-6">
          <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 z-30 pointer-events-none"
               style={{ 
                 background: 'linear-gradient(to right, rgba(8, 8, 8, 1), rgba(8, 8, 8, 0.7) 30%, rgba(8, 8, 8, 0.3) 60%, transparent 100%)',
                 boxShadow: 'inset 20px 0 20px -10px rgba(0,0,0,0.8)'
               }} />
          <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 z-30 pointer-events-none"
               style={{ 
                 background: 'linear-gradient(to left, rgba(8, 8, 8, 1), rgba(8, 8, 8, 0.7) 30%, rgba(8, 8, 8, 0.3) 60%, transparent 100%)',
                 boxShadow: 'inset -20px 0 20px -10px rgba(0,0,0,0.8)'
               }} />
          <div 
            className="marquee-track flex items-stretch gap-2 sm:gap-3 md:gap-4"
            style={{ willChange: 'transform' }}
          >
            {[...ICONS, ...ICONS, ...ICONS].map(({ id, Icon, label }, idx) => (
              <div
                key={`${id}-${idx}`}
                ref={(el) => { iconRefsRef.current[idx] = el }}
                className="group relative w-[80px] h-[80px] sm:w-[115px] sm:h-[115px] lg:w-[125px] lg:h-[125px] rounded-2xl border border-neon-blue/30 bg-gradient-to-b from-white/5 to-black/40 backdrop-blur-sm overflow-hidden flex-shrink-0"
                style={{ willChange: 'transform' }}
              >
                <div className="absolute inset-[-40%] -z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                     style={{ background: "conic-gradient(from 180deg, rgba(59,130,246,0.0), rgba(59,130,246,0.35), rgba(139,92,246,0.35), rgba(59,130,246,0.0))", animation: "spin 6s linear infinite" }} />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-neon-blue/40 shadow-[0_0_30px_rgba(59,130,246,0.35),0_0_60px_rgba(139,92,246,0.25)]" />
                <div className="relative z-10 h-full w-full flex flex-col items-center justify-center gap-1.5">
                  <div className="relative">
                    <div className="absolute -inset-5 bg-neon-blue/20 blur-2xl rounded-full opacity-60 group-hover:opacity-90 transition-opacity" />
                    <Icon className="relative text-white drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]" size={30} />
                  </div>
                  <span className="text-[10px] md:text-xs text-white/80" style={{ fontFamily: 'Montserrat' }}>{label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        .marquee-track { will-change: transform; }
        .marquee-track:hover { animation-duration: 12s; }
      `}</style>
    </section>
  )
}


