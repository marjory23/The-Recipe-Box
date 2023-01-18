import React, { useState } from 'react'
import { fetchRecipes } from '../ApiService';


function SearchRecipe({ recipes, setRecipes }) {

  const [search, setSearch] = useState('');
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(8);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSearch(e.target.value);
    await fetchRecipes(search, start, end)
    .then(data => {
      if (data) setRecipes(data.results)
    })

    console.log(search)
    console.log(recipes)
    setSearch('');
    }



  return (
    <div className='search'>
      <input
      type='text'
      placeholder='ingredients...'
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      ></input>
      <button className='key create' onClick={handleSubmit}>Search</button>
    </div>

  )
}

export default SearchRecipe