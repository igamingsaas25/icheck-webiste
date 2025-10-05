import React from 'react'
import Hero from '../components/Hero'
import ServiceTiles from '../components/ServiceTiles'
import WhyChooseUs from '../components/WhyChooseUs'

export default function Home({ onContact, onDemo }) {
  return (
    <div className="bg-bg min-h-screen w-full">
      <Hero onContact={onContact} onDemo={onDemo} />
      <ServiceTiles />
      <WhyChooseUs />
      
      <section className="py-8 px-6 text-center w-full">
        <div className="w-24 h-1 bg-secondary mx-auto mb-8 rounded-full" />
        <h2 className="text-2xl font-bold text-primary">See how Yukti works for your business</h2>
        <p className="text-text mt-2">Talk to our experts and discover solutions tailored for you.</p>
        <div className="mt-6 flex justify-center gap-4">
          <button
            className="px-6 py-3 bg-secondary text-bg rounded-lg hover:bg-primary hover:text-secondary transition"
            onClick={onContact}
          >
            Contact Sales
          </button>
        </div>
      </section>
    </div>
  )
}