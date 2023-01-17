import React, { useEffect, useState } from 'react';
import MyRecipe from './MyRecipe'

function MyList({ myRecipes, user,
  //deleteRecipe,
  setMyRecipes, setMyCurrentRecipe }) {

  //console.log(myRecipes)

  /* const [list, setList] = useState(myRecipes)

  useEffect(()=> setList(myRecipes),[]) */
  return (
    <div>
      {/* {myRecipes.length>0 && */}
      <div className='list-title'><h2>My Recipes List</h2></div>
      {/* } */}
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