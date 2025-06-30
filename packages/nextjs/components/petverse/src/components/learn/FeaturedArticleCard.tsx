import React from 'react';
import { Award, Bookmark, Clock, Star } from 'lucide-react';

interface FeaturedArticleCardProps {
  article: {
    id: number;
    title: string;
    author: string;
    authorAvatar: string;
    readTime: string;
    rating: number;
    image: string;
    category: string;
    tokens: number;
    description: string;
    featured?: boolean;
  };
}

const FeaturedArticleCard: React.FC<FeaturedArticleCardProps> = ({ article }) => (
  <div
    key={article.id}
    className={`bg-white rounded-2xl overflow-hidden shadow-sm border hover:shadow-lg transition-all duration-200 cursor-pointer ${
      article.featured ? 'border-amber-300 ring-2 ring-amber-100' : 'border-gray-200'
    }`}
  >
    <div className="relative">
      <img
        src={article.image}
        alt={article.title}
        className="w-full h-48 object-cover"
      />
      {article.featured && (
        <div className="absolute top-4 left-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium">
          Featured
        </div>
      )}
      <div className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 rounded-full text-sm flex items-center space-x-1">
        <Award className="w-3 h-3" />
        <span>+{article.tokens}</span>
      </div>
    </div>
    <div className="p-6">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
          {article.category}
        </span>
        <button className="text-gray-400 hover:text-amber-600">
          <Bookmark className="w-5 h-5" />
        </button>
      </div>
      <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
        {article.title}
      </h3>
      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
        {article.description}
      </p>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-lg">{article.authorAvatar}</span>
          <div>
            <div className="text-sm font-medium text-gray-900">{article.author}</div>
            <div className="text-xs text-gray-500 flex items-center space-x-2">
              <Clock className="w-3 h-3" />
              <span>{article.readTime}</span>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-1">
          <Star className="w-4 h-4 text-yellow-400 fill-current" />
          <span className="text-sm font-medium text-gray-700">{article.rating}</span>
        </div>
      </div>
    </div>
  </div>
);

export default FeaturedArticleCard;
