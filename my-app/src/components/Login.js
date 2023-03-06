import React, { useState } from 'react';
import {login} from './../ApiService';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import './Log.css'

const initialState = {
  email: '',
  password: '',
};

const Login = ({ setUser }) => {
  let navigate = useNavigate();
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

    const { email, password } = state;
    const user = { email, password };
    const res = await login(user);
    if (res.error) {
      alert(`${res.message}`);
      setState(initialState);
    }
    else {
      setUser(res);
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

  return (
    <>
      <Header></Header>

      <section className='log-container'>
        <h2>Login</h2>
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
          <button className="form-submit" type="submit" disabled={validateForm()}>
            &nbsp;Login&nbsp;
          </button>
        </form>
        <div>or create an account</div>
        <button className="form-submit" onClick={goToRegister}>Register</button>
      </section>
    </>
  );
};

export default Login;