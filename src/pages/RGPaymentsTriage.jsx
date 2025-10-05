import React, { useEffect } from 'react'

export default function RGPaymentsTriage() {
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
              <span className="text-2xl">⚖️</span>
            </div>
            <div>
              <div className="badge bg-white/20 text-white mb-2">Productized Consulting Pack</div>
              <h1 className="text-4xl md:text-5xl font-bold">Responsible Gambling & Payments Triage</h1>
            </div>
          </div>
          <p className="text-xl text-white/90 max-w-3xl">
            Optimize your player funnel for both compliance and conversion. This service pinpoints technical 
            friction points in RG checks and payment processing that lead to user dropout or regulatory risk.
          </p>
        </div>
      </section>

      {/* Objective */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg mb-12">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-orange-500 font-bold">⚠️ IMPORTANT</span>
            </div>
            <p className="text-orange-800 font-semibold text-lg">
              Objective: Optimize your player funnel for both compliance and conversion. This service pinpoints 
              technical friction points in RG checks and payment processing that lead to user dropout or regulatory risk.
            </p>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-16 bg-tiles">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">The Compliance vs Conversion Challenge</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-red-600 text-sm">📉</span>
                </div>
                <h3 className="text-xl font-semibold text-red-800">Common Problems</h3>
              </div>
              <ul className="space-y-2 text-red-700">
                <li>• High dropout rates at RG checkpoints</li>
                <li>• Payment failures causing player frustration</li>
                <li>• Over-aggressive compliance triggers</li>
                <li>• Poor UX in affordability checks</li>
                <li>• Technical friction in APM processing</li>
                <li>• Regulatory risk from inadequate controls</li>
              </ul>
            </div>
            
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-sm">📈</span>
                </div>
                <h3 className="text-xl font-semibold text-green-800">Optimized Outcome</h3>
              </div>
              <ul className="space-y-2 text-green-700">
                <li>• Smooth RG compliance with minimal friction</li>
                <li>• Higher payment success rates</li>
                <li>• Smart, risk-based compliance triggers</li>
                <li>• Seamless affordability check UX</li>
                <li>• Optimized APM processing flows</li>
                <li>• Full regulatory compliance maintained</li>
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
                <span className="text-white text-xl">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">RG Funnel Review</h3>
              <p className="text-text mb-4">
                Analysis of all Responsible Gambling (RG) touchpoints in the player funnel:
              </p>
              <ul className="text-text text-sm space-y-1">
                <li>• Session/time-out checks</li>
                <li>• Pop-up optimization</li>
                <li>• Compliance vs UX balance</li>
              </ul>
            </div>
            
            <div className="service-card">
              <div className="w-12 h-12 gradient-secondary rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Affordability Triggers</h3>
              <p className="text-text">
                Technical review of system triggers and data points used for new affordability checks 
                and compliance measures.
              </p>
            </div>
            
            <div className="service-card">
              <div className="w-12 h-12 gradient-secondary rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">💳</span>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">APM Fallout Analysis</h3>
              <p className="text-text">
                Deep-dive into Alternative Payment Method (APM) failure rates, identifying technical 
                causes for payment fallout and poor conversion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Funnel Analysis */}
      <section className="py-16 bg-tiles">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">Player Funnel Analysis</h2>
          <div className="relative max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-center justify-between bg-white p-4 rounded-lg border border-border">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary">Registration</h3>
                    <p className="text-text text-sm">Initial account creation</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-secondary">100%</div>
                  <div className="text-muted text-sm">Starting point</div>
                </div>
              </div>
              
              <div className="flex items-center justify-between bg-white p-4 rounded-lg border border-border">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                    <span className="text-yellow-600 text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary">KYC & Verification</h3>
                    <p className="text-text text-sm">Identity verification process</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-warning">85%</div>
                  <div className="text-muted text-sm">15% dropout</div>
                </div>
              </div>
              
              <div className="flex items-center justify-between bg-white p-4 rounded-lg border border-border">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-orange-600 text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary">First Deposit</h3>
                    <p className="text-text text-sm">Payment processing</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-error">65%</div>
                  <div className="text-muted text-sm">20% payment failure</div>
                </div>
              </div>
              
              <div className="flex items-center justify-between bg-white p-4 rounded-lg border border-border">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                    <span className="text-red-600 text-sm">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary">RG Checks</h3>
                    <p className="text-text text-sm">Responsible gambling triggers</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-error">50%</div>
                  <div className="text-muted text-sm">15% RG dropout</div>
                </div>
              </div>
              
              <div className="flex items-center justify-between bg-green-50 p-4 rounded-lg border border-green-200">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 text-sm">5</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-800">Active Player</h3>
                    <p className="text-green-700 text-sm">Successful conversion</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-success">50%</div>
                  <div className="text-green-600 text-sm">Final conversion</div>
                </div>
              </div>
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
                  <span className="text-blue-600 text-sm">🗺️</span>
                </div>
                <h3 className="text-xl font-semibold text-primary">Funnel Teardown</h3>
              </div>
              <p className="text-text">
                A visual map of your current player journey, highlighting all friction points related to RG and payments.
              </p>
            </div>
            
            <div className="service-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-sm">🎯</span>
                </div>
                <h3 className="text-xl font-semibold text-primary">Fixes Ranked by Impact/Effort</h3>
              </div>
              <p className="text-text">
                A clear, prioritized list of technical fixes with estimated development effort and expected business impact.
              </p>
            </div>
            
            <div className="service-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 text-sm">📊</span>
                </div>
                <h3 className="text-xl font-semibold text-primary">Stakeholder Slide-Deck</h3>
              </div>
              <p className="text-text">
                A high-level presentation for executive stakeholders summarizing findings, risks, and recommended investments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-16 bg-tiles">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">Expected Impact</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-xl border border-border">
              <div className="w-16 h-16 gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">📈</span>
              </div>
              <div className="text-2xl font-bold text-secondary mb-2">+25%</div>
              <h3 className="font-semibold text-primary mb-2">Conversion Rate</h3>
              <p className="text-text text-sm">Improved funnel optimization</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl border border-border">
              <div className="w-16 h-16 gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">💳</span>
              </div>
              <div className="text-2xl font-bold text-secondary mb-2">+15%</div>
              <h3 className="font-semibold text-primary mb-2">Payment Success</h3>
              <p className="text-text text-sm">Reduced payment failures</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl border border-border">
              <div className="w-16 h-16 gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">⚖️</span>
              </div>
              <div className="text-2xl font-bold text-secondary mb-2">100%</div>
              <h3 className="font-semibold text-primary mb-2">Compliance</h3>
              <p className="text-text text-sm">Maintained regulatory standards</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl border border-border">
              <div className="w-16 h-16 gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">😊</span>
              </div>
              <div className="text-2xl font-bold text-secondary mb-2">+30%</div>
              <h3 className="font-semibold text-primary mb-2">Player Satisfaction</h3>
              <p className="text-text text-sm">Smoother user experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Regulatory Focus */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">Regulatory Expertise</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-tiles rounded-xl border border-border">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-red-600 font-bold text-lg">UK</span>
              </div>
              <h3 className="font-semibold text-primary mb-2">UKGC Compliance</h3>
              <p className="text-text text-sm">Affordability checks, stake limits, reality checks</p>
            </div>
            
            <div className="text-center p-6 bg-tiles rounded-xl border border-border">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-lg">EU</span>
              </div>
              <h3 className="font-semibold text-primary mb-2">EU Regulations</h3>
              <p className="text-text text-sm">GDPR, PSD2, local market requirements</p>
            </div>
            
            <div className="text-center p-6 bg-tiles rounded-xl border border-border">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold text-lg">RG</span>
              </div>
              <h3 className="font-semibold text-primary mb-2">RG Best Practices</h3>
              <p className="text-text text-sm">Industry standards and emerging requirements</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 gradient-secondary text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Optimize Your Player Funnel Today</h2>
          <p className="text-xl text-white/90 mb-8">
            Stop losing players to technical friction. Get compliant conversion optimization that works.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary bg-white text-secondary hover:bg-gray-100">
              Start Your Triage
            </button>
            <button className="btn-secondary border-white text-white hover:bg-white hover:text-secondary">
              See Sample Analysis
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}