import { useState, useEffect } from 'react'
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import { Link, Route, Routes } from 'react-router-dom'
import Register from './components/Register';
import Login from './components/Login'
import Navbar from './components/Navbar';
import Main from './components/Main';
import RecipeItem from './components/RecipeItem';
import Recipe from './components/Recipe';
import MyRecipePage from './components/MyRecipePage';

function App() {

  const [user, setUser] = useState([]);
  const [currentRecipe, setCurrentRecipe] = useState({});
  const [myCurrentRecipe, setMyCurrentRecipe] = useState({});

  return (

    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login
        setUser={setUser}
        />} />
        {/* <Route path='/idontreallycare' element={<Recipe setCurrentRecipe = {setCurrentRecipe} />} /> */}
        <Route path='/Recipe' element={<RecipeItem currentRecipe ={currentRecipe} />}/>
        <Route path='/MyRecipe' element={<MyRecipePage currentRecipe ={myCurrentRecipe} />}/>
        <Route path='/Register' element={<Register />} />
        <Route path='/main' element={<Main
        user={user}
        setCurrentRecipe={setCurrentRecipe}
        setMyCurrentRecipe={setMyCurrentRecipe}
        />} />
      </Routes>
    </BrowserRouter>




    /* <div className="App">
      <Navbar
      setPopupRegisterForm={setPopupRegisterForm}
      setPopupLoginForm={setPopupLoginForm}></Navbar>

      <Header></Header>

      {popupRegisterForm &&
      <div>
        <button className='closePopup' onClick={() => setPopupRegisterForm(false)}>x</button>
        <Register/>
      </div>}

      {popupLoginForm &&
      <div>
        <button className='closePopup' onClick={() => setPopupLoginForm(false)}>x</button>
        <Login
        setPopupLoginForm={setPopupLoginForm}/>
      </div>}

      <SearchRecipe
      search={search}
      setSearch={setSearch}
      fetchRecipes={fetchRecipes}
      recipes={recipes}
      setRecipes={setRecipes}>
      </SearchRecipe>

      {recipes.length>0 && <RecipeList
      recipes={recipes}
      />}


      <button onClick={() => setPopupForm(true)}>Add your recipe</button>

      {popupForm &&
      <div>
        <AddRecipe
        createRecipe={createRecipe}
        setPopupForm={setPopupForm}/>
      </div>}

      {myRecipes.length>0 && <MyList
      myRecipes={myRecipes}
      setMyRecipes={setMyRecipes}
      fetchMyRecipes={fetchMyRecipes}
      deleteRecipe={deleteRecipe}/>}


    </div> */
  );
}

export default App;
