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
import { useSelector } from 'react-redux/es/hooks/useSelector';



function RecipeCurrent() {

  const recipe = useSelector((state) => state.currentRecipe)
  console.log(recipe);


  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1);
  }


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
            <IconButton
            aria-label="go back"
            onClick={goBack}>
            <CloseIcon />
          </IconButton>
          }
          title={`${recipe.name}`}
          subheader={`${recipe.cook_time_minutes > 0 ? recipe.cook_time_minutes : ''}`}

        />

        <CardMedia
          component="img"
          height="300"
          image={`${recipe.thumbnail_url}?w=248&fit=crop&auto=format`}
          alt={`${recipe.name}`}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary" align="left">
          {recipe.sections[0].components &&
        recipe.sections[0].components.map((item, i) => (
          <Typography key={recipe.id + i} component="p"> {/* Modifica qui l'elemento */}
            {item.raw_text}
          </Typography>
        ))}
          {/* {recipe.sections[0].components
          &&
          recipe.sections[0].components.map((item, i)=>
          <p key={recipe.id + i}>{item.raw_text}</p>)} */}
          </Typography>
        </CardContent>

        <CardContent>
          <Typography paragraph align="left">Method:</Typography>
          <Typography paragraph align="left">
          {recipe.instructions.map((item, i) => (
        <Typography key={recipe.id + i} component="p"> {/* Modifica qui l'elemento */}
          {item.display_text}
        </Typography>
      ))}
          {/* {recipe.instructions.map((item, i)=> <p key={recipe.id + i}>{item.display_text}</p>)} */}
          </Typography>
        </CardContent>

      </Card>

    </>
  );
}

export default RecipeCurrent