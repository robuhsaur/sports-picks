import React, { useState } from 'react';
import { Grid, makeStyles, Typography, Button, TextField, Box } from "@mui/material"
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { useNavigate } from 'react-router-dom';
import { useToken } from '../Auth'

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
        backgroundColor: "#FFFFFF !important",
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
        color: "#2D333A !important",
        borderBottomColor: "#2D333A !important",
        borderBottomWidth: 0.5,
    },
    createBtn: {
        padding: "8px 40px",
        color: "#3A8DFF !important",
        backgroundColor: "#FFFFFF !important",
        marginTop: "20px",
        marginBottom: "20px",
    }
}))

const SignUpUser = () => {
    const [username, setUserName] = useState("");
    const [password, setpassword] = useState("");
    const [token, login] = useToken();
    const classes = useSyles();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        login(username, password)
        console.log({ username, password });

    }

    return (
        <Grid container className={classes.mainContainer}>

            <Grid container direction='column' alignItems='center' justifyContent='center' className={classes.fieldContainer}>
                <Typography variant='h5'>Login User Account</Typography>
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
                    <Button variant='contained' onClick={handleSubmit} className={classes.createBtn}>Log In</Button>
                </Box>
                <Grid item container alignItems="center" justifyContent="center">
                    <Grid item>
                        <Typography className={classes.haveAccountText}>Don't have an Account?</Typography>
                    </Grid>
                    <Grid item>
                        <Button variant='contained' className={classes.loginBtn} onClick={() => navigate("/signup-user")}>Create User</Button>
                        <Button variant='contained' className={classes.loginBtn} onClick={() => navigate("/signup-guru")}>Guru Sign Up</Button>
                    </Grid>
                </Grid>
            </Grid>

        </Grid>
    )
}

export default SignUpUser;