import React, { useState,useEffect } from 'react';
import { deleteRecipe } from '../ApiService';
import { useNavigate } from 'react-router-dom';

function MyRecipe({ content, setMyRecipes, myRecipes, setMyCurrentRecipe, user, }) {
  // console.log(content);

  useEffect(() => {
    console.log(myRecipes,setMyRecipes)
  }, [])


  const deleteThis = async () => {
    const data = await deleteRecipe(content._id);
    console.log( data)
    const x = myRecipes.filter((item) => {return item._id !== data._id})
    console.log(x)
    setMyRecipes([...x])

  }

  let navigate = useNavigate();
  const openRecipe = () =>{
    console.log(content)
    setMyCurrentRecipe(content);
    navigate('/MyRecipe');
  }

  return (
    <div className='item-in-list'>

      <div onClick={openRecipe}>
        <h6>{content.title}</h6>
        <img className='food-image' src={content && content.image}></img>
      </div>

      <button className='button' onClick={deleteThis}>delete</button>

    </div>
  )
}

export default MyRecipe