import React from "react";

const Recipe = ({ item }) => {
  return (
    <div className="food-each" key={item.length}>
      <div className="img-container">
        <img src={item.recipe.image} />
      </div>
      <div className='food-desc'>
      <h3 className='food-label'>{item.recipe.label}</h3>
      <p className='food-type'>{item.recipe.dishType}</p>
      <a className='food-url'href={`${item.recipe.url}`}>See More</a>
      </div>
    </div>
  );
};

export default Recipe;
