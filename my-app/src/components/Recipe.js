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
      <div onClick={openRecipe}>

        <img className='food-image' src={recipe.thumbnail_url}></img>
        <h6 >{recipe.name}</h6>

      </div>
    </>
    )
}

export default Recipe