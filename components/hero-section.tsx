"use client"

import { useEffect, useRef, useState } from "react"

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [activeLabel, setActiveLabel] = useState<string | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    let animationId: number

    const drawEffects = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const time = Date.now() * 0.0005

      // Draw vertical neon streaks
      const streakCount = 12
      for (let i = 0; i < streakCount; i++) {
        const x = (canvas.width / streakCount) * i + Math.sin(time + i) * 30

        // Blue streak
        const gradient1 = ctx.createLinearGradient(0, 0, 0, canvas.height)
        gradient1.addColorStop(0, "rgba(59, 130, 246, 0)")
        gradient1.addColorStop(0.3, "rgba(59, 130, 246, 0.4)")
        gradient1.addColorStop(0.7, "rgba(59, 130, 246, 0.2)")
        gradient1.addColorStop(1, "rgba(59, 130, 246, 0)")

        ctx.fillStyle = gradient1
        ctx.fillRect(x, 0, 2, canvas.height)

        // Purple streak
        const gradient2 = ctx.createLinearGradient(0, 0, 0, canvas.height)
        gradient2.addColorStop(0, "rgba(139, 92, 246, 0)")
        gradient2.addColorStop(0.4, "rgba(139, 92, 246, 0.3)")
        gradient2.addColorStop(0.8, "rgba(139, 92, 246, 0.1)")
        gradient2.addColorStop(1, "rgba(139, 92, 246, 0)")

        ctx.fillStyle = gradient2
        ctx.fillRect(x + 60, 0, 1.5, canvas.height)
      }

      // Draw floating particles
      const particleCount = 50
      for (let i = 0; i < particleCount; i++) {
        const x = (Math.sin(time * 0.5 + i) * 0.5 + 0.5) * canvas.width
        const y = (Math.cos(time * 0.3 + i * 0.7) * 0.5 + 0.5) * canvas.height
        const size = Math.abs(Math.sin(time + i) * 2) + 1 // Ensure size is always positive
        const opacity = Math.abs(Math.sin(time * 0.8 + i) * 0.3) + 0.2 // Ensure opacity is always positive

        ctx.fillStyle = `rgba(59, 130, 246, ${opacity})`
        ctx.beginPath()
        ctx.arc(x, y, size, 0, Math.PI * 2)
        ctx.fill()
      }

      animationId = requestAnimationFrame(drawEffects)
    }

    drawEffects()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <section className="relative flex flex-col items-center justify-start md:justify-center overflow-hidden md:min-h-screen md:h-screen">
      {/* Layer 1: Background canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0" />

      {/* Layer 2: Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/60 pointer-events-none z-1" />

      {/* Layer 3: Power background image */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-2">
        <img
          src="/powertext.png"
          alt="Power Background"
          className="w-full h-full object-contain opacity-10 md:opacity-15 animate-glow"
          style={{ imageRendering: 'auto' }}
        />
      </div>

      {/* Layer 4: Main Content */}
      <div className="relative z-10 w-full flex flex-col items-center px-5 sm:px-4 pt-24 pb-8 sm:pt-28 sm:pb-0 md:pt-[58vh] lg:pt-[60vh]">
        <div className="w-full max-w-4xl flex flex-col items-center space-y-3 sm:space-y-12">
          {/* Heading Section */}
          <div className="text-center space-y-1.5 sm:space-y-5 px-1 w-full">
            <div className="inline-flex items-center justify-center px-3 py-1 sm:px-4 sm:py-1.5 rounded-full border border-neon-blue/50 bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 text-white text-xs sm:text-sm font-montserrat shadow-[0_0_16px_rgba(59,130,246,0.5),0_0_28px_rgba(139,92,246,0.45)] backdrop-blur-md">
              360° business enablement
            </div>

            <h1 className="text-[1.7rem] sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight font-nos leading-tight sm:leading-tight">
              <span className="block text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Where Strategy</span>
              <span className="block bg-gradient-to-r from-neon-blue via-neon-purple to-neon-blue bg-clip-text text-transparent">
                Meets Execution
              </span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-white/70 max-w-md sm:max-w-2xl mx-auto leading-snug font-montserrat">
              Empowering Businesses Through Technology & Intelligence
            </p>
          </div>

          {/* User Character */}
          <div className="relative w-full flex justify-center pointer-events-none">
            <div className="w-full px-0 sm:px-0">
              <img
                src="/User-mobileview.png"
                alt="User Character Mobile"
                className="object-contain w-full h-auto animate-float max-w-[115vw] sm:hidden -translate-y-6"
                style={{ imageRendering: 'auto' }}
              />
              <img
                src="/User.png"
                alt="User Character"
                className="object-contain w-full h-auto animate-float hidden sm:block sm:max-w-[95vw] md:max-w-[760px] lg:max-w-[880px] xl:max-w-[960px] sm:-translate-y-2 md:-translate-y-14 lg:-translate-y-22"
                style={{ imageRendering: 'auto' }}
                onError={(e) => {
                  e.currentTarget.src =
                    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMTAwIiBjeT0iODAiIHI9IjYwIiBmaWxsPSIjMzc0MTUxIiBzdHJva2U9IiMzYjgyZjYiIHN0cm9rZS13aWR0aD0iMiIvPjxjaXJjbGUgY3g9IjEwMCIgY3k9IjgwIiByPSI0MCIgZmlsbD0iIzFmMjkzNyIgb3BhY2l0eT0iMC44Ii8+PC9zdmc+'
                }}
              />
            </div>
          </div>

          {/* Mobile capability pills */}
          <div className="md:hidden w-full max-w-sm grid grid-cols-2 gap-2 font-montserrat -translate-y-6">
            {['Finance', 'HR Solutions', 'Marketing', 'Call Centers'].map((label) => (
              <span
                key={label}
                className="text-center px-3 py-1.5 rounded-full border border-neon-blue/40 bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 text-white text-xs shadow-[0_0_18px_rgba(59,130,246,0.35),0_0_24px_rgba(139,92,246,0.2)] backdrop-blur-md"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop floating capability pills */}
      <div className="hidden md:block absolute bottom-12 md:bottom-16 left-1/2 -translate-x-1/2 pointer-events-none z-20 w-full max-w-5xl px-4">
        <div className="relative w-full h-[200px] sm:h-[250px] md:h-[300px]">
          {/* Finance - left */}
          <div
            className="absolute left-[8%] sm:left-[12%] md:left-[15%] top-[60%] animate-float font-montserrat"
            style={{ animationDelay: '0s', animationDuration: '5s' }}
          >
            <div className="px-2 py-0.5 sm:px-3 sm:py-1 md:px-4 md:py-1.5 rounded-full border border-neon-blue/50 bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 text-white text-[10px] sm:text-xs md:text-sm shadow-[0_0_16px_rgba(59,130,246,0.5),0_0_32px_rgba(139,92,246,0.45)] backdrop-blur-md whitespace-nowrap">
              Finance
            </div>
          </div>

          {/* HR Solutions - left center */}
          <div
            className="absolute left-[26%] sm:left-[30%] md:left-[35%] top-[27%] sm:top-[28%] md:top-[30%] animate-float font-montserrat"
            style={{ animationDelay: '0.2s', animationDuration: '5.5s' }}
          >
            <div className="px-2 py-0.5 sm:px-3 sm:py-1 md:px-4 md:py-1.5 rounded-full border border-neon-blue/50 bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 text-white text-[10px] sm:text-xs md:text-sm shadow-[0_0_16px_rgba(59,130,246,0.5),0_0_32px_rgba(139,92,246,0.45)] backdrop-blur-md whitespace-nowrap">
              HR Solutions
            </div>
          </div>

          {/* Marketing - right center */}
          <div
            className="absolute right-[25%] sm:right-[20%] md:right-[25%] top-[30%] animate-float font-montserrat"
            style={{ animationDelay: '0.4s', animationDuration: '6s' }}
          >
            <div className="px-2 py-0.5 sm:px-3 sm:py-1 md:px-4 md:py-1.5 rounded-full border border-neon-blue/50 bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 text-white text-[10px] sm:text-xs md:text-sm shadow-[0_0_16px_rgba(59,130,246,0.5),0_0_32px_rgba(139,92,246,0.45)] backdrop-blur-md whitespace-nowrap">
              Marketing
            </div>
          </div>

          {/* Call Centers - right */}
          <div
            className="absolute right-[8%] sm:right-[12%] md:right-[15%] top-[60%] animate-float font-montserrat"
            style={{ animationDelay: '0.6s', animationDuration: '5.2s' }}
          >
            <div className="px-2 py-0.5 sm:px-3 sm:py-1 md:px-4 md:py-2 rounded-full border border-neon-blue/50 bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 text-white text-[10px] sm:text-xs md:text-sm shadow-[0_0_16px_rgba(59,130,246,0.5),0_0_32px_rgba(139,92,246,0.45)] backdrop-blur-md whitespace-nowrap text-center">
              Call Centers
            </div>
          </div>
        </div>
      </div>

      {/* Layer 6: Left Side - Vertical Text Labels */}
      <div className="hidden md:flex absolute left-14 lg:left-12 top-1/2 -translate-y-1/2 translate-y-36 lg:translate-y-48 z-20">
        <nav
          aria-label="Section rail"
          className="flex items-center font-montserrat font-semibold uppercase tracking-[0.12em]"
          style={{ transform: 'rotate(-90deg)', transformOrigin: 'left center' }}
        >
          {[
            { id: 'mission', label: 'MISSION', section: 'mission' },
            { id: 'vision', label: 'VISION', section: 'vision' },
            { id: 'value', label: 'VALUE', section: 'value' },
            { id: 'target', label: 'TARGET', section: 'target' },
          ].map((item, index, arr) => (
            <span key={item.id} className="flex items-center">
              <button
                onClick={() => {
                  setActiveLabel(item.id)
                  const section = document.getElementById(item.section)
                  if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }}
                className={`${
                  activeLabel === item.id
                    ? 'text-[#8b5cf6] drop-shadow-[0_0_8px_rgba(139,92,246,0.8),0_0_12px_rgba(139,92,246,0.4)]'
                    : 'text-white/60 hover:text-[#8b5cf6] hover:drop-shadow-[0_0_6px_rgba(139,92,246,0.6)]'
                } transition-colors duration-300 text-[10px] lg:text-xs`}
              >
                {item.label}
              </button>
              {index < arr.length - 1 && (
                <span className="mx-3 lg:mx-4 text-white/40">·</span>
              )}
            </span>
          ))}
        </nav>
      </div>

      {/* Layer 7: Right Side - Social Media Icons */}
      <div className="hidden md:flex absolute right-6 lg:right-8 top-1/2 -translate-y-1/2 flex-col gap-4 lg:gap-5 z-20">
        <a href="#" className="text-white/60 hover:text-white transition-colors" aria-label="Facebook">
          <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        </a>
        <a href="#" className="text-white/60 hover:text-white transition-colors" aria-label="Instagram">
          <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm6.406-1.683c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        </a>
        <a href="#" className="text-white/60 hover:text-white transition-colors" aria-label="LinkedIn">
          <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065z"/>
          </svg>
        </a>
        <a href="#" className="text-white/60 hover:text-white transition-colors" aria-label="YouTube">
          <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
        </a>
        <a href="#" className="text-white/60 hover:text-white transition-colors" aria-label="TikTok">
          <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.1 6.1 0 0 0-1-.05A6.34 6.34 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
          </svg>
        </a>
      </div>

      {/* Layer 8: Decorative elements */}
      <div className="absolute bottom-16 sm:bottom-20 left-4 sm:left-10 w-24 h-24 sm:w-32 sm:h-32 bg-neon-blue/10 rounded-full blur-3xl animate-pulse pointer-events-none z-5" />
      <div className="absolute top-32 sm:top-40 right-4 sm:right-20 w-32 h-32 sm:w-40 sm:h-40 bg-neon-purple/10 rounded-full blur-3xl animate-pulse pointer-events-none z-5" />
    </section>
  )
}
