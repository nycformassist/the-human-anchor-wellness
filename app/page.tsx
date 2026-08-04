'use client';

import { useState } from 'react';

export default function InstitutionalLandingPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    try {
      const response = await fetch('/api/send-demo-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
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
      {/* Hero Section */}
      <header className="bg-slate-900 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-blue-400 font-semibold tracking-wider uppercase text-sm mb-4">The Human Anchor™</h2>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Evidence-Informed Wellness Programming for Older Adults
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Helping Senior Centers build healthier, happier, and more connected communities.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-10 text-sm font-medium">
            <span className="bg-slate-800 px-4 py-2 rounded-full">Chair Qigong</span>
            <span className="bg-slate-800 px-4 py-2 rounded-full">Guided Meditation</span>
            <span className="bg-slate-800 px-4 py-2 rounded-full">Breathwork</span>
            <span className="bg-slate-800 px-4 py-2 rounded-full">Healthy Aging Education</span>
          </div>
          <a href="#demo-form" className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-semibold py-4 px-8 rounded-lg transition-colors">
            Schedule a Free Demo
          </a>
        </div>
      </header>

      {/* The Problem Section */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center text-slate-800">
            Your Monthly Activity Calendar Shouldn't Be Difficult to Fill
          </h2>
          <div className="prose prose-lg mx-auto text-slate-600">
            <p>
              Keeping older adults engaged takes more than bingo and exercise classes. Today’s seniors are looking for programs that improve balance, reduce stress, encourage social connection, and support healthy aging.
            </p>
            <p>
              <strong>The Human Anchor™ Healthy Aging Program</strong> combines gentle chair-based Qigong, guided breathing, mindfulness, and evidence-informed wellness education into an engaging experience that participants look forward to each week.
            </p>
            <p className="italic border-l-4 border-blue-500 pl-4 mt-6">
              Designed specifically for senior centers, libraries, community organizations, and adult day programs throughout New York City and Westchester.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="bg-white py-20 px-6 border-y border-slate-200">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-slate-800">
            Programs Built for Your Activity Calendar
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
              <h3 className="text-xl font-bold mb-3 text-slate-900">Chair Qigong & Gentle Mobility</h3>
              <p className="text-slate-600">Safe, gentle movement adaptable for all physical abilities. Fully clothed, no floor work required.</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
              <h3 className="text-xl font-bold mb-3 text-slate-900">Better Balance Support</h3>
              <p className="text-slate-600">Enhancing body awareness, coordination, and movement confidence to support fall prevention.</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
              <h3 className="text-xl font-bold mb-3 text-slate-900">Guided Breathing</h3>
              <p className="text-slate-600">Practical techniques for everyday relaxation, nervous system regulation, and stress management.</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
              <h3 className="text-xl font-bold mb-3 text-slate-900">Healthy Aging Education</h3>
              <p className="text-slate-600">Science-backed guidance for lifelong vitality, memory support, and better sleep hygiene.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Credibility Section */}
      <section className="py-20 px-6 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Organizations Choose The Human Anchor™</h2>
          <div className="bg-slate-800 p-8 rounded-2xl">
            <p className="text-lg mb-6 text-slate-300">
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

      {/* Form Section */}
      <section id="demo-form" className="py-20 px-6">
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Schedule a Complimentary Demonstration</h2>
            <p className="text-slate-600">A 45-minute, no-obligation session for your staff and participants to experience the program firsthand.</p>
          </div>

          {isSuccess ? (
            <div className="bg-green-50 text-green-800 p-6 rounded-lg text-center border border-green-200">
              <h3 className="text-xl font-bold mb-2">Request Received</h3>
              <p>Thank you. Valentine will be in touch shortly to schedule your demonstration.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                  <input required name="name" type="text" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Organization Name</label>
                  <input required name="organization" type="text" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Role (e.g., Activities Director)</label>
                <input required name="role" type="text" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" />
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
                <label className="block text-sm font-medium text-slate-700 mb-1">Preferred Days / Notes</label>
                <textarea name="notes" rows={3} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-4 rounded-lg transition-colors disabled:opacity-50"
              >
                {isSubmitting ? 'Sending Request...' : 'Request Free Demo Class'}
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