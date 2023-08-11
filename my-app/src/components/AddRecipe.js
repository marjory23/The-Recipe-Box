import React, { useState, useEffect } from 'react'
import IngredientInput from './IngredientInput';
import { createRecipe } from '../ApiService';
import { useNavigate } from 'react-router-dom';
import ImgUploader from './ImgUploader';
import { useSelector, useDispatch } from 'react-redux';

import { Card, CardContent, Typography, TextField, Button, Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import { addMyRecipe } from '../store/userSlice';


function AddRecipe() {

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

      <Card variant="outlined" sx={{ maxWidth: 600, margin: '0 auto', marginTop: 5, position: 'relative' }}>
        <CardContent>
        <IconButton sx={{ padding: 0, position: 'absolute', top: 15, right: 15 }}
          onClick={goBack}
          >
            <CloseIcon sx={{ fontSize: '1.3em' }} />
          </IconButton>

          <Typography variant="h5" gutterBottom
          sx={{ marginTop: 5 }}
          >
            Create a New Recipe
          </Typography>

          <form onSubmit={(e) => handleSubmit(e)}
           style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
            padding: "2rem",

          }}
          >
            <div className='input-box'>
              <TextField
                sx={{ marginBottom: '1rem' }}
                required
                fullWidth
                label='Title'
                value={title}
                name='title'
                onChange={(e) => setTitle(e.target.value)}
              />

              <Box
              sx={{ marginBottom: '0.5rem' }}>
                {ingredients.map((x, i) => (
                  <Box key={i}
                  sx={{ marginBottom: '0.5rem' }}>
                    <IngredientInput
                      i={i}
                      ingredients={ingredients}
                      handleIngredientChange={handleIngredientChange}
                    />
                  </Box>
                ))}
              </Box>

              <Box
              sx={{ marginBottom: '1rem', display: 'flex', gap: '0.5rem', justifyContent: 'center', }}
              className='add-or-remove-last'>
                {ingredients.length > 1 && (
                  <Button className='key' variant="contained" onClick={removeLastIng}>-</Button>
                )}
                <Button className='key' variant="contained" onClick={addIngredientInput}>+</Button>
              </Box>

              <Button
              sx={{ marginBottom: '1rem' }}
              variant="contained"
              onClick={() => setPopupImgUploader(true)}>
                Add Photo
              </Button>

              <TextField
              sx={{ marginBottom: '1rem' }}
                required
                fullWidth
                label='Duration'
                value={duration}
                name='duration'
                onChange={(e) => setDuration(e.target.value)}
              />

              <TextField
                sx={{ marginBottom: '1rem' }}
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