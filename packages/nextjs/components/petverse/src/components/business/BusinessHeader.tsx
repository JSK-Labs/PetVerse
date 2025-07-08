import React from "react";
import {
  Star,
  MapPin,
  Phone,
  Globe,
  Clock,
  Calendar,
  MessageCircle,
} from "lucide-react";

interface BusinessInfo {
  name: string;
  type: string;
  rating: number;
  reviews: number;
  address: string;
  phone: string;
  website: string;
  acceptsTokens: boolean;
  verified: boolean;
  reputationScore: number;
  pawTokensEarned: number;
}

export const BusinessHeader: React.FC<{ businessInfo: BusinessInfo }> = ({
  businessInfo,
}) => {
  return (
    <div className="flex-1">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
        <div>
          <div className="flex items-center space-x-3 mb-2">
            <h1 className="text-3xl font-bold text-gray-900">
              {businessInfo.name}
            </h1>
            {businessInfo.acceptsTokens && (
              <span className="bg-amber-100 text-amber-800 text-sm px-3 py-1 rounded-full font-medium">
                Accepts PAWT
              </span>
            )}
          </div>
          <p className="text-lg text-gray-600 mb-2">{businessInfo.type}</p>
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="font-medium">{businessInfo.rating}</span>
              <span>({businessInfo.reviews} reviews)</span>
            </div>
            <div className="flex items-center space-x-1">
              <MapPin className="w-4 h-4" />
              <span>{businessInfo.address}</span>
            </div>
          </div>
        </div>

        <div className="flex space-x-4 mt-4 sm:mt-0">
          <div className="text-center bg-blue-50 p-3 rounded-lg">
            <div className="text-xl font-bold text-blue-600">
              {businessInfo.reputationScore}
            </div>
            <div className="text-xs text-blue-700">Reputation</div>
          </div>
          <div className="text-center bg-amber-50 p-3 rounded-lg">
            <div className="text-xl font-bold text-amber-600">
              {businessInfo.pawTokensEarned}
            </div>
            <div className="text-xs text-amber-700">PAWT Earned</div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-4 mb-4">
        <div className="flex items-center space-x-2 text-gray-600">
          <Phone className="w-4 h-4" />
          <span>{businessInfo.phone}</span>
        </div>
        <div className="flex items-center space-x-2 text-gray-600">
          <Globe className="w-4 h-4" />
          <span>{businessInfo.website}</span>
        </div>
        <div className="flex items-center space-x-2 text-green-600">
          <Clock className="w-4 h-4" />
          <span>Open until 8:00 PM</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <button className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 py-3 rounded-full hover:from-amber-600 hover:to-orange-700 transition-all duration-200 flex items-center space-x-2">
          <Calendar className="w-5 h-5" />
          <span>Book Appointment</span>
        </button>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors flex items-center space-x-2">
          <MessageCircle className="w-5 h-5" />
          <span>Message</span>
        </button>
        <button className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-full hover:border-amber-300 hover:text-amber-700 transition-colors">
          Follow
        </button>
      </div>
    </div>
  );
};
