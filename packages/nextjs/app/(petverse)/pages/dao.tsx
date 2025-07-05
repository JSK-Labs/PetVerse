"use client";

import { useState } from "react";
import { GovernanceHeader } from "../../../components/petverse/src/components/Dao/governance-header";
import { ActiveProposals } from "../../../components/petverse/src/components/Dao/active-proposal";
import { RecentProposals } from "../../../components/petverse/src/components/Dao/recent-proposal";
import { UserStats } from "../../../components/petverse/src/components/Dao/user-stats";
import { QuickActions } from "../../../components/petverse/src/components/Dao/quick-actions";
import { GovernanceCalendar } from "../../../components/petverse/src/components/Dao/governance-calendar";
import { DAOTreasury } from "../../../components/petverse/src/components/Dao/dao-treasure";

// Sample data (can be moved to a separate file if needed)
const activeProposals = [
  {
    id: 1,
    title: "Increase Emergency Fund Allocation",
    description:
      "Proposal to increase the emergency fund allocation from 10% to 15% to better support pet emergencies in our community.",
    proposer: "Emergency Relief DAO",
    proposerAvatar: "🏥",
    category: "Treasury",
    status: "Active",
    votesFor: 1247,
    votesAgainst: 356,
    totalVotes: 1603,
    quorum: 2000,
    timeLeft: "5 days",
    description_full:
      "This proposal aims to increase our emergency fund allocation to better serve pets in crisis. With rising veterinary costs and increased demand for emergency services, our current 10% allocation is insufficient. The proposed 15% allocation would provide an additional $50,000 annually for emergency interventions.",
    impact: "High",
    requiredTokens: 100,
  },
  // ... other proposals (omitted for brevity)
];

const recentProposals = [
  {
    id: 4,
    title: "Pet Insurance Partnership Program",
    status: "Passed",
    result: "Approved with 78% support",
    votes: 3456,
    category: "Partnership",
  },
  // ... other recent proposals
];

const userStats = {
  votingPower: 1247,
  proposalsVoted: 23,
  proposalsCreated: 2,
  participationRate: 89,
  reputation: 4.7,
};

export const GovernanceSection: React.FC = () => {
  const [selectedProposal, setSelectedProposal] = useState<number | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <GovernanceHeader />
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          <ActiveProposals
            proposals={activeProposals}
            selectedProposal={selectedProposal}
            setSelectedProposal={setSelectedProposal}
          />
          <RecentProposals proposals={recentProposals} />
        </div>
        <div className="space-y-6">
          <UserStats stats={userStats} />
          <QuickActions />
          <GovernanceCalendar />
          <DAOTreasury />
        </div>
      </div>
    </div>
  );
};
