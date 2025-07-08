import { Users } from "lucide-react";

interface RecentProposal {
  id: number;
  title: string;
  status: string;
  result: string;
  votes: number;
  category: string;
}

interface RecentProposalsProps {
  proposals: RecentProposal[];
}

const getStatusColor = (status: string) => {
  switch (status) {
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

export const RecentProposals: React.FC<RecentProposalsProps> = ({
  proposals,
}) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">
        Recent Proposals
      </h2>
      <div className="space-y-4">
        {proposals.map((proposal) => (
          <div
            key={proposal.id}
            className="bg-white rounded-xl p-6 border border-gray-200 hover:border-amber-300 hover:shadow-md transition-all duration-200"
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className="font-semibold text-gray-900">
                    {proposal.title}
                  </h3>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(proposal.status)}`}
                  >
                    {proposal.status}
                  </span>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(proposal.category)}`}
                  >
                    {proposal.category}
                  </span>
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <span>{proposal.result}</span>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{proposal.votes.toLocaleString()} votes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
