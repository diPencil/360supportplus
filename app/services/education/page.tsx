"use client"

import { useEffect, useState } from "react"
import Header from "@/components/header"
import FloatingParticles from "@/components/floating-particles"
import Footer from "@/components/footer"
import { GraduationCap, CheckCircle, ArrowLeft, Book, Users, Monitor, Award } from "lucide-react"
import Link from "next/link"

export default function EducationPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <Header />
      <FloatingParticles />
      
      <div className="relative pt-32 pb-20 px-4 sm:px-6 md:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-green-900/20 via-emerald-900/10 to-transparent"></div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <Link href="/services" className="inline-flex items-center gap-2 text-green-500 hover:text-green-400 transition-colors mb-8 font-montserrat">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Services</span>
          </Link>

          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 mb-6 shadow-xl">
              <GraduationCap className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 font-nos">
              Education
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto font-montserrat leading-relaxed">
              Digital solutions for schools, universities, and training centers across the MENA region
            </p>
          </div>

          <div className="bg-black/40 backdrop-blur-sm border border-green-500/30 rounded-2xl p-10 md:p-12 mb-16">
            <h2 className="text-2xl font-bold text-white mb-6 font-nos">Industry Overview</h2>
            <p className="text-white/80 text-lg leading-relaxed mb-4 font-montserrat">
              The education sector is undergoing digital transformation, with increasing adoption of online learning, digital classrooms, and educational technology. Support Plus delivers comprehensive education solutions that enhance learning experiences, streamline administration, and improve educational outcomes.
            </p>
            <p className="text-white/70 leading-relaxed font-montserrat">
              Our solutions serve schools, universities, training centers, and educational institutions, helping them modernize operations and deliver better educational experiences.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center font-nos">Our Solutions</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: Book,
                  title: "Learning Management",
                  desc: "Comprehensive Learning Management Systems (LMS) for course delivery, content management, and student engagement.",
                  features: ["Course management", "Content delivery", "Student tracking", "Assessment tools"]
                },
                {
                  icon: Users,
                  title: "Student Information Systems",
                  desc: "Student information management systems for enrollment, records, attendance, and academic tracking.",
                  features: ["Enrollment management", "Student records", "Attendance tracking", "Academic tracking"]
                },
                {
                  icon: Monitor,
                  title: "Online Learning",
                  desc: "Virtual classroom solutions, video conferencing, and online learning platforms for remote education.",
                  features: ["Virtual classrooms", "Video conferencing", "Online assessments", "Interactive learning"]
                },
                {
                  icon: Award,
                  title: "Administrative Tools",
                  desc: "Administrative management solutions for scheduling, resource allocation, and institutional operations.",
                  features: ["Scheduling systems", "Resource management", "Financial management", "Reporting tools"]
                }
              ].map((solution, idx) => {
                const Icon = solution.icon
                return (
                  <div key={idx} className="bg-black/40 backdrop-blur-sm border border-green-500/30 rounded-xl p-8 hover:border-emerald-500/50 transition-all duration-300">
                    <Icon className="w-10 h-10 text-green-500 mb-4" />
                    <h3 className="text-xl font-bold text-white mb-3 font-montserrat">{solution.title}</h3>
                    <p className="text-white/70 leading-relaxed mb-4 font-montserrat">{solution.desc}</p>
                    <ul className="space-y-2">
                      {solution.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-2 text-sm text-white/60 font-montserrat">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 border border-green-500/30 rounded-2xl p-10 md:p-12 mb-16">
            <h2 className="text-2xl font-bold text-white mb-6 font-nos">Addressing Key Challenges</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Remote Learning", desc: "Enable effective remote and hybrid learning experiences." },
                { title: "Student Engagement", desc: "Improve student engagement and learning outcomes." },
                { title: "Resource Management", desc: "Optimize resource allocation and management." },
                { title: "Accessibility", desc: "Ensure education is accessible to all students." }
              ].map((challenge, idx) => (
                <div key={idx} className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-white mb-2 font-montserrat">{challenge.title}</h4>
                  <p className="text-white/70 text-sm leading-relaxed font-montserrat">{challenge.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center font-nos">Why Choose Our Solutions?</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Enhanced Learning", desc: "Improve learning outcomes" },
                { title: "Efficient Management", desc: "Streamline administration" },
                { title: "Accessibility", desc: "Make education accessible" },
                { title: "Innovation", desc: "Modern educational technology" }
              ].map((benefit, idx) => (
                <div key={idx} className="bg-black/40 backdrop-blur-sm border border-green-500/30 rounded-xl p-6 text-center">
                  <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-500 mb-2 font-nos">
                    0{idx + 1}
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2 font-montserrat">{benefit.title}</h4>
                  <p className="text-white/70 text-sm font-montserrat">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-900/30 via-emerald-900/20 to-green-900/30 border border-green-500/30 rounded-2xl p-10 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4 font-nos">Ready to Transform Education?</h2>
            <p className="text-white/80 text-lg mb-8 font-montserrat max-w-2xl mx-auto">
              Let's discuss how our education solutions can enhance learning and streamline operations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300 font-semibold font-montserrat">
                Get Started
              </button>
              <button className="px-8 py-3 border border-green-500/50 text-white rounded-lg hover:bg-green-500/10 transition-all duration-300 font-semibold font-montserrat">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}


