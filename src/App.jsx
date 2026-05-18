import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Produtos from './pages/Produtos'
import Sobre from './pages/Sobre'
import ScrollToTop from './components/ScrollToTop'

function App() {
  const location = useLocation()

  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
