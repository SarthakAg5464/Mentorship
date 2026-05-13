import React from 'react';

export const Navbar = () => {
  return (
    <nav style={{
      padding: '1.5rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: '1px solid rgba(255,255,255,0.1)',
      backdropFilter: 'blur(10px)',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: 'rgba(15, 23, 42, 0.8)'
    }}>
      <div style={{ fontSize: '1.5rem', fontWeight: 'bold', background: 'linear-gradient(to right, #60a5fa, #a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
        ELITE MENTORSHIP
      </div>
      <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', color: '#94a3b8' }}>
        <a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>Programs</a>
        <a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>Success Stories</a>
        <a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>About Us</a>
        <a href="#" style={{ textDecoration: 'none', color: '#3b82f6', fontWeight: 600 }}>Apply Now</a>
      </div>
    </nav>
  );
};
