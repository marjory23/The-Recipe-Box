import { useEffect, useState } from 'react'
// import './App.css';
import { BrowserRouter } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import Register from './components/Register';
import Login from './components/Login'
import Main from './components/Main';
import RecipePage from './pages/RecipePage';
import MyRecipePage from './pages/MyRecipePage';
import AddRecipe from './components/AddRecipe';
import Logout from './components/Logout';
import MyRecipeList from './components/MyRecipeList';

import PageOne from './pages/MainPage';
import Layout from './pages/Layout';
import MyRecipesPage from './pages/MyRecipesPage';



function App() {

  const [user, setUser] = useState({});
  const [currentRecipe, setCurrentRecipe] = useState({});
  const [myCurrentRecipe, setMyCurrentRecipe] = useState({});
  const [popupForm, setPopupForm] = useState(false);
  const [recipes, setRecipes] = useState([]);

  useEffect(()=> {
    if (user.email) {
      setUser(user)
    }
  })


  return (

    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login setUser={setUser}/>}/>
        <Route path='/pageone' element={<PageOne user={user}
        setCurrentRecipe={setCurrentRecipe}
        setMyCurrentRecipe={setMyCurrentRecipe}
        setPopupForm={setPopupForm}
        popupForm={popupForm}
        recipes={recipes}
        setRecipes={setRecipes}
        />}/>

        <Route path='/myrecipes' element={<MyRecipesPage
        // user={user}
        // setCurrentRecipe={setCurrentRecipe}
        // setMyCurrentRecipe={setMyCurrentRecipe}
        // setPopupForm={setPopupForm}
        // popupForm={popupForm}
        // recipes={recipes}
        // setRecipes={setRecipes}
        />}/>


        <Route path='/Register' element={<Register setUser={setUser}/>} />

        <Route path='/' element={<Main user={user}
        setCurrentRecipe={setCurrentRecipe}
        setMyCurrentRecipe={setMyCurrentRecipe}
        setPopupForm={setPopupForm}
        popupForm={popupForm}
        recipes={recipes}
        setRecipes={setRecipes}
        />}/>

        <Route path='/mylist' element={<MyRecipeList
        user={user}
        setUser={setUser}
        setMyCurrentRecipe={setMyCurrentRecipe}
        />}/>

        <Route path='/add' element={<AddRecipe
        user={user}
        setUser={setUser}
        setPopupForm={setPopupForm}
        popupForm={popupForm}
        />}/>

        <Route path='/Recipe' element={<RecipePage />}/>
        <Route path='/MyRecipe' element={<MyRecipePage/>}/>
        <Route path='/logout' element={<Logout setUser={setUser}/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
