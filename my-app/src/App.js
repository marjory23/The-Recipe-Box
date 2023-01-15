import { useState, useEffect } from 'react'
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import Register from './components/Register';
import Login from './components/Login'
import Main from './components/Main';
import RecipeItem from './components/RecipeItem';
import MyRecipePage from './components/MyRecipePage';

function App() {

  const [user, setUser] = useState([]);
  const [currentRecipe, setCurrentRecipe] = useState({});
  const [myCurrentRecipe, setMyCurrentRecipe] = useState({});

  return (

    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login setUser={setUser}/>}/>
        <Route path='/Recipe' element={<RecipeItem currentRecipe ={currentRecipe}/>}/>
        <Route path='/MyRecipe' element={<MyRecipePage currentRecipe ={myCurrentRecipe}/>}/>
        <Route path='/Register' element={<Register />} />
        <Route path='/main' element={<Main user={user} setCurrentRecipe={setCurrentRecipe} setMyCurrentRecipe={setMyCurrentRecipe}/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
