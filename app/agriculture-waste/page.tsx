'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function AgricultureWastePage() {
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    phone: '',
    wasteType: '',
    pickupDate: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Form submitted! We will contact you soon at ${formData.phone} for the pickup.`);
    setFormData({ name: '', location: '', phone: '', wasteType: '', pickupDate: '' });
  };

  // 10 Items linking dynamically to waste1.png through waste10.png
  const wasteGalleryItems = Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
    imageSrc: `/waste${index + 1}.png`,
    title: `Waste Item Name ${index + 1}`,
    description: `This is where you will add your own custom description for agriculture waste photo ${index + 1}. Explain what it is and how it's processed.`
  }));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#F8FAFC' }}>
      
      {/* 1. TOP NAVBAR */}
      <header className="site-header">
        <div className="header-container">
          <div className="logo-text">Heza Hub</div>
          <nav className="nav-links">
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/agriculture-waste" className="nav-link active">Agriculture Waste</Link>
            <Link href="/youth-opportunity" className="nav-link">Youth Opportunity</Link>
            <Link href="/biochar" className="nav-link">Biochar</Link>
            <Link href="/about-us" className="nav-link">About Us</Link>
          </nav>
        </div>
      </header>

      {/* 2. PAGE HEADER BANNER */}
      <section style={{ backgroundColor: '#064517', padding: '40px 20px', textAlign: 'center', color: '#FFFFFF' }}>
        <h1 style={{ margin: 0, fontSize: '36px', fontWeight: 'bold' }}>Agriculture Waste Management</h1>
        <p style={{ margin: '10px 0 0 0', fontSize: '18px' }}>Schedule a residual pickup or explore our agricultural waste database.</p>
      </section>

      {/* 3. MAIN CONTENT CONTAINER */}
      <main style={{ maxWidth: '1200px', margin: '40px auto', padding: '0 20px', display: 'grid', gridTemplateColumns: '1fr 450px', gap: '50px', flex: 1 }}>
        
        {/* LEFT COLUMN: 10 PICTURES & DESCRIPTIONS GRID */}
        <div>
          <h2 style={{ fontSize: '26px', color: '#22C55E', marginBottom: '20px', borderLeft: '6px solid #87CEEB', paddingLeft: '12px', fontWeight: 'bold' }}>
            Waste Classifications & Records
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '25px' }}>
            {wasteGalleryItems.map((item) => (
              <div key={item.id} style={{ backgroundColor: '#FFFFFF', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', borderBottom: '4px solid #22C55E' }}>
                
                {/* Dynamically Loaded Image Box */}
                <div style={{ width: '100%', height: '180px', position: 'relative', overflow: 'hidden', backgroundColor: '#E2E8F0' }}>
                  <img 
                    src={item.imageSrc} 
                    alt={item.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={(e) => {
                      // Fallback visual helper if image file is physically missing in public/
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>

                {/* Content Box */}
                <div style={{ padding: '20px' }}>
                  <h3 style={{ margin: '0 0 10px 0', color: '#1E293B', fontSize: '18px', fontWeight: 'bold' }}>{item.title}</h3>
                  <p style={{ margin: 0, color: '#64748B', fontSize: '14px', lineHeight: '1.6' }}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: APPLICATION PICKUP FORM */}
        <aside>
          <div style={{ backgroundColor: '#FFFFFF', padding: '30px', borderRadius: '12px', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.05)', borderTop: '6px solid #87CEEB', position: 'sticky', top: '20px' }}>
            <h2 style={{ color: '#22C55E', margin: '0 0 10px 0', fontSize: '22px', fontWeight: 'bold' }}>Schedule a Waste Collection</h2>
            <p style={{ color: '#64748B', margin: '0 0 25px 0', fontSize: '14px', lineHeight: '1.5' }}>Fill out this form to request the Heza Hub team to visit your location and pick up organic agricultural residue.</p>
            
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '6px', fontSize: '14px', fontWeight: '600', color: '#1E293B' }}>Full Name / Farm Name</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Enter your name" 
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', border: '1px solid #CBD5E1', fontSize: '15px' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '6px', fontSize: '14px', fontWeight: '600', color: '#1E293B' }}>Location / Sector</label>
                <input 
                  type="text" 
                  required
                  value={formData.location}
                  onChange={(e) => setFormData({...formData, location: e.target.value})}
                  placeholder="e.g., Kigali, Rwanda" 
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', border: '1px solid #CBD5E1', fontSize: '15px' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '6px', fontSize: '14px', fontWeight: '600', color: '#1E293B' }}>Phone Number</label>
                <input 
                  type="tel" 
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  placeholder="e.g., +250788000000" 
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', border: '1px solid #CBD5E1', fontSize: '15px' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '6px', fontSize: '14px', fontWeight: '600', color: '#1E293B' }}>Type of Waste</label>
                <input 
                  type="text" 
                  required
                  value={formData.wasteType}
                  onChange={(e) => setFormData({...formData, wasteType: e.target.value})}
                  placeholder="e.g., Rice husks, maize stalks, coffee husks" 
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', border: '1px solid #CBD5E1', fontSize: '15px' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '6px', fontSize: '14px', fontWeight: '600', color: '#1E293B' }}>Preferred Pickup Day</label>
                <input 
                  type="date" 
                  required
                  value={formData.pickupDate}
                  onChange={(e) => setFormData({...formData, pickupDate: e.target.value})}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', border: '1px solid #CBD5E1', fontSize: '15px' }}
                />
              </div>

              <button 
                type="submit" 
                style={{ backgroundColor: '#22C55E', color: '#FFFFFF', padding: '12px 20px', borderRadius: '6px', border: 'none', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', marginTop: '10px' }}
              >
                Submit Pickup Request
              </button>
            </form>
          </div>
        </aside>

      </main>

    </div>
  );
}