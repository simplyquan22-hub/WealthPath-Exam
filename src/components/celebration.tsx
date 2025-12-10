"use client";

import React, { useState, useEffect } from 'react';

const PARTICLE_COUNT = 150;
const SPREAD = 80;
const GRAVITY = 0.5;

interface Particle {
  id: number;
  style: React.CSSProperties;
}

const Celebration = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const newParticles: Particle[] = Array.from({ length: PARTICLE_COUNT }).map((_, i) => {
      const isStreamer = Math.random() > 0.7;
      const angle = Math.random() * 360;
      const initialVelocity = Math.random() * 35 + 20; // Increased velocity

      const x = Math.cos(angle * (Math.PI / 180)) * SPREAD * (Math.random() + 0.5);
      const y = Math.sin(angle * (Math.PI / 180)) * SPREAD * (Math.random() + 0.5);
      
      const duration = Math.random() * 2000 + 3000;
      const delay = Math.random() * 100;

      const colors = ['hsl(var(--primary))', 'hsl(var(--accent))', '#ffffff', '#fde047' /* yellow-300 */];
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      const rotation = Math.random() * 360;
      const rotationSpeed = (Math.random() - 0.5) * 1080;

      return {
        id: i,
        style: {
          '--final-x': `${x}px`,
          '--final-y': `${y}px`,
          '--duration': `${duration}ms`,
          '--delay': `${delay}ms`,
          '--color': color,
          '--rotation-start': `${rotation}deg`,
          '--rotation-end': `${rotation + rotationSpeed}deg`,
          width: isStreamer ? '8px' : `${Math.random() * 6 + 4}px`,
          height: isStreamer ? '50px' : `${Math.random() * 6 + 4}px`,
          backgroundColor: color,
          borderRadius: isStreamer ? '0' : '50%',
        } as React.CSSProperties,
      };
    });
    setParticles(newParticles);
  }, []);

  return (
    <>
      <style jsx>{`
        @keyframes confetti-burst {
          0% {
            transform: scale(0) rotate(var(--rotation-start));
            opacity: 1;
          }
          60% {
            transform: scale(1.2) translate(var(--final-x), var(--final-y)) rotate(var(--rotation-end));
            opacity: 1;
          }
          100% {
            transform: scale(1.2) translate(var(--final-x), calc(var(--final-y) + 200px)) rotate(calc(var(--rotation-end) + 90deg));
            opacity: 0;
          }
        }
        .particle {
          position: absolute;
          top: 50%;
          left: 50%;
          will-change: transform, opacity;
          animation-name: confetti-burst;
          animation-timing-function: cubic-bezier(.17,.67,.83,.67);
          animation-fill-mode: forwards;
          animation-duration: var(--duration);
          animation-delay: var(--delay);
          pointer-events: none;
        }
      `}</style>
      <div className="absolute inset-0 z-50 overflow-hidden" aria-hidden="true">
        {particles.map(p => (
          <div key={p.id} className="particle" style={p.style} />
        ))}
      </div>
    </>
  );
};

export default Celebration;
