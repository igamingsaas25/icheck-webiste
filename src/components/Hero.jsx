import React from 'react'

export default function Hero({ onContact, onDemo }) {
  return (
    <section className="w-full bg-gradient-to-b from-bg to-bg py-6">
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 flex flex-col items-center">
        <h1 className="text-4xl sm:text-7xl md:text-7xl font-extrabold text-primary text-center leading-tight mt-4">
          Smarter Solutions for <br className="hidden sm:block" />iGaming Operators
        </h1>
        <p className="mt-3 text-base sm:text-lg md:text-xl text-text max-w-2xl mx-auto text-center">
          From analytics to testing to account management — Yukti is your trusted partner in scaling iGaming success.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto">
          <button
            className="px-6 py-3 bg-secondary text-bg rounded-lg hover:bg-primary hover:text-secondary w-full sm:w-auto"
            onClick={onContact}
          >
            Contact Sales
          </button>
        </div>
      </div>
    </section>
  )
}