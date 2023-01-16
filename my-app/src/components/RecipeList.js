import React, { useState } from 'react'
import Recipe from './Recipe'



function RecipeList({ recipes,setCurrentRecipe, more }) {


  return (
    <div>
      <div className='recipie-container'>{recipes.map(recipe => {
        return <div key={recipe.id}>
          <Recipe
          recipe={recipe}
          setCurrentRecipe={setCurrentRecipe}
          />
        </div>
      })}</div>
       
    </div>
  )
}

export default RecipeList