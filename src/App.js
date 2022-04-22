import './App.css';
import React from 'react';
import { Container, Grid } from '@mui/material';
import AddQuestion from './components/AddQuestion';
import List from './components/List';

function App() {
  return (
    <Container className="App" maxWidth="md">
      {/* <Grid container sx={{border:'1px solid green'}}> */}
        <AddQuestion />
        <List />
      {/* </Grid> */}
    </Container>
  );
}

export default App;
