import React from 'react';
import Link from 'next/link';

export default function About() {
  return (
    <section id="about" className="section container" style={{
      display: 'flex',
      alignItems: 'center',
      padding: '120px 24px',
      overflow: 'hidden'
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: '80px',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'center'
      }}>
        {/* Left Side: Owner Photo */}
        <div style={{
          flex: '1 1 400px',
          maxWidth: '500px',
          display: 'flex',
          justifyContent: 'center',
          position: 'relative'
        }}>
          {/* Decorative background blob */}
          <div className="blob-bg blob-2" style={{
            width: '100%',
            height: '110%',
            top: '-5%',
            left: '-10%',
            opacity: 0.8
          }}></div>
          
          <div style={{
            width: '100%',
            aspectRatio: '3/4',
            position: 'relative',
            zIndex: 1,
            overflow: 'hidden',
            borderRadius: '20px',
            boxShadow: 'var(--shadow-soft)'
          }}>
            <div style={{
              width: '100%',
              height: '100%',
              backgroundImage: 'url(/owner.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'contrast(1.05) brightness(1.02)'
            }} />
          </div>
        </div>

        {/* Right Side: About Text */}
        <div style={{
          flex: '1 1 400px',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          maxWidth: '500px'
        }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 2.5rem)',
            color: 'var(--text-primary)',
            textTransform: 'uppercase',
            letterSpacing: '2px'
          }}>
            About
          </h2>
          
          <p style={{
            fontSize: '1rem',
            lineHeight: 1.8,
            color: 'var(--text-primary)',
            fontFamily: 'var(--font-body)'
          }}>
            Welcome to the creative world behind Hints&Hues. Every resin piece is born from a deep passion for fluid dynamics, color psychology, and modern aesthetics.
          </p>
          
          <p style={{
            fontSize: '1rem',
            lineHeight: 1.8,
            color: 'var(--text-primary)',
            fontFamily: 'var(--font-body)'
          }}>
            By blending traditional techniques with contemporary design, the focus is on creating timeless, handcrafted art that elevates any space it inhabits. Drawing inspiration from nature's subtle hues and organic shapes, each creation tells a unique story.
          </p>
          
          <div style={{ marginTop: '20px' }}>
            <Link href="#collections" className="btn-outline">
              Find out more
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
