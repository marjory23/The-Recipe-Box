import React, { useState } from 'react';
import { register } from '../ApiService';
import { useNavigate } from 'react-router-dom';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { IconButton, Link } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';



const initialState = {
  email: '',
  password: '',
  firstName: '',
  lastName: '',
};

const Register = ({ setUser }) => {
  const navigate = useNavigate();
  const [state, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password, firstName, lastName } = state;
    const user = { email, password, firstName, lastName };
    const res = await register(user);
    if (res.error) {
      alert(`${res.message}`);
      setState(initialState);
    } else {
      setUser(res);
      navigate('/login');
      console.log('registered');
      console.log(res);
    }

  };

  // const validateForm = () => {
  //   return (
  //     !state.email || !state.password || !state.firstName || !state.lastName
  //   );
  // };


  const [open, setOpen] = useState(true);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <>
      <Dialog open={open} onClose={handleClose} >
        <DialogActions>
          <IconButton sx={{ padding: 0 }} onClick={handleClose} >
            <CloseIcon sx={{ fontSize: '1.3em' }} />
          </IconButton>
        </DialogActions>
        <DialogTitle sx={{ textAlign: 'center', padding: 0 }}>Register</DialogTitle>
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
              name="email"
              variant="outlined"
              required
              value={state.email}
              onChange={handleChange}

            />
            <div display="flex" flexDirection="rows">
              <TextField
                sx={{ width: '8.5em', marginBottom: '0.7em' }}
                label="First Name"
                name="firstName"
                variant="outlined"
                required
                value={state.firstName}
                onChange={handleChange}
              />
              <TextField
                sx={{ width: '8.5em', marginBottom: '0.7em' }}
                label="Last Name"
                name="lastName"
                variant="outlined"
                required
                value={state.lastName}
                onChange={handleChange}
              />
            </div>

            <TextField
              sx={{ width: '17em', marginBottom: '0.7em' }}
              label="Password"
              type="password"
              name="password"
              variant="outlined"
              required
              value={state.password}
              onChange={handleChange}
            />
            <Button
              sx={{ width: '16em', height: '3em' }}
              variant="contained"
              color="primary"
              type="submit"
              onClick={handleClose}
            >
              Register
            </Button>
            <Link href="/Login" variant="body2" sx={{ padding: 3 }}>
              Already have an account? Sign in
            </Link>
          </form>
        </DialogContent>

      </Dialog>
    </>
  );
};


export default Register





