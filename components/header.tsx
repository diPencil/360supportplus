"use client"

import { useState, useRef, useEffect } from "react"
import { Menu, Search, X, ArrowRight, FileText } from "lucide-react"
import Link from "next/link"

interface SearchResult {
  id: string
  title: string
  description: string
  category: string
  url: string
  type: string
  keywords: string[]
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<SearchResult[]>([])
  const dropdownRef = useRef<HTMLDivElement>(null)
  const searchRef = useRef<HTMLDivElement>(null)

  // Searchable content database
  const searchableContent: SearchResult[] = [
    { id: "1", title: "Welcome to Support Plus", description: "Introduction to Support Plus platform and services", category: "Getting Started", url: "/help", type: "Guide", keywords: ["welcome", "introduction", "getting started", "overview", "basics"] },
    { id: "2", title: "Finance Services", description: "Financial management, accounting, and compliance solutions", category: "Services", url: "/services/service/finance", type: "Service", keywords: ["finance", "accounting", "billing", "financial", "money", "invoice", "payment"] },
    { id: "3", title: "HR Services", description: "Human resources management and talent development", category: "Services", url: "/services/service/hr", type: "Service", keywords: ["hr", "human resources", "employee", "staff", "recruitment", "onboarding"] },
    { id: "4", title: "Marketing Services", description: "Digital marketing, analytics, and campaign management", category: "Services", url: "/services/service/marketing", type: "Service", keywords: ["marketing", "campaign", "automation", "email", "social media", "advertising"] },
    { id: "5", title: "Call Centers Services", description: "Customer service automation and call center optimization", category: "Services", url: "/services/service/call-centers", type: "Service", keywords: ["call center", "customer service", "support", "phone", "calls", "contact center"] },
    { id: "6", title: "Technology Services", description: "IT infrastructure, software development, and tech consulting", category: "Services", url: "/services/service/technology", type: "Service", keywords: ["technology", "it", "cloud", "infrastructure", "software", "technical"] },
    { id: "7", title: "Analytics Services", description: "Business intelligence, data analytics, and insights", category: "Services", url: "/services/service/analytics", type: "Service", keywords: ["analytics", "dashboard", "report", "data", "metrics", "insights"] },
    { id: "8", title: "Machine Learning", description: "Predictive analytics and pattern recognition for data-driven decisions", category: "AI Modules", url: "/ai-modules/machine-learning", type: "AI Module", keywords: ["machine learning", "ml", "ai", "artificial intelligence", "prediction", "data analysis"] },
    { id: "9", title: "Natural Language Processing", description: "Advanced text analysis and understanding for intelligent communication", category: "AI Modules", url: "/ai-modules/natural-language-processing", type: "AI Module", keywords: ["nlp", "natural language", "text", "language processing", "chatbot", "sentiment"] },
    { id: "10", title: "Computer Vision", description: "Image recognition and visual analytics for enhanced insights", category: "AI Modules", url: "/ai-modules/computer-vision", type: "AI Module", keywords: ["computer vision", "image", "recognition", "visual", "photo", "picture"] },
    { id: "11", title: "AI MENA Model", description: "Specialized AI model for Middle East and North Africa region", category: "AI", url: "/ai-mena-model", type: "AI Model", keywords: ["ai mena", "mena model", "regional ai", "arabic ai", "middle east", "north africa"] },
    { id: "12", title: "Financial Services Industry", description: "Comprehensive solutions for banking, insurance, and investment firms", category: "Industries", url: "/services/financial-services", type: "Industry", keywords: ["financial services", "banking", "insurance", "finance industry"] },
    { id: "13", title: "Healthcare Industry", description: "Technology solutions for medical institutions and healthcare providers", category: "Industries", url: "/services/healthcare", type: "Industry", keywords: ["healthcare", "medical", "hospital", "health", "patient"] },
    { id: "14", title: "Retail & E-commerce", description: "End-to-end solutions for online and offline retail operations", category: "Industries", url: "/services/retail-and-e-commerce", type: "Industry", keywords: ["retail", "e-commerce", "shopping", "store", "commerce"] },
    { id: "15", title: "Finance Templates", description: "Professional financial management templates", category: "Templates", url: "/templates/finance", type: "Template", keywords: ["template", "finance", "financial", "invoice template"] },
    { id: "16", title: "HR Templates", description: "Human resources and employee management templates", category: "Templates", url: "/templates/hr", type: "Template", keywords: ["template", "hr", "human resources", "employee template"] },
    { id: "17", title: "Marketing Templates", description: "Marketing campaign and content templates", category: "Templates", url: "/templates/marketing", type: "Template", keywords: ["template", "marketing", "campaign", "content template"] },
    { id: "18", title: "Learn More About SP", description: "Comprehensive information about Support Plus", category: "About", url: "/learn-more", type: "Page", keywords: ["about", "learn more", "support plus", "company", "information"] },
    { id: "19", title: "SP Community", description: "Connect with Support Plus community members", category: "Community", url: "/community", type: "Page", keywords: ["community", "forum", "discussion", "connect"] },
    { id: "20", title: "Help Center", description: "Find answers and get support", category: "Support", url: "/help", type: "Page", keywords: ["help", "support", "faq", "documentation", "guide"] },
    { id: "21", title: "News", description: "Latest news and updates from Support Plus", category: "News", url: "/news", type: "Page", keywords: ["news", "updates", "announcements", "latest"] },
    { id: "22", title: "Pricing", description: "View pricing plans and packages", category: "Pricing", url: "/pricing", type: "Page", keywords: ["pricing", "plans", "packages", "cost", "price"] },
    { id: "23", title: "Contact Us", description: "Get in touch with Support Plus team", category: "Contact", url: "/contact", type: "Page", keywords: ["contact", "reach out", "get in touch", "support"] },
  ]

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    
    if (query.trim().length === 0) {
      setSearchResults([])
      return
    }

