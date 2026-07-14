import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Pricing from './pages/Pricing'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import ScrollToTop from './components/ScrollToTop'
import PageLoader from './components/PageLoader'

function App() {
  const [loading, setLoading] = useState(true)

  return (
    <>
      {loading && <PageLoader onComplete={() => setLoading(false)} />}
      
      <motion.div 
        className="min-h-screen bg-dark"
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <ScrollToTop />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/prices" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </motion.div>
    </>
  )
}

export default App

