import React, { useEffect } from 'react'

export default function OpsTelemetry() {
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
              <span className="text-2xl">📊</span>
            </div>
            <div>
              <div className="badge bg-white/20 text-white mb-2">Productized Consulting Pack</div>
              <h1 className="text-4xl md:text-5xl font-bold">Ops Telemetry Starter Pack</h1>
            </div>
          </div>
          <p className="text-xl text-white/90 max-w-3xl">
            Move from reactive to proactive operations. We deploy immediate, high-impact dashboards and alerts 
            to catch revenue-losing issues before they impact the player base or require costly triage.
          </p>
        </div>
      </section>

      {/* Objective */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-12">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-green-500 font-bold">💡 TIP</span>
            </div>
            <p className="text-green-800 font-semibold text-lg">
              Objective: Move from reactive to proactive operations. We deploy immediate, high-impact dashboards 
              and alerts to catch revenue-losing issues before they impact the player base or require costly triage.
            </p>
          </div>
        </div>
      </section>

      {/* Before vs After */}
      <section className="py-16 bg-tiles">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">Transform Your Operations</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-red-600 text-sm">❌</span>
                </div>
                <h3 className="text-xl font-semibold text-red-800">Reactive Operations</h3>
              </div>
              <ul className="space-y-2 text-red-700">
                <li>• Players report issues first</li>
                <li>• Revenue loss before detection</li>
                <li>• Manual monitoring and alerts</li>
                <li>• Lengthy incident response times</li>
                <li>• No visibility into vendor performance</li>
              </ul>
            </div>
            
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-sm">✅</span>
                </div>
                <h3 className="text-xl font-semibold text-green-800">Proactive Operations</h3>
              </div>
              <ul className="space-y-2 text-green-700">
                <li>• Issues detected before player impact</li>
                <li>• Revenue protection through early alerts</li>
                <li>• Automated monitoring and dashboards</li>
                <li>• Rapid incident response procedures</li>
                <li>• Real-time vendor performance tracking</li>
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
                <span className="text-white text-xl">🚨</span>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Key Alert Deployment</h3>
              <p className="text-text mb-4">
                Setting up alerts for critical operational failures:
              </p>
              <ul className="text-text text-sm space-y-1">
                <li>• Failed deposits</li>
                <li>• Vendor timeouts</li>
                <li>• Stuck bonuses</li>
                <li>• KYC queue lag</li>
              </ul>
            </div>
            
            <div className="service-card">
              <div className="w-12 h-12 gradient-secondary rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">📈</span>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Dashboard Creation</h3>
              <p className="text-text">
                Building high-level health dashboards in Splunk/Grafana for quick oversight of operational 
                health and vendor performance.
              </p>
            </div>
            
            <div className="service-card">
              <div className="w-12 h-12 gradient-secondary rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">📋</span>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Incident Documentation</h3>
              <p className="text-text">
                Establishing a clear process for first-response and escalation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 bg-tiles">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">Critical Metrics We Monitor</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-xl border border-border">
              <div className="w-16 h-16 gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">💳</span>
              </div>
              <h3 className="font-semibold text-primary mb-2">Payment Success Rate</h3>
              <p className="text-text text-sm">Real-time deposit/withdrawal monitoring</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl border border-border">
              <div className="w-16 h-16 gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">⚡</span>
              </div>
              <h3 className="font-semibold text-primary mb-2">API Response Times</h3>
              <p className="text-text text-sm">Vendor performance tracking</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl border border-border">
              <div className="w-16 h-16 gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">🎁</span>
              </div>
              <h3 className="font-semibold text-primary mb-2">Bonus Processing</h3>
              <p className="text-text text-sm">Stuck bonus detection and alerts</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl border border-border">
              <div className="w-16 h-16 gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">👤</span>
              </div>
              <h3 className="font-semibold text-primary mb-2">KYC Queue Health</h3>
              <p className="text-text text-sm">Player verification bottleneck monitoring</p>
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
                  <span className="text-blue-600 text-sm">📊</span>
                </div>
                <h3 className="text-xl font-semibold text-primary">Dashboards + Saved Searches</h3>
              </div>
              <p className="text-text">
                Production-ready, validated dashboards and key saved search queries for deep-dive analysis.
              </p>
            </div>
            
            <div className="service-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-sm">📞</span>
                </div>
                <h3 className="text-xl font-semibold text-primary">On-Call Guide</h3>
              </div>
              <p className="text-text">
                A clear manual for the operations team covering alert definitions, expected behavior, 
                and initial troubleshooting steps.
              </p>
            </div>
            
            <div className="service-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-red-600 text-sm">⏱️</span>
                </div>
                <h3 className="text-xl font-semibold text-primary">"First 60 Minutes" Incident SOP</h3>
              </div>
              <p className="text-text">
                A Standard Operating Procedure for managing the critical first hour of a major incident, 
                minimizing panic and ensuring fast triage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-16 bg-tiles">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">ROI Impact</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-white rounded-xl">
              <div className="text-3xl font-bold text-secondary mb-2">75%</div>
              <p className="text-text">Reduction in incident response time</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl">
              <div className="text-3xl font-bold text-secondary mb-2">90%</div>
              <p className="text-text">Fewer revenue-impacting outages</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl">
              <div className="text-3xl font-bold text-secondary mb-2">60%</div>
              <p className="text-text">Less time spent on manual monitoring</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 gradient-secondary text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Stop Playing Catch-Up with Operations</h2>
          <p className="text-xl text-white/90 mb-8">
            Transform your operations from reactive firefighting to proactive monitoring and prevention.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary bg-white text-secondary hover:bg-gray-100">
              Get Your Telemetry Pack
            </button>
            <button className="btn-secondary border-white text-white hover:bg-white hover:text-secondary">
              See Demo Dashboard
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}