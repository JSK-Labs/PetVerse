import React from "react";
import { Search, Filter } from "lucide-react";

interface ServiceSearchProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const ServiceSearch: React.FC<ServiceSearchProps> = ({
  searchQuery,
  setSearchQuery,
}) => {
  return (
    <div className="p-4 border-b border-gray-200">
      <div className="flex items-center space-x-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search for services, providers, or specialties..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-gray-50 rounded-full border-none focus:ring-2 focus:ring-amber-300 focus:outline-none"
          />
        </div>
        <button className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 px-4 py-3 rounded-full transition-colors">
          <Filter className="w-5 h-5 text-gray-600" />
          <span className="text-gray-600">Filters</span>
        </button>
      </div>
    </div>
  );
};

export default ServiceSearch;