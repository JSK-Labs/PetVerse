'use client';

import { Award, Heart, MessageCircle, Share2 } from 'lucide-react';

import { Post } from '../../types/post';

interface PostCardProps {
  post: Post;
}

export const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-amber-100">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center text-white text-lg">
            {post.user.avatar}
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-semibold text-gray-900">{post.user.name}</span>
              {post.user.verified && (
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
              )}
              {post.campaign && (
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Campaign</span>
              )}
            </div>
            <div className="text-sm text-gray-500">{post.user.role} • {post.timestamp}</div>
          </div>
        </div>
        <div className="flex items-center space-x-2 bg-amber-50 px-3 py-1 rounded-full">
          <Award className="w-4 h-4 text-amber-600" />
          <span className="text-sm font-medium text-amber-800">+{post.tokens} PAWT</span>
        </div>
      </div>

      <p className="text-gray-700 mb-4">{post.content}</p>
      {post.image && (
        <div className="mb-4 rounded-xl overflow-hidden">
          <img src={post.image} alt="Post" className="w-full h-64 object-cover" />
        </div>
      )}

      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <div className="flex items-center space-x-6">
          <button className="flex items-center space-x-2 text-gray-600 hover:text-red-500 transition-colors">
            <Heart className="w-5 h-5" />
            <span>{post.likes}</span>
          </button>
          <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition-colors">
            <MessageCircle className="w-5 h-5" />
            <span>{post.comments}</span>
          </button>
          <button className="flex items-center space-x-2 text-gray-600 hover:text-green-500 transition-colors">
            <Share2 className="w-5 h-5" />
            <span>Share</span>
          </button>
        </div>
      </div>
    </div>
  );
};
