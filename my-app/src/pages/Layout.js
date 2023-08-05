import React from 'react';
import Navbar2 from '../components/Navbar2';
import Main from '../components/Main';


const Layout = ({ children, user }) => {
  return (
    <>
      <Navbar2 />
      <div style={{ padding: '20px' }}>
        {children}
      </div>
    </>
  );
};

export default Layout;