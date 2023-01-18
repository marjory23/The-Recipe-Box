import React, { useState } from 'react'
import RecipeItem from './RecipeItem';
import { useNavigate, Navigate, Link } from 'react-router-dom';

function Recipe({ recipe, setCurrentRecipe}) {

  let navigate = useNavigate();
  const openRecipe = () =>{
    console.log(recipe)
    setCurrentRecipe(recipe);
    navigate('/Recipe');
  }

  return (


      <>

        <div className='item-in-list'>
          <div className='recipe-container' onClick={openRecipe}>
            <div className='recipe-title'>{recipe.name}</div>
            <div className='div-img'><img className='food-image' src={recipe.thumbnail_url}></img></div>
          </div>
     
        </div>
      </>

    )
}

export default Recipe