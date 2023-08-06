import React, { useState } from 'react'
import { fetchRecipes } from '../ApiService';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import RecipeList from './RecipeList';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));


function SearchRecipe({ recipes, setRecipes, setCurrentRecipe }) {

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
    <>

    <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />

            <SearchRecipe
              recipes={recipes}
              setRecipes={setRecipes}
              />

              <div>
                {recipes.length>0 && <RecipeList
                recipes={recipes}
                setCurrentRecipe={setCurrentRecipe}
                /> }
              </div>


          </Search>

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
            <ListSubheader align="left" component="div">{listSubheader}</ListSubheader>
          </ImageListItem>
       </Box>
    </div>
    </>

  )
}

export default SearchRecipe