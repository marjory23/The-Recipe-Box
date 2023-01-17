import React, { useState,useEffect } from 'react';
import { deleteRecipe } from '../ApiService';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

function MyRecipe({ content, setMyRecipes, myRecipes, setMyCurrentRecipe, user, setUser }) {


  let navigate = useNavigate();

  const deleteThis = async () => {
    const data = await deleteRecipe(content._id);
    console.log( data)
    console.log(user)
    const x = user.recipes.filter((item) => {return item._id !== data._id})
    console.log(x)
    setMyRecipes([...x])

    setUser(user => ({
      ...user,
      recipes: [...x]
    }))
  }

  const openRecipe = () =>{
    console.log(content)
    setMyCurrentRecipe(content);
    navigate('/MyRecipe');
  }



  return (
    <>

      <div className='item-in-list'>
        <div className='recipe-container' onClick={openRecipe}>
          <div className='recipe-title'>{content.title}</div>
          <img className='food-image' src={content && content.image}></img>
        </div>
          <div className='key round' onClick={deleteThis}>-</div>


      </div>
    </>
  )
}

export default MyRecipe