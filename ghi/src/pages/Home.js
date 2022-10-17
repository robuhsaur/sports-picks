import React from 'react';
import {Box, Button, Grid, makeStyles} from "@material-ui/core";
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles(()=> ({
    container: {
        height: "100vh",
        backgroundColor: "#FFFFFF"
    },
    signupGuruButton:{
        padding: "8px 40px !important",
        color: "#3A8DFF !important",
        backgroundColor: "#FFFFFF !important",
        margin: "0px 5px 0px 5px!important"
    }
}));

const Home = () => {
    const navigate = useNavigate();
    const classes = useStyles();
    return(<Grid container justifyContent='center' alignItems='center' className={classes.container}>
        <Box textAlign={"center"}>
        <Button variant="contained" onClick={()=> navigate("/signup-guru")} className={classes.signupGuruButton}>Sign Up As Guru</Button>
        <Button variant="contained" onClick={()=> navigate("/login-guru")} className={classes.signupGuruButton}>Login As Guru</Button>
        <Button variant="contained" onClick={()=> navigate("/signup-user")} className={classes.signupGuruButton}>Sign Up As User</Button>
        </Box>
    </Grid>)
}

export default Home;
