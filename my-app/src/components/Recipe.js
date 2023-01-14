import React from 'react'

function Recipe({ recipe }) {
  return (
    <div>

      <h6>{recipe.recipe.label}</h6>
      <h6>cooking time: {recipe.recipe.totalTime}</h6>
      <img className='food-image' src={recipe.recipe.image}></img>
      <div><a href={recipe.recipe.url}>link</a></div>
    </div>
  )
}

export default Recipe