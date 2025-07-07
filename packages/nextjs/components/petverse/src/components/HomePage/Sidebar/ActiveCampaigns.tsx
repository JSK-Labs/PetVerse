'use client';

const campaigns = [
  { title: 'Free Spay/Neuter Program', progress: 75, goal: '500 pets', raised: '375 pets' },
  { title: 'Emergency Pet Fund', progress: 60, goal: '$10,000', raised: '$6,000' },
  { title: 'Stray Cat Rescue', progress: 90, goal: '200 cats', raised: '180 cats' }
];

export const ActiveCampaigns: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-amber-100">
      <h3 className="text-lg font-semibold mb-4 text-gray-900">Active Campaigns</h3>
      <div className="space-y-4">
        {campaigns.map((campaign, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">{campaign.title}</span>
              <span className="text-xs text-gray-500">{campaign.progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-green-500 to-teal-500 h-2 rounded-full"
                style={{ width: `${campaign.progress}%` }}
              ></div>
            </div>
            <div className="flex items-center justify-between text-xs text-gray-500">
              <span>{campaign.raised}</span>
              <span>{campaign.goal}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
