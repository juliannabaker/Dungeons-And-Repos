'use client';

import { Character, SelectedCharacter, characters } from '../types/character';
import CharacterCard from './CharacterCard';
import AppearanceSelection from './AppearanceSelection';
import CharacterNaming from './CharacterNaming';
import { useState, useEffect, useRef } from 'react';
import Modal, { ModalRef } from './ui/Modal';
import Button from './ui/Button';
import ButtonGroup from './ui/ButtonGroup';

type ModalStep = 'type' | 'appearance' | 'naming';

// Array of fantasy character names for random selection
const CHARACTER_NAMES = [
  'Arannis', 'Thalira', 'Rurik', 'Fenwick', 'Seraphine',
  'Caldor', 'Astrielle', 'Draven', 'Ysolde', 'Thorin',
  'Lirael', 'Eldrin', 'Maelis', 'Gideon', 'Nyssa',
  'Faelar', 'Vespera', 'Beren', 'Morwen', 'Zarek',
  'Valen', 'Elowen', 'Dain', 'Sylvara', 'Kaelen',
  'Aric', 'Isolde', 'Thalor', 'Mirael', 'Zephyr'
];

// Function to get a random name from the array
const getRandomName = (): string => {
  const randomIndex = Math.floor(Math.random() * CHARACTER_NAMES.length);
  return CHARACTER_NAMES[randomIndex];
};

interface CharacterSelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCharacter: (character: SelectedCharacter) => void;
  selectedCharacterId?: string;
}

