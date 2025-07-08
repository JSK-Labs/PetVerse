import React from 'react';

const DailyTip: React.FC = () => (
  <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-6 border border-blue-200">
    <h3 className="text-lg font-semibold text-blue-900 mb-4">💡 Daily Tip</h3>
    <p className="text-blue-800 mb-4">
      "Regular dental care can prevent 80% of dental diseases in pets. Brush your pet's teeth 2-3 times per week!"
    </p>
    <button className="text-blue-600 text-sm font-medium hover:text-blue-700">
      Learn more about dental care →
    </button>
  </div>
);

export default DailyTip;
