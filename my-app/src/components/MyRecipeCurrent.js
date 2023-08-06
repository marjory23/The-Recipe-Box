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

import { useSelector } from 'react-redux';


function MyRecipeCurrent() {

  const content = useSelector((state) => state.currentMyRecipe);


  const navigate = useNavigate()
  const goBack = () => {
    navigate(-1);
  }

  // const logout = () =>{
  //   navigate('/logout');
  // }

  return (
    <>


<Card sx={{
  maxWidth: 800,
  minWidth: 150,
  margin: 'auto',
  marginTop: '20px'
}}>
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

export default MyRecipeCurrent