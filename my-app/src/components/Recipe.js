import React, { useState } from 'react'
import RecipeItem from './RecipeItem';

function Recipe({ recipe, lookupRecipe, item, setItem }) {

  const[popupRecipe, setPopupRecipe] = useState(false);

  return (
    <div>

      <h6 onClick={() => {setPopupRecipe(true)
      lookupRecipe(recipe.idMeal)}}>{recipe.strMeal}</h6>
      {/* <h6>cooking time: {recipe.recipe.totalTime}</h6> */}
      <img className='food-image' src={recipe.strMealThumb}></img>
      {/* <div><a href={recipe.recipe.url}>link</a></div> */}

      {popupRecipe && <RecipeItem
      setPopupRecipe={setPopupRecipe}
      item={item}
      setItem={setItem}
      />}

    </div>
  )
}

export default Recipe