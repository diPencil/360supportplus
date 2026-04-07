"use client"

import { useState, useEffect } from "react"

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [showTypingIndicator, setShowTypingIndicator] = useState(false)
  const [completedMessages, setCompletedMessages] = useState([])

  const messages = [
    "مرحباً! 👋\nنحن في سابورت بلس سعداء جداً لرؤيتك هنا!",
    "قريباً جداً سنكون في الساحة وسنغذي عالم ريادة الأعمال! 🚀\nنحن نعمل بجد لتقديم أفضل الحلول التقنية والذكية.",
    "للتواصل معنا:\ninfo@supportplusco.com",
    "ابق متابعاً لآخر التحديثات! 🔔\nسنكون معك قريباً جداً."
  ]

  useEffect(() => {
    if (isOpen && currentMessageIndex < messages.length) {
      const currentMessage = messages[currentMessageIndex]
      let charIndex = 0
      setDisplayedText("")
      setIsTyping(true)
      setShowTypingIndicator(true)

      const typeInterval = setInterval(() => {
        if (charIndex < currentMessage.length) {
          setDisplayedText(currentMessage.substring(0, charIndex + 1))
          charIndex++
        } else {
          clearInterval(typeInterval)
          setIsTyping(false)
          setShowTypingIndicator(false)
          
          // Save completed message
          setCompletedMessages(prev => [...prev, {
            id: currentMessageIndex,
            text: currentMessage,
            timestamp: new Date()
          }])
          
          // Move to next message after a delay
          setTimeout(() => {
            setCurrentMessageIndex(prev => prev + 1)
            setDisplayedText("")
          }, 2000)
        }
      }, 50) // Typing speed

      return () => clearInterval(typeInterval)
    }
  }, [isOpen, currentMessageIndex])

  // Reset when chat opens
  useEffect(() => {
    if (isOpen) {
      setCurrentMessageIndex(0)
      setDisplayedText("")
      setCompletedMessages([])
    }
  }, [isOpen])

  return (
    <>
      {/* Chat Button - Desktop & Tablet Only */}
      <div className="hidden md:flex fixed bottom-6 right-6 lg:bottom-8 lg:right-8 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="chat-button bg-gradient-to-r from-neon-blue to-neon-purple text-white px-4 py-2 lg:px-6 lg:py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
          <span className="text-xs lg:text-sm font-medium">Support Plus Agent</span>
        </button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <>
          {/* Backdrop - Desktop & Tablet Only */}
          <div 
            className="hidden md:block fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="hidden md:flex fixed bottom-24 right-6 lg:bottom-32 lg:right-8 z-50 w-80 lg:w-96 h-[400px] lg:h-[500px] max-w-[calc(100vw-2rem)] max-h-[calc(100vh-8rem)] bg-black/90 backdrop-blur-lg border border-neon-blue/30 rounded-2xl shadow-2xl overflow-hidden flex-col">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-neon-blue to-neon-purple p-4 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Support Plus Agent</h3>
                  <p className="text-xs opacity-80">Online</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/70 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="p-4 flex-1 overflow-y-auto space-y-4" style={{ height: 'calc(100% - 120px)' }}>
            {/* Completed Messages */}
            {completedMessages.map((message, index) => (
              <div key={message.id} className="flex items-start gap-3 chat-message">
                <div className="w-8 h-8 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs font-bold">SP</span>
                </div>
                <div className="bg-gray-800/50 rounded-2xl rounded-tl-sm p-3 max-w-xs">
                  <p className="text-white text-sm whitespace-pre-line">
                    {message.text}
                  </p>
                </div>
              </div>
            ))}

            {/* Current Typing Message - Only show if not completed yet */}
            {currentMessageIndex < messages.length && displayedText && !completedMessages.some(msg => msg.id === currentMessageIndex) && (
              <div className="flex items-start gap-3 chat-message">
                <div className="w-8 h-8 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs font-bold">SP</span>
                </div>
                <div className="bg-gray-800/50 rounded-2xl rounded-tl-sm p-3 max-w-xs">
                  <p className="text-white text-sm whitespace-pre-line">
                    {displayedText}
                    {isTyping && <span className="typing-cursor">|</span>}
                  </p>
                </div>
              </div>
            )}

            {/* Typing Indicator */}
            {showTypingIndicator && (
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-neon-purple to-neon-blue rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs font-bold">AI</span>
                </div>
                <div className="bg-gray-800/50 rounded-2xl rounded-tl-sm p-3">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Chat Footer */}
          <div className="bg-gray-900/50 p-3 border-t border-gray-700/50 mt-auto">
            <div className="flex items-center gap-2 text-gray-400 text-xs">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>نحن هنا للمساعدة</span>
            </div>
          </div>
        </div>
        </>
      )}
    </>
  )
}
