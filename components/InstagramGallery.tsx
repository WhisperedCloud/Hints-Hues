"use client";

import React from 'react';

const instaImages = [
  '/product-1.png',
  '/lifestyle.png',
  '/owner.png',
  '/hero-bg.png',
  '/product-1.png',
  '/lifestyle.png'
];

export default function InstagramGallery() {
  return (
    <section className="section container" style={{ padding: '100px 24px', textAlign: 'center' }}>
      <h2 style={{ 
        fontSize: '1.8rem', 
        textTransform: 'uppercase', 
        letterSpacing: '2px',
        marginBottom: '40px'
      }}>
        Instagram
      </h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '20px',
        marginBottom: '50px'
      }}>
        {instaImages.map((src, idx) => (
          <div key={idx} style={{
            aspectRatio: '1/1',
            backgroundImage: `url(${src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '16px',
            overflow: 'hidden',
            cursor: 'pointer',
            transition: 'transform 0.4s ease, box-shadow 0.4s ease',
            boxShadow: 'var(--shadow-soft)'
          }} className="insta-card">
            <div style={{
              width: '100%',
              height: '100%',
              background: 'rgba(0,0,0,0)',
              transition: 'background 0.3s ease'
            }} className="insta-overlay" />
          </div>
        ))}
      </div>

      <button className="btn-outline">
        Follow along
      </button>

      <style jsx>{`
        .insta-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-hover);
        }
        .insta-card:hover .insta-overlay {
          background: rgba(255,255,255,0.2);
        }
      `}</style>
    </section>
  );
}
