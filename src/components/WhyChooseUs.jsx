import React from 'react'

const benefits = [
  { 
    title: 'Regulatory Expertise', 
    desc: 'Deep knowledge of UKGC, MGA, and SGA requirements with proven compliance track record.',
    icon: '⚖️',
    gradient: 'from-red-400 to-red-600'
  },
  { 
    title: 'Risk Mitigation', 
    desc: 'Proactive identification and resolution of technical and compliance risks before they impact operations.',
    icon: '🛡️',
    gradient: 'from-blue-400 to-blue-600'
  },
  { 
    title: 'Productized Solutions', 
    desc: 'Pre-packaged consulting services with clear deliverables, timelines, and pricing.',
    icon: '📦',
    gradient: 'from-green-400 to-green-600'
  },
  { 
    title: 'Market Entry Acceleration', 
    desc: 'Faster time-to-market with streamlined certification and integration processes.',
    icon: '🚀',
    gradient: 'from-purple-400 to-purple-600'
  },
  { 
    title: 'Operational Excellence', 
    desc: 'Transform reactive operations into proactive monitoring and incident prevention.',
    icon: '📊',
    gradient: 'from-cyan-400 to-cyan-600'
  },
  { 
    title: 'Flexible Engagement', 
    desc: 'Choose from consulting packs or retainer services based on your specific needs and scale.',
    icon: '🤝',
    gradient: 'from-orange-400 to-orange-600'
  },
]

export default function WhyChooseUs() {
  return (
    <section className="w-full py-16 bg-tiles">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="w-24 h-1 gradient-secondary mx-auto mb-8 rounded-full" />
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-4">
            Why Choose Yukti?
          </h2>
          <p className="text-xl text-text max-w-3xl mx-auto">
            Professional iGaming consulting with a focus on regulated markets, compliance, and operational excellence.
          </p>
        </div>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div 
              key={benefit.title} 
              className={`service-card bg-white group fade-in-up fade-in-delay-${Math.min(index % 3 + 1, 3)}`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${benefit.gradient} rounded-xl flex items-center justify-center text-white text-xl shadow-lg group-hover:scale-110 transition-transform`}>
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-primary group-hover:text-secondary transition-colors">
                  {benefit.title}
                </h3>
              </div>
              <p className="text-text leading-relaxed">
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Trust Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-border">
            <h3 className="text-2xl font-bold text-primary mb-6">Our Expertise</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">100%</div>
                <p className="text-muted text-sm">Compliance Focus</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">15+</div>
                <p className="text-muted text-sm">Regulated Markets</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">EU/UK/US</div>
                <p className="text-muted text-sm">Market Knowledge</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}