export default function CharacterSelectionModal({
  isOpen,
  onClose,
  onSelectCharacter,
  selectedCharacterId,
}: CharacterSelectionModalProps) {
  const [currentStep, setCurrentStep] = useState<ModalStep>('type');
  const [selectedCharacterType, setSelectedCharacterType] = useState<Character | null>(null);
  const [selectedAppearance, setSelectedAppearance] = useState<Character['appearances'][0] | null>(null);
  const [customName, setCustomName] = useState('');
  const modalRef = useRef<ModalRef>(null);

  // Reset state when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      setCurrentStep('type');
      setSelectedCharacterType(null);
      setSelectedAppearance(null);
      setCustomName('');
    }
  }, [isOpen]);

  // Scroll to top when step changes
  useEffect(() => {
    if (isOpen) {
      // Small delay to ensure DOM has updated
      const timer = setTimeout(() => {
        modalRef.current?.scrollToTop();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [currentStep, isOpen]);

  // Handle character type selection
  const handleTypeSelect = (characterId: string) => {
    const character = characters.find((c) => c.id === characterId);
    if (character) {
      setSelectedCharacterType(character);
      setCustomName(''); // Clear name, will be set when appearance is selected
      setCurrentStep('appearance');
    }
  };

  // Handle appearance selection
  const handleAppearanceSelect = (appearance: Character['appearances'][0]) => {
    setSelectedAppearance(appearance);
    // Set a random name when appearance is selected
    setCustomName(getRandomName());
    setCurrentStep('naming');
  };

  // Handle name change
  const handleNameChange = (name: string) => {
    setCustomName(name);
  };

  // Handle final confirmation
  const handleConfirm = () => {
    if (selectedCharacterType && selectedAppearance && customName.trim().length >= 2) {
      const selectedCharacter: SelectedCharacter = {
        ...selectedCharacterType,
        selectedAppearance,
        customName: customName.trim(),
      };
      onSelectCharacter(selectedCharacter);
      onClose();
    }
  };

  // Handle back navigation
  const handleBack = () => {
    if (currentStep === 'appearance') {
      setCurrentStep('type');
      setSelectedAppearance(null);
    } else if (currentStep === 'naming') {
      setCurrentStep('appearance');
    }
  };

  // Get step title
  const getStepTitle = () => {
    switch (currentStep) {
      case 'type':
        return {
          main: 'Select Your',
          sub: 'Mysterious Hero',
          description: 'Choose wisely, for destiny awaits',
        };
      case 'appearance':
        return {
          main: 'Choose Your',
          sub: 'Appearance',
          description: `Select the visual style for your ${selectedCharacterType?.class || ''}`,
        };
      case 'naming':
        return {
          main: 'Name Your',
          sub: 'Hero',
          description: `Give your ${selectedCharacterType?.class || ''} a unique identity`,
        };
    }
  };

  const stepTitle = getStepTitle();
  const canProceed =
    (currentStep === 'type' && selectedCharacterType) ||
    (currentStep === 'appearance' && selectedAppearance) ||
    (currentStep === 'naming' && customName.trim().length >= 2);

  // Progress indicator
  const steps = ['type', 'appearance', 'naming'] as const;
  const currentStepIndex = steps.indexOf(currentStep);

  return (
    <Modal
      ref={modalRef}
      isOpen={isOpen}
      onClose={onClose}
      maxWidth="6xl"
    >
      {/* Progress Indicator */}
      <div className="mb-8">
        <div className="flex items-center justify-center gap-2 mb-4">
          {steps.map((step, index) => (
            <div key={step} className="flex items-center">
              <div
                className={`
                  w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-light transition-all duration-300
                  ${index <= currentStepIndex
                    ? 'border-purple-500/80 bg-purple-500/20 text-purple-200'
                    : 'border-gray-500/30 bg-transparent text-gray-400/50'
                  }
                `}
              >
                {index + 1}
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`
                    w-12 h-px transition-all duration-300
                    ${index < currentStepIndex ? 'bg-purple-500/60' : 'bg-gray-500/20'}
                  `}
                />
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-4 text-xs font-light text-gray-400/70 tracking-[0.2em] uppercase">
          <span className={currentStep === 'type' ? 'text-purple-300/90' : ''}>Type</span>
          <span>•</span>
          <span className={currentStep === 'appearance' ? 'text-purple-300/90' : ''}>Appearance</span>
          <span>•</span>
          <span className={currentStep === 'naming' ? 'text-purple-300/90' : ''}>Name</span>
        </div>
      </div>

      {/* Step Header */}
      <div className="text-center mb-10">
        <div className="inline-block mb-4">
          <div className="h-px w-20 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent mx-auto mb-4"></div>
          <h2 className="text-4xl md:text-5xl font-light tracking-[0.15em] mb-3 text-purple-50/90 uppercase">
            {stepTitle.main}
          </h2>
          <h2 className="text-4xl md:text-5xl font-light tracking-[0.15em] mb-3 bg-gradient-to-r from-purple-300 via-violet-200 to-purple-300 bg-clip-text text-transparent uppercase">
            {stepTitle.sub}
          </h2>
          <div className="h-px w-20 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent mx-auto mt-4"></div>
        </div>
        <p className="text-sm font-light text-gray-400/70 tracking-[0.2em] uppercase mt-6">
          {stepTitle.description}
        </p>
      </div>

      {/* Step Content */}
      <div className="min-h-[400px]">
        {currentStep === 'type' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {characters.map((character) => (
              <CharacterCard
                key={character.id}
                character={character}
                isSelected={selectedCharacterType?.id === character.id}
                onSelect={() => handleTypeSelect(character.id)}
              />
            ))}
          </div>
        )}

        {currentStep === 'appearance' && selectedCharacterType && (
          <AppearanceSelection
            appearances={selectedCharacterType.appearances}
            selectedAppearanceId={selectedAppearance?.id}
            onSelect={handleAppearanceSelect}
            characterName={selectedCharacterType.name}
            characterClass={selectedCharacterType.class}
          />
        )}

        {currentStep === 'naming' && selectedCharacterType && (
          <CharacterNaming
            defaultName={selectedCharacterType.name}
            characterClass={selectedCharacterType.class}
            onNameChange={handleNameChange}
            initialName={customName}
            selectedAppearanceImageUrl={selectedAppearance?.imageUrl}
          />
        )}
      </div>

      {/* Action Buttons */}
      <div className="mt-10 pt-8 border-t border-purple-500/20">
        <ButtonGroup align="right" direction="row">
          {currentStep !== 'type' && (
            <Button
              variant="secondary"
              onClick={handleBack}
              className="border-purple-500/30 text-purple-200/80 hover:bg-purple-500/10 hover:border-purple-500/50"
            >
              Back
            </Button>
          )}
          <Button
            variant="secondary"
            onClick={onClose}
            className="border-purple-500/30 text-purple-200/80 hover:bg-purple-500/10 hover:border-purple-500/50"
          >
            Cancel
          </Button>
          {currentStep === 'naming' ? (
            <Button
              variant="primary"
              onClick={handleConfirm}
              disabled={!canProceed}
              className="bg-gradient-to-r from-purple-600/80 to-purple-500/80 text-slate-950 hover:from-purple-500 hover:to-purple-400 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40"
            >
              Begin Adventure
            </Button>
          ) : (
            <Button
              variant="primary"
              onClick={() => {
                if (currentStep === 'type' && selectedCharacterType) {
                  setCurrentStep('appearance');
                } else if (currentStep === 'appearance' && selectedAppearance) {
                  // Set a random name when moving to naming step
                  setCustomName(getRandomName());
                  setCurrentStep('naming');
                }
              }}
              disabled={!canProceed}
              className="bg-gradient-to-r from-purple-600/80 to-purple-500/80 text-slate-950 hover:from-purple-500 hover:to-purple-400 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40"
            >
              Next
            </Button>
          )}
        </ButtonGroup>
      </div>
    </Modal>
  );
}
