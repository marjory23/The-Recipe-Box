import React, { useEffect, useState } from 'react';
import { fetchRecipes } from '../ApiService';
import SearchRecipe from './SearchRecipe';
import RecipeList from './RecipeList';
import Header from './Header'
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateAllRecipes } from '../store/allRecipesSlice';


import Logo from '../Vector.png';

import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import ListIcon from '@mui/icons-material/List';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

function Navbar2(
  // { user, setCurrentRecipe, recipes, setRecipes }
  ) {
 //from searchRecipe

  const dispatch = useDispatch();
  const [currentRecipe, setCurrentRecipe] = useState({});
//  const [recipes, setRecipes] = useState([]);
  const recipes = useSelector((state) => state.allRecipes.recipes);

  const [search, setSearch] = useState('');
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(20);
  const [listSubheader, setListSubheader] = useState('')

  const user = useSelector((state) => state.currentUser);

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      handleSubmit(e);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSearch(e.target.value);
    await fetchRecipes(search, start, end)
    .then(data => {
      if (data) dispatch(updateAllRecipes({ recipes: data.results }))
      // if (data) setRecipes(data.results)
    })

    console.log(search)
    setListSubheader(search);
    console.log(recipes)
    setSearch('');
    }
  //end

  let navigate = useNavigate()

  useEffect(() => {
    console.log(user)
    if(!user.email) {
   navigate('/login')
    }
  }, [user.email, navigate]);

  const addRecipe = () =>{
    navigate('/add');
  }

  const goToMyRecipesList = () =>{
    // navigate('/mylist');
    console.log('eorking')
    navigate('/myrecipes');

  }

  const logout = () =>{
    navigate('/logout');
  }

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu

      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>
      <IconButton
        size="large"
        color="inherit"
        >
        <ListIcon
        onClick={goToMyRecipesList}/>
        </IconButton>
        My List</MenuItem>
        <MenuItem onClick={handleMenuClose}>
      <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <PlaylistAddIcon
          onClick={addRecipe}/>
        </IconButton>Add Recipe</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton

          size="large"
          color="inherit"
        >
          <ListIcon
          onClick={goToMyRecipesList}/>
        </IconButton>

        <p>My List</p>
      </MenuItem>
      <MenuItem>
        <IconButton

          size="large"
          color="inherit"
        >
          <PlaylistAddIcon
          onClick={addRecipe}/>
        </IconButton>

        <p>Add Recipe</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <LogoutIcon
           onClick={logout}/>
        </IconButton>
        <p>Logout</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: '#e4aa08' }}>
        <Toolbar>


          <Typography
            // noWrap
            component='div'
            sx={{ mr: 2, display: 'flex' }}
          >
            <img src={Logo} width='150' height='45' max-width='100%' alt='swoop logo' />
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={handleKeyDown}
            />




          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
              >
              <PersonIcon />
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              onClick={logout}
              color="inherit"
              >
              <LogoutIcon />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
              >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
            {/* <SearchRecipe
              // recipes={recipes}
              setRecipes={setRecipes}
              setCurrentRecipe={setCurrentRecipe}

              /> */}
              <div>
                {recipes.length>0 && <RecipeList
                recipes={recipes}
                setCurrentRecipe={setCurrentRecipe}
                /> }
              </div>
    </Box>

  )
}

export default Navbar2