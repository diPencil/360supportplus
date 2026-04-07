"use client"

import { useEffect, useState } from "react"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import FloatingParticles from "@/components/floating-particles"
import FuturisticIconsSection from "@/components/futuristic-icons-section"
import WhoWeAre from "@/components/who-we-are"
import DifferenceExtended from "@/components/difference-extended"
import { MissionSection, VisionSection, ValueSection, TargetSection } from "@/components/four-pillars"
import MenaReach from "@/components/mena-reach"
import ImpactByNumbers from "@/components/impact-by-numbers"
import TrustedPartners from "@/components/trusted-partners"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <Header />
      <FloatingParticles />
      <HeroSection />
      <FuturisticIconsSection />
      <WhoWeAre />
      <DifferenceExtended />
      <MissionSection />
      <VisionSection />
      <ValueSection />
      <TargetSection />
      <MenaReach />
      <ImpactByNumbers />
      <TrustedPartners />
      <CTASection />
      <Footer />
    </main>
  )
}
