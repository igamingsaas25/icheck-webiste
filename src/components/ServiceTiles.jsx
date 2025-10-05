import React from 'react'
import { Link } from 'react-router-dom'

const services = [
  { 
    name: 'Integration & Migration Audit', 
    icon: '🔍',
    badge: 'Consulting Pack',
    description: 'De-risk mission-critical platform changes with comprehensive technical validation and regulatory compliance assessment.',
    link: '/integration-audit',
    color: 'bg-red-50 border-red-200 hover:border-red-300'
  },
  { 
    name: 'Game-Launch QA Pack', 
    icon: '🎮',
    badge: 'Consulting Pack',
    description: 'Secure fast and compliant market entry for new game titles with regulatory evidence and compliance validation.',
    link: '/game-launch-qa',
    color: 'bg-blue-50 border-blue-200 hover:border-blue-300'
  },
  { 
    name: 'Ops Telemetry Starter Pack', 
    icon: '📊',
    badge: 'Consulting Pack',
    description: 'Transform reactive operations to proactive monitoring with high-impact dashboards and revenue-protecting alerts.',
    link: '/ops-telemetry',
    color: 'bg-green-50 border-green-200 hover:border-green-300'
  },
  { 
    name: 'Fractional TAM + Integration Support', 
    icon: '🤝',
    badge: 'Retainer Service',
    description: 'Specialist capacity for scaling operators entering regulated markets without full-time hire costs.',
    link: '/fractional-tam',
    color: 'bg-purple-50 border-purple-200 hover:border-purple-300'
  },
  { 
    name: 'RG & Payments Triage', 
    icon: '⚖️',
    badge: 'Consulting Pack',
    description: 'Optimize player funnel for compliance and conversion by eliminating technical friction in RG checks and payments.',
    link: '/rg-payments-triage',
    color: 'bg-orange-50 border-orange-200 hover:border-orange-300'
  },
]

export default function ServiceTiles() {
  return (
    <section id="services-section" className="w-full py-16 bg-bg">
      {/* Section divider */}
      <div className="w-24 h-1 gradient-secondary mx-auto mb-8 rounded-full" />
      
      {/* Large heading */}
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary text-center mb-4">
        Professional Services
      </h2>
      
      {/* Base description */}
      <p className="mt-6 text-lg md:text-xl text-text text-center max-w-3xl mx-auto mb-12">
        Productized consulting packs and retainer services designed for iGaming operators scaling in regulated markets.
      </p>

      {/* Services Grid */}
      <div className="w-full px-6 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <Link
            key={service.name}
            to={service.link}
            className={`service-card ${service.color} fade-in-up fade-in-delay-${Math.min(index + 1, 3)} group`}
          >
            {/* Service Icon & Badge */}
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-2xl shadow-sm">
                {service.icon}
              </div>
              <span className="badge-primary text-xs font-semibold">
                {service.badge}
              </span>
            </div>
            
            {/* Service Title */}
            <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
              {service.name}
            </h3>
            
            {/* Service Description */}
            <p className="text-text text-sm leading-relaxed">
              {service.description}
            </p>
            
            {/* Learn More Arrow */}
            <div className="mt-4 flex items-center text-secondary text-sm font-medium group-hover:text-primary transition-colors">
              Learn more 
              <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </Link>
        ))}
      </div>

      {/* Trust Indicators */}
      <div className="mt-16 text-center">
        <p className="text-muted text-sm mb-6">Trusted by operators in regulated markets</p>
        <div className="flex justify-center items-center gap-8 flex-wrap">
          <div className="flex items-center gap-2 text-muted">
            <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center text-red-600 text-xs font-bold">UK</span>
            <span className="text-sm">UKGC Compliant</span>
          </div>
          <div className="flex items-center gap-2 text-muted">
            <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-xs font-bold">MT</span>
            <span className="text-sm">MGA Certified</span>
          </div>
          <div className="flex items-center gap-2 text-muted">
            <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-xs font-bold">SE</span>
            <span className="text-sm">SGA Approved</span>
          </div>
        </div>
      </div>
    </section>
  )
}