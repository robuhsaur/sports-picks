import React, { useState } from 'react';
import { Grid, Typography, Button, TextField, Box } from "@mui/material"
import { useNavigate } from 'react-router-dom';
import { useToken } from '../Auth'



const SignUpUser = () => {
    const [user_name, setUserName] = useState("");
    const [password, setpassword] = useState("");
    const token = useToken();
    const signup = token[3]
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        signup(user_name, password)
        console.log({ user_name, password });
    }

    return (
        <Grid>

            <Grid container direction='column' alignItems='center' justifyContent='center' >
                <Typography variant='h5'>Create a User Account</Typography>
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
                    <Button variant='contained' onClick={handleSubmit} >Create User</Button>
                </Box>
                <Grid item container alignItems="center" justifyContent="center">
                    <Grid item>
                        <Typography >Already have an account?</Typography>
                    </Grid>
                    <Grid item>
                        <Button variant='contained' onClick={() => navigate("/login-user")}>Login as User</Button>
                        <Button variant='contained' onClick={() => navigate("/signup-guru")}>Guru Sign Up</Button>
                    </Grid>
                </Grid>
            </Grid>

        </Grid>
    )
}

export default SignUpUser;