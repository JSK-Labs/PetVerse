"use client"
import React from 'react';
import {
  LearnHeader,
  CategoryBrowse,
  FeaturedArticles,
  RecentArticles,
  LearningSidebar,
  Article,
  Category,
  Webinar
} from '../../../../components/petverse/src/components/learn';

 const LearnSection: React.FC = () => {
  const categories: Category[] = [
    { name: 'Health & Wellness', icon: '🏥', count: 47, color: 'bg-red-100 text-red-800' },
    { name: 'Nutrition', icon: '🍎', count: 32, color: 'bg-green-100 text-green-800' },
    { name: 'Training', icon: '🎾', count: 28, color: 'bg-blue-100 text-blue-800' },
    { name: 'Grooming', icon: '✂️', count: 19, color: 'bg-purple-100 text-purple-800' },
    { name: 'Behavior', icon: '🧠', count: 24, color: 'bg-yellow-100 text-yellow-800' },
    { name: 'Emergency Care', icon: '🚨', count: 15, color: 'bg-orange-100 text-orange-800' }
  ];

  const featuredArticles: Article[] = [
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

  const recentArticles: Article[] = [
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

  const webinars: Webinar[] = [
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
    <section className='w-full h-full bg-white'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <LearnHeader />
        <CategoryBrowse categories={categories} />
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <FeaturedArticles articles={featuredArticles} />
            <RecentArticles articles={recentArticles} />
          </div>
          <LearningSidebar webinars={webinars} />
        </div>
      </div>
    </section>
  );
};

export default LearnSection
