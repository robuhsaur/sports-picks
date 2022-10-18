import React, { useState } from 'react';
import { Grid, Typography, Button, TextField, Box } from "@mui/material"


const SignUp = () => {
    const [username, setUserName] = useState("");
    const [password, setpassword] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({ username, password, description });
    }

    return (
        <Grid container>

            <Grid container direction='column' alignItems='center' justifyContent='center' >
                <Typography variant='h5'>Create a Guru Account</Typography>
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
                <TextField
                    label="Description"
                    name="description"
                    aria-label='description'
                    onChange={(event) => setDescription(event.target.value)}
                />
                <Box textAlign={"center"}>
                    <Button variant='contained' onClick={handleSubmit} >Create</Button>
                </Box>
                <Grid item container alignItems="center" justifyContent="center">
                    <Grid item>
                        <Typography >Already have an account?</Typography>
                    </Grid>
                    <Grid item>
                        <Button variant='contained' >Login</Button>
                    </Grid>
                </Grid>
            </Grid>

        </Grid>
    )
}

export default SignUp;


// POST /gurus port 8000