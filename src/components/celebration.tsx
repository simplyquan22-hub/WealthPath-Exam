"use client";

import React, { useState, useEffect, useMemo } from 'react';

const PARTICLE_COUNT = 150;
const SPREAD = 80; // How far particles spread horizontally
const GRAVITY = 0.8;

interface Particle {
  id: number;
  style: React.CSSProperties;
}

const Celebration = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const newParticles: Particle[] = Array.from({ length: PARTICLE_COUNT }).map((_, i) => {
      const angle = (Math.random() - 0.5) * 2 * SPREAD;
      const initialVelocity = Math.random() * 25 + 20; // Vertical velocity
      
      const x = Math.sin(angle * (Math.PI / 180)) * initialVelocity * (Math.random() * 2 + 1); // Horizontal velocity
      const y = -initialVelocity * (Math.random() * 0.5 + 0.5);

      const duration = Math.random() * 2000 + 3000; // 3-5 seconds
      const delay = Math.random() * 200;

      const colors = ['hsl(var(--primary))', 'hsl(var(--accent))', '#ffffff', '#fde047' /* yellow-300 */];
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      const width = Math.random() * 8 + 6;
      const height = Math.random() * 8 + 6;
      const rotation = Math.random() * 360;
      const rotationSpeed = Math.random() * 720 - 360;

      return {
        id: i,
        style: {
          '--initial-x': `${x}vw`,
          '--initial-y': `${y}vh`,
          '--duration': `${duration}ms`,
          '--delay': `${delay}ms`,
          '--color': color,
          '--rotation-start': `${rotation}deg`,
          '--rotation-end': `${rotation + rotationSpeed}deg`,
          width: `${width}px`,
          height: `${height}px`,
          backgroundColor: color,
        } as React.CSSProperties,
      };
    });
    setParticles(newParticles);
  }, []);

  return (
    <>
      <style jsx>{`
        @keyframes fall-and-fade {
          0% {
            transform: translate(0, 0) rotate(var(--rotation-start));
            opacity: 1;
          }
          100% {
            transform: translate(var(--initial-x), calc(100vh + 50px)) rotate(var(--rotation-end));
            opacity: 0;
          }
        }
        .particle {
          position: absolute;
          top: 0%;
          left: 50%;
          will-change: transform, opacity;
          animation-name: fall-and-fade;
          animation-timing-function: cubic-bezier(0.1, 0.5, 0.4, 1);
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
