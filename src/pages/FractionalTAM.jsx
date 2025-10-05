import React, { useEffect } from 'react'

export default function FractionalTAM() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-bg">
      {/* Hero Section */}
      <section className="gradient-primary text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
              <span className="text-2xl">🤝</span>
            </div>
            <div>
              <div className="badge bg-white/20 text-white mb-2">Retainer Service</div>
              <h1 className="text-4xl md:text-5xl font-bold">Fractional TAM + Integration Support</h1>
            </div>
          </div>
          <p className="text-xl text-white/90 max-w-3xl">
            Provide specialist capacity for scaling operators or studios entering new regulated markets (UK/EU). 
            This acts as a reliable, highly-specialized resource without the cost of a full-time hire.
          </p>
        </div>
      </section>

      {/* Objective */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-12">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-blue-500 font-bold">ℹ️ NOTE</span>
            </div>
            <p className="text-blue-800 font-semibold text-lg">
              Objective: Provide specialist capacity for scaling operators or studios entering new regulated 
              markets (UK/EU). This acts as a reliable, highly-specialized resource without the cost of a full-time hire.
            </p>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 bg-tiles">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">Why Choose Fractional TAM?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-red-600 text-sm">💰</span>
                </div>
                <h3 className="text-xl font-semibold text-red-800">Full-Time TAM Cost</h3>
              </div>
              <ul className="space-y-2 text-red-700">
                <li>• £80k-120k annual salary</li>
                <li>• Benefits and overhead costs</li>
                <li>• 3-6 month hiring process</li>
                <li>• Training and onboarding time</li>
                <li>• Risk of wrong hire</li>
                <li>• Limited to single market expertise</li>
              </ul>
            </div>
            
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-sm">✅</span>
                </div>
                <h3 className="text-xl font-semibold text-green-800">Fractional TAM Benefits</h3>
              </div>
              <ul className="space-y-2 text-green-700">
                <li>• Flexible monthly retainer</li>
                <li>• No overhead or benefits</li>
                <li>• Immediate availability</li>
                <li>• Pre-trained specialist</li>
                <li>• Proven track record</li>
                <li>• Multi-market expertise (UK/EU)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Scope */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-primary mb-8">🎯 Service Scope (What We Fix)</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="service-card">
              <div className="w-12 h-12 gradient-secondary rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">🌍</span>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Market Entry Management</h3>
              <p className="text-text">
                Hands-on support for studios/operators scaling into the UK/EU, managing all integration 
                and certification timelines.
              </p>
            </div>
            
            <div className="service-card">
              <div className="w-12 h-12 gradient-secondary rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">🔌</span>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Operator Onboarding & API Mapping</h3>
              <p className="text-text">
                Dedicated resource to handle operator-specific integration requirements, API mapping, 
                and technical relationship management.
              </p>
            </div>
            
            <div className="service-card">
              <div className="w-12 h-12 gradient-secondary rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Release Management & SLAs</h3>
              <p className="text-text">
                Managing certification lifecycles, release schedules, and ensuring third-party 
                service-level agreements (SLAs) are met.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Retainer Tiers */}
      <section className="py-16 bg-tiles">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">Retainer Tiers</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 border border-border">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-primary mb-2">Starter</h3>
                <div className="text-3xl font-bold text-secondary mb-1">20 hrs</div>
                <p className="text-muted text-sm">per month</p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-text">Monthly strategy calls</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-text">Integration planning</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-text">Email support</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-text">Progress tracking</span>
                </li>
              </ul>
              <button className="w-full btn-secondary">Get Started</button>
            </div>
            
            <div className="bg-white rounded-xl p-6 border-2 border-secondary relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="badge-primary">Most Popular</span>
              </div>
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-primary mb-2">Professional</h3>
                <div className="text-3xl font-bold text-secondary mb-1">40 hrs</div>
                <p className="text-muted text-sm">per month</p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-text">Everything in Starter</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-text">Bi-weekly calls</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-text">Direct operator liaison</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-text">Priority support</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-text">Certification management</span>
                </li>
              </ul>
              <button className="w-full btn-primary">Choose Professional</button>
            </div>
            
            <div className="bg-white rounded-xl p-6 border border-border">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-primary mb-2">Enterprise</h3>
                <div className="text-3xl font-bold text-secondary mb-1">80 hrs</div>
                <p className="text-muted text-sm">per month</p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-text">Everything in Professional</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-text">Weekly calls</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-text">Multi-market support</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-text">24/7 emergency support</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-text">Custom SLA management</span>
                </li>
              </ul>
              <button className="w-full btn-secondary">Contact Sales</button>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-primary mb-8">📦 Deliverables (What You Get)</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="service-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 text-sm">📞</span>
                </div>
                <h3 className="text-xl font-semibold text-primary">Monthly Standing Calls</h3>
              </div>
              <p className="text-text">
                Dedicated time for strategic review, status updates, and triage of new technical blockers.
              </p>
            </div>
            
            <div className="service-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-sm">📋</span>
                </div>
                <h3 className="text-xl font-semibold text-primary">Integration + Certification Plan</h3>
              </div>
              <p className="text-text">
                A living document charting the progress, blockers, and timelines for all ongoing integrations.
              </p>
            </div>
            
            <div className="service-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 text-sm">📊</span>
                </div>
                <h3 className="text-xl font-semibold text-primary">Progress Tracking</h3>
              </div>
              <p className="text-text">
                Regular, consolidated reports showing hours used, tasks completed, and progress against 
                market entry milestones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-tiles">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">Success Metrics</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-xl">
              <div className="text-3xl font-bold text-secondary mb-2">50%</div>
              <p className="text-text">Faster market entry</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl">
              <div className="text-3xl font-bold text-secondary mb-2">90%</div>
              <p className="text-text">Certification success rate</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl">
              <div className="text-3xl font-bold text-secondary mb-2">15+</div>
              <p className="text-text">Markets supported</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl">
              <div className="text-3xl font-bold text-secondary mb-2">100+</div>
              <p className="text-text">Integrations managed</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 gradient-secondary text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Scale Without the Overhead</h2>
          <p className="text-xl text-white/90 mb-8">
            Get expert TAM support for your market expansion without the cost and risk of a full-time hire.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary bg-white text-secondary hover:bg-gray-100">
              Start Your Retainer
            </button>
            <button className="btn-secondary border-white text-white hover:bg-white hover:text-secondary">
              Schedule Discovery Call
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}