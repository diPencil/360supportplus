"use client"

import * as React from "react"
import Link from "next/link"

export default function Footer() {
  return (
    <>
    <footer className="relative w-full bg-gradient-to-b from-[#050510] via-[#0a0a15] to-[#0a0806] border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8">
          {/* Column 1: Branding and Copyright */}
          <div className="space-y-4">
            <div className="space-y-3">
              <Link href="/" className="flex items-center">
                <img
                  src="/logo.png"
                  alt="Support Plus Logo"
                  className="h-8 md:h-10 w-auto object-contain cursor-pointer"
                  style={{
                    filter: 'drop-shadow(0 0 10px rgba(59, 130, 246, 0.6))'
                  }}
                  onError={(e) => {
                    console.log('Error loading logo.png');
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </Link>
              
              {/* Project Description */}
              <p className="text-sm text-white/70 font-montserrat leading-relaxed max-w-[280px]">
                Empowering businesses across MENA with cutting-edge support solutions and strategic technology partnerships.
              </p>
              
              {/* Tagline */}
              <div className="flex items-center gap-2 pt-2">
                <div className="w-1 h-1 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-xs text-cyan-400/80 font-montserrat font-medium">
                  Excellence Driven, Future Focused
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Explore */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-base font-montserrat mb-2">Explore</h4>
            <ul className="space-y-2">
              {[
                "Our Templates",
                "Branding Structure",
                "Services Industries",
                "AI Modules BETA",
                "AI MENA Model NEW"
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-sm text-white/60 hover:text-white transition-colors duration-200 font-montserrat inline-flex items-center gap-1"
                  >
                    {link}
                    {link.includes("BETA") && (
                      <span className="text-[10px] text-white/40 px-1.5 py-0.5 rounded bg-white/10">BETA</span>
                    )}
                    {link.includes("NEW") && (
                      <span className="text-[10px] text-cyan-400 px-1.5 py-0.5 rounded bg-cyan-400/10">NEW</span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-base font-montserrat mb-2">Resources</h4>
            <ul className="space-y-2">
              {[
                "Updates",
                "Help Center",
                "Pricing",
                "Learn More About SP",
                "SP Community",
                "Become an Partner",
                "Feedback & Suggestions"
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-sm text-white/60 hover:text-white transition-colors duration-200 font-montserrat"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Company and Social */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-base font-montserrat mb-2">Company</h4>
            <ul className="space-y-2 mb-6">
              {[
                "Terms & Conditions",
                "Privacy"
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-sm text-white/60 hover:text-white transition-colors duration-200 font-montserrat"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>

            {/* Social Media Icons */}
            <div className="flex items-center gap-3">
              {[
                { name: "Twitter", path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
                { name: "Instagram", path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" },
                { name: "TikTok", path: "M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v12.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" },
                { name: "YouTube", path: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" },
                { name: "Discord", path: "M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C2.601 6.65 1.98 9.044 1.98 11.48c0 1.37.175 2.7.5 3.958a.07.07 0 0 0 .021.03 19.9 19.9 0 0 0 5.993 3.02.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127c-.53.375-1.093.69-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.02.069.069 0 0 0 .021-.03c.326-1.255.5-2.586.5-3.957 0-2.426-.62-4.807-1.652-7.083a.032.032 0 0 0-.031-.02zM8.02 14.33a1.744 1.744 0 0 1-1.57-1.917 1.745 1.745 0 0 1 1.57-1.916 1.745 1.745 0 0 1 1.57 1.916 1.744 1.744 0 0 1-1.57 1.917zm7.975 0a1.744 1.744 0 0 1-1.57-1.917 1.745 1.745 0 0 1 1.57-1.916 1.746 1.746 0 0 1 1.57 1.916 1.744 1.744 0 0 1-1.57 1.917z" }
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-8 h-8 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/40 flex items-center justify-center text-white/70 hover:text-white transition-all duration-200"
                  aria-label={social.name}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>

            {/* Award Badge */}
            <div className="mt-4 inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-yellow-500/30 bg-gradient-to-r from-yellow-500/10 to-yellow-600/5">
              <span className="text-yellow-400 text-xs font-bold font-montserrat">
                🏆 Golden Kitty Awards 2023
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Border Glow */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </footer>
    
    {/* Footer Bar */}
    <div className="w-full bg-gradient-to-r from-[#050510] via-[#0a0a15] to-[#050510] border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-4 md:py-5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 md:gap-4">
          {/* Left: Copyright */}
          <div className="text-xs md:text-sm text-white/60 font-montserrat">
            Support Plus Ltd © 2025. All Rights Reserved.
          </div>
          
          {/* Right: Inspiring Quote */}
          <div className="text-xs md:text-sm text-white/80 font-montserrat font-medium">
            Empowering Excellence, Transforming Tomorrow
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

