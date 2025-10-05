import React, { useState } from 'react'

export default function Footer() {
  const [email, setEmail] = useState('')
  const handleSubscribe = (e) => {
    e.preventDefault()
    // In production, hook this to your newsletter backend / provider
    alert(`Thanks — ${email} subscribed (demo).`)
    setEmail('')
  }

  return (
    <footer className="bg-bg">
      <div className="w-24 h-1 bg-secondary mx-auto mb-8 rounded-full" />
      <div className="container mx-auto px-6 py-3 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-semibold text-primary">About Yukti</h3>
          <p className="mt-2 text-text">We help iGaming operators with data analytics, game testing and technical account management.</p>
        </div>
        <div>
          <h4 className="font-semibold text-primary">Company</h4>
          <ul className="mt-3 space-y-2 text-text">
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Terms of Service</li>
            <li>Request Features</li>
            <li>Help Center</li>
            <li>Release Notes</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-primary">Newsletter</h4>
          <p className="mt-2 text-text">Subscribe for product updates and news.</p>
          <form onSubmit={handleSubscribe} className="mt-3 flex gap-2">
            <input
              type="email"
              required
              placeholder="you@company.com"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              className="flex-1 px-3 py-2 border border-secondary rounded bg-bg text-text placeholder:text-secondary"
            />
            <button className="px-4 py-2 bg-secondary text-bg rounded hover:bg-primary hover:text-secondary transition">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="bg-bg py-4 border-t border-secondary">
        <div className="container mx-auto px-6 text-sm text-text">© {new Date().getFullYear()} Yukti — All rights reserved.</div>
      </div>
    </footer>
  )
}