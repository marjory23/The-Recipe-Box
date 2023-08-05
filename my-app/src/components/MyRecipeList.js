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

import { useSelector } from 'react-redux';

function MyRecipeList({
  // user,
  setUser, setMyCurrentRecipe }) {
  const user = useSelector((state) => state.currentUser);

  const [myRecipes, setMyRecipes] = useState(user.recipes);


  let navigate = useNavigate()

  useEffect (() => {
    console.log(user)


  },[myRecipes] );

  const addRecipe = () =>{
    navigate('/add');
  }

  const backToSearch = () =>{
    navigate('/');
  }

  const logout = () =>{
    navigate('/logout');
  }
  const back = '«'

  return (

    <Box
    sx={{ mx: 10 }}
    >
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
            setMyRecipes={setMyRecipes}
            myRecipes={myRecipes}
            setMyCurrentRecipe={setMyCurrentRecipe}
            user={user}
            setUser={setUser}
            />
          </div>
        })}
      </ImageList>
    </Box>
  )
}

export default MyRecipeList