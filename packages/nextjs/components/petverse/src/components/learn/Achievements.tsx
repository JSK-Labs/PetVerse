import React from 'react';

const Achievements: React.FC = () => (
  <div className="bg-white rounded-2xl p-6 shadow-sm border border-amber-100">
    <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Achievements</h3>
    <div className="grid grid-cols-2 gap-3">
      <div className="text-center p-3 bg-amber-50 rounded-lg">
        <div className="text-2xl mb-1">🏆</div>
        <div className="text-xs font-medium text-amber-800">Expert Reader</div>
      </div>
      <div className="text-center p-3 bg-green-50 rounded-lg">
        <div className="text-2xl mb-1">📚</div>
        <div className="text-xs font-medium text-green-800">Knowledge Seeker</div>
      </div>
      <div className="text-center p-3 bg-blue-50 rounded-lg">
        <div className="text-2xl mb-1">⭐</div>
        <div className="text-xs font-medium text-blue-800">Top Learner</div>
      </div>
      <div className="text-center p-3 bg-purple-50 rounded-lg">
        <div className="text-2xl mb-1">🎯</div>
        <div className="text-xs font-medium text-purple-800">Goal Crusher</div>
      </div>
    </div>
  </div>
);

export default Achievements;
