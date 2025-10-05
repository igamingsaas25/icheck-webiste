import React, { useEffect } from 'react'

export default function IntegrationAudit() {
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
              <span className="text-2xl">🔍</span>
            </div>
            <div>
              <div className="badge bg-white/20 text-white mb-2">Productized Consulting Pack</div>
              <h1 className="text-4xl md:text-5xl font-bold">Integration & Migration Audit</h1>
            </div>
          </div>
          <p className="text-xl text-white/90 max-w-3xl">
            De-risk mission-critical platform changes. This audit focuses on non-discretionary regulatory mandates 
            (like Max-stake changes) and ensures technical resilience for large integrations or migrations.
          </p>
        </div>
      </section>

      {/* Objective */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg mb-12">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-red-500 font-bold">⚠️ CAUTION</span>
            </div>
            <p className="text-red-800 font-semibold text-lg">
              Objective: De-risk mission-critical platform changes. This audit focuses on non-discretionary 
              regulatory mandates (like Max-stake changes) and ensures technical resilience for large integrations or migrations.
            </p>
          </div>
        </div>
      </section>

      {/* Service Scope */}
      <section className="py-16 bg-tiles">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-primary mb-8">🎯 Service Scope (What We Fix)</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="service-card">
              <div className="w-12 h-12 gradient-secondary rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">💳</span>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Payment & Provider Integrations</h3>
              <p className="text-text">
                Full technical validation of new third-party systems (payment gateways, game servers, bonus engines).
              </p>
            </div>
            
            <div className="service-card">
              <div className="w-12 h-12 gradient-secondary rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">⚖️</span>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Regulatory Migration</h3>
              <p className="text-text">
                Hands-on assessment and validation of complex regulatory changes, such as the UKGC Max-stake changes.
              </p>
            </div>
            
            <div className="service-card">
              <div className="w-12 h-12 gradient-secondary rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">🔄</span>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Rollback Readiness</h3>
              <p className="text-text">
                Comprehensive stress test and documentation of the rollback process and architecture, ensuring minimal downtime in case of failure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-primary mb-8">📦 Deliverables (What You Get)</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="service-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-sm">✓</span>
                </div>
                <h3 className="text-xl font-semibold text-primary">Red/Amber/Green Health Report</h3>
              </div>
              <p className="text-text">
                A simple, high-level risk summary for executives and management.
              </p>
            </div>
            
            <div className="service-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                  <span className="text-yellow-600 text-sm">⚠️</span>
                </div>
                <h3 className="text-xl font-semibold text-primary">Risk + Remediation List</h3>
              </div>
              <p className="text-text">
                A prioritized backlog of technical and compliance fixes, ranked by impact/effort.
              </p>
            </div>
            
            <div className="service-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 text-sm">📅</span>
                </div>
                <h3 className="text-xl font-semibold text-primary">30-Day Action Plan</h3>
              </div>
              <p className="text-text">
                A concrete, phased plan for implementing the necessary remediations.
              </p>
            </div>
            
            <div className="service-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 text-sm">📋</span>
                </div>
                <h3 className="text-xl font-semibold text-primary">Go-Live Runbook</h3>
              </div>
              <p className="text-text">
                A step-by-step procedure guide for the successful and safe deployment of the integration/migration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 gradient-secondary text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to De-risk Your Platform Changes?</h2>
          <p className="text-xl text-white/90 mb-8">
            Don't let regulatory mandates or complex integrations put your business at risk. 
            Get expert validation and peace of mind.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary bg-white text-secondary hover:bg-gray-100">
              Get Your Audit
            </button>
            <button className="btn-secondary border-white text-white hover:bg-white hover:text-secondary">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}