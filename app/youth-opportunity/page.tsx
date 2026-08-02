'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function YouthOpportunityPage() {
  const [formStep, setFormStep] = useState(1);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    province: '',
    district: '',
    sector: '',
    essay: ''
  });

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStep(2);
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Application submitted successfully! Thank you, ${formData.name}.`);
    setFormData({ name: '', email: '', phone: '', province: '', district: '', sector: '', essay: '' });
    setFormStep(1);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#F8FAFC' }}>
      
      {/* 1. TOP NAVBAR */}
      <header style={{ backgroundColor: '#FFFFFF', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', position: 'sticky', top: 0, zIndex: 50 }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>
          <div style={{ fontSize: '22px', fontWeight: 'bold', color: '#22C55E', letterSpacing: '-0.5px' }}>Heza Hub</div>
          <nav style={{ display: 'flex', gap: '28px' }}>
            <Link href="/" style={{ fontSize: '15px', fontWeight: 500, color: '#64748B', textDecoration: 'none', transition: 'color 0.2s' }}>Home</Link>
            <Link href="/agriculture-waste" style={{ fontSize: '15px', fontWeight: 500, color: '#64748B', textDecoration: 'none', transition: 'color 0.2s' }}>Agriculture Waste</Link>
            <Link href="/youth-opportunity" style={{ fontSize: '15px', fontWeight: 600, color: '#22C55E', textDecoration: 'none', transition: 'color 0.2s' }}>Youth Opportunity</Link>
            <Link href="/biochar" style={{ fontSize: '15px', fontWeight: 500, color: '#64748B', textDecoration: 'none', transition: 'color 0.2s' }}>Biochar</Link>
            <Link href="/about-us" style={{ fontSize: '15px', fontWeight: 500, color: '#64748B', textDecoration: 'none', transition: 'color 0.2s' }}>About Us</Link>
          </nav>
        </div>
      </header>

      {/* 2. HERO WITH MOVING BACKGROUND IMAGE AND TRANSPARENT OVERLAY */}
      <section style={{
        position: 'relative',
        height: '45vh',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '120%',
          height: '100%',
          backgroundImage: 'url("/youth.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 1,
          animation: 'slow-move 20s ease-in-out infinite alternate'
        }} />

        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(30, 41, 59, 0.65)',
          zIndex: 2
        }} />

        <div style={{ position: 'relative', zIndex: 3, padding: '0 20px', maxWidth: '800px', color: '#FFFFFF' }}>
          <h1 style={{ fontSize: '36px', fontWeight: 'bold', lineHeight: 1.4, fontStyle: 'italic', letterSpacing: '0.5px', margin: 0 }}>
            &ldquo;A first paycheck is the first real taste of personal freedom&rdquo;
          </h1>
        </div>

        <style jsx>{`
          @keyframes slow-move {
            0% { transform: translate(0, 0) scale(1); }
            100% { transform: translate(-5%, -2%) scale(1.05); }
          }
        `}</style>
      </section>

      {/* 3. SCROLLABLE CONTENT & MULTI-STEP FORM */}
      <main style={{ maxWidth: '900px', margin: '40px auto', padding: '0 20px', flex: 1, width: '100%' }}>
        
        {/* Description Section */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '28px', color: '#22C55E', marginBottom: '20px', borderLeft: '6px solid #87CEEB', paddingLeft: '12px', fontWeight: 'bold' }}>
            Empowering the Next Generation
          </h2>
          <div style={{ fontSize: '16px', lineHeight: 1.8, color: '#334155', backgroundColor: '#FFFFFF', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
            <p style={{ margin: 0 }}>
              [ Paste your own youth opportunity description details and project narrative text blocks here. You can freely edit this container layout inside your file. ]
            </p>
          </div>
        </section>

        {/* Application Form Box */}
        <section style={{ backgroundColor: '#FFFFFF', padding: '40px', borderRadius: '12px', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.05)', borderTop: '6px solid #22C55E' }}>
          
          {/* Progress Markers */}
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '30px' }}>
            <span style={{ fontSize: '13px', fontWeight: 'bold', textTransform: 'uppercase', color: formStep === 1 ? '#22C55E' : '#94A3B8' }}>Step 1: Contact Details</span>
            <div style={{ height: '2px', width: '30px', backgroundColor: '#CBD5E1' }} />
            <span style={{ fontSize: '13px', fontWeight: 'bold', textTransform: 'uppercase', color: formStep === 2 ? '#22C55E' : '#94A3B8' }}>Step 2: Regional Essay</span>
          </div>

          {/* STEP 1: PERSONAL DETAILS */}
          {formStep === 1 && (
            <form onSubmit={handleNextStep} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '6px', fontSize: '14px', fontWeight: 600, color: '#1E293B' }}>Full Name</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Enter your full name" 
                  style={{ width: '100%', padding: '12px 14px', borderRadius: '6px', border: '1px solid #CBD5E1', fontSize: '15px', outline: 'none', boxSizing: 'border-box' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '6px', fontSize: '14px', fontWeight: 600, color: '#1E293B' }}>Email Address</label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="yourname@domain.com" 
                  style={{ width: '100%', padding: '12px 14px', borderRadius: '6px', border: '1px solid #CBD5E1', fontSize: '15px', outline: 'none', boxSizing: 'border-box' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '6px', fontSize: '14px', fontWeight: 600, color: '#1E293B' }}>Phone Number</label>
                <input 
                  type="tel" 
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  placeholder="e.g., +250788000000" 
                  style={{ width: '100%', padding: '12px 14px', borderRadius: '6px', border: '1px solid #CBD5E1', fontSize: '15px', outline: 'none', boxSizing: 'border-box' }}
                />
              </div>

              <button 
                type="submit" 
                style={{ backgroundColor: '#22C55E', color: '#FFFFFF', padding: '14px 20px', borderRadius: '6px', border: 'none', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', textAlign: 'center', marginTop: '10px' }}
              >
                Continue Details →
              </button>
            </form>
          )}
              
          {/* STEP 2: REGIONAL DETAILS & ESSAY */}
          {formStep === 2 && (
            <form onSubmit={handleFinalSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '15px' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '6px', fontSize: '14px', fontWeight: 600, color: '#1E293B' }}>Province</label>
                  <input 
                    type="text" 
                    required
                    value={formData.province}
                    onChange={(e) => setFormData({...formData, province: e.target.value})}
                    placeholder="e.g., Northern" 
                    style={{ width: '100%', padding: '12px 14px', borderRadius: '6px', border: '1px solid #CBD5E1', fontSize: '15px', outline: 'none', boxSizing: 'border-box' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '6px', fontSize: '14px', fontWeight: 600, color: '#1E293B' }}>District</label>
                  <input 
                    type="text" 
                    required
                    value={formData.district}
                    onChange={(e) => setFormData({...formData, district: e.target.value})}
                    placeholder="e.g., Musanze" 
                    style={{ width: '100%', padding: '12px 14px', borderRadius: '6px', border: '1px solid #CBD5E1', fontSize: '15px', outline: 'none', boxSizing: 'border-box' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '6px', fontSize: '14px', fontWeight: 600, color: '#1E293B' }}>Sector</label>
                  <input 
                    type="text" 
                    required
                    value={formData.sector}
                    onChange={(e) => setFormData({...formData, sector: e.target.value})}
                    placeholder="e.g., Muhoza" 
                    style={{ width: '100%', padding: '12px 14px', borderRadius: '6px', border: '1px solid #CBD5E1', fontSize: '15px', outline: 'none', boxSizing: 'border-box' }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '6px', fontSize: '14px', fontWeight: 600, color: '#1E293B' }}>
                  Short Essay: How do you know about agricultural waste? (~200 words)
                </label>
                <textarea
                  required
                  rows={6}
                  value={formData.essay}
                  onChange={(e) => setFormData({...formData, essay: e.target.value})}
                  placeholder="Share your personal experience, understanding, or observations regarding agricultural waste management in your community..."
                  style={{ width: '100%', padding: '12px 14px', borderRadius: '6px', border: '1px solid #CBD5E1', fontSize: '15px', resize: 'vertical', lineHeight: 1.6, outline: 'none', boxSizing: 'border-box', fontFamily: 'inherit' }}
                />
              </div>

              <div style={{ display: 'flex', gap: '15px', marginTop: '10px' }}>
                <button
                  type="button"
                  onClick={() => setFormStep(1)}
                  style={{ backgroundColor: '#E2E8F0', color: '#475569', padding: '14px 20px', borderRadius: '6px', border: 'none', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' }}
                >
                  ← Back
                </button>
                <button
                  type="submit"
                  style={{ backgroundColor: '#22C55E', color: '#FFFFFF', padding: '14px 20px', borderRadius: '6px', border: 'none', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', flex: 1 }}
                >
                  Submit Application
                </button>
              </div>
            </form>
          )}
        </section>
      </main>
    </div>
  );
}