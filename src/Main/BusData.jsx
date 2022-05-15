import React, {useEffect, useState} from 'react'
import axios from 'axios'
import jwt_decode from "jwt-decode";
import { getURL, getToken } from '../utils/index';
import IndividualBusData from './Components/IndividualBusData';


export default function BusData() {

    const [showScreen, setShowScreen] = useState(false);
    const [busData, setBusData] = useState([]);


    useEffect(()=>{
        axios.get(`${getURL()}buses/buses`)
        .then((res)=>{
          let data = res.data;
          console.log(data)
          setBusData(data)
          setShowScreen(true)
        })
        .catch((err)=>{
          console.log(err)
        })
      }, [])

  return (
    <>
        { showScreen ?
            <>
               <h3  style={{'paddingLeft':'30%'}}>Bus Data</h3>
               {busData.map((e, i)=>{
                   return <IndividualBusData data={e} key={i} />
               })}
            </>
            : <>Loading</>
        }
        
    </>
  )
}
