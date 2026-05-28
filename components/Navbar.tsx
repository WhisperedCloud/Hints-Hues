"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: 'var(--nav-height)',
      zIndex: 1000,
      transition: 'all 0.4s ease',
      background: scrolled ? 'var(--glass-bg)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--glass-border)' : '1px solid transparent',
      boxShadow: scrolled ? 'var(--shadow-premium)' : 'none',
    }}>
      <div className="container" style={{
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <div className="logo" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img src="/logo.png" alt="Hints&Hues Logo" style={{ height: '40px', width: 'auto', filter: 'drop-shadow(0 0 8px rgba(0,0,0,0.05))' }} />
          <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 600, letterSpacing: '1px' }}>Hints&Hues</span>
        </div>
        
        <nav style={{
          display: 'flex',
          gap: '30px',
          fontFamily: 'var(--font-body)',
          fontSize: '0.95rem',
          fontWeight: 500,
          textTransform: 'uppercase',
          letterSpacing: '1px'
        }}>
          <Link href="#home" style={{ position: 'relative' }}>
            <span className="nav-link">Home</span>
          </Link>
          <Link href="#about" style={{ position: 'relative' }}>
            <span className="nav-link">About</span>
          </Link>
          <Link href="#gallery" style={{ position: 'relative' }}>
            <span className="nav-link">Gallery</span>
          </Link>
        </nav>
      </div>

      <style jsx>{`
        .nav-link {
          position: relative;
          display: inline-block;
          padding-bottom: 4px;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: 0;
          left: 0;
          background: var(--pastel-peach);
          transition: width 0.3s ease;
        }
        .nav-link:hover::after {
          width: 100%;
        }
      `}</style>
    </header>
  );
}
