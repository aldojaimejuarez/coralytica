import React, { useState, useEffect } from 'react';

function ReefPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Cierra el menú al hacer clic en un link (mejor UX en móvil)
  const handleLinkClick = () => setMenuOpen(false);

  useEffect(() => {
    window.togglePackageInfo = function(id) {
      const el = document.getElementById(id);
      if (!el.classList.contains('open')) {
        el.classList.add('open');
      } else {
        el.classList.remove('open');
      }
    };
  }, []);

  return (
    <div>
      <style>{`
        :root {
          --primary: #0A2647;
          --secondary: #144272;
          --accent: #2C74B3;
          --white: #fff;
          --gray-bg: #f8fafc;
        }
        body, .reefpage-root {
          margin: 0;
          padding: 0;
          min-height: 100vh;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          background: var(--white);
          color: var(--primary);
        }
        #reef-navbar {
          position: fixed;
          top: 0; left: 0; right: 0;
          background: #01123e;
          color: #fff;
          z-index: 1000;
          box-shadow: 0 2px 8px 0 rgba(44,116,179,0.07);
        }
        .navbar-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.7rem 1.5rem;
        }
        .navbar-brand {
          font-size: 1.5rem;
          font-weight: 800;
          letter-spacing: 1px;
          cursor: pointer;
          color: #fff;
          transition: color 0.2s;
        }
        .navbar-brand:hover {
          color: #2C74B3;
        }
        .navbar-links {
          display: flex;
          gap: 2rem;
          align-items: center;
        }
        .navbar-links a {
          color: #fff;
          text-decoration: none;
          font-size: 1rem;
          font-weight: 500;
          transition: color 0.2s;
          padding: 0.3rem 0.7rem;
          border-radius: 1rem;
        }
        .navbar-links a:hover {
          color: #2C74B3;
          background: rgba(44,116,179,0.08);
        }
        .navbar-toggle {
          display: none;
          background: none;
          border: none;
          color: #fff;
          font-size: 2rem;
          cursor: pointer;
        }
        @media (max-width: 800px) {
          .navbar-links {
            display: none;
            flex-direction: column;
            position: absolute;
            top: 100%;
            right: 0;
            background: #01123e;
            width: 100vw;
            box-shadow: 0 2px 8px 0 rgba(44,116,179,0.07);
            padding: 1rem 0;
            z-index: 1001;
          }
          .navbar-links.show {
            display: flex;
          }
          .navbar-toggle {
            display: block;
          }
        }
        body { padding-top: 60px; }
        @media (max-width: 600px) { body { padding-top: 54px; } }
        .hero {
          background: #01123e;
          color: var(--white);
          padding: 4rem 1rem 3rem 1rem;
          text-align: center;
        }
        .hero-title {
          font-size: 2.8rem;
          font-weight: 800;
          margin-bottom: 1rem;
          letter-spacing: -1px;
        }
        .hero-subtitle {
          font-size: 1.5rem;
          font-weight: 400;
          margin-bottom: 2rem;
          color: #e0e7ef;
        }
        .section {
          max-width: 800px;
          margin: 2.5rem auto;
          background: var(--gray-bg);
          border-radius: 1.2rem;
          box-shadow: 0 2px 16px 0 rgba(44,116,179,0.07);
          padding: 2.5rem 1.5rem;
        }
        .section-title {
          font-size: 2rem;
          font-weight: 700;
          color: var(--primary);
          margin-bottom: 1rem;
          text-align: center;
        }
        .section-text {
          font-size: 1.15rem;
          color: var(--secondary);
          margin-bottom: 1.5rem;
          text-align: center;
        }
        .problems-list {
          list-style: none;
          padding: 0;
          margin: 0 auto 1.5rem auto;
          max-width: 600px;
        }
        .problems-list li {
          display: flex;
          align-items: flex-start;
          gap: 0.7rem;
          margin-bottom: 1rem;
          font-size: 1.08rem;
          color: var(--primary);
        }
        .problems-list li::before {
          content: '✔';
          color: var(--accent);
          font-weight: bold;
          font-size: 1.1rem;
          margin-top: 2px;
        }
        .reef-footer {
          background: #01123e;
          color: #fff;
          padding: 2rem 1rem 1rem 1rem;
          margin-top: 3rem;
        }
        .reef-footer-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
          align-items: center;
          justify-content: space-between;
        }
        @media (min-width: 700px) {
          .reef-footer-container {
            flex-direction: row;
            align-items: center;
          }
        }
        .reef-footer-branding {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0.2rem;
        }
        .reef-footer-title {
          font-size: 1.3rem;
          font-weight: 700;
          letter-spacing: 1px;
          margin-bottom: 0.2rem;
          display: block;
        }
        .reef-footer-copy {
          font-size: 1rem;
          color: #e0e7ef;
        }
        .reef-footer-socials {
          display: flex;
          gap: 1.2rem;
          align-items: center;
        }
        .reef-footer-social-link {
          color: #2C74B3;
          font-size: 1.7rem;
          text-decoration: none;
          transition: color 0.2s;
        }
        .reef-footer-social-link:hover {
          color: #fff;
        }
        .reef-packages-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }
        @media (min-width: 700px) {
          .reef-packages-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        @media (min-width: 1100px) {
          .reef-packages-grid {
            grid-template-columns: 1fr 1fr 1fr;
          }
        }
        .reef-package-card {
          background: #fff;
          border-radius: 1.2rem;
          box-shadow: 0 2px 16px 0 rgba(44,116,179,0.07);
          padding: 2rem 1.5rem 1.5rem 1.5rem;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          position: relative;
          border: 1.5px solid #e5e7eb;
          transition: box-shadow 0.2s, border 0.2s;
        }
        .reef-package-card:hover {
          box-shadow: 0 6px 32px 0 rgba(44,116,179,0.13);
          border-color: #2C74B3;
        }
        .reef-package-header {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          margin-bottom: 0.7rem;
        }
        .reef-package-icon {
          font-size: 2.2rem;
          margin-bottom: 0.3rem;
          color: #2C74B3;
        }
        .reef-package-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: #0A2647;
          margin-bottom: 0.2rem;
        }
        .reef-package-price {
          font-size: 1.08rem;
          font-weight: 600;
          color: #2C74B3;
          margin-bottom: 0.5rem;
        }
        .reef-package-summary {
          font-size: 1rem;
          color: #144272;
          margin-bottom: 1.1rem;
          min-height: 44px;
        }
        .reef-package-more-btn {
          background: #2C74B3;
          color: #fff;
          border: none;
          border-radius: 2rem;
          padding: 0.6rem 1.5rem;
          font-size: 1rem;
          font-weight: 700;
          cursor: pointer;
          margin-bottom: 1rem;
          transition: background 0.2s;
        }
        .reef-package-more-btn:hover {
          background: #0A2647;
        }
        .reef-package-info {
          font-size: 0.98rem;
          color: #222;
          background: #f8fafc;
          border-radius: 0.8rem;
          margin-top: 0.5rem;
          padding: 1.1rem 1rem 1rem 1rem;
          box-shadow: 0 1px 6px 0 rgba(44,116,179,0.07);
          line-height: 1.6;
          max-height: 0;
          overflow: hidden;
          opacity: 0;
          transition: max-height 0.5s cubic-bezier(.4,2,.6,1), opacity 0.4s;
        }
        .reef-package-info.open {
          max-height: 2000px;
          opacity: 1;
          transition: max-height 0.7s cubic-bezier(.4,2,.6,1), opacity 0.4s;
        }
        .reef-package-info ul { margin: 0 0 0 1.1rem; padding: 0; }
        .reef-package-info li { margin-bottom: 0.7rem; }
        .reef-package-info a { color: #2C74B3; text-decoration: underline; }
        @media (max-width: 700px) {
          .reef-package-card { padding: 1.1rem 0.5rem 1rem 0.5rem; }
          .reef-package-title { font-size: 1.08rem; }
          .reef-package-price { font-size: 1rem; }
          .reef-package-summary { font-size: 0.98rem; min-height: 36px; }
          .reef-package-info { font-size: 0.97rem; padding: 0.7rem 0.5rem 0.7rem 0.5rem; }
          .reef-package-icon { font-size: 1.5rem; }
          .reef-package-more-btn { font-size: 0.98rem; padding: 0.6rem 1.1rem; }
        }
        .reef-float-btn {
          position: fixed;
          right: 2.2rem;
          bottom: 2.2rem;
          z-index: 9999;
          background: #001440;
          color: #fff;
          font-size: 1.15rem;
          font-weight: 700;
          padding: 0.7rem 2rem;
          border-radius: 2.5rem;
          box-shadow: 0 4px 24px 0 rgba(44,116,179,0.18);
          border: none;
          text-decoration: none;
          transition: background 0.2s, box-shadow 0.2s, color 0.2s;
          display: inline-block;
          animation: reefPulse 1.8s infinite cubic-bezier(.4,2,.6,1);
        }
        .reef-float-btn:hover {
          background: #144272;
          color: #fff;
          box-shadow: 0 6px 32px 0 rgba(44,116,179,0.28);
        }
        .reef-demo-section {
          background: #eaf2fb;
          border-left: 8px solid #2C74B3;
          margin: 3rem auto 2.5rem auto;
          max-width: 800px;
          border-radius: 1.1rem;
          box-shadow: 0 2px 16px 0 rgba(44,116,179,0.07);
          padding: 2.2rem 2rem 2.2rem 2.5rem;
          display: flex;
          align-items: center;
        }
        .reef-demo-content {
          width: 100%;
        }
        .reef-demo-title {
          color: #2C74B3;
          font-size: 1.35rem;
          font-weight: 800;
          margin-bottom: 1.1rem;
          letter-spacing: 0.5px;
        }
        .reef-demo-text {
          font-size: 1.18rem;
          color: #144272;
          line-height: 1.7;
        }
        .reef-demo-highlight {
          display: block;
          margin-top: 1.2rem;
          font-weight: 700;
          color: #0A2647;
          font-size: 1.13rem;
        }
        @media (max-width: 600px) {
          .reef-demo-section {
            padding: 1.2rem 0.7rem 1.2rem 1.1rem;
            border-radius: 0.7rem;
          }
          .reef-demo-title { font-size: 1.05rem; }
          .reef-demo-text { font-size: 1rem; }
          .reef-demo-highlight { font-size: 1rem; }
        }
        .reef-animated-title {
          display: flex;
          justify-content: center;
          gap: 0.7rem;
          flex-wrap: wrap;
        }
        .reef-anim-word {
          display: inline-block;
          opacity: 0;
          transform: translateY(30px);
          animation: reefTitleFadeIn 0.7s cubic-bezier(.4,2,.6,1) forwards;
        }
        @keyframes reefTitleFadeIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes reefPulse {
          0% { transform: scale(1); box-shadow: 0 4px 24px 0 rgba(44,116,179,0.18); }
          50% { transform: scale(1.07); box-shadow: 0 8px 32px 0 rgba(44,116,179,0.28); }
          100% { transform: scale(1); box-shadow: 0 4px 24px 0 rgba(44,116,179,0.18); }
        }
      `}</style>
      <nav id="reef-navbar">
        <div className="navbar-container">
          <span className="navbar-brand" onClick={() => window.location.href = '/'}>Coralytica</span>
          <button
            className="navbar-toggle"
            aria-label="Open menu"
            onClick={() => setMenuOpen(m => !m)}
          >
            &#9776;
          </button>
          <div className={`navbar-links${menuOpen ? ' show' : ''}`} id="navbar-links">
            <a href="#services" onClick={handleLinkClick}>Services</a>
            <a href="#about" onClick={handleLinkClick}>About</a>
            <a href="#contact" onClick={handleLinkClick}>Contact</a>
            <a href="/privacy-policy.html" onClick={handleLinkClick}>Privacy Policy</a>
          </div>
        </div>
      </nav>
      <header className="hero">
        <h1 className="hero-title reef-animated-title">
          <span className="reef-anim-word" style={{animationDelay:'0.1s'}}>Reef</span>
          <span className="reef-anim-word" style={{animationDelay:'0.3s'}}>Analytics</span>
          <span className="reef-anim-word" style={{animationDelay:'0.5s'}}>Agent</span>
        </h1>
        <div className="hero-subtitle">Your On-Demand Data Analyst, Powered By AI</div>
        <div style={{maxWidth:'500px',margin:'0 auto 2rem auto',position:'relative'}}>
          <iframe 
            id="reefVideo"
            width="100%"
            height="220"
            src="https://www.youtube.com/embed/h8YvxzlrobY"
            title="Reef Analytics Demo Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{width:'100%',borderRadius:'1rem',background:'#000',border:'none',boxShadow:'none',minHeight:'220px',maxWidth:'100%'}}
            aria-label="Reef Analytics Demo Video"
          ></iframe>
        </div>
      </header>
      <main>
        {/* Sección: What is Reef Analytics Agent? */}
        <section className="section">
          <h2 className="section-title">What is Reef Analytics Agent?</h2>
          <div className="section-text">
            Reef is an AI analytics assistant that delivers clear business insights via WhatsApp.<br />
            It makes data accessible, instant and easy for everyone in your business.
          </div>
        </section>
        {/* Sección: How does Reef work? */}
        <section className="section">
          <h2 className="section-title">How does Reef work?</h2>
          <div className="section-text">
            You ask a question (written or spoken) on WhatsApp.<br />
            Reef uses AI to analyse your data and sends back a chart and explanation, in seconds.
          </div>
          <div style={{display:'flex',justifyContent:'center',marginTop:'2rem'}}>
            <iframe
              width="320"
              height="568"
              src="https://www.youtube.com/embed/cmu8nbUSLtU"
              title="How does Reef work?"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              style={{borderRadius:'1rem',boxShadow:'0 2px 16px 0 rgba(44,116,179,0.13)',background:'#000',maxWidth:'100%'}}
            ></iframe>
          </div>
        </section>
        {/* Sección: What problem does it solve? */}
        <section className="section">
          <h2 className="section-title">What problem does it solve?</h2>
          <ul className="problems-list">
            <li>Slow and complex access to insights: Getting answers often requires technical skills or waiting for reports.</li>
            <li>Low adoption of traditional BI tools: Dashboards are underused because they're too complex or disconnected from daily workflows.</li>
            <li>Lack of timely, data-informed decisions: Delays in understanding what's happening lead to missed opportunities or poor outcomes.</li>
          </ul>
        </section>
        {/* Sección: Why is it useful for businesses? */}
        <section className="section">
          <h2 className="section-title">Why is it useful for businesses?</h2>
          <div className="section-text">
            Reef makes data accessible to everyone in the business instantly and without complexity.<br />
            It removes the need for technical skills or tools, allowing decision-makers to get clear, AI-generated insights anytime via WhatsApp.<br />
            It's a fast, practical way to stay informed and act with confidence.
          </div>
        </section>
        {/* Sección: What makes Reef different and better than a dashboard? */}
        <section className="section">
          <h2 className="section-title">What makes Reef different and better than a dashboard?</h2>
          <div className="section-text">
            Reef isn't a replacement for dashboards, it's a smart complement.<br />
            Powered by AI, Reef acts like a virtual analyst, letting you ask complex business questions through WhatsApp and get instant, visual and written answers.<br />
            When you need deeper, strategic reporting, Coralytica also designs custom dashboards to support long-term decision-making.
          </div>
        </section>
        {/* Sección: Demo */}
        <section className="reef-demo-section">
          <div className="reef-demo-content">
            <h3 className="reef-demo-title">Want to see Reef in action before committing?</h3>
            <div className="reef-demo-text">
              We can offer you a <b>FREE DEMO</b> using:<br /><br />
              1. A sample database we created for demonstration purposes, or<br />
              2. A small data sample you share with us (as long as it's safe and non-sensitive).<br /><br />
              <span className="reef-demo-highlight">This way, you can experience how Reef works and what kind of insights you could get, no setup or cost required.</span>
            </div>
          </div>
        </section>
        {/* Sección: Packages */}
        <section id="reef-packages" style={{padding:'3rem 0',background:'#f8fafc'}}>
          <div style={{maxWidth:'1200px',margin:'0 auto',padding:'0 1rem'}}>
            <h2 style={{fontSize:'2.2rem',fontWeight:800,textAlign:'center',marginBottom:'2.5rem',color:'#0A2647'}}>Reef Analytics Agent Packages</h2>
            <div className="reef-packages-grid">
              {/* Starter Package */}
              <div className="reef-package-card">
                <div className="reef-package-header">
                  <span className="reef-package-icon">🔌</span>
                  <h3 className="reef-package-title">Starter Package – Reef Plug & Play</h3>
                  <div className="reef-package-price">From $699 AUD</div>
                </div>
                <div className="reef-package-summary">Ideal for businesses that want to ask questions to their data without modifying its current structure. Simple setup, no technical knowledge required.</div>
                <button className="reef-package-more-btn" onClick={() => window.togglePackageInfo('starter-info')}>More info</button>
                <div className="reef-package-info" id="starter-info">
                  <div>
                    <b>What's Included:</b>
                    <ul style={{marginTop:'1em',marginBottom:'1em',paddingLeft:'1.2em',fontSize:'1.08em'}}>
                      <li>✅ Full AI agent setup on private VPS (1-year included)</li>
                      <li>✅ WhatsApp Business integration with Meta API (SIM + recharge included)</li>
                      <li>✅ OpenAI setup with initial credits</li>
                      <li>✅ Connection to 1 data source (no transformation)</li>
                      <li>✅ 10 preloaded business questions (plus unlimited custom ones)</li>
                      <li>✅ PDF guide for best practices</li>
                      <li>✅ 30 days of basic support</li>
                    </ul>
                    <div style={{marginTop:'0.7em',fontSize:'1.05em'}}>📅 <b>Implementation:</b> 5–7 business days</div>
                    <div style={{marginTop:'0.5em',color:'#b85c00',fontWeight:'bold',fontSize:'1.05em'}}>⚠️ No data cleaning or transformations included</div>
                  </div>
                </div>
              </div>
              {/* Growth Package */}
              <div className="reef-package-card">
                <div className="reef-package-header">
                  <span className="reef-package-icon">📈</span>
                  <h3 className="reef-package-title">Growth Package – Reef + Clean Data</h3>
                  <div className="reef-package-price">From $1,299 AUD</div>
                </div>
                <div className="reef-package-summary">Ideal for businesses that want to improve data quality and gain more reliable, analytical answers from their existing systems.</div>
                <button className="reef-package-more-btn" onClick={() => window.togglePackageInfo('growth-info')}>More info</button>
                <div className="reef-package-info" id="growth-info">
                  <div>
                    <b>What's Included:</b>
                    <div style={{marginTop:'1em',marginBottom:'0.7em',fontSize:'1.08em',fontWeight:'500'}}>Everything in the Starter Package, plus:</div>
                    <ul style={{marginBottom:'1em',paddingLeft:'1.2em',fontSize:'1.08em'}}>
                      <li>✅ Data cleaning and standardisation</li>
                      <li>✅ 1 automated ETL pipeline (extract, clean, load)</li>
                      <li>✅ Grouped views & calculated metrics</li>
                      <li>✅ Connection of up to 3 data sources</li>
                      <li>✅ 60 days of extended support</li>
                    </ul>
                    <div style={{marginTop:'0.7em',fontSize:'1.05em'}}>📅 <b>Implementation:</b> 10–15 business days</div>
                    <div style={{marginTop:'0.5em',color:'#b85c00',fontWeight:'bold',fontSize:'1.05em'}}>⚠️ Does not include dashboards or cloud setup</div>
                  </div>
                </div>
              </div>
              {/* Advanced Intelligence Package */}
              <div className="reef-package-card">
                <div className="reef-package-header">
                  <span className="reef-package-icon">🚀</span>
                  <h3 className="reef-package-title">Advanced Intelligence Package – Reef + Dashboards + Cloud Enablement</h3>
                  <div className="reef-package-price">From $4,500 AUD (depending on scope)</div>
                </div>
                <div className="reef-package-summary">Ideal for businesses that want to take full control of their data: from clean and automated pipelines to smart dashboards, cloud architecture, and strategic guidance.</div>
                <button className="reef-package-more-btn" onClick={() => window.togglePackageInfo('advanced-info')}>More info</button>
                <div className="reef-package-info" id="advanced-info">
                  <div>
                    <b>What's Included:</b>
                    <div style={{marginTop:'1em',marginBottom:'0.7em',fontSize:'1.08em',fontWeight:'500'}}>Everything in the Growth Package, plus:</div>
                    <ul style={{marginBottom:'1em',paddingLeft:'1.2em',fontSize:'1.08em'}}>
                      <li>✅ 2 custom dashboards (Power BI, Looker Studio, etc.)</li>
                      <li>✅ Dashboard training session (1 hour)</li>
                      <li>✅ Technical + functional documentation</li>
                      <li>✅ Automated reports & business alerts</li>
                      <li>✅ Cloud migration and support (GCP, AWS, Azure)</li>
                      <li>✅ Internal team training (optional)</li>
                      <li>✅ Data architecture review & optimisation</li>
                      <li>✅ 3 months of strategic advisory sessions</li>
                    </ul>
                    <div style={{marginTop:'0.7em',fontSize:'1.05em'}}>📅 <b>Implementation:</b> Based on project scope</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="reef-footer">
        <div className="reef-footer-container">
          <div className="reef-footer-branding">
            <span className="reef-footer-title">Coralytica</span>
            <span className="reef-footer-copy">© 2025 Coralytica. All rights reserved.</span>
          </div>
        </div>
      </footer>
      <a href="mailto:info@coralytica.com.au?subject=Free%20Consultation%20Request%20-%20Reef%20Analytics%20Agent&body=I%20would%20like%20to%20request%20a%20free%20demo%20of%20Reef%20Analytics%20Agent.%20Please%20contact%20me%20with%20more%20information."
        className="reef-float-btn"
        style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:'0.5rem',background:'#001440',borderRadius:'2.5rem',boxShadow:'0 4px 24px 0 rgba(44,116,179,0.18)',padding:'1.2rem 2rem 1rem 2rem',border:'none',color:'#fff',fontWeight:700,fontSize:'1.15rem',textDecoration:'none',position:'fixed',right:'2.2rem',bottom:'2.2rem',zIndex:9999}}>
        <img src="/images/reef.png" alt="Try Reef Free" style={{height:'60px',width:'auto',borderRadius:'1.5rem',background:'#fff',display:'block'}}/>
        <span style={{whiteSpace:'nowrap',marginTop:'0.3rem'}}>Try Reef Free</span>
      </a>
    </div>
  );
}

export default ReefPage; 