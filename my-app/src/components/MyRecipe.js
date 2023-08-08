import React, { useState,useEffect } from 'react';
import { deleteRecipe } from '../ApiService';
import { useNavigate } from 'react-router-dom';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { updateCurrentMyRecipe } from '../store/currentMyRecipeSlice'

function MyRecipe({ content }) {


  let navigate = useNavigate();
  const dispatch = useDispatch()

  const user = useSelector((state) => state.currentUser);
  const currentMyRecipe = useSelector((state) => state.currentMyRecipe);


// TODO: delete function

//   const deleteThis = async () => {
//     const data = await deleteRecipe(content._id);
//     console.log( data)
//     console.log(user)
//     const x = user.recipes.filter((item) => {return item._id !== data._id})
//     console.log(x)
//     setMyRecipes([...x])
// // questa parte dovà essere modificata
//     setUser(user => ({
//       ...user,
//       recipes: [...x]
//     }))
//   }

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
            srcSet={`${content && content.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={content.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={content.title}
            // subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${content.title}`}
              >
                <InfoIcon onClick={openRecipe}/>
              </IconButton>
            }
          />
        </ImageListItem>

      {/* <div className='item-in-list'>
        <div className='recipe-container' onClick={openRecipe}>
          <div className='recipe-title'>{content.title}</div>
          <img className='food-image' src={content && content.image}></img>
        </div>

          <div className='key round' onClick={deleteThis}>-</div>

      </div> */}
    </>
  )
}

export default MyRecipe