import React from "react";

interface ServiceType {
  id: string;
  name: string;
  icon: string;
  count: number;
}

interface ServiceTypeFiltersProps {
  serviceTypes: ServiceType[];
  selectedService: string;
  setSelectedService: (serviceId: string) => void;
}

const ServiceTypeFilters: React.FC<ServiceTypeFiltersProps> = ({
  serviceTypes,
  selectedService,
  setSelectedService,
}) => {
  return (
    <div className="mb-8">
      <div className="flex flex-wrap gap-3 justify-center">
        {serviceTypes.map((type) => (
          <button
            key={type.id}
            onClick={() => setSelectedService(type.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-full border-2 transition-all duration-200 ${
              selectedService === type.id
                ? "border-amber-500 bg-amber-50 text-amber-800"
                : "border-gray-200 bg-white text-gray-600 hover:border-amber-300 hover:bg-amber-50"
            }`}
          >
            <span className="text-lg">{type.icon}</span>
            <span className="font-medium">{type.name}</span>
            <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
              {type.count}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ServiceTypeFilters;