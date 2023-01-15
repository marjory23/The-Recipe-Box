import React, { useEffect } from 'react';
import MyRecipe from './MyRecipe'

function MyList({ myRecipes, deleteRecipe, setMyRecipes, setMyCurrentRecipe }) {

  //console.log(myRecipes)

  return (
    <div className='recipie-container'>{myRecipes.map((item) => {
      return <div key={item._id}>
        <MyRecipe
        content={item}
        deleteRecipe={deleteRecipe}
        setMyRecipes={setMyRecipes}
        myRecipes={myRecipes}
        setMyCurrentRecipe={setMyCurrentRecipe}
        />
    </div>
    })}</div>
  )
}

export default MyList