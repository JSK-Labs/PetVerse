import { CheckCircle, Clock, Coins, XCircle } from "lucide-react";
import { ProposalCard } from "./proposal-card";

interface ActiveProposal {
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

interface ActiveProposalsProps {
  proposals: ActiveProposal[];
  selectedProposal: number | null;
  setSelectedProposal: (id: number | null) => void;
}

export const ActiveProposals: React.FC<ActiveProposalsProps> = ({
  proposals,
  selectedProposal,
  setSelectedProposal,
}) => {
  return (
    <div className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-gray-900">
          Active Proposals
        </h2>
        <button className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 py-3 rounded-full hover:from-amber-600 hover:to-orange-700 transition-all duration-200">
          Create Proposal
        </button>
      </div>
      <div className="space-y-6">
        {proposals.map((proposal) => (
          <ProposalCard
            key={proposal.id}
            proposal={proposal}
            isSelected={selectedProposal === proposal.id}
            onToggleDetails={() =>
              setSelectedProposal(
                selectedProposal === proposal.id ? null : proposal.id
              )
            }
          />
        ))}
      </div>
    </div>
  );
};
