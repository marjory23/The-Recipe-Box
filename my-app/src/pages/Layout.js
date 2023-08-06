import React from 'react';
import Navbar from '../components/Navbar';



const Layout = ({ children }) => {


  return (
    <>
      <Navbar />
      <div style={{ padding: '20px' }}>
        {children}
      </div>
    </>
  );
};

export default Layout;