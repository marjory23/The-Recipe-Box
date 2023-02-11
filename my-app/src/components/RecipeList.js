import React from 'react'
import Recipe from './Recipe'



function RecipeList({ recipes,setCurrentRecipe }) {


  return (
    <div className='outer-container'>

      <div className='recipes-container'>{recipes.map(recipe => {
        return <div className='single-recipe' key={recipe.id}>
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