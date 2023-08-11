import React, { useState,useEffect } from 'react';
import { deleteRecipe } from '../ApiService';
import { useNavigate } from 'react-router-dom';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { updateCurrentMyRecipe } from '../store/currentMyRecipeSlice'
import { updateMyRecipes } from '../store/userSlice'

function MyRecipe({ content }) {


  let navigate = useNavigate();
  const dispatch = useDispatch()

  const user = useSelector((state) => state.currentUser);
  const currentMyRecipe = useSelector((state) => state.currentMyRecipe);


// TODO: delete function

  const deleteThis = async () => {
    await deleteRecipe(content._id);
    const updatedRecipes = user.recipes.filter((item) => item._id !== content._id);
    dispatch(updateMyRecipes(updatedRecipes));



    // const data = await deleteRecipe(content._id);
    // console.log( data)
    // console.log(user)
    // const x = user.recipes.filter((item) => {return item._id !== data._id})
    // console.log(x)
    // dispatch(updateMyRecipes([...x]))


// questa parte dovà essere modificata
    // setUser(user => ({
    //   ...user,
    //   recipes: [...x]
    // }))
  }

  const openRecipe = () =>{
    console.log(content)
    console.log('blabla')
    dispatch(updateCurrentMyRecipe(content))

    navigate('/MyRecipe');
  }



  return (
    <>

      <ImageListItem>
          <img
            src={`${content && content.image}?w=248&fit=crop&auto=format`}
            srcSet={`${content && content.image}`}
            // srcSet={`${content && content.image}?w=248&fit=crop&auto=format&dpr=2 2x`}

            alt={content.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={content.title}
            // subtitle={item.author}
            actionIcon={
              <>

              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${content.title}`}
                onClick={deleteThis}
              >
                <DeleteForeverIcon />
              </IconButton>

              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${content.title}`}
                onClick={openRecipe}
              >
                <InfoIcon />
              </IconButton>
              </>

            }
          />
        </ImageListItem>
    </>
  )
}

export default MyRecipe