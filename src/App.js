import './App.css';
import React, { useState } from 'react';
import { Container, Grid } from '@mui/material';
import AddQuestion from './components/AddQuestion';
import List from './components/List';

function App() {

  let questions = [
    {
      url: 'https://leetcode.com/problems/game-of-life/',
      site: 'Leetcode',
      name: 'Game of Life',
      difficulty: '',
      status: '',
      notes: '',
    },
    {
      url: 'https://leetcode.com/problems/set-matrix-zeroes/',
      site: 'Leetcode',
      name: 'Set Matrix Zeroes',
      difficulty: '',
      status: '',
      notes: '',
    },
  ];

  const [list, setList] = useState(questions);

  const addQuestion = (question) => {
    setList([...list, question]);
  }

  return (
    <Container className="App" maxWidth="md">
      {/* <Grid container sx={{border:'1px solid green'}}> */}
        <AddQuestion addQuestion={addQuestion} />
        <List questions={list} />
      {/* </Grid> */}
    </Container>
  );
}

export default App;
