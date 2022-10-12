import React, { useState } from 'react';
import { Grid, makeStyles, Typography, Button, TextField, Box } from "@material-ui/core"

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
        color: "#3A8dFF",
        backgroundColor: "white",
        marginLeft: 20,
        height: 37,
    },
    fieldContainer: {
        height: "80%",
        padding: "0px 56px 56px",
        "& >*": {
            paddingBottom: "24px",
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
        color: "#3A8DFF",
        backgroundColor: "#FFFFFF",
        marginTop: 20,
        marginBottom: 20,
    }
}))

const SignUp = () => {
    const [username, setUserName] = useState("");
    const [password, setpassword] = useState("");
    const [description, setDescription] = useState("");
    const classes = useSyles();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({ username, password, description });
    }

    return (
        <Grid container className={classes.mainContainer}>

            <Grid container direction='column' alignItems='center' justifyContent='center' className={classes.fieldContainer}>
                <Typography variant='h5'>Create a Guru Account</Typography>
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
                <TextField
                    label="Description"
                    name="description"
                    aria-label='description'
                    className={classes.Input}
                    onChange={(event) => setDescription(event.target.value)}
                />
                <Box textAlign={"center"}>
                    <Button variant='contained' onClick={handleSubmit} className={classes.createBtn}>Create</Button>
                </Box>
                <Grid item container alignItems="center" justifyContent="center">
                    <Grid item>
                        <Typography className={classes.haveAccountText}>Already have an account?</Typography>
                    </Grid>
                    <Grid item>
                        <Button variant='contained' className={classes.loginBtn}>Login</Button>
                    </Grid>
                </Grid>
            </Grid>

        </Grid>
    )
}

export default SignUp;
