import React from 'react';

interface Tab {
  id: string;
  label: string;
}

interface BusinessTabsProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

export const BusinessTabs: React.FC<BusinessTabsProps> = ({ tabs, activeTab, onTabChange }) => {
  return (
    <div className="bg-white rounded-2xl mb-8 shadow-sm border border-amber-100">
      <div className="flex space-x-8 p-6 border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`pb-2 font-medium transition-colors ${
              activeTab === tab.id
                ? "text-amber-600 border-b-2 border-amber-600"
                : "text-gray-600 hover:text-amber-600"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
};
