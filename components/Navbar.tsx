"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
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
      transition: 'all 0.3s ease',
      background: scrolled ? 'var(--glass-bg)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(10px)' : 'none',
    }}>
      <div className="container" style={{
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 40px'
      }}>
        {/* Logo */}
        <div style={{ flex: 1 }}>
          <Link href="/" style={{ 
            fontFamily: 'var(--font-heading)', 
            fontSize: '1.4rem', 
            letterSpacing: '1px' 
          }}>
            HINTS&HUES
          </Link>
        </div>
        
        {/* Center Links */}
        <nav style={{
          display: 'flex',
          gap: '40px',
          fontFamily: 'var(--font-body)',
          fontSize: '0.85rem',
          letterSpacing: '0.5px',
          textTransform: 'uppercase'
        }}>
          <Link href="#about" className="nav-link">About us</Link>
          <Link href="#shop" className="nav-link">Shop</Link>
          <Link href="#collections" className="nav-link">Collections</Link>
        </nav>

        {/* Right Actions */}
        <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '20px' }}>
          {/* Removed Cart */}
        </div>
      </div>

      <style jsx>{`
        .nav-link {
          position: relative;
          color: var(--text-primary);
          transition: opacity 0.3s ease;
        }
        .nav-link:hover {
          opacity: 0.7;
        }
      `}</style>
    </header>
  );
}
