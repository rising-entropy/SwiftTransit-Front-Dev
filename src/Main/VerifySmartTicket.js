import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { QrReader } from 'react-qr-reader';
import { getURL, getToken } from '../utils/index';
import jwt_decode from "jwt-decode";
import Button from '@mui/material/Button';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

var travel_id;

export default function VerifySmartTicket() {

  let { id } = useParams();
  travel_id=id;


    const [data, setData] = useState('');

    const approveTicketHandler = () => {
        console.log(data)
        //bus-travel-ticket/complete-ticket-transaction-by-user-cash
        const thatURL = getURL() + "bus-travel-ticket/validate-ticket";
      axios.post(
          thatURL,
          {
            "smartTicketID": data,
        },
          {
              headers: {
                  "Content-Type": "application/json",
              },
          }
      )
      .then((response) => {
         if (response.status === 201) {
            alert("Ticket is Valid!")
            return;
          }
      })
      .catch((err) => {
          alert("Ticket is Invalid!")
          return;
         console.log(err)
         console.log(err.response.data)
         console.log(err.response.message)
         console.log(err.response )
         alert("Some error occurred");
         window.location='/user-dashboard'
         return;
      });
    }

    useEffect(() => {
        const timer = setTimeout(() => {
         setData('')
        }, 1000);
        return () => clearTimeout(timer);
      }, []);

  return (
    <div>
        <>
            <QrReader
                onResult={(result, error) => {
                if (!!result) {
                    setData(result?.text);
                }
                if (!!error) {
                    console.info(error);
                }
                }}
                style={{ width: 'auto', height: 'auto' }}
            />
            {data.length>0 ? <>
            <div>
            <Button variant="contained" onClick={approveTicketHandler}>Approve</Button>
               
            </div>
            </> : <></> }
        </>
    </div>
  )
}
