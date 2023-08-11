import React, {useEffect, useState} from 'react';
import Recipe from './Recipe';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import Box from '@mui/material/Box';
import { useSelector } from 'react-redux';



function RecipeList() {
  const recipes = useSelector((state) => state.allRecipes.recipes);
  const currentSearch = useSelector((state) => state.currentSearch.title);

  const [recipe, setRecipe] = useState({})

  useEffect(() => {
    console.log(recipes)
    console.log(currentSearch)
  }, [])


  return (
    <Box
    sx={{ mx: 10 }}
    >
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">{currentSearch}</ListSubheader>
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

        {recipes[0].id != 0 && (recipes.map(recipe => {
          return <div className='single-recipe' key={recipe.id}>
            <Recipe
            recipe={recipe}
            setRecipe={setRecipe}
      
            />
          </div>
        }))}
      </ImageList>
    </Box>
  )
}

export default RecipeList