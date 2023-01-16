import React, { useState } from 'react';
import { deleteRecipe } from '../ApiService';
import { useNavigate } from 'react-router-dom';

function MyRecipe({ content, setMyRecipes, myRecipes, setMyCurrentRecipe }) {
  console.log(content);

  const deleteThis = () => {
    const data = deleteRecipe(content._id);
    setMyRecipes(myRecipes => myRecipes.filter(item => item.id !== data._id))
  }

  let navigate = useNavigate();
  const openRecipe = () =>{
    console.log(content)
    setMyCurrentRecipe(content);
    navigate('/MyRecipe');
  }

  return (
    <div className='item-in-list' onClick={openRecipe}>

      <h6>{content.title}</h6>
      <img className='food-image' src={content && content.image}></img>
      <button className='button' onClick={deleteThis}>delete</button>

    </div>
  )
}

export default MyRecipe