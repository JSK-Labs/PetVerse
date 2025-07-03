import { CheckCircle, Clock, Coins, XCircle } from "lucide-react";

interface Proposal {
  id: number;
  title: string;
  description: string;
  proposer: string;
  proposerAvatar: string;
  category: string;
  status: string;
  votesFor: number;
  votesAgainst: number;
  totalVotes: number;
  quorum: number;
  timeLeft: string;
  description_full: string;
  impact: string;
  requiredTokens: number;
}

interface ProposalCardProps {
  proposal: Proposal;
  isSelected: boolean;
  onToggleDetails: () => void;
}

const getStatusColor = (status: string) => {
  switch (status) {
    case "Active":
      return "bg-green-100 text-green-800";
    case "Passed":
      return "bg-blue-100 text-blue-800";
    case "Failed":
      return "bg-red-100 text-red-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const getCategoryColor = (category: string) => {
  switch (category) {
    case "Treasury":
      return "bg-yellow-100 text-yellow-800";
    case "Community":
      return "bg-purple-100 text-purple-800";
    case "Technology":
      return "bg-blue-100 text-blue-800";
    case "Partnership":
      return "bg-green-100 text-green-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const getProgressPercentage = (votesFor: number, totalVotes: number) => {
  return totalVotes > 0 ? (votesFor / totalVotes) * 100 : 0;
};

const getQuorumPercentage = (totalVotes: number, quorum: number) => {
  return (totalVotes / quorum) * 100;
};

export const ProposalCard: React.FC<ProposalCardProps> = ({
  proposal,
  isSelected,
  onToggleDetails,
}) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-amber-100 hover:shadow-md transition-all duration-200">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center space-x-3 mb-2">
            <h3 className="text-xl font-semibold text-gray-900">
              {proposal.title}
            </h3>
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(proposal.status)}`}
            >
              {proposal.status}
            </span>
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(proposal.category)}`}
            >
              {proposal.category}
            </span>
          </div>
          <p className="text-gray-600 mb-3">{proposal.description}</p>
          <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
            <div className="flex items-center space-x-1">
              <span className="text-lg">{proposal.proposerAvatar}</span>
              <span>Proposed by {proposal.proposer}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>{proposal.timeLeft} remaining</span>
            </div>
            <div className="flex items-center space-x-1">
              <Coins className="w-4 h-4" />
              <span>{proposal.requiredTokens} PAWT required to vote</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">
            Voting Progress
          </span>
          <span className="text-sm text-gray-600">
            {proposal.totalVotes.toLocaleString()} /{" "}
            {proposal.quorum.toLocaleString()} votes
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
          <div
            className="bg-gradient-to-r from-green-500 to-teal-500 h-3 rounded-full"
            style={{
              width: `${getProgressPercentage(proposal.votesFor, proposal.totalVotes)}%`,
            }}
          ></div>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
          <div
            className="bg-gradient-to-r from-amber-500 to-orange-600 h-2 rounded-full"
            style={{
              width: `${Math.min(getQuorumPercentage(proposal.totalVotes, proposal.quorum), 100)}%`,
            }}
          ></div>
        </div>
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span className="text-green-600 font-medium">
                {proposal.votesFor.toLocaleString()} For (
                {Math.round(
                  getProgressPercentage(proposal.votesFor, proposal.totalVotes)
                )}
                %)
              </span>
            </div>
            <div className="flex items-center space-x-1">
              <XCircle className="w-4 h-4 text-red-600" />
              <span className="text-red-600 font-medium">
                {proposal.votesAgainst.toLocaleString()} Against (
                {Math.round(
                  getProgressPercentage(
                    proposal.votesAgainst,
                    proposal.totalVotes
                  )
                )}
                %)
              </span>
            </div>
          </div>
          <span className="text-amber-600 font-medium">
            Quorum:{" "}
            {Math.round(
              getQuorumPercentage(proposal.totalVotes, proposal.quorum)
            )}
            %
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <button
          onClick={onToggleDetails}
          className="text-blue-600 hover:text-blue-700 font-medium"
        >
          {isSelected ? "Hide Details" : "View Details"}
        </button>
        <div className="flex items-center space-x-3">
          <button className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-colors flex items-center space-x-2">
            <CheckCircle className="w-4 h-4" />
            <span>Vote For</span>
          </button>
          <button className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition-colors flex items-center space-x-2">
            <XCircle className="w-4 h-4" />
            <span>Vote Against</span>
          </button>
        </div>
      </div>

      {isSelected && (
        <div className="mt-6 pt-6 border-t border-gray-200">
          <h4 className="font-semibold text-gray-900 mb-3">Full Description</h4>
          <p className="text-gray-700 mb-4">{proposal.description_full}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-sm text-gray-600 mb-1">Impact Level</div>
              <div
                className={`font-semibold ${
                  proposal.impact === "High"
                    ? "text-red-600"
                    : proposal.impact === "Medium"
                      ? "text-yellow-600"
                      : "text-green-600"
                }`}
              >
                {proposal.impact}
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-sm text-gray-600 mb-1">
                Voting Power Required
              </div>
              <div className="font-semibold text-amber-600">
                {proposal.requiredTokens} PAWT
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-sm text-gray-600 mb-1">Time Remaining</div>
              <div className="font-semibold text-blue-600">
                {proposal.timeLeft}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
