import React, { useEffect } from 'react'

export default function GameLaunchQA() {
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
              <span className="text-2xl">🎮</span>
            </div>
            <div>
              <div className="badge bg-white/20 text-white mb-2">Productized Consulting Pack</div>
              <h1 className="text-4xl md:text-5xl font-bold">Game-Launch QA Pack</h1>
            </div>
          </div>
          <p className="text-xl text-white/90 max-w-3xl">
            Secure fast and compliant market entry for new game titles or batches. This pack provides the necessary 
            audit evidence to satisfy regulators (UKGC, MGA, SGA) and minimize launch risk.
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
              Objective: Secure fast and compliant market entry for new game titles or batches. This pack provides 
              the necessary audit evidence to satisfy regulators (UKGC, MGA, SGA) and minimize launch risk.
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
                <span className="text-white text-xl">✅</span>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Pre-Launch Compliance</h3>
              <p className="text-text">
                Full compliance checks specific to UKGC, MGA, and SGA technical standards.
              </p>
            </div>
            
            <div className="service-card">
              <div className="w-12 h-12 gradient-secondary rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">🎲</span>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">RTP & Feature Flag Sanity</h3>
              <p className="text-text">
                Validation of Return-to-Player (RTP) settings and ensuring all jurisdictional feature flags 
                (e.g., auto-spin limits, reality checks) are correctly implemented.
              </p>
            </div>
            
            <div className="service-card">
              <div className="w-12 h-12 gradient-secondary rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">🔌</span>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">API Validations</h3>
              <p className="text-text">
                Checking data feeds, reality-check hooks, and other regulatory integration points are working 
                correctly before production launch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Regulatory Compliance */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">Regulatory Compliance Coverage</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-tiles rounded-xl border border-border">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-red-600 font-bold text-lg">UK</span>
              </div>
              <h3 className="font-semibold text-primary mb-2">UKGC Standards</h3>
              <p className="text-text text-sm">United Kingdom Gambling Commission technical requirements</p>
            </div>
            
            <div className="text-center p-6 bg-tiles rounded-xl border border-border">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-lg">MT</span>
              </div>
              <h3 className="font-semibold text-primary mb-2">MGA Standards</h3>
              <p className="text-text text-sm">Malta Gaming Authority compliance requirements</p>
            </div>
            
            <div className="text-center p-6 bg-tiles rounded-xl border border-border">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold text-lg">SE</span>
              </div>
              <h3 className="font-semibold text-primary mb-2">SGA Standards</h3>
              <p className="text-text text-sm">Swedish Gaming Authority technical standards</p>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-16 bg-tiles">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-primary mb-8">📦 Deliverables (What You Get)</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="service-card bg-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-sm">📝</span>
                </div>
                <h3 className="text-xl font-semibold text-primary">Annotated Test Cases</h3>
              </div>
              <p className="text-text">
                A full list of tests run with clear PASS/FAIL evidence and technical annotations.
              </p>
            </div>
            
            <div className="service-card bg-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 text-sm">📋</span>
                </div>
                <h3 className="text-xl font-semibold text-primary">Evidence Pack for Auditors</h3>
              </div>
              <p className="text-text">
                A consolidated document ready to be submitted to regulators (like GLI or Gaming Labs) to prove compliance.
              </p>
            </div>
            
            <div className="service-card bg-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 text-sm">📖</span>
                </div>
                <h3 className="text-xl font-semibold text-primary">One-Page CS/Playbook</h3>
              </div>
              <p className="text-text">
                A concise guide for your Customer Service/Operations team on handling common player queries 
                and issues related to the new titles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">Launch Process Timeline</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-secondary/20"></div>
            <div className="space-y-8">
              <div className="flex items-center">
                <div className="flex-1 text-right pr-8">
                  <h3 className="font-semibold text-primary">Pre-Launch Assessment</h3>
                  <p className="text-text text-sm">Days 1-3</p>
                </div>
                <div className="w-4 h-4 bg-secondary rounded-full relative z-10"></div>
                <div className="flex-1 pl-8">
                  <p className="text-text">Initial compliance review and technical validation setup</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="flex-1 text-right pr-8">
                  <p className="text-text">Comprehensive testing across all regulatory requirements</p>
                </div>
                <div className="w-4 h-4 bg-secondary rounded-full relative z-10"></div>
                <div className="flex-1 pl-8">
                  <h3 className="font-semibold text-primary">Full QA Testing</h3>
                  <p className="text-text text-sm">Days 4-7</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="flex-1 text-right pr-8">
                  <h3 className="font-semibold text-primary">Evidence Compilation</h3>
                  <p className="text-text text-sm">Days 8-10</p>
                </div>
                <div className="w-4 h-4 bg-secondary rounded-full relative z-10"></div>
                <div className="flex-1 pl-8">
                  <p className="text-text">Documentation and evidence pack preparation for regulators</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 gradient-secondary text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Launch Your Games with Confidence</h2>
          <p className="text-xl text-white/90 mb-8">
            Get regulatory approval faster and minimize launch risks with our comprehensive QA pack.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary bg-white text-secondary hover:bg-gray-100">
              Start QA Process
            </button>
            <button className="btn-secondary border-white text-white hover:bg-white hover:text-secondary">
              View Sample Report
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}