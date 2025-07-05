import React from "react";
import ServiceCard from "./ServiceCard";

interface Service {
  id: number;
  name: string;
  type: string;
  rating: number;
  distance: string;
  address: string;
  phone: string;
  hours: string;
  image: string;
  specialties: string[];
  verified: boolean;
  acceptsTokens: boolean;
}

interface ServiceListProps {
  services: Service[];
}

const ServiceList: React.FC<ServiceListProps> = ({ services }) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-900">Nearby Services</h2>
        <span className="text-sm text-gray-500">{services.length} results</span>
      </div>

      <div className="space-y-4">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>

      {/* Load More */}
      <div className="text-center">
        <button className="bg-white border-2 border-amber-300 text-amber-700 px-6 py-3 rounded-full hover:bg-amber-50 transition-all duration-200">
          Load More Services
        </button>
      </div>
    </div>
  );
};

export default ServiceList;