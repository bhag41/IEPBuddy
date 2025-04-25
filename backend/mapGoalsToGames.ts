export function mapGoalToGame(goal: string): string {
    if (/social/i.test(goal)) return "turn-taking-dice";
    if (/fine motor/i.test(goal)) return "drag-and-drop";
    if (/emotion/i.test(goal)) return "emotion-matcher";
    return "default-game";
  }
  