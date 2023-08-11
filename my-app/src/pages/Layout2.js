import React from 'react';
import Logo from '../Vector.png';
import { Container, Grid, Box } from '@mui/material';


const Layout2 = ({ children }) => {

  return (
    <Box sx={{ background: '#e4aa08', height: '100vh' }}>
      <Container style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '40px' }}>
        <Grid container direction="column" alignItems="center" spacing={2}>
          <Grid item>
            <img src={Logo} width='100%' height='auto' style={{ maxWidth: '300px' }} alt='the recipe box logo' />
          </Grid>
          <Grid item style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
            {children}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};


export default Layout2;