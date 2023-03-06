import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import './Page.css'

function MyRecipePage({ currentRecipe }) {

  const content = currentRecipe;

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
        <div className='item-page-title'>{content.title}</div>
      </div>

      <div className='recipe-box'>

        <div className='item-page'>

          <div className='left-img'>
            <img className='food-image-in-item' src={content && content.image}></img>
          </div>

          <div className='right-container'>
            {content.duration!=null &&<div className='cooking-time'>cooking time: {content.duration}</div>}
            <div className='all-ingredients'>
              {content.ingredients.map((item, i)=> <p className='ingredients' key={content._id + i}>{`${item.quantity} ${item.measure} ${item.food}`}</p>)}
            </div>
            <div className='instructions-container'><p>{content.preparation}</p></div>
          </div>

        </div>

      </div>
    </>



  )
}

export default MyRecipePage