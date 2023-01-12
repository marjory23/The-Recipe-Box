import React from 'react'

function Recipe({ recipe }) {
  return (
    <div>

      <p>{recipe.recipe.label}</p>
      <p>cooking time: {recipe.recipe.totalTime}</p>
      <img className='food-image' src={recipe.recipe.image}></img>
      <div><a href={recipe.recipe.url}>link</a></div>
    </div>
  )
}

export default Recipe