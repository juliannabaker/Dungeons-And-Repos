'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  twinkleDelay: number;
}

interface LightningBug {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
  pathX: number;
  pathY: number;
}

export default function FantasyBackground() {
  // Generate random stars only on client to avoid hydration mismatch
  const [stars, setStars] = useState<Star[]>([]);
  const [lightningBugs, setLightningBugs] = useState<LightningBug[]>([]);

  useEffect(() => {
    // Generate subtle twinkly stars
    const generatedStars = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 1.5 + 0.5,
      opacity: Math.random() * 0.4 + 0.1, // More subtle
      twinkleDelay: Math.random() * 3,
    }));
    setStars(generatedStars);

    // Generate lightning bugs (fireflies)
    const generatedBugs = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 20 + 15, // Blurred size
      opacity: Math.random() * 0.3 + 0.15, // Subtle glow
      duration: Math.random() * 8 + 12, // Slow movement
      delay: Math.random() * 5,
      pathX: (Math.random() - 0.5) * 200, // Random path
      pathY: (Math.random() - 0.5) * 200,
    }));
    setLightningBugs(generatedBugs);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/assets/images/backgrounds/background-1.png"
          alt="Fantasy Background"
          fill
          className="object-cover"
          priority
          quality={90}
        />
      </div>

      {/* Subtle twinkly lights (stars) */}
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
            animation: `twinkle 4s ease-in-out infinite`,
            animationDelay: `${star.twinkleDelay}s`,
          }}
        />
      ))}

      {/* Lightning bug effects (blurred, moving) */}
      {lightningBugs.map((bug) => (
        <div
          key={bug.id}
          className="absolute rounded-full bg-purple-200/40"
          style={{
            left: `${bug.x}%`,
            top: `${bug.y}%`,
            width: `${bug.size}px`,
            height: `${bug.size}px`,
            opacity: bug.opacity,
            filter: 'blur(10px)',
            animation: `lightning-bug-float ${bug.duration}s ease-in-out infinite`,
            animationDelay: `${bug.delay}s`,
            boxShadow: `0 0 ${bug.size * 0.8}px rgba(168, 85, 247, 0.25)`,
          }}
        >
          {/* Inner glow */}
          <div
            className="absolute inset-0 rounded-full bg-purple-300/20"
            style={{
              filter: 'blur(5px)',
            }}
          />
        </div>
      ))}
    </div>
  );
}
