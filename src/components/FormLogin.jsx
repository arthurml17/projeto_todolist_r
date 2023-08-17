import React from 'react'
import Paper from '@mui/material/Paper';
import loginSvg from 'C:/Users/meloa/projetoTodoListR/projeto_todolist_r/src/assets/login.svg'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function FormLogin(){
    const [email, setEmail] = useState("");
    const [passowrd, setPass] = useState("");

    return (
        <Paper elevation={13} style={{padding:"2em", margin:"2em"}}>
            <div className="container">
                <div className="container-login">
                    <div className="wrap-login">
                        <form action="" className="login-form">
                            <span className="login-form-title" style={{display:"flex", justifyContent:"center", marginTop:"1rem", marginBottom:"1rem"}}>
                                <img src={loginSvg} alt="user logo" />
                            </span>
                            <TextField 
                                value={email} 
                                onChange={e => setEmail(e.target.value)} 
                                id="outlined-basic" label="e-mail" variant="outlined" type='email' fullWidth 
                                style={{marginTop:"1rem", marginBottom:"1rem"}}
                            />          
                            <TextField 
                                value={passowrd} 
                                onChange={e => setPass(e.target.value)} 
                                id="outlined-basic" label="password" variant="outlined" type='password' fullWidth 
                                style={{marginTop:"1rem", marginBottom:"1rem"}
                            } />

                            <Button variant="contained" fullWidth style={{marginTop:"1rem", marginBottom:"0.5rem", backgroundColor:"black"}}>Login</Button>
                            <Button variant="text" fullWidth style={{marginTop:"0.5rem", marginBottom:"1rem", color:"black", outlineColor:"black"}}>Create a account</Button>
                            
                        </form>
                    </div>
                </div>
            </div>
        </Paper>                
    )
}