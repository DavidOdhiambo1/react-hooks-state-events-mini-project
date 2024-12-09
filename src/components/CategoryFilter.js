import React from "react";

function CategoryFilter({categories, onCategoryClick, selectedCategory}) {
  
 
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => (
        <button key={category} id={category} className={selectedCategory === category ? "selected" : ""} onClick={() => onCategoryClick(category)}>{category}</button>
      ))}
    </div>
  );
}

export default CategoryFilter;
