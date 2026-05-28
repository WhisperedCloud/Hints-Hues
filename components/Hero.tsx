import React from 'react';

export default function Hero() {
  return (
    <section id="home" className="section" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      paddingTop: 'var(--nav-height)'
    }}>
      {/* Decorative Orbs */}
      <div className="animate-float" style={{
        position: 'absolute',
        top: '20%',
        left: '15%',
        width: '300px',
        height: '300px',
        background: 'var(--pastel-pink)',
        borderRadius: '50%',
        filter: 'blur(100px)',
        opacity: 0.15,
        zIndex: 0
      }} />
      <div className="animate-float" style={{
        position: 'absolute',
        bottom: '10%',
        right: '15%',
        width: '400px',
        height: '400px',
        background: 'var(--pastel-blue)',
        borderRadius: '50%',
        filter: 'blur(120px)',
        opacity: 0.1,
        zIndex: 0,
        animationDelay: '1s'
      }} />

      <div className="container" style={{
        position: 'relative',
        zIndex: 1,
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '30px'
      }}>
        <div className="glass-panel animate-fade-in" style={{
          padding: '60px',
          borderRadius: '24px',
          maxWidth: '800px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '24px'
        }}>
          <img src="/logo.png" alt="Hints&Hues Large Logo" style={{ height: '120px', filter: 'drop-shadow(0 0 15px rgba(0,0,0,0.05))' }} />
          
          <h1 style={{
            fontSize: 'clamp(3rem, 6vw, 5.5rem)',
            lineHeight: 1.1,
            letterSpacing: '2px',
            textShadow: '0 4px 10px rgba(0,0,0,0.02)'
          }}>
            <span className="text-gradient">"Hints&Hues"</span>
          </h1>
          
          <p style={{
            fontSize: '1.2rem',
            color: 'var(--text-secondary)',
            maxWidth: '600px',
            lineHeight: 1.6,
            fontWeight: 300,
            textShadow: 'none'
          }}>
            Handcrafted artistic expression, fluid textures, dreamy color blending, and contemporary elegance.
          </p>
        </div>
      </div>
    </section>
  );
}
