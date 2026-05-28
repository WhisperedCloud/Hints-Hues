import React from 'react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="home" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      paddingTop: 'var(--nav-height)',
      backgroundImage: 'url(/hero-bg.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      borderBottomLeftRadius: '40px',
      borderBottomRightRadius: '40px',
      overflow: 'hidden'
    }}>
      {/* Soft overlay to ensure text readability */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to bottom, rgba(250, 246, 245, 0.2), rgba(250, 246, 245, 0.4))',
        zIndex: 1
      }} />

      <div className="container animate-fade-in" style={{
        position: 'relative',
        zIndex: 2,
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px',
        marginTop: '-5vh' // visually center it ignoring the nav
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px' }}>
          <img src="/logo.png" alt="Hints&Hues Logo" style={{ height: '140px', objectFit: 'contain' }} />
          <h1 style={{
            fontSize: 'clamp(3.5rem, 8vw, 6rem)',
            lineHeight: 1.1,
            letterSpacing: '4px',
            color: 'var(--text-primary)',
            textTransform: 'uppercase',
            fontWeight: 400,
            margin: 0
          }}>
            Hints&Hues
          </h1>
        </div>
        
        <p style={{
          fontSize: '1.1rem',
          color: 'var(--text-primary)',
          maxWidth: '500px',
          lineHeight: 1.6,
          fontWeight: 400,
          fontFamily: 'var(--font-body)',
          letterSpacing: '0.5px'
        }}>
         Where art flows like color and every piece tells a story.
        </p>

        <div style={{ marginTop: '20px' }}>
          <Link href="#collections" className="btn-primary">
            Explore collection
          </Link>
        </div>
      </div>
    </section>
  );
}
