import { Clock, Vote, Users } from "lucide-react";

export const GovernanceCalendar: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-amber-100">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Upcoming Events
      </h3>
      <div className="space-y-3">
        <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
          <Clock className="w-5 h-5 text-blue-600" />
          <div>
            <div className="text-sm font-medium text-blue-900">
              Town Hall Meeting
            </div>
            <div className="text-xs text-blue-700">
              March 25, 2024 • 7:00 PM
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg">
          <Vote className="w-5 h-5 text-purple-600" />
          <div>
            <div className="text-sm font-medium text-purple-900">
              Quarterly Review
            </div>
            <div className="text-xs text-purple-700">
              April 1, 2024 • 6:00 PM
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
          <Users className="w-5 h-5 text-green-600" />
          <div>
            <div className="text-sm font-medium text-green-900">
              Community Workshop
            </div>
            <div className="text-xs text-green-700">
              April 8, 2024 • 5:00 PM
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
