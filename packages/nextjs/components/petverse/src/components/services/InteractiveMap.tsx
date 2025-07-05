import React from "react";
import { MapPin, Navigation } from "lucide-react";

const InteractiveMap = () => {
  return (
    <div className="h-96 bg-gradient-to-br from-blue-100 to-green-100 relative">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <MapPin className="w-16 h-16 text-amber-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Interactive Map
          </h3>
          <p className="text-gray-600">
            Map integration would show service locations here
          </p>
        </div>
      </div>

      {/* Sample Map Markers */}
      <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-red-500 rounded-full border-2 border-white shadow-lg animate-pulse"></div>
      <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-lg animate-pulse"></div>
      <div className="absolute top-3/4 right-1/3 w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-lg animate-pulse"></div>
      <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-purple-500 rounded-full border-2 border-white shadow-lg animate-pulse"></div>

      {/* Map Controls */}
      <div className="absolute top-4 right-4 flex flex-col space-y-2">
        <button className="bg-white p-2 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <Navigation className="w-5 h-5 text-gray-600" />
        </button>
        <button className="bg-white p-2 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <span className="text-lg">+</span>
        </button>
        <button className="bg-white p-2 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <span className="text-lg">-</span>
        </button>
      </div>
    </div>
  );
};

export default InteractiveMap;