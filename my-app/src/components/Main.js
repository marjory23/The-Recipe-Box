import React, { useState, useEffect } from 'react';
import {
  //createRecipe, deleteRecipe,
  fetchMyRecipes } from '../ApiService';
import SearchRecipe from './SearchRecipe';
import RecipeList from './RecipeList';
//import AddRecipe from './AddRecipe';
import MyList from './MyList';
import Header from './Header'
import { useNavigate } from 'react-router-dom';

function Main({ user, setCurrentRecipe, setMyCurrentRecipe,
  myRecipes, setMyRecipes, setPopupForm, popupForm,
  recipes, setRecipes
}) {

  // const [recipes, setRecipes] = useState([]);
  // const [myRecipes, setMyRecipes] = useState([]);

  // const [popupForm, setPopupForm] = useState(false);

  /* useEffect (() => {
    setRecipes(recipes)
  }, [recipes]); */

 /*  useEffect (() => {
      fetchMyRecipes().then(data => {
      if (data) setMyRecipes(data)
    });
  }, [myRecipes]); */
  let navigate = useNavigate()

  useEffect(() => {
    if(!user.email) {
   navigate('/login')

    }
  }, [user.email, navigate]);


  /* useEffect (() => {
    console.log(user)
    if(user.recipes) {
    setMyRecipes(user.recipes)
    }
  }, ); */





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
      <div>hello {user.firstName}</div>

      <Header></Header>
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

      {/* {popupForm &&
      <div>
        <AddRecipe
        // setPopupForm={setPopupForm}
        // myRecipes={myRecipes}
        // setMyRecipes={setMyRecipes}
        />
      </div>} */}

      <button onClick={goToMyRecipesList}>My Recipes List</button>

      {/* <MyList
      myRecipes={myRecipes}
      setMyRecipes={setMyRecipes}
      fetchMyRecipes={fetchMyRecipes}
      user={user}
      //deleteRecipe={deleteRecipe}
      setMyCurrentRecipe={setMyCurrentRecipe}
      /> */}


    </div>
  )
}

export default Main