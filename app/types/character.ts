export interface CharacterAttributes {
  strength: number;
  agility: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
}

export type CharacterColor = 'red' | 'blue' | 'purple' | 'green' | 'gold' | 'teal' | 'orange' | 'pink' | 'emerald' | 'indigo' | 'amber';

export interface CharacterAppearance {
  id: string;
  name: string;
  imageUrl: string; // Placeholder image URL - will be replaced with final art
}

export interface Character {
  id: string;
  name: string;
  class: string;
  description: string;
  attributes: CharacterAttributes;
  emoji: string; // Using emoji as placeholder for illustrations
  color: CharacterColor; // Theme color for the character
  appearances: CharacterAppearance[]; // Two appearance options per character
}

export interface SelectedCharacter extends Character {
  selectedAppearance: CharacterAppearance;
  customName: string;
}

// Helper function to generate placeholder image URLs
// Replace these with actual image paths when final art is ready
const getPlaceholderImage = (characterId: string, appearanceId: string): string => {
  // Using placeholder.com service - replace with actual image paths
  return `https://via.placeholder.com/400x600/1a1a2e/ffffff?text=${characterId}-${appearanceId}`;
};

export const characters: Character[] = [
  {
    id: 'warrior',
    name: 'Noble Knight or Battle-Scarred Veteran',
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
    appearances: [
      { id: 'warrior-1', name: 'Noble Knight', imageUrl: getPlaceholderImage('warrior', '1') },
      { id: 'warrior-2', name: 'Battle-Scarred Veteran', imageUrl: getPlaceholderImage('warrior', '2') },
    ],
  },
  {
    id: 'mage',
    name: 'Arcane Scholar or Mystic Wanderer',
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
    appearances: [
      { id: 'mage-1', name: 'Arcane Scholar', imageUrl: getPlaceholderImage('mage', '1') },
      { id: 'mage-2', name: 'Mystic Wanderer', imageUrl: getPlaceholderImage('mage', '2') },
    ],
  },
  {
    id: 'rogue',
    name: 'Shadow Assassin or Master Thief',
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
    appearances: [
      { id: 'rogue-1', name: 'Shadow Assassin', imageUrl: getPlaceholderImage('rogue', '1') },
      { id: 'rogue-2', name: 'Master Thief', imageUrl: getPlaceholderImage('rogue', '2') },
    ],
  },
  // ============================================
  // VERSION 2 CHARACTERS - Commented out for now
  // ============================================
  // {
  //   id: 'cleric',
  //   name: 'Seraphina',
  //   class: 'Cleric',
  //   description: 'A devoted healer and support who wields divine magic. Clerics can heal wounds, buff allies with divine blessings, and smite enemies with radiant damage.',
  //   attributes: {
  //     strength: 12,
  //     agility: 10,
  //     intelligence: 13,
  //     wisdom: 18,
  //     charisma: 15,
  //   },
  //   emoji: '✨',
  //   color: 'gold',
  //   appearances: [
  //     { id: 'cleric-1', name: 'Divine Healer', imageUrl: getPlaceholderImage('cleric', '1') },
  //     { id: 'cleric-2', name: 'Battle Priestess', imageUrl: getPlaceholderImage('cleric', '2') },
  //   ],
  // },
  // {
  //   id: 'ranger',
  //   name: 'Aeliana',
  //   class: 'Ranger',
  //   description: 'A versatile fighter skilled in ranged combat and wilderness survival. Rangers excel at tracking, archery, and possess nature-based spellcasting abilities.',
  //   attributes: {
  //     strength: 13,
  //     agility: 16,
  //     intelligence: 12,
  //     wisdom: 17,
  //     charisma: 11,
  //   },
  //   emoji: '🏹',
  //   color: 'green',
  //   appearances: [
  //     { id: 'ranger-1', name: 'Forest Guardian', imageUrl: getPlaceholderImage('ranger', '1') },
  //     { id: 'ranger-2', name: 'Wilderness Scout', imageUrl: getPlaceholderImage('ranger', '2') },
  //   ],
  // },
  // {
  //   id: 'paladin',
  //   name: 'Valor',
  //   class: 'Paladin',
  //   description: 'A holy warrior who combines martial prowess with divine spellcasting. Paladins can smite enemies with divine power and support allies with protective auras.',
  //   attributes: {
  //     strength: 16,
  //     agility: 10,
  //     intelligence: 11,
  //     wisdom: 14,
  //     charisma: 17,
  //   },
  //   emoji: '🛡️',
  //   color: 'gold',
  //   appearances: [
  //     { id: 'paladin-1', name: 'Holy Champion', imageUrl: getPlaceholderImage('paladin', '1') },
  //     { id: 'paladin-2', name: 'Righteous Crusader', imageUrl: getPlaceholderImage('paladin', '2') },
  //   ],
  // },
  // {
  //   id: 'bard',
  //   name: 'Lyra',
  //   class: 'Bard',
  //   description: 'A charismatic performer who uses magical song and performance to enhance allies, control the battlefield, and gather information through charm and wit.',
  //   attributes: {
  //     strength: 10,
  //     agility: 14,
  //     intelligence: 13,
  //     wisdom: 12,
  //     charisma: 18,
  //   },
  //   emoji: '🎵',
  //   color: 'pink',
  //   appearances: [
  //     { id: 'bard-1', name: 'Enchanting Minstrel', imageUrl: getPlaceholderImage('bard', '1') },
  //     { id: 'bard-2', name: 'Mystical Performer', imageUrl: getPlaceholderImage('bard', '2') },
  //   ],
  // },
  // {
  //   id: 'druid',
  //   name: 'Thorn',
  //   class: 'Druid',
  //   description: 'A nature-based spellcaster deeply connected to the wild. Druids can transform into animals, wield elemental spells, and commune with the forces of nature.',
  //   attributes: {
  //     strength: 11,
  //     agility: 12,
  //     intelligence: 14,
  //     wisdom: 18,
  //     charisma: 13,
  //   },
  //   emoji: '🌿',
  //   color: 'green',
  //   appearances: [
  //     { id: 'druid-1', name: 'Nature Keeper', imageUrl: getPlaceholderImage('druid', '1') },
  //     { id: 'druid-2', name: 'Wild Shaman', imageUrl: getPlaceholderImage('druid', '2') },
  //   ],
  // },
  // {
  //   id: 'monk',
  //   name: 'Zephyr',
  //   class: 'Monk',
  //   description: 'A master martial artist who channels spiritual energy. Monks excel at hand-to-hand combat, move with incredible speed, and harness inner power for devastating strikes.',
  //   attributes: {
  //     strength: 14,
  //     agility: 18,
  //     intelligence: 11,
  //     wisdom: 16,
  //     charisma: 12,
  //   },
  //   emoji: '🥋',
  //   color: 'teal',
  //   appearances: [
  //     { id: 'monk-1', name: 'Spiritual Master', imageUrl: getPlaceholderImage('monk', '1') },
  //     { id: 'monk-2', name: 'Disciplined Warrior', imageUrl: getPlaceholderImage('monk', '2') },
  //   ],
  // },
  // {
  //   id: 'sorcerer',
  //   name: 'Ember',
  //   class: 'Sorcerer',
  //   description: 'An innate spellcaster whose magic flows from within. Sorcerers use charisma to channel raw magical power, casting spells through natural talent rather than study.',
  //   attributes: {
  //     strength: 8,
  //     agility: 12,
  //     intelligence: 14,
  //     wisdom: 11,
  //     charisma: 18,
  //   },
  //   emoji: '⚡',
  //   color: 'amber',
  //   appearances: [
  //     { id: 'sorcerer-1', name: 'Wild Magic User', imageUrl: getPlaceholderImage('sorcerer', '1') },
  //     { id: 'sorcerer-2', name: 'Innate Spellcaster', imageUrl: getPlaceholderImage('sorcerer', '2') },
  //   ],
  // },
  // {
  //   id: 'barbarian',
  //   name: 'Ragnar',
  //   class: 'Barbarian',
  //   description: 'A fierce warrior known for raw strength and unbridled rage. Barbarians are resilient tanks who deal devastating melee damage and shrug off pain in battle.',
  //   attributes: {
  //     strength: 18,
  //     agility: 14,
  //     intelligence: 9,
  //     wisdom: 12,
  //     charisma: 11,
  //   },
  //   emoji: '🔥',
  //   color: 'orange',
  //   appearances: [
  //     { id: 'barbarian-1', name: 'Berserker', imageUrl: getPlaceholderImage('barbarian', '1') },
  //     { id: 'barbarian-2', name: 'Tribal Warrior', imageUrl: getPlaceholderImage('barbarian', '2') },
  //   ],
  // },
  // {
  //   id: 'warlock',
  //   name: 'Mystic',
  //   class: 'Warlock',
  //   description: 'A spellcaster who gains power through pacts with mysterious entities. Warlocks wield unique and powerful magical effects, channeling otherworldly energy through their patron bonds.',
  //   attributes: {
  //     strength: 9,
  //     agility: 11,
  //     intelligence: 15,
  //     wisdom: 13,
  //     charisma: 17,
  //   },
  //   emoji: '👁️',
  //   color: 'indigo',
  //   appearances: [
  //     { id: 'warlock-1', name: 'Pact-Bound Mage', imageUrl: getPlaceholderImage('warlock', '1') },
  //     { id: 'warlock-2', name: 'Otherworldly Channeler', imageUrl: getPlaceholderImage('warlock', '2') },
  //   ],
  // },
];
