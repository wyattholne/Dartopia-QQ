import { EnhancedVisualEffects } from './EliteVariants';

export const ScoreDisplay: React.FC<{
  variant: string;
  score: number;
  state: GameState;
}> = ({ variant, score, state }) => {
  // ...existing code...
  return (
    <Box>
      {/* ...existing code... */}
      {variant in eliteScoringVariants && (
        <EnhancedVisualEffects
          variant={variant as keyof typeof eliteScoringVariants}
          gameState={state}
        />
      )}
    </Box>
  );
};