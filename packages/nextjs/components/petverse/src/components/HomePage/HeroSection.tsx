'use client';

interface HeroSectionProps {
  userName?: string;
  reputationScore?: number;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  userName = 'Alex',
  reputationScore = 1247,
}) => {
  return (
    <div className="bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl p-6 mb-8 text-white">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold mb-2">Welcome back, {userName}! 🐾</h1>
          <p className="text-amber-100">Your pets are waiting for their daily dose of love</p>
        </div>
        <div className="text-right">
          <div className="text-sm text-amber-100">Reputation Score</div>
          <div className="text-3xl font-bold">{reputationScore}</div>
          <div className="text-xs text-amber-200">PAWT Tokens</div>
        </div>
      </div>
    </div>
  );
};
