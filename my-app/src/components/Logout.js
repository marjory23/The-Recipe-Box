import React, { useState, useEffect } from 'react';
import { logout } from '../ApiService';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
// import './Log.css'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import DialogContentText from "@mui/material/DialogContentText";

  const Logout = ({ setUser }) => {

    const [open, setOpen] = useState(false);

    let navigate = useNavigate();

    const handleClick = () => {
      logout();
      navigate('/');
      console.log('logged out');
      setUser({});
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
      {/* <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Logout
      </Button> */}
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

      {/* <Header></Header>
      <div className='log-container'>
        <h2 className='logout'>Are you sure you want to log out?</h2>


        <div className='yes-no'>

          <div onClick={goBack}>
            <img className='no' src='../no.png' />
          </div>

          <div onClick={() => handleClick()}>
            <img src='../yes.png' />
          </div>

        </div>


      </div> */}
    </>
  );
};

export default Logout;