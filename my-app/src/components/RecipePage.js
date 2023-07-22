import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
// import './Page.css';

import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CloseIcon from '@mui/icons-material/Close';



function RecipePage({  currentRecipe }) {
  console.log(currentRecipe);

  const recipe = currentRecipe;

  const navigate = useNavigate()
  const goBack = () => {
    navigate(-1);
  }

  const logout = () =>{
    navigate('/logout');
  }

  return (
    <>
      <Header></Header>
       {/* <div className='logout-icon' onClick={logout}>
          <img src='../logout1Traced.png' />
       </div>

       <div className='button-container'>
         <div className='key' onClick={goBack}>«</div>
       </div> */}
      <Card sx={{ maxWidth: 800, minWidth: 150 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>

          }
          action={
            <IconButton aria-label="add to favorites">
            <CloseIcon onClick={goBack}/>
          </IconButton>
          }
          // action={
          //   <IconButton aria-label="add to favorites">
          //   <FavoriteIcon />
          // </IconButton>
          // }
          title={`${recipe.name}`}
          subheader={`${recipe.cook_time_minutes > 0 ? recipe.cook_time_minutes : ''}`}
          // subheader={`${recipe.cook_time_minutes!=null &&<h6> cooking time: {recipe.cook_time_minutes}</h6>}`}

        />

        <CardMedia
          component="img"
          height="300"
          image={`${recipe.thumbnail_url}?w=248&fit=crop&auto=format`}
          alt={`${recipe.name}`}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary" align="left">
          {recipe.sections[0].components
          &&
          recipe.sections[0].components.map((item, i)=>
          <p key={recipe.id + i}>{item.raw_text}</p>)}
          </Typography>
        </CardContent>

        <CardContent>
          <Typography paragraph align="left">Method:</Typography>
          <Typography paragraph align="left">
          {recipe.instructions.map((item, i)=> <p key={recipe.id + i}>{item.display_text}</p>)}
          </Typography>
        </CardContent>

      </Card>

    </>
  );

  // return (
  //   <>
  //     <Header></Header>
  //     <div className='logout-icon' onClick={logout}>
  //        <img src='../logout1Traced.png' />
  //     </div>

  //     <div className='button-container'>
  //       <div className='key' onClick={goBack}>«</div>
  //       <div className='item-page-title'>{recipe.name}</div>
  //     </div>

  //     <div className='recipe-box'>

  //       <div className='item-page'>

  //         <div className='left-img'>
  //           <img className='food-image-in-item' src={recipe.thumbnail_url}></img>
  //         </div>

  //         <div className='right-container'>
  //           {recipe.cook_time_minutes!=null &&<h6> cooking time: {recipe.cook_time_minutes}</h6>}
  //           <div className='all-ingredients'>
  //             {recipe.sections[0].components && recipe.sections[0].components.map((item, i)=> <p className='ingredients' key={recipe.id + i}>{item.raw_text}</p>)}
  //             </div>
  //       <div className='instructions-container'>{recipe.instructions.map((item, i)=> <p key={recipe.id + i}>{item.display_text}</p>)}</div>
  //         </div>
  //       </div>

  //     </div>
  //   </>
  // )
}

export default RecipePage