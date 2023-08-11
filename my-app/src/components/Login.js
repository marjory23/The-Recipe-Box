import React, { useState, useEffect } from 'react';
import {login} from './../ApiService';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { IconButton, Link } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

import {  useDispatch } from "react-redux";
import { updateUser } from "../store/userSlice";

const initialState = {
  email: '',
  password: '',
};

const Login = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch()

  const [state, setState] = useState(initialState);

  const [open, setOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };



  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = state;
    const user = { email, password };
    const res = await login(user);
    if (res.error) {
      alert(`${res.message}`);
      setState(initialState);
    }
    else {
      dispatch(updateUser(res))
      navigate('/');


      console.log('logged in');
      console.log(res);
    }
  };


  const goToRegister = () => {
    navigate('/register')
  }

  const validateForm = () => {
    return !state.email || !state.password;
  };

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
      <Button variant="contained" size='small' sx={{ display: { xs: 'block', md: 'none' } }}
      onClick={handleClickOpen}
      >
        Log in/ Register
      </Button>
      <Dialog
      open={open} onClose={handleClose}
      >
        <DialogActions>
          <IconButton sx={{ padding: 0 }}
          onClick={handleClose}
          >
            <CloseIcon sx={{ fontSize: '1.3em' }} />
          </IconButton>
        </DialogActions>
        <DialogTitle sx={{ textAlign: 'center', padding: 0 }}>Login</DialogTitle>
        <DialogContent>
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "center",
              padding: "2rem",
              maxWidth: '300px'
            }}
          >
            <TextField
              sx={{ width: '17em', marginBottom: '0.7em' }}
              label="Email"
              type="email"
              variant="outlined"
              required
              name="email"
              value={state.email}
              onChange={handleChange}
            />

            <TextField
              sx={{ width: '17em', marginBottom: '0.7em' }}
              label="Password"
              type="password"
              variant="outlined"
              required
              name="password"
              value={state.password}
              onChange={handleChange}
            />
            <Link href="/Profile" >
              <Button
                sx={{ width: '16em', height: '3em' }}
                variant="contained"
                color="primary"
                type="submit"
                onClick={handleClose}
              >
                Login
              </Button>

            </Link>

            <Link href="/Register" variant="body2" sx={{ padding: 3 }}>
              Don't have an account yet? Register here
            </Link>
          </form>
        </DialogContent>
      </Dialog>
    </div >
    </>
  );
};

export default Login;