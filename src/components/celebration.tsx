"use client";

import React, { useState, useEffect } from 'react';

const PARTICLE_COUNT = 150;
const SPREAD = 60;
const GRAVITY = 0.5;

interface Particle {
  id: number;
  style: React.CSSProperties;
}

const Celebration = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const newParticles: Particle[] = Array.from({ length: PARTICLE_COUNT }).map((_, i) => {
      const isStreamer = Math.random() > 0.5;
      const angle = Math.random() * 360;
      const initialVelocity = Math.random() * 20 + 15;

      const x = Math.cos(angle * (Math.PI / 180)) * initialVelocity * 0.8;
      const y = Math.sin(angle * (Math.PI / 180)) * initialVelocity;
      
      const duration = Math.random() * 2000 + 3000;
      const delay = Math.random() * 200;

      const colors = ['hsl(var(--primary))', 'hsl(var(--accent))', '#ffffff', '#fde047' /* yellow-300 */];
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      const rotation = Math.random() * 360;
      const rotationSpeed = Math.random() * 1080 - 540;

      return {
        id: i,
        style: {
          '--initial-x': `${x}vw`,
          '--initial-y': `${y}vh`,
          '--final-y': `${y + 60}vh`,
          '--duration': `${duration}ms`,
          '--delay': `${delay}ms`,
          '--color': color,
          '--rotation-start': `${rotation}deg`,
          '--rotation-end': `${rotation + rotationSpeed}deg`,
          width: isStreamer ? '6px' : `${Math.random() * 8 + 8}px`,
          height: isStreamer ? '30px' : `${Math.random() * 8 + 8}px`,
          backgroundColor: color,
        } as React.CSSProperties,
      };
    });
    setParticles(newParticles);
  }, []);

  return (
    <>
      <style jsx>{`
        @keyframes pop-and-fall {
          0% {
            transform: translate(0, 0) rotate(var(--rotation-start));
            opacity: 1;
          }
          20% {
            opacity: 1;
          }
          100% {
            transform: translate(var(--initial-x), var(--final-y)) rotate(var(--rotation-end));
            opacity: 0;
          }
        }
        .particle {
          position: absolute;
          top: 50%;
          left: 50%;
          will-change: transform, opacity;
          animation-name: pop-and-fall;
          animation-timing-function: cubic-bezier(0.1, 0.9, 0.4, 1);
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
