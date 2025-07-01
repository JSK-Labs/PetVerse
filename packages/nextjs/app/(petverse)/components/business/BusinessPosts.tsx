import React from 'react';

interface Post {
  id: number;
  content: string;
  image?: string;
  likes: number;
  comments: number;
  timestamp: string;
}

interface BusinessPostsProps {
  posts: Post[];
}

export const BusinessPosts: React.FC<BusinessPostsProps> = ({ posts }) => {
  return (
    <div className="space-y-6">
      {posts.map((post) => (
        <div key={post.id} className="border-b border-gray-100 pb-4">
          <div className="flex items-center space-x-3 mb-2">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl">
              🐶
            </div>
            <h4 className="font-medium text-gray-900">Business Post</h4>
          </div>
          <p className="text-gray-700 mb-2">{post.content}</p>
          {post.image && (
            <img
              src={post.image}
              alt="post"
              className="w-full h-48 object-cover rounded-lg mb-2"
            />
          )}
          <div className="flex items-center space-x-4 text-sm">
            <button className="flex items-center space-x-1 text-gray-500 hover:text-gray-700">
              <span className="text-gray-400">{post.likes}</span>
              <span>Like</span>
            </button>
            <button className="flex items-center space-x-1 text-gray-500 hover:text-gray-700">
              <span className="text-gray-400">{post.comments}</span>
              <span>Comment</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
