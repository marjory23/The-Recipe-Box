import React, { useEffect, useState } from 'react';
import MyRecipe from './MyRecipe';
import { useNavigate } from 'react-router-dom';

function MyList({ user, setUser, setMyCurrentRecipe }) {
  const [myRecipes, setMyRecipes] = useState(user.recipes);

  let navigate = useNavigate()

  useEffect (() => {
    console.log(user)


  },[myRecipes] );

  const addRecipe = () =>{
    navigate('/add');
  }

  const backToSearch = () =>{
    navigate('/');
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
          setMyRecipes={setMyRecipes}
          myRecipes={myRecipes}
          setMyCurrentRecipe={setMyCurrentRecipe}
          user={user}
          setUser={setUser}
          />
      </div>
      })}</div>

      <button onClick={addRecipe}>Add your recipe</button>
      <button onClick={backToSearch}>back to search</button>

    </div>
  )
}

export default MyList