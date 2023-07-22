import React, { useState } from 'react';
import { register } from '../ApiService';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
// import './Log.css'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
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

  const validateForm = () => {
    return (
      !state.email || !state.password || !state.firstName || !state.lastName
    );
  };

  const goToLogin = () => {
    navigate('/login')
  }

  //swoop
  // const [email, setEmail] = useState("");
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [phoneNumber, setphoneNumber] = useState("");
  // const [password, setPassword] = useState("");
  const [open, setOpen] = useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(e.target.value)
  //   const newUser = { email, firstName, lastName, phoneNumber }
  //   setEmail('');
  //   setFirstName('');
  //   setLastName('');
  //   setphoneNumber('');
  //   setPassword('');
  //   registerUser(newUser);
  //   handleClose();
  // };

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
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
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
                // value={firstName}
                // onChange={(e) => setFirstName(e.target.value)}
              />
              <TextField
                sx={{ width: '8.5em', marginBottom: '0.7em' }}
                label="Last Name"
                name="lastName"
                variant="outlined"
                required
                value={state.lastName}
                onChange={handleChange}
                // value={lastName}
                // onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            {/* <TextField
              sx={{ width: '17em', marginBottom: '0.7em' }}
              label="Phone Number"
              variant="outlined"
              required
              value={phoneNumber}
              onChange={(e) => setphoneNumber(e.target.value)}
            /> */}

            <TextField
              sx={{ width: '17em', marginBottom: '0.7em' }}
              label="Password"
              type="password"
              name="password"
              variant="outlined"
              required
              value={state.password}
              onChange={handleChange}
              // value={password}
              // onChange={(e) => setPassword(e.target.value)}
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




      {/* <Header></Header>
      <section className='log-container'>
        <h2>Register</h2>
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="email"
            name="email"
            value={state.email}
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="password"
            name="password"
            value={state.password}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="first name"
            name="firstName"
            value={state.firstName}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="last name"
            name="lastName"
            value={state.lastName}
            onChange={handleChange}
          />
          <button className="form-submit" type="submit" disabled={validateForm()}>
            &nbsp;Register&nbsp;
          </button>
        </form>
        <div>Already registered?</div>
        <button className="form-submit" onClick={goToLogin}>Sign in</button>
      </section> */}
    </>
  );
};


export default Register





