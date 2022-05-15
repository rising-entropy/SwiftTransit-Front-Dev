import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';
import adapter from 'webrtc-adapter';

export default function Scanner(props){
  const [data, setData] = useState('No result');

  return (
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
        
        style={{ width: '80vw', height: '80vh' }}
      />
      <p>{data}</p>
    </>
  );
};
