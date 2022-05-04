import React from 'react';
import { Button, Grid, TextField } from '@mui/material';

const EditNote = ({ currentNotes }) => {
    const handleSubmit = (e) => {
        console.log('Note', e.target.value);
    }
    return (
        <Grid container justifyContent="flex-end">
            <TextField
                id="editNote"
                placeholder="Add Notes"
                multiline
                fullWidth
                value={currentNotes}
            />
            <Button variant="contained" disableElevation type="submit" onClick={handleSubmit} sx={{ marginTop: '10px' }}>Save</Button>
        </Grid>
    )
}

export default EditNote;