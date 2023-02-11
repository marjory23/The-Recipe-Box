import React, { useState } from 'react';
import { register } from '../ApiService';
import { useNavigate } from 'react-router-dom';
import Header from './Header';



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

  return (
    <>
      <Header></Header>
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
      </section>
    </>
  );
};


export default Register





