import React, { useState, useEffect } from 'react';
import { createRecipe, deleteRecipe, fetchMyRecipes } from '../ApiService';
import SearchRecipe from './SearchRecipe';
import RecipeList from './RecipeList';
import AddRecipe from './AddRecipe';
import MyList from './MyList';
import Header from './Header'

function Main({ user, setCurrentRecipe, setMyCurrentRecipe }) {

  const [recipes, setRecipes] = useState([]);
  const [myRecipes, setMyRecipes] = useState([]);

  const [popupForm, setPopupForm] = useState(false);

  useEffect (() => {
      fetchMyRecipes().then(data => {
      if (data) setMyRecipes(data)
    });
  }, [myRecipes]);

  return (
    <div className='Main'>
      <div>hello {user.firstName}</div>

      <Header></Header>

      <SearchRecipe
      recipes={recipes}
      setRecipes={setRecipes}
      />

      {recipes.length>0 && <RecipeList
      recipes={recipes}
      setCurrentRecipe={setCurrentRecipe}
      />}

      <button onClick={() => setPopupForm(true)}>Add your recipe</button>

      {popupForm &&
      <div>
        <AddRecipe
        createRecipe={createRecipe}
        setPopupForm={setPopupForm}/>
      </div>}

      {myRecipes.length>0 && <MyList
      myRecipes={myRecipes}
      setMyRecipes={setMyRecipes}
      fetchMyRecipes={fetchMyRecipes}
      deleteRecipe={deleteRecipe}
      setMyCurrentRecipe={setMyCurrentRecipe}
      />}


    </div>
  )
}

export default Main