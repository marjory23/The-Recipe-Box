import React, { useState } from 'react'
import { fetchRecipes } from '../ApiService';


function SearchRecipe({ recipes, setRecipes }) {

  const [search, setSearch] = useState('');
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(12);

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


    // FIX THIS
   /*  const more = async (e) => {
      e.preventDefault();
      setStart((prev) => {
        return prev + 5
      });
      setEnd((prev) => {
        return prev + 5
      });
      await fetchRecipes(search, start, end)
    .then(data => {
      if (data) setRecipes(data.results)
    })
    } */

  return (
    <div className='search'>
      <input
      type='text'
      placeholder='ingredients...'
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      ></input>
      <button onClick={handleSubmit}>Search</button>
      <div>

      {/* {recipes.length>0 && <button onClick={more}>more</button>} */}
      </div>
    </div>

  )
}

export default SearchRecipe