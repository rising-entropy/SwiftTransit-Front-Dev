import * as React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { getURL, getToken } from '../utils/index';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import Generator from './Components/Generator';

const theme = createTheme();

var travel_id;

export default function BookPassCash() {

  let { id } = useParams();
    travel_id=id;


   const [theQty, setTheQty] = useState(1)
   const [theTicketID, setTheTicketID] = useState("")

    const submitForm = e => {
      e.preventDefault();
      const thatURL = getURL() + "bus-travel-ticket/create-ticket-by-conductor-cash";
      axios.post(
          thatURL,
          {
            "busTravelID": travel_id,
            "quantity": theQty,
            "isDayPass": true,
            "price": 50*theQty,
            "source": "",
            "destination": "",
            "perTicketCost": 50
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
            setTheTicketID(data['id'])
            return;
          }
      })
      .catch((err) => {
         console.log(err)
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
            Book Daily Pass With Cash
          </Typography>
          <Box component="form" onSubmit={submitForm} noValidate sx={{ mt: 1 }}>
            
          <TextField inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} onChange={(e)=>{
            setTheQty(e.target.value)
          }} required={true} value={theQty} label="Quantity" />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              value="Signup"
              sx={{ mt: 2, mb: 3 }}
            >
              Book
            </Button>
          
          </Box>
          {theTicketID.length>0 ? <>
            <Generator text={theTicketID} />
          </> : <></>}
          
        </Box>
        
      </Container>
    </ThemeProvider>
            </>
  )
}
