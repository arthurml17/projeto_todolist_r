import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';

export default function Form(){
    return (
        <Paper elevation={13} style={{padding:"1em", margin:"2em"}}>
            <div style={{display:"flex", justifyContent:"center"}}>
                <TextField id="outlined-basic" label="Task" variant="outlined" fullWidth margin="1em"/>
                <Button variant="text">Add</Button>
            </div>
        </Paper>                
    )
}