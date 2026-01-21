'use client';

import { Character } from '../types/character';

interface CharacterCardProps {
  character: Character;
  isSelected: boolean;
  onSelect: () => void;
}

export default function CharacterCard({ character, isSelected, onSelect }: CharacterCardProps) {
  const colorClasses: Record<Character['color'], string> = {
    red: 'border-rose-600/50 bg-gradient-to-br from-rose-950/40 via-red-950/30 to-rose-900/20 hover:from-rose-950/60 hover:via-red-950/50 hover:to-rose-900/40 hover:border-rose-500/80',
    blue: 'border-indigo-600/50 bg-gradient-to-br from-indigo-950/40 via-blue-950/30 to-indigo-900/20 hover:from-indigo-950/60 hover:via-blue-950/50 hover:to-indigo-900/40 hover:border-indigo-500/80',
    purple: 'border-violet-600/50 bg-gradient-to-br from-violet-950/40 via-purple-950/30 to-violet-900/20 hover:from-violet-950/60 hover:via-purple-950/50 hover:to-violet-900/40 hover:border-violet-500/80',
  };

  const glowClasses: Record<Character['color'], string> = {
    red: 'shadow-rose-500/20 hover:shadow-rose-500/40',
    blue: 'shadow-indigo-500/20 hover:shadow-indigo-500/40',
    purple: 'shadow-violet-500/20 hover:shadow-violet-500/40',
  };

  const selectedClasses = isSelected
    ? 'ring-2 ring-amber-400/60 ring-offset-2 ring-offset-slate-950 scale-105 shadow-2xl shadow-amber-500/30'
    : '';

  return (
    <button
      onClick={onSelect}
      className={`
        relative w-full max-w-sm rounded-lg border p-6 transition-all duration-500
        ${colorClasses[character.color]}
        ${glowClasses[character.color]}
        ${selectedClasses}
        transform hover:scale-[1.02] active:scale-95
        backdrop-blur-md
        group overflow-hidden
      `}
    >
      {/* Mysterious background glow effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/5 to-transparent"></div>
      
      {/* Whimsical sparkle effect when selected */}
      {isSelected && (
        <>
          <div className="absolute top-2 right-2 w-1 h-1 bg-amber-300 rounded-full animate-sparkle-1"></div>
          <div className="absolute top-4 left-3 w-1 h-1 bg-amber-200 rounded-full animate-sparkle-2"></div>
          <div className="absolute bottom-3 right-4 w-1 h-1 bg-amber-300 rounded-full animate-sparkle-3"></div>
        </>
      )}

      {/* Character Emoji/Icon with glow */}
      <div className="text-6xl mb-4 text-center drop-shadow-lg group-hover:drop-shadow-2xl transition-all duration-300 relative z-10">
        {character.emoji}
      </div>

      {/* Character Name - Vogue style typography */}
      <h3 className="text-2xl font-light tracking-wider text-center mb-2 text-amber-50/90 uppercase relative z-10">
        {character.name}
      </h3>

      {/* Character Class - elegant subtitle */}
      <p className="text-sm font-light text-center mb-4 text-purple-300/70 tracking-[0.2em] uppercase relative z-10">
        {character.class}
      </p>

      {/* Description - mysterious and elegant */}
      <p className="text-xs leading-relaxed text-gray-300/80 mb-5 text-center font-light italic relative z-10">
        {character.description}
      </p>

      {/* Attributes - sophisticated layout */}
      <div className="space-y-2.5 mt-5 relative z-10 border-t border-white/10 pt-4">
        <div className="flex justify-between items-center text-xs">
          <span className="font-light text-gray-400/80 tracking-wide uppercase text-[10px]">Strength</span>
          <span className="text-amber-200/90 font-light">{character.attributes.strength}</span>
        </div>
        <div className="flex justify-between items-center text-xs">
          <span className="font-light text-gray-400/80 tracking-wide uppercase text-[10px]">Agility</span>
          <span className="text-amber-200/90 font-light">{character.attributes.agility}</span>
        </div>
        <div className="flex justify-between items-center text-xs">
          <span className="font-light text-gray-400/80 tracking-wide uppercase text-[10px]">Intelligence</span>
          <span className="text-amber-200/90 font-light">{character.attributes.intelligence}</span>
        </div>
        <div className="flex justify-between items-center text-xs">
          <span className="font-light text-gray-400/80 tracking-wide uppercase text-[10px]">Wisdom</span>
          <span className="text-amber-200/90 font-light">{character.attributes.wisdom}</span>
        </div>
        <div className="flex justify-between items-center text-xs">
          <span className="font-light text-gray-400/80 tracking-wide uppercase text-[10px]">Charisma</span>
          <span className="text-amber-200/90 font-light">{character.attributes.charisma}</span>
        </div>
      </div>

      {/* Elegant selection indicator */}
      {isSelected && (
        <div className="absolute top-3 right-3 w-5 h-5 border border-amber-400/60 rounded-full flex items-center justify-center bg-amber-400/10 backdrop-blur-sm">
          <span className="text-amber-300 text-xs">✓</span>
        </div>
      )}
    </button>
  );
}
