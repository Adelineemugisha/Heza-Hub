'use client';

import Link from 'next/link';

export default function BiocharPage() {
  // 3 Biochar items explicitly mapping to bio1.png, bio2.png, and bio3.png
  const biocharItems = [
    { id: 1, imageSrc: '/bio1.png', title: 'Biochar Type/Phase 1', desc: 'Add description details here detailing raw biomass quality checks.' },
    { id: 2, imageSrc: '/bio2.png', title: 'Biochar Type/Phase 2', desc: 'Add description details here outlining high-temperature thermal pyrolysis details.' },
    { id: 3, imageSrc: '/bio3.png', title: 'Biochar Type/Phase 3', desc: 'Add description details here showing final granulated soil enhancements.' },
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
            <Link href="/biochar" className="nav-link active">Biochar</Link>
            <Link href="/about-us" className="nav-link">About Us</Link>
          </nav>
        </div>
      </header>

      {/* 2. PAGE HEADER BANNER */}
      <section style={{ backgroundColor: '#074608', padding: '40px 20px', textAlign: 'center', color: '#FFFFFF' }}>
        <h1 style={{ margin: 0, fontSize: '36px', fontWeight: 'bold' }}>Biochar Production</h1>
        <p style={{ margin: '10px 0 0 0', fontSize: '18px' }}>Organic soil stabilization and high efficiency carbon processing indicators.</p>
      </section>

      {/* 3. MAIN CORE CONTENT CONTAINER */}
      <main style={{ maxWidth: '1200px', margin: '40px auto', padding: '0 20px', flex: 1, width: '100%' }}>
        
        {/* 3 Images & Descriptions Grid Block */}
        <section style={{ marginBottom: '50px' }}>
          <h2 style={{ fontSize: '26px', color: '#22C55E', marginBottom: '25px', borderLeft: '6px solid #87CEEB', paddingLeft: '12px', fontWeight: 'bold' }}>
            Biochar Overview
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            {biocharItems.map((item) => (
              <div key={item.id} style={{ backgroundColor: '#FFFFFF', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', borderBottom: '4px solid #22C55E' }}>
                
                {/* Responsive Image Holder */}
                <div style={{ width: '100%', height: '200px', position: 'relative', overflow: 'hidden', backgroundColor: '#E2E8F0' }}>
                  <img 
                    src={item.imageSrc} 
                    alt={item.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={(e) => {
                      // Hides broken tag icon visually if file is not dropped in public/ yet
                      e.currentTarget.style.opacity = '0.5';
                    }}
                  />
                </div>

                {/* Card Content Text */}
                <div style={{ padding: '20px' }}>
                  <h3 style={{ margin: '0 0 10px 0', color: '#1E293B', fontSize: '18px', fontWeight: 'bold' }}>{item.title}</h3>
                  <p style={{ margin: 0, color: '#64748B', fontSize: '14px', lineHeight: '1.6' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Highlighted Production Section (~300 Words Area) */}
        <section style={{ backgroundColor: '#FFFFFF', padding: '40px', borderRadius: '12px', borderLeft: '8px solid #22C55E', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.03)', marginBottom: '50px' }}>
          <h2 style={{ color: '#22C55E', fontSize: '26px', fontWeight: 'bold', margin: '0 0 15px 0' }}>Biochar is real!</h2>
          <div style={{ color: '#334155', fontSize: '16px', lineHeight: '1.8' }}>
            <div style={{ fontWeight: '500', color: '#1E293B', fontStyle: 'italic', backgroundColor: '#F0FDF4', padding: '20px', borderRadius: '6px', border: '1px dashed #22C55E' }}>
              <p style={{ marginBottom: '15px' }}>
                 Agricultural waste is often mismanaged, severely impacting our climate and environment. However, 
                when treated correctly, this waste becomes a powerful, transformative resource for sustainable farming. Mismanaged 
                agricultural waste severely threatens global environmental stability. Yet, proper ecological processing transforms these 
                raw residues into an invaluable asset for modern farming. By converting organic agricultural waste into biochar, we produce 
                a specialized, high-performance soil conditioner designed to overcome unpredictable climate challenges and significantly 
                optimize long-term agricultural productivity. This highly porous powder functions as an advanced water-retention mechanism, 
                operating like millions of miniature water reservoirs directly within the soil matrix. By efficiently capturing and holding crucial rainwater,
                 it safeguards cultivating roots and prevents crops from drying out during unexpected dry spells or droughts. Furthermore, biochar prevents critical
                  nutrient runoff caused by heavy downpours, firmly anchoring both organic manure and commercial fertilizers in place. This targeted, slow-release mechanism 
                  ensures sustained plant nutrition, enabling farmers to achieve significantly bigger, healthier harvests while drastically reducing their ongoing fertilizer expenditures. In addition to nutrient management, the powder actively remediates degraded land by balancing acidic, sour pH levels and structurally improving sandy soil profiles. By softening and enriching the earth, it rapidly transforms marginal, unproductive tracts into highly fertile farming ground. From an atmospheric perspective, this technology eliminates the severe pollution caused by open-air burning or natural decomposition, which historically released immense amounts of carbon into the atmosphere. Instead, the
                 specialized carbonization process safely sequesters these elements, locks carbon into a stable, 
                 solid powder form forever.
              </p>
              <p>
                Ultimately, this comprehensive stabilization of the complete soil ecosystem directly drives an essential increase in regional food security.
                 By continuously maintaining optimal soil health and maximizing crop nutrient uptake, farmers using this powder can reliably achieve a yield 
                 increase of at least 14%. Biochar effectively turns an environmental liability into a cornerstone of sustainable, high-yielding agriculture.
              </p>
            </div>
          </div>
        </section>

        {/* Highly Visible Visit Us Line Section */}
        <section style={{ backgroundColor: '#025879', color: '#FFFFFF', padding: '30px', borderRadius: '12px', textAlign: 'center', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
          <h2 style={{ margin: '0 0 10px 0', fontSize: '24px', fontWeight: 'bold' }}>Want to See Our Production Facilities?</h2>
          <p style={{ margin: '0 0 20px 0', fontSize: '16px' }}>We welcome collaboration, site verification audits, and local ecological community tours.</p>
          <Link href="https://google.com" target="_blank" rel="noreferrer" style={{ display: 'inline-block', backgroundColor: '#22C55E', color: '#FFFFFF', padding: '12px 35px', borderRadius: '30px', textDecoration: 'none', fontWeight: 'bold', fontSize: '16px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
            📍 Visit Our Facility In Kigali
          </Link>
        </section>

      </main>

    </div>
  );
}
