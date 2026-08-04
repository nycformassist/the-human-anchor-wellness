'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function IndividualLandingPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const rawData = Object.fromEntries(formData);

    // Map fields to match the Resend API handler
    const payload = {
      name: rawData.name,
      organization: 'Individual Client',
      role: rawData.category || 'Individual',
      email: rawData.email,
      phone: rawData.phone,
      notes: `Focus Area: ${rawData.category || 'Not specified'}\nNotes: ${rawData.notes || 'None'}`,
    };

    try {
      const response = await fetch('/api/send-demo-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setIsSuccess(true);
      }
    } catch (error) {
      console.error('Submission failed', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Top Navigation Bar */}
      <nav className="bg-slate-950 text-slate-300 py-3 px-6 border-b border-slate-800 text-sm">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center gap-4">
          <div className="font-semibold text-white tracking-wide">The Human Anchor™</div>
          <div className="flex items-center gap-2 bg-slate-900 p-1 rounded-lg border border-slate-800">
            <Link 
              href="/" 
              className="px-3 py-1.5 rounded-md text-xs font-medium text-slate-400 hover:text-white transition-colors"
            >
              For Organizations & Facilities
            </Link>
            <span className="px-3 py-1.5 rounded-md text-xs font-medium bg-blue-600 text-white shadow-sm">
              For Individuals
            </span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-slate-900 text-white py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-blue-400 font-semibold tracking-wider uppercase text-sm mb-4">
            The Human Anchor™ • Individual Coaching & Support
          </h2>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            When the World Feels Heavy... Find Your Anchor™
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            One-on-one guidance, practical mindfulness, and evidence-informed stress resilience for professionals, caregivers, and adults navigating constant demands.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-10 text-sm font-medium">
            <span className="bg-slate-800 px-4 py-2 rounded-full border border-slate-700">For Professionals</span>
            <span className="bg-slate-800 px-4 py-2 rounded-full border border-slate-700">For Caregivers</span>
            <span className="bg-slate-800 px-4 py-2 rounded-full border border-slate-700">For Adults Experiencing Chronic Stress</span>
          </div>
          <a 
            href="#discovery-call" 
            className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-semibold py-4 px-8 rounded-lg transition-colors shadow-lg shadow-blue-600/20"
          >
            Book a Discovery Call
          </a>
        </div>
      </header>

      {/* Who This Is For Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-slate-800">
            Designed for Those Holding Everything Together
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center font-bold text-xl mb-6">
                01
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Busy Professionals</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Managing high-stakes responsibility, mental fatigue, and continuous decision-making without burnout or exhaustion.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center font-bold text-xl mb-6">
                02
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Dedicated Caregivers</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Supporting loved ones through aging or illness while needing a dedicated space to restore their own energy and emotional stability.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center font-bold text-xl mb-6">
                03
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Adults Under Stress</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Navigating life transitions, physical tension, sleeplessness, or chronic anxiety seeking practical tools to stay grounded.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Together */}
      <section className="bg-white py-20 px-6 border-y border-slate-200">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-slate-800">
            A Personalized, Practical Framework
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
              <h3 className="text-xl font-bold mb-3 text-slate-900">Targeted Breathwork & Nervous System Regulation</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Simple, fast-acting techniques to shift out of fight-or-flight and regain clarity during demanding moments throughout your day.
              </p>
            </div>
            <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
              <h3 className="text-xl font-bold mb-3 text-slate-900">Chair & Standing Qigong Practice</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Gentle internal energy movement designed to clear physical stiffness, improve balance, and quiet a hyperactive mind.
              </p>
            </div>
            <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
              <h3 className="text-xl font-bold mb-3 text-slate-900">Guided Meditation & Contemplation</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Grounded mental discipline rooted in contemplative tradition to build emotional steadiness and perspective.
              </p>
            </div>
            <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
              <h3 className="text-xl font-bold mb-3 text-slate-900">Lifestyle & Recovery Architecture</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Actionable adjustments for sleep hygiene, energy conservation, and setting sustainable boundaries in work and home life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Credibility */}
      <section className="py-20 px-6 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Your Guide & Partner</h2>
          <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
            <p className="text-lg mb-6 text-slate-300 leading-relaxed">
              Founded by <strong>Valentine Saint Martin</strong>. For more than twenty years, I have supported individuals and families within the healthcare system while developing a lifelong passion for helping people cultivate resilience, presence, and well-being.
            </p>
            <ul className="space-y-3 font-medium text-blue-100">
              <li className="flex items-center gap-3">
                <span className="text-blue-500">✔</span> 20 Years Healthcare Experience
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-500">✔</span> Biology & Exercise Science Background
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-500">✔</span> 18 Years Qigong Practice & Certified Meditation Instructor
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-500">✔</span> 3 Years Disciplined Monastic Study in Contemplative Practice
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Lead Capture Form */}
      <section id="discovery-call" className="py-20 px-6">
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Book a Discovery Call</h2>
            <p className="text-slate-600">A confidential, 1-on-1 consultation to discuss your situation and determine how The Human Anchor™ can support you.</p>
          </div>

          {isSuccess ? (
            <div className="bg-green-50 text-green-800 p-6 rounded-lg text-center border border-green-200">
              <h3 className="text-xl font-bold mb-2">Request Received</h3>
              <p>Thank you. Valentine will be in touch directly to schedule your Discovery Call.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                <input required name="name" type="text" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" />
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                  <input required name="email" type="email" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                  <input required name="phone" type="tel" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Which best describes your situation?</label>
                <select name="category" required className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white">
                  <option value="">Select an option...</option>
                  <option value="Professional managing work stress/burnout">Professional managing work stress / burnout</option>
                  <option value="Caregiver seeking personal balance">Caregiver seeking personal balance</option>
                  <option value="Adult experiencing chronic stress or anxiety">Adult experiencing chronic stress or anxiety</option>
                  <option value="Other / General inquiry">Other / General inquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">What would you like to focus on during our call?</label>
                <textarea name="notes" rows={3} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-4 rounded-lg transition-colors disabled:opacity-50"
              >
                {isSubmitting ? 'Sending Request...' : 'Book a Discovery Call'}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-slate-500 text-sm border-t border-slate-200">
        <p>© {new Date().getFullYear()} The Human Anchor™. All rights reserved.</p>
      </footer>
    </div>
  );
}