"use client"

import { Atom, Blend, Binary, Layers, Network, Lightbulb } from "lucide-react"

const FEATURES = [
  { id: 1, title: "Neural Pipelines", desc: "Orchestrated flows that adapt in real-time.", Icon: Network },
  { id: 2, title: "Signal Fusion", desc: "Blend human insight with machine precision.", Icon: Blend },
  { id: 3, title: "Zero-Lag Ops", desc: "Latency-optimized execution layers.", Icon: Layers },
  { id: 4, title: "Cognitive Triggers", desc: "Automation that reacts to context.", Icon: Binary },
  { id: 5, title: "Idea Accelerators", desc: "From concept to launch in record time.", Icon: Lightbulb },
  { id: 6, title: "Atomic Scalability", desc: "Scale each unit independently.", Icon: Atom },
]

export default function InnovationsSection() {
  return (
    <section className="relative w-full py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center mb-8 md:mb-12">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tight font-nos">
            New Elements
          </h3>
          <p className="mt-2 text-sm md:text-base text-white/70 font-montserrat">
            A fresh, futuristic module with a distinct layout and interactions.
          </p>
          <div className="mx-auto mt-3 h-[2px] w-24 md:w-32 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-blue rounded-full animate-pulse-glow" />
        </div>

        {/* Non-flip neon tiles (original style) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {FEATURES.map(({ id, title, desc, Icon }) => (
            <div
              key={id}
              className="group relative rounded-2xl border border-white/10 bg-black/40 p-5 md:p-6 overflow-hidden backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1"
            >
              <div
                className={`pointer-events-none absolute inset-px rounded-2xl opacity-20 blur-xl transition-colors duration-300 ${id===6 ? 'bg-gradient-to-br from-neon-purple/70 via-neon-purple/30 to-transparent' : 'bg-gradient-to-br from-neon-blue/70 via-neon-blue/30 to-transparent'}`}
              />
              <div className="relative flex items-start gap-4">
                <div
                  className={`grid place-items-center rounded-xl w-14 h-14 flex-shrink-0 ${id===6 ? 'bg-neon-purple/15' : 'bg-neon-blue/15'}`}
                >
                  <Icon className={`h-7 w-7 ${id===6 ? 'text-neon-purple' : 'text-neon-blue'} transition-transform duration-300 group-hover:scale-110`} />
                </div>
                <div className="min-w-0">
                  <h4 className="font-montserrat font-bold text-white/90 text-base md:text-lg truncate">{title}</h4>
                  <p className="font-montserrat text-white/70 text-[12px] md:text-sm mt-1 leading-snug">{desc}</p>
                </div>
              </div>
              <div className={`relative mt-5 h-[2px] w-full rounded-full ${id===6 ? 'bg-neon-purple/60' : 'bg-neon-blue/60'} transition-opacity duration-300 opacity-60 group-hover:opacity-100`} />
            </div>
          ))}
        </div>
      </div>

      {/* Ambient glow behind section */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute left-1/2 top-0 -translate-x-1/2 w-[80vw] md:w-[60vw] h-40 blur-3xl opacity-20"
          style={{
            background:
              "radial-gradient(closest-side, rgba(59,130,246,0.20), rgba(139,92,246,0.10) 40%, rgba(0,0,0,0) 70%)",
          }}
        />
      </div>
    </section>
  )
}


