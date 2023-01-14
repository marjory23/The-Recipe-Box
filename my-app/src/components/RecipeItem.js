import React from 'react'

function RecipeItem({ item, setItem, setPopupRecipe}) {
  return (
    <div>{item.strInstructions}</div>
  )
}

export default RecipeItem