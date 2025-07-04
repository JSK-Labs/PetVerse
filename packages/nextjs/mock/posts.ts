import { Post } from '../types/post';

export const posts: Post[] = [
  {
    id: 1,
    user: { name: 'Sarah Mitchell', avatar: '👩‍⚕️', role: 'Veterinarian', verified: true },
    content: 'Just helped Luna recover from her surgery! 🐕 Remember, post-op care is crucial.',
    image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=600',
    likes: 127,
    comments: 24,
    timestamp: '2 hours ago',
    tokens: 15,
  },
  {
    id: 2,
    user: { name: 'PetCare Foundation', avatar: '🏥', role: 'Organization', verified: true },
    content: 'New vaccination campaign next week! Free vaccines in the downtown area. 💉',
    likes: 89,
    comments: 12,
    timestamp: '4 hours ago',
    tokens: 25,
    campaign: true
  },
  {
    id: 3,
    user: { name: 'Mike Rodriguez', avatar: '👨', role: 'Pet Owner', verified: false },
    content: 'Max learned a new trick today! Positive reinforcement never fails. 🎾',
    image: 'https://images.pexels.com/photos/1564506/pexels-photo-1564506.jpeg?auto=compress&cs=tinysrgb&w=600',
    likes: 156,
    comments: 31,
    timestamp: '6 hours ago',
    tokens: 8
  }
];
