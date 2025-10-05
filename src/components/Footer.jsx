import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  const [email, setEmail] = useState('')
  const handleSubscribe = (e) => {
    e.preventDefault()
    // In production, hook this to your newsletter backend / provider
    alert(`Thanks — ${email} subscribed (demo).`)
    setEmail('')
  }

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <h3 className="text-3xl font-bold">Yukti</h3>
              <div className="flex gap-2">
                <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-white text-xs font-bold">UK</span>
                <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-white text-xs font-bold">MT</span>
                <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-white text-xs font-bold">SE</span>
              </div>
            </div>
            <p className="text-white/80 text-lg mb-6 max-w-md">
              Professional iGaming consulting services for operators scaling in regulated markets. 
              Compliance, risk mitigation, and operational excellence.
            </p>
            <div className="flex gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-300">100%</div>
                <div className="text-white/60 text-sm">Compliance Focus</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-300">15+</div>
                <div className="text-white/60 text-sm">Markets</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-300">EU/UK/US</div>
                <div className="text-white/60 text-sm">Expertise</div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white mb-4">Services</h4>
            <ul className="space-y-3 text-white/80">
              <li>
                <Link to="/integration-audit" className="hover:text-cyan-300 transition-colors flex items-center gap-2">
                  <span>🔍</span> Integration Audit
                </Link>
              </li>
              <li>
                <Link to="/game-launch-qa" className="hover:text-cyan-300 transition-colors flex items-center gap-2">
                  <span>🎮</span> Game Launch QA
                </Link>
              </li>
              <li>
                <Link to="/ops-telemetry" className="hover:text-cyan-300 transition-colors flex items-center gap-2">
                  <span>📊</span> Ops Telemetry
                </Link>
              </li>
              <li>
                <Link to="/fractional-tam" className="hover:text-cyan-300 transition-colors flex items-center gap-2">
                  <span>🤝</span> Fractional TAM
                </Link>
              </li>
              <li>
                <Link to="/rg-payments-triage" className="hover:text-cyan-300 transition-colors flex items-center gap-2">
                  <span>⚖️</span> RG & Payments
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter & Contact */}
          <div>
            <h4 className="font-bold text-white mb-4">Stay Updated</h4>
            <p className="text-white/80 mb-4">Get insights on iGaming compliance and industry trends.</p>
            <form onSubmit={handleSubscribe} className="mb-6">
              <div className="flex flex-col gap-2">
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                  className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:border-cyan-300"
                />
                <button className="btn-accent px-4 py-3 text-sm font-semibold">
                  Subscribe
                </button>
              </div>
            </form>
            
            <div className="space-y-2 text-white/80">
              <div className="flex items-center gap-2">
                <span>📧</span>
                <span>hello@yukti.consulting</span>
              </div>
              <div className="flex items-center gap-2">
                <span>🌍</span>
                <span>UK • Malta • Sweden</span>
              </div>
            </div>
          </div>
        </div>

        {/* Market Expertise */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-6 flex-wrap">
              <div className="flex items-center gap-2 text-white/60">
                <span className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center text-red-600 text-sm font-bold">UK</span>
                <span className="text-sm">Market Expertise</span>
              </div>
              <div className="flex items-center gap-2 text-white/60">
                <span className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 text-sm font-bold">EU</span>
                <span className="text-sm">Regulatory Knowledge</span>
              </div>
              <div className="flex items-center gap-2 text-white/60">
                <span className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center text-green-600 text-sm font-bold">US</span>
                <span className="text-sm">Compliance Focus</span>
              </div>
            </div>
            
            <div className="text-white/60 text-sm">
              © {new Date().getFullYear()} Yukti Consulting. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}