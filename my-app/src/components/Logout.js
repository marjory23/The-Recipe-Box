import React from 'react';
//import auth from '../utils/auth';
import { logout } from '../ApiService';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

  const Logout = ({ setUser }) => {

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

  return (
    <>
      <Header></Header>
      <div className='log-container'>
        <h2>Are you sure you want to log out?</h2>

        <button onClick={goBack}>No</button>

        <button onClick={() => handleClick()}>Yes</button>
      </div>
    </>
  );
};

export default Logout;