import React from 'react'

const benefits = [
  { title: 'Accelerated Launches', desc: 'Streamlined workflows that cut delays and bring products to market faster.' },
  { title: 'Actionable Insights', desc: 'Analytics that turn complex data into clear strategies for growth.' },
  { title: 'Flawless Experiences', desc: 'Comprehensive testing ensures smooth gameplay across every device.' },
  { title: 'Effortless Integrations', desc: 'Seamlessly connect with your existing platforms, vendors, and tools.' },
  { title: 'Built to Scale', desc: 'Flexible solutions designed to grow with global operators and markets.' },
  { title: 'Trusted Expertise', desc: 'Dedicated support from iGaming specialists who understand your challenges.' },
]

export default function WhyChooseUs() {
  return (
    <section className="w-full py-10 mb-10px bg-bg">
      <div className="w-24 h-1 bg-secondary mx-auto mb-8 rounded-full" />
      <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-primary text-center">Why Choose Us?</h2>
      <p className="text-center text-text mt-2 text-lg max-w-2xl mx-auto">Six benefits of working with Yukti</p>
      <div className="w-full px-4 sm:px-8 mt-8 grid gap-6 grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto">
        {benefits.map((b) => (
          <div key={b.title} className="p-6 bg-bg rounded-lg shadow border border-secondary flex flex-col h-full">
            <h3 className="font-semibold text-primary">{b.title}</h3>
            <p className="text-text mt-2">{b.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}