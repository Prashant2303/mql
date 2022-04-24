import React, { useState } from 'react';
import { Grid, TextField, Button, Paper, MenuItem, Select } from '@mui/material';

const Question = ({ question }) => {
    const [showNotes, setShowNotes] = useState(false);
    const handleClick = () => {
        setShowNotes(prevShowNotes => !prevShowNotes);
    }
    
    const [state, setState] = useState(question);
    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value });
    }
    
    return (
        <Grid container spacing={1} alignItems="center" marginBottom="10px">
            <Grid item xs={5.8}>
                <a href={question.url} target='_blank' rel="noreferrer">{question.name}</a>
            </Grid>
            <Grid item xs={2}>
                <TextField
                    select
                    id="difficulty"
                    name="difficulty"
                    value={state.difficulty}
                    onChange={handleChange}
                    fullWidth
                    size="small"
                    sx={{backgroundColor:"lightcyan", borderRadius:"4px"}}
                >
                        <MenuItem value="Easy">Easy</MenuItem>
                        <MenuItem value="Medium">Medium</MenuItem>
                        <MenuItem value="Hard">Hard</MenuItem>
                </TextField>
            </Grid>
            <Grid item xs={3}>
                <TextField
                    select
                    id="status"
                    name="status"
                    value={state.status}
                    onChange={handleChange}
                    fullWidth
                    size="small"
                >
                        <MenuItem value="Not Attempted">Not Attempted</MenuItem>
                        <MenuItem value="Revise">Revise</MenuItem>
                        <MenuItem value="Done">Done</MenuItem>
                </TextField>
            </Grid>
            <Grid item xs={1}>
                <Button variant="outlined"  onClick={handleClick}>Notes</Button>
            </Grid>
            {
                showNotes && <Grid item xs={12} borderLeft="2px solid blue" marginLeft="7px">
                    {question.notes}
                </Grid>
            }
        </Grid>
    )
}

export default Question;
