import React from 'react';
import classNames from 'classnames';

interface CardCategoryProps {
  category: string;
  onClick: () => void;
}

export const CardCategory: React.FC<CardCategoryProps> = ({ category, onClick }) => {
  return (
    <div
      className={classNames(
        "bg-category-card cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl",
        "rounded-lg shadow-md overflow-hidden",
        "flex items-center justify-center",
        "p-6"
      )}
      onClick={onClick}
    >
      <h2 className="text-lg font-semibold text-white">{category}</h2>
    </div>
  );
};
