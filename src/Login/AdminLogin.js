import * as React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { getURL } from '../utils/index';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme();

export default function UserLogin() {


   const [thePassword, setThePassword] = useState("")
   const [theUsername, setTheUsername] = useState("")

    const submitForm = e => {
      e.preventDefault();
      const thatURL = getURL() + "admin-login";
      console.log(theUsername)
      axios.post(
          thatURL,
          {
              username: theUsername,
              password: thePassword,
          },
          {
              headers: {
                  "Content-Type": "application/json",
              },
          }
      )
      .then((response) => {
         if (response.status === 201) {
              const data = response.data;
             console.log("login");
              localStorage.setItem("token", data.token);
              window.location = "/admin-dashboard";
              }
      })
      .catch((err) => {
          
          if(err.response.status==404)
          {
            console.log(err.message);
            alert("Invalid credentials");
          }
          
      });
  };

  return (
    <>
     <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={submitForm} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="email"
              autoFocus
              onChange={(e)=>setTheUsername(e.target.value)} value={theUsername}          
              />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e)=>setThePassword(e.target.value)} value={thePassword}   
              />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                
              </Grid>
              <Grid item>
                
              </Grid>
            </Grid>
          </Box>
        </Box>
        
      </Container>
    </ThemeProvider>
            </>
  )
}
