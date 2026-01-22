'use client';

import { CharacterAppearance } from '../types/character';
import Image from 'next/image';

interface AppearanceSelectionProps {
  appearances: CharacterAppearance[];
  selectedAppearanceId?: string;
  onSelect: (appearance: CharacterAppearance) => void;
  characterName: string;
  characterClass: string;
}

export default function AppearanceSelection({
  appearances,
  selectedAppearanceId,
  onSelect,
  characterName,
  characterClass,
}: AppearanceSelectionProps) {
  return (
    <div className="space-y-6">
      {/* Appearance Options Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {appearances.map((appearance) => {
          const isSelected = selectedAppearanceId === appearance.id;
          return (
            <button
              key={appearance.id}
              onClick={() => onSelect(appearance)}
              className={`
                relative group rounded-lg border-2 p-4 transition-all duration-300
                ${isSelected 
                  ? 'border-purple-500/80 bg-purple-500/10 ring-2 ring-purple-400/60 ring-offset-2 ring-offset-slate-950' 
                  : 'border-purple-500/30 bg-transparent hover:border-purple-500/60 hover:bg-purple-500/5'
                }
                transform hover:scale-[1.02] active:scale-95
              `}
            >
              {/* Character Image */}
              <div className="relative w-full aspect-[2/3] mb-4 rounded-lg overflow-hidden bg-slate-900/50 flex items-center justify-center">
                <Image
                  src={appearance.imageUrl}
                  alt={appearance.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Appearance Name */}
              <h4 className="text-lg font-light tracking-wide text-center text-purple-50/90 uppercase">
                {appearance.name}
              </h4>

              {/* Selection Indicator */}
              {isSelected && (
                <div className="absolute top-4 right-4 w-6 h-6 border border-purple-400/60 rounded-full flex items-center justify-center bg-purple-400/10 backdrop-blur-sm">
                  <span className="text-purple-300 text-sm">✓</span>
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

