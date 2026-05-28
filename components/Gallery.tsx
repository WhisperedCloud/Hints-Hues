"use client";

import React from 'react';

const artworks = [
  { id: 1, title: 'Morning Dew', aspect: '1/1', bg: 'linear-gradient(135deg, #eec7c7, #f9e3d3)' },
  { id: 2, title: 'Soft Petal', aspect: '4/5', bg: 'linear-gradient(135deg, #dfefe3, #e2eff6)' },
  { id: 3, title: 'Lavender Breeze', aspect: '16/9', bg: 'var(--soft-gradient)' },
  { id: 4, title: 'Pearl Cloud', aspect: '4/5', bg: 'linear-gradient(to bottom, #e2eff6, #fcfaf8)' },
  { id: 5, title: 'Sage Symphony', aspect: '1/1', bg: 'linear-gradient(45deg, #dfefe3, #f9e3d3)' },
  { id: 6, title: 'Rose Blush', aspect: '3/4', bg: 'linear-gradient(135deg, #f4e1e1, #e6e2f1)' },
];

export default function Gallery() {
  return (
    <section id="gallery" className="section container">
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h2 style={{ fontSize: '3rem', marginBottom: '16px' }} className="text-gradient">Exhibition</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>A curated collection of handcrafted aesthetic resin masterpieces.</p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '30px',
        alignItems: 'start'
      }}>
        {artworks.map((art, index) => (
          <div key={art.id} className="art-card glass-panel" style={{
            aspectRatio: art.aspect,
            borderRadius: '16px',
            overflow: 'hidden',
            position: 'relative',
            cursor: 'pointer',
            transition: 'transform 0.4s ease, box-shadow 0.4s ease',
            animation: `fadeIn 0.8s ease-out ${index * 0.1}s forwards`,
            opacity: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            {/* Placeholder Background mimicking Resin */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: art.bg,
              opacity: 0.8,
              transition: 'opacity 0.4s ease',
              zIndex: 1
            }} className="art-bg" />
            
            {/* Placeholder image (if user provides real ones later) */}
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              padding: '30px 20px',
              background: 'linear-gradient(to top, rgba(255,255,255,0.9), transparent)',
              zIndex: 2,
              transform: 'translateY(20px)',
              opacity: 0,
              transition: 'all 0.4s ease'
            }} className="art-info">
              <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '8px' }}>{art.title}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>View Details</p>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .art-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: var(--shadow-hover);
        }
        .art-card:hover .art-info {
          transform: translateY(0);
          opacity: 1;
        }
        .art-card:hover .art-bg {
          opacity: 1;
        }
      `}</style>
    </section>
  );
}
