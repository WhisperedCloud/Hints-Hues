import React from 'react';

export default function About() {
  return (
    <section id="about" className="section container" style={{
      display: 'flex',
      alignItems: 'center',
      minHeight: '80vh'
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: '60px',
        alignItems: 'center',
        width: '100%'
      }}>
        {/* Left Side: Owner Photo Placeholder */}
        <div style={{
          flex: '1 1 400px',
          display: 'flex',
          justifyContent: 'center',
          position: 'relative'
        }}>
          {/* Decorative background shape behind photo */}
          <div style={{
            position: 'absolute',
            top: '10%',
            left: '5%',
            width: '90%',
            height: '90%',
            background: 'var(--pastel-sage)',
            borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%',
            zIndex: 0,
            opacity: 0.5
          }}></div>
          
          <div className="glass-panel" style={{
            width: '100%',
            maxWidth: '450px',
            aspectRatio: '3/4',
            borderRadius: '24px',
            position: 'relative',
            zIndex: 1,
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, rgba(255,255,255,0.8), rgba(255,255,255,0.3))'
          }}>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', fontFamily: 'var(--font-heading)', fontStyle: 'italic' }}>
              [Owner Photo]
            </p>
          </div>
        </div>

        {/* Right Side: About Them Text */}
        <div style={{
          flex: '1 1 400px',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px'
        }}>
          <h2 style={{
            fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
            color: 'var(--text-primary)',
            lineHeight: 1.2
          }}>
            Meet the <span className="text-gradient">Artist</span>
          </h2>
          
          <p style={{
            fontSize: '1.15rem',
            lineHeight: 1.8,
            color: 'var(--text-secondary)'
          }}>
            Welcome to the creative world behind Hints&Hues. Every resin piece is born from a deep passion for fluid dynamics, color psychology, and modern aesthetics.
          </p>
          
          <p style={{
            fontSize: '1.15rem',
            lineHeight: 1.8,
            color: 'var(--text-secondary)'
          }}>
            By blending traditional techniques with contemporary design, the focus is on creating timeless, handcrafted art that elevates any space it inhabits. Drawing inspiration from nature's subtle hues and organic shapes, each creation tells a unique story.
          </p>
          
          <div style={{ marginTop: '10px' }}>
            <span style={{ 
              fontFamily: 'var(--font-heading)', 
              fontSize: '1.5rem', 
              color: 'var(--pastel-pink)', 
              fontWeight: 600,
              display: 'inline-block',
              borderBottom: '2px solid var(--pastel-peach)'
            }}>
              — The Creator
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
