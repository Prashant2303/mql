import './App.css';
import React, { useState } from 'react';
import { Container } from '@mui/material';
import AddQuestion from './components/AddQuestion';
import List from './components/List';
import PrimarySearchAppBar from './components/AppBar';
import { v4 as uuidv4 } from 'uuid';
function App() {

  let questions = [
    {
      id: 1,
      url: 'https://leetcode.com/problems/two-sum/',
      site: 'Leetcode',
      name: 'Two Sum',
      difficulty: 'Easy',
      status: 'Done',
      notes: '',
    },
    {
      id: 2,
      url: 'https://leetcode.com/problems/set-matrix-zeroes/',
      site: 'Leetcode',
      name: 'Set Matrix Zeroes',
      difficulty: 'Medium',
      status: 'Revise',
      notes: 'Use variable for 0th col, traverse inner mat, if a cell is 0, mark 0th cell in its row n col to 0. then traverse, check with first row n col n fill',
    },
    {
      id: 3,
      url: 'https://leetcode.com/problems/game-of-life/',
      site: 'Leetcode',
      name: 'Game of Life',
      difficulty: 'Hard',
      status: 'Not Attempted',
      notes: '',
    },
  ];

  const [list, setList] = useState(questions);

  const addQuestion = (question) => {
    question.id = uuidv4();
    question.date = new Date();
    console.log(question);
    setList([question, ...list]);
  }

  return (
    <Container className="App" maxWidth="md">
      <PrimarySearchAppBar />
      <AddQuestion addQuestion={addQuestion} />
      <List questions={list} />
      <button onClick={()=>console.log('Array', list)}>List</button>
    </Container>
  );
}

export default App;
