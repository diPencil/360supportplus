"use client"

import { Cpu, Globe2, Bot, Handshake, BarChart3, Sparkles } from "lucide-react"

type BoxItem = {
  id: number
  title: string
  subtitle: string
  Icon: any
}

const ITEMS: BoxItem[] = [
  { id: 1, title: "Integrated 360°", subtitle: "All divisions work as one unified system.", Icon: Cpu },
  { id: 2, title: "Regional Expertise", subtitle: "Deep MENA insight and precision.", Icon: Globe2 },
  { id: 3, title: "Technology Driven", subtitle: "AI and automation at the core process.", Icon: Bot },
  { id: 4, title: "Partnership Mindset", subtitle: "Power of your success is our mission.", Icon: Handshake },
  { id: 5, title: "Measurable KPIs", subtitle: "Tracking progress through data, performance.", Icon: BarChart3 },
  { id: 6, title: "Future Focused", subtitle: "Evolving continuously with innovation and intelligence.", Icon: Sparkles },
]

export default function DifferenceExtended() {
  const ACCENTS = [
    "rgba(96,165,250,0.35)",
    "rgba(167,139,250,0.35)",
    "rgba(6,182,212,0.35)",
    "rgba(99,102,241,0.35)",
    "rgba(217,70,239,0.35)",
    "rgba(20,184,166,0.35)",
  ]

  return (
    <section className="relative w-full py-20 md:py-24 -mt-12 md:-mt-20 lg:-mt-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center mb-8 md:mb-10">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tight font-nos">
            The Support Plus Difference
          </h3>
          <p className="mt-2 text-sm md:text-base text-white/70 font-montserrat">
            We are your growth department where strategy meets execution.
          </p>
          <div className="mx-auto mt-3 h-[2px] w-24 md:w-32 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-blue rounded-full animate-pulse-glow" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {ITEMS.map(({ id, title, subtitle, Icon }) => {
            const isNew = id === 6
            const accent = ACCENTS[(id - 1) % ACCENTS.length]
            return (
              <div key={id} className={`group relative rounded-2xl overflow-hidden border ${isNew ? 'border-neon-purple/40' : 'border-neon-blue/40'} bg-gradient-to-b from-white/5 to-black/40 backdrop-blur-sm p-0 transition-transform duration-300 hover:-translate-y-1 shadow-[0_0_26px_rgba(59,130,246,0.18)] w-full h-36 md:h-40 lg:h-44`}>
                <div className="uiverse-wrap w-full h-full">
                  <div className="diff-uiverse card w-full h-full">
                    <div className="content w-full h-full">
                      <div className="back">
                        <div className="back-content">
                          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-36 md:h-36 rounded-full blur-3xl opacity-30" style={{ backgroundColor: accent }} />
                          <div className={`grid place-items-center rounded-lg w-14 h-14 ${isNew ? 'bg-neon-purple/20' : 'bg-neon-blue/20'}`}>
                            <Icon className={`h-8 w-8 ${isNew ? 'text-neon-purple' : 'text-neon-blue'}`} />
                          </div>
                          <div className="text-center px-4">
                            <h5 className="font-montserrat font-bold text-white text-sm md:text-base">{title}</h5>
                            <p className="font-montserrat text-white/80 text-[11px] md:text-[12px] leading-relaxed mt-0.5">{subtitle}</p>
                          </div>
                        </div>
                      </div>
                      <div className="front">
                        <div className="front-content">
                          <div className="badge absolute top-2 left-2">Support Plus</div>
                          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 md:w-32 md:h-32 rounded-full blur-3xl opacity-25" style={{ backgroundColor: accent }} />
                          <div className="relative flex flex-col items-center justify-center text-center gap-1 md:gap-2 w-full h-full">
                            <div className={`grid place-items-center rounded-xl w-14 h-14 md:w-16 md:h-16 ${isNew ? 'bg-neon-purple/15' : 'bg-neon-blue/15'}`}>
                              <Icon className={`h-8 w-8 md:h-9 md:w-9 ${isNew ? 'text-neon-purple' : 'text-neon-blue'}`} />
                            </div>
                            <h4 className="font-montserrat font-bold text-white/90 text-sm md:text-base truncate px-4">{title}</h4>
                          </div>
                          <div className="description hidden" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[80vw] md:w-[60vw] h-40 blur-3xl opacity-20" style={{ background: "radial-gradient(closest-side, rgba(59,130,246,0.20), rgba(139,92,246,0.10) 40%, rgba(0,0,0,0) 70%)" }} />
      </div>

      <style>{`
        .uiverse-wrap { perspective: 1000px; }
        .diff-uiverse.card { overflow: visible; }
        .diff-uiverse .content { width: 100%; height: 100%; transform-style: preserve-3d; transition: transform 300ms; box-shadow: 0 0 10px 1px #000000ee; border-radius: 5px; }
        .diff-uiverse .front, .diff-uiverse .back { background-color: #151515; position: absolute; inset: 0; backface-visibility: hidden; -webkit-backface-visibility: hidden; border-radius: 5px; overflow: hidden; }
        .diff-uiverse .back { display: flex; align-items: center; justify-content: center; }
        .diff-uiverse .back::before { position: absolute; content: ' '; display: block; width: 160px; height: 160%; background: linear-gradient(90deg, transparent, var(--color-neon-blue), var(--color-neon-blue), var(--color-neon-purple), var(--color-neon-purple), transparent); animation: rotation_481 5000ms infinite linear; }
        .diff-uiverse .back-content { position: absolute; inset: 0; margin: 0.5%; background-color: #151515; border-radius: 14px; color: white; display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 8px; text-align: center; padding: 6px 8px; }
        .diff-uiverse .card:hover .content { transform: rotateY(180deg); }
        @keyframes rotation_481 { 0% { transform: rotateZ(0deg); } 100% { transform: rotateZ(360deg); } }
        .diff-uiverse .front { transform: rotateY(180deg); color: white; }
        .diff-uiverse .front .front-content { position: absolute; inset: 0; padding: 4px 8px; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; }
        .diff-uiverse .front-content .badge { background-color: #00000055; padding: 2px 10px; border-radius: 10px; backdrop-filter: blur(2px); width: fit-content; }
      `}</style>
    </section>
  )
}









