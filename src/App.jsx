import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import InsightEdge from './pages/InsightEdge'
import PlaySure from './pages/PlaySure'
import PartnerCare from './pages/PartnerCare'
import ContactModal from './components/ContactModal'

export default function App() {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalMode, setModalMode] = useState('sales') // 'sales' or 'demo'

  const openContact = () => { setModalMode('sales'); setModalOpen(true) }
  const openDemo = () => { setModalMode('demo'); setModalOpen(true) }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onContact={openContact} onDemo={openDemo} />
      <main className="flex-grow bg-bg">
        <Routes>
          <Route path="/" element={<Home onContact={openContact} onDemo={openDemo} />} />
          <Route path="/insightedge" element={<InsightEdge />} />
          <Route path="/playsure" element={<PlaySure />} />
          <Route path="/partnercare" element={<PartnerCare />} />
        </Routes>
      </main>
      <Footer />
      <ContactModal show={modalOpen} onClose={() => setModalOpen(false)} mode={modalMode} />
    </div>
  )
}