import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const BookIntro = () => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Prevent scrolling while the opening animation is playing
    document.body.style.overflow = 'hidden'

    // Unmount the intro overlay and restore scrolling after 2.0 seconds (2000ms)
    const timer = setTimeout(() => {
      setIsVisible(false)
      document.body.style.overflow = ''
    }, 2000)

    return () => {
      document.body.style.overflow = ''
      clearTimeout(timer)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-[9999] flex overflow-hidden pointer-events-none">
      {/* Left page/block - covers left 50% and slides left */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: '-100%' }}
        transition={{
          duration: 1.5,
          ease: [0.85, 0, 0.15, 1], // Custom smooth cubic-bezier easing
          delay: 0.5, // Brief initial pause (0.5s) + animation (1.5s) = 2.0s total
        }}
        className="w-1/2 h-full bg-black border-r border-white/5 shadow-[10px_0_30px_rgba(0,0,0,0.8)] pointer-events-auto"
      />

      {/* Right page/block - covers right 50% and slides right */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: '100%' }}
        transition={{
          duration: 1.5,
          ease: [0.85, 0, 0.15, 1],
          delay: 0.5,
        }}
        className="w-1/2 h-full bg-black border-l border-white/5 shadow-[-10px_0_30px_rgba(0,0,0,0.8)] pointer-events-auto"
      />
    </div>
  )
}

export default BookIntro
