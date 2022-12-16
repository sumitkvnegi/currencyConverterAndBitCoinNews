import React from 'react'

const ExchangeRate = ({exchangedData}) => {
  return (
    <div className='exchange-rate'>
     <h3>Exchange Rate</h3>   
     <h1 style={{color:"#006611"}}>{exchangedData.exchangeRate}</h1>
     <p style={{color: "#dddd00"}}>{exchangedData.primaryCurrency} to {exchangedData.secondaryCurrency}</p>
    </div>
  )
}

export default ExchangeRate