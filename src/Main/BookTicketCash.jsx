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
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';


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

export default function BookTicketCash() {

  let { id } = useParams();
    travel_id=id;

    let getPriceOfJourney = (source, destinaton, ticketPrices) => {
      let s1 = source+destination;
      let s2 = destination+source
      let combined = [s1,s2]
      for(let i=0; i<ticketPrices.length; i++)
      {
        let ss = ticketPrices[i]['stop1']+ticketPrices[i]['stop2']
        if(combined.includes(ss))
        {
          return parseInt(ticketPrices[i]['cost'])
        }
      }
    }

   const [theQty, setTheQty] = useState(1)
   const [theTicketID, setTheTicketID] = useState("")

    const submitForm = e => {
      e.preventDefault();

      if(source == '')
      {
        alert("Please select a source.");
        return;
      }

      if(destination == '')
      {
        alert("Please select a destination.");
        return;
      }

      if(destination == source)
      {
        alert("Source and Destination cannot be the same.");
        return;
      }

      let thePrice = getPriceOfJourney(source, destination, theBusData['ticketPrices']);


      const thatURL = getURL() + "bus-travel-ticket/create-ticket-by-conductor-cash";
      axios.post(
          thatURL,
          {
            "busTravelID": travel_id,
            "quantity": theQty,
            "isDayPass": false,
            "price": thePrice*theQty,
            "source": source,
            "destination": destination,
            "perTicketCost": thePrice
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

  const [theBusData, setTheBusData] = useState({})

  useEffect(()=>{
    const URL = getURL() + "bus-travel/bus-details/"+travel_id
    axios.get(URL)
    .then((res)=>{
      let data = res.data;
      setTheBusData(data)
      setShowScreen(true)
    })
    .catch((err)=>{
      console.log(err)
    })
  }, [])

  const [source, setSource] = useState("")
  const [destination, setDestination] = useState("")

  const [showScreen, setShowScreen] = useState(false)

  return (
    <>{
      showScreen ? <ThemeProvider theme={theme}>
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
            Book Daily Ticket With Cash
          </Typography>
          <Box component="form" onSubmit={submitForm} noValidate sx={{ mt: 1 }}>
            
          <TextField inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} onChange={(e)=>{
            setTheQty(e.target.value)
          }} required={true} value={theQty} label="Quantity" />

          <br />

          <Select
          labelId=""
          id="demo-simple-select"
          value={source}
          label="Source"
          onChange={(e)=>{
            setSource(e.target.value)
          }}
          >
          {theBusData['stops'].map((e,i)=><MenuItem key={i} value={e}>{e}</MenuItem>)}
          
        </Select>

        <br />

        <Select
          labelId=""
          id="demo-simple-select"
          value={destination}
          label="Destination"
          onChange={(e)=>{
            setDestination(e.target.value)
          }}
          >
          {theBusData['stops'].map((e,i)=><MenuItem key={i} value={e}>{e}</MenuItem>)}
        </Select>

          

            <Button
              type="submit"
              fullWidth
              variant="contained"
              value="Signup"
              sx={{ mt: 3, mb: 2 }}
            >
              Book
            </Button>
            
          </Box>
          <br />
          <br />
          {theTicketID.length>0 ? <>
            <Generator text={theTicketID} />
          </> : <></>}
        </Box>
        
      </Container>
    </ThemeProvider> : <></>
    }
            </>
  )
}
