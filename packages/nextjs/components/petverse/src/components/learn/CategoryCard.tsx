import React from 'react';

interface CategoryCardProps {
  category: {
    name: string;
    icon: string;
    count: number;
    color: string;
  };
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => (
  <div
    key={category.name}
    className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-200 cursor-pointer border border-amber-100 hover:border-amber-300"
  >
    <div className="text-3xl mb-3">{category.icon}</div>
    <h3 className="font-semibold text-gray-900 mb-2">{category.name}</h3>
    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${category.color}`}>
      {category.count} articles
    </span>
  </div>
);

export default CategoryCard;
