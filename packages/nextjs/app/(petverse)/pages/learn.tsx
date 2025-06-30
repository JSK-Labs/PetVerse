import React from 'react';
import {
  Achievements,
  CategoryCard,
  DailyTip,
  FeaturedArticleCard,
  LearningProgress,
  RecentArticleCard,
  UpcomingWebinars,
} from '../../../components/petverse/src/components/learn';

export const LearnSection: React.FC = () => {
  const categories = [
    { name: 'Health & Wellness', icon: '🏥', count: 47, color: 'bg-red-100 text-red-800' },
    { name: 'Nutrition', icon: '🍎', count: 32, color: 'bg-green-100 text-green-800' },
    { name: 'Training', icon: '🎾', count: 28, color: 'bg-blue-100 text-blue-800' },
    { name: 'Grooming', icon: '✂️', count: 19, color: 'bg-purple-100 text-purple-800' },
    { name: 'Behavior', icon: '🧠', count: 24, color: 'bg-yellow-100 text-yellow-800' },
    { name: 'Emergency Care', icon: '🚨', count: 15, color: 'bg-orange-100 text-orange-800' }
  ];

  const featuredArticles = [
    {
      id: 1,
      title: 'Complete Guide to Pet Vaccination Schedules',
      author: 'Dr. Sarah Mitchell',
      authorAvatar: '👩‍⚕️',
      readTime: '8 min',
      rating: 4.9,
      image: 'https://images.pexels.com/photos/6131617/pexels-photo-6131617.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Health & Wellness',
      tokens: 25,
      description: 'Learn about essential vaccinations for puppies, adult dogs, and senior pets...',
      featured: true
    },
    {
      id: 2,
      title: 'Raw Diet vs Commercial Food: What\'s Best?',
      author: 'Pet Nutrition Expert',
      authorAvatar: '👨‍🔬',
      readTime: '12 min',
      rating: 4.7,
      image: 'https://images.pexels.com/photos/4498136/pexels-photo-4498136.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Nutrition',
      tokens: 20,
      description: 'Compare different feeding approaches and find what works for your pet...'
    },
    {
      id: 3,
      title: 'Understanding Cat Behavior: Signs of Stress',
      author: 'Animal Behaviorist',
      authorAvatar: '🧑‍⚕️',
      readTime: '6 min',
      rating: 4.8,
      image: 'https://images.pexels.com/photos/1741205/pexels-photo-1741205.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Behavior',
      tokens: 15,
      description: 'Recognize the subtle signs that your cat might be experiencing stress...'
    }
  ];

  const recentArticles = [
    {
      id: 4,
      title: 'First Aid for Common Pet Emergencies',
      author: 'Emergency Vet Team',
      readTime: '10 min',
      category: 'Emergency Care',
      tokens: 30
    },
    {
      id: 5,
      title: 'Positive Reinforcement Training Techniques',
      author: 'Professional Trainer',
      readTime: '7 min',
      category: 'Training',
      tokens: 18
    },
    {
      id: 6,
      title: 'Seasonal Grooming Tips for Long-Haired Breeds',
      author: 'Professional Groomer',
      readTime: '5 min',
      category: 'Grooming',
      tokens: 12
    }
  ];

  const webinars = [
    {
      title: 'Senior Pet Care Essentials',
      presenter: 'Dr. Jennifer Walsh',
      date: 'March 15, 2024',
      time: '7:00 PM EST',
      attendees: 234,
      live: true
    },
    {
      title: 'Puppy Training Fundamentals',
      presenter: 'Mark Thompson',
      date: 'March 20, 2024',
      time: '6:00 PM EST',
      attendees: 156,
      live: false
    }
  ];

  return (

    <section className='w-full h-full  bg-gradient-to-br from-amber-50 to-blue-50'>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Learn & Grow with Your Pet
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Access expert knowledge, earn reputation tokens, and become a better pet parent through our curated educational content.
        </p>
      </div>

      {/* Categories */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Browse by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <CategoryCard key={category.name} category={category} />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-3">
          {/* Featured Articles */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-gray-900">Featured Articles</h2>
              <button className="text-amber-600 hover:text-amber-700 font-medium">View All</button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredArticles.map((article) => (
                <FeaturedArticleCard key={article.id} article={article} />
              ))}
            </div>
          </div>

          {/* Recent Articles */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Recent Articles</h2>
            <div className="space-y-4">
              {recentArticles.map((article) => (
                <RecentArticleCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <LearningProgress />
          <UpcomingWebinars webinars={webinars} />
          <DailyTip />
          <Achievements />
        </div>
      </div>
    </div>
    </section>
  );
};