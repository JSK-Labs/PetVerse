'use client';

import { posts } from '../../mock/posts';
import { PostCard } from './PostCard';

export const PostList: React.FC = () => {
  return (
    <div className="space-y-6">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};
