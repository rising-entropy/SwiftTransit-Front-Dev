import React, {useEffect, useState} from 'react'
import { useCallback } from "react";
import useRazorpay from "react-razorpay";
import { getToken, getURL } from '../utils';
import jwt_decode from 'jwt-decode'
import axios from 'axios';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';

export default function AddMoneyToWallet(props) {

  const [amount, setAmount] = useState(0);

  const formSubmitHandler = (e) => {
    e.preventDefault();

    // generate order id
    const token = getToken();
    var decoded = jwt_decode(token);
    let username = decoded["data"]["data"]["_id"];

    
    // const thatURL = getURL() + "payments/create-order";
    const thatURL = getURL()+"payments/create-order";
      axios.post(
          thatURL,
          {
            amount: parseInt(amount),
            userID: username,
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
             let orderID = data['id'];
             handlePayment(orderID, amount, username)
          }
      })
      .catch((err) => {
        console.log(err)
        console.log(err.response)
         alert("Some Error Occurred");
      });
  }

  const Razorpay = useRazorpay();

  const handlePayment = useCallback((orderID, amount, username) => {
    // const order = await createOrder(params);

    const options = {
      key: `rzp_test_g7pE78nODZSuCE`,
      amount: amount*100,
      currency: "INR",
      name: "Swift Transit",
      description: "Fill your Wallet for Ticket Payments",
      image: "https://firebasestorage.googleapis.com/v0/b/contrivers-project-assets.appspot.com/o/ST%20(2).png?alt=media&token=ff066467-21bc-45d4-bb5e-2129bf44b1a6",
      order_id: orderID,
      handler: async(res) => {
        if("razorpay_payment_id" in res)
        {
          //success
          const thatURL = getURL()+"payments/add-to-wallet";
          axios.post(
              thatURL,
              {
                amount,
                userID: username,
                razorpay_payment_id: res['razorpay_payment_id'],
                razorpay_order_id: res['razorpay_order_id'],
                razorpay_signature: res['razorpay_signature']
              },
              {
                  headers: {
                      "Content-Type": "application/json",
                  },
              }
          )
          .then((response) => {
            if (response.status === 201) {
                alert("Wallet Amount Added Successfully!");
                window.location.reload();
            }
          })
          .catch((err) => {
            console.log(err)
            console.log(err.response)
            alert("Some Error Occurred");
          });
        }
        else
        {
          //failure
          alert("Payment Failed!");
          window.location.reload();
        }
      },
      prefill: {
        name: "Devang Kamble",
        email: "devangkamble20@gmail.com",
        contact: "9422684175",
      },
      notes: {
        address: "PML Office, Pune",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzpay = new Razorpay(options);
    rzpay.open();
  }, [Razorpay]);

  return (
    <div className="App">
      <form onSubmit={formSubmitHandler}>
      <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            value={amount}
            onChange={(e)=>{
              setAmount(e.target.value)
            }}
            startAdornment={<InputAdornment position="start">Rs.</InputAdornment>}
            label="Amount" required
          />
          <br></br>
        <Button variant="contained" type="submit">Pay Now</Button>
       
      </form>
     
    </div>
  );
}