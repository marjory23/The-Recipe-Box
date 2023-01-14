import React from 'react'

function MyRecipePage({ setPopupRecipe, content }) {
  return (
    <div className='recipe-page'>
      <h6>{content.title}</h6>
      <h6>cooking time: {content.duration}</h6>
      <img className='food-image-big' src={content && content.image}></img>
      <p>{content.preparation}</p>
      <button onClick={() => setPopupRecipe(false)}>x</button>
    </div>
  )
}

export default MyRecipePage