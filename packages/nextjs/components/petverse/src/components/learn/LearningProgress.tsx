import React from 'react';

const LearningProgress: React.FC = () => (
  <div className="bg-white rounded-2xl p-6 shadow-sm border border-amber-100">
    <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Learning Progress</h3>
    <div className="space-y-4">
      <div className="text-center">
        <div className="text-3xl font-bold text-amber-600 mb-1">157</div>
        <div className="text-sm text-gray-600">Articles Read</div>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div className="bg-gradient-to-r from-amber-500 to-orange-600 h-2 rounded-full" style={{ width: '75%' }}></div>
      </div>
      <div className="flex items-center justify-between text-sm">
        <span className="text-gray-600">Expert Level</span>
        <span className="font-medium text-amber-600">75%</span>
      </div>
    </div>
  </div>
);

export default LearningProgress;
