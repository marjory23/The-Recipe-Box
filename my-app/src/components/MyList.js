import React, { useEffect, useState } from 'react';
import MyRecipe from './MyRecipe';

import { fetchMyRecipes } from '../ApiService';
import { useNavigate } from 'react-router-dom';

function MyList({ myRecipes, user,
  //deleteRecipe,
  setMyRecipes, setMyCurrentRecipe }) {

  //console.log(myRecipes)

  /* const [list, setList] = useState(myRecipes)

  useEffect(()=> setList(myRecipes),[]) */

  let navigate = useNavigate()

  useEffect (() => {
    console.log(user)
    if(user.recipes) {
     setMyRecipes(user.recipes)
    }
  },[myRecipes] );

  const addRecipe = () =>{
    navigate('/add');
  }


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

      <button onClick={addRecipe}>Add your recipe</button>

    </div>
  )
}

export default MyList