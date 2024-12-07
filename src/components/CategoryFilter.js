import React from "react";

function CategoryFilter({CATEGORIES, onCategoryClick}) {
  
 
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {CATEGORIES.map((category) => (
        <button key={category} id={category} onClick={() => onCategoryClick(category)}>{category}</button>
      ))}
    </div>
  );
}

export default CategoryFilter;
