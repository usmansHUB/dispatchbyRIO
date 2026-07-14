import { motion } from 'framer-motion'
import { useEffect } from 'react'

const PageLoader = ({ onComplete }) => {
  useEffect(() => {
    // Total animation timeline takes 2.2 seconds
    const timer = setTimeout(() => {
      onComplete()
    }, 2200)
    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden bg-transparent">
      {/* 1. Black Page Slide: A giant black thunderbolt shape sweeping from right to left */}
      <motion.div
        className="absolute inset-0 w-full h-full text-dark-light"
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        transition={{
          duration: 1.2,
          ease: "easeInOut"
        }}
      >
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
          <polygon points="70,0 30,55 50,55 15,100 80,45 55,45" fill="currentColor" />
        </svg>
      </motion.div>

      {/* 2. White Page Slide: A giant white thunderbolt shape sweeping from left to right */}
      <motion.div
        className="absolute inset-0 w-full h-full text-white"
        initial={{ x: "-100%" }}
        animate={{ 
          x: ["-100%", "-100%", "100%"]
        }}
        transition={{
          duration: 2.2,
          times: [0, 0.45, 1], // Stays offscreen for 1.0s, then sweeps to the right in 1.2s
          ease: "easeInOut"
        }}
      >
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
          <polygon points="30,0 70,55 50,55 85,100 20,45 45,45" fill="currentColor" />
        </svg>
      </motion.div>
    </div>
  )
}

export default PageLoader
