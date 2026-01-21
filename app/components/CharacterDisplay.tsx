'use client';

import { Character } from '../types/character';

interface CharacterDisplayProps {
  character: Character | null;
}

export default function CharacterDisplay({ character }: CharacterDisplayProps) {
  if (!character) return null;

  return (
    <div className="relative z-10 animate-character-appear">
      <div className="relative">
        {/* Mysterious glow around character */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-indigo-500/20 rounded-full blur-2xl animate-pulse-slow-delayed"></div>
        </div>

        {/* Character Sprite/Emoji with mysterious glow */}
        <div className="text-6xl md:text-8xl drop-shadow-2xl animate-bounce-slow filter drop-shadow-[0_0_20px_rgba(196,181,253,0.5)]">
          {character.emoji}
        </div>

        {/* Whimsical sparkles around character */}
        <div className="absolute -top-4 -left-4 w-1 h-1 bg-amber-300 rounded-full animate-sparkle-1"></div>
        <div className="absolute -top-2 -right-6 w-1 h-1 bg-purple-300 rounded-full animate-sparkle-2"></div>
        <div className="absolute -bottom-2 -left-6 w-1 h-1 bg-indigo-300 rounded-full animate-sparkle-3"></div>
        <div className="absolute -bottom-4 -right-4 w-1 h-1 bg-violet-300 rounded-full animate-sparkle-1"></div>

        {/* Elegant Character Info Card - Vogue style */}
        <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-64 rounded-sm border border-amber-500/30 bg-gradient-to-br from-slate-950/95 via-purple-950/90 to-indigo-950/95 backdrop-blur-xl shadow-2xl p-4">
          {/* Decorative line */}
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent mx-auto mb-3"></div>
          
          <h3 className="text-xl font-light tracking-wider text-center mb-1 text-amber-50/90 uppercase">
            {character.name}
          </h3>
          <p className="text-xs font-light text-center text-purple-300/70 tracking-[0.2em] uppercase mb-4">
            {character.class}
          </p>
          
          <div className="flex justify-center gap-3 text-xs border-t border-amber-500/20 pt-4">
            <span className="px-3 py-1.5 border border-rose-500/30 bg-rose-950/30 rounded-sm text-rose-200/90 font-light tracking-wide uppercase text-[10px]">
              STR: {character.attributes.strength}
            </span>
            <span className="px-3 py-1.5 border border-indigo-500/30 bg-indigo-950/30 rounded-sm text-indigo-200/90 font-light tracking-wide uppercase text-[10px]">
              INT: {character.attributes.intelligence}
            </span>
            <span className="px-3 py-1.5 border border-violet-500/30 bg-violet-950/30 rounded-sm text-violet-200/90 font-light tracking-wide uppercase text-[10px]">
              AGI: {character.attributes.agility}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
