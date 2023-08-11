import React, { useState, useEffect } from 'react';
import { logout } from '../ApiService';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import DialogContentText from "@mui/material/DialogContentText";

import {  useDispatch } from "react-redux";
import { updateUser } from "../store/userSlice";
import { resetAllRecipes } from '../store/allRecipesSlice';

  const Logout = () => {

    const [open, setOpen] = useState(false);

    let navigate = useNavigate();
    const dispatch = useDispatch()

    const handleClick = () => {
      logout();
      navigate('/');
      console.log('logged out');
      dispatch(resetAllRecipes())
      dispatch(updateUser({}))
    };

    const goBack = () => {
      navigate(-1);
    }

    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    useEffect(() => {
      handleClickOpen();
    }, []);

  return (
    <>
      <div>

      <Dialog
      open={open} onClose={handleClose}
      >
        <DialogTitle>Are you sure you want to log out?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Logging out will end your current session.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>{handleClose();
          goBack()}} color="primary">
            No
          </Button>
          <Button onClick={handleClick} color="primary">
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>

    </>
  );
};

export default Logout;