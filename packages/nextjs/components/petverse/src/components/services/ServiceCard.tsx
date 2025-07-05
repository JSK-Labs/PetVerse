import React from "react";
import { MapPin, Star, Clock, Phone } from "lucide-react";

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

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-amber-100 hover:shadow-md transition-all duration-200 cursor-pointer">
      {/* Service Header */}
      <div className="flex items-start space-x-4 mb-4">
        <img
          src={service.image}
          alt={service.name}
          className="w-16 h-16 rounded-xl object-cover"
        />
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-1">
            <h3 className="font-semibold text-gray-900">{service.name}</h3>
            {service.verified && (
              <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
            )}
            {service.acceptsTokens && (
              <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full">
                PAWT
              </span>
            )}
          </div>
          <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="font-medium">{service.rating}</span>
            </div>
            <div className="flex items-center space-x-1">
              <MapPin className="w-4 h-4" />
              <span>{service.distance}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span className="text-green-600">{service.hours}</span>
            </div>
          </div>
          <p className="text-gray-600 text-sm">{service.address}</p>
        </div>
      </div>

      {/* Specialties */}
      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          {service.specialties.map((specialty, index) => (
            <span
              key={index}
              className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full"
            >
              {specialty}
            </span>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between">
        <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
          <Phone className="w-4 h-4" />
          <span className="text-sm">Call</span>
        </button>
        <button className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-4 py-2 rounded-full hover:from-amber-600 hover:to-orange-700 transition-all duration-200">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;