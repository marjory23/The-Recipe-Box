import React, { useState } from 'react'
import IngredientInput from './IngredientInput';

function AddRecipe({createRecipe, setPopupForm}) {

  const [title, setTitle] = useState('');
  const [food, setFood] = useState('')
  const [measure, setMeasure] = useState('')
  const [quantity, setQuantity] = useState('')
  const [ingredients, setIngredients] = useState('');
  const [image, setImage] = useState('');
  const [duration, setDuration] = useState('');
  const [ingInputArr, setIngInputArr] = useState(['']);
  const [preparation, setPreparation] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
    setIngredients(e.target.value);
    setImage(e.target.value);
    setDuration(e.target.value);
    setFood(e.target.value);
    createRecipe({
      title: title,
      ingredients: ingredients,
      image: image,
      duration: duration
    })
    console.log('recipe submitted')
    /* setTitle('');
    setIngredients('');
    setImage('');
    setDuration(''); */
    setPopupForm(false)

  };

  const addIngredientInput = () => {
    setIngInputArr(ingInputArr => [...ingInputArr, '+']);
    console.log(ingInputArr)
  };

  const removeLastIng = () => {
    //setIngInputArr(ingInputArr => ingInputArr.splice(ingInputArr.length-1, 1));
   // const lastIndex = ingInputArr.length-1
    setIngInputArr(ingInputArr => ingInputArr.filter((_, i) => i !== ingInputArr.length-1));
    //setIngInputArr(ingInputArr => ingInputArr.filter((input) => ingInputArr.indexOf(input) !== index));
    /* ingInputArr.splice(ingInputArr.length-1, 1)
    setIngInputArr(ingInputArr) */
    console.log(ingInputArr)
  };

  return (
    <div>
      <div className='closePopup' onClick={() => setPopupForm(false)}>x</div>
      <form onSubmit={handleSubmit}>
          <div className='input-box'>

            <input
            required
            type='text'
            value={title}
            name='title'
            placeholder='title'
            onChange={(e) => setTitle(e.target.value)}>
            </input>

            <div>{ingInputArr.map((x, i) => {
              return <div key={i}>
              <IngredientInput
              /* ingredients={ingredients}
              setIngredients={setIngredients} */
              food={food}
              setFood={setFood}
              measure={measure}
              setMeasure={setMeasure}
              quantity={quantity}
              setQuantity={setQuantity}
              ingInputArr={ingInputArr}
              setIngInputArr={setIngInputArr}>
              </IngredientInput>
              </div>
            })}</div>

            <div className='add-or-remove-last'>

              {ingInputArr.length>1 && <button onClick={removeLastIng}>-</button>}
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
          <button className='create' type="submit">Create</button>
        </form>
    </div>
  )
}

export default AddRecipe