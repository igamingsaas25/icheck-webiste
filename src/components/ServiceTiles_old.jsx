import React from 'react'
import { Link } from 'react-router-dom'

const services = [
  { name: 'InsightEdge', description: 'Unlock trends, optimize performance with actionable data insights. In the fast-moving world of iGaming, data isn’t just numbers — it’s the lifeblood of compliance, player trust, and operational success. InsightEdge helps operators turn raw logs into actionable intelligence.', link: '/insightedge' },
  { name: 'PlaySure', description: 'Test games across devices, ensure compliance, and deliver flawless player experiences. In iGaming, a single glitch can erode player trust and trigger costly compliance issues. PlaySure empowers operators to validate gameplay across devices, regions, and regulations.', link: '/playsure' },
  { name: 'PartnerCare', description: 'Dedicated account management with technical expertise for smoother integrations. Behind every successful iGaming operation is smooth collaboration between operators, vendors, and platforms. PartnerCare provides hands-on account management combined with deep technical expertise — ensuring integrations stay reliable and relationships stay strong.', link: '/partnercare' },
]

export default function ServiceTiles() {
  return (
    <section className="w-full py-10 bg-bg">
      {/* Section divider */}
      <div className="w-24 h-1 bg-secondary mx-auto mb-8 rounded-full" />
      {/* Large heading */}
      <h2 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-primary text-center">How Yukti works</h2>
      {/* Base description */}
      <p className="mt-6 text-base sm:text-lg md:text-xl text-text text-center max-w-2xl mx-auto">
        Discover our suite of solutions designed to help iGaming operators scale, optimize, and deliver exceptional player experiences.
      </p>
      <div className="w-full px-4 sm:px-8 mt-12 grid gap-8 grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto">
        {services.map((s) => (
          <Link
            key={s.name}
            to={s.link}
            className="flex flex-col justify-between min-h-[220px] p-6 sm:p-8 rounded-xl shadow hover:shadow-lg transition border border-secondary bg-bg"
          >
            <h3 className="text-xl sm:text-2xl font-extrabold text-primary mb-2">{s.name}</h3>
            <p className="text-text">{s.description}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}