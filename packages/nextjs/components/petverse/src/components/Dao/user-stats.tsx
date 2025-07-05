import { Vote, CheckCircle, TrendingUp, Users, Award } from "lucide-react";

interface UserStatsProps {
  stats: {
    votingPower: number;
    proposalsVoted: number;
    proposalsCreated: number;
    participationRate: number;
    reputation: number;
  };
}

export const UserStats: React.FC<UserStatsProps> = ({ stats }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-amber-100">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Your Governance Stats
      </h3>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Vote className="w-5 h-5 text-amber-600" />
            <span className="text-sm text-gray-600">Voting Power</span>
          </div>
          <span className="font-semibold text-amber-600">
            {stats.votingPower} PAWT
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <span className="text-sm text-gray-600">Proposals Voted</span>
          </div>
          <span className="font-semibold text-green-600">
            {stats.proposalsVoted}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <TrendingUp className="w-5 h-5 text-blue-600" />
            <span className="text-sm text-gray-600">Proposals Created</span>
          </div>
          <span className="font-semibold text-blue-600">
            {stats.proposalsCreated}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Users className="w-5 h-5 text-purple-600" />
            <span className="text-sm text-gray-600">Participation Rate</span>
          </div>
          <span className="font-semibold text-purple-600">
            {stats.participationRate}%
          </span>
        </div>
        <div className="pt-4 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Award className="w-5 h-5 text-amber-600" />
              <span className="text-sm text-gray-600">
                Governance Reputation
              </span>
            </div>
            <span className="font-semibold text-amber-600">
              {stats.reputation}/5.0
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
