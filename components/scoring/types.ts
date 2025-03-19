export interface ScoringVariant {
  id: string;
  name: string;
  description: string;
  rules: string[];
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  players: string;
  icon: React.ReactNode;
  calculator: (score: number, state: GameState) => number;
  specialRules?: Record<string, any>;
}

export interface GameState {
  consecutiveHits: number;
  currentScore: number;
  multiplier: number;
  timeRemaining?: number;
  specialConditions?: Record<string, any>;
  powerLevel: number;
  combo: number;
  currentMultiplier: number;
  timeLeft: number;
  totalTime: number;
  targetSize?: number;
  targetPosition?: { x: number; y: number };
  accuracy?: number;
  territories?: any[];
  controlledZones?: string[];
  energy?: number;
  activeElements?: string[];
  combinations?: string[];
}
