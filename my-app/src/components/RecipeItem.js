import React from 'react'

function RecipeItem({ recipe, item, setItem, setPopupRecipe}) {
  return (
    <div className='recipe-box'>

    <div className='item-page'>
      <div className='left-img'>
        <img className='food-image-in-item' src={recipe.thumbnail_url}></img>
      </div>
      <div className='right-container'>
        <button onClick={() => {setPopupRecipe(false)}}>x</button>
        <h2>{recipe.name}</h2>
        {recipe.cook_time_minutes!=null &&<h6> cooking time: {recipe.cook_time_minutes}</h6>}
        <div>{recipe.sections[0].components.map((item, i)=> <p className='ingredients' key={recipe.id + i}>{item.raw_text}</p>)}</div>
      </div>
    </div>
    <div className='instructions-container'>{recipe.instructions.map((item, i)=> <p key={recipe.id + i}>{item.display_text}</p>)}</div>

    </div>
  )
}

export default RecipeItem