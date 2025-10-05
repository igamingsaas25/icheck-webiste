import React from 'react'
import { Link } from 'react-router-dom'

export default function PlaySure() {
  return (
    <section className="w-full bg-bg py-4 min-h-full" >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-base sm:text-lg font-semibold text-primary hover:underline mb-4"
        >
          <span className="text-2xl">←</span> Back to home
        </Link>
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mt-2 text-primary text-left">
          PlaySure — Game Testing
        </h1>
        <p className="mt-3 text-text text-base sm:text-lg text-left max-w-2xl">
          Test games across devices, ensure compliance, and deliver flawless player experiences.
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-bg p-6 rounded-xl shadow border border-secondary">
            <h3 className="font-semibold text-primary text-lg">Key benefits</h3>
            <ul className="list-disc ml-5 mt-3 text-text">
              <li>Cross-device compatibility testing</li>
              <li>Regulatory & compliance checks</li>
              <li>Automation & performance benchmarking</li>
            </ul>
          </div>
          <div className="bg-bg p-6 rounded-xl shadow border border-secondary">
            <h3 className="font-semibold text-primary text-lg">Use cases</h3>
            <ul className="list-disc ml-5 mt-3 text-text">
              <li>Pre-launch QA and certification</li>
              <li>Load testing for peak events</li>
              <li>Regression testing across releases</li>
            </ul>
          </div>
        </div>

        <div className="mt-4 max-w-2xl">
          <h3 className="font-semibold text-primary text-lg text-left">Why Yukti's approach</h3>
          <p className="mt-2 text-text text-left">
            We combine manual QA expertise with modern automation and realistic player-simulations to ensure a production-ready game.
          </p>
          <div className="mt-2 mb-0">
            <button className="px-6 py-3 bg-secondary text-bg rounded-lg hover:bg-primary hover:text-secondary transition">
              Request Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}