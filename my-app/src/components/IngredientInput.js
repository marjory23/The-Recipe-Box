import React, { useState } from 'react'

function IngredientInput({ ingredients, setIngredients, food, setFood, measure, setMeasure, quantity, setQuantity }) {

  /* const [food, setFood] = useState('')
  const [measure, setMeasure] = useState('')
  const [quantity, setQuantity] = useState('') */
  /* food: String,
  measure: String,
  quantity: Number */


  return (
    <div>
      <input
        required
        type='text'
        value={food}
        name='food'
        placeholder='ingredient'
        onChange={(e) => setFood(e.target.value)}>
        </input>

        <input
        required
        type='number'
        value={quantity}
        name='quantity'
        placeholder='quantity'
        onChange={(e) => setQuantity(e.target.value)}>
        </input>

        <select
        /* value={this.state.value} onChange={this.handleChange}
        required
        name='measure'
        onChange={(e) => setMeasure(e.target.value)} */
        >
          <option value='teaspoon'>teaspoon</option>
          <option value='tablespoon'>tablespoon</option>
          <option value='cup'>cup</option>
          <option value='ounce'>ounce</option>
          <option value='pint'>pint</option>
          <option value='quart'>quart</option>
          <option value='gallon'>gallon</option>
        </select>



    </div>
  )
}

export default IngredientInput