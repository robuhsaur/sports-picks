import React, { useState } from "react";
import { Grid, Typography, Button, TextField, Box } from "@mui/material";
import { useToken } from "../Auth";

const LoginGuru = () => {
  const [username, setUserName] = useState("");
  const [password, setpassword] = useState("");
  const token = useToken();
  const login_guru = token[5]


  const handleSubmit = (event) => {
    event.preventDefault();
    login_guru(username, password);
    console.log({ username, password });
  };

  return (
    <Grid container>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="h5">Login To Your Guru Account</Typography>
        <TextField
          label="Username"
          name="username"
          aria-label="username"
          onChange={(event) => setUserName(event.target.value)}
        />
        <TextField
          label="Password"
          name="password"
          aria-label="password"
          type={"password"}
          inputProps={{ minLength: 6 }}
          onChange={(event) => setpassword(event.target.value)}
        />
        <Box textAlign={"center"}>
          <Button variant="contained" onClick={handleSubmit}>
            Login As Guru
          </Button>
        </Box>
        <Grid item container alignItems="center" justifyContent="center">
          <Grid item>
            <Typography>Don't have an account?</Typography>
          </Grid>
          <Grid item>
            <Button variant="contained">Sign Up As Guru</Button>
            <Button variant="contained">Sign Up User</Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LoginGuru;
