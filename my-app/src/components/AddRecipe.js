import React, { useState, useEffect } from 'react'
import IngredientInput from './IngredientInput';
import { createRecipe } from '../ApiService';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import ImgUploader from './ImgUploader';
import './Create.css';
import { useSelector, useDispatch } from 'react-redux';

import { Card, CardContent, Typography, TextField, Button, Grid } from '@mui/material';
import { addMyRecipe } from '../store/userSlice';


function AddRecipe(
  // { user, setUser }
  ) {

  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState([{ food: '', quantity: '', measure: ''}]);
  const [image, setImage] = useState('');
  const [duration, setDuration] = useState('');
  const [preparation, setPreparation] = useState('');
  const [disabled, setDisabled] = useState(false);
  const [popupImgUploader, setPopupImgUploader] = useState(false)

  const user = useSelector((state) => state.currentUser);

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const goBack = () => {
    navigate(-1);
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisabled(true);

    setTitle(e.target.value);
    setIngredients(ingredients)
    setDuration(e.target.value);
    setPreparation(e.target.value)

    const newRecipe = await createRecipe({
      title: title,
      ingredients: ingredients,
      image: image,
      duration: duration,
      preparation: preparation,
      email: user.email,
    });

    dispatch(addMyRecipe(newRecipe))
    //TODO: modificare con dispatch

    // setUser(user => ({
    //   ...user,
    //   recipes: [...user.recipes, newRecipe]
    // }))

    console.log('recipe submitted')

    setTimeout(() => navigate('/myrecipes'), 1000)
  };

  const handleIngredientChange = (i, e) => {
    let data = [...ingredients];
    data[i][e.target.name] = e.target.value;
    setIngredients(data);
 }

  const addIngredientInput = () => {
    setIngredients(ingredients => [...ingredients, { food: '', quantity: '', measure: ''}]);
  };

  const removeLastIng = () => {
    setIngredients(ingredients => ingredients.filter((_, i) => i !== ingredients.length-1));
  };

  // return (
  //   <>

  //     <div className='hello'>Hello {user.firstName}!</div>

  //     <div className='create-box'>
  //       <div className='key' onClick={goBack}>«</div>
  //       <form onSubmit={(e) => handleSubmit(e)} >
  //           <div className='input-box'>

  //             <input
  //             required
  //             type='text'
  //             value={title}
  //             name='title'
  //             placeholder='title'
  //             onChange={(e) => setTitle(e.target.value)}>
  //             </input>

  //             <div>{ingredients.map((x, i) => {
  //               return <div key={i}>
  //               <IngredientInput
  //                 i={i}
  //                 ingredients={ingredients}
  //                 handleIngredientChange={handleIngredientChange}
  //               >
  //               </IngredientInput>
  //               </div>
  //             })}</div>

  //             <div className='add-or-remove-last'>
  //               {ingredients.length>1 && <div className='key' onClick={removeLastIng}>-</div>}
  //               <div className='key' onClick={addIngredientInput}>+</div>
  //             </div>

  //             {/* <input
  //             required
  //             type='text'
  //             value={image}
  //             name='image'
  //             placeholder='image'
  //             onChange={(e) => setImage(e.target.value)}>
  //             </input> */}


  //             <button onClick={() => setPopupImgUploader(true)}>
  //                     add photo
  //                   </button>

  //             <input
  //             required
  //             type='text'
  //             value={duration}
  //             name='duration'
  //             placeholder='duration'
  //             onChange={(e) => setDuration(e.target.value)}>
  //             </input>

  //             <textarea className='text-area'
  //             required
  //             type='text'
  //             value={preparation}
  //             name='preparation'
  //             placeholder='preparation'
  //             onChange={(e) => setPreparation(e.target.value)}>
  //             </textarea>

  //           </div>
  //           <button className='key create' type="submit" disabled={disabled}>Create</button>
  //         </form>
  //         {popupImgUploader && <ImgUploader
  //             setPopupImgUploader={setPopupImgUploader}
  //             image={image}
  //             setImage={setImage}

  //             />}
  //     </div>
  //   </>
  // )

  return (
    <>
      <div className='hello'>Hello {user.firstName}!</div>

      <Card variant="outlined" sx={{ maxWidth: 600, margin: '0 auto', marginTop: 20 }}>
        <CardContent>
          <Typography variant="h5" component="div" gutterBottom>
            Create a New Recipe
          </Typography>

          <form onSubmit={(e) => handleSubmit(e)}>
            <div className='input-box'>
              <TextField
                required
                fullWidth
                label='Title'
                value={title}
                name='title'
                onChange={(e) => setTitle(e.target.value)}
              />

              <div>
                {ingredients.map((x, i) => (
                  <div key={i}>
                    <IngredientInput
                      i={i}
                      ingredients={ingredients}
                      handleIngredientChange={handleIngredientChange}
                    />
                  </div>
                ))}
              </div>

              <div className='add-or-remove-last'>
                {ingredients.length > 1 && (
                  <Button className='key' variant="outlined" onClick={removeLastIng}>-</Button>
                )}
                <Button className='key' variant="outlined" onClick={addIngredientInput}>+</Button>
              </div>

              <Button variant="outlined" onClick={() => setPopupImgUploader(true)}>
                Add Photo
              </Button>

              <TextField
                required
                fullWidth
                label='Duration'
                value={duration}
                name='duration'
                onChange={(e) => setDuration(e.target.value)}
              />

              <TextField
                required
                fullWidth
                multiline
                rows={4}
                label='Preparation'
                value={preparation}
                name='preparation'
                onChange={(e) => setPreparation(e.target.value)}
              />
            </div>
            <Button className='key create' type="submit" variant="contained" disabled={disabled}>
              Create
            </Button>
          </form>

          {popupImgUploader && (
            <ImgUploader setPopupImgUploader={setPopupImgUploader} image={image} setImage={setImage} />
          )}
        </CardContent>
      </Card>
    </>
  );

}

export default AddRecipe