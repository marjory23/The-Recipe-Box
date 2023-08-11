import React, { useEffect, useState } from 'react';
import MyRecipe from './MyRecipe';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
//import './List.css'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import Box from '@mui/material/Box';

import { useSelector, useDispatch } from 'react-redux';
import { resetAllRecipes } from '../store/allRecipesSlice'

function MyRecipeList() {

  const dispatch = useDispatch()

  let navigate = useNavigate()

  const user = useSelector((state) => state.currentUser);

  const myRecipes = useSelector((state) => state.currentUser.recipes);


  useEffect(() => {
    dispatch(resetAllRecipes())
  }, [myRecipes])


  return (

    <Box
    sx={{ mx: 10 }}
    >
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">{user.firstName}'s Recipes List</ListSubheader>
      </ImageListItem>
      <ImageList

      variant="masonry"

          gap={20}
          sx={{ columnCount: {
            xs: '1 !important',
            sm: '2 !important',
            md: '3 !important',
            lg: '4 !important',
            xl: '5 !important',
          }, width: "100%", overflowY: "auto" }}
          rowHeight={350}

      // sx={{ width: 500, height: 450 }}
      >
        {myRecipes.map((item) => {
          return <div className='single-recipe' key={item._id}>
            <MyRecipe
            content={item}
            />
          </div>
        })}
      </ImageList>
    </Box>
  )
}

export default MyRecipeList