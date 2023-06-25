import { useEffect, useState } from 'react'
// import './App.css';
import { BrowserRouter } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import Register from './components/Register';
import Login from './components/Login'
import Main from './components/Main';
import RecipePage from './components/RecipePage';
import MyRecipePage from './components/MyRecipePage';
import AddRecipe from './components/AddRecipe';
import Logout from './components/Logout';
import MyRecipeList from './components/MyRecipeList';


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

        <Route path='/Recipe' element={<RecipePage currentRecipe ={currentRecipe}/>}/>
        <Route path='/MyRecipe' element={<MyRecipePage
        currentRecipe ={myCurrentRecipe}
        />}/>
        <Route path='/logout' element={<Logout setUser={setUser}/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
