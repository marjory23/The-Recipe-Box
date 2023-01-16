import React, { useState } from 'react'
import IngredientInput from './IngredientInput';
import { createRecipe } from '../ApiService';
import { useNavigate } from 'react-router-dom';

function AddRecipe({ setPopupForm }) {

  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState([{ food: '', quantity: '', measure: ''}]);
  const [image, setImage] = useState('');
  const [duration, setDuration] = useState('');
  const [preparation, setPreparation] = useState('');

  const navigate = useNavigate()
  const goBack = () => {
    navigate(-1);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    setTitle(e.target.value);
    setImage(e.target.value);
    setIngredients(ingredients)
    setDuration(e.target.value);
    setPreparation(e.target.value)

    createRecipe({
      title: title,
      ingredients: ingredients,
      image: image,
      duration: duration,
      preparation: preparation,
    });

    console.log('recipe submitted')
    setPopupForm(false)
  };

  const handleIngredientChange = (i, e) => {
    let data = [...ingredients];
    data[i][e.target.name] = e.target.value;
    setIngredients(data);
 }

  const addIngredientInput = () => {
    setIngredients(ingredients => [...ingredients, { food: '', quantity: '', measure: ''}]);
    //console.log(ingredients)
  };

  const removeLastIng = () => {
    setIngredients(ingredients => ingredients.filter((_, i) => i !== ingredients.length-1));
  };

  return (
    <div className='create'>
      <button className='button' onClick={goBack}>back</button>
      <form onSubmit={(i, e) => handleSubmit(i, e)}>
          <div className='input-box'>

            <input
            required
            type='text'
            value={title}
            name='title'
            placeholder='title'
            onChange={(e) => setTitle(e.target.value)}>
            </input>

            <div>{ingredients.map((x, i) => {
              return <div key={i}>
              <IngredientInput
                i={i}
                ingredients={ingredients}
                handleIngredientChange={handleIngredientChange}
              >
              </IngredientInput>
              </div>
            })}</div>

            <div className='add-or-remove-last'>
              {ingredients.length>1 && <button onClick={removeLastIng}>-</button>}
              <button onClick={addIngredientInput}>+</button>
            </div>

            <input
            required
            type='text'
            value={image}
            name='image'
            placeholder='image'
            onChange={(e) => setImage(e.target.value)}>
            </input>

            <input
            required
            type='text'
            value={duration}
            name='duration'
            placeholder='duration'
            onChange={(e) => setDuration(e.target.value)}>
            </input>

            <textarea
            required
            type='text'
            value={preparation}
            name='preparation'
            placeholder='preparation'
            onChange={(e) => setPreparation(e.target.value)}>
            </textarea>

          </div>
          <button className='button' type="submit">Create</button>
        </form>
    </div>
  )
}

export default AddRecipe