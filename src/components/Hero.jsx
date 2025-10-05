import React from 'react'

export default function Hero({ onContact, onDemo }) {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services-section');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToNext = () => {
    const nextSection = document.querySelector('section:nth-of-type(2)');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center gradient-primary overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 text-center">
        {/* Trust Indicators */}
        <div className="flex justify-center items-center gap-6 mb-8 fade-in">
          <div className="flex items-center gap-2 text-white/80">
            <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-white text-xs font-bold">UK</span>
            <span className="text-sm">UKGC</span>
          </div>
          <div className="flex items-center gap-2 text-white/80">
            <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-white text-xs font-bold">MT</span>
            <span className="text-sm">MGA</span>
          </div>
          <div className="flex items-center gap-2 text-white/80">
            <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-white text-xs font-bold">SE</span>
            <span className="text-sm">SGA</span>
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-tight mb-6 fade-in-up fade-in-delay-1">
          Professional iGaming
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">
            Consulting Services
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-8 leading-relaxed fade-in-up fade-in-delay-2">
          Productized consulting packs and retainer services for operators scaling in regulated markets. 
          From compliance audits to operational excellence.
        </p>

        {/* Key Benefits */}
        <div className="flex flex-wrap justify-center gap-6 mb-12 fade-in-up fade-in-delay-3">
          <div className="flex items-center gap-2 text-white/90">
            <span className="w-2 h-2 bg-cyan-300 rounded-full"></span>
            <span>Regulatory Compliance</span>
          </div>
          <div className="flex items-center gap-2 text-white/90">
            <span className="w-2 h-2 bg-cyan-300 rounded-full"></span>
            <span>Risk Mitigation</span>
          </div>
          <div className="flex items-center gap-2 text-white/90">
            <span className="w-2 h-2 bg-cyan-300 rounded-full"></span>
            <span>Operational Excellence</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 fade-in-up fade-in-delay-3">
          <button
            className="btn-primary bg-white text-secondary hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
            onClick={onContact}
          >
            Get Expert Consultation
          </button>
          <button
            className="btn-secondary border-white text-white hover:bg-white hover:text-secondary px-8 py-4 text-lg font-semibold"
            onClick={scrollToServices}
          >
            View Our Services
          </button>
        </div>

        {/* Social Proof */}
        <div className="mt-16 fade-in-up fade-in-delay-3">
          <p className="text-white/70 text-sm mb-4">Expert knowledge across regulated markets</p>
          <div className="flex justify-center items-center gap-8 text-white/60">
            <div className="text-2xl font-bold">15+</div>
            <div className="w-px h-8 bg-white/20"></div>
            <div className="text-2xl font-bold">EU/UK/US</div>
            <div className="w-px h-8 bg-white/20"></div>
            <div className="text-2xl font-bold">100%</div>
          </div>
          <div className="flex justify-center items-center gap-8 text-white/50 text-xs mt-2">
            <div>Markets</div>
            <div>Expertise</div>
            <div>Compliance Focus</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce cursor-pointer hover:text-white/80 transition-colors"
        onClick={scrollToNext}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}