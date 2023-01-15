import React, { useState } from 'react'
import { fetchRecipes } from '../ApiService';


function SearchRecipe({ recipes, setRecipes }) {

  const [search, setSearch] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSearch(e.target.value);
    await fetchRecipes(search)
    .then(data => {
      if (data) setRecipes(data.results)

    })

    console.log(search)
    console.log(recipes)
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