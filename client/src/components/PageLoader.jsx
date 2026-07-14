import { motion } from 'framer-motion'
import { useEffect } from 'react'

const PageLoader = ({ onComplete }) => {
  useEffect(() => {
    // Total animation timeline takes 2.4 seconds (1.2s for first sweep, 1.2s for second sweep)
    const timer = setTimeout(() => {
      onComplete()
    }, 2400)
    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden">
      {/* 1. Black Page Sweep: sweeps from right to left continuously */}
      <motion.div
        className="absolute inset-0 bg-dark-light"
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        transition={{
          duration: 1.2,
          ease: "easeInOut"
        }}
      />

      {/* 2. White Page Sweep: sweeps from left to right continuously */}
      <motion.div
        className="absolute inset-0 bg-white"
        initial={{ x: "-100%" }}
        animate={{ 
          x: ["-100%", "-100%", "100%"]
        }}
        transition={{
          duration: 2.4,
          times: [0, 0.5, 1], // Stays at -100% for the first 1.2s, then sweeps to 100% in 1.2s
          ease: "easeInOut"
        }}
      />
    </div>
  )
}

export default PageLoader