    const lowerQuery = query.toLowerCase().trim()
    const queryWords = lowerQuery.split(/\s+/)

    const results = searchableContent
      .map(item => {
        const titleMatch = item.title.toLowerCase().includes(lowerQuery)
        const descMatch = item.description.toLowerCase().includes(lowerQuery)
        const keywordMatches = item.keywords.filter(kw => 
          queryWords.some(word => kw.toLowerCase().includes(word) || word.includes(kw.toLowerCase()))
        ).length

        let score = 0
        if (titleMatch) score += 10
        if (descMatch) score += 5
        score += keywordMatches * 3

        return { ...item, score }
      })
      .filter(item => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 8)

    setSearchResults(results)
  }

  const handleSearchResultClick = (url: string) => {
    setIsSearchOpen(false)
    setSearchQuery("")
    setSearchResults([])
  }

  const menuItems = [
    { name: "Our Templates", href: "/templates" },
    { name: "Branding Structure", href: "/branding" },
    { name: "Services Industries", href: "/services" },
    { name: "AI Modules", href: "/ai-modules", badge: "BETA" },
    { name: "AI MENA Model", href: "/ai-mena-model", badge: "NEW" },
    { name: "Contact Us", href: "/contact" },
    { name: "News", href: "/news" },
    { name: "Partners", href: "/partners" },
    { name: "Updates", href: "/updates" },
    { name: "Help Center", href: "/help" },
    { name: "Pricing", href: "/pricing" },
    { name: "Learn More About SP", href: "/learn-more" },
    { name: "SP Community", href: "/community" },
    { name: "Become a Partner", href: "/become-partner" },
    { name: "Feedback & Suggestions", href: "/feedback" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-black/80 backdrop-blur-lg border-b border-neon-blue/20">
      <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 md:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Mobile: Logo + Menu + Search */}
          <div className="flex items-center gap-4 w-full md:hidden">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0" onClick={() => setIsMenuOpen(false)}>
              <img
                src="/logo.png"
                alt="SUPPORTPLUS Logo"
                className="object-contain h-8 w-auto cursor-pointer"
                style={{
                  filter: 'drop-shadow(0 0 10px rgba(59, 130, 246, 0.6))'
                }}
                onError={(e) => {
                  console.log('Error loading logo.png');
                  e.currentTarget.style.display = 'none';
                }}
              />
            </Link>

            {/* Spacer */}
            <div className="flex-1" />

            {/* Search Icon */}
            <div className="relative" ref={searchRef}>
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 text-white hover:text-neon-blue transition-colors relative"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Mobile Search Dropdown */}
              {isSearchOpen && (
                <div className="absolute top-full right-0 mt-2 w-[calc(100vw-2rem)] max-w-sm bg-black/95 backdrop-blur-xl border border-neon-blue/30 rounded-xl shadow-2xl z-50">
                  <div className="p-4">
                    <div className="relative mb-4">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/50" />
                      <input
                        type="text"
                        placeholder="Search Support Plus..."
                        value={searchQuery}
                        onChange={(e) => handleSearch(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-neon-blue/50 transition-all font-montserrat text-sm"
                        autoFocus
                      />
                    </div>

                    {/* Search Results */}
                    {searchResults.length > 0 && (
                      <div className="max-h-64 overflow-y-auto space-y-1">
                        {searchResults.map((result) => (
                          <Link
                            key={result.id}
                            href={result.url}
                            onClick={() => handleSearchResultClick(result.url)}
                            className="block w-full text-left p-3 rounded-lg hover:bg-white/5 transition-colors group"
                          >
                            <div className="flex items-start gap-3">
                              <FileText className="w-4 h-4 text-neon-blue flex-shrink-0 mt-0.5" />
                              <div className="flex-1 min-w-0">
                                <div className="text-white text-sm font-semibold font-montserrat group-hover:text-neon-blue transition-colors line-clamp-1">
                                  {result.title}
                                </div>
                                <div className="text-white/60 text-xs font-montserrat line-clamp-1 mt-0.5">
                                  {result.description}
                                </div>
                                <div className="text-white/40 text-xs font-montserrat mt-1">
                                  {result.category}
                                </div>
                              </div>
                              <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-neon-blue transition-colors flex-shrink-0" />
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}

                    {searchQuery.trim().length > 0 && searchResults.length === 0 && (
                      <div className="text-center py-4 text-white/60 text-sm font-montserrat">
                        No results found
                      </div>
                    )}

                    {searchQuery.trim().length === 0 && (
                      <div className="text-center py-4 text-white/60 text-sm font-montserrat">
                        Start typing to search...
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Menu Icon */}
            <button
              onClick={() => {
                setIsMenuOpen(!isMenuOpen)
                setIsSearchOpen(false)
              }}
              className="p-2 text-white hover:text-neon-blue transition-colors relative z-[101]"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Desktop/Tablet: Logo + Buttons */}
          <div className="hidden md:flex items-center justify-between w-full">
            {/* Logo Left */}
            <Link href="/" className="flex-shrink-0">
              <img
                src="/logo.png"
                alt="SUPPORTPLUS Logo"
                className="object-contain h-10 w-auto cursor-pointer"
                style={{
                  filter: 'drop-shadow(0 0 10px rgba(59, 130, 246, 0.6))'
                }}
                onError={(e) => {
                  console.log('Error loading logo.png');
                  e.currentTarget.style.display = 'none';
                }}
              />
            </Link>

            {/* Buttons Right */}
            <div className="flex items-center gap-3 sm:gap-4">
              <Link
                href="/become-partner"
                className="px-4 sm:px-5 py-2 text-sm sm:text-base text-white border border-neon-blue/50 rounded-full hover:bg-neon-blue/10 hover:border-neon-blue transition-all duration-300 font-montserrat"
              >
                Partner with Us
              </Link>
              <Link
                href="/services"
                className="px-4 sm:px-5 py-2 text-sm sm:text-base bg-gradient-to-r from-neon-blue to-neon-purple text-white rounded-full hover:shadow-lg hover:shadow-neon-blue/50 transition-all duration-300 font-montserrat font-medium"
              >
                Explore Services
              </Link>
              
              {/* Menu Icon Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="p-2.5 text-white border border-neon-blue/50 rounded-full hover:bg-neon-blue/10 hover:border-neon-blue transition-all duration-300 flex items-center justify-center"
                  aria-label="Menu"
                >
                  <Menu 
                    className={`w-5 h-5 transition-transform duration-300 ${isDropdownOpen ? 'rotate-90' : ''}`} 
                  />
                </button>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute right-0 top-full mt-3 w-[min(90vw,680px)] rounded-2xl border border-neon-blue/30 bg-black/85 backdrop-blur-2xl shadow-[0_25px_60px_rgba(8,13,40,0.55)] z-50 animate-fade-in">
                    <div className="px-5 pt-5 pb-4">
                      <div className="flex items-center justify-between gap-4 pb-4 border-b border-white/10">
                        <div>
                          <p className="text-white/60 text-xs uppercase tracking-[0.3em] font-montserrat">
                            Navigation
                          </p>
                          <p className="text-white text-lg font-nos leading-tight mt-1">
                            Explore Support Plus
                          </p>
                        </div>
                        <button
                          onClick={() => setIsDropdownOpen(false)}
                          className="text-white/60 hover:text-white transition-colors text-sm font-montserrat"
                        >
                          Close
                        </button>
                      </div>

                      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 pt-4">
                        {menuItems.map((item, index) => (
                          <Link
                            key={index}
                            href={item.href}
                            onClick={() => setIsDropdownOpen(false)}
                            className="group rounded-xl border border-white/5 hover:border-neon-blue/40 bg-white/[0.02] hover:bg-neon-blue/10 transition-all duration-200 p-3 flex flex-col gap-2 shadow-[0_0_0_rgba(0,0,0,0)] hover:shadow-[0_12px_30px_rgba(59,130,246,0.18)]"
                          >
                            <span className="text-sm font-montserrat text-white/90 group-hover:text-white transition-colors">
                              {item.name}
                            </span>
                            <div className="flex items-center justify-between text-[11px] text-white/40 font-montserrat">
                              <span>View details</span>
                              <svg 
                                className="w-4 h-4 text-white/30 group-hover:text-neon-blue transition-colors" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </div>
                            {item.badge && (
                              <span className={`mt-auto self-start text-[10px] px-2 py-0.5 rounded-full font-montserrat uppercase tracking-wide ${
                                item.badge === 'BETA' 
                                  ? 'bg-white/10 text-white/70' 
                                  : 'bg-cyan-400/15 text-cyan-300'
                              }`}>
                                {item.badge}
                              </span>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="md:hidden fixed left-0 right-0 bottom-0 bg-gradient-to-b from-black via-black/98 to-black/95 backdrop-blur-xl z-[100]" 
          style={{ 
            top: '64px', 
            height: 'calc(100vh - 64px)',
            display: 'block'
          }}
        >
          <div className="h-full overflow-y-auto">
            {/* Quick Actions */}
            <div className="px-3 pt-3 pb-2 space-y-2">
              <Link 
                href="/services" 
                onClick={() => setIsMenuOpen(false)}
                className="block w-full px-3 py-2 text-white bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 border border-neon-blue/40 rounded-lg hover:from-neon-blue/30 hover:to-neon-purple/30 hover:border-neon-blue/60 transition-all text-xs font-montserrat font-medium text-center"
              >
                Explore Services
              </Link>
              <Link 
                href="/become-partner" 
                onClick={() => setIsMenuOpen(false)}
                className="block w-full px-3 py-2 text-white border border-neon-blue/40 rounded-lg hover:bg-neon-blue/10 hover:border-neon-blue/60 transition-all text-xs font-montserrat text-center"
              >
                Partner with Us
              </Link>
            </div>
            
            {/* Mobile Menu Items */}
            <div className="px-3 pt-1 pb-3">
              <div className="pt-2 border-t border-white/10">
                <div className="space-y-0.5">
                  {menuItems.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="block px-2.5 py-2 text-white/90 hover:text-white hover:bg-white/5 rounded-lg transition-all font-montserrat flex items-center justify-between group"
                    >
                      <span className="flex-1 text-xs">{item.name}</span>
                      {item.badge && (
                        <span className={`text-[9px] px-1.5 py-0.5 rounded-full ml-2 font-medium ${
                          item.badge === 'BETA' 
                            ? 'bg-white/15 text-white/80' 
                            : 'bg-cyan-400/25 text-cyan-300'
                        }`}>
                          {item.badge}
                        </span>
                      )}
                      <svg 
                        className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity ml-1.5 text-neon-blue" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(59, 130, 246, 0.5);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(59, 130, 246, 0.7);
        }
      `}</style>
    </header>
  )
}
