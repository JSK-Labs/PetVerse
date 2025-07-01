import React from 'react';
import { Star } from 'lucide-react';

interface Review {
  id: number;
  author: string;
  rating: number;
  date: string;
  content: string;
  helpful: number;
  avatar: string;
}

interface BusinessReviewsProps {
  reviews: Review[];
}

export const BusinessReviews: React.FC<BusinessReviewsProps> = ({ reviews }) => {
  return (
    <div className="space-y-6">
      {reviews.map((review) => (
        <div key={review.id} className="border-b border-gray-100 pb-4">
          <div className="flex items-center space-x-3 mb-2">
            <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
              {review.avatar}
            </div>
            <div>
              <h4 className="font-medium text-gray-900">{review.author}</h4>
              <p className="text-sm text-gray-500">{review.date}</p>
            </div>
          </div>
          <div className="flex items-center space-x-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < review.rating ? "text-yellow-400" : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <p className="text-gray-700 mb-2">{review.content}</p>
          <div className="flex items-center space-x-3 text-sm text-gray-500">
            <span>{review.helpful} found this helpful</span>
          </div>
        </div>
      ))}
    </div>
  );
};
