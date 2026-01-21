'use client';

import { useState } from 'react';
import FantasyBackground from './components/FantasyBackground';
import CharacterSelectionModal from './components/CharacterSelectionModal';
import CharacterDisplay from './components/CharacterDisplay';
import { Character } from './types/character';

export default function Home() {
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSelectCharacter = (character: Character) => {
    setSelectedCharacter(character);
    setIsModalOpen(false);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Mysterious Fantasy Background */}
      <FantasyBackground />

      {/* Main Content */}
      <div className="relative z-20 h-screen flex flex-col items-center justify-center p-4 py-6">
        {/* Elegant Header - Vogue style */}
        <div className="text-center mb-4 animate-character-appear">
          <div className="inline-block mb-2">
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent mx-auto mb-3"></div>
            <h1 className="text-4xl md:text-6xl font-light tracking-[0.2em] mb-2 text-amber-50/90 uppercase drop-shadow-2xl">
              Dungeons
            </h1>
            <h1 className="text-4xl md:text-6xl font-light tracking-[0.2em] mb-2 bg-gradient-to-r from-amber-300 via-amber-200 to-amber-300 bg-clip-text text-transparent drop-shadow-2xl">
              & Repos
            </h1>
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent mx-auto mt-3"></div>
          </div>
          <p className="text-xs font-light text-gray-400/70 tracking-[0.3em] uppercase mt-3">
            A mysterious journey awaits
          </p>
          
          {/* DnD Story Description - Compact */}
          <div className="max-w-2xl mx-auto mt-4 px-4">
            <div className="border-l-2 border-amber-500/30 pl-4 py-2">
              <p className="text-xs md:text-sm font-light leading-relaxed text-gray-300/80 italic mb-2">
                In the shadowed realm where code meets legend, you stand at the threshold of an extraordinary quest. 
                The ancient repositories hold secrets untold, guarded by digital dragons and mystical algorithms. 
                Your journey begins not with a sword, but with a choice—a hero to guide you through the labyrinthine 
                dungeons of development.
              </p>
              <p className="text-xs md:text-sm font-light leading-relaxed text-gray-300/80 italic">
                Each character you select carries unique powers: the <span className="text-rose-300/90 font-normal">Warrior</span> with 
                unyielding strength, the <span className="text-indigo-300/90 font-normal">Mage</span> wielding arcane knowledge, 
                or the <span className="text-violet-300/90 font-normal">Rogue</span> moving through shadows with unmatched agility. 
                Choose wisely, for your companion will shape the path ahead in this realm where every commit is a spell, 
                every pull request a quest, and every merge a battle won.
              </p>
            </div>
          </div>
        </div>

        {/* Character Display Area */}
        <div className="w-full flex-1 flex items-center justify-center min-h-0">
          {selectedCharacter ? (
            <CharacterDisplay character={selectedCharacter} />
          ) : (
            <div className="text-center animate-fade-in">
              <p className="text-xl md:text-2xl font-light tracking-wider text-amber-50/60 mb-2 uppercase">
                No hero chosen
              </p>
              <p className="text-xs font-light text-gray-400/60 tracking-[0.2em] uppercase mb-4">
                Select your mysterious companion
              </p>
              {/* Whimsical decorative dots */}
              <div className="flex justify-center gap-2 mt-3">
                <div className="w-1 h-1 bg-amber-400/40 rounded-full animate-pulse"></div>
                <div className="w-1 h-1 bg-purple-400/40 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-1 h-1 bg-indigo-400/40 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          )}
        </div>

        {/* Elegant Action Buttons - Vogue style */}
        <div className="mt-4 flex flex-col sm:flex-row gap-4">
          <button
            onClick={handleOpenModal}
            className="px-10 py-4 rounded-sm border border-amber-500/40 bg-gradient-to-r from-amber-600/20 to-amber-500/20 backdrop-blur-sm text-amber-200/90 font-light tracking-wider uppercase text-xs hover:from-amber-600/30 hover:to-amber-500/30 hover:border-amber-500/60 transition-all duration-300 shadow-lg shadow-amber-500/10 hover:shadow-amber-500/20"
          >
            {selectedCharacter ? 'Change Hero' : 'Select Hero'}
          </button>
          {selectedCharacter && (
            <button
              onClick={() => setSelectedCharacter(null)}
              className="px-10 py-4 rounded-sm border border-gray-500/30 bg-transparent text-gray-400/80 font-light tracking-wider uppercase text-xs hover:bg-gray-500/10 hover:border-gray-500/50 hover:text-gray-300/90 transition-all duration-300"
            >
              Clear
            </button>
          )}
        </div>

        {/* Character Selection Modal */}
        <CharacterSelectionModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onSelectCharacter={handleSelectCharacter}
          selectedCharacterId={selectedCharacter?.id}
        />
      </div>
    </div>
  );
}
