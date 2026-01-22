'use client';

import { useState } from 'react';
import FantasyBackground from './components/FantasyBackground';
import CharacterSelectionModal from './components/CharacterSelectionModal';
import CharacterDisplay from './components/CharacterDisplay';
import { SelectedCharacter } from './types/character';
import Button from './components/ui/Button';
import ButtonGroup from './components/ui/ButtonGroup';

export default function Home() {
  const [selectedCharacter, setSelectedCharacter] = useState<SelectedCharacter | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSelectCharacter = (character: SelectedCharacter) => {
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
          <div className="inline-block mb-2 px-6 py-4 rounded-lg bg-slate-950/70 backdrop-blur-md border border-purple-500/20">
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent mx-auto mb-3"></div>
            <h1 className="text-4xl md:text-6xl font-light tracking-[0.2em] mb-2 text-purple-50/90 uppercase drop-shadow-2xl">
              Dungeons
            </h1>
            <h1 className="text-4xl md:text-6xl font-light tracking-[0.2em] mb-2 bg-gradient-to-r from-purple-300 via-violet-200 to-purple-300 bg-clip-text text-transparent drop-shadow-2xl uppercase">
              & Repos
            </h1>
              <p className="text-xs font-light text-gray-300/90 tracking-[0.3em] uppercase mt-3 px-4 py-2 rounded-lg bg-slate-950/60 backdrop-blur-sm inline-block">
                  A mysterious journey awaits
              </p>
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent mx-auto mt-3"></div>
          </div>
            <div>
            </div>

          {/* DnD Story Description - Compact */}
          <div className="max-w-2xl mx-auto mt-4 px-4">
            <div className="border-l-2 border-purple-500/30 pl-4 py-3 rounded-r-lg bg-slate-950/70 backdrop-blur-md border-r border-t border-b border-purple-500/20">
              <p className="text-xs md:text-sm font-light leading-relaxed text-gray-200/90 italic mb-2">
                In the shadowed realm where code meets legend, you stand at the threshold of an extraordinary quest.
                The ancient repositories hold secrets untold, guarded by digital dragons and mystical algorithms.
                Your journey begins not with a sword, but with a choice—a hero to guide you through the labyrinthine
                dungeons of development.
              </p>
              <p className="text-xs md:text-sm font-light leading-relaxed text-gray-200/90 italic">
                Three paths await: the <span className="text-rose-300 font-normal">Warrior</span> with unyielding strength,
                the <span className="text-indigo-300 font-normal">Mage</span> wielding arcane mastery,
                and the <span className="text-violet-300 font-normal">Rogue</span> moving through shadows with unmatched precision.
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
            <div className="text-center animate-fade-in px-6 py-4 rounded-lg bg-slate-950/70 backdrop-blur-md border border-purple-500/20">
              <p className="text-xl md:text-2xl font-light tracking-wider text-purple-50/90 mb-2 uppercase">
                No hero chosen
              </p>
              <p className="text-xs font-light text-gray-300/80 tracking-[0.2em] uppercase mb-4">
                Select your mysterious companion
              </p>
              {/* Whimsical decorative dots */}
              <div className="flex justify-center gap-2 mt-3">
                <div className="w-1 h-1 bg-purple-400/60 rounded-full animate-pulse"></div>
                <div className="w-1 h-1 bg-violet-400/60 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-1 h-1 bg-indigo-400/60 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          )}
        </div>

        {/* Elegant Action Buttons - Vogue style */}
        <div className="mt-4">
          <ButtonGroup align="center" direction="row">
            <Button variant="primary" onClick={handleOpenModal}>
              {selectedCharacter ? 'Change Hero' : 'Select Hero'}
            </Button>
            {selectedCharacter && (
              <Button variant="secondary" onClick={() => setSelectedCharacter(null)}>
                Clear
              </Button>
            )}
          </ButtonGroup>
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
