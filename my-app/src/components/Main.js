import React, { useState, useEffect } from 'react';
import SearchRecipe from './SearchRecipe';
import RecipeList from './RecipeList';
import Header from './Header'
import { useNavigate } from 'react-router-dom';

function Main({ user, setCurrentRecipe, recipes, setRecipes
}) {

  let navigate = useNavigate()

  useEffect(() => {
    if(!user.email) {
   navigate('/login')
    }
  }, [user.email, navigate]);

  const addRecipe = () =>{
    navigate('/add');
  }

  const goToMyRecipesList = () =>{
    navigate('/mylist');
  }

  const logout = () =>{
    navigate('/logout');
  }

  return (
    <div className='Main'>


      <Header></Header>
      <div className='hello'>hello {user.firstName}</div>
      <button onClick={logout}>logout</button>

      <SearchRecipe
      recipes={recipes}
      setRecipes={setRecipes}
      />

      {recipes.length>0 && <RecipeList
      recipes={recipes}
      setCurrentRecipe={setCurrentRecipe}
      />
      }

      <button onClick={addRecipe}>Add your recipe</button>

      <button onClick={goToMyRecipesList}>My Recipes List</button>

    </div>
  )
}

export default Main