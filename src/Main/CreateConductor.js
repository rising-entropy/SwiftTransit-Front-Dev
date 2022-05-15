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

export default function CreateConductor() {


   const [thePassword, setThePassword] = useState("")
   const [theUsername, setTheUsername] = useState("")
   const [theName, setTheName] = useState("")
   const [theLicense, setTheLicense] = useState("")
   const [thePhoneNo, setThePhoneNo] = useState("")

    const submitForm = e => {
      e.preventDefault();
      const thatURL = getURL() + "create-conductor";
      console.log(theUsername)
      axios.post(
          thatURL,
          {
              username: theUsername,
              password: thePassword,
              name: theName,
              phoneNumber: thePhoneNo,
              conductorLicenseNumber: theLicense
            
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
             console.log("Created");
             alert("Created successfully");
              window.location = "/admin-dashboard";
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
            marginTop: 3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Create Conductor
          </Typography>
          <Box component="form" onSubmit={submitForm} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoFocus
              onChange={(e)=>setTheUsername(e.target.value)} 
              value={theUsername}          
              />
            <TextField
              margin="normal"
              required
              fullWidth
              name="Name"
              label="Name"
              id="Name"
              onChange={(e)=>setTheName(e.target.value)} value={theName}   
              />

            <TextField
              margin="normal"
              required
              fullWidth
              name="License"
              label="License Number"
              id="License"
              onChange={(e)=>setTheLicense(e.target.value)} value={theLicense}   
              />

            <TextField
              margin="normal"
              required
              fullWidth
              name="PhoneNo"
              label="Phone Number"
              id="PhoneNo"
              onChange={(e)=>setThePhoneNo(e.target.value)} value={thePhoneNo}   
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
              value="Signup"
              sx={{ mt: 3, mb: 2 }}
            >
               Create Conductor
            </Button>
            
          </Box>
        </Box>
        
      </Container>
    </ThemeProvider>
            </>
  )
}
