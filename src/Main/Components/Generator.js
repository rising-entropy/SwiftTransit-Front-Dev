import React, {useState, useRef, useEffect} from 'react';
import { TextField, Button } from '@mui/material';
import QRCode from "qrcode";

export default function Generator(props) {
  const text = props.text;
  const [imageUrl, setImageUrl] = useState('');
  const generateQrCode = async () => {
    try {
          const response = await QRCode.toDataURL(text);
          setImageUrl(response);
    }catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    generateQrCode();
  }, [])
  return (
    <container>
      {imageUrl ? (
        <a href={imageUrl} download>
            <img src={imageUrl} alt="img" />
      </a>) : null}
  </container>
  )
}
