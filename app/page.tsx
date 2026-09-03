'use client';

import { useState } from 'react';

export default function MasterHomepage() {
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
    <div className="min-h-screen bg-[#FDFBF7] text-slate-800 font-sans">
      {/* 1. NAVIGATION */}
      <nav className="bg-[#1A362B] text-stone-200 py-4 px-6 border-b border-[#132A21] sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center gap-4">
          <div className="font-serif font-bold text-xl text-[#FDFBF7] tracking-wide">The Human Anchor™</div>
          <div className="hidden md:flex gap-6 text-sm font-medium">
            <a href="#framework" className="hover:text-white transition-colors">Programs</a>
            <a href="#about" className="hover:text-white transition-colors">About Valentine</a>
            <a href="#workshops" className="hover:text-white transition-colors">Workshops</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          </div>
          <a href="#demo-form" className="bg-[#B87333] hover:bg-[#9c622b] text-white px-5 py-2 rounded-md text-sm font-bold transition-colors">
            Request a Demonstration
          </a>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <header className="bg-[#1A362B] text-white py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-[#B87333] font-semibold tracking-widest uppercase text-xs mb-6">
            Stress Resilience • Healthy Aging • Mind-Body Wellness
          </h2>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-8 leading-tight text-[#FDFBF7]">
            Practical Stress Resilience & Wellness Programs for Healthier Communities
          </h1>
          <p className="text-xl text-stone-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            The Human Anchor™ delivers engaging, evidence-informed wellness programming combining Qigong-inspired movement, guided meditation, breathwork, mindfulness, and stress-resilience education. Designed to help individuals and communities develop practical tools for movement, relaxation, emotional well-being, healthy routines, and everyday resilience.
          </p>
          
          <div className="mb-10">
            <p className="text-sm font-medium text-stone-400 uppercase tracking-widest mb-4">For</p>
            <p className="text-stone-300 text-sm md:text-base max-w-3xl mx-auto">
              Senior Centers • Healthcare Organizations • Libraries • Community Programs • Caregivers • Workplaces • Wellness Initiatives
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12 text-sm font-medium">
            <span className="bg-[#132A21] px-4 py-2 rounded-full border border-[#234537]">Chair & Standing Qigong</span>
            <span className="bg-[#132A21] px-4 py-2 rounded-full border border-[#234537]">Guided Meditation</span>
            <span className="bg-[#132A21] px-4 py-2 rounded-full border border-[#234537]">Stress Resilience Education</span>
            <span className="bg-[#132A21] px-4 py-2 rounded-full border border-[#234537]">Breathwork & Mindful Movement</span>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#demo-form" className="bg-[#B87333] hover:bg-[#9c622b] text-white font-bold py-4 px-8 rounded-lg transition-colors">
              Schedule a Complimentary Program Demonstration
            </a>
            <a href="#framework" className="bg-transparent border border-stone-400 hover:border-white text-white font-bold py-4 px-8 rounded-lg transition-colors">
              Explore Our Programs
            </a>
          </div>
        </div>
      </header>

      {/* 3. THE MODERN STRESS PROBLEM */}
      <section className="py-20 px-6 bg-stone-100 border-b border-stone-200">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold mb-6 text-[#1A362B]">
            Stress Is No Longer Just a Personal Issue.
          </h2>
          <div className="prose prose-lg mx-auto text-slate-700 leading-relaxed">
            <p>
              Stress affects participation, sleep, concentration, emotional well-being, physical activity, caregiver fatigue, and overall quality of life. Yet many people are never taught practical skills for recognizing stress, understanding their body's response, and creating moments of recovery during everyday life.
            </p>
            <p className="mt-4">
              The Human Anchor™ provides practical, accessible education and experiences that help participants understand how stress affects the mind and body, develop practical breathing and relaxation skills, reconnect with movement, and build sustainable mindfulness practices.
            </p>
            <blockquote className="mt-8 border-l-4 border-[#B87333] pl-6 italic text-xl font-serif text-[#1A362B]">
              "The goal is not to eliminate stress. The goal is to develop a healthier relationship with it."
            </blockquote>
          </div>
        </div>
      </section>

      {/* 4. WHY ORGANIZATIONS NEED THIS */}
      <section className="py-20 px-6 bg-[#FDFBF7]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold mb-6 text-center text-[#1A362B]">
            Meaningful Wellness Programming for Modern Communities
          </h2>
          <p className="text-center text-lg text-slate-700 max-w-2xl mx-auto mb-12">
            Older adults and community members benefit from programming that goes beyond entertainment. They want meaningful experiences that support movement, mental engagement, social connection, relaxation, and practical well-being.
          </p>
          <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-200">
            <p className="text-slate-700 leading-relaxed text-center mb-6">
              The Human Anchor™ combines gentle Qigong-inspired movement, guided breathing, mindfulness, meditation, and stress-resilience education into engaging programs participants can experience regardless of prior fitness or meditation experience.
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-sm text-[#1A362B] font-medium">
              <span className="bg-stone-100 px-3 py-1 rounded">Senior Centers</span>
              <span className="bg-stone-100 px-3 py-1 rounded">Libraries</span>
              <span className="bg-stone-100 px-3 py-1 rounded">Adult Day Programs</span>
              <span className="bg-stone-100 px-3 py-1 rounded">Assisted Living Communities</span>
              <span className="bg-stone-100 px-3 py-1 rounded">Caregiver Organizations</span>
              <span className="bg-stone-100 px-3 py-1 rounded">Healthcare Initiatives</span>
              <span className="bg-stone-100 px-3 py-1 rounded">Workplace Wellness</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. THE HUMAN ANCHOR™ WELLNESS FRAMEWORK */}
      <section id="framework" className="py-20 px-6 bg-[#1A362B] text-[#FDFBF7]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-center">The Human Anchor™ Wellness Framework</h2>
          <p className="text-center text-[#B87333] tracking-widest uppercase text-sm mb-16 font-semibold">Four Areas of Practical Well-Being</p>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-serif font-bold mb-3 text-white">01 — Mindful Movement & Qigong</h3>
              <p className="text-stone-300 leading-relaxed">
                Adaptable Qigong practices that encourage movement, body awareness, coordination, focused attention, and confidence. Programs include both chair-based and standing practices depending on the needs, mobility levels, and goals of participants.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-serif font-bold mb-3 text-white">02 — Stress Resilience Education</h3>
              <p className="text-stone-300 leading-relaxed">
                Practical education exploring how stress affects the body, the stress response, recovery and relaxation, daily stress-management habits, and building personal resilience practices. You are learning how to better understand your relationship with stress.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-serif font-bold mb-3 text-white">03 — Meditation & Mindfulness</h3>
              <p className="text-stone-300 leading-relaxed">
                Guided practices designed to help participants develop present-moment awareness, focus and attention, relaxation skills, and emotional awareness. No previous meditation experience is required.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-serif font-bold mb-3 text-white">04 — Breathwork & Relaxation</h3>
              <p className="text-stone-300 leading-relaxed">
                Simple breathing and relaxation practices designed to help participants slow down, reset, and reconnect with a calmer state. Practical techniques to integrate into everyday routines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CHAIR & STANDING QIGONG + 7. PROGRAM TRACKS */}
      <section className="py-20 px-6 bg-stone-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-[#1A362B] mb-4">The Human Anchor™ Program Tracks</h2>
            <p className="text-[#B87333] uppercase tracking-widest text-sm font-semibold">Accessible. Adaptable. Progressive.</p>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl border border-stone-200 shadow-sm flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-1/3">
                <h3 className="text-xl font-bold text-[#1A362B] uppercase tracking-wide border-b-2 border-[#B87333] inline-block pb-1">Foundation</h3>
                <p className="font-serif text-lg text-slate-700 mt-2 font-medium">Chair-Based Wellness & Mindful Movement</p>
              </div>
              <div className="md:w-2/3 text-slate-600">
                <p className="mb-4">Accessible mindful movement designed for older adults, beginners, community programs, and participants who prefer seated practice.</p>
                <p className="text-sm font-medium"><strong>Includes:</strong> Chair-based Qigong, Breathing, Meditation, Relaxation, Body awareness.</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl border border-stone-200 shadow-sm flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-1/3">
                <h3 className="text-xl font-bold text-[#1A362B] uppercase tracking-wide border-b-2 border-[#B87333] inline-block pb-1">Core</h3>
                <p className="font-serif text-lg text-slate-700 mt-2 font-medium">Integrated Qigong & Stress Resilience</p>
              </div>
              <div className="md:w-2/3 text-slate-600">
                <p className="mb-4">A broader program designed for active older adults, community groups, caregivers, and adults seeking practical stress-management skills.</p>
                <p className="text-sm font-medium"><strong>Includes:</strong> Standing Qigong, Chair-based adaptations, Meditation, Mindfulness, Breathwork, Stress education.</p>
              </div>
            </div>

            <div className="bg-[#1A362B] text-white p-8 rounded-xl shadow-sm flex flex-col md:flex-row gap-8 items-start border border-[#234537]">
              <div className="md:w-1/3">
                <h3 className="text-xl font-bold text-[#B87333] uppercase tracking-wide border-b-2 border-[#B87333] inline-block pb-1">Advanced</h3>
                <p className="font-serif text-lg text-stone-200 mt-2 font-medium">The Saint Martin Method™ Immersion</p>
              </div>
              <div className="md:w-2/3 text-stone-300">
                <p className="mb-4">A deeper and more immersive mind-body program designed for organizations, groups, or premium clients seeking a deeper structured experience and long-term engagement.</p>
                <p className="text-sm font-medium text-stone-200"><strong>Includes:</strong> Standing Qigong, Advanced mindful movement principles, Breath cultivation, Meditation, Stress resilience education, Daily practice development.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. WHY VALENTINE SAINT MARTIN */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold mb-10 text-center text-[#1A362B]">
            Why Valentine Saint Martin?
          </h2>
          <p className="text-center text-lg text-slate-700 mb-12">
            The Human Anchor™ was created by Valentine Saint Martin, whose work brings together healthcare experience, scientific education, decades of contemplative practice, and real-world experience supporting people through stress.
          </p>

          <div className="grid md:grid-cols-2 gap-x-8 gap-y-10">
            <div>
              <h4 className="font-bold text-[#1A362B] mb-2 flex items-center gap-2">
                <span className="text-[#B87333]">■</span> 20+ Years in Healthcare
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">Experience supporting individuals and families within complex healthcare environments and developing a deep understanding of the human challenges people face under pressure.</p>
            </div>
            <div>
              <h4 className="font-bold text-[#1A362B] mb-2 flex items-center gap-2">
                <span className="text-[#B87333]">■</span> 18 Years of Qigong Practice
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">A long-term commitment to the study and practice of mindful movement, breath, discipline, and embodied awareness.</p>
            </div>
            <div>
              <h4 className="font-bold text-[#1A362B] mb-2 flex items-center gap-2">
                <span className="text-[#B87333]">■</span> Certified Meditation Instructor
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">Professional training and experience guiding structured meditation and mindfulness practices.</p>
            </div>
            <div>
              <h4 className="font-bold text-[#1A362B] mb-2 flex items-center gap-2">
                <span className="text-[#B87333]">■</span> Science & Study
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">Biology & Exercise Science background paired with 3 years of immersive Monastic Study in contemplative practice, Eastern philosophy, and mind-body development.</p>
            </div>
          </div>

          {/* 9. REAL-WORLD STRESS EXPERIENCE */}
          <div className="mt-16 bg-stone-100 p-8 rounded-xl border-l-4 border-[#1A362B]">
            <h3 className="text-xl font-serif font-bold text-[#1A362B] mb-3">Real-World Stress Support Experience</h3>
            <p className="text-slate-700 leading-relaxed">
              During the COVID-19 pandemic, Valentine Saint Martin provided complimentary meditation sessions to nurses in New York City navigating extraordinary professional stress. He later continued supporting healthcare professionals through private online meditation and stress-management sessions. That experience reinforced a central principle behind The Human Anchor™: <strong>Practical wellness tools are most valuable when people can understand them, use them consistently, and integrate them into real life.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* 10. STRESS EDUCATION & WORKSHOPS + 11. SEASONAL RESILIENCE */}
      <section id="workshops" className="py-20 px-6 bg-[#1A362B] text-white">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-serif font-bold mb-6 text-[#FDFBF7]">From Stress Education to Practical Resilience</h2>
            <p className="text-stone-300 text-lg mb-8 max-w-3xl">
              The Human Anchor™ is more than a movement or meditation program. Valentine Saint Martin also provides educational workshops and presentations exploring the science and lived experience of stress.
            </p>
            <div className="grid md:grid-cols-2 gap-4 text-sm font-medium text-stone-200">
              <div className="flex items-center gap-3 bg-[#132A21] p-4 rounded border border-[#234537]">✔ Understanding Stress: What Happens Inside the Body</div>
              <div className="flex items-center gap-3 bg-[#132A21] p-4 rounded border border-[#234537]">✔ The Art of Recovery: Why Relaxation Is a Skill</div>
              <div className="flex items-center gap-3 bg-[#132A21] p-4 rounded border border-[#234537]">✔ Stress, Sleep & Healthy Aging</div>
              <div className="flex items-center gap-3 bg-[#132A21] p-4 rounded border border-[#234537]">✔ Caregiver Stress & Personal Resilience</div>
            </div>
          </div>

          <div className="bg-[#132A21] p-8 rounded-xl border border-[#B87333]">
            <h3 className="text-2xl font-serif font-bold mb-4 text-[#B87333]">Seasonal Resilience & Wellness Series</h3>
            <p className="text-stone-300 mb-6">
              Seasonal changes can affect routines, activity levels, social connection, and overall well-being. This structured series provides programming throughout the fall and winter months to encourage movement, mindfulness, and healthy routines when time spent indoors increases.
            </p>
            <a href="#demo-form" className="inline-block bg-[#B87333] hover:bg-[#9c622b] text-white font-bold py-3 px-6 rounded transition-colors">
              Request a Workshop or Presentation
            </a>
          </div>
        </div>
      </section>

      {/* 12. FLEXIBLE PROGRAM FORMATS */}
      <section className="py-20 px-6 bg-[#FDFBF7]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-serif font-bold mb-12 text-center text-[#1A362B]">Flexible Program Formats</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm text-center">
              <h4 className="font-bold text-[#1A362B] mb-2 text-lg">Complimentary Demonstration</h4>
              <p className="text-sm text-[#B87333] font-semibold mb-3">45 Minutes</p>
              <p className="text-sm text-slate-600">A firsthand introduction for staff and participants. No obligation.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm text-center">
              <h4 className="font-bold text-[#1A362B] mb-2 text-lg">Recurring Wellness Program</h4>
              <p className="text-sm text-[#B87333] font-semibold mb-3">Weekly or Biweekly</p>
              <p className="text-sm text-slate-600">Ongoing programming designed to become part of an organization's regular calendar.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm text-center">
              <h4 className="font-bold text-[#1A362B] mb-2 text-lg">Custom & Workshops</h4>
              <p className="text-sm text-[#B87333] font-semibold mb-3">6-8 Weeks or Single Event</p>
              <p className="text-sm text-slate-600">Structured series and customized programming for healthcare, corporate, and non-profits.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 15. CONTACT FORM */}
      <section id="demo-form" className="py-20 px-6 bg-stone-100 border-t border-stone-200">
        <div className="max-w-3xl mx-auto bg-white p-10 rounded-2xl shadow-md border border-stone-200">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-serif font-bold text-[#1A362B] mb-3">Schedule a Complimentary Program Demonstration</h2>
            <p className="text-slate-600">Tell us a little about your organization and what you are looking for. We'll follow up to discuss your needs and explore whether The Human Anchor™ is a good fit.</p>
          </div>

          {isSuccess ? (
            <div className="bg-emerald-50 text-emerald-800 p-6 rounded-lg text-center border border-emerald-200">
              <h3 className="text-xl font-bold mb-2">Request Received</h3>
              <p>Thank you. Valentine will be in touch shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Full Name*</label>
                  <input required name="name" type="text" className="w-full px-4 py-2 bg-stone-50 border border-stone-300 rounded-lg focus:ring-2 focus:ring-[#1A362B] focus:outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Organization Name*</label>
                  <input required name="organization" type="text" className="w-full px-4 py-2 bg-stone-50 border border-stone-300 rounded-lg focus:ring-2 focus:ring-[#1A362B] focus:outline-none" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Your Role / Title*</label>
                  <select required name="role" className="w-full px-4 py-2 bg-stone-50 border border-stone-300 rounded-lg focus:ring-2 focus:ring-[#1A362B] focus:outline-none">
                    <option value="">Select Role...</option>
                    <option value="Executive Director">Executive Director</option>
                    <option value="Activities Director">Activities Director</option>
                    <option value="Wellness Director">Wellness Director</option>
                    <option value="Program Director">Program Director</option>
                    <option value="Healthcare Administrator">Healthcare Administrator</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Organization Type</label>
                  <select required name="orgType" className="w-full px-4 py-2 bg-stone-50 border border-stone-300 rounded-lg focus:ring-2 focus:ring-[#1A362B] focus:outline-none">
                    <option value="">Select Type...</option>
                    <option value="Senior Center">Senior Center</option>
                    <option value="Assisted Living">Assisted Living / Adult Day</option>
                    <option value="Library">Library</option>
                    <option value="Healthcare / Non-Profit">Healthcare / Non-Profit</option>
                    <option value="Corporate">Workplace / Corporate</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Email Address*</label>
                  <input required name="email" type="email" className="w-full px-4 py-2 bg-stone-50 border border-stone-300 rounded-lg focus:ring-2 focus:ring-[#1A362B] focus:outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Phone Number*</label>
                  <input required name="phone" type="tel" className="w-full px-4 py-2 bg-stone-50 border border-stone-300 rounded-lg focus:ring-2 focus:ring-[#1A362B] focus:outline-none" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">What are you most interested in?</label>
                <div className="grid md:grid-cols-2 gap-2 text-sm text-slate-700">
                  <label className="flex items-center gap-2"><input type="checkbox" name="interests" value="Chair Qigong" /> Chair-Based Qigong</label>
                  <label className="flex items-center gap-2"><input type="checkbox" name="interests" value="Standing Qigong" /> Standing Qigong</label>
                  <label className="flex items-center gap-2"><input type="checkbox" name="interests" value="Stress Education" /> Stress Resilience Education</label>
                  <label className="flex items-center gap-2"><input type="checkbox" name="interests" value="Healthy Aging" /> Healthy Aging Programming</label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">Preferred Days / Additional Notes</label>
                <textarea name="notes" rows={3} className="w-full px-4 py-2 bg-stone-50 border border-stone-300 rounded-lg focus:ring-2 focus:ring-[#1A362B] focus:outline-none"></textarea>
              </div>

              <div className="flex flex-col gap-3">
                <button type="submit" disabled={isSubmitting} className="w-full bg-[#1A362B] hover:bg-[#132A21] text-white font-bold py-4 px-4 rounded-lg transition-colors disabled:opacity-50">
                  {isSubmitting ? 'Sending Request...' : 'REQUEST MY COMPLIMENTARY DEMONSTRATION'}
                </button>
                <button type="button" className="w-full bg-transparent text-[#1A362B] font-bold py-2 px-4 rounded-lg hover:bg-stone-100 transition-colors">
                  Or Request a Program Consultation
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
      
      {/* 16. FOOTER */}
      <footer className="bg-[#132A21] text-center py-10 px-6 text-stone-400 text-sm">
        <div className="max-w-4xl mx-auto">
          <p className="font-serif text-xl text-stone-200 mb-2 font-bold">The Human Anchor™</p>
          <p className="mb-6">Stress Resilience • Healthy Aging • Mind-Body Wellness</p>
          <p>© {new Date().getFullYear()} Valentine Saint Martin. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}