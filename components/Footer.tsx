"use client";

import React from 'react';

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid rgba(0, 0, 0, 0.05)',
      padding: '60px 0 20px',
      background: 'rgba(255, 255, 255, 0.4)',
      position: 'relative',
      zIndex: 10
    }}>
      <div className="container" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '40px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <img src="/logo.png" alt="Hints&Hues Logo" style={{ height: '50px', filter: 'opacity(0.8) drop-shadow(0 0 5px rgba(0,0,0,0.05))' }} />
          <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', color: 'var(--text-primary)', opacity: 0.9 }}>Hints&Hues</h3>
        </div>

        <div style={{ display: 'flex', gap: '20px' }}>
          {/* Social Icons */}
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{
            color: 'var(--text-secondary)',
            fontSize: '0.9rem',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            transition: 'color 0.3s ease'
          }}
          onMouseOver={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
          onMouseOut={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
          >
            Instagram
          </a>
        </div>
        
        <div style={{
          width: '100%',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.05), transparent)'
        }} />

        <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
          &copy; {new Date().getFullYear()} Hints&Hues. All rights reserved. Designed for aesthetic elegance.
        </p>
      </div>
    </footer>
  );
}
