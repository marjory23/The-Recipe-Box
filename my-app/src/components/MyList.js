import React, { useEffect } from 'react';
import MyRecipe from './MyRecipe'

function MyList({ myRecipes, user,
  //deleteRecipe,
  setMyRecipes, setMyCurrentRecipe }) {

  //console.log(myRecipes)



  return (
    <div>
      <div className='list-title'><h2>My Recipes List</h2></div>
      <div className='recipie-container'>{myRecipes.map((item) => {
        return <div key={item._id}>
          <MyRecipe
          content={item}
          //deleteRecipe={deleteRecipe}
          setMyRecipes={setMyRecipes}
          myRecipes={myRecipes}
          setMyCurrentRecipe={setMyCurrentRecipe}
          user={user}
          />
      </div>
      })}</div>

    </div>
  )
}

export default MyList