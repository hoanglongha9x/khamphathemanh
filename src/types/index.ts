export type StationId =
  | 'math-logic'
  | 'tech-algorithm'
  | 'science-discovery'
  | 'creativity-design'
  | 'language-expression'
  | 'communication-collaboration'
  | 'organization-planning'
  | 'empathy-support';

export interface StationStepOption {
  id: string;
  label: string;
  description?: string;
  isOptimal?: boolean;
  scoreWeight: number; // 1 to 5 points
  reasoning: string; // Explains the thought process behind this choice
  competencyInsight: string; // What cognitive or practical competency this shows
}

export interface StationStep {
  id: string;
  stepNumber: number;
  title: string;
  scenario: string;
  instruction: string;
  type: 'single-choice' | 'multi-select' | 'sequencing' | 'interactive-allocator' | 'dilemma';
  options: StationStepOption[];
  // For sequencing / interactive challenges
  sequencingItems?: { id: string; text: string; correctOrderRank: number; rationale: string }[];
  allocatorItems?: { id: string; label: string; max: number; unit: string; optimalRange: [number, number]; feedback: string }[];
}

export interface BonusChallenge {
  title: string;
  scenario: string;
  question: string;
  options: StationStepOption[];
}

export interface Station {
  id: StationId;
  order: number;
  title: string;
  shortTag: string;
  iconName: string;
  accentColor: string; // Tailwind color theme
  badgeColor: string;
  durationMinutes: string;
  tagline: string;
  description: string;
  realWorldContext: string; // Bối cảnh thực tế môn HĐTN-HN 10
  coreCompetencies: string[]; // Năng lực cốt lõi rèn luyện
  steps: StationStep[];
  bonusChallenge: BonusChallenge;
}

export interface StationReflection {
  interestScore: number; // 1 - 5
  difficultyScore: number; // 1 - 5
  whatDidWell: string; // Tự nhận định điều làm tốt
  nextIntent: 'retry' | 'practice_more' | 'explore_other';
  completedAt: string;
}

export interface StationResult {
  stationId: StationId;
  stepAnswers: Record<string, string | string[]>;
  stepScores: Record<string, number>;
  totalScore: number; // 0 - 15
  bonusCompleted?: boolean;
  bonusScore?: number;
  reflection: StationReflection;
  demonstratedCompetencies: string[];
}

export interface UserProfileState {
  nickname: string;
  gradeClass: string;
  startedAt: string;
  completedStations: Record<StationId, StationResult>;
  desiredCompetenciesToDevelop: string[];
  selfNotes: string;
  weeklyGoals: string[];
}
