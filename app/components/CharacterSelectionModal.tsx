'use client';

import { Character, characters } from '../types/character';
import CharacterCard from './CharacterCard';
import { useState } from 'react';

interface CharacterSelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCharacter: (character: Character) => void;
  selectedCharacterId?: string;
}

export default function CharacterSelectionModal({
  isOpen,
  onClose,
  onSelectCharacter,
  selectedCharacterId,
}: CharacterSelectionModalProps) {
  const [tempSelectedId, setTempSelectedId] = useState<string | undefined>(selectedCharacterId);

  if (!isOpen) return null;

  const handleConfirm = () => {
    if (tempSelectedId) {
      const character = characters.find((c) => c.id === tempSelectedId);
      if (character) {
        onSelectCharacter(character);
        onClose();
      }
    }
  };

  const handleSelect = (characterId: string) => {
    setTempSelectedId(characterId);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Dark mysterious backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md animate-fade-in"></div>

      {/* Elegant Modal Content - Vogue style */}
      <div
        className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-sm border border-amber-500/20 bg-gradient-to-br from-slate-950/95 via-purple-950/95 to-indigo-950/95 shadow-2xl animate-scale-in p-8 md:p-12 backdrop-blur-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Decorative corner elements - Vogue style */}
        <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-amber-500/30"></div>
        <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-amber-500/30"></div>
        <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-amber-500/30"></div>
        <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-amber-500/30"></div>

        {/* Elegant Header - Vogue typography */}
        <div className="text-center mb-10">
          <div className="inline-block mb-4">
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent mx-auto mb-4"></div>
            <h2 className="text-5xl md:text-6xl font-light tracking-[0.15em] mb-3 text-amber-50/90 uppercase">
              Select Your
            </h2>
            <h2 className="text-5xl md:text-6xl font-light tracking-[0.15em] mb-3 bg-gradient-to-r from-amber-300 via-amber-200 to-amber-300 bg-clip-text text-transparent">
              Mysterious Hero
            </h2>
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent mx-auto mt-4"></div>
          </div>
          <p className="text-sm font-light text-gray-400/70 tracking-[0.2em] uppercase mt-6">
            Choose wisely, for destiny awaits
          </p>
        </div>

        {/* Character Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {characters.map((character) => (
            <CharacterCard
              key={character.id}
              character={character}
              isSelected={tempSelectedId === character.id}
              onSelect={() => handleSelect(character.id)}
            />
          ))}
        </div>

        {/* Elegant Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-end mt-10 pt-8 border-t border-amber-500/20">
          <button
            onClick={onClose}
            className="px-8 py-3 rounded-sm border border-amber-500/30 bg-transparent text-amber-200/80 font-light tracking-wide uppercase text-xs hover:bg-amber-500/10 hover:border-amber-500/50 transition-all duration-300"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirm}
            disabled={!tempSelectedId}
            className="px-8 py-3 rounded-sm bg-gradient-to-r from-amber-600/80 to-amber-500/80 text-slate-950 font-light tracking-wide uppercase text-xs hover:from-amber-500 hover:to-amber-400 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40"
          >
            Begin Journey
          </button>
        </div>

        {/* Elegant Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-8 h-8 border border-amber-500/30 rounded-sm bg-transparent text-amber-200/70 hover:text-amber-200 hover:bg-amber-500/10 hover:border-amber-500/50 font-light text-xl flex items-center justify-center transition-all duration-300"
          aria-label="Close modal"
        >
          ×
        </button>
      </div>
    </div>
  );
}
