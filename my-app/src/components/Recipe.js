import React from 'react'
import { useNavigate } from 'react-router-dom';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { useDispatch, useSelector } from 'react-redux';
import { updateCurrentRecipe } from '../store/currentRecipeSlice'


function Recipe(
  {
    recipe, setRecipe,
    // setCurrentRecipe
  }
  ) {

  let navigate = useNavigate();
  const dispatch = useDispatch()
  // const recipe = useSelector((state) => state.currentRecipe)

  const openRecipe = () =>{
    console.log(recipe)
    dispatch(updateCurrentRecipe(recipe))
    console.log(recipe)
    // setRecipe(recipe);

    // setCurrentRecipe(recipe);
    navigate('/recipePage');
    console.log('WOW')
  }

  return (
      <>

        <ImageListItem>
          <img
            src={`${recipe.thumbnail_url}?w=248&fit=crop&auto=format`}
            srcSet={`${recipe.thumbnail_url}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={recipe.name}
            loading="lazy"
          />
          <ImageListItemBar
            title={recipe.name}
            // subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${recipe.name}`}
              >
                <InfoIcon onClick={openRecipe}/>
              </IconButton>
            }
          />
        </ImageListItem>
      </>

    )
}

export default Recipe