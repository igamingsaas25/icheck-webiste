import React, { useState } from 'react'
import emailjs from 'emailjs-com'

export default function ContactModal({ show, onClose, mode = 'sales' }) {
  const [form, setForm] = useState({
    fullName: '',
    businessEmail: '',
    companyName: '',
    jobTitle: '',
    companyType: '',
    region: '',
    services: [],
    helpText: '',
    contactMethod: mode === 'demo' ? 'Demo Request' : '',
    consent: false,
  })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  const handleChange = e => {
    const { name, value, type, checked } = e.target
    if (type === 'checkbox' && name === 'services') {
      setForm(f => ({
        ...f,
        services: checked
          ? [...f.services, value]
          : f.services.filter(s => s !== value),
      }))
    } else if (type === 'checkbox') {
      setForm(f => ({ ...f, [name]: checked }))
    } else {
      setForm(f => ({ ...f, [name]: value }))
    }
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setError('')
    setSending(true)
    if (
      !form.fullName ||
      !form.businessEmail ||
      !form.companyName ||
      !form.companyType ||
      !form.region ||
      !form.contactMethod ||
      !form.consent
    ) {
      setError('Please fill all required fields and consent.')
      setSending(false)
      return
    }
    if (/@(gmail|yahoo)\./i.test(form.businessEmail)) {
      setError('Please use your business email address.')
      setSending(false)
      return
    }
    try {
      await emailjs.send(
        'service_eqh5su8',
        'template_ueetg9p',
        {
          ...form,
          services: form.services.join(', '),
        },
        'Ov8ZMU_HX5rYJjULE'
      )
      setSent(true)
      setForm({
        fullName: '',
        businessEmail: '',
        companyName: '',
        jobTitle: '',
        companyType: '',
        region: '',
        services: [],
        helpText: '',
        contactMethod: mode === 'demo' ? 'Demo Request' : '',
        consent: false,
      })
    } catch (err) {
      setError('Failed to send. Please try again later.')
    }
    setSending(false)
  }

  if (!show) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 p-4">
      <div className="bg-bg rounded-xl shadow-lg max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 relative">
        <button
          className="absolute top-2 right-2 text-2xl text-secondary"
          onClick={() => { onClose(); setSent(false); setError(''); }}
          aria-label="Close"
        >×</button>
        <h2 className="text-xl font-bold text-primary mb-2">
          {mode === 'demo' ? 'Request Demo' : 'Contact Sales'}
        </h2>
        {sent ? (
          <div className="text-green-600 text-center py-8">Thank you! We’ll be in touch soon.</div>
        ) : (
          <form className="space-y-3" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-primary">Full Name *</label>
              <input name="fullName" required value={form.fullName} onChange={handleChange} className="w-full border border-secondary rounded px-3 py-2 mt-1" />
            </div>
            <div>
              <label className="block text-sm font-medium text-primary">Business Email *</label>
              <input name="businessEmail" type="email" required value={form.businessEmail} onChange={handleChange} className="w-full border border-secondary rounded px-3 py-2 mt-1" />
            </div>
            <div>
              <label className="block text-sm font-medium text-primary">Company Name *</label>
              <input name="companyName" required value={form.companyName} onChange={handleChange} className="w-full border border-secondary rounded px-3 py-2 mt-1" />
            </div>
            <div>
              <label className="block text-sm font-medium text-primary">Role/Job Title</label>
              <input name="jobTitle" value={form.jobTitle} onChange={handleChange} className="w-full border border-secondary rounded px-3 py-2 mt-1" />
            </div>
            <div>
              <label className="block text-sm font-medium text-primary">Company Type *</label>
              <select name="companyType" required value={form.companyType} onChange={handleChange} className="w-full border border-secondary rounded px-3 py-2 mt-1">
                <option value="">Select</option>
                <option>Operator</option>
                <option>Vendor</option>
                <option>Platform Provider</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-primary">Region of Operation *</label>
              <input name="region" required value={form.region} onChange={handleChange} className="w-full border border-secondary rounded px-3 py-2 mt-1" />
            </div>
            <div>
              <label className="block text-sm font-medium text-primary">Interested Services</label>
              <div className="grid grid-cols-1 gap-2 mt-1">
                <label className="flex items-center gap-2">
                  <input type="checkbox" name="services" value="Integration & Migration Audit" checked={form.services.includes('Integration & Migration Audit')} onChange={handleChange} />
                  🔍 Integration & Migration Audit
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" name="services" value="Game-Launch QA Pack" checked={form.services.includes('Game-Launch QA Pack')} onChange={handleChange} />
                  🎮 Game-Launch QA Pack
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" name="services" value="Ops Telemetry Starter Pack" checked={form.services.includes('Ops Telemetry Starter Pack')} onChange={handleChange} />
                  📊 Ops Telemetry Starter Pack
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" name="services" value="Fractional TAM + Integration Support" checked={form.services.includes('Fractional TAM + Integration Support')} onChange={handleChange} />
                  🤝 Fractional TAM + Integration Support
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" name="services" value="RG & Payments Triage" checked={form.services.includes('RG & Payments Triage')} onChange={handleChange} />
                  ⚖️ RG & Payments Triage
                </label>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-primary">How can we help you?</label>
              <input name="helpText" value={form.helpText} onChange={handleChange} className="w-full border border-secondary rounded px-3 py-2 mt-1" placeholder="e.g. Looking for compliance testing across multiple markets." />
            </div>
            <div>
              <label className="block text-sm font-medium text-primary">Preferred Contact Method *</label>
              <select name="contactMethod" required value={form.contactMethod} onChange={handleChange} className="w-full border border-secondary rounded px-3 py-2 mt-1">
                <option value="">Select</option>
                <option>Email</option>
                <option>Demo Request</option>
              </select>
            </div>
            <div>
              <label className="flex items-center gap-2 text-xs text-text">
                <input type="checkbox" name="consent" checked={form.consent} onChange={handleChange} required />
                I agree to be contacted about services in line with the privacy policy.
              </label>
            </div>
            {error && <div className="text-red-600 text-sm">{error}</div>}
            <div className="flex flex-col sm:flex-row gap-2 mt-2">
              <button
                type="submit"
                className="px-6 py-2 bg-secondary text-bg rounded hover:bg-primary hover:text-secondary transition"
                disabled={sending}
              >
                {sending ? 'Sending...' : 'Submit'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}