import React from 'react';

interface Service {
  name: string;
  price: string;
  duration: string;
  popular: boolean;
}

interface BusinessServicesProps {
  services: Service[];
}

export const BusinessServices: React.FC<BusinessServicesProps> = ({ services }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {services.map((service, index) => (
        <div
          key={index}
          className="border border-gray-200 rounded-xl p-6 hover:border-amber-300 hover:shadow-md transition-all duration-200"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <h4 className="font-semibold text-gray-900">{service.name}</h4>
              {service.popular && (
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                  Popular
                </span>
              )}
            </div>
            <span className="text-amber-600 font-semibold">{service.price}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-600 text-sm">{service.duration}</span>
            <button className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm hover:bg-amber-200 transition-colors">
              Book Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
