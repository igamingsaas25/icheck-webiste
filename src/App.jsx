import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import IntegrationAudit from './pages/IntegrationAudit'
import GameLaunchQA from './pages/GameLaunchQA'
import OpsTelemetry from './pages/OpsTelemetry'
import FractionalTAM from './pages/FractionalTAM'
import RGPaymentsTriage from './pages/RGPaymentsTriage'
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
          <Route path="/integration-audit" element={<IntegrationAudit />} />
          <Route path="/game-launch-qa" element={<GameLaunchQA />} />
          <Route path="/ops-telemetry" element={<OpsTelemetry />} />
          <Route path="/fractional-tam" element={<FractionalTAM />} />
          <Route path="/rg-payments-triage" element={<RGPaymentsTriage />} />
        </Routes>
      </main>
      <Footer />
      <ContactModal show={modalOpen} onClose={() => setModalOpen(false)} mode={modalMode} />
    </div>
  )
}