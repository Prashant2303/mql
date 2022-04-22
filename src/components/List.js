import React from 'react';
import { Grid, TextField, Button, Paper, MenuItem } from '@mui/material';

const List = ({ questions }) => {
    console.log(questions);
    return (
        <Paper className="form" elevation={3} sx={{ padding: '15px', marginTop: '15px' }}>
            <Grid container spacing={2}>    {/* Adding xs and spacing together causes component to shift left */}
                <Grid item xs={6}>
                    {
                        questions.map((question) => <div><a href={question.url} target='_blank'>{question.name}</a> </div>)
                    }
                </Grid>
            </Grid>
        </Paper>
    )
}

export default List;