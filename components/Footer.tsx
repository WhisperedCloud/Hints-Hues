"use client";

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{
      position: 'relative',
      padding: '120px 0 60px',
      overflow: 'hidden',
      color: '#fff',
      textAlign: 'center',
      zIndex: 10
    }}>
      {/* Artistic Background Texture */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'url(/hero-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'brightness(0.3) saturate(1.2)',
        zIndex: -2
      }} />
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to bottom, rgba(30, 25, 23, 0.9), rgba(15, 12, 10, 0.95))',
        zIndex: -1
      }} />

      <div className="container" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '60px'
      }}>
        
        {/* Artistic Quote */}
        <div style={{ maxWidth: '600px' }}>
          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 400,
            lineHeight: 1.2,
            margin: '0 0 20px 0',
            letterSpacing: '1px'
          }}>
            "Fluidity captured in time, beauty poured by hand."
          </h2>
          <div style={{
            width: '40px',
            height: '2px',
            background: 'var(--pastel-pink)',
            margin: '0 auto'
          }} />
        </div>

        {/* Logo */}
        <div>
          <img src="/logo.png" alt="Hints&Hues Logo" style={{ height: '80px', objectFit: 'contain', filter: 'brightness(0) invert(1) opacity(0.9)' }} />
        </div>

        {/* Links */}
        <div style={{ display: 'flex', gap: '40px' }}>
          <Link href="#about" className="footer-link">About us</Link>
          <Link href="#shop" className="footer-link">Shop</Link>
          <Link href="#collections" className="footer-link">Collections</Link>
        </div>

        <div style={{
          width: '100%',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
          marginTop: '20px'
        }} />

        {/* Bottom Socials & Copyright */}
        <div style={{ 
          display: 'flex', 
          width: '100%', 
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          <p style={{ margin: 0, fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)' }}>
            &copy; {new Date().getFullYear()} Hints&Hues. All rights reserved.
          </p>
          <a href="https://www.instagram.com/hints_nd_hues/" target="_blank" rel="noopener noreferrer" className="social-link" style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
            Instagram
          </a>
        </div>
      </div>

      <style jsx>{`
        .footer-link {
          font-family: var(--font-body);
          font-size: 0.85rem;
          color: rgba(255,255,255,0.6);
          text-transform: uppercase;
          letter-spacing: 1px;
          transition: color 0.3s ease;
        }
        .footer-link:hover {
          color: #fff;
        }
        .social-link {
          color: rgba(255,255,255,0.6);
          transition: color 0.3s ease;
        }
        .social-link:hover {
          color: #fff;
        }
      `}</style>
    </footer>
  );
}
