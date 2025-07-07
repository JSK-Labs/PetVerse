'use client';

import { Calendar } from 'lucide-react';

export const UpcomingEvents: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-amber-100">
      <h3 className="text-lg font-semibold mb-4 text-gray-900">Upcoming Events</h3>
      <div className="space-y-3">
        <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
          <Calendar className="w-5 h-5 text-blue-600" />
          <div>
            <div className="text-sm font-medium text-blue-900">Vet Checkup</div>
            <div className="text-xs text-blue-700">Tomorrow, 2:00 PM</div>
          </div>
        </div>
        <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
          <Calendar className="w-5 h-5 text-green-600" />
          <div>
            <div className="text-sm font-medium text-green-900">Dog Training</div>
            <div className="text-xs text-green-700">Saturday, 10:00 AM</div>
          </div>
        </div>
      </div>
    </div>
  );
};
