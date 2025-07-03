export const QuickActions: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-amber-100">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Quick Actions
      </h3>
      <div className="space-y-3">
        <button className="w-full bg-gradient-to-r from-amber-500 to-orange-600 text-white py-3 px-4 rounded-full hover:from-amber-600 hover:to-orange-700 transition-all duration-200">
          Create New Proposal
        </button>
        <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-full hover:bg-blue-700 transition-colors">
          Delegate Voting Power
        </button>
        <button className="w-full border-2 border-gray-300 text-gray-700 py-3 px-4 rounded-full hover:border-amber-300 hover:text-amber-700 transition-colors">
          View Voting History
        </button>
      </div>
    </div>
  );
};
