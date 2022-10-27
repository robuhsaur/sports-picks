import React, { useState } from 'react';
import { Grid, Typography, Button, TextField, Box } from "@mui/material"
import { useNavigate } from 'react-router-dom';
import { useToken } from '../Auth'



const SignUpUser = () => {
    const [username, setUserName] = useState("");
    const [password, setpassword] = useState("");
    const navigate = useNavigate();
    const token = useToken();
    const login = token[1]

    const handleSubmit = (event) => {
        event.preventDefault();
        login(username, password)
        console.log({ username, password });

    }

    return (
        <Grid container >

            <Grid container direction='column' alignItems='center' justifyContent='center' >
                <Typography variant='h5'>Login User Account</Typography>
                <TextField
                    label="Username"
                    name="username"
                    aria-label='username'
                    onChange={(event) => setUserName(event.target.value)}
                />
                <TextField
                    label="Password"
                    name="password"
                    aria-label='password'
                    type={"password"}
                    inputProps={{ minLength: 6 }}
                    onChange={(event) => setpassword(event.target.value)}
                />
                <Box textAlign={"center"}>
                    <Button variant='contained' onClick={handleSubmit} >Log In</Button>
                </Box>
                <Grid item container alignItems="center" justifyContent="center">
                    <Grid item>
                        <Typography >Don't have an Account?</Typography>
                    </Grid>
                    <Grid item>
                        <Button variant='contained' onClick={() => navigate("/signup-user")}>Create User</Button>
                        <Button variant='contained' onClick={() => navigate("/signup-guru")}>Guru Sign Up</Button>
                    </Grid>
                </Grid>
            </Grid>

        </Grid>
    )
}

export default SignUpUser;