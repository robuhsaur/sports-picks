import React, { useState } from 'react';
import { Grid, makeStyles, Typography, Button, TextField, Box } from "@mui/material"
import { useNavigate } from 'react-router-dom';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const useSyles = makeStyles(() => ({
    mainContainer: {
        height: "100vh",
        backgroundColor: "#FFFFFF"
    }, haveAccountText: {
        color: "#2D333A",
        fontSize: "16px"
    },
    loginBtn: {
        padding: "8px 40px",
        color: "#3A8dFF !important",
        backgroundColor: "white !important",
        marginLeft: "20px !important",
        height: 37,
    },
    fieldContainer: {
        height: "80%",
        padding: "0px 56px 56px !important",
        "& >*": {
            paddingBottom: "24px !important",
        }
    },
    Input: {
        width: "60%",
        color: "#2D333A",
        borderBottomColor: "#2D333A",
        borderBottomWidth: 0.5,
    },
    createBtn: {
        padding: "8px 40px",
        color: "#3A8DFF !important",
        backgroundColor: "#FFFFFF !important",
        marginTop: "20px !important",
        marginBottom: "20px !important",
    }
}))

const LoginGuru = () => {
    const [username, setUserName] = useState("");
    const [password, setpassword] = useState("");
    const [description, setDescription] = useState("");
    const classes = useSyles();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({ username, password, description });
    }

    return (
        <Grid container className={classes.mainContainer}>
            <Grid container direction='column' alignItems='center' justifyContent='center' className={classes.fieldContainer}>
                <Typography variant='h5'>Login To Your Guru Account</Typography>
                <TextField
                    label="Username"
                    name="username"
                    aria-label='username'
                    className={classes.Input}
                    onChange={(event) => setUserName(event.target.value)}
                />
                <TextField
                    label="Password"
                    name="password"
                    aria-label='password'
                    type={"password"}
                    inputProps={{ minLength: 6 }}
                    className={classes.Input}
                    onChange={(event) => setpassword(event.target.value)}
                />
                <Box textAlign={"center"}>
                    <Button variant='contained' onClick={handleSubmit} className={classes.createBtn}>Login As Guru</Button>
                </Box>
                <Grid item container alignItems="center" justifyContent="center">
                    <Grid item>
                        <Typography className={classes.haveAccountText}>Don't have an account?</Typography>
                    </Grid>
                    <Grid item>
                        <Button variant='contained' className={classes.loginBtn} onClick={() => navigate("/signup-guru")}>Sign Up As Guru</Button>
                        <Button variant='contained' className={classes.loginBtn} onClick={() => navigate("/signup-user")}>Sign Up User</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default LoginGuru;