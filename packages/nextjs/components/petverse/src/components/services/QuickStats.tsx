import React from "react";

interface QuickStatsProps {
  filteredServicesCount: number;
}

const QuickStats: React.FC<QuickStatsProps> = ({
  filteredServicesCount,
}) => {
  return (
    <div className="p-4 bg-gray-50">
      <div className="grid grid-cols-3 gap-4 text-center">
        <div>
          <div className="text-2xl font-bold text-amber-600">
            {filteredServicesCount}
          </div>
          <div className="text-sm text-gray-600">Services Found</div>
        </div>
        <div>
          <div className="text-2xl font-bold text-blue-600">4.7</div>
          <div className="text-sm text-gray-600">Average Rating</div>
        </div>
        <div>
          <div className="text-2xl font-bold text-green-600">78%</div>
          <div className="text-sm text-gray-600">Accept PAWT</div>
        </div>
      </div>
    </div>
  );
};

export default QuickStats;