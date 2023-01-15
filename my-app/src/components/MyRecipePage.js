import React from 'react';
import { useNavigate } from 'react-router-dom';

function MyRecipePage({ currentRecipe }) {

  const content = currentRecipe;

  const navigate = useNavigate()
  const goBack = () => {
    navigate(-1);
  }

  return (
    <div className='recipe-page'>
      <h6>{content.title}</h6>
      <h6>cooking time: {content.duration}</h6>
      <img className='food-image-big' src={content && content.image}></img>
      <p>{content.preparation}</p>
      <button onClick={goBack}>x</button>
    </div>
  )
}

export default MyRecipePage