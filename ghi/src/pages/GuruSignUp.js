import React, { useState } from "react";
import { Grid, Typography, Button, TextField, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useToken } from "../Auth";

const SignUp = () => {
  const [username, setUserName] = useState("");
  const [password, setpassword] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const navigate = useNavigate();
  const token = useToken();
  const signup_guru = token[7]

  const handleSubmit = async (event) => {
    console.log("guru signup submit");
    event.preventDefault();
    await signup_guru(username, password, description, price);
    console.log({ username, password, description, price });
  };

  return (
    <Grid container>
    <Box component="form">
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="h5">Create a Guru Account</Typography>
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
        <TextField
          label="Description"
          name="description"
          aria-label="description"
          onChange={(event) => setDescription(event.target.value)}
        />

        <TextField
          label="Price"
          name="price"
          aria-label="price"
          onChange={(event) => setPrice(event.target.value)}
        />
        
          <Button variant="contained" onClick={handleSubmit}>
            Create
          </Button>
      
        <Grid item container alignItems="center" justifyContent="center">
          <Grid item>
            <Typography>Already have an account?</Typography>
          </Grid>
          <Grid item>
            <Button variant="contained" onClick={() => navigate("/login-guru")}>
              Login
            </Button>
          </Grid>
        </Grid>
      </Grid>
      </Box>
    </Grid>
  );
};

export default SignUp;

// POST /gurus port 8000
