'use client';

import { TrendingUp, Award, Users } from 'lucide-react';

export const YourImpact: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-amber-100">
      <h3 className="text-lg font-semibold mb-4 text-gray-900">Your Impact</h3>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <TrendingUp className="w-5 h-5 text-green-600" />
            <span className="text-sm text-gray-600">Reputation Score</span>
          </div>
          <span className="font-semibold text-green-600">+127</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Award className="w-5 h-5 text-amber-600" />
            <span className="text-sm text-gray-600">PAWT Earned</span>
          </div>
          <span className="font-semibold text-amber-600">1,247</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Users className="w-5 h-5 text-blue-600" />
            <span className="text-sm text-gray-600">Pets Helped</span>
          </div>
          <span className="font-semibold text-blue-600">23</span>
        </div>
      </div>
    </div>
  );
};
