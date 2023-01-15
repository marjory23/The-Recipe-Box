import { useState, useEffect } from 'react'
//import { fetchRecipes } from './ApiService';
import RecipeList from './components/RecipeList';
import './App.css';
import SearchRecipe from './components/SearchRecipe';
import Header from './components/Header';
import AddRecipe from './components/AddRecipe'
import MyList from './components/MyList';
import { BrowserRouter } from 'react-router-dom'
import { Link, Route, Routes } from 'react-router-dom'
import Register from './components/Register';
import Login from './components/Login'
import Navbar from './components/Navbar';
import Main from './components/Main'

function App() {

  const [user, setUser] = useState([]);

  /* const [recipes, setRecipes] = useState([]);
  const [myRecipes, setMyRecipes] = useState([]);
  const [search, setSearch] = useState('');

  const [popupForm, setPopupForm] = useState(false);
  const [popupRegisterForm, setPopupRegisterForm] = useState(false);
  const [popupLoginForm, setPopupLoginForm] = useState(false); */

  // const YOUR_APP_ID ='191b066f';
  // const YOUR_APP_KEY ='6d33790b9d5fc0e22fdf061923940ab5'
  // const BASE_URL = `https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`
  // const APP_KEY = '9973533'
  // const BASE_URL = `https://themealdb.com/api/json/v2/${APP_KEY}/filter.php?i=${search}`

  
//old code
  /* const fetchRecipes = async () => {
    try {
      const result = await fetch(BASE_URL, {
        //mode: 'cors'
      })
      const data = await result.json();
      console.log(data)
      return data.meals;

      //return data.hits;

    } catch (error) {
        console.log("error")
    }
  } */


// MOVED TO API SERVICE
  /* const fetchRecipes = async () => {
    try {
      const result = await fetch(`https://tasty.p.rapidapi.com/recipes/list?from=0&size=6&q=${search}`, {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '6f9a8a663amsh8a4d83fb438ce8bp17a448jsnf930468c0744',
          'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
        }
      })
      const data = await result.json();
      console.log(data)
      return data;

      //return data.hits;

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

  const deleteRecipe = async (id) => {
    try {
      const data = await fetch('http://localhost:3000/recipes/' + id, {
        method: 'DELETE',}).then(res => res.json())
      .then(data => {
        console.log(data)
        setMyRecipes(myRecipes => myRecipes.filter(item => item.id !== data._id))
        });
    } catch (e) {
      console.log(e)
    }
  };

  const fetchMyRecipes = async () => {
    try {
      const result = await fetch('http://localhost:3000/recipes')
      const data = await result.json();
      //console.log(data)
      return data;

    } catch (error) {
        console.log("error")
    }
  } */

  /* useEffect (() => {
      fetchMyRecipes().then(data => {
      if (data) setMyRecipes(data)
    });
  }, [myRecipes]); */

  //console.log(myRecipes[0])


  return (

    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login
        setUser={setUser}
        />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/main' element={<Main
        user={user}
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
