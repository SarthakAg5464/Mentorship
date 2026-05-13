'use client';

import { ApplicationForm } from '../components/forms/ApplicationForm';
import { GlassCard } from '../components/ui/GlassCard';

export default function Home() {
  const scrollToForm = () => {
    document.getElementById('apply-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main>
      <section className="hero-section">
        <div className="price-tag">Counselling Mentorship 2026</div>
        <h1 className="hero-title">
          Secure Your Future at <br /> 
          <span style={{ color: '#60a5fa' }}>MMMUT Gorakhpur</span>
        </h1>
        <p className="hero-subtitle">
          Don't let counselling errors cost you a seat. Even with an <strong>8L+ rank in JEE Main</strong>, a seat at MMMUT is possible with the right strategy. Get direct mentorship from current students.
        </p>
        <button onClick={scrollToForm} className="cta-button">
          Start Mentorship Now — ₹149
        </button>
        
        <div className="scroll-indicator">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
          </svg>
        </div>
      </section>

      <div className="container">
        <section style={{ padding: '4rem 0 2rem 0' }}>
          <h2 className="section-title" style={{ marginBottom: '2rem' }}>About the Legacy: MMMUT Gorakhpur</h2>
          <div className="bento-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
            <GlassCard>
              <h3 className="feature-title">60+ Years</h3>
              <p className="feature-desc">Formerly MMMEC, one of North India's oldest and most prestigious engineering institutions.</p>
            </GlassCard>
            <GlassCard>
              <h3 className="feature-title">354 Acre Campus</h3>
              <p className="feature-desc">A massive, lush green residential campus with state-of-the-art labs and sports facilities.</p>
            </GlassCard>
            <GlassCard>
              <h3 className="feature-title">Placement Excellence</h3>
              <p className="feature-desc">Record placements in companies like Google, Amazon, Adobe, and top PSUs every year.</p>
            </GlassCard>
          </div>
        </section>

        <section style={{ padding: '4rem 0' }}>
          <h2 className="section-title">Why Trust MMMUT Insiders?</h2>
          <div className="bento-grid">
            <div className="info-panel">
              <GlassCard style={{ height: '100%' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div className="feature-item">
                    <h3 className="feature-title" style={{ fontSize: '1.25rem' }}>Direct Guidance on Call</h3>
                    <p className="feature-desc">No automated bots. Talk directly to seniors who are currently studying at Madan Mohan Malviya University of Technology.</p>
                  </div>
                  <div className="feature-item">
                    <h3 className="feature-title" style={{ fontSize: '1.25rem' }}>Personalized Choice Filling</h3>
                    <p className="feature-desc">We help you rank your branch preferences based on your MET/JEE rank and previous year trends.</p>
                  </div>
                  <div className="feature-item">
                    <h3 className="feature-title" style={{ fontSize: '1.25rem' }}>Strategic Spot Rounds</h3>
                    <p className="feature-desc">Believe it or not, we've helped students with 8L+ ranks secure seats in later rounds. It's all about knowing the matrix.</p>
                  </div>
                </div>
              </GlassCard>
            </div>

            <div className="info-panel">
              <GlassCard style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' }}>
                <div className="price-tag" style={{ fontSize: '1rem', marginBottom: '1.5rem' }}>Limited Time Offer</div>
                <h3 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>₹149</h3>
                <p className="feature-desc" style={{ marginBottom: '2rem' }}>
                  Complete mentorship package including call support until the final physical reporting round.
                </p>
                <ul style={{ textAlign: 'left', color: '#cbd5e1', listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ color: '#34d399' }}>✓</span> 1-on-1 Call Consultation
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ color: '#34d399' }}>✓</span> Spot Round Guidance
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ color: '#34d399' }}>✓</span> Hostal & Campus Insights
                  </li>
                </ul>
              </GlassCard>
            </div>
          </div>
        </section>

        <section id="apply-section" style={{ padding: '4rem 0' }}>
          <h2 className="section-title">Join the Mentorship Program</h2>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <ApplicationForm />
          </div>
        </section>
      </div>

      <footer style={{ padding: '2rem', textAlign: 'center', color: '#64748b' }}>
        <p style={{ fontSize: '0.7rem', opacity: 0.3, letterSpacing: '0.5px' }}>Not Affiliated With MMMUT Official</p>
      </footer>
    </main>
  );
}
