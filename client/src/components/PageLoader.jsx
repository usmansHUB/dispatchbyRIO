import { motion } from 'framer-motion'
import { useEffect } from 'react'

const PageLoader = ({ onComplete }) => {
  useEffect(() => {
    // Total animation timeline takes 2.8 seconds
    const timer = setTimeout(() => {
      onComplete()
    }, 2800)
    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden">
      {/* 1. Black Page Slide: moves from right to left */}
      <motion.div
        className="absolute inset-0 bg-dark-light"
        initial={{ x: "100%" }}
        animate={{ 
          x: ["100%", "0%", "0%", "-100%"]
        }}
        transition={{
          duration: 1.4,
          times: [0, 0.4, 0.7, 1],
          ease: "easeInOut"
        }}
      />

      {/* 2. White Page Slide: moves from left to right */}
      <motion.div
        className="absolute inset-0 bg-white"
        initial={{ x: "-100%" }}
        animate={{ 
          x: ["-100%", "-100%", "0%", "0%", "100%"]
        }}
        transition={{
          duration: 2.8,
          times: [0, 0.4, 0.75, 0.85, 1],
          ease: "easeInOut"
        }}
      />
    </div>
  )
}

export default PageLoader
