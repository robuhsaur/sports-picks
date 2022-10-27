import React from 'react';
import { Box, Button, Grid } from "@mui/material";
import { useNavigate } from 'react-router-dom';


const Home = () => {
    const navigate = useNavigate();
    return (<Grid container justifyContent='center' alignItems='center' >
        <Box textAlign={"center"}>
            <Button variant="contained" onClick={() => navigate("/signup-guru")}>Sign Up As Guru</Button>
            <Button variant="contained" onClick={() => navigate("/login-guru")}>Login As Guru</Button>
            <Button variant="contained" onClick={() => navigate("/signup-user")}>Sign Up As User</Button>
            <Button variant="contained" onClick={() => navigate("/login-user")}>Log In As User</Button>
        </Box>
    </Grid>)
}

export default Home;
