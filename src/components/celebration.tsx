"use client";

import React, { useState, useEffect } from 'react';

const PARTICLE_COUNT = 150;
const SPREAD = 80;

const Celebration = () => {
  const [particles, setParticles] = useState<React.ReactElement[]>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: PARTICLE_COUNT }).map((_, i) => {
      const angle = Math.random() * 360;
      const initialVelocity = Math.random() * 35 + 20;

      const x = Math.cos(angle * (Math.PI / 180)) * SPREAD * (Math.random() + 0.5);
      const y = Math.sin(angle * (Math.PI / 180)) * SPREAD * (Math.random() + 0.5);
      
      const duration = Math.random() * 2000 + 3000;
      const delay = Math.random() * 100;

      const colors = ['hsl(var(--primary))', 'hsl(var(--accent))', '#ffffff', '#fde047' /* yellow-300 */];
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      const rotation = Math.random() * 360;
      const rotationSpeed = (Math.random() - 0.5) * 1080;

      const style: React.CSSProperties = {
        '--final-x': `${x}px`,
        '--final-y': `${y}px`,
        '--duration': `${duration}ms`,
        '--delay': `${delay}ms`,
        '--color': color,
        '--rotation-start': `${rotation}deg`,
        '--rotation-end': `${rotation + rotationSpeed}deg`,
        width: `${Math.random() * 8 + 6}px`,
        height: `${Math.random() * 8 + 6}px`,
        backgroundColor: color,
        position: 'absolute',
        top: '50%',
        left: '50%',
        willChange: 'transform, opacity',
        animationName: 'confetti-burst',
        animationTimingFunction: 'cubic-bezier(.17,.67,.83,.67)',
        animationFillMode: 'forwards',
        animationDuration: `var(--duration)`,
        animationDelay: `var(--delay)`,
        pointerEvents: 'none',
      };

      return <div key={i} className="particle" style={style} />;
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
      `}</style>
      <div className="absolute inset-0 z-50 overflow-hidden" aria-hidden="true">
        {particles}
      </div>
    </>
  );
};

export default Celebration;
