import React, {useEffect} from 'react';
import Recipe from './Recipe';
// import './List.css';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import Box from '@mui/material/Box';



function RecipeList({ recipes,setCurrentRecipe }) {
 


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
        {recipes.map(recipe => {
          return <div className='single-recipe' key={recipe.id}>
            <Recipe
            recipe={recipe}
            setCurrentRecipe={setCurrentRecipe}
            />
          </div>
        })}
      </ImageList>
    </Box>





    // <div className='outer-container'>

    //   <div className='recipes-container'>{recipes.map(recipe => {
    //     return <div className='single-recipe' key={recipe.id}>
    //       <Recipe
    //       recipe={recipe}
    //       setCurrentRecipe={setCurrentRecipe}
    //       />
    //     </div>
    //   })}</div>


    // </div>
  )
}

export default RecipeList