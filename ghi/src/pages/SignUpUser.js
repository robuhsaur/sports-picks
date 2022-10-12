import React, {useState} from 'react';
import {Grid, makeStyles, Typography,Button, TextField, Box} from "@material-ui/core"
import { useNavigate } from 'react-router-dom';

const useSyles = makeStyles(()=> ({
    mainContainer: {
        height: "100vh",
        backgroundColor: "#FFFFFF"
    },haveAccountText:{
        color: "#2D333A",
        fontSize: "16px"
    },
    loginBtn:{
        padding: "8px 40px",
        color: "#3A8dFF !important",
        backgroundColor: "#FFFFFF !important",
        marginLeft: "20px !important",
        height: 37,
    },
    fieldContainer:{
        height: "80%",
        padding: "0px 56px 56px !important",
        "& >*": {
            paddingBottom: "24px !important",
        }
    },
    Input:{
        width: "60%",
        color: "#2D333A !important",
        borderBottomColor: "#2D333A !important",
        borderBottomWidth: 0.5,
    },
    createBtn:{
        padding: "8px 40px",
        color: "#3A8DFF !important",
        backgroundColor: "#FFFFFF !important",
        marginTop: "20px",
        marginBottom: "20px",
    }
}))

const SignUpUser = () => {
    const [username,setUserName] = useState("");
    const [password,setpassword] = useState("");
    const classes = useSyles();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({username,password});
    }

    return(
        <Grid container className={classes.mainContainer}>
            
            <Grid container direction='column' alignItems='center' justifyContent='center' className={classes.fieldContainer}>
                <Typography variant='h5'>Create a User Account</Typography>
                <TextField 
                label="Username"
                name="username"
                aria-label='username'
                className={classes.Input}
                onChange={(event)=> setUserName(event.target.value)}
                />
                <TextField 
                label="Password"
                name="password"
                aria-label='password'
                type={"password"}
                inputProps={{minLength: 6}}
                className={classes.Input}
                onChange={(event)=> setpassword(event.target.value)}
                />
                <Box textAlign={"center"}>
                    <Button variant='contained' onClick={handleSubmit} className={classes.createBtn}>Create User</Button>
                </Box>
                 <Grid item container alignItems="center" justifyContent="center">
                <Grid item>
                    <Typography className={classes.haveAccountText}>Already have an account?</Typography>
                </Grid>
                <Grid item>
                    <Button variant='contained' className={classes.loginBtn}>Login</Button>
                    <Button variant='contained' className={classes.loginBtn} onClick={()=> navigate("/signup-guru")}>Guru Sign Up</Button>
                </Grid>
            </Grid>
            </Grid>
           
        </Grid>
    )
}

export default SignUpUser;