"use client"

import { useEffect, useState } from "react"
import Header from "@/components/header"
import FloatingParticles from "@/components/floating-particles"
import Footer from "@/components/footer"
import { MessageSquare, BookOpen, Video, Users, Award, TrendingUp, Heart, Share2, ThumbsUp, Calendar, Clock, UserPlus, Zap, Star, Sparkles } from "lucide-react"

export default function CommunityPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const latestPosts = [
    {
      author: "Community Member",
      avatar: "CM",
      role: "Business Owner",
      title: "How AI is transforming business operations in MENA",
      content: "We recently rolled out Support Plus modules in operations and documented what changed in approvals, handoffs, and reporting.",
      likes: 84,
      comments: 19,
      time: "2 hours ago",
      category: "Discussion",
      trending: true
    },
    {
      author: "Regional Tech Lead",
      avatar: "RT",
      role: "Tech Director",
      title: "Best practices for digital transformation",
      content: "Sharing practical lessons from our digital transformation rollout, including sequencing, stakeholder alignment, and training.",
      likes: 67,
      comments: 13,
      time: "5 hours ago",
      category: "Tips & Tricks",
      trending: false
    },
    {
      author: "Finance Operations Lead",
      avatar: "FO",
      role: "CFO",
      title: "Financial management solutions review",
      content: "After several months in production, here is a review focused on controls, reconciliations, and day-end processes.",
      likes: 102,
      comments: 27,
      time: "1 day ago",
      category: "Review",
      trending: true
    },
    {
      author: "People Operations Manager",
      avatar: "PO",
      role: "HR Manager",
      title: "Remote team management success story",
      content: "Notes from our remote team playbook, including cadence design, ownership rules, and communication hygiene.",
      likes: 58,
      comments: 14,
      time: "2 days ago",
      category: "Success Story",
      trending: false
    }
  ]

  const trendingTopics = [
    { tag: "AI Integration", posts: 245, trending: true },
    { tag: "Digital Transformation", posts: 189, trending: true },
    { tag: "Finance Solutions", posts: 156, trending: false },
    { tag: "HR Management", posts: 134, trending: false },
    { tag: "MENA Market", posts: 112, trending: true },
    { tag: "Best Practices", posts: 98, trending: false }
  ]

  const upcomingEvents = [
    {
      title: "MENA Tech Summit 2025",
      date: "March 15, 2025",
      time: "10:00 AM - 4:00 PM",
      type: "Virtual",
      attendees: 250,
      description: "Join industry leaders discussing the future of technology in MENA"
    },
    {
      title: "Community Meetup - Dubai",
      date: "March 22, 2025",
      time: "6:00 PM - 9:00 PM",
      type: "In-Person",
      attendees: 120,
      description: "Networking event for Support Plus community members"
    },
    {
      title: "AI Workshop Series",
      date: "March 28, 2025",
      time: "2:00 PM - 5:00 PM",
      type: "Virtual",
      attendees: 500,
      description: "Hands-on workshop on implementing AI solutions"
    }
  ]

  const featuredMembers = [
    { name: "Ahmed Hassan", role: "Business Owner", avatar: "AH", contributions: 245, badge: "Top Contributor" },
    { name: "Sarah Al-Mansouri", role: "Tech Director", avatar: "SA", contributions: 189, badge: "Expert" },
    { name: "Mohammed Ibrahim", role: "CFO", avatar: "MI", contributions: 156, badge: "Helper" },
    { name: "Layla Ali", role: "HR Manager", avatar: "LA", contributions: 134, badge: "Active" }
  ]

  const stats = [
    { number: "8,500+", label: "Active Members", icon: Users, color: "from-blue-500 to-cyan-500" },
    { number: "2,300+", label: "Discussions", icon: MessageSquare, color: "from-purple-500 to-pink-500" },
    { number: "850+", label: "Resources", icon: BookOpen, color: "from-cyan-500 to-blue-500" },
    { number: "120+", label: "Events", icon: Calendar, color: "from-pink-500 to-rose-500" }
  ]

  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <Header />
      <FloatingParticles />
      
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-4 sm:px-6 md:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/10"></div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="px-4 py-2 rounded-full border border-blue-500/50 bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-white text-sm font-montserrat shadow-[0_0_16px_rgba(59,130,246,0.5)]">
                Welcome to Our Community
              </span>
            </div>
            <div className="flex items-center justify-center gap-3 mb-6">
              <Sparkles className="w-8 h-8 text-purple-500" />
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white font-nos">
                SP Community
              </h1>
              <Sparkles className="w-8 h-8 text-blue-500" />
            </div>
            <p className="text-gray-300 text-xl md:text-2xl max-w-3xl mx-auto font-montserrat leading-relaxed mb-8">
              Connect, share, and grow with thousands of professionals across MENA
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 font-semibold font-montserrat flex items-center gap-2">
                <UserPlus className="w-5 h-5" />
                Join Community
              </button>
              <button className="px-8 py-4 border border-purple-500/50 text-white rounded-lg hover:bg-purple-500/10 transition-all duration-300 font-semibold font-montserrat">
                Explore Features
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, idx) => {
              const Icon = stat.icon
              return (
                <div key={idx} className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:border-purple-500/50 transition-all duration-300 group">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className={`text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${stat.color} mb-2 font-nos`}>
                    {stat.number}
                  </div>
                  <div className="text-white/70 text-sm font-montserrat">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Latest Posts */}
      <div className="relative py-16 px-4 sm:px-6 md:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-transparent to-blue-900/10"></div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-white font-nos">Latest Discussions</h2>
            <button className="text-purple-400 hover:text-purple-300 font-montserrat flex items-center gap-2">
              View All
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {latestPosts.map((post, idx) => (
              <div key={idx} className="group bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold font-montserrat flex-shrink-0">
                    {post.avatar}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold text-white font-montserrat">{post.author}</span>
                      {post.trending && (
                        <span className="px-2 py-0.5 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 text-white text-xs font-montserrat flex items-center gap-1">
                          <TrendingUp className="w-3 h-3" />
                          Trending
                        </span>
                      )}
                    </div>
                    <p className="text-white/60 text-xs font-montserrat">{post.role}</p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-montserrat">
                    {post.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 font-montserrat group-hover:text-purple-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed mb-4 font-montserrat line-clamp-2">
                  {post.content}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div className="flex items-center gap-4 text-white/60 text-sm font-montserrat">
                    <button className="flex items-center gap-1 hover:text-pink-500 transition-colors">
                      <Heart className="w-4 h-4" />
                      <span>{post.likes}</span>
                    </button>
                    <button className="flex items-center gap-1 hover:text-blue-500 transition-colors">
                      <MessageSquare className="w-4 h-4" />
                      <span>{post.comments}</span>
                    </button>
                    <button className="flex items-center gap-1 hover:text-purple-500 transition-colors">
                      <Share2 className="w-4 h-4" />
                      Share
                    </button>
                  </div>
                  <span className="text-white/50 text-xs font-montserrat flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.time}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Trending Topics & Featured Members */}
      <div className="relative py-16 px-4 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Trending Topics */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <TrendingUp className="w-6 h-6 text-orange-500" />
                <h2 className="text-2xl font-bold text-white font-nos">Trending Topics</h2>
              </div>
              <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <div className="space-y-3">
                  {trendingTopics.map((topic, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group cursor-pointer">
                      <div className="flex items-center gap-3">
                        {topic.trending && (
                          <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
                        )}
                        <span className="text-white font-montserrat">#{topic.tag}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-white/60 text-sm font-montserrat">{topic.posts} posts</span>
                        {topic.trending && (
                          <TrendingUp className="w-4 h-4 text-orange-500" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <button className="mt-4 w-full text-center text-purple-400 hover:text-purple-300 font-montserrat text-sm">
                  View All Topics →
                </button>
              </div>
            </div>

            {/* Featured Members */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Star className="w-6 h-6 text-yellow-500" />
                <h2 className="text-2xl font-bold text-white font-nos">Featured Members</h2>
              </div>
              <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <div className="space-y-4">
                  {featuredMembers.map((member, idx) => (
                    <div key={idx} className="flex items-center gap-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold font-montserrat">
                        {member.avatar}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-semibold text-white font-montserrat">{member.name}</span>
                          <span className="px-2 py-0.5 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-montserrat">
                            {member.badge}
                          </span>
                        </div>
                        <p className="text-white/60 text-xs font-montserrat">{member.role}</p>
                        <p className="text-white/50 text-xs font-montserrat mt-1">{member.contributions} contributions</p>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="mt-4 w-full text-center text-purple-400 hover:text-purple-300 font-montserrat text-sm">
                  View All Members →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="relative py-16 px-4 sm:px-6 md:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 via-purple-900/10 to-transparent"></div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="flex items-center gap-2 mb-8">
            <Calendar className="w-6 h-6 text-blue-500" />
            <h2 className="text-3xl font-bold text-white font-nos">Upcoming Events</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {upcomingEvents.map((event, idx) => (
              <div key={idx} className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] group">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-montserrat ${
                    event.type === 'Virtual' 
                      ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                      : 'bg-green-500/20 text-green-400 border border-green-500/30'
                  }`}>
                    {event.type}
                  </span>
                  <span className="text-white/60 text-xs font-montserrat flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    {event.attendees}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 font-montserrat group-hover:text-blue-400 transition-colors">
                  {event.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed mb-4 font-montserrat">
                  {event.description}
                </p>
                <div className="space-y-2 pt-4 border-t border-white/10">
                  <div className="flex items-center gap-2 text-white/60 text-sm font-montserrat">
                    <Calendar className="w-4 h-4" />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-2 text-white/60 text-sm font-montserrat">
                    <Clock className="w-4 h-4" />
                    {event.time}
                  </div>
                </div>
                <button className="mt-4 w-full py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold font-montserrat text-sm">
                  Register Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Join CTA */}
      <div className="relative py-16 px-4 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-br from-purple-900/30 via-blue-900/20 to-pink-900/30 border border-purple-500/30 rounded-2xl p-10 md:p-12 text-center">
            <Zap className="w-16 h-16 text-purple-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4 font-nos">Ready to Join Our Community?</h2>
            <p className="text-white/80 text-lg mb-8 font-montserrat max-w-2xl mx-auto">
              Connect with thousands of professionals, share knowledge, and grow together in the Support Plus community
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 font-semibold font-montserrat flex items-center justify-center gap-2">
                <UserPlus className="w-5 h-5" />
                Join Now - It's Free
              </button>
              <button className="px-8 py-4 border border-purple-500/50 text-white rounded-lg hover:bg-purple-500/10 transition-all duration-300 font-semibold font-montserrat">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
