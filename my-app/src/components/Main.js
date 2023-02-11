import React, { useEffect } from 'react';
import SearchRecipe from './SearchRecipe';
import RecipeList from './RecipeList';
import Header from './Header'
import { useNavigate } from 'react-router-dom';

function Main({ user, setCurrentRecipe, recipes, setRecipes }) {

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
    <div>

      <Header></Header>

      <div className='hello'>Hello {user.firstName}!</div>
      <div className='logout-icon' onClick={logout}>
         <img src='../logout1Traced.png' />
      </div>

      <div className='button-container'>

        <div  onClick={goToMyRecipesList}>Go to my  List</div>
        <div className='add-recipe' onClick={addRecipe}>+</div>

      </div>

      <SearchRecipe
      recipes={recipes}
      setRecipes={setRecipes}
      />

      <div>
        {recipes.length>0 && <RecipeList
        recipes={recipes}
        setCurrentRecipe={setCurrentRecipe}
        /> }
      </div>


    </div>
  )
}

export default Main