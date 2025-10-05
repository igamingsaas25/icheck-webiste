import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar({ onContact, onDemo }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
    <nav className="bg-bg shadow-sm w-full">
      <div className="w-full px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-4 ml-10">
          <Link to="/" className="text-4xl md:text-5xl font-bold text-primary">Yukti</Link>
        </div>

        {/* Hamburger for mobile */}
        <button
          className="md:hidden text-primary focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="relative group">
            <button
              className="text-text font-medium flex items-center gap-2 text-base font-semibold"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              onBlur={() => setDropdownOpen(false)}
            >
              Solutions
              <svg className="w-3 h-3" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06-.02L10 10.67l3.71-3.48a.75.75 0 111.04 1.08l-4.25 4a.75.75 0 01-1.04 0l-4.25-4a.75.75 0 01-.02-1.06z" clipRule="evenodd"/></svg>
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-bg shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-20">
              <Link to="/insightedge" className="block px-4 py-2 hover:bg-secondary hover:text-bg text-text">InsightEdge</Link>
              <Link to="/playsure" className="block px-4 py-2 hover:bg-secondary hover:text-bg text-text">PlaySure</Link>
              <Link to="/partnercare" className="block px-4 py-2 hover:bg-secondary hover:text-bg text-text">PartnerCare</Link>
            </div>
          </div>
          <button className="px-4 py-2 text-sm bg-secondary text-bg rounded-lg hover:bg-primary hover:text-secondary"
            onClick={onContact}
          >Contact Sales</button>
          <button className="px-4 py-2 text-sm border border-primary text-primary rounded-lg hover:bg-bg hover:text-secondary"
            onClick={onDemo}
          >Request Demo</button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-16 left-0 w-full bg-bg shadow-lg md:hidden z-30">
            <div className="flex flex-col items-start px-6 py-4 space-y-2">
              <div className="relative w-full">
                <button
                  className="text-text font-medium flex items-center gap-2 text-base font-semibold w-full"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  Solutions
                  <svg className="w-3 h-3" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06-.02L10 10.67l3.71-3.48a.75.75 0 111.04 1.08l-4.25 4a.75.75 0 01-1.04 0l-4.25-4a.75.75 0 01-.02-1.06z" clipRule="evenodd"/></svg>
                </button>
                {dropdownOpen && (
                  <div className="mt-2 w-full bg-bg shadow-lg rounded-lg z-30">
                    <Link to="/insightedge" className="block px-4 py-2 hover:bg-secondary hover:text-bg text-text">InsightEdge</Link>
                    <Link to="/playsure" className="block px-4 py-2 hover:bg-secondary hover:text-bg text-text">PlaySure</Link>
                    <Link to="/partnercare" className="block px-4 py-2 hover:bg-secondary hover:text-bg text-text">PartnerCare</Link>
                  </div>
                )}
              </div>
              <button className="w-full px-4 py-2 text-sm bg-secondary text-bg rounded-lg hover:bg-primary hover:text-secondary"
                onClick={onContact}
              >Contact Sales</button>
              <button className="w-full px-4 py-2 text-sm border border-primary text-primary rounded-lg hover:bg-bg hover:text-secondary"
                onClick={onDemo}
              >Request Demo</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}