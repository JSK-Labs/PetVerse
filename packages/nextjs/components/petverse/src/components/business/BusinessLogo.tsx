import React from 'react';

interface BusinessLogoProps {
  logo: string;
  verified: boolean;
}

export const BusinessLogo: React.FC<BusinessLogoProps> = ({ logo, verified }) => {
  return (
    <div className="relative">
      <img
        src={logo}
        alt="Business logo"
        className="w-20 h-20 rounded-xl object-cover border-4 border-white shadow-lg"
      />
      {verified && (
        <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
          <span className="text-white text-sm">✓</span>
        </div>
      )}
    </div>
  );
};
