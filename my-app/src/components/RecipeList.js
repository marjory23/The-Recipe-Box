import React, { useState } from 'react'
import Recipe from './Recipe'



function RecipeList({ recipes,setCurrentRecipe }) {

  return (
    <div className='recipie-container'>{recipes.map(recipe => {
      return <div key={recipe.id}>
        <Recipe
        recipe={recipe}
        setCurrentRecipe={setCurrentRecipe}
        />
    </div>
   })}</div>
  )
}

export default RecipeList