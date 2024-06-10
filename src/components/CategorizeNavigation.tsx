// components/CategorizeNavigation.tsx

import React from "react";

const CategorizeNavigation: React.FC<{
  categories: string[];
  onSelect: (category: string) => void;
}> = ({ categories, onSelect }) => {
  return (
    <div className="flex justify-center gap-4 my-4">
      {categories.map((category, index) => (
        <button
          key={index}
          onClick={() => onSelect(category)}
          className="px-4 py-2 bg-white border border-gray-300 rounded-full shadow-md hover:bg-gray-100 transition duration-200 ease-in-out"
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategorizeNavigation;
