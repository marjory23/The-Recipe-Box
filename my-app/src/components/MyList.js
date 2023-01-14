import React, { useEffect } from 'react';
import MyRecipe from './MyRecipe'

function MyList({ myRecipes, deleteRecipe }) {

  //console.log(myRecipes)

  return (
    <div className='recipie-container'>{myRecipes.map((item) => {
      return <div key={item._id}>
        <MyRecipe
        content={item}
        deleteRecipe={deleteRecipe}/>
    </div>
    })}</div>
  )
}

export default MyList