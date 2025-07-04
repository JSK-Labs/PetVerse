'use client';

export const PostInput: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl p-6 mb-6 shadow-sm border border-amber-100">
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold">
          A
        </div>
        <div className="flex-1">
          <input
            type="text"
            placeholder="Share something about your pet..."
            className="w-full p-3 bg-gray-50 rounded-full border-none focus:ring-2 focus:ring-amber-300 focus:outline-none"
          />
        </div>
        <button className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 py-3 rounded-full hover:from-amber-600 hover:to-orange-700 transition-all duration-200">
          Share
        </button>
      </div>
    </div>
  );
};
