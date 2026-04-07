"use client"

import * as React from "react"

type MetricBox = {
  id: number
  value: number
  suffix: string
  label: string
  color: string
}

const METRICS: MetricBox[] = [
  {
    id: 1,
    value: 99,
    suffix: "%",
    label: "VAT/SLA Accuracy",
    color: "#60a5fa", // blue-400
  },
  {
    id: 2,
    value: 95,
    suffix: "%+",
    label: "CSAT (Customer Satisfaction)",
    color: "#22d3ee", // cyan-400
  },
  {
    id: 3,
    value: 10,
    suffix: "%",
    label: "Forecast Accuracy",
    color: "#a78bfa", // violet-400
    prefix: "±",
  },
  {
    id: 4,
    value: 18,
    suffix: "%",
    label: "Retention Rate",
    color: "#e879f9", // fuchsia-400
    prefix: "+",
  },
]

function useCounter(targetValue: number, duration: number = 2000) {
  const [count, setCount] = React.useState(0)
  const [hasStarted, setHasStarted] = React.useState(false)

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true)
          }
        })
      },
      { threshold: 0.3 }
    )

    const element = document.getElementById(`metric-${targetValue}`)
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [targetValue, hasStarted])

  React.useEffect(() => {
    if (!hasStarted) return

    let startTime: number | null = null
    const startValue = 0

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      const easeOut = 1 - Math.pow(1 - progress, 3)
      const current = Math.floor(startValue + (targetValue - startValue) * easeOut)
      
      setCount(current)

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(targetValue)
      }
    }

    requestAnimationFrame(animate)
  }, [hasStarted, targetValue, duration])

  return count
}

export default function ImpactByNumbers() {
  return (
    <section className="relative w-full -mt-8 md:-mt-12 pb-20 md:pb-24 overflow-hidden bg-gradient-to-b from-[#050510] via-[#0a0a15] to-[#050510]">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tight font-nos text-white">
            Impact by Numbers
          </h3>
          <p className="mt-3 md:mt-4 text-sm md:text-base text-white/60 font-montserrat max-w-2xl mx-auto">
            Measurable results that drive business success and operational excellence
          </p>
          <div className="mx-auto mt-4 md:mt-5 h-[2px] w-24 md:w-32 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-blue rounded-full animate-pulse" />
        </div>

        {/* Grid 4 columns on desktop, 2x2 on mobile */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {METRICS.map((metric) => (
            <MetricCard key={metric.id} metric={metric} />
          ))}
        </div>
      </div>

      {/* Background glow effect */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] md:w-[60vw] h-96 blur-3xl opacity-10" style={{ background: "radial-gradient(closest-side, rgba(59,130,246,0.15), rgba(139,92,246,0.08) 40%, rgba(0,0,0,0) 70%)" }} />
      </div>
    </section>
  )
}

function MetricCard({ metric }: { metric: MetricBox & { prefix?: string } }) {
  const count = useCounter(metric.value, 2000)

  return (
    <>
      <div id={`metric-${metric.value}`} className="impact-outer" style={{
        background: `radial-gradient(circle 230px at 0% 0%, ${metric.color}33, #0c0d0d)`
      }}>
        {/* Moving dot */}
        <div 
          className="impact-dot" 
          style={{ 
            backgroundColor: metric.color,
            boxShadow: `0 0 10px ${metric.color}, 0 0 20px ${metric.color}` 
          }}
        />
        
        {/* Ray effect */}
        <div 
          className="impact-ray" 
          style={{ 
            backgroundColor: metric.color,
            boxShadow: `0 0 50px ${metric.color}`,
          }}
        />

        {/* Card */}
        <div className="impact-card">
          {/* Lines */}
          <div className="impact-line impact-topl" />
          <div className="impact-line impact-bottoml" />
          <div className="impact-line impact-leftl" />
          <div className="impact-line impact-rightl" />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center p-4 md:p-6">
            {/* Animated number */}
            <div 
              className="impact-text"
              style={{
                background: `linear-gradient(45deg, #000000 4%, ${metric.color}, #ffffff, ${metric.color}, #000000)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {metric.prefix || ""}{count}{metric.suffix}
            </div>
            
            {/* Label */}
            <p className="mt-2 md:mt-4 text-[10px] md:text-xs lg:text-sm text-white/70 font-montserrat font-medium px-1">
              {metric.label}
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .impact-outer {
          width: 100%;
          height: 200px;
          border-radius: 10px;
          padding: 1px;
          position: relative;
        }

        .impact-dot {
          width: 5px;
          aspect-ratio: 1;
          position: absolute;
          border-radius: 100px;
          z-index: 2;
          right: 10%;
          top: 10%;
          animation: impact-moveDot-${metric.id} 6s linear infinite;
        }

        @keyframes impact-moveDot-${metric.id} {
          0%, 100% {
            top: 10%;
            right: 10%;
          }
          25% {
            top: 10%;
            right: calc(100% - 35px);
          }
          50% {
            top: calc(100% - 30px);
            right: calc(100% - 35px);
          }
          75% {
            top: calc(100% - 30px);
            right: 10%;
          }
        }

        .impact-card {
          z-index: 1;
          width: 100%;
          height: 100%;
          border-radius: 9px;
          border: solid 1px #202222;
          background: radial-gradient(circle 280px at 0% 0%, rgba(68, 68, 68, 0.08), #0c0d0d);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          flex-direction: column;
          color: #fff;
        }

        .impact-ray {
          width: 220px;
          height: 45px;
          border-radius: 100px;
          position: absolute;
          opacity: 0.4;
          filter: blur(10px);
          transform-origin: 10%;
          top: 0%;
          left: 0;
          transform: rotate(40deg);
          z-index: 0;
        }

        .impact-text {
          font-weight: bolder;
          font-size: 2rem;
          line-height: 1;
          font-family: 'NOS', sans-serif;
          tabular-nums: true;
        }

        .impact-line {
          position: absolute;
        }

        .impact-topl {
          width: 100%;
          height: 1px;
          top: 10%;
          background: linear-gradient(90deg, #888888 30%, #1d1f1f 70%);
        }

        .impact-bottoml {
          width: 100%;
          height: 1px;
          bottom: 10%;
          background-color: #2c2c2c;
        }

        .impact-leftl {
          left: 10%;
          width: 1px;
          height: 100%;
          background: linear-gradient(180deg, #747474 30%, #222424 70%);
        }

        .impact-rightl {
          right: 10%;
          width: 1px;
          height: 100%;
          background-color: #2c2c2c;
        }

        @media (min-width: 640px) {
          .impact-outer {
            height: 280px;
          }
          .impact-text {
            font-size: 3.5rem;
          }
        }

        @media (min-width: 1024px) {
          .impact-outer {
            height: 260px;
          }
          .impact-text {
            font-size: 4rem;
          }
        }
      `}</style>
    </>
  )
}
