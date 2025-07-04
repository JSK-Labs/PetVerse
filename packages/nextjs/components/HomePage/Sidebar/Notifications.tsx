'use client';

import { Bell } from 'lucide-react';

export const Notifications: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-amber-100">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Notifications</h3>
        <Bell className="w-5 h-5 text-gray-400" />
      </div>
      <div className="space-y-3">
        <div className="text-sm text-gray-600">
          <span className="font-medium">Dr. Smith</span> commented on your post
        </div>
        <div className="text-sm text-gray-600">
          New governance proposal available for voting
        </div>
        <div className="text-sm text-gray-600">
          Your pet insurance renewal is due in 5 days
        </div>
      </div>
    </div>
  );
};
