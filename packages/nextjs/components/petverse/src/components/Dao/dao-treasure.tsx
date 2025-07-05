export const DAOTreasury: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-6 border border-green-200">
      <h3 className="text-lg font-semibold text-green-900 mb-4">
        DAO Treasury
      </h3>
      <div className="space-y-3">
        <div className="text-center">
          <div className="text-3xl font-bold text-green-600 mb-1">$2.4M</div>
          <div className="text-sm text-green-700">Total Treasury Value</div>
        </div>
        <div className="grid grid-cols-2 gap-3 mt-4">
          <div className="text-center p-3 bg-white/50 rounded-lg">
            <div className="text-lg font-bold text-green-600">68%</div>
            <div className="text-xs text-green-700">PAWT Tokens</div>
          </div>
          <div className="text-center p-3 bg-white/50 rounded-lg">
            <div className="text-lg font-bold text-green-600">32%</div>
            <div className="text-xs text-green-700">Stablecoins</div>
          </div>
        </div>
      </div>
    </div>
  );
};
