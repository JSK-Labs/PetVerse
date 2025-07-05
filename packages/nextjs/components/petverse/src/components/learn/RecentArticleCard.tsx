import React from 'react';
import { Award, Clock, User } from 'lucide-react';

interface RecentArticleCardProps {
  article: {
    id: number;
    title: string;
    author: string;
    readTime: string;
    category: string;
    tokens: number;
  };
}

const RecentArticleCard: React.FC<RecentArticleCardProps> = ({ article }) => (
  <div
    key={article.id}
    className="bg-white rounded-xl p-6 border border-gray-200 hover:border-amber-300 hover:shadow-md transition-all duration-200 cursor-pointer"
  >
    <div className="flex items-center justify-between">
      <div className="flex-1">
        <div className="flex items-center space-x-3 mb-2">
          <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
            {article.category}
          </span>
          <div className="flex items-center space-x-1 text-amber-600">
            <Award className="w-3 h-3" />
            <span className="text-xs font-medium">+{article.tokens} PAWT</span>
          </div>
        </div>
        <h3 className="font-semibold text-gray-900 mb-1">{article.title}</h3>
        <div className="flex items-center space-x-4 text-sm text-gray-500">
          <div className="flex items-center space-x-1">
            <User className="w-4 h-4" />
            <span>{article.author}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>{article.readTime}</span>
          </div>
        </div>
      </div>
      <button className="ml-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white px-4 py-2 rounded-full hover:from-amber-600 hover:to-orange-700 transition-all duration-200">
        Read
      </button>
    </div>
  </div>
);

export default RecentArticleCard;
