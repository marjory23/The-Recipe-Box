import React from 'react'
import Recipe from './Recipe'

function RecipeList({ recipes }) {
  return (
    <div>{recipes.map(recipe => {
      return <div key={recipe.recipe.calories}>
        <Recipe
        recipe={recipe}>
          
        </Recipe>
    </div>
   })}</div>
  )
}

export default RecipeList