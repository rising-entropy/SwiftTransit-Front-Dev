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

export default function UserSignup() {


   const [thePassword, setThePassword] = useState("")
   const [theUsername, setTheUsername] = useState("")
   const [theName, setTheName] = useState("")
   const [theEmail, setTheEmail] = useState("")
   const [thePhoneNo, setThePhoneNo] = useState("")
   const [theAdhaar, setTheAdhaar] = useState("")

    const submitForm = e => {
      e.preventDefault();
      const thatURL = getURL() + "user-registration";
      console.log(theUsername)
      axios.post(
          thatURL,
          {
              username: theUsername,
              password: thePassword,
              name: theName,
              phoneNumber: thePhoneNo,
              aadharNumber: theAdhaar,
              email: theEmail
            
          },
          {
              headers: {
                  "Content-Type": "application/json",
              },
          }
      )
      .then((response) => {
          console.log(response);
         if (response.status === 201) {
              const data = response.data;
             console.log("signup");
              localStorage.setItem("token", data.token);
              window.location = "/";
              }
      })
      .catch((err) => {
          
          if(err.status==="Request failed with status code 401")
          {
            console.log(err.message);
            alert("User already exists");
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
            marginTop: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar> */}
          <Typography component="h1" variant="h5">
            Sign Up
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
              onChange={(e)=>setTheUsername(e.target.value)} 
              value={theUsername}          
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

            <TextField
              margin="normal"
              required
              fullWidth
              name="email"
              label="Email"
              type="email"
              id="email"
              onChange={(e)=>setTheEmail(e.target.value)} value={theEmail}   
              />

            <TextField
              margin="normal"
              required
              fullWidth
              name="name"
              label="Name"
              type="name"
              id="name"
              onChange={(e)=>setTheName(e.target.value)} value={theName}   
              />

            <TextField
              margin="normal"
              required
              fullWidth
              name="phoneNumber"
              label="Phone Number"
              type="phoneNumber"
              id="phoneNumber"
              onChange={(e)=>setThePhoneNo(e.target.value)} value={thePhoneNo}   
              />

            <TextField
              margin="normal"
              required
              fullWidth
              name="aadharNumber"
              label="Aadhar Number"
              type="aadharNumber"
              id="aadharNumber"
              onChange={(e)=>setTheAdhaar(e.target.value)} 
              value={theAdhaar}   
              />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              value="Signup"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            
          </Box>
        </Box>
        
      </Container>
    </ThemeProvider>
            </>
  )
}
