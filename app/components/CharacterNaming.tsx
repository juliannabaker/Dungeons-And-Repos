'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface CharacterNamingProps {
  defaultName: string;
  characterClass: string;
  onNameChange: (name: string) => void;
  initialName?: string;
  selectedAppearanceImageUrl?: string;
}

export default function CharacterNaming({
  defaultName,
  characterClass,
  onNameChange,
  initialName = '',
  selectedAppearanceImageUrl,
}: CharacterNamingProps) {
  const [name, setName] = useState(initialName || defaultName);
  const [error, setError] = useState('');

  const MAX_NAME_LENGTH = 30;
  const MIN_NAME_LENGTH = 2;

  useEffect(() => {
    onNameChange(name);
  }, [name, onNameChange]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newName = e.target.value;

    if (newName.length > MAX_NAME_LENGTH) {
      setError(`Name must be ${MAX_NAME_LENGTH} characters or less`);
      return;
    }

    setName(newName);
    setError('');

    if (newName.trim().length === 0) {
      setError('Character name cannot be blank');
    } else if (newName.trim().length < MIN_NAME_LENGTH) {
      setError(`Name must be at least ${MIN_NAME_LENGTH} characters`);
    }
  };

  const isValid = name.trim().length >= MIN_NAME_LENGTH && name.trim().length <= MAX_NAME_LENGTH;

  return (
    <div className="space-y-6">

      {/* Name Input */}
      <div className="space-y-4">
        <div>
          <label
            htmlFor="character-name"
            className="block text-sm font-light text-gray-300/80 tracking-wide uppercase mb-2"
          >
            Character Name
          </label>
          <input
            id="character-name"
            type="text"
            value={name}
            onChange={handleChange}
            placeholder={defaultName}
            maxLength={MAX_NAME_LENGTH}
            className={`
              w-full px-4 py-3 rounded-sm border bg-slate-950/50 backdrop-blur-sm
              text-purple-50/90 font-light tracking-wide
              placeholder:text-gray-500/50
              transition-all duration-300
              focus:outline-none focus:ring-2 focus:ring-purple-500/50
              ${error 
                ? 'border-rose-500/50 focus:border-rose-500/80' 
                : isValid 
                  ? 'border-purple-500/50 focus:border-purple-500/80' 
                  : 'border-gray-500/30 focus:border-purple-500/50'
              }
            `}
            autoFocus
          />

          {/* Character Count */}
          <div className="flex justify-between items-center mt-2">
            <div className="text-xs text-gray-400/60">
              {error ? (
                <span className="text-rose-400/80">{error}</span>
              ) : (
                <span className={isValid ? 'text-purple-400/60' : 'text-gray-400/60'}>
                  {name.trim().length >= MIN_NAME_LENGTH ? 'Valid name' : `Minimum ${MIN_NAME_LENGTH} characters`}
                </span>
              )}
            </div>
            <div className="text-xs text-gray-400/60">
              {name.length}/{MAX_NAME_LENGTH}
            </div>
          </div>
        </div>

        {/* Preview */}
        <div className="pt-4 border-t border-purple-500/20">
          <p className="text-xs font-light text-gray-400/70 tracking-[0.2em] uppercase mb-2">
            Preview
          </p>
          <div className="px-4 py-3 rounded-sm border border-purple-500/30 bg-slate-950/30">
            {selectedAppearanceImageUrl && (
              <div className="relative w-32 h-32 mx-auto mb-4">
                <Image
                  src={selectedAppearanceImageUrl}
                  alt={`${characterClass} preview`}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            )}
            <p className="text-lg font-light tracking-wider text-purple-50/90">
              {name.trim() || defaultName}
            </p>
            <p className="text-sm font-light text-purple-300/70 tracking-[0.2em] uppercase mt-1">
              {characterClass}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

