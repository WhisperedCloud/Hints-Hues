"use client";

import React, { useEffect, useRef } from 'react';


const bentoItems = [
  { 
    id: 1, 
    title: 'Ocean Waves Tray', 
    subtitle: 'Signature Series',
    image: '/product_ocean_tray.png', 
    type: 'large', // Spans 2 rows, 2 cols on desktop
    glowColor: '100, 180, 220'
  },
  { 
    id: 2, 
    title: 'Resin Coaster, Blush', 
    subtitle: 'Best Seller',
    image: '/product-1.png', 
    type: 'wide', // Spans 1 row, 2 cols on desktop
    glowColor: '235, 200, 200'
  },
  { 
    id: 3, 
    title: 'Artisan Wood Board', 
    subtitle: 'Home Decor',
    image: '/product_serving_board.png', 
    type: 'square', // Spans 1 row, 1 col on desktop
    glowColor: '220, 190, 150'
  },
  { 
    id: 4, 
    title: 'Floral Pressed Coaster', 
    subtitle: 'Limited Edition',
    image: '/product_floral_coaster.png', 
    type: 'square', // Spans 1 row, 1 col on desktop
    glowColor: '240, 180, 200'
  }
];

export default function NewArrivals() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Magic Glow effect that tracks mouse
  useEffect(() => {
    const cards = document.querySelectorAll('.bento-card');
    
    const handleMouseMove = (e: Event) => {
      const mouseEvent = e as MouseEvent;
      cards.forEach((card) => {
        const rect = (card as HTMLElement).getBoundingClientRect();
        const x = mouseEvent.clientX - rect.left;
        const y = mouseEvent.clientY - rect.top;
        (card as HTMLElement).style.setProperty('--mouse-x', `${x}px`);
        (card as HTMLElement).style.setProperty('--mouse-y', `${y}px`);
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="shop" className="section container" style={{ padding: '120px 20px', background: 'var(--bg-color)' }}>
      <div style={{ textAlign: 'center', marginBottom: '80px' }}>
        <p style={{ 
          fontFamily: 'var(--font-body)', 
          color: 'var(--text-secondary)',
          textTransform: 'uppercase',
          letterSpacing: '4px',
          fontSize: '0.85rem',
          marginBottom: '15px'
        }}>Discover the Magic</p>
        <h2 style={{ 
          fontSize: '3.5rem', 
          fontFamily: 'var(--font-heading)',
          color: 'var(--text-primary)',
          margin: 0,
          lineHeight: 1
        }}>
          New Arrivals
        </h2>
      </div>

      <div className="bento-grid" ref={containerRef}>
        {bentoItems.map((item) => (
          <div 
            key={item.id} 
            className={`bento-card ${item.type}`}
            style={{ '--card-glow': item.glowColor } as any}
          >
            {/* The actual image background */}
            <div className="bento-image" style={{ backgroundImage: `url(${item.image})` }} />
            
            {/* Glassmorphism gradient overlay */}
            <div className="bento-overlay" />

            {/* Glowing border effect */}
            <div className="bento-border" />

            {/* Content overlay */}
            <div className="bento-content">
              <div className="bento-label">{item.subtitle}</div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', width: '100%' }}>
                <h3 className="bento-title">{item.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .bento-grid {
          display: grid;
          gap: 20px;
          max-width: 1200px;
          margin: 0 auto;
          /* Default to single column for mobile */
          grid-template-columns: 1fr;
        }

        @media (min-width: 768px) {
          .bento-grid {
            grid-template-columns: repeat(4, 1fr);
            grid-template-rows: repeat(2, 320px);
          }
          .bento-card.large {
            grid-column: span 2;
            grid-row: span 2;
          }
          .bento-card.wide {
            grid-column: span 2;
            grid-row: span 1;
          }
          .bento-card.square {
            grid-column: span 1;
            grid-row: span 1;
          }
        }

        .bento-card {
          position: relative;
          border-radius: 30px;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.5);
          cursor: pointer;
          min-height: 320px;
          transform: translateY(0);
          transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.4s ease;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
        }

        .bento-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(var(--card-glow), 0.3);
        }

        .bento-image {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          transition: transform 0.7s cubic-bezier(0.25, 1, 0.5, 1);
          z-index: 1;
        }

        .bento-card:hover .bento-image {
          transform: scale(1.08);
        }

        .bento-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 40%, rgba(0,0,0,0.05) 100%);
          z-index: 2;
          opacity: 0.8;
          transition: opacity 0.4s ease, background 0.4s ease;
        }

        .bento-card:hover .bento-overlay {
          opacity: 0.95;
          background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.1) 100%);
        }

        /* Magic Mouse Glow Border Effect */
        .bento-card::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 2px; /* Border thickness */
          background: radial-gradient(
            800px circle at var(--mouse-x) var(--mouse-y),
            rgba(var(--card-glow), 1),
            transparent 40%
          );
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.5s ease;
          z-index: 5;
          pointer-events: none;
        }

        .bento-card:hover::before {
          opacity: 1;
        }

        /* Magic Mouse Glow Background Effect */
        .bento-card::after {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(
            600px circle at var(--mouse-x) var(--mouse-y),
            rgba(var(--card-glow), 0.15),
            transparent 40%
          );
          z-index: 3;
          opacity: 0;
          transition: opacity 0.5s ease;
          pointer-events: none;
        }

        .bento-card:hover::after {
          opacity: 1;
        }

        .bento-content {
          position: absolute;
          inset: 0;
          padding: 30px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          z-index: 4;
        }

        .bento-label {
          align-self: flex-start;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          padding: 6px 16px;
          border-radius: 20px;
          color: #fff;
          font-family: var(--font-body);
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          border: 1px solid rgba(255,255,255,0.2);
          transform: translateY(-10px);
          opacity: 0;
          transition: transform 0.4s ease, opacity 0.4s ease;
        }

        .bento-card:hover .bento-label {
          transform: translateY(0);
          opacity: 1;
        }

        .bento-title {
          font-family: var(--font-heading);
          color: #fff;
          font-size: clamp(1.5rem, 3vw, 2.2rem);
          margin: 0;
          text-shadow: 0 4px 20px rgba(0,0,0,0.5);
          transform: translateY(10px);
          transition: transform 0.4s ease;
        }

        .bento-card:hover .bento-title {
          transform: translateY(0);
        }
        }
      `}</style>
    </section>
  );
}
