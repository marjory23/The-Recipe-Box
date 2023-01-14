import React, { useState } from 'react'
import MyRecipePage from './MyRecipePage'

function MyRecipe({ content, deleteRecipe }) {

  const[popupRecipe, setPopupRecipe] = useState(false)

  return (
    <div>
      <h6 onClick={() => setPopupRecipe(true)}>{content.title}</h6>
      <h6>cooking time: {content.duration}</h6>
      <img className='food-image' src={content && content.image}></img>
      <button onClick={() => deleteRecipe(content._id)}>delete</button>

      {popupRecipe && <MyRecipePage
      setPopupRecipe={setPopupRecipe}
      content={content}
      />}

    </div>
  )
}

export default MyRecipe