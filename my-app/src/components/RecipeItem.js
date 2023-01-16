import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

function RecipeItem({  currentRecipe }) {
  console.log(currentRecipe);
  const recipe = currentRecipe;

  const navigate = useNavigate()
  const goBack = () => {
    navigate(-1);
  }


  return (
    <>
      <Header></Header>
      <div className='recipe-box'>

        <div className='item-page'>
          <div className='left-img'>
            <img className='food-image-in-item' src={recipe.thumbnail_url}></img>
          </div>
          <div className='right-container'>

            <h2>{recipe.name}</h2>
            {recipe.cook_time_minutes!=null &&<h6> cooking time: {recipe.cook_time_minutes}</h6>}
            <div>{recipe.sections[0].components && recipe.sections[0].components.map((item, i)=> <p className='ingredients' key={recipe.id + i}>{item.raw_text}</p>)}</div>
          </div>
        </div>
        <div className='instructions-container'>{recipe.instructions.map((item, i)=> <p key={recipe.id + i}>{item.display_text}</p>)}</div>
        <button className='button' onClick={goBack}>back</button>
      </div>
    </>
  )
}

export default RecipeItem