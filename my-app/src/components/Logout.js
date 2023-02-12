import React from 'react';
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
        <h2 className='logout'>Are you sure you want to log out?</h2>


        <div className='yes-no'>

          <div onClick={goBack}>
            <img className='no' src='../no.png' />
          </div>

          <div onClick={() => handleClick()}>
            <img src='../yes.png' />
          </div>

        </div>


      </div>
    </>
  );
};

export default Logout;