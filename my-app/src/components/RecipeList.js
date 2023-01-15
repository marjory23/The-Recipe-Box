import React, { useState } from 'react'
import Recipe from './Recipe'



function RecipeList({ recipes }) {
  const ID_URL = `https://themealdb.com/api/json/v2/9973533/lookup.php?i=`;

  /* const [item, setItem] = useState({});

  const lookupRecipe = async (id) => {
    try {
      const result = await fetch(ID_URL + id, {
        //mode: 'cors'
      })
      const data = await result.json();

      setItem(data.meals[0]);
      console.log(data)

    } catch (error) {
        console.log("error")
    }
  } */



  return (
    <div className='recipie-container'>{recipes.map(recipe => {
      return <div key={recipe.id}>
        <Recipe
        recipe={recipe}
        // lookupRecipe={lookupRecipe}
        // item={item}
        // setItem={setItem}
        >

        </Recipe>
    </div>
   })}</div>
  )
}

export default RecipeList