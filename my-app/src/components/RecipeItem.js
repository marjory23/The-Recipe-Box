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

  const logout = () =>{
    navigate('/logout');
  }

  return (
    <>
      <Header></Header>
      <div className='logout-icon' onClick={logout}>
         <img src='../logout1Traced.png' />
      </div>

      <div className='button-container'>
        <div className='key' onClick={goBack}>«</div>
        <div className='item-page-title'>{recipe.name}</div>
      </div>

      <div className='recipe-box'>

        <div className='item-page'>

          <div className='left-img'>
            <img className='food-image-in-item' src={recipe.thumbnail_url}></img>
          </div>

          <div className='right-container'>
            {recipe.cook_time_minutes!=null &&<h6> cooking time: {recipe.cook_time_minutes}</h6>}
            <div>{recipe.sections[0].components && recipe.sections[0].components.map((item, i)=> <p className='ingredients' key={recipe.id + i}>{item.raw_text}</p>)}</div>
        <div className='instructions-container'>{recipe.instructions.map((item, i)=> <p key={recipe.id + i}>{item.display_text}</p>)}</div>
          </div>
        </div>

      </div>
    </>
  )
}

export default RecipeItem