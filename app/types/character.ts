export interface CharacterAttributes {
  strength: number;
  agility: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
}

export type CharacterColor = 'red' | 'blue' | 'purple';

export interface Character {
  id: string;
  name: string;
  class: string;
  description: string;
  attributes: CharacterAttributes;
  emoji: string; // Using emoji as placeholder for illustrations
  color: CharacterColor; // Theme color for the character
}

export const characters: Character[] = [
  {
    id: 'warrior',
    name: 'Aragorn',
    class: 'Warrior',
    description: 'A mighty warrior with unmatched strength and courage. Masters of melee combat, warriors excel in close-quarters battle and can withstand tremendous damage.',
    attributes: {
      strength: 18,
      agility: 12,
      intelligence: 10,
      wisdom: 14,
      charisma: 13,
    },
    emoji: '⚔️',
    color: 'red',
  },
  {
    id: 'mage',
    name: 'Gandalf',
    class: 'Mage',
    description: 'A powerful spellcaster who wields arcane magic. Mages command the elements and can unleash devastating spells from a distance.',
    attributes: {
      strength: 8,
      agility: 10,
      intelligence: 18,
      wisdom: 16,
      charisma: 14,
    },
    emoji: '🔮',
    color: 'blue',
  },
  {
    id: 'rogue',
    name: 'Shadow',
    class: 'Rogue',
    description: 'A stealthy assassin with incredible agility and precision. Rogues excel at sneaking, lockpicking, and dealing critical strikes from the shadows.',
    attributes: {
      strength: 10,
      agility: 18,
      intelligence: 14,
      wisdom: 12,
      charisma: 15,
    },
    emoji: '🗡️',
    color: 'purple',
  },
];

