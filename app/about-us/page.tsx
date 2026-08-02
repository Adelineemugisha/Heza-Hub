'use client';

import Link from 'next/link';

export default function AboutUsPage() {
  // 6 Team Members mapping to ceo.png through ceo5.png
  const teamMembers = [
    { id: 1, name: 'Team Member 1', role: 'CEO / Founder', imageSrc: '/ceo.png' },
    { id: 2, name: 'Team Member 2', role: 'Role / Designation', imageSrc: '/ceo1.png' },
    { id: 3, name: 'Team Member 3', role: 'Role / Designation', imageSrc: '/ceo2.png' },
    { id: 4, name: 'Team Member 4', role: 'Role / Designation', imageSrc: '/ceo3.png' },
    { id: 5, name: 'Team Member 5', role: 'Role / Designation', imageSrc: '/ceo4.png' },
    { id: 6, name: 'Team Member 6', role: 'Role / Designation', imageSrc: '/ceo5.png' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#F8FAFC' }}>
      
      {/* 1. TOP NAVBAR */}
      <header className="site-header">
        <div className="header-container">
          <div className="logo-text">Heza Hub</div>
          <nav className="nav-links">
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/agriculture-waste" className="nav-link">Agriculture Waste</Link>
            <Link href="/youth-opportunity" className="nav-link">Youth Opportunity</Link>
            <Link href="/biochar" className="nav-link">Biochar</Link>
            <Link href="/about-us" className="nav-link active">About Us</Link>
          </nav>
        </div>
      </header>

      {/* 2. PAGE HEADER BANNER */}
      <section style={{ backgroundColor: '#064f10', padding: '40px 20px', textAlign: 'center', color: '#FFFFFF' }}>
        <h1 style={{ margin: 0, fontSize: '36px', fontWeight: 'bold' }}>About Us</h1>
        <p style={{ margin: '10px 0 0 0', fontSize: '18px' }}>Get to know Heza Hub, our dedicated team, and our environmental networks.</p>
      </section>

      {/* 3. MAIN CORE CONTENT */}
      <main style={{ maxWidth: '1100px', margin: '45px auto', padding: '0 20px', flex: 1, width: '100%' }}>
        
        {/* About Description Block */}
        <section style={{ marginBottom: '50px' }}>
          <h2 style={{ fontSize: '26px', color: '#22C55E', marginBottom: '15px', borderLeft: '6px solid #87CEEB', paddingLeft: '12px', fontWeight: 'bold' }}>
            Who We Are
          </h2>
          <div style={{ backgroundColor: '#FFFFFF', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.02)', color: '#334155', fontSize: '16px', lineHeight: '1.8' }}>
            <p style={{ margin: 0 }}>
              Heza Hub is an innovative agricultural enterprise dedicated exclusively to waste valuation. We do not deal in traditional crops or commercial inputs; instead, we focus entirely on transforming agricultural waste into ecological solutions. Our flagship product, biochar, directly revitalizes the Earth by enriching soil health, optimizing fertilizer efficiency, and actively combating climate change. Through biochar, we restore degraded lands and build agricultural resilience. This high-value product directly empowers farmers with improved yields while indirectly benefiting our entire society. At Heza Hub, we believe in the power of soil and the future of sustainable agriculture.
            </p>
          </div>
        </section>

        {/* Team Pictures Grid Block */}
        <section style={{ marginBottom: '50px' }}>
          <h2 style={{ fontSize: '26px', color: '#22C55E', marginBottom: '25px', borderLeft: '6px solid #87CEEB', paddingLeft: '12px', fontWeight: 'bold' }}>
            Our Professional Team
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '25px' }}>
            {teamMembers.map((member) => (
              <div key={member.id} style={{ backgroundColor: '#FFFFFF', borderRadius: '12px', overflow: 'hidden', textAlign: 'center', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', paddingBottom: '15px' }}>
                
                {/* Team Member Image Rendering */}
                <div style={{ width: '100%', height: '220px', backgroundColor: '#E2E8F0', position: 'relative', overflow: 'hidden', marginBottom: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img 
                    src={member.imageSrc} 
                    alt={member.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={(e) => {
                      // Visual fallback text if the image file is physically missing in public/
                      e.currentTarget.style.opacity = '0.4';
                    }}
                  />
                </div>
                
                <h3 style={{ margin: '0 0 5px 0', fontSize: '18px', color: '#1E293B', fontWeight: 'bold' }}>{member.name}</h3>
                <p style={{ margin: 0, fontSize: '14px', color: '#22C55E', fontWeight: '500' }}>{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Location Address and Social Medias Split Layout */}
        <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          
          {/* Location Block */}
          <div style={{ backgroundColor: '#FFFFFF', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', borderTop: '4px solid #87CEEB' }}>
            <h3 style={{ color: '#1E293B', fontSize: '20px', fontWeight: 'bold', margin: '0 0 15px 0' }}>📍 Physical Location</h3>
            <p style={{ margin: '0 0 8px 0', fontSize: '15px', color: '#334155' }}><strong>Country:</strong> Rwanda</p>
            <p style={{ margin: 0, fontSize: '15px', color: '#334155' }}><strong>Address:</strong> Kigali Sector, Gasabo District, Kigali, Rwanda</p>
          </div>

          {/* Social Medias Block (Clickable Text Icons) */}
          <div style={{ backgroundColor: '#FFFFFF', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', borderTop: '4px solid #22C55E' }}>
            <h3 style={{ color: '#1E293B', fontSize: '20px', fontWeight: 'bold', margin: '0 0 15px 0' }}>🌐 Connect With Us</h3>
            <p style={{ margin: '0 0 20px 0', fontSize: '14px', color: '#64748B' }}>Follow our social channels to see real-time progress updates.</p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <Link href="https://wa.me" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#22C55E', textDecoration: 'none', fontWeight: '600', fontSize: '15px' }}>
                <span>💬 WhatsApp Contact</span>
              </Link>
              
              <Link href="https://linkedin.com" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#0077B5', textDecoration: 'none', fontWeight: '600', fontSize: '15px' }}>
                <span>💼 LinkedIn Corporate Page</span>
              </Link>

              <Link href="https://tiktok.com" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#000000', textDecoration: 'none', fontWeight: '600', fontSize: '15px' }}>
                <span>🎥 TikTok Eco-Videos</span>
              </Link>
            </div>
          </div>

        </section>

      </main> 

    </div>
  );
}
