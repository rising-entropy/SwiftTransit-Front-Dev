import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { QrReader } from 'react-qr-reader';
import { getURL, getToken } from '../utils/index';
import jwt_decode from "jwt-decode";
import Button from '@mui/material/Button';

import TextField from '@mui/material/TextField';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

var travel_id;
export default function VerifySMSTicket() {

  let { id } = useParams();
  travel_id=id;

  const formSubmitHandler = (e) => {
    e.preventDefault();
      const thatURL = getURL() + "bus-travel-ticket-sms/validate-ticket";
      axios.post(
          thatURL,
          {
            "smsTicketID": theSMSTicket,
            "travelID": travel_id
        },
        {
            headers: {
                "Content-Type": "application/json",
            },
        }
      )
      .then((response) => {
         if (response.status === 201) {
            alert("Ticket Is Valid!")
            return;
          }
      })
      .catch((err) => {
        alert("Ticket Is Invalid!")
        return;
      });
  }

  const [theSMSTicket, setTheSMSTicket] = useState("")
    
  return (
    <div>
        <>
            <form onSubmit={formSubmitHandler}>
             
              <TextField
              margin="normal"
              required
              id="smsTicketID"
              label="SMS UID"
              name="smsTicketID"
              
              autoFocus
              onChange={(e)=>{
                setTheSMSTicket(e.target.value)
              }} value={theSMSTicket}          
              />
             <br/>
              <Button variant="contained" type="submit">Submit</Button>
            </form>
        </>
    </div>
  )
}
