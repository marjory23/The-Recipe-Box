import React from 'react'
import { useNavigate } from 'react-router-dom';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

function Recipe({ recipe, setCurrentRecipe}) {

  let navigate = useNavigate();
  const openRecipe = () =>{
    console.log(recipe)
    setCurrentRecipe(recipe);
    navigate('/Recipe');
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

        {/* <div className='item-in-list'>
          <div className='recipe-container' onClick={openRecipe}>
            <div className='recipe-title'>{recipe.name}</div>
            <img className='food-image' src={recipe.thumbnail_url}></img>
          </div>

        </div> */}
      </>

    )
}

export default Recipe