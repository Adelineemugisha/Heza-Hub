'use client';

import Link from 'next/link';

export default function HomePage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#F8FAFC' }}>
      
      {/* 1. TOP NAVBAR */}
      <header className="site-header">
        <div className="header-container">
          <div className="logo-text">Heza Hub</div>
          <nav className="nav-links">
            <Link href="/" className="nav-link active">Home</Link>
            <Link href="/agriculture-waste" className="nav-link">Agriculture Waste</Link>
            <Link href="/youth-opportunity" className="nav-link">Youth Opportunity</Link>
            <Link href="/biochar" className="nav-link">Biochar</Link>
            <Link href="/about-us" className="nav-link">About Us</Link>
          </nav>
        </div>
      </header>

       <div style={{ backgroundColor: '#073502', padding: '12px 0', overflow: 'hidden', whiteSpace: 'nowrap', width: '100%' }}>
        <marquee behavior="scroll" direction="left" scrollamount="8" style={{ fontSize: '22px', fontWeight: 'bold', color: '#ffffff' }}>
          Heza Hub bright future with clean environment &nbsp;&nbsp;&nbsp;&nbsp; • &nbsp;&nbsp;&nbsp;&nbsp; Heza Hub bright future with clean environment &nbsp;&nbsp;&nbsp;&nbsp; • &nbsp;&nbsp;&nbsp;&nbsp; Heza Hub bright future with clean environment
        </marquee>
      </div>

      {/* 2. MOVING TEXT MARQUEE */}
      <div style={{ backgroundColor: '#052a17', padding: '15px 0', overflow: 'hidden', whiteSpace: 'nowrap', width: '100%' }}>
        <div style={{
          display: 'inline-block',
          fontSize: '22px',
          fontWeight: 'bold',
          color: '#d01111',
          paddingLeft: '100%',
          animation: 'marquee-scroll 20s linear infinite'
        }}>
          Heza Hub bright future with clean environment &nbsp;&nbsp;&nbsp;&nbsp; • &nbsp;&nbsp;&nbsp;&nbsp; Heza Hub bright future with clean environment &nbsp;&nbsp;&nbsp;&nbsp; • &nbsp;&nbsp;&nbsp;&nbsp; Heza Hub bright future with clean environment
        </div>
        <style jsx>{`
          @keyframes marquee-scroll {
            0% { transform: translate(0, 0); }
            100% { transform: translate(-100%, 0); }
          }
        `}</style>
      </div>
      <section style={{
        backgroundImage: 'linear-gradient(rgba(248, 250, 252, 0.4), rgba(248, 250, 252, 0.4)), url("/back.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 20px',
        textAlign: 'center'
      }}>
        <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.85)', padding: '40px 60px', borderRadius: '12px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}>
          <h1 style={{ fontSize: '42px', color: '#22C55E', margin: 0, fontWeight: 'bold' }}>
            Heza Hub
          </h1>
          <p style={{ color: '#1c4381', fontSize: '18px', marginTop: '10px', fontWeight: '500' }}>
            Transforming Agricultural Residuals in Rwanda
          </p>
        </div>
      </section>

      {/* 4. SCROLLABLE DETAILS CONTENT (Pushed Below the Fold) */}
      <div style={{ backgroundColor: '#F8FAFC', width: '100%', borderTop: '2px solid #E2E8F0' }}>
        <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 20px', display: 'grid', gridTemplateColumns: '1fr 350px', gap: '50px' }}>
          
          {/* Left Main F-Layout spine */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            <h2 style={{ fontSize: '32px', color: '#22C55E', margin: '0 0 10px 0', borderLeft: '6px solid #87CEEB', paddingLeft: '15px', fontWeight: 'bold' }}>
              Our Environmental & Social Impact Mandate
            </h2>

            <div style={{ fontSize: '17px', lineHeight: '1.8', color: '#334155' }}>
              <p style={{ marginBottom: '24px' }}>
                Every harvest, Rwandan farmers burn or discard <strong>1.1 million tons of residue</strong> due to a systematic lack of disposal infrastructure, contributing heavily to the 16% of national greenhouse gas emissions stemming from food and crop waste (Global Green Growth Institute, 2024).
              </p>
              
              <p style={{ marginBottom: '24px' }}>
                Concurrently, severe land degradation poses a major threat to the country’s agricultural backbone. According to the United Nations Industrial Development Organisation, over <strong>50% of Rwanda’s arable land</strong> suffers from critical soil acidity, while heavy rains trigger intense erosion that strips away 945,200 tonnes of organic soil materials annually.
              </p>
              
              <p style={{ marginBottom: '24px' }}>
                This agricultural decline accelerates rural poverty, leaving a massive portion of Rwanda’s workforce trapped in subsistence cycles, contributing to the <strong>13.4% unemployment rate</strong> reported by the National Institute of Statistics of Rwanda.
              </p>
              
              <p style={{ marginBottom: '24px' }}>
                While biochar is a proven solution for carbon sequestration and soil restoration, traditional manual production fails to scale. These methods are hindered by prohibitive logistics across rugged terrain, unpredictable biomass distribution, and inconsistent thermal processing quality.
              </p>
              
              <p style={{ marginBottom: '24px' }}>
                Currently, there's a critical lack of decentralized, modular infrastructure capable of converting dispersed waste into standardised, high quality soil amendments.
              </p>
            </div>
          </div>

          {/* Right Sidebar of Stat Cards */}
          <aside style={{ display: 'flex', flexDirection: 'column', gap: '24px', paddingTop: '20px' }}>
            <div style={{ backgroundColor: '#FFFFFF', padding: '25px', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', borderTop: '4px solid #22C55E' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#22C55E', fontSize: '22px', fontWeight: 'bold' }}>1.1M Tons</h3>
              <p style={{ margin: 0, fontSize: '14px', color: '#64748B', lineHeight: '1.5' }}>Of agricultural residue burned or discarded annually in Rwanda.</p>
            </div>
            
            <div style={{ backgroundColor: '#FFFFFF', padding: '25px', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', borderTop: '4px solid #87CEEB' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#87CEEB', fontSize: '22px', fontWeight: 'bold' }}>50%+ Arable Land</h3>
              <p style={{ margin: 0, fontSize: '14px', color: '#64748B', lineHeight: '1.5' }}>Suffers from critical soil acidity across the nation.</p>
            </div>

            <div style={{ backgroundColor: '#FFFFFF', padding: '25px', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', borderTop: '4px solid #22C55E' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#22C55E', fontSize: '22px', fontWeight: 'bold' }}>13.4%</h3>
              <p style={{ margin: 0, fontSize: '14px', color: '#64748B', lineHeight: '1.5' }}>Unemployment rate among the national workforce.</p>
            </div>
          </aside>

        </main>
      </div>

    </div>
  );
}
