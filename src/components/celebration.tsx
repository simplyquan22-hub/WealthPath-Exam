"use client";

import React from 'react';
import { cn } from '@/lib/utils';

const RIPPLE_COUNT = 5;

const Celebration = () => {
  return (
    <>
      <style jsx>{`
        @keyframes ripple-effect {
          0% {
            transform: scale(0);
            opacity: 0.8;
          }
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        .ripple {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 200px;
          height: 200px;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          animation-name: ripple-effect;
          animation-timing-function: ease-out;
          animation-duration: 1200ms;
          animation-fill-mode: forwards;
          pointer-events: none;
        }
      `}</style>
      <div className="absolute inset-0 z-50 overflow-hidden flex items-center justify-center" aria-hidden="true">
        {Array.from({ length: RIPPLE_COUNT }).map((_, i) => (
          <div
            key={i}
            className="ripple"
            style={{
              background: 'radial-gradient(circle, transparent, #22c55e 200%)',
              animationDelay: `${i * 150}ms`,
            }}
          />
        ))}
      </div>
    </>
  );
};

export default Celebration;
