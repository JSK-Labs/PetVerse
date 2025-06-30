import React from 'react';
import { Play } from 'lucide-react';

interface UpcomingWebinarsProps {
  webinars: {
    title: string;
    presenter: string;
    date: string;
    time: string;
    attendees: number;
    live: boolean;
  }[];
}

const UpcomingWebinars: React.FC<UpcomingWebinarsProps> = ({ webinars }) => (
  <div className="bg-white rounded-2xl p-6 shadow-sm border border-amber-100">
    <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Webinars</h3>
    <div className="space-y-4">
      {webinars.map((webinar, index) => (
        <div key={index} className="border border-gray-200 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-medium text-gray-900">{webinar.title}</h4>
            {webinar.live && (
              <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full flex items-center space-x-1">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <span>Live</span>
              </span>
            )}
          </div>
          <p className="text-sm text-gray-600 mb-2">{webinar.presenter}</p>
          <div className="text-xs text-gray-500">
            {webinar.date} • {webinar.time}
          </div>
          <div className="flex items-center justify-between mt-3">
            <span className="text-xs text-gray-500">{webinar.attendees} attending</span>
            <button className="flex items-center space-x-1 text-blue-600 text-sm hover:text-blue-700">
              <Play className="w-4 h-4" />
              <span>Join</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default UpcomingWebinars;
