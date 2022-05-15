import React from 'react';


export default function IndividualBusData(props) {
    let data = props.data
  return (
    <div className='container' style={{'paddingLeft':'30%'}}>
        <h3>Bus Number - {data['_id']}</h3>
        <h4>{data['source']} - {data['destination']}</h4>

        <h4>Stops:</h4>
        <p>{data['stops'].map((e, i)=><>{e}, </>)}</p> 

        <h5>Ticket Prices:</h5>
        <table  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid','width':'70%'}}>
            <tr style={{margin: '10px 5px'}}>
                <tr>Stop 1</tr>
                <tr>Stop 2</tr>
                <tr>Cost</tr>
            </tr>
            {data['ticketPrices'].map((e, i)=><>
            <tr style={{margin: '10px 5px'}}>
                <td>{e['stop1']}</td>
                <td>{e['stop2']}</td>
                <td>{e['cost']}</td>
            </tr>
            </>)}
        </table>
        <p></p>



    </div>
  )
}
