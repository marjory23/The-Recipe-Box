import React from 'react'

function IngredientInput({ i, ingredients, handleIngredientChange }) {

  //console.log(ingredients);

  return (
    <div>
      <input
        required
        type='text'
        value={ingredients[i].food}
        name='food'
        placeholder='ingredient'
        onChange={(e) => handleIngredientChange(i, e)}
        >
        </input>

        <input
        required
        type='number'
        value={ingredients[i].quantity}
        name='quantity'
        placeholder='quantity'
        onChange={(e) => handleIngredientChange(i, e)}
        >
        </input>

        <select
        required
        name='measure'
        value={ingredients[i].measure}
        onChange={(e) => handleIngredientChange(i, e)}
        >
          <option value='unit'>unit</option>
          <option value='can'>can</option>
          <option value='teaspoon'>teaspoon</option>
          <option value='tablespoon'>tablespoon</option>
          <option value='cup'>cup</option>
          <option value='slice'>slice</option>
          <option value='ounce'>ounce</option>
          <option value='pint'>pint</option>
          <option value='quart'>quart</option>
          <option value='gallon'>gallon</option>
        </select>

    </div>
  )
}

export default IngredientInput