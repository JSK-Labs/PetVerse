import React from 'react';
import { Camera } from 'lucide-react';

interface BusinessCoverProps {
  cover: string;
}

export const BusinessCover: React.FC<BusinessCoverProps> = ({ cover }) => {
  return (
    <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-8">
      <img
        src={cover}
        alt="Business cover"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/30"></div>
      <button className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors">
        <Camera className="w-5 h-5 text-gray-700" />
      </button>
    </div>
  );
};
