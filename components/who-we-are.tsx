"use client"

export default function WhoWeAre() {
  return (
    <section className="relative w-full pt-10 md:pt-12 pb-20 md:pb-24 -mt-12 md:-mt-16 bg-transparent">
      <div className="mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="text-center mb-10 md:mb-12">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight font-nos inline-block">
            Who We Are
          </h3>
          <div className="mx-auto mt-3 md:mt-4 h-[2px] w-24 md:w-32 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-blue rounded-full animate-pulse-glow" />
        </div>

        {/* Split layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12">
          {/* Visual - UIverse inspired framed module */}
          <div className="relative order-2 md:order-1 flex justify-center">
            <div className="group w-[260px] md:w-[340px] lg:w-[420px] h-[360px] md:h-[450px] lg:h-[520px] relative border border-white/30 rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(139,92,246,0.15)] animate-float transition-transform duration-500 will-change-transform">
              {/* back frame */}
              <div className="w-full h-full p-1 absolute bg-neon-purple/50">
                <div className="w-full h-full rounded-xl rounded-tr-[100px] rounded-br-[40px] bg-[#111]" />
              </div>

              {/* content layer */}
              <div className="w-full h-full flex items-center justify-center relative rounded-2xl backdrop-blur-md">
                {/* horse image from public (replacing the icon) */}
                <img
                  src="/horse.png"
                  alt="Support Plus Horse"
                  className="relative w-96 h-96 max-w-[95%] max-h-[95%] md:w-[30rem] md:h-[30rem] lg:w-[34rem] lg:h-[34rem] translate-x-2 md:translate-x-3 translate-y-8 md:translate-y-10 lg:translate-y-12 object-contain drop-shadow-[0_0_16px_rgba(139,92,246,0.6)]"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = '/horse.svg'
                  }}
                />
              </div>

              {/* overlay info strip */}
              <div className="w-full h-full p-2 flex justify-between absolute inset-0 pointer-events-none">
                <div className="w-3/5 p-2 pt-3 pb-1.5 flex flex-col rounded-xl backdrop-blur-lg bg-white/5 text-white/90 font-montserrat">
                  <span className="text-base md:text-lg font-semibold">Support Plus</span>
                  <span className="text-[10px] md:text-xs text-white/60">360° Enablement</span>
                  <div className="w-full mt-auto flex items-center justify-center">
                    <span className="text-[10px] md:text-xs text-white/50">Since 2025</span>
                  </div>
                </div>
                <div className="h-full pt-2 flex flex-col items-end text-white/60">
                  <span className="text-[10px] leading-[12px]">Futuristic</span>
                  <span className="text-[10px] leading-[13px]">module</span>
                  <div className="w-8 h-8 mt-auto flex items-center justify-center rounded-full backdrop-blur-md bg-white/10">
                    <span className="font-serif text-white/80">→</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 md:order-2 text-center md:text-left">
            {/* Tagline */}
            <p className="text-sm md:text-base lg:text-lg font-semibold text-white/80 font-montserrat mb-3">
              Where strategy meets execution | powered by intelligence
            </p>
            <p className="text-sm md:text-base lg:text-lg leading-relaxed text-muted-foreground font-montserrat md:max-w-[90%]">
              Support Plus delivers 360° business enablement — integrating Finance, HR, Marketing, Call Centers, and Technology to transform operations and drive measurable growth.
            </p>

            {/* Pills / capabilities */}
            <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-2">
              {['Finance', 'HR', 'Marketing', 'Call Centers'].map((cap) => (
                <span
                  key={cap}
                  className="px-3 py-1 rounded-full border border-neon-blue/40 bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 text-white/90 text-xs font-montserrat backdrop-blur-sm shadow-[0_0_14px_rgba(59,130,246,0.25),0_0_20px_rgba(139,92,246,0.25)]"
                >
                  {cap}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-6 md:mt-8 flex items-center justify-center md:justify-start gap-3">
              <a href="#" className="px-5 py-2 rounded-md border border-neon-purple/60 text-white/90 hover:text-white hover:shadow-[0_0_18px_rgba(139,92,246,0.6)] transition-colors font-montserrat">Explore Services</a>
              <a href="#" className="sp-button">
                <span className="sp-button__fold" />
                <span className="sp-button__points">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <span key={i} className="sp-button__point" />
                  ))}
                </span>
                <span className="sp-button__inner">
                  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                  Partner with Us
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Ambient glow */}
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


