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

import MainPage from './pages/MainPage';
import Layout from './pages/Layout';
import MyRecipesPage from './pages/MyRecipesPage';
import SearchResultPage from './pages/SearchResultPage';
import AddRecipePage from './pages/AddRecipePage';



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

        <Route path='/' element={<MainPage/>}/>

        <Route path='/login' element={<Login/>}/>

        <Route path='/logout' element={<Logout/>}/>

        <Route path='/myrecipes' element={<MyRecipesPage/>}/>

        <Route path='/Register' element={<Register setUser={setUser}/>} />


        {/* <Route path='/add' element={<AddRecipe
        user={user}
        setUser={setUser}
        setPopupForm={setPopupForm}
        popupForm={popupForm}
        />}/> */}

        <Route path='/add' element={<AddRecipePage />}/>

        <Route path='/recipePage' element={<RecipePage />}/>
        <Route path='/MyRecipe' element={<MyRecipePage/>}/>
        <Route path='/searchResult' element={<SearchResultPage/>}/>

      </Routes>
    </BrowserRouter>

  );
}

export default App;
