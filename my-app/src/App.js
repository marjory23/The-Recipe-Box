import { useState } from 'react'
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import Register from './components/Register';
import Login from './components/Login'
import Main from './components/Main';
import RecipeItem from './components/RecipeItem';
import MyRecipePage from './components/MyRecipePage';
import AddRecipe from './components/AddRecipe';
import Logout from './components/Logout';


function App() {

  const [user, setUser] = useState({});
  const [currentRecipe, setCurrentRecipe] = useState({});
  const [myCurrentRecipe, setMyCurrentRecipe] = useState({});
  const [myRecipes, setMyRecipes] = useState([]);
  const [popupForm, setPopupForm] = useState(false);
  const [recipes, setRecipes] = useState([]);


  return (

    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login setUser={setUser}/>}/>
        <Route path='/Register' element={<Register setUser={setUser}/>} />
        <Route path='/' element={<Main user={user} setCurrentRecipe={setCurrentRecipe} setMyCurrentRecipe={setMyCurrentRecipe}
        myRecipes={myRecipes} setMyRecipes={setMyRecipes}
        setPopupForm={setPopupForm}
        popupForm={popupForm}
        recipes={recipes}
        setRecipes={setRecipes}
        />}/>
        <Route path='/add' element={<AddRecipe user={user}
        myRecipes={myRecipes} setMyRecipes={setMyRecipes}
        setPopupForm={setPopupForm}
        popupForm={popupForm}
        />}/>
        <Route path='/Recipe' element={<RecipeItem currentRecipe ={currentRecipe}/>}/>
        <Route path='/MyRecipe' element={<MyRecipePage currentRecipe ={myCurrentRecipe}/>}/>
        <Route path='/logout' element={<Logout setUser={setUser}/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
