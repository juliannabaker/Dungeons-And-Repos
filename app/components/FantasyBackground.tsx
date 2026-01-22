'use client';

import { useState, useEffect } from 'react';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  twinkleDelay: number;
}

export default function FantasyBackground() {
  // Generate random stars only on client to avoid hydration mismatch
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    // Generate stars only on client side
    const generatedStars = Array.from({ length: 100 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.8 + 0.2,
      twinkleDelay: Math.random() * 3,
    }));
    setStars(generatedStars);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Dark night sky with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-purple-950 to-indigo-950">
        {/* Stars */}
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-white"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
              animation: `twinkle 3s ease-in-out infinite`,
              animationDelay: `${star.twinkleDelay}s`,
            }}
          />
        ))}

        {/* Moon */}
        <div className="absolute top-16 right-16 w-32 h-32">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-100 to-yellow-200 rounded-full blur-xl opacity-30 animate-pulse-slow"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-yellow-100 rounded-full shadow-2xl"></div>
          <div className="absolute top-4 right-4 w-8 h-8 bg-slate-800/30 rounded-full"></div>
          <div className="absolute top-8 left-6 w-4 h-4 bg-slate-800/20 rounded-full"></div>
        </div>

        {/* Mysterious mist/fog layers */}
        <div className="absolute bottom-0 left-0 right-0 h-1/3">
          <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 via-indigo-900/30 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-full">
            <div className="absolute bottom-0 left-0 w-96 h-64 bg-purple-500/10 rounded-full blur-3xl animate-mist-float-1"></div>
            <div className="absolute bottom-0 right-0 w-80 h-56 bg-indigo-500/10 rounded-full blur-3xl animate-mist-float-2"></div>
            <div className="absolute bottom-0 left-1/3 w-72 h-48 bg-violet-500/10 rounded-full blur-3xl animate-mist-float-3"></div>
          </div>
        </div>
      </div>

      {/* Dark mysterious landscape */}
      <div className="absolute bottom-0 left-0 right-0 h-2/3">
        {/* Silhouette mountains in the background */}
        <div className="absolute bottom-0 left-0 w-full h-3/4">
          <svg className="w-full h-full" viewBox="0 0 1200 400" preserveAspectRatio="none">
            <polygon
              points="0,400 200,180 400,220 600,150 800,200 1000,120 1200,180 1200,400"
              fill="#1a1a2e"
              className="opacity-80"
            />
            <polygon
              points="0,400 150,220 300,250 500,180 700,220 900,150 1200,200 1200,400"
              fill="#16213e"
              className="opacity-70"
            />
          </svg>
        </div>

        {/* Dark forest silhouette */}
        <div className="absolute bottom-0 left-0 w-full h-1/2">
          <svg className="w-full h-full" viewBox="0 0 1200 300" preserveAspectRatio="none">
            <polygon
              points="0,300 50,250 100,280 200,200 300,240 400,180 500,220 600,160 700,200 800,140 900,180 1000,120 1100,160 1200,150 1200,300"
              fill="#0f172a"
              className="opacity-90"
            />
          </svg>
        </div>

        {/* Ground with mysterious glow */}
        <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-slate-900 via-slate-800 to-transparent">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
        </div>

        {/* Whimsical glowing orbs */}
        <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-purple-400 rounded-full blur-sm animate-float-orb-1 shadow-lg shadow-purple-400/50"></div>
        <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-indigo-400 rounded-full blur-sm animate-float-orb-2 shadow-lg shadow-indigo-400/50"></div>
        <div className="absolute bottom-1/5 left-2/3 w-2.5 h-2.5 bg-violet-400 rounded-full blur-sm animate-float-orb-3 shadow-lg shadow-violet-400/50"></div>
      </div>
    </div>
  );
}
