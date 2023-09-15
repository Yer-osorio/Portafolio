import React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Imagen from './Assets/Logo Yerson.png';

function NavigationBar() {
  return (
    <AppBar
      position='relative'
      style={{
        backgroundColor: 'rgba(170, 170, 170, 0)',
        boxShadow: 'none',
        border: 'none',
      }}
    >
      <Grid
        container
        direction='row'
        justifyContent='space-around'
        alignItems='center'
        style={{ height: '90px' }}
      >
        <Grid item>
          <img alt='' className='logo' src={Imagen} style={{ maxWidth: '100%' }} />
        </Grid>
        <Grid item>
          <Button style={{ color: 'black' }}>Sobre Mí</Button>
        </Grid>
        <Grid item>
          <Button style={{ color: 'black' }}>Mis Metas</Button>
        </Grid>
        <Grid item>
          <Button style={{ color: 'black' }}>Mis trabajos</Button>
        </Grid>
        <Grid item>
          <Button style={{ color: 'black' }}>Contacto</Button>
        </Grid>
      </Grid>
    </AppBar>
  );
}

export default NavigationBar;
