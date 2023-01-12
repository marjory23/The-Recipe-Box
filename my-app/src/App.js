import { useState, useEffect } from 'react'
//import { fetchRecipes } from './ApiService';
import RecipeList from './components/RecipeList';
import './App.css';
import SearchRecipe from './components/SearchRecipe';
import Header from './components/Header';
import AddRecipe from './components/AddRecipe'

function App() {
  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('')
  const [popupForm, setPopupForm] = useState(false);

  const YOUR_APP_ID ='191b066f';
  const YOUR_APP_KEY ='6d33790b9d5fc0e22fdf061923940ab5'
  const BASE_URL = `https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`

  const fetchRecipes = async () => {
    try {
      const result = await fetch(BASE_URL, {
        mode: 'cors'
      })
      const data = await result.json();
      console.log(data)
      return data.hits;

    } catch (error) {
        console.log("error")
    }
  }

  const createRecipe = async (content) => {
    try  {
      const res = await fetch('http://localhost:3000/recipes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(content)
      })
      return res.json()
    } catch (e) {
      console.log(e)
    }
  };

  /* useEffect(() => {
    fetchRecipes()
    .then(data => {
      if (data) setRecipes(data)
    })
  }, [setRecipes]) */


  return (
    <div className="App">
      <Header></Header>
      <SearchRecipe
      search={search}
      setSearch={setSearch}
      fetchRecipes={fetchRecipes}
      recipes={recipes}
      setRecipes={setRecipes}>

      </SearchRecipe>
      {recipes.length>0 && <RecipeList
      recipes={recipes}>
      </RecipeList>}
      <button onClick={() => setPopupForm(true)}>Add your recipe</button>
      {popupForm && <AddRecipe
      createRecipe={createRecipe}
      setPopupForm={setPopupForm}/>}
    </div>
  );
}

export default App;
