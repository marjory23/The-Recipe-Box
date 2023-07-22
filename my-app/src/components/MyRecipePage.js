import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
// import './Page.css'

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

function MyRecipePage({ currentRecipe }) {

  const content = currentRecipe;

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
        <div className='item-page-title'>{content.title}</div>
      </div>

      <div className='recipe-box'>

        <div className='item-page'>

          <div className='left-img'>
            <img className='food-image-in-item' src={content && content.image}></img>
          </div>

          <div className='right-container'>
            {content.duration!=null &&<div className='cooking-time'>cooking time: {content.duration}</div>}
            <div className='all-ingredients'>
              {content.ingredients.map((item, i)=> <p className='ingredients' key={content._id + i}>{`${item.quantity} ${item.measure} ${item.food}`}</p>)}
            </div>
            <div className='instructions-container'><p>{content.preparation}</p></div>
          </div>

        </div>

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
          title={`${content.title}`}
          subheader={`${content.duration > 0 ? content.duration : ''}`}
          // subheader={`${recipe.cook_time_minutes!=null &&<h6> cooking time: {recipe.cook_time_minutes}</h6>}`}

        />

        <CardMedia
          component="img"
          height="300"
          image={`${content && content.image}?w=248&fit=crop&auto=format`}
          alt={`${content.title}`}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary" align="left">
          {content && content.ingredients.map((item, i)=> <p className='ingredients' key={content._id + i}>{`${item.quantity} ${item.measure} ${item.food}`}</p>)}
          </Typography>
        </CardContent>

        <CardContent>
          <Typography paragraph align="left">Method:</Typography>
          <Typography paragraph align="left">
          {content.preparation}
          </Typography>
        </CardContent>

      </Card>
    </>



  )
}

export default MyRecipePage