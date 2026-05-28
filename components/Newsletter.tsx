"use client";

import React, { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log('Subscribed with:', email);
    setEmail('');
  };

  return (
    <section className="section" style={{ background: 'var(--bg-secondary)', padding: '120px 0', position: 'relative' }}>
      {/* Top Wave Divider */}
      <div className="wave-divider" style={{ position: 'absolute', top: '-1px', left: 0, transform: 'rotate(180deg)' }}>
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="var(--bg-color)"></path>
        </svg>
      </div>

      <div className="container" style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: '60px',
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: '900px'
      }}>
        {/* Left Side: Text */}
        <div style={{ flex: '1 1 300px' }}>
          <h2 style={{ 
            fontSize: '1.8rem', 
            textTransform: 'uppercase', 
            letterSpacing: '2px',
            marginBottom: '16px'
          }}>
            Keep in touch
          </h2>
          <p style={{
            color: 'var(--text-secondary)',
            fontFamily: 'var(--font-body)',
            lineHeight: 1.6
          }}>
            Subscribe to our newsletter to receive updates on new collections, exclusive offers, and behind-the-scenes glimpses into the studio.
          </p>
        </div>

        {/* Right Side: Form */}
        <div style={{ flex: '1 1 400px' }}>
          <form onSubmit={handleSubmit} style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}>
            <input 
              type="email" 
              placeholder="Email address" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                padding: '16px 24px',
                borderRadius: '8px',
                border: 'none',
                background: '#fff',
                fontFamily: 'var(--font-body)',
                fontSize: '1rem',
                outline: 'none',
                boxShadow: 'var(--shadow-soft)'
              }}
            />
            <button type="submit" style={{
              background: 'var(--pastel-pink)',
              color: '#fff',
              border: 'none',
              padding: '16px 32px',
              borderRadius: '30px',
              fontFamily: 'var(--font-body)',
              fontWeight: 500,
              fontSize: '0.9rem',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              alignSelf: 'flex-start'
            }} className="newsletter-btn">
              Subscribe to newsletter
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Wave Divider */}
      <div className="wave-divider" style={{ position: 'absolute', bottom: '-1px', left: 0 }}>
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="var(--bg-color)"></path>
        </svg>
      </div>

      <style jsx>{`
        .newsletter-btn:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-hover);
          opacity: 0.9;
        }
      `}</style>
    </section>
  );
}
