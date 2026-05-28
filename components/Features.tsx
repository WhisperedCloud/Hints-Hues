"use client";

import React from 'react';
import { ShieldCheck, HeartHandshake, PackageOpen } from 'lucide-react';

const features = [
  {
    icon: <ShieldCheck size={32} strokeWidth={1.5} />,
    title: 'Quality Materials',
    description: 'We use only premium, UV-resistant resin and high-grade pigments to ensure your art lasts a lifetime without yellowing.'
  },
  {
    icon: <HeartHandshake size={32} strokeWidth={1.5} />,
    title: 'Handcrafted with Love',
    description: 'Every piece is poured, sanded, and polished by hand. No two pieces are exactly alike, giving you true unique art.'
  },
  {
    icon: <PackageOpen size={32} strokeWidth={1.5} />,
    title: 'Safe Packaging',
    description: 'We pack your orders securely with eco-friendly materials so they arrive in pristine condition, ready to be displayed.'
  }
];

export default function Features() {
  return (
    <section className="section" style={{ background: 'var(--bg-secondary)', padding: '120px 0' }}>
      {/* Top Wave Divider */}
      <div className="wave-divider" style={{ position: 'absolute', top: '-1px', left: 0, transform: 'rotate(180deg)' }}>
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="var(--bg-color)"></path>
        </svg>
      </div>

      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h2 style={{ 
            fontSize: '2rem', 
            textTransform: 'uppercase', 
            letterSpacing: '2px',
            color: 'var(--text-primary)'
          }}>
            Why choose Hints&Hues
          </h2>
        </div>

        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '40px',
          justifyContent: 'center'
        }}>
          {features.map((feature, idx) => (
            <div key={idx} style={{
              flex: '1 1 300px',
              maxWidth: '350px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              gap: '20px'
            }}>
              <div style={{
                color: 'var(--text-primary)'
              }}>
                {feature.icon}
              </div>
              <h3 style={{ 
                fontFamily: 'var(--font-heading)', 
                fontSize: '1.4rem',
                margin: 0
              }}>
                {feature.title}
              </h3>
              <p style={{
                fontFamily: 'var(--font-body)',
                color: 'var(--text-secondary)',
                lineHeight: 1.6,
                margin: 0
              }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Wave Divider */}
      <div className="wave-divider" style={{ position: 'absolute', bottom: '-1px', left: 0 }}>
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="var(--bg-color)"></path>
        </svg>
      </div>
    </section>
  );
}
