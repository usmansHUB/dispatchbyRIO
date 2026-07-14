import { motion } from 'framer-motion'
import { useEffect } from 'react'

const PageLoader = ({ onComplete }) => {
  useEffect(() => {
    // Total animation timeline takes 2.0 seconds
    const timer = setTimeout(() => {
      onComplete()
    }, 2000)
    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden">
      {/* 1. Black Page Slide: Sweeps in from right to left (100% -> 0%) and stays covering the screen */}
      <motion.div
        className="absolute inset-0 bg-dark-light"
        initial={{ x: "100%" }}
        animate={{ x: "0%" }}
        transition={{
          duration: 0.8,
          ease: "easeInOut"
        }}
      />

      {/* 2. White Page Slide: Sweeps in from left to right (-100% -> 100%) covering the black screen and revealing the main page */}
      <motion.div
        className="absolute inset-0 bg-white"
        initial={{ x: "-100%" }}
        animate={{ 
          x: ["-100%", "-100%", "100%"]
        }}
        transition={{
          duration: 2.0,
          times: [0, 0.4, 1], // Stays off-screen for 0.8s (0.4 of 2.0s), then sweeps to 100% in 1.2s
          ease: "easeInOut"
        }}
      />
    </div>
  )
}

export default PageLoader
