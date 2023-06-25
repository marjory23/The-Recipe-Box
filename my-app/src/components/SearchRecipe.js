import React, { useState } from 'react'
import { fetchRecipes } from '../ApiService';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import Box from '@mui/material/Box';


function SearchRecipe({ recipes, setRecipes }) {

  const [search, setSearch] = useState('');
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(20);
  const [listSubheader, setListSubheader] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSearch(e.target.value);
    await fetchRecipes(search, start, end)
    .then(data => {
      if (data) setRecipes(data.results)
    })

    console.log(search)
    setListSubheader(search);
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
      <Box sx={{ mx: 10 }}>
          <ImageListItem key="Subheader" cols={2}
          >
            <ListSubheader align="left" component="div">{listSubheader.toLocaleUpperCase()}</ListSubheader>
          </ImageListItem>
       </Box>
    </div>

  )
}

export default SearchRecipe