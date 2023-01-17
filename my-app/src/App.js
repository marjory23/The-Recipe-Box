import { useEffect, useState } from 'react'
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
import MyList from './components/MyList';


function App() {

  const [user, setUser] = useState({});
  const [currentRecipe, setCurrentRecipe] = useState({});
  const [myCurrentRecipe, setMyCurrentRecipe] = useState({});
  // const [myRecipes, setMyRecipes] = useState([]);
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

        <Route path='/mylist' element={<MyList
        // myRecipes={myRecipes}
        // setMyRecipes={setMyRecipes}
        user={user}
        setUser={setUser}
        setMyCurrentRecipe={setMyCurrentRecipe}
         />}/>

        <Route path='/add' element={<AddRecipe
        user={user}
        setUser={setUser}
        // myRecipes={myRecipes}
        // setMyRecipes={setMyRecipes}
        setPopupForm={setPopupForm}
        popupForm={popupForm}
        />}/>

        <Route path='/Recipe' element={<RecipeItem currentRecipe ={currentRecipe}/>}/>
        <Route path='/MyRecipe' element={<MyRecipePage
        currentRecipe ={myCurrentRecipe}
        /* user={user}
        setUser={setUser} */
        />}/>
        <Route path='/logout' element={<Logout setUser={setUser}/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
