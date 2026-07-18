import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Pricing from './pages/Pricing'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import ScrollToTop from './components/ScrollToTop'
import BookIntro from './components/BookIntro'
import Insurance from './pages/Insurance'
import Consulting from './pages/Consulting'
import Logistics from './pages/Logistics'

function App() {
  return (
    <div className="min-h-screen bg-dark">
      <BookIntro />
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/prices" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/insurance" element={<Insurance />} />
          <Route path="/services/consulting" element={<Consulting />} />
          <Route path="/services/logistics" element={<Logistics />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
