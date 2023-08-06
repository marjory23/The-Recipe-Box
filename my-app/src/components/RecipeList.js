import React, {useEffect, useState} from 'react';
import Recipe from './Recipe';
// import './List.css';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import Box from '@mui/material/Box';
import { useSelector } from 'react-redux';



function RecipeList(
  // { recipes,setCurrentRecipe }
  ) {
  const recipes = useSelector((state) => state.allRecipes.recipes);
  const [recipe, setRecipe] = useState({})

  useEffect(() => {
    console.log(recipes)
  }, [])


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
        {recipes[0].id != 0 && (recipes.map(recipe => {
          return <div className='single-recipe' key={recipe.id}>
            <Recipe
            recipe={recipe}
            setRecipe={setRecipe}
            // setCurrentRecipe={setCurrentRecipe}
            />
          </div>
        }))}
      </ImageList>
    </Box>
  )
}

export default RecipeList