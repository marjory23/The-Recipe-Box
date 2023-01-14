import React, { useState } from 'react'
//import { fetchRecipes } from '../ApiService';


function SearchRecipe({ search, setSearch, fetchRecipes, recipes, setRecipes }) {

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSearch(e.target.value);
    await fetchRecipes()
    .then(data => {
      if (data) setRecipes(data)
    })
    // console.log(search)
    // console.log(recipes)
    setSearch('');
    }



  return (
    <div>
      <input
      type='text'
      placeholder='search'
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      ></input>
      <button onClick={handleSubmit}>SEARCH</button>
    </div>

  )
}

export default SearchRecipe