import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

function MyRecipePage({ currentRecipe }) {

  const content = currentRecipe;

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
            <img className='food-image-in-item' src={content && content.image}></img>
          </div>
          <div className='right-container'>

            <h2>{content.title}</h2>
            {content.duration!=null &&<h6>cooking time: {content.duration}</h6>}
            {<div>{content.ingredients.map((item, i)=> <p className='ingredients' key={content._id + i}>{`${item.quantity} ${item.measure} ${item.food}`}</p>)}</div>}
          </div>
        </div>
        <div className='instructions-container'><p>{content.preparation}</p></div>

        <button className='button' onClick={goBack}>back</button>
        </div>
    </>



  )
}

export default MyRecipePage