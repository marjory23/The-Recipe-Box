import React, { useState } from 'react'
import RecipeItem from './RecipeItem';

function Recipe({ recipe,
  //lookupRecipe, item, setItem
}) {

  const[popupRecipe, setPopupRecipe] = useState(false);

  return (
    <div>
      <img className='food-image' src={recipe.thumbnail_url}></img>
      <h6 onClick={() => {setPopupRecipe(true)
      // lookupRecipe(recipe.idMeal)
      }}>{recipe.name}</h6>
      

      {/* <div><a href={recipe.recipe.url}>link</a></div> */}

      {popupRecipe && <RecipeItem
      setPopupRecipe={setPopupRecipe}
      recipe={recipe}
      // item={item}
      // setItem={setItem}
      />}

    </div>
  )
}

export default Recipe