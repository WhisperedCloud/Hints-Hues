"use client";

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ShoppingBag } from 'lucide-react';
import Link from 'next/link';

const images = [
  '/lifestyle.png',
  '/pro2.png'
];

export default function StylingInspirations() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <section className="section container" style={{ padding: '80px 24px', overflow: 'hidden' }}>
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h2 style={{
          fontSize: '2rem',
          textTransform: 'uppercase',
          letterSpacing: '2px',
          color: 'var(--text-primary)'
        }}>
          Styling Inspirations
        </h2>
      </div>

      <div style={{
        position: 'relative',
        width: '100%',
        maxWidth: '1000px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {/* Soft pink background blob */}
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '-5%',
          width: '50%',
          height: '110%',
          background: 'var(--pastel-pink)',
          borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%',
          opacity: 0.5,
          zIndex: 0
        }} />

        {/* Navigation Arrows */}
        <button onClick={prevSlide} style={{
          position: 'absolute',
          left: '-20px',
          zIndex: 2,
          background: 'rgba(255, 255, 255, 0.8)',
          border: '1px solid rgba(0,0,0,0.05)',
          borderRadius: '50%',
          padding: '10px',
          cursor: 'pointer',
          color: 'var(--text-secondary)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: 'var(--shadow-soft)'
        }}>
          <ChevronLeft size={32} strokeWidth={1} />
        </button>

        <button onClick={nextSlide} style={{
          position: 'absolute',
          right: '-20px',
          zIndex: 2,
          background: 'rgba(255, 255, 255, 0.8)',
          border: '1px solid rgba(0,0,0,0.05)',
          borderRadius: '50%',
          padding: '10px',
          cursor: 'pointer',
          color: 'var(--text-secondary)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: 'var(--shadow-soft)'
        }}>
          <ChevronRight size={32} strokeWidth={1} />
        </button>

        {/* Image Container */}
        <div style={{
          width: '80%',
          aspectRatio: '16/9',
          position: 'relative',
          zIndex: 1,
          borderRadius: '20px',
          overflow: 'hidden',
          boxShadow: 'var(--shadow-soft)'
        }}>
          <div style={{
            width: '100%',
            height: '100%',
            backgroundImage: `url(${images[currentIndex]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transition: 'background-image 0.5s ease-in-out'
          }} />
        </div>
      </div>
    </section>
  );
}
