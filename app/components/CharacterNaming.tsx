'use client';

import { useState, useEffect } from 'react';

interface CharacterNamingProps {
  defaultName: string;
  characterClass: string;
  onNameChange: (name: string) => void;
  initialName?: string;
}

export default function CharacterNaming({
  defaultName,
  characterClass,
  onNameChange,
  initialName = '',
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
      {/* Header */}
      <div className="text-center mb-8">
        <h3 className="text-2xl md:text-3xl font-light tracking-wider text-amber-50/90 uppercase mb-2">
          Name Your Hero
        </h3>
        <p className="text-sm font-light text-gray-400/70 tracking-[0.2em] uppercase">
          Give your {characterClass} a unique identity
        </p>
      </div>

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
              text-amber-50/90 font-light tracking-wide
              placeholder:text-gray-500/50
              transition-all duration-300
              focus:outline-none focus:ring-2 focus:ring-amber-500/50
              ${error 
                ? 'border-rose-500/50 focus:border-rose-500/80' 
                : isValid 
                  ? 'border-amber-500/50 focus:border-amber-500/80' 
                  : 'border-gray-500/30 focus:border-amber-500/50'
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
                <span className={isValid ? 'text-amber-400/60' : 'text-gray-400/60'}>
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
        <div className="pt-4 border-t border-amber-500/20">
          <p className="text-xs font-light text-gray-400/70 tracking-[0.2em] uppercase mb-2">
            Preview
          </p>
          <div className="px-4 py-3 rounded-sm border border-amber-500/30 bg-slate-950/30">
            <p className="text-lg font-light tracking-wider text-amber-50/90">
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

