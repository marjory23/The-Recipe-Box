import React, { useState } from 'react';
import { fetchRecipes, createRecipe, deleteRecipe, fetchMyRecipes } from '../ApiService';
import SearchRecipe from './SearchRecipe';
import RecipeList from './RecipeList';
import AddRecipe from './AddRecipe';
import MyList from './MyList';

function Main({ user }) {

  const [recipes, setRecipes] = useState([]);
  const [myRecipes, setMyRecipes] = useState([]);
  const [search, setSearch] = useState('');

  const [popupForm, setPopupForm] = useState(false);

  return (
    <>
      <div>hello {user.firstName}</div>

      <SearchRecipe
      search={search}
      setSearch={setSearch}
      fetchRecipes={fetchRecipes}
      recipes={recipes}
      setRecipes={setRecipes}>
      </SearchRecipe>

      {recipes.length>0 && <RecipeList
      recipes={recipes}
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
      deleteRecipe={deleteRecipe}/>}


    </>
  )
}

export default Main