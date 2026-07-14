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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